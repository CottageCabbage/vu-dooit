<template>
  <q-layout
    view="lhh LpR lff"
    container
    style="height: 250px"
    id="new-task-dialog"
    :class="props.nightmode ? 'bg-grey-9 dark' : 'bg-grey-3'"
    class="shadow-9"
  >
    <form @submit.prevent="createTask()" class="flex-col">
      <input
        id="newtask_title"
        type="text"
        v-model="newtask_title"
        placeholder="Title"
      />

      <textarea
        id="newtask_desc"
        type="text"
        v-model="newtask_desc"
        placeholder="Description"
      ></textarea>
      <fieldset class="flex-row">
        <q-select />
        <q-btn flat dense icon="sell" />
        <q-space />
        <q-btn flat dense icon="flag" />
      </fieldset>

      <q-btn
        type="submit"
        id="create-new-task-btn"
        label="Add Task"
        dense
        flat
        class="fixed-bottom-left bg-green-4"
      />

      <div
        id="expand-btn"
        class="fixed-bottom-right shadow-9"
        style="bottom: -15px; right: -0px"
      >
        <q-btn flat icon="expand_less" />
      </div>
    </form>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useProjectStore } from 'stores/ProjectStore.js';

const props = defineProps({
  nightmode: Boolean,
});

const data = useProjectStore();
const newtask_title = ref('');
const newtask_desc = ref('');
const route = useRoute();

function createTask() {
  data.createTask(route.params.id, newtask_title.value);
}

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
</script>

<style lang="scss">
#new-task-dialog {
  form {
    // padding: 10px;
    // gap: 7px;

    #newtask_title {
      appearance: none;
      border: none;
      padding: 12px;
      font-size: 1rem;
      background: #9992;
    }
    #newtask_desc {
      appearance: none;
      border: none;
      resize: vertical;
      padding: 9px;
      padding-left: 15px;
      font-size: 0.9rem;
      background: #ddd4;
      min-height: 40px;
      height: 65px;
      max-height: 105px;
    }

    fieldset {
      border: none;
      font-size: 0.5rem;

      .q-btn {
        font-size: 0.75rem;
      }
    }

    #create-new-task-btn {
      bottom: 5px;
      left: 5px;
      padding: 5px 10px 5px 10px;
    }
  }

  &.dark {
    form {
      #newtask_title {
        color: #eee;
      }
      #newtask_desc {
        background: #ddd2;
        color: #e9e9e9;
      }
    }
  }

  #expand-btn {
    background: #ccc;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    button {
      position: relative;
      width: 40px;
      height: 40px;
      border-radius: 50%;

      .q-icon {
        position: relative;
        top: -5px;
      }
    }
  }
}
</style>
