<template>
  <el-header>
    <router-link to="/" style="margin-top: -5px">
      <img src="@/assets/Logo.png" alt="logo" id="logo">
    </router-link>
    <input
      type="text"
      name=""
      id="searchInput"
      placeholder="Search..."
    />

    <svg
      xmlns="http://www.w3.org/2000/svg" width="24" height="24"
      style="fill: #eee;"
      @click="addTaskFormVisible = true">
      <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
    </svg>

    <el-dialog v-model="addTaskFormVisible" title="Create New Task">
      <NewTaskForm />
    </el-dialog>

    <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path d="m2.344 15.271 2 3.46a1 1 0 0 0 1.366.365l1.396-.806c.58.457 1.221.832 1.895 1.112V21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1.598a8.094 8.094 0 0 0 1.895-1.112l1.396.806c.477.275 1.091.11 1.366-.365l2-3.46a1.004 1.004 0 0 0-.365-1.366l-1.372-.793a7.683 7.683 0 0 0-.002-2.224l1.372-.793c.476-.275.641-.89.365-1.366l-2-3.46a1 1 0 0 0-1.366-.365l-1.396.806A8.034 8.034 0 0 0 15 4.598V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1.598A8.094 8.094 0 0 0 7.105 5.71L5.71 4.904a.999.999 0 0 0-1.366.365l-2 3.46a1.004 1.004 0 0 0 .365 1.366l1.372.793a7.683 7.683 0 0 0 0 2.224l-1.372.793c-.476.275-.641.89-.365 1.366zM12 8c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4z"></path>
        </svg>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>
            <el-switch
              v-model="settings.darkMode"
              active-text="Dark Mode"
            ></el-switch>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>

  </el-header>
</template>
<script>
import '@/assets/styles/header.scss'

import { useSettingsStore } from '@/store/modules/settings.js'

import NewTaskForm from './NewTaskForm.vue'

export default {
  name: 'HeaderContainer',
  components: { NewTaskForm },
  data () {
    return {
      settings: useSettingsStore(),
      addTaskFormVisible: false
    }
  }
}

</script>
