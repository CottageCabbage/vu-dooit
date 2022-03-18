<template>
  <header>
    <router-link to="/">
      <box-icon type='solid' name='badge-check' id="logo"></box-icon>
    </router-link>
    <input
      type="text"
      name=""
      id="searchInput"
      placeholder="Search..."
    />
    <box-icon name='plus'></box-icon>

    <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        <box-icon
          type='solid'
          name='cog'
        ></box-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>Action 1</el-dropdown-item>
          <el-dropdown-item>
            <el-switch
              v-model="settings.darkMode"
              active-text="Dark Mode"
            ></el-switch>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>

  </header>
</template>
<script>
import '@/assets/styles/header.scss'

import { useSettingsStore } from '@/store/settings.js'

export default {
  name: 'HeaderContainer',
  data () {
    return {
      settings: useSettingsStore()
    }
  }
}

</script>
