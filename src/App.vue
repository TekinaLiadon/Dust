<template>
  <router-view v-slot="{ Component }">
    <Layout>
      <component  :is="Component" />
    </Layout>
<!--      <Preloader v-else overlay-mode />-->
  </router-view>
  <Tray />
  <transition name="'fade-in'">
    <PopupController />
  </transition>
</template>

<script>
import "animate.css";
import Layout from "./components/Layout";
import Tray from "./components/ui/Tray";
import PopupController from "./components/popups/PopupController";

export default {
  name: "App",
  components: {PopupController, Tray, Layout}
}
</script>

<style lang="scss">
@import "~@/scss/style.scss";
#app {
  height: 100vh;
}
body {
  margin: 0;
  font-family: 'PT Serif', serif;
}
p {
  color: rgba(202, 187, 147, 1);
  font-size: 1.5em;
  white-space: pre-wrap;
}
</style>
