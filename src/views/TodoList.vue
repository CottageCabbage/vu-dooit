<template>
  <div id="listContainer">
    <h1>List Title</h1>
    <div class="task">
      <input type="checkbox" />
      <span>Faucibus nisl tincidunt eget nullam non nisi</span>
    </div>
    <div class="section">
      <h2>Section TItle</h2>
      <div class="task">
        <input type="checkbox" />
        <span>Faucibus nisl tincidunt eget nullam non nisi</span>
      </div>
    </div>
  </div>

</template>
<script>
import '@/assets/styles/todo-list.scss'

export default {
  data () {
    return {
      cities: [
        { city: 'adasd' }
      ]
    }
  }
}
</script>
