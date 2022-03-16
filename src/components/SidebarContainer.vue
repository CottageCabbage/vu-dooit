<template>
  <aside>
    <div>
      <box-icon name='inbox' type='solid' ></box-icon>
      <router-link to="/TodoList/">Inbox</router-link>
    </div>
    <div>
      <box-icon name='chevron-down'></box-icon>
      <span>Projects</span>
      <box-icon name='plus'></box-icon>
    </div>

    <footer>
      <box-icon name='check-square'></box-icon>
      <box-icon name='coin-stack' type='solid' ></box-icon>
      <box-icon name='store-alt' type='solid' ></box-icon>
    </footer>
  </aside>
</template>
<script>
import '@/assets/styles/sidebar.scss'

export default {
  name: 'SidebarContainer'
}
</script>
