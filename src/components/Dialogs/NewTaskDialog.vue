<template>
  <q-layout
    view="lhh LpR lff"
    container
    style="height: 250px"
    class="bg-grey-3"
  >
    <div id="NewTaskDialogForm">
      {{ data.projectList[$route.params.id].id }}
      <q-input outlined v-model="newTask_title" label="Task Title:" />
      <q-select
        outlined
        v-model="newTask_priority"
        :options="priorityOptions"
        label="Priority"
      />
      <q-btn label="Create Task" color="green" @click="createTask" />
    </div>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useProjectStore } from 'stores/ProjectStore.js';

export default defineComponent({
  name: 'NewTaskDialog',
  setup() {
    const priorityOptions = ref(['1', '2']);

    return {
      data: useProjectStore(),
      newTask_title: ref('Hello world!'),
      newTask_priority: ref('1'),
      priorityOptions,
    };
  },
  methods: {
    createTask() {
      let projectINDEX = this.$route.path;
      projectINDEX = projectINDEX.split('/');
      projectINDEX = projectINDEX.slice(-1);

      this.data.createTask(
        projectINDEX,
        this.data.projectList[this.$route.params.id].id,
        this.newTask_title,
        this.newTask_priority
      );
    },
  },
});
</script>

<style lang="scss">
#NewTaskDialogForm {
  padding: 10px;
}
</style>
