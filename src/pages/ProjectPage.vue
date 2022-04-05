/* eslint-disable @typescript-eslint/no-unused-vars */ /* eslint-disable
@typescript-eslint/no-unused-vars */ /* eslint-disable
@typescript-eslint/no-unused-vars */
<template>
  <div class="flexColumnContainer" id="projectPage">
    <div class="projectDetails">
      <h2>{{ project.title }}</h2>
      <p>{{ project.tasksDone }}/{{ project.tasksTotal }}</p>
    </div>

    <q-list>
      <q-item
        v-for="(task, index) in tasks"
        :key="index"
        @click="task.done = !task.done"
        clickable
      >
        <q-item-section>
          <q-checkbox v-model="task.done" class="no-pointer-events" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ task.title }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>

    <!-- <div class="taskList">
      <div
        class="task"
        v-for="(task, index) in tasks"
        :key="index"
        @click="task.done = !task.done"
        clickable
      >
        <q-checkbox :label="task.title" v-model="task.done" />
      </div>
    </div> -->
  </div>
</template>
<script>
import { defineComponent } from 'vue';

import Localbase from 'localbase';
let db = new Localbase('projects');

const project = {
  title: 'Inbox',
  tasksTotal: 12,
  tasksDone: 5,
};

const tasks = [
  {
    title: 'Testing, 1st',
    done: false,
  },
  {
    title: 'Second Task',
    done: false,
  },
];

export default defineComponent({
  setup() {
    return {
      project: project,
      tasks: tasks,
    };
  },
  created() {
    // db.collection('users').add({
    //   id: 1,
    //   name: 'Bill',
    //   age: 47,
    // });
  },
});
</script>

<style lang="scss">
#projectPage {
  padding: 10px;

  .projectDetails {
    h2 {
      margin: 0;
      font-size: 2rem;
      font-weight: bold;
    }
  }

  .taskList {
    .task {
      .subtask {
        margin-left: 20px;
        border-left: 2px solid #9999;
      }
    }
  }
}
</style>
