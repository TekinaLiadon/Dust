<template>
  <div class="tray">
    <div class="tray__list">
      <transition-group name="tray-anim">
        <TrayItem
          v-for="item in $store.state.trayItems"
          :key="item.id"
          :itemObject="item"
        />
      </transition-group>
    </div>
  </div>
</template>

<script>
import TrayItem from "@/components/ui/TrayItem";
export default {
  name: "Tray",
  components: { TrayItem },
};
</script>

<style lang="scss">
.tray {
  position: absolute;
  right: 20px;
  bottom: 20px;

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
  }

  @include adaptive(phone) {
    left: 10px;
    right: unset;
    bottom: unset;
    top: 20px;
  }
  &__list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}
</style>
