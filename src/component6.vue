<template>
  <v-ons-page>
    <button v-on:click="moveLogin">ログインしてください</button>
  </v-ons-page>
</template>

<script>
import router from './router.js'
  export default{
    data(){
      return{

      }
    },
    methods: {
      moveLogin: function(){
        router.push('/login');
      },
    }
  }
</script>
