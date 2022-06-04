<template>
  <div class="registration">
    <div class="registration__input-wrap">
      <InputWrap
          label="Email"
          type="email"
          v-model="formData.username"
      />
    </div>
    <div class="registration__input-wrap">
      <InputWrap
          label="Password"
          type="password"
          v-model="formData.password"
      />
    </div>
    <Button @click="registration">Зарегестрировать</Button>
  </div>
</template>

<script>
import InputWrap from "../components/ui/InputWrap";
import Button from "../components/ui/Button";
import axios from "axios"

export default {
  name: "Registration",
  components: {Button, InputWrap},
  data() {
    return {
      formData: {
        username: "",
        password: "",
      },
    }
  },
  methods: {
    registration() {
      axios({
        method: 'post',
        url: 'http://192.168.1.222:3000/auth',
        headers: {
          Accept: "application/json",
        },
        data: this.formData,
      })
          .then((response) =>{
            console.log(response);
          })
          .catch((error) =>{
            console.log(error);
          });
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
