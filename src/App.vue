<template>
  <HeaderContainer />
  <SidebarContainer />
  <div id="mainContainer">
    <router-view/>
  </div>
</template>

<script>
import SidebarContainer from './components/SidebarContainer.vue'
import HeaderContainer from './components/HeaderContainer.vue'

import './assets/styles/layout.scss'
import './assets/styles/main.scss'

export default {
  components: {
    SidebarContainer,
    HeaderContainer
  }
}
</script>
