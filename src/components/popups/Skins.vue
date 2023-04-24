<template>
  <img
      ref="img"
      src="../../assets/images/home-content2.png"
      style="height: 50%; margin-top: 10px; border: 2px solid var(--main-border);"
  />
  <InputFile
      :name="'Загрузить скин'"
      :expectedFormats="['image/png']"
      class="skin__file"
      @loadingFile="updateImg"
  />
  <Tray />
</template>

<script>
import InputFile from "../ui/InputFile";
import Tray from "../ui/Tray";

export default {
  name: "Skins",
  components: {Tray, InputFile},
  methods: {
    updateImg(file) {
      let reader = new FileReader();
      this.$refs.img.file = file;
      reader.onload = (function (aImg) {
        return function (result) {
          aImg.src = result.target.result;
        };
      })(this.$refs.img);
      reader.readAsDataURL(file);
      this.$store.commit('setSkin', file)
    },
  },
  mounted() {
    if(this.$store.state.skin) this.updateImg(this.$store.state.skin)
  }
}
</script>

<style lang="scss">
.skin {
  &__file {
    margin: 20px;
    color: var(--main-text);
    border: 2px solid black !important;
  }
}
</style>
