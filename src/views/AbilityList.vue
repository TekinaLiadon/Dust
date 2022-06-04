<template>
    <SoloAbility v-for="(item, index) in abilityList" :key="index" :info="item" />
</template>

<script>
import SoloAbility from "../components/abilityList/SoloAbility";
export default {
  name: "AbilityList",
  components: {SoloAbility},
  data() {
    return {
      abilityList: ['a', 'a', 'a', 'a',]
    }
  },
}
</script>

<style scoped>

</style>
