<template>
  <q-layout
    view="lhh LpR lff"
    container
    style="height: 250px"
    class="bg-grey-3"
  >
    <form @submit.prevent="createNewProject()">
      <q-btn icon="insert_emoticon" flat text-color="grey-8" />
      <q-input filled v-model="newProjectTitle" />
      <q-btn type="submit" label="Create New Project" color="green-5" />
    </form>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useProjectStore } from 'stores/ProjectStore.js';

export default defineComponent({
  name: 'NewProjectDialog',
  setup() {
    return {
      data: useProjectStore(),
      newProjectTitle: ref(''),
    };
  },
  methods: {
    createNewProject() {
      const newProject = {
        id: 123, //make random
        title: this.newProjectTitle,
        desc: 'Insert Desc',
        tasks: [],
      };
      this.data.createProject(newProject);
    },
  },
});
</script>

<style lang="scss" scoped>
form {
  position: relative;
  width: 80%;
  height: 250px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 30px;

  .q-input {
    font-size: 1rem;
  }
}
</style>
