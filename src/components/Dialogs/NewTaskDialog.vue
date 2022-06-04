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
        :placeholder="
          expanded ? 'Task\'s Title' : 'Press enter when done to create task'
        "
      />

      <div v-if="expanded === true" class="flex-col">
        <textarea
          type="text"
          id="newtask_desc"
          v-model="newtask_desc"
          placeholder="Task's Description"
        ></textarea>

        <hr style="width: 99%; border: 1px dashed #aaa" />

        <div
          class="flex-row fixed-bottom-left"
          style="padding: 5px; padding-bottom: 7px; gap: 7px"
        >
          <q-btn label="Cancel" color="red-5" />
          <q-btn label="Create" color="green-5" type="submit" />
          <q-btn-dropdown
            dropdown-icon="flag"
            flat
            no-icon-animation
            :color="getIconColor()"
          >
            <q-list>
              <q-item
                clickable
                v-close-popup
                @click="assignPriority(1)"
                :class="selected_priority === 1 ? 'selected-priority' : ''"
              >
                <q-btn icon="flag" dense flat color="grey-7" />
              </q-item>
              <q-item
                clickable
                v-close-popup
                @click="assignPriority(2)"
                :class="selected_priority === 2 ? 'selected-priority' : ''"
              >
                <q-btn icon="flag" dense flat color="amber-8" />
              </q-item>
              <q-item
                clickable
                v-close-popup
                @click="assignPriority(3)"
                :class="selected_priority === 3 ? 'selected-priority' : ''"
              >
                <q-btn icon="flag" dense flat color="red-5" />
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
      </div>

      <q-btn
        :icon="expanded ? 'expand_less' : 'expand_more'"
        :class="expanded ? 'fixed-bottom-right' : 'fixed-right'"
        @click="toggleExpanded"
        flat
        :dense="!expanded"
        :style="expanded ? 'right: 5px; bottom: 5px' : ''"
      />
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

const expanded = ref(false);

const data = useProjectStore();
const newtask_title = ref("");
const newtask_desc = ref("");
const route = useRoute();

function createTask() {
  if (newtask_title.value !== "") {
    data.createTask(route.params.id, newtask_title.value, newtask_desc.value);
  }
}

function toggleExpanded() {
  expanded.value = !expanded.value;
}

const selected_priority = ref(1);
function assignPriority(priority) {
  selected_priority.value = priority;
}
function getIconColor() {
  switch (selected_priority.value) {
    case 1:
      return "grey-7";
    case 2:
      return "amber-8";
    case 3:
      return "red-5";
  }
}
</script>

<style lang="scss" scoped>
#new-task-dialog {
  form {
    input {
      padding: 10px;
      font-size: 1rem;
      outline: none;
      height: 50px;
      border: none;
    }
  }

  form.expanded-form {
    height: 250px;

    input#newtask_title {
      background: #fffa;
    }
    textarea#newtask_desc {
      // min-height: 2.6rem;
      height: 8rem;
      max-height: 8rem;
      border: none;
      outline: none;
      resize: none;
      background: #fff5;
      font-size: 0.9rem;
      padding: 10px;
      padding-left: 15px;
      margin-bottom: 7px;
    }
  }
}

.selected-priority {
  background: #ccca;
}
</style>
