<template>
<Layout>
  <div class="registration">
    <div class="registration__input-wrap">
      <InputWrap
          label="Email"
          type="email"
          v-model="formData.email"
      />
    </div>
    <div class="registration__input-wrap">
      <InputWrap
          label="Password"
          type="password"
          v-model="formData.password"
      />
    </div>
    <Button>Зарегестрировать</Button>
  </div>
</Layout>
</template>

<script>
import Layout from "../components/Layout";
import InputWrap from "../components/ui/InputWrap";
import Button from "../components/ui/Button";
export default {
  name: "Registration",
  components: {Button, InputWrap, Layout},
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.registration {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;

  &__input-wrap {
    margin-bottom: 20px;
    border: 1px solid;
  }
}
</style>
