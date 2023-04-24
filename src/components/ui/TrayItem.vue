<template>
  <div class="tray__item" :class="className">
    <p>{{ itemObject.text }}</p>
  </div>
</template>

<script>
export default {
  name: "TrayItem",
  data() {
    return {
      timeout: null,
    };
  },
  props: {
    itemObject: Object,
  },
  mounted() {
    this.timeout = setTimeout(
      () => this.$store.commit("removeFromTray", this.itemObject.id),
      4000
    );
  },
  computed: {
    className() {
      return {
        "tray__item--error": this.itemObject.type[0] === "error",
        "tray__item--success": this.itemObject.type[0] === "success",
      };
    },
  },
};
</script>

<style lang="scss">
.tray {
  max-width: 300px;
  width: 100%;
  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    background: #989898;
    color: #131313;
    transition: all 0.3s ease;

    p {
      margin-right: 20px;
      color: #121212;
    }
    i {
      font-size: 20px;
      &::before {
        content: "\e911";
      }
    }
    &--error {
      background: #fa1e00;
      color: #ffffff;
      i {
        font-size: 18px;
        &::before {
          content: "\e909";
        }
      }
    }
    &--success {
      background: #277f3a;
      color: #ffffff;
      i {
        &::before {
          content: "\e907";
        }
      }
    }
  }
  @include adaptive(phone) {
    width: calc(100% - 20px);
    max-width: unset;
  }
}
</style>
