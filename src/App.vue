<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue';
import { useUserStore } from 'stores/UserStore.js';
import { useProjectStore } from 'stores/ProjectStore';

export default defineComponent({
  name: 'App',
  data() {
    return {
      userStore: useUserStore(),
      projectStore: useProjectStore(),
    };
  },
  async mounted() {
    this.userStore.getUserData();
    this.projectStore.getData();
  },
});
</script>
