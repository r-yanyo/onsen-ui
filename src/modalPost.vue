<template>
	<div v-if="show" class="modal-wrapper">
    <div class="modal-back" v-on:click="this.close"></div>
    <div class="modal-window">
      <img v-bind:src="post.imagePath">
      {{this.post.id}}
      <FavoriteHeartIcon :post_id='this.post.id' />
      <p>{{post.text}}</p>
    </div>
	</div>
</template>

<script>
  import axios from 'axios';
  import auth from './auth.js';
  import FavoriteHeartIcon from './FavoriteHeartIcon';

  const BASE_URL = process.env.NODE_ENV === 'production' ? "https://instagourmet.herokuapp.com" : "http://localhost:3000"

  axios.defaults.headers['Authorization'] = auth.getAccessToken();

  export default {
    data() {
      return {
        post: '',
        show: false,
      }
    },
    props: ['posts'],
    mounted: function() {

    },
    methods: {
      open: function(post){
        this.post = post;
        this.show = true;
      },
      close: function(){
        this.show = false;
      },
    },
    components: { FavoriteHeartIcon }
  }
</script>

<style scoped>
  .modal-wrapper{
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    z-index: 1100;
  }
  .modal-back{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,.5);
  }
  .modal-window{
    position: relative;
    width: 100%;
    max-width: 500px;
    height: 80%;
    margin: 40px auto;
    background-color: #fafafa;
    overflow-y: scroll;
  }
  .modal-title{
    font-size: 1.2rem;
  }
  .modal-window img{
    width: 100%;
    max-height: 70%;
  }

  .v-enter, .v-leave {
    opacity: 0;
  }
  v-enter-active, .v-leave-active{
    transition: opacity 1s;
  }

</style>
