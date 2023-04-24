<template>
  <Button @click="$store.commit('killUser')">
    Выйти
  </Button>
</template>

<script>
import Button from "../../components/ui/Button";
export default {
  name: "Player",
  components: {Button}
}
</script>

<style scoped>

</style>
