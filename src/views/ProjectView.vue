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
      <el-input placeholder="Add Task" v-model="newTaskText" style="width: 60%;"/>
      <el-button @click="addTask">Done</el-button>
    </div>

  </div>

</template>
<script>
import '@/assets/styles/project.scss'

export default {
  data () {
    return {
      title: '',
      tasks: '',
      newTaskText: ''
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
    },
    addTask () {
      const newTask = {
        text: this.newTaskText,
        completed: false
      }
      this.tasks.push(newTask)
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
