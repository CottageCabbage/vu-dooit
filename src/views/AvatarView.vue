<template>
  <div id="profile">
    <div id="profileBanner">
      <img
        src="@/assets/banner.png"
        alt="Banner"
      />
    </div>
    <el-avatar
      src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
    />
    <h1>Profile</h1>
  </div>
</template>
<script>
export default {

}
</script>
<style>
#profile {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  margin-top: -20px;
  padding: 0;
}

#profileBanner {
  display: flex;
  justify-content: flex-end;
}

img {
  width: 100%;
}

</style>
