<template>
  <div
      class="popup-wrapper"
      :class="currentPopup.props.popupClass"
      v-if="currentPopup.isShown"
  >
    <div
        class="modal-box"
        v-click-away="
        () => {
          currentPopup.isShown = false;
        }
      "
    >
      <button
          class="popup-wrapper__close"
          :aria-label="$t('general.close')"
          @click="closePopup"
          v-if="currentPopup.closeBtn"
      >
        <!--        <Icon :type="'close'" />-->
      </button>
      <component v-if="currentPopup.name" v-bind:is="currentPopup.name"/>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
import {mixin as VueClickAway} from "vue3-click-away";
import Skins from "@/components/popups/Skins.vue"

export default {
  name: "PopupController",
  mixins: [VueClickAway],
  components: {
    Skins,
  },
  computed: {
    ...mapState(["currentPopup"]),
  },
  watch: {
    "$store.state.currentPopup.isShown": function () {
      this.$store.state.currentPopup.isShown
          ? document.body.classList.add("no-scroll")
          : document.body.classList.remove("no-scroll");
    },
  },
  methods: {
    closePopup() {
      this.$store.commit("setCurrentPopup", {isShown: false});
    },
  },
};
</script>

<style lang="scss" scoped>
.popup-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1050;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
  padding: 15px;

  &__close {
    font-size: 30px;
    color: gray;
    right: 15px;
    top: 15px;
    position: absolute;
  }

  .modal-box {
    height: 90%;
    background-color: gray;
    border-radius: 10px;
    width: 90%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
  }
}
</style>
