<template>
  <div class="flexColumnContainer" :class="{ body__dark: nightmode }">
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
          <q-toggle label="Dark Mode" v-model="nightmode" icon="dark_mode" />
          <q-btn
            dense
            flat
            icon="settings"
            style="font-weight: normal; text-transform: none"
            label="Settings"
            @click="settingsDialogOpen = true"
          />
        </div>
      </q-btn-dropdown>
    </header>

    <div class="flexRowContainer">
      <aside>
        <div id="narrowSidebar" class="flexColumnContainer">
          <router-link to="/">
            <q-btn dense flat icon="home">
              <q-tooltip
                anchor="top right"
                self="bottom middle"
                :offset="[0, 10]"
              >
                <strong>Home</strong>
              </q-tooltip>
            </q-btn>
          </router-link>

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
            v-if="this.$route.name !== 'Profile' && this.$route.name !== 'Home'"
          />
        </div>

        <div
          id="wideSidebar"
          v-if="
            sidebarOpen &&
            this.$route.name !== 'Profile' &&
            this.$route.name !== 'Home'
          "
        >
          <div
            class="sidebar-linkToProject"
            v-for="(project, index) in data.projectList"
            :key="project.id"
          >
            <router-link :to="'/project/' + index">{{
              project.title
            }}</router-link>

            <q-space />
            <q-btn-dropdown dense flat dropdown-icon="more_vert">
              <q-list>
                <q-item
                  clickable
                  :disable="project.id === 'inbox'"
                  v-close-popup
                  @click="data.deleteProject(index, project.id)"
                >
                  <q-item-section avatar>
                    <q-avatar icon="delete" color="grey-3" text-color="red-5" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Delete Project</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item
                  clickable
                  :disable="project.id === 'inbox'"
                  v-close-popup
                >
                  <q-item-section avatar>
                    <q-avatar icon="edit" color="grey-3" text-color="black" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Rename Project</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>

          <div id="projectSidebarTools">
            <q-btn
              flat
              icon="create_new_folder"
              @click="newProjectDialogOpen = true"
            >
              <q-tooltip
                anchor="top middle"
                self="bottom middle"
                :offset="[10, 10]"
              >
                Create New Project
              </q-tooltip>
            </q-btn>
          </div>
        </div>
      </aside>

      <main>
        <router-view :key="$route.fullPath" />
      </main>
    </div>

    <!-- DIALOGS -->
    <q-dialog v-model="settingsDialogOpen">
      <SettingsDialog />
    </q-dialog>

    <q-dialog v-model="newProjectDialogOpen">
      <NewProjectDialog :nightmode="nightmode" />
    </q-dialog>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
// Import Dark-mode theme
import 'src/css/themes/dark.scss';
// DIALOGS
import SettingsDialog from 'src/components/Dialogs/settingsDialog.vue';
import NewProjectDialog from 'src/components/Dialogs/NewProjectDialog.vue';
// STORES
import { useProjectStore } from 'src/stores/ProjectStore';
import { useUserStore } from 'src/stores/UserStore';

export default defineComponent({
  setup() {
    const sidebarOpen = ref(true);
    const nightmode = ref(false);
    const settingsDialogOpen = ref(false);
    const newProjectDialogOpen = ref(false);

    return {
      sidebarOpen,
      nightmode,
      settingsDialogOpen,
      newProjectDialogOpen,
      toggleSidebar() {
        sidebarOpen.value = !sidebarOpen.value;
      },
    };
  },
  components: {
    SettingsDialog,
    NewProjectDialog,
  },
  data() {
    return {
      data: useProjectStore(),
      user_data: useUserStore(),
    };
  },
  methods: {
    toggleNightmode() {
      this.user_data.toggleNightmode(this.nightmode);
    },
  },
  watch: {
    nightmode: {
      handler: 'toggleNightmode',
      immediate: true,
    },
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

    .router-link-exact-active,
    .rt-link-active {
      border-radius: 50%;
      background: #5856;
    }
  }
  #wideSidebar {
    position: relative;
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

    #projectSidebarTools {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 35px;
      display: flex;
      align-items: center;
      background: $grey-3;
    }
  }
}

main {
  width: 100%;
}
</style>
