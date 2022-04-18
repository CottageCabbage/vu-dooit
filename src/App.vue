<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue';
import { useUserStore } from 'stores/UserStore.js';

export default defineComponent({
  name: 'App',
  data() {
    return {
      userStore: useUserStore(),
    };
  },
  mounted() {
    this.userStore.getUserData();
  },
});
</script>
