<template>
  <el-container>
    <el-aside width="50px" style="display: flex; flex-direction: column; align-items: center;">
      <router-link to="/Avatar/">
        <el-avatar :size="35" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"/>
      </router-link>
    </el-aside>

    <el-aside width="225px">
      <el-tree :data="dooitTree" class="project-tree">
        <template #default="{ data }">
          <span>
            <router-link
              :to="{
                name: 'TodoList',
                params: {
                  projectID: data.label,
                  tasks: JSON.stringify(data.items)
                }
              }">
              {{ data.label }}
            </router-link>
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

<style>
.project-tree *:hover, .project-tree *:focus {
  background: transparent !important;
  /* outline: 1px solid #444; */
  color: pink
}
</style>
