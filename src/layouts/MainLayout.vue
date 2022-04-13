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
            dense
            flat
            icon="settings"
            label="Settings"
            @click="settingsDialogOpen = true"
          />
          <q-toggle label="Dark Mode" v-model="nightmode" icon="dark_mode" />
        </div>
      </q-btn-dropdown>
    </header>

    <div class="flexRowContainer">
      <aside>
        <div id="narrowSidebar" class="flexColumnContainer">
          <router-link to="/profile">
            <q-btn dense flat icon="account_circle">
              <q-tooltip
                anchor="top right"
                self="bottom middle"
                :offset="[0, 10]"
              >
                <strong>Profile</strong>
              </q-tooltip>
            </q-btn>
          </router-link>

          <router-link to="/project/0">
            <q-btn dense flat icon="task_alt">
              <q-tooltip
                anchor="top right"
                self="bottom middle"
                :offset="[0, 10]"
              >
                <strong>Tasks</strong>
              </q-tooltip>
            </q-btn>
          </router-link>

          <q-btn
            dense
            flat
            :icon="sidebarOpen ? 'chevron_left' : 'chevron_right'"
            @click="toggleSidebar"
            style="margin-top: auto"
          />
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

    <q-dialog v-model="settingsDialogOpen">
      <settingsDialog />
    </q-dialog>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import settingsDialog from 'src/components/Dialogs/settingsDialog.vue';
import { useProjectStore } from 'src/stores/ProjectStore';

export default defineComponent({
  setup() {
    const sidebarOpen = ref(true);
    const nightmode = ref(false);
    const settingsDialogOpen = ref(false);

    return {
      sidebarOpen,
      nightmode,
      settingsDialogOpen,
      toggleSidebar() {
        sidebarOpen.value = !sidebarOpen.value;
      },
    };
  },
  components: {
    settingsDialog,
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
  z-index: 9;
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
  top: 40px;
  left: 0;
  width: min-content;
  height: calc(100vh - 35px);
  z-index: 9;
  display: flex;
  flex-direction: row;

  border-right: 2px solid #9999;

  #narrowSidebar {
    width: min-content;
    padding: 6px 3px 6px 3px;
    background: #e6e6e6;

    .router-link-active,
    .rt-link-active {
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

      a:hover:not(.router-link-active) {
        color: #76d69a;
        text-decoration: underline;
      }

      .router-link-active {
        color: #56b67a;
      }

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
