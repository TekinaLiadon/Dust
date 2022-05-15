<template>
  <div class="layout">
    <div class="layout__sidebar--mobile" v-if="isMobile">
      <slot name="sidebarMobile" />
    </div>
    <div class="layout__sidebar" v-else>
      <slot name="sidebar" />
    </div>
    <Header  />
    <div class="layout__content">
      <slot  />
    </div>
    <Footer v-if="false" />
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
export default {
  name: "Layout",
  components: {Footer, Header},
  data() {
    return {
      width: window.innerWidth,
    };
  },
  computed: {
    isMobile() {
      return this.width < 1151;
    },
  },
  methods: {
    updateWidth() {
      this.width = window.innerWidth;
    },
  },
  created() {
    window.addEventListener("resize", this.updateWidth);
  },
};
</script>

<style lang="scss">
.layout {
  display: flex;
  min-height: 100%;
  background-image: url("../assets/images/backgraund-main.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  &__content {
    display: flex;
    flex-wrap: wrap;
    background: radial-gradient(50% 50% at 50% 50%, #232323 0%, #121212 100%);
    flex-grow: 1;
    width: 73%;
    min-height: calc(100% - 120px);
    justify-content: center;
    align-content: flex-start;
  }
  &__sidebar {
    background: #0D0D0DFF;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
}
</style>
