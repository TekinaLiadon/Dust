<template>
  <div class="character">
    <h1 class="character__header">
      Aaaa
    </h1>
    <div class="character__main">
      <div class="character__img">

      </div>
      <div class="character__description">

      </div>
    </div>
    <h1 class="character__header">
      Aaaa
    </h1>
    <div class="character__block">

    </div>
    <h1 class="character__header">
      Aaaa
    </h1>
    <div class="character__block">

    </div>
    <div>
      <Button>
        Aaa
      </Button>
      <Button>
        Aaa
      </Button>
    </div>
  </div>
</template>

<script>
import Button from "../../components/ui/Button";
export default {
  name: "Character",
  components: {Button}
}
</script>

<style lang="scss">
.character {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__header {
    background: rgba(202, 187, 147, 0.1);
    border: 2px solid var(--main-border);
    margin-top: 10px;
    margin-bottom: 10px;
  }

  &__main {
    display: flex;
    width: 100%;
    justify-content: space-around;
  }

  &__img {
    min-width: 40%;
    min-height: 500px;
    border: 2px solid var(--main-border);
    background: var(--main-back);
  }

  &__description {
    min-width: 40%;
    min-height: 500px;
    border: 2px solid var(--main-border);
    background: var(--main-back);
  }

  &__block {
    min-width: 90%;
    min-height: 500px;
    border: 2px solid var(--main-border);
    background: var(--main-back);
  }
}
</style>
