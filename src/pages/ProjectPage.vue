<template>
  <div class="flexColumnContainer" id="projectPage">
    <section class="projectDetails">
      <h2>{{ $route.params.id }}</h2>
      <p>{{ data.projects[0].description }}</p>
      <q-btn label="New task!" @click="data.createTask()" />
    </section>

    <div class="taskList">
      <TaskComponent
        v-for="(task, index) in data.projects[0].tasks"
        :key="index"
        :taskDetails="task"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import TaskComponent from 'src/components/TaskComponent.vue';

import { useProjectStore } from 'stores/ProjectStore.js';

export default defineComponent({
  components: {
    TaskComponent,
  },
  setup() {
    return {
      data: useProjectStore(),
      par: '',
    };
  },
});
</script>

<style lang="scss">
#projectPage {
  .projectDetails {
    padding: 10px;
    background: #6a6;
    color: #ded;
    display: flex;
    flex-direction: column;
    align-items: center;
    user-select: none;

    h2 {
      min-width: 15%;
      margin: 0 0 15px 0;
      display: inline-block;
      border-bottom: 2px solid #8c8;
      font-size: 2.5rem;
      font-weight: bold;
      text-align: center;
    }
    p {
      font-size: 1rem;
      text-align: center;
    }
  }

  .newTaskContainer {
    border: 1px solid black;
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
