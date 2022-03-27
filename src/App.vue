<template>
  <el-container
    direction="vertical"
    :class="settings.darkMode ? 'dark' : ''"
    id="app">
    <HeaderContainer />
    <el-container>
      <SidebarContainer />
      <el-main>
        <router-view :key="$route.fullPath"/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import SidebarContainer from './components/SidebarContainer.vue'
import HeaderContainer from './components/HeaderContainer.vue'

import './assets/styles/main.scss'

import './assets/styles/themes/light.scss'
import './assets/styles/themes/dark.scss'

import { useSettingsStore } from '@/store/modules/settings.js'

export default {
  components: {
    SidebarContainer,
    HeaderContainer
  },
  data () {
    return {
      settings: useSettingsStore()
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html, body, #app {
  height: 100%;
  font-family: Helvetica;
}
</style>
