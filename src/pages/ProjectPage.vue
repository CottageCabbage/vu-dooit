<template>
  <div class="flexColumnContainer" id="projectPage">
    <section class="projectDetails">
      <h2>{{ data.projects[$route.params.id].title }}</h2>
      <p>{{ data.projects[$route.params.id].description }}</p>
      <q-btn label="New task!" @click="data.createTask($route.params.id)" />
    </section>

    <div class="taskList">
      <div
        class="task"
        v-for="(task, index) in data.projects[$route.params.id].tasks"
        :key="index"
      >
        <q-checkbox
          :label="task.title"
          style="font-family: Ubuntu; font-size: 1rem"
          v-model="task.done"
        />
        <q-space />
        <q-btn dense flat icon="more_vert" class="more_btn" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

import { useProjectStore } from 'stores/ProjectStore.js';

export default defineComponent({
  setup() {
    return {
      data: useProjectStore(),
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
    padding: 10px;

    .task {
      display: flex;
      align-items: center;
      background: #f7f7f7;

      .more_btn {
        transform: scale(0.7);
      }

      margin-bottom: 5px;
      border-bottom: 1px solid #9999;
    }
  }
}
</style>
