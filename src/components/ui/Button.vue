<template>
  <button class="btn" :class="className" @click="handleClick">
    <div class="btn__slot">
      <slot></slot>
    </div>
    <div class="btn__preloader">
      <div class="btn__anim"></div>
    </div>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    className: String,
    isLoading: Boolean,
    isDisabled: Boolean,
  },
  methods: {
    handleClick() {
      if (!this.isLoading && !this.isDisabled) this.$emit("protected-click");
    },
  },
}
</script>

<style >
.btn {
  border: 2px solid var(--main-border);
  background: var(--main-back);
  color: var(--main-text);
  font-size: 15px;
}
</style>
