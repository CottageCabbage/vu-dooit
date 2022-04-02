<template>
  <el-form>
    <el-form-item label="Username">
      <el-input v-model="editedProfile.username"></el-input>
    </el-form-item>
    <el-form-item label="Profile Picture">
      Select file
    </el-form-item>
    <el-button @click="updateProfile" type="primary">
      Save Changes
    </el-button>
  </el-form>
</template>
<script>
export default {
  data () {
    return {
      editedProfile: {
        username: ''
      }
    }
  },
  methods: {
    updateProfile () {
      const newProfile = {
        username: this.editedProfile.username
      }
      console.log(newProfile)
    }
  },
  watch: {
    editedProfile: {
      handler: 'updateProfile',
      immediate: true
    }
  }
}
</script>
