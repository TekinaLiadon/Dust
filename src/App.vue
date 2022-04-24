<template>
<div>
  <router-view v-slot="{ Component, route }">
      <component  :is="Component" />
<!--      <Preloader v-else overlay-mode />-->
  </router-view>
</div>
</template>

<script>
import "animate.css";

export default {
  name: "App"
}
</script>

<style scoped>

</style>
