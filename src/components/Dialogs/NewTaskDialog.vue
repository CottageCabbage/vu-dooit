<template>
  <q-layout
    view="lhh LpR lff"
    container
    :style="expanded ? 'height: 250px' : 'height: 50px'"
    id="new-task-dialog"
    :class="props.nightmode ? 'bg-grey-9 dark' : 'bg-grey-3'"
    class="shadow-9"
  >
    <form
      @submit.prevent="createTask()"
      class="flex-col"
      :class="expanded ? 'expanded-form' : ''"
    >
      <input
        type="text"
        id="newtask_title"
        v-model="newtask_title"
        :placeholder="expanded ? '' : 'Press enter when done to create task'"
      />

      <q-btn
        :icon="expanded ? 'expand_less' : 'expand_more'"
        class="fixed-right"
        @click="toggleExpanded"
        dense
        flat
      />
    </form>

    <!-- <form @submit.prevent="createTask()" class="flex-col">
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
    </form> -->
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useProjectStore } from "stores/ProjectStore.js";

const props = defineProps({
  nightmode: Boolean,
});

const expanded = ref(false);

const data = useProjectStore();
const newtask_title = ref("");
const newtask_desc = ref("");
const route = useRoute();

function createTask() {
  data.createTask(route.params.id, newtask_title.value);
}

function toggleExpanded() {
  expanded.value = !expanded.value;
}
</script>

<style lang="scss">
#new-task-dialog {
  form {
    input {
      padding: 10px;
      font-size: 1rem;
      outline: none;
      height: 50px;
    }
  }

  form.expanded-form {
    height: 250px;

    input {
      border: none;
      background: #fffa;
    }
  }

  // form {
  //   // padding: 10px;
  //   // gap: 7px;

  //   #newtask_title {
  //     appearance: none;
  //     border: none;
  //     padding: 12px;
  //     font-size: 1rem;
  //     background: #9992;
  //   }
  //   #newtask_desc {
  //     appearance: none;
  //     border: none;
  //     resize: vertical;
  //     padding: 9px;
  //     padding-left: 15px;
  //     font-size: 0.9rem;
  //     background: #ddd4;
  //     min-height: 40px;
  //     height: 65px;
  //     max-height: 105px;
  //   }

  //   fieldset {
  //     border: none;
  //     font-size: 0.5rem;

  //     .q-btn {
  //       font-size: 0.75rem;
  //     }
  //   }

  //   #create-new-task-btn {
  //     bottom: 5px;
  //     left: 5px;
  //     padding: 5px 10px 5px 10px;
  //   }
  // }

  // &.dark {
  //   form {
  //     #newtask_title {
  //       color: #eee;
  //     }
  //     #newtask_desc {
  //       background: #ddd2;
  //       color: #e9e9e9;
  //     }
  //   }
  // }

  // #expand-btn {
  //   background: #ccc;
  //   border-radius: 50%;
  //   width: 40px;
  //   height: 40px;
  //   display: flex;
  //   justify-content: center;
  //   align-items: flex-start;

  //   button {
  //     position: relative;
  //     width: 40px;
  //     height: 40px;
  //     border-radius: 50%;

  //     .q-icon {
  //       position: relative;
  //       top: -5px;
  //     }
  //   }
  // }
}
</style>
