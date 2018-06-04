<template>
  <div class="form-container centering">
    <img src="/src/assets/fork.svg">
    <div class="dish centering">
      <div class="login-form">
        <h1><i class="fas fa-utensils icon-big"></i>ログイン</h1>
        <p class="input-text">
          <label>メールアドレス</label><input v-model='email' type="text">
        </p>
        <p class="input-text">
          <label>パスワード</label><input v-model='password' type="password">
        </p>
        <p>
          <input type="checkbox" v-model='checked'><label>この内容を記録しますか？</label>
        </p>
        <button class="submit-button" v-on:click="submit">送信</button>
      </div>
    </div>
  </div>
</template>

<script>
import auth from './auth';

export default {
  data() {
    return {
      email: '',
      password: '',
      checked: false,
    }
  },
  methods: {
    submit: function() {
      auth.login(this.email,this.password)
    },
  }
}


</script>

<style scoped>
.form-container{
  width: 100vw;
  height: 100vh;
  background-image: url("/src/assets/green_blue_check.png");
  background-repeat: repeat;
  background-position: center;
  background-size: 200px;
}

.centering{
  display: flex;
  justify-content: center;
  align-items: center;
}

.dish{
  position: relative;
  width: 340px;
  height: 340px;
  background-color: white;
  border-radius: 50%;
  margin: 0 100px;

  box-shadow:
      5px 5px 25px 0px #0003 inset,
      -25px -25px 120px 0px #0005,
      0px 0px 0px 25px #fff,
      0px 0px 0px 45px #aaf,
      0px 0px 0px 60px #fff,
      0px 0px 0px 65px #aaf,
      0px 0px 0px 70px #fff,
      0px 0px 0px 72px #aaf,
      0px 0px 0px 77px #fff,
      4px 4px 7px 77px #0005,
      0px 0px 0px 80px #fff,
      30px 30px 100px 70px #000c;
}

.login-form{
  margin: 0 -150px;
  width: 220px;
}

.login-form h1{
  margin-top: 0;
  text-align: center;
}

.input-text input{
  width: 100%;
}

.submit-button{
  font-size: 20px;
  font-weight: bold;
  color: white;
  width: 100%;
  height: 2em;
  background-color: #e90;
  border: double 3px #fc0;
  border-radius: 0.5em 0.5em;
}
</style>
