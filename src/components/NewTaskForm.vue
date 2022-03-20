<template>
  <el-form>
    <el-form-item label="Task:">
      <el-input v-model="newTaskText"></el-input>
    </el-form-item>
    <el-cascader
      :options="projectList"
      :props="props"
      v-model="selectedProject"
      placeholder="Projects"
      clearable
    />
    <el-select v-model="selectedPriority" placeholder="Priority">
      <el-option
        v-for="priority in prioritiesList"
        :key="priority.value"
        :label="priority.label"
        :value="priority.value"
      />
    </el-select>
    <el-button
      type="primary"
      @click="createNewTask">
      Done
    </el-button>
  </el-form>
</template>
<script>
import dooitJSON from '@/assets/dooit.json'

export default {
  name: 'NewTaskForm',
  data () {
    return {
      newTaskText: '',
      selectedProject: '',
      selectedPriority: '',
      // Form Things:
      projectList: dooitJSON.projects,
      props: {
        checkStrictly: true
      },
      prioritiesList: [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' }
      ]
    }
  },
  methods: {
    createNewTask () {
      console.log(this.newTaskText)
      console.log(this.selectedProject.label)
      console.log(this.selectedPriority)
    }
  }
}
</script>
