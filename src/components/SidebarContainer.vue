<template>
  <el-aside width="225px">
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#000000" stroke-width="1.5"
        stroke-linecap="butt" stroke-linejoin="round">
        <path d="M22,13.2V19a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V13.2a1.67,1.67,0,0,1,0-.39l1.64-8.2A2,2,0,0,1,5.64,3H18.36a2,2,0,0,1,2,1.61L22,12.81A1.67,1.67,0,0,1,22,13.2Z"></path>
        <path d="M2,13H5.93a2,2,0,0,1,1.66.89l.82,1.22a2,2,0,0,0,1.66.89h3.86a2,2,0,0,0,1.66-.89l.82-1.22A2,2,0,0,1,18.07,13H22" stroke-linecap="round"></path>
      </svg>
      <router-link to="/TodoList/">Inbox</router-link>
    </div>

    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#000000" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round">
        <polyline points="7 10 12 15 17 10"></polyline>
      </svg>
      <span>Projects</span>
    </div>

    <footer>
      <box-icon name='check-square'></box-icon>
      <box-icon name='coin-stack' type='solid' ></box-icon>
      <box-icon name='store-alt' type='solid' ></box-icon>
    </footer>
  </el-aside>
</template>
<script>
import '@/assets/styles/sidebar.scss'

export default {
  name: 'SidebarContainer'
}
</script>
