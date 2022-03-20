<template>
  <div id="listContainer">
    <!-- <h1>{{ this.$route.params.projectID }}</h1> -->
    <h1>{{title}}</h1>

    Return items of project if list.projectID's equal $route.params.projectID

    <div v-for="(task, index) in tasks" :key="index">
      {{task.text}}
    </div>

    <!-- {{ JSON.parse(this.$route.params.tasks)[0] }} -->

    <!-- <div class="task" v-for="(task, index) in tasks" :key="index">
      <el-checkbox :label="task.text" size="large"/>
    </div> -->

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
  mounted () {
    if (this.$route.params.projectID !== null) {
      this.title = this.$route.params.projectID
    }
    if (this.$route.params.tasks !== null) {
      this.tasks = JSON.parse(this.$route.params.tasks)
    }
    // this.tasks = JSON.parse(this.$route.params.tasks)
  }
}
</script>
