<template>
  <router-view v-slot="{ Component }">
      <component  :is="Component" />
<!--      <Preloader v-else overlay-mode />-->
  </router-view>
</template>

<script>
import "animate.css";

export default {
  name: "App"
}
</script>

<style>
#app {
  height: 100vh;
}
body {
  margin: 0;
}
</style>
