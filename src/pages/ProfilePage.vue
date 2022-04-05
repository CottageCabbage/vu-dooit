<template>
  <div class="flexColumnContainer" id="profileContainer">
    <div id="profileBanner">
      <q-btn icon="account_circle" flat id="profilePicture" />
    </div>
    <p id="username">Username</p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
#profileContainer {
  width: 100%;

  #profileBanner {
    width: 100%;
    height: 150px;
    background: #6a6;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    #profilePicture {
      transform: scale(2.5);

      &:hover {
        background: transparent;
        background-color: transparent;
        * {
          background: #0000;
          background-color: transparent;
        }
      }
    }
  }
  #username {
    text-align: center;
    font-size: 2.5rem;
  }
}
</style>
