<template>
  <div class="task">
    <q-checkbox
      :label="taskDetails.title"
      @click="data.toggleTaskDone(projectID, taskID)"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useProjectStore } from 'stores/ProjectStore.js';

export default defineComponent({
  name: 'TaskComponent',
  props: ['taskDetails', 'projectID', 'taskID'],
  data() {
    return {
      data: useProjectStore(),
    };
  },
  methods: {},
});
</script>
