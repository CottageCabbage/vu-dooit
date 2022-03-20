<template>
  <div id="listContainer">
    <h1>{{title}}</h1>

    <div v-for="(task, index) in tasks" :key="index">
      <el-checkbox
        :label="task.text"
        size="large"
      />
    </div>

  </div>

</template>
<script>
import '@/assets/styles/todo-list.scss'
// import dooit from '@/assets/dooit.json'

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
      if (from.params.projectID !== to.params.projectID) {
        return this.getProjectInfo()
      }
    }
  }
}
</script>
