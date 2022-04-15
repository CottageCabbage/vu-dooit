<template>
  <div class="flexColumnContainer" id="profileContainer">
    <div id="profileBanner">
      <q-btn
        icon="account_circle"
        flat
        id="profilePicture"
        @click="profile.changeProfilePicture"
      />
    </div>
    <div id="profileInfo">
      <p id="username">{{ profile.username }}</p>
      <div id="desc">{{ profile.description }}</div>
      <div style="margin-top: 50px">
        Information about projects and tasks should be shown here. <br />
        Make the username and description be editable. <br />
        Kinda harder, but make profile picture a thing later on

        <br />

        <li v-for="friend in friends" :key="friend.name">
          Friend:
          {{ friend.name }}
        </li>

        {{ status }}

        <div>
          <input type="text" v-model="testing" />
          <button @click="testingDoThing()">Dothing</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
import { useUserStore } from 'stores/UserStore.js';
import { db } from '../db';
import { liveQuery } from 'dexie';
import { useObservable } from '@vueuse/rxjs';

export default defineComponent({
  setup() {
    return {
      db,
      profile: useUserStore(),
      testing: ref('aaa'),
      status: ref(''),
      friends: useObservable(liveQuery(() => db.friends.toArray())),
    };
  },
  methods: {
    async testingDoThing() {
      try {
        const id = await db.friends.add({
          name: this.testing,
        });
        this.status = `Friend ${this.testing} added. Got id ${id}`;

        this.testing = '';
      } catch (error) {
        this.status = `failed to add ${this.testing}: ${error}`;
      }
    },
  },
});
</script>

<style lang="scss">
#profileContainer {
  width: 100%;

  #profileBanner {
    width: 100%;
    height: 150px;
    background: #6a6;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    #profilePicture {
      transform: scale(2.5);

      &:hover {
        background: transparent;
        background-color: transparent;
        * {
          background: #0000;
          background-color: transparent;
        }
      }
    }
  }

  #profileInfo {
    text-align: center;
    #username {
      text-align: center;
      margin: 0;
      font-size: 2.2rem;
    }
  }
}
</style>
