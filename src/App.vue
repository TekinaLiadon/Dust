<template>
  <router-view v-slot="{ Component }">
    <Layout>
      <component  :is="Component" />
    </Layout>
<!--      <Preloader v-else overlay-mode />-->
  </router-view>
</template>

<script>
import "animate.css";
import Layout from "./components/Layout";

export default {
  name: "App",
  components: {Layout}
}
</script>

<style lang="scss">
@import "~@/scss/style.scss";
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
