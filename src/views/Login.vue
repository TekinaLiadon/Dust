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
      <Button class="login__btn" @click="login">Войти</Button>
      <Button class="login__btn" @click="$router.push({name: 'Registration'})">Регистрация</Button>
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
    get() {
      backend({
        method: 'get',
        url: '/getUsername',
      }).then((response) => {
        console.log(response.data);
      })
          .catch((error) => {
            console.log(error);
          });
    },
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
    margin-bottom: 5px;
    border: 1px solid;
  }

  &__btn {
    margin-top: 10px;
  }
}
</style>
