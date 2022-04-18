<template>
  <div class="flexColumnContainer" id="profileContainer">
    <div id="profileBanner">
      <q-icon name="account_circle" id="profilePicture" />
    </div>
    <div id="profileInfo">
      <p id="username">{{ profile.username }}</p>
      <div id="bio">{{ profile.bio }}</div>
      <div style="margin-top: 50px">
        Information about projects and tasks should be shown here. <br />
        Make the username and description be editable. <br />
        Kinda harder, but make profile picture a thing later on

        <br />
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import { useUserStore } from 'stores/UserStore.js';

export default defineComponent({
  setup() {
    return {
      profile: useUserStore(),
    };
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
      transform: scale(1.2);
      font-size: 4.5rem;
      margin-bottom: -10px;

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
    #bio {
      font-size: 1rem;
    }
  }
}
</style>
