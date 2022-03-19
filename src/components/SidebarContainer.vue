<template>
  <el-container>
    <el-aside width="50px" style="display: flex; flex-direction: column; align-items: center;">
      <router-link to="/Avatar/">
        <el-avatar :size="35" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"/>
      </router-link>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="none"
        stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
        <path d="M17,8h5a0,0,0,0,1,0,0v8a0,0,0,0,1,0,0H17a4,4,0,0,1-4-4v0A4,4,0,0,1,17,8Z"></path>
        <rect x="2" y="3" width="20" height="18" rx="2"></rect>
        <line x1="17" y1="12" x2="17.1" y2="12" stroke-linecap="round" stroke-width="2"></line>
      </svg>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="none"
        stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21,6V20a2,2,0,0,1-2,2H5a2,2,0,0,1-2-2V6L5.7,2.4A1,1,0,0,1,6.5,2h11a1,1,0,0,1,.8.4Z"></path>
        <line x1="21" y1="6" x2="3" y2="6" stroke-linecap="round"></line>
        <path d="M17,10A5,5,0,0,1,7,10"></path>
      </svg>
    </el-aside>

    <el-aside width="225px">
      <el-tree :data="dooitTree">
        <template #default="{ data }">
          <span>
            <router-link to="/">{{ data.label }} IT WORKS</router-link>
          </span>
        </template>
      </el-tree>
    </el-aside>
  </el-container>
</template>
<script>
import '@/assets/styles/sidebar.scss'
import dooitJSON from '@/assets/dooit.json'

export default {
  name: 'SidebarContainer',
  data () {
    return {
      dooitTree: dooitJSON.projects
    }
  }
}
</script>
