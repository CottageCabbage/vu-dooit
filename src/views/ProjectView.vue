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
