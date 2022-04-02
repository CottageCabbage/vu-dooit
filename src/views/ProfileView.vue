<template>
  <div id="profilePage">
    <div id="banner">
      <el-avatar id="profilePicture"
        src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
      />
    </div>
    <h1>{{ profile.username }}</h1>
    <!-- <p>Projects: {{ profile.projects }}</p> -->
    <div id="profileThings">

      <!-- <el-tabs id="taskTabs">
        <el-tab-pane label="Inbox" name="first">Inbox</el-tab-pane>
        <el-tab-pane label="Today" name="second">Today</el-tab-pane>
      </el-tabs> -->

      <!-- <el-scrollbar id="cart" height="380px">
        <div class="cartItem">
          <div class="cartPicture"></div>
          <div class="itemInfo">
            <h2>Thing</h2>
            <div class="itemDesc">Lorem Ipsum</div>
            <el-progress :percentage="70" />
          </div>
        </div>
        <div class="cartItem">
          <div class="cartPicture"></div>
          <div class="itemInfo">
            <h2>Thing</h2>
            <div class="itemDesc">Lorem Ipsum</div>
            <el-progress :percentage="70" />
          </div>
        </div>
      </el-scrollbar> -->

    </div>
  </div>
</template>
<script>
import '@/assets/styles/profile.scss'

export default {
  data () {
    return {
      profile: ''
    }
  },
  methods: {
    getValues () {
      if (localStorage.getItem('profile' !== null)) {
        this.profile = JSON.parse(localStorage.getItem('profile'))
      }
      console.log(this.profile.username)
    }
  },
  watch: {
    profile: {
      handler: 'getValues',
      immediate: true
    }
  }

}
</script>
