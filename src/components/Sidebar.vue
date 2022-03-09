<template>
  <div id="sidebar">
    <q-list>
      <q-item>Inbox</q-item>
      <q-item>Favorite</q-item>
    </q-list>
    <q-list>
      <q-item-label>Wallet</q-item-label>
      <q-item>Gold Coins: 0</q-item>
    </q-list>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Sidebar",
});
</script>

<style scoped>
#sidebar {
  position: absolute;
  height: 100vh;
  width: 300px;
  background: #444;
  color: #eee;
}
</style>
