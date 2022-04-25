<template>
  <div
    id="layout-container"
    class="flex-col"
    :class="{ body__dark: nightmode, body__light: !nightmode }"
  >
    <header class="flex-row shadow-2">
      <q-space />
      <div class="app-info flex-row non-selectable">
        <q-icon name="done_all" />
        <span>Vu-dooit v1.0.0-beta</span>
      </div>
      <q-space />
      <q-toggle v-model="nightmode" icon="dark_mode" color="green-10" />
    </header>

    <div id="page-container" class="flex-row">
      <aside class="flex-row shadow-5">
        <div id="narrow-sidebar" class="flex-col">
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

          <q-space />

          <q-btn
            dense
            flat
            icon="settings"
            style="font-weight: normal; text-transform: none"
            @click="settingsDialogOpen = true"
          />

          <q-btn
            dense
            flat
            :icon="sidebarOpen ? 'chevron_right' : 'chevron_left'"
            @click="toggleSidebar"
          />
        </div>

        <div
          id="wide-sidebar"
          class="flex-col"
          :style="sidebarOpen ? 'width: 0;' : 'width: 200px'"
        >
          <div class="project-list non-selectable">
            <!-- Link to Inbox -->
            <div class="inbox">
              <router-link :to="'/project/inbox'" class="flex-row">
                <q-icon name="inbox" />
                Inbox
              </router-link>
            </div>

            <div class="project-list-header flex-row">
              <span>Projects</span>
              <q-space />
              <q-btn dense flat icon="add" @click="newProjectDialogOpen = true">
                <q-tooltip
                  anchor="top middle"
                  self="bottom middle"
                  :offset="[10, 10]"
                >
                  Create New Project
                </q-tooltip>
              </q-btn>
            </div>

            <div
              class="flex-row project-link"
              v-for="(project, index) in getUnarchivedNonInbox()"
              :key="project.id"
            >
              <router-link :to="'/project/' + project.id">
                {{ project.title }}
              </router-link>

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
                      <q-avatar
                        icon="delete"
                        color="grey-3"
                        text-color="red-5"
                      />
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
          </div>
        </div>
      </aside>

      <main>
        <router-view :key="$route.fullPath" />
      </main>
    </div>

    <!-- Dialogs -->
    <q-dialog v-model="settingsDialogOpen">
      <SettingsDialog />
    </q-dialog>
    <q-dialog v-model="newProjectDialogOpen">
      <NewProjectDialog :nightmode="nightmode" />
    </q-dialog>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
// Styling
import 'src/css/layout.scss';
import 'src/css/pages.scss';
import 'src/css/themes/dark.scss';
import 'src/css/themes/light.scss';
// Dialogs
import SettingsDialog from 'src/components/Dialogs/settingsDialog.vue';
import NewProjectDialog from 'src/components/Dialogs/NewProjectDialog.vue';
// Stores
import { useProjectStore } from 'src/stores/ProjectStore';
import { useUserStore } from 'src/stores/UserStore';

// ============================= //

// STORES
const data = useProjectStore();
const user_data = useUserStore();

// DIALOGS
const newProjectDialogOpen = ref(false);
const settingsDialogOpen = ref(false);

// TOGGLES
// Sidebar
const sidebarOpen = ref(true);
function toggleSidebar() {
  sidebarOpen.value = !sidebarOpen.value;
}

// Nightmode
const nightmode = ref(false);
function toggleNightmode() {
  user_data.toggleNightmode(nightmode.value);
}
watch(
  nightmode,
  () => {
    toggleNightmode();
  },
  { immediate: true }
);

// DATA
onMounted(() => {
  console.log(data.project_data);
});

function getUnarchivedNonInbox() {
  return data.project_data.filter((project) => project.id !== 'inbox');
}
</script>
