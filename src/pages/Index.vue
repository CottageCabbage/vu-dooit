<template>
  <q-page>
    <div class="row q-gutter-md">
      <div class="col q-gutter-md q-pa-md text-white">
        <q-checkbox dark v-model="val" label="test" color="orange" keep-color />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
  data() {
    return {
      val: false,
    };
  },
});
</script>
