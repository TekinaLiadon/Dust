<template>
<div class="header">
  <div class="header__logo">
    d
  </div>
  <div class="header__item" v-for="(item, index) in navigator" :key="index" @click="$router.push({name: item.name})">
    {{item.meta.name}}
  </div>
  <div class="header__login">
    d
  </div>
</div>
</template>

<script>
export default {
  name: "Header",
  computed: {
    navigator() {
      return this.$router.options.routes.filter(item => item.meta.navigator)
    }
  },
}
</script>

<style lang="scss" scoped>
.header {
  background-color: green;
  height: 15%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;

  &__item {
    border: 1px solid;
    cursor: pointer;
    margin: 10px;
  }
}
</style>
