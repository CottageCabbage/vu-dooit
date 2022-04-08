<template>
  <div class="flexColumnContainer">
    <header class="flexRowContainer">
      <span id="logo">VUDOOIT</span>

      <q-space />

      <q-btn dense flat icon="add" />
      <q-btn-dropdown flat dense>
        <div
          style="
            padding: 5px;
            width: 150px;
            display: flex;
            flex-direction: column;
          "
        >
          <q-btn
            flat
            label="Edit Profile"
            style="margin: 0 auto 0 auto"
            @click="profileDialog = true"
          />
          <q-toggle label="Dark Mode" v-model="nightmode" icon="dark_mode" />
        </div>
      </q-btn-dropdown>
    </header>

    <q-dialog v-model="profileDialog">
      <EditProfileDialog />
    </q-dialog>

    <div class="flexRowContainer">
      <aside>
        <div id="narrowSidebar" class="flexColumnContainer">
          <router-link to="/profile">
            <q-btn dense flat icon="account_circle" />
          </router-link>
          <router-link to="/project">
            <q-btn dense flat icon="task_alt" />
          </router-link>

          <q-btn
            dense
            flat
            :icon="sidebarOpen ? 'chevron_left' : 'chevron_right'"
            @click="toggleSidebar"
            style="margin-top: auto"
          />
          <q-btn dense flat icon="settings" />
        </div>

        <div id="wideSidebar" v-if="sidebarOpen">
          <div
            class="sidebar-linkToProject"
            v-for="(project, index) in data.projects"
            :key="project.id"
          >
            <!-- <router-link :to="'/project/' + project.id">{{
              project.title
            }}</router-link> -->
            <router-link :to="'/project/' + index">{{
              project.title
            }}</router-link>

            <q-space />
            <q-btn dense flat icon="more_vert" />
          </div>
        </div>
      </aside>

      <main>
        <router-view :key="$route.fullPath" />
      </main>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import EditProfileDialog from 'src/components/Dialogs/EditProfileDialog.vue';
import { useProjectStore } from 'src/stores/ProjectStore';

export default defineComponent({
  setup() {
    const sidebarOpen = ref(true);
    const nightmode = ref(false);
    const profileDialog = ref(false);

    return {
      sidebarOpen,
      nightmode,
      profileDialog,
      toggleSidebar() {
        sidebarOpen.value = !sidebarOpen.value;
      },
    };
  },
  components: {
    EditProfileDialog,
  },
  data() {
    return {
      data: useProjectStore(),
    };
  },
});
</script>

<style lang="scss" scoped>
header {
  position: sticky;
  top: 0;
  left: 0;
  width: 100vw;
  height: 35px;
  align-items: center;
  padding: 0 5px 0 30px;
  background: #56b67a;

  #logo {
    color: #dbffdb;
    font-size: 1.15rem;
    font-weight: bolder;
    user-select: none;
  }
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

    .router-link-active {
      border-radius: 50%;
      background: #5856;
    }
  }
  #wideSidebar {
    background: #f9f9f9;
    width: 250px;
    padding: 10px;

    .sidebar-linkToProject {
      display: flex;
      align-items: center;
      font-size: 1.05rem;
      border-bottom: 1px solid #99999999;
      padding-left: 10px;

      & + .sidebar-linkToProject {
        margin-top: 5px;
      }
      .projectIcon {
        margin-right: 5px;
      }
      button {
        opacity: 0.5;
        transform: scale(0.8);
      }
    }
  }
}

main {
  width: 100%;
}
</style>
