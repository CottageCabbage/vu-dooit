<template>
  <el-container direction="vertical" :class="settings.darkMode ? 'dark' : ''">
    <HeaderContainer />
    <el-button>asd</el-button>
    <el-container>
      <SidebarContainer />
      <el-main id="mainContainer">
        <router-view :key="$route.fullPath"/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import SidebarContainer from './components/SidebarContainer.vue'
import HeaderContainer from './components/HeaderContainer.vue'

import './assets/styles/layout.scss'
import './assets/styles/main.scss'

import './assets/styles/themes/light.scss'
import './assets/styles/themes/dark.scss'

import { useSettingsStore } from '@/store/modules/settings.js'

import './database.js'

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
