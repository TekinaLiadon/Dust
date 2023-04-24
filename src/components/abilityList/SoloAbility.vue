<template>
<div>
  {{info}}
</div>
</template>

<script>
export default {
  name: "SoloAbility",
  props: {
    info: {
      type: Object,
      default: () => {
        return {
          data: 'No data',
        }
      }
    }
  },
}
</script>

<style scoped>

</style>
