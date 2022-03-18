<template>
  <div id="listContainer">
    <h1>Inbox</h1>
    <div class="task" v-for="(task, index) in tasks" :key="index">
      <el-checkbox :label="task.text" size="large"/>
    </div>
  </div>

</template>
<script>
import '@/assets/styles/todo-list.scss'

export default {
  data () {
    return {
      tasks: [
        { text: 'asd' },
        { text: 'lol' }
      ],
      lasdabel: 'hey'
    }
  }
}
</script>
