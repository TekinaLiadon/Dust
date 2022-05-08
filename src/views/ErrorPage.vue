<template>
  <Layout>
    <div class="error">
      <img src="@/assets/images/error.svg" alt="" class="error__img" />
      <div class="error__hdng">Error 404</div>
      <div class="error__desc">Not found</div>
    </div>
  </Layout>
</template>

<script>
import Layout from "../components/Layout";
export default {
  name: "ErrorPage",
  components: {Layout}
}
</script>

<style lang="scss" scoped>
.error {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}
</style>
