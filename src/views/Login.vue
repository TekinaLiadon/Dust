<template>
  <Layout>
    <div class="login">
      <div class="login__input-wrap">
        <InputWrap
            label="Email"
            type="email"
            v-model="formData.username"
        />
      </div>
      <div class="login__input-wrap">
        <InputWrap
            label="Password"
            type="password"
            v-model="formData.password"
        />
      </div>
      <Button @click="login">Войти</Button>
    </div>
  </Layout>
</template>

<script>
import Layout from "../components/Layout";
import InputWrap from "../components/ui/InputWrap";
import Button from "../components/ui/Button";
import axios from "axios";
import backend from "../api/backend";

export default {
  name: "Login",
  components: {Button, InputWrap, Layout},
  data() {
    return {
      formData: {
        username: "",
        password: "",
      },
    }
  },
  methods: {
    login() {
      // this.$store.commit('setUserToken', 'a')
      // this.$store.commit('killUser')
      backend({
        method: 'post',
        url: '/auth',
        data: this.formData,
      })
          .then((response) => {
            console.log(response.data);
            this.$store.commit('setUserToken', response.data.token)
            this.$router.push({name: 'Home'})
          })
          .catch((error) => {
            console.log(error);
          });
    }
  },
}
</script>

<style lang="scss" scoped>
.login {
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
