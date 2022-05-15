<template>
<div class="header">
  <div class="header__logo">
    <img src="../assets/images/discord.svg" />
  </div>
  <div class="header__item" @click="$router.push({name: 'Home'})">
    Главная
  </div>
  <div class="header__item" @click="$router.push({name: 'ServerRules'})">
    Правила сервера
  </div>
  <div class="header__logo-center" @click="$router.push({name: 'Home'})">
    <div class="header__logo-center__item1">
      <img src="../assets/images/DUSTLOGO.svg" />
    </div>
    <div class="header__logo-center__item2">
      <img src="../assets/images/Polygon-center.png" />
    </div>
  </div>
  <div class="header__item" @click="$router.push({name: 'CombatSystem'})">
    Боевая система
  </div>
  <div class="header__item" @click="$router.push({name: 'Online'})">
    Онлайн
  </div>
  <div class="header__login">
    <div class="header__item" @click="$router.push({name: 'Login'})">
      <img src="../assets/images/login.svg" />
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Header",
  computed: {
    navigator() {
      return this.$router.options.routes.filter(item => item.meta.navigator)
    },

  },
}
</script>

<style lang="scss" scoped>
.header {
  background: rgba(28, 28, 28, 1);
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;

  &__logo {
    margin-left: 5%;
    margin-top: 10px;
  }

  &__logo-center {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;

    &__item1 {
      z-index: 3;
      margin-top: 60px;
      height: 100px;
      width: 100px;
    }

    &__item2 {
      margin-top: -70px;
      z-index: 2;
    }
  }

  &__login {
    margin-right: 5%;
    margin-top: 10px;
  }

  &__item {
    color: rgba(189, 167, 48, 1);
    cursor: pointer;
    margin: 10px;
  }
}
</style>
