<template>
  <router-view />
  <Sidebar />
</template>

<script>
import { defineComponent } from "vue";
import Sidebar from "./components/Sidebar.vue";

export default defineComponent({
  name: "App",
  components: {
    Sidebar,
  },
});
</script>
