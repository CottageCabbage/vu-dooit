<template>
  <header>
    <router-link to="/" style="height: 24px">
      <box-icon type='solid' name='badge-check'></box-icon>
    </router-link>
    <input
      type="text"
      name=""
      id="searchInput"
      placeholder="Search..."
    />
    <box-icon name='plus'></box-icon>
    <box-icon type='solid' name='cog'></box-icon>
  </header>
</template>
<script>
export default {
  name: 'HeaderContainer'
}

</script>
