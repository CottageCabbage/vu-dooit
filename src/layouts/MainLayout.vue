<template>
  <div class="flexColumnContainer">
    <header class="flexRowContainer">
      <q-btn dense flat icon="expand_more" />
    </header>
    <div class="flexRowContainer">
      <aside>
        <div id="narrowSidebar" class="flexColumnContainer">
          <q-btn dense flat icon="account_circle" />
          <q-btn dense flat icon="task_alt" />
          <q-btn
            dense
            flat
            :icon="sidebarOpen ? 'chevron_left' : 'chevron_right'"
            @click="toggleSidebar"
            style="margin-top: auto"
          />
          <q-btn dense flat icon="settings" />
        </div>
        <div id="wideSidebar" v-if="sidebarOpen">Wide</div>
      </aside>
      asd
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const sidebarOpen = ref(false);

    return {
      sidebarOpen,
      toggleSidebar() {
        sidebarOpen.value = !sidebarOpen.value;
      },
    };
  },
};
</script>

<style lang="scss" scoped>
header {
  width: 100vw;
  height: 35px;
  align-items: center;
  background: #56b67a;
}

aside {
  position: sticky;
  top: 0;
  left: 0;
  width: min-content;
  height: calc(100vh - 35px);
  display: flex;
  flex-direction: row;

  border-right: 2px solid #9999;

  #narrowSidebar {
    width: min-content;
    padding: 6px 3px 6px 3px;
    background: #e6e6e6;
  }
  #wideSidebar {
    background: #f9f9f9;
    width: 250px;
  }
}
</style>
