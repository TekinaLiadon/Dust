<template>
  <div class="input" :class="className">
    <input
      :type="type"
      :id="uniqueId"
      v-model="value"
      :class="value ? 'is-focused' : ''"
      :disabled="disabled"
      @blur="$emit('isBlur')"
    />
    <label :for="uniqueId">{{ label }}</label>
    <div class="form__error" v-if="errorArray && errorArray[0]">
      {{ errorArray[0].$message }}
    </div>
  </div>
</template>

<script>
import uniqueString from "unique-string";

export default {
  name: "InputWrap",
  data() {
    return {
      uniqueId: uniqueString(),
    };
  },
  props: {
    label: String,
    modelValue: [String, Number],
    type: String,
    error: Boolean,
    disabled: { type: Boolean, default: false },
    errorArray: Array,
  },
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
    className() {
      return {
        "input--error": this.error,
        "input--disabled": this.disabled,
      };
    },
  },
};
</script>

<style lang="scss">
.input {
  position: relative;

  input {
    width: 100%;
    padding: 17px 15px 12px 15px;
    background: transparent;
    border: 1px solid var(--input-border-color);
    box-sizing: border-box;
    border-radius: 4px;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: var(--white-black-color);
    transition: all 0.3s ease-in-out;
    &:focus ~ label,
    &.is-focused ~ label {
      transform: translateY(-15px);
      font-size: 8px;
      line-height: 10px;
      color: #7a7a7a;
    }
    &:focus {
      border-color: var(--yellow-black-color);
    }
  }

  label {
    position: absolute;
    z-index: 2;
    margin: 0;
    transition: top 0.3s ease, transform 0.3s ease, font-size 0.3s ease;
    transform-origin: 0 0;
    transform: translateY(-50%);
    left: 15px;
    top: 50%;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: var(--input-font-color);
  }

  &--error {
    position: relative;
    input {
      border-color: var(--red);
    }
  }
  &--disabled {
    label {
      color: var(--disabled-text-color);
    }
  }
}
</style>
