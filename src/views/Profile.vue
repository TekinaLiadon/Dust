<template>
<div class="profile">
  <div class="profile__header">
    <Button class="profile__header__btn" @click="$router.push({name: 'Player'})">
      Профиль
    </Button>
    <Button class="profile__header__btn" @click="$router.push({name: 'Character'})">
      Персонаж
    </Button>
  </div>
  <router-view v-slot="{ Component }">
    <transition :name="'fade-in'" mode="out-in">
      <component
          :is="Component"
      />
    </transition>
  </router-view>
</div>
</template>

<script>
import Button from "../components/ui/Button";
export default {
  name: "Profile",
  components: {Button}
}
</script>

<style lang="scss">
.profile {
  margin-top: 50px;
  width: 100%;

  &__header {
    display: flex;
    justify-content: space-evenly;
    margin-top: -20px;
    margin-bottom: 25px;

    &__btn {
      padding: 5px;
    }
  }
}
</style>
