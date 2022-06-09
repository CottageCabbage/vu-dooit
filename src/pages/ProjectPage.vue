<template>
  <div class="flex-col" id="project-page">
    <div v-if="project !== undefined" class="flex-col">
      <section class="project-details non-selectable">
        <h2 class="project-title">{{ project.title }}</h2>
        <p class="project-desc">{{ project.desc }}</p>
      </section>

      <section class="task-list flex-col" v-if="project.tasks.length !== 0">
        <div
          class="task flex-row"
          @dblclick="taskBeingEdited = index"
          :class="taskBeingEdited === index ? 'task-being-edited' : ''"
          v-for="(task, index) in project.tasks"
          :key="task.id"
        >
          <div class="flex-col" v-if="taskBeingEdited !== index">
            <q-checkbox
              v-model="task.done"
              :label="task.title"
              class="task-checkbox-title"
              :class="assignTaskPriority(task.priority)"
              @click="toggleTaskDone(index)"
            />
            <div class="task-description">
              {{ task.desc }}
            </div>
          </div>
          <div class="flex-col" v-else @keydown.esc="taskBeingEdited = ''">
            <input v-model="task.title" autofocus />
            <textarea v-model="task.desc" />
          </div>

          <q-space v-if="taskBeingEdited !== index" />
          <q-btn
            v-if="taskBeingEdited === index"
            type="submit"
            @click="saveTaskEdit(index, task.title, task.desc)"
            icon="done"
            dense
            flat
            color="green"
          />
          <q-btn-dropdown
            dropdown-icon="flag"
            flat
            no-icon-animation
            :color="getIconColor()"
          >
            <q-list>
              <q-item
                clickable
                v-close-popup
                @click="assignPriority(1)"
                :class="selected_priority === 1 ? 'selected-priority' : ''"
              >
                <q-btn icon="flag" dense flat color="grey-7" />
              </q-item>
              <q-item
                clickable
                v-close-popup
                @click="assignPriority(2)"
                :class="selected_priority === 2 ? 'selected-priority' : ''"
              >
                <q-btn icon="flag" dense flat color="amber-8" />
              </q-item>
              <q-item
                clickable
                v-close-popup
                @click="assignPriority(3)"
                :class="selected_priority === 3 ? 'selected-priority' : ''"
              >
                <q-btn icon="flag" dense flat color="red-5" />
              </q-item>
            </q-list>
          </q-btn-dropdown>

          <q-btn-dropdown dense flat dropdown-icon="more_vert">
            <q-list>
              <q-item clickable v-close-popup @click="deleteTask(index)">
                <q-item-section>
                  <q-item-label class="text-red-8 flex-row list-label">
                    <q-icon name="delete" />
                    Delete Task
                  </q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="editTask(index)">
                <q-item-section>
                  <q-item-label class="text-grey-8 flex-row list-label">
                    <q-icon name="edit" />
                    Edit Task
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
      </section>

      <section class="if-no-tasks flex-col" v-else>
        <img src="../assets/undraw_completing_re_i7ap.svg" alt="" />
        <p>Looks like you've got it all done here.</p>
      </section>

      <div class="fixed-bottom-right" style="bottom: 25px; right: 25px">
        <q-fab direction="left" icon="add" color="green-5">
          <q-fab-action
            label="Create Task"
            color="green-8"
            @click="NewTaskDialogIsOpen = true"
          />
          <q-fab-action label="Create Section" color="green-8" />
        </q-fab>
      </div>

      <q-dialog v-model="EditTaskDialogIsOpen">
        <EditTaskDialog :nightmode="props.nightmode" />
      </q-dialog>

      <q-dialog v-model="NewTaskDialogIsOpen">
        <NewTaskDialog :data="data" :nightmode="props.nightmode" />
      </q-dialog>
    </div>

    <div v-else id="if-no-project" class="flex-col">
      <img src="../assets/undraw_page_not_found_re_e9o6.svg" alt="" />
      <p>It looks like this project doesn't not exist.</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import NewTaskDialog from "src/components/Dialogs/NewTaskDialog.vue";
// import EditTaskDialog from "src/components/Dialogs/EditTaskDialog.vue";
import { useProjectStore } from "stores/ProjectStore.js";

const route = useRoute();
const data = useProjectStore();

const NewTaskDialogIsOpen = ref(false);

const taskBeingEdited = ref();
const beingEdited = ref(false);
// const EditTaskDialogIsOpen = ref(false);

const props = defineProps({
  nightmode: Boolean,
});

import { useObservable } from "@vueuse/rxjs";
import { liveQuery } from "dexie";
import { db } from "../db";

const project = useObservable(
  liveQuery(() => db.projects.get({ id: route.params.id }))
);

function assignTaskPriority(priority) {
  let priorityClass = "";
  switch (priority) {
    case null:
    case "1":
      priorityClass = "priority-1";
      break;
    case "2":
      priorityClass = "priority-2";
      break;
  }
  return priorityClass;
}

function deleteTask(taskINDEX) {
  data.deleteTask(route.params.id, taskINDEX);
}

function toggleTaskDone(taskINDEX) {
  data.toggleTaskDone(route.params.id, taskINDEX);
}

function editTask(taskINDEX) {
  taskBeingEdited.value = taskINDEX;
  beingEdited.value = true;
}
function saveTaskEdit(index, editedTitle, editedDesc) {
  taskBeingEdited.value = "";
  data.saveTaskEdit(route.params.id, index, editedTitle, editedDesc);
}

const selected_priority = ref(1);
function assignPriority(priority) {
  selected_priority.value = priority;
}
function getIconColor() {
  switch (selected_priority.value) {
    case 1:
      return "grey-7";
    case 2:
      return "amber-8";
    case 3:
      return "red-5";
  }
}
</script>

<style lang="scss">
.priority-1 {
  .q-checkbox__inner:not(.q-checkbox__inner--truthy) {
    .q-checkbox__bg {
      border: 2px solid #727272;
    }
  }
}
.priority-2 {
  .q-checkbox__inner:not(.q-checkbox__inner--truthy) {
    .q-checkbox__bg {
      border: 2px solid $negative;
    }
  }
}

.list-label {
  font-size: 16px;
  align-items: center;
  gap: 5px;
}
</style>
