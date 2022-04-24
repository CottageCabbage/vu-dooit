<template>
  <div
    id="layout-container"
    class="flex-col fit"
    :class="{ body__dark: nightmode, body__light: !nightmode }"
  >
    <header class="flex-row">
      <q-space />
      <div class="app-info flex-row non-selectable">
        <q-icon name="done_all" />
        <span>Vu-dooit v1.0.0-beta</span>
      </div>
      <q-space />
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

    <div class="flex-row">
      <aside class="flex-row">
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
// SCSS
import 'src/css/layout.scss';
// Import themes
import 'src/css/themes/dark.scss';
import 'src/css/themes/light.scss';
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
