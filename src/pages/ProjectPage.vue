<template>
  <div class="flex-col" id="project-page">
    <div v-if="project !== undefined" class="flex-col">
      <section class="project-details non-selectable">
        <h2 class="project-title">{{ project.title }}</h2>
        <p class="project-desc">{{ project.desc }}</p>
      </section>

      <section class="task-list flex-col">
        <div class="task flex-row" v-for="task in project.tasks" :key="task.id">
          <q-checkbox
            v-model="task.done"
            :label="task.title"
            :class="assignTaskPriority(task.priority)"
          />
          <q-space />
          <q-btn-dropdown dense flat dropdown-icon="more_vert">
            <q-list>
              <q-item clickable v-close-popup>
                <q-item-section>
                  <q-item-label>Delete Task</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
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

      <q-dialog v-model="NewTaskDialogIsOpen">
        <NewTaskDialog :data="data" />
      </q-dialog>
    </div>

    <div v-else>
      It seems like this project does not exist. It may be that you have entered
      the wrong URL, or it has been deleted.
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import NewTaskDialog from 'src/components/Dialogs/NewTaskDialog.vue';
import { useProjectStore } from 'stores/ProjectStore.js';

const route = useRoute();
const data = useProjectStore();
const NewTaskDialogIsOpen = ref(false);

const project = data.project_data.filter(
  (project) => project.id === route.params.id
)[0];

function assignTaskPriority(priority) {
  let priorityClass = '';
  switch (priority) {
    case null:
    case '1':
      priorityClass = 'priority-1';
      break;
    case '2':
      priorityClass = 'priority-2';
      break;
  }
  return priorityClass;
}

function deleteTask(taskINDEX) {
  let projectINDEX = route.path;
  projectINDEX = projectINDEX.split('/');
  projectINDEX = projectINDEX.slice(-1);

  this.data.deleteTask(
    projectINDEX,
    data.projectList[route.params.id].id,
    taskINDEX
  );
}

function toggleTaskDone(taskINDEX) {
  let projectINDEX = route.path;
  projectINDEX = projectINDEX.split('/');
  projectINDEX = projectINDEX.slice(-1);

  this.data.toggleTaskDone(
    projectINDEX,
    data.projectList[route.params.id].id,
    taskINDEX
  );
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
</style>
