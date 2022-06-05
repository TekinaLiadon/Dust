<template>
  <div class="textarea">
    <div class="textarea-label">
      {{ label }}
    </div>
    <textarea
      :name="'name' + uniqueId"
      :id="uniqueId"
      :cols="info.cols"
      :rows="info.rows"
      v-model="value"
    />
  </div>
</template>

<script>
import uniqueString from "unique-string";

export default {
  name: "Textarea",
  props: {
    label: String,
    modelValue: [String, Number],
    info: {
      type: Object,
      default: () => {
        return {
          cols: 30,
          rows: 10,
        };
      },
    },
  },
  data() {
    return {
      uniqueId: uniqueString(),
    };
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
  },
};
</script>

<style lang="scss">
.textarea {
  position: relative;
  textarea {
    width: 100%;
    padding: 17px 15px;
    background: var(--main-back);
    border: 1px solid var(--main-border);
    border-radius: 4px;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: var(--main-text);
    resize: vertical;
    transition: all 0.3s ease-in-out;
    @include scrollbar();
    &:focus {
      border-color: var(--main-focus);
      outline: 0;
    }
  }
  &-label {
    font-weight: 400;
    font-size: 8px;
    line-height: 10px;
    color: #7a7a7a;
    position: absolute;
    top: 5px;
    left: 15px;
  }
}
</style>
