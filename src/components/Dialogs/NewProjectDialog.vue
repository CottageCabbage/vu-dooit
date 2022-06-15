<template>
  <q-layout
    container
    style="height: 250px"
    :class="nightmode ? 'bg-grey-9' : 'bg-grey-3'"
  >
    <form @submit.prevent="createNewProject()">
      <q-input
        v-model="newProjectTitle"
        :dark="nightmode"
        placeholder="Create"
      />
    </form>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useProjectStore } from "stores/ProjectStore.js";
import { nanoid } from "nanoid";

export default defineComponent({
  name: "NewProjectDialog",
  props: ["nightmode"],
  setup() {
    return {
      data: useProjectStore(),
      newProjectTitle: ref(""),
    };
  },
  methods: {
    createNewProject() {
      const newProject = {
        id: nanoid(7),
        title: this.newProjectTitle,
        desc: "Insert Desc",
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
  // margin: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;

  .q-input {
    font-size: 1rem;
  }
}
</style>
