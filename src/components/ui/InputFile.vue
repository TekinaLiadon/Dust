<template>
  <div class="file" @click.self="fileUploadTrigger" :class="className">
    <input
      :id="uniqueId"
      type="file"
      name="file"
      ref="file"
      @change="handleFileUpload($event)"
      class="file__input"
    />
    <div class="file__slot">
      <slot></slot>
      <label :for="uniqueId" class="file__label" style="text-decoration: none">
        {{ name }}
      </label>
    </div>
    <div class="file__preloader">
      <div class="file__anim"></div>
    </div>
  </div>
</template>

<script>
import uniqueString from "unique-string";

export default {
  name: "InputFile",
  data() {
    return {
      uniqueId: uniqueString(),
    };
  },
  props: {
    name: {
      type: String,
    },
    isLoading: Boolean,
    expectedFormats: {
      type: Array,
      default: () => {
        return ["image/jpg", "image/jpeg", "image/png", "image/bmp"];
      },
    },
    fileUploadStatuses: {
      type: Array,
      default: () => {
        return ["Слишком большой файл", "Неверный формат"];
      },
    },
  },
  computed: {
    className() {
      return {
        "file--loading": this.isLoading,
      };
    },
  },
  methods: {
    fileUploadTrigger() {
      this.$refs.file.click();
    },
    handleFileUpload(event) {
      if (!this.isLoading) {
        if (!this.fileValidation(event.target.files[0])) return;
        this.$emit("loadingFile", event.target.files[0]);
      }
    },
    fileValidation(file) {
      const maximumSizeBytes = 5242880;
      if (!this.expectedFormats.includes(file.type)) {
        this.$emit('error', this.fileUploadStatuses[1])
        this.$store.commit("pushToTray", {
          text: this.fileUploadStatuses[1],
          type: "error",
        });
        return false;
      } else if (file.size > maximumSizeBytes) {
        this.$emit('error', this.fileUploadStatuses[0])
        this.$store.commit("pushToTray", {
          text: this.fileUploadStatuses[0],
          type: "error",
        });
        return false;
      } else return true;
    },
  },
};
</script>

<style lang="scss" scoped>
.file {
  position: relative;
  border: 1px solid var(--main-border);
  border-radius: 4px;
  font-weight: 400;
  font-size: 12px;
  padding: 14.5px 22.5px;
  display: grid;
  transition: all 0.3s ease-in-out;

  &:hover {
    border-color: var(--white-black-color);
    cursor: pointer;
  }

  &__input {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    position: absolute;
    z-index: -10;
    display: none;
  }

  &__slot {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: auto;
    color: var(--yellow-black-color);
  }

  &__label {
    font-weight: bold;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
  &--loading {
    position: relative;
    overflow: hidden;
    border-color: transparent;
    background-color: var(--btn-disabled-bg);
    color: var(--calendar-disabled);
    pointer-events: none;
    .file__preloader {
      display: grid;
    }
  }
  &__preloader {
    display: none;
    background-color: rgba(0, 0, 0, 0.1);
    @include full-absolute();
  }
  &__anim {
    width: 1em;
    height: 1em;
    border-radius: 50%;
    margin: auto;
    position: relative;
    transform: translateZ(0);
    color: var(--white-black-color);
    animation: btn-preloader 1.5s ease infinite;
  }
}

.file .file__input:focus + .file__label {
  outline: 1px solid #0078d7;
  outline: -webkit-focus-ring-color auto 5px;
}
</style>
