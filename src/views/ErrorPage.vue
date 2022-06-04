<template>
    <div class="error">
      <img src="@/assets/images/error.svg" alt="" class="error__img" />
      <div class="error__hdng">Error 404</div>
      <div class="error__desc">Not found</div>
    </div>
</template>

<script>
export default {
  name: "ErrorPage",
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
