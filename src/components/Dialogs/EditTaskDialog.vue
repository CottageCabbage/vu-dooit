<template>
  <q-layout
    view="lhh LpR lff"
    container
    style="height: 250px"
    id="edit-task-dialog"
    :class="props.nightmode ? 'bg-grey-9 dark' : 'bg-grey-3'"
    class="shadow-9"
  >
    <form class="flex-col" @submit.prevent="">
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

      <q-btn type="submit" class="bg-green-5" label="Done" />
      <q-btn type="reset" class="bg-red-5" label="Cancel" />
    </form>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useProjectStore } from "stores/ProjectStore.js";

const props = defineProps({
  nightmode: Boolean,
});

const data = useProjectStore();
const route = useRoute();
</script>
