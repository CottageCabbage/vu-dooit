<template>
  <q-layout
    view="lhh LpR lff"
    container
    style="height: 525px; width: 800px !important; max-width: none"
    :class="nightmode ? 'bg-grey-9' : 'bg-grey-3'"
  >
    <q-splitter v-model="splitterModel" style="height: 525px" disable>
      <template v-slot:before>
        <q-tabs
          v-model="tab"
          vertical
          :class="
            nightmode
              ? 'bg-grey-10 text-light-green-4'
              : 'bg-grey-4 text-light-green-10'
          "
        >
          <q-tab name="profile" icon="manage_accounts" label="Profile" />
          <q-tab name="alarms" icon="palette" label="Appearance" />
          <q-tab name="movies" icon="movie" label="Movies" />
        </q-tabs>
      </template>

      <template v-slot:after>
        <q-tab-panels
          v-model="tab"
          animated
          vertical
          transition-prev="jump-up"
          transition-next="jump-up"
          :class="nightmode ? 'bg-grey-9' : 'bg-grey-3'"
        >
          <q-tab-panel name="profile">
            <div
              class="text-h5 text-center q-mb-md"
              :class="nightmode ? 'text-grey-4' : ''"
            >
              Profile Settings
            </div>
            <q-form
              @submit.prevent="saveChangesToProfile"
              class="flexColumnContainer"
              style="gap: 15px"
            >
              <q-input
                outlined
                v-model="new_username"
                label="Username"
                maxlength="15"
                :dark="nightmode"
              />
              <q-input
                outlined
                v-model="new_bio"
                label="Bio"
                type="textarea"
                :dark="nightmode"
              />
              <q-btn label="Submit" type="submit" color="green" />
            </q-form>

            <q-banner class="bg-green text-white" v-if="showBanner">
              <div class="row">
                <q-space />
                <span style="font-size: 1.2rem">Changes to profile saved!</span>
                <q-space />
                <q-btn
                  flat
                  color="white"
                  label="Dismiss"
                  style="margin-left: auto"
                  @click="showBanner = false"
                />
              </div>
            </q-banner>
          </q-tab-panel>

          <q-tab-panel name="alarms">
            <div class="text-h4 q-mb-md">Alarms</div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
              praesentium cumque magnam odio iure quidem, quod illum numquam
              possimus obcaecati commodi minima assumenda consectetur culpa fuga
              nulla ullam. In, libero.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
              praesentium cumque magnam odio iure quidem, quod illum numquam
              possimus obcaecati commodi minima assumenda consectetur culpa fuga
              nulla ullam. In, libero.
            </p>
          </q-tab-panel>

          <q-tab-panel name="movies">
            <div class="text-h4 q-mb-md">Movies</div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
              praesentium cumque magnam odio iure quidem, quod illum numquam
              possimus obcaecati commodi minima assumenda consectetur culpa fuga
              nulla ullam. In, libero.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
              praesentium cumque magnam odio iure quidem, quod illum numquam
              possimus obcaecati commodi minima assumenda consectetur culpa fuga
              nulla ullam. In, libero.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
              praesentium cumque magnam odio iure quidem, quod illum numquam
              possimus obcaecati commodi minima assumenda consectetur culpa fuga
              nulla ullam. In, libero.
            </p>
          </q-tab-panel>
        </q-tab-panels>
      </template>
    </q-splitter>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useUserStore } from 'stores/UserStore.js';

// const props = defineProps({
//   nightmode: Boolean,
// });

export default defineComponent({
  name: 'settingsDialog',
  props: ['nightmode'],
  setup() {
    return {
      tab: ref('mails'),
      showBanner: ref(false),
      userStore: useUserStore(),
      new_username: ref(''),
      new_bio: ref(''),
    };
  },
  methods: {
    saveChangesToProfile() {
      this.showBanner = true;
      this.userStore.saveUsername(this.new_username);
      this.userStore.saveBiography(this.new_bio);
    },
  },
  mounted() {
    this.new_username = this.userStore.username;
    this.new_bio = this.userStore.bio;
  },
});
</script>

<style lang="scss" scoped>
.q-banner {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
}
</style>
