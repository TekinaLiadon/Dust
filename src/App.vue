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
  font-family: 'Roboto Flex', sans-serif;
}
p {
  color: rgba(202, 187, 147, 1);
  font-size: 0.9em;
}
</style>
