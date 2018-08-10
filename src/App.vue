<template>
  <div id="app">
    <transition name="page-fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
@import "./assets/style/init.css";
@import "./assets/style/common";
</style>
