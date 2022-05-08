<template>
  <Layout>
    <SoloAbility v-for="(item, index) in abilityList" :key="index" :info="item" />
  </Layout>
</template>

<script>
import Layout from "../components/Layout";
import SoloAbility from "../components/abilityList/SoloAbility";
export default {
  name: "AbilityList",
  components: {SoloAbility, Layout},
  data() {
    return {
      abilityList: ['a', 'a', 'a', 'a',]
    }
  },
}
</script>

<style scoped>

</style>
