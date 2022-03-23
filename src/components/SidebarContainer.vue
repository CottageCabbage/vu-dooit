<template>
  <el-aside>
    <div id="thin-aside">
      <router-link to="/Profile/">
        <el-avatar src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"/>
      </router-link>
    </div>

    <div id="wide-aside">
      <el-tree
        :data="dooitTree"
        class="project-tree"
        :indent="10"
        :highlight-current="false"
        :expand-on-click-node="false">

        <template #default="{ data }">
          <span>
            <router-link
              :to="{
                name: 'Project',
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
    </div>
  </el-aside>
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
