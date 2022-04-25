<template>
  <q-layout
    view="lhh LpR lff"
    container
    style="height: 250px"
    id="new-task-dialog"
    class="bg-grey-3"
  >
    <form @submit.prevent="" class="flex-col">
      <q-input outlined v-model="newTask_title" label="Task Title:" />
      <q-select
        outlined
        v-model="newTask_priority"
        :options="priorityOptions"
        label="Priority"
        use-input
        @filter="filterFn"
      >
        <template v-slot:no-option>
          <q-item clickable @click="createNewTag()">
            <q-item-section class="text-grey">
              No results. Create new Tag?
            </q-item-section>
          </q-item>
        </template>
      </q-select>
    </form>

    <!-- <div id="NewTaskDialogForm">

      <q-btn label="Create Task" color="green" @click="createTask" />
    </div> -->
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useProjectStore } from 'stores/ProjectStore.js';

const stringOptions = ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'];

export default defineComponent({
  name: 'NewTaskDialog',
  setup() {
    // const priorityOptions = ref(['1', '2']);
    const priorityOptions = ref(stringOptions);

    return {
      data: useProjectStore(),
      newTask_title: ref('Hello world!'),
      newTask_priority: ref('1'),
      priorityOptions,
    };
  },
  methods: {
    filterFn(val, update, abort) {
      update(() => {
        const needle = val.toLowerCase();
        this.priorityOptions = stringOptions.filter(
          (v) => v.toLowerCase().indexOf(needle) > -1
        );
      });
    },
    // createTask() {
    //   let projectINDEX = this.$route.path;
    //   projectINDEX = projectINDEX.split('/');
    //   projectINDEX = projectINDEX.slice(-1);
    //   this.data.createTask(
    //     projectINDEX,
    //     this.data.projectList[this.$route.params.id].id,
    //     this.newTask_title,
    //     this.newTask_priority
    //   );
    // },
  },
});
</script>

<style lang="scss">
#new-task-dialog {
  form {
    padding: 10px;
    gap: 7px;
  }
}

#NewTaskDialogForm {
  padding: 10px;
}
</style>
