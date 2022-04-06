<template>
  <div class="task">
    <q-checkbox :label="taskDetails.title" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TaskComponent',
  props: ['taskDetails'],
});
</script>
