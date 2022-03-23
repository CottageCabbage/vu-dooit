<template>
  <el-aside>
    <div id="thin-aside">
      <router-link to="/Profile/">
        <el-avatar :size="35" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"/>
      </router-link>
    </div>

    <div id="wide-aside">
      <el-tree :data="dooitTree" class="project-tree">
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

<style lang="scss">
#thin-aside {
  width: 50px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 2px solid #e6e6e6;
  padding-top: 15px;
}

#wide-aside {
  width: 225px;
  height: 100%;
}

.project-tree *:hover, .project-tree *:focus {
  background: transparent !important;
  /* outline: 1px solid #444; */
  color: pink
}
</style>
