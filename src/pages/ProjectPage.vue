<template>
  <div class="flexColumnContainer" id="projectPage">
    <div v-if="data.projectList[$route.params.id] !== undefined">
      <section class="projectDetails">
        <h2>{{ data.projects[$route.params.id].title }}</h2>
        <p>{{ data.projects[$route.params.id].desc }}</p>
      </section>

      <div class="taskList">
        <div
          class="task"
          v-for="(task, index) in data.projects[$route.params.id].tasks"
          :key="index"
          :class="assingTaskPriority(task.priority)"
        >
          <q-checkbox :label="task.title" v-model="task.done" />
          <q-space />
          <q-btn dense flat icon="more_vert" class="more_btn" />
        </div>
      </div>
    </div>

    <div class="bottom-right column items-center">
      <q-fab direction="left" icon="add" color="green">
        <q-fab-action label="Create Task" @click="NewTaskDialogIsOpen = true" />
        <q-fab-action label="Create Section" />
      </q-fab>
    </div>

    <q-dialog v-model="NewTaskDialogIsOpen">
      <NewTaskDialog />
    </q-dialog>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import NewTaskDialog from 'src/components/Dialogs/NewTaskDialog.vue';

import { useProjectStore } from 'stores/ProjectStore.js';

export default defineComponent({
  setup() {
    const NewTaskDialogIsOpen = ref(false);

    return {
      data: useProjectStore(),
      NewTaskDialogIsOpen,
    };
  },
  components: {
    NewTaskDialog,
  },
  methods: {
    assingTaskPriority(priority) {
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
    },
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

  .taskList {
    padding: 10px;
    font-family: Ubuntu;
    font-size: 1rem;

    .task {
      display: flex;
      align-items: center;
      background: #f9f9f9;

      .more_btn {
        transform: scale(0.7);
      }

      margin-bottom: 5px;
      border-bottom: 1px solid #9999;
    }
  }

  .bottom-right {
    position: absolute;
    bottom: 25px;
    right: 25px;
  }
}

// TASK PRIORITY CLASSES
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
