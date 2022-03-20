<template>
  <div id="projectContainer">
    <h1>{{title}}</h1>

    <div v-for="(task, index) in tasks" :key="index" class="taskContainer">
      <el-checkbox
        :label="task.text"
        v-model="task.completed"
        size="large"
      />
      <div v-for="(subtask, i) in task.children" :key="i" class="subtasksContainer">
        <el-checkbox
          :label="subtask.text"
          v-model="subtask.completed"
        />
      </div>
    </div>

    <div class="addTaskThing">
      <svg xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#000000"
        stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="16"></line>
        <line x1="16" y1="12" x2="8" y2="12"></line>
      </svg>
      <el-input placeholder="Add Task"/>
    </div>

  </div>

</template>
<script>
import '@/assets/styles/project.scss'

export default {
  data () {
    return {
      title: '',
      tasks: ''
    }
  },
  methods: {
    getProjectInfo () {
      if (this.$route.params.projectID !== null) {
        this.title = this.$route.params.projectID
      }
      if (this.$route.params.tasks !== null) {
        this.tasks = JSON.parse(this.$route.params.tasks)
      }
    }
  },
  watch: {
    '$route' (to, from) {
      if (to.name === 'Project' && to.params.projectID !== null) {
        return this.getProjectInfo()
      }
    }
  }
}
</script>
