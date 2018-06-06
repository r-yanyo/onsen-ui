<template>
  <div class="wrapper">
      <div class="heart-container">
        <input type="checkbox" class="heart" v-bind:checked="isFavorite">
        <label for="heart"><ons-icon icon="fa-heart" size="23px" fixed-width="false" @click="toggleFavorite"></ons-icon></label>
      </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import auth from './auth.js';

  const BASE_URL = process.env.NODE_ENV === 'production' ? "https://instagourmet.herokuapp.com" : "http://localhost:3000"

  axios.defaults.headers['Authorization'] = auth.getAccessToken();

  export default {
    data() {
      return{
        isFavorite: false,
      }
    },
    props: ['post_id'],
    mounted: function(){
      this.checkFavorite();
    },
    methods: {
      checkFavorite: function() {
        axios.get(`${BASE_URL}/api/users/isfavorite/${this.$props.post_id}`
        ).then( res => {
          this.isFavorite = res.data.isFavorite;
        }, error => {
          console.log(error);
        })
      },
      toggleFavorite: function(){
        if(this.isFavorite){
          axios.post(`${BASE_URL}/api/users/unfavorite/${this.$props.post_id}`)
          .then( res => {
            this.checkFavorite();
          }, error => {
            console.log(error);
          })
        }else{
          axios.post(`${BASE_URL}/api/users/favorite/${this.$props.post_id}`)
          .then( res => {
            this.checkFavorite();
          }, error => {
            console.log(error);
          })
        }
      },
    },
  }
</script>

<style scoped>
  .wrapper{
    display: inline-block;
  }
  .heart-container {
    display: inline-block;
    padding: 5px 10px;
  }

  .heart {
    display: none;
  }

  .heart+label ons-icon {
    color: gray;
    cursor: pointer;
  }

  .heart:checked+label ons-icon {
    color: pink;
    animation: bound 1s linear;
  }

  .heart:active+label ons-icon {
    transform: scale(0.8, 0.8);
  }

  @keyframes bound {
    10% {
        transform: scale(1.5, 1.5);
    }
    20% {
        transform: scale(0.75, 0.75);
    }
    30% {
        transform: scale(1.2, 1.2);
    }
    40% {
        transform: scale(0.9, 0.9);
    }
    50% {
        transform: scale(1, 1);
    }
    100% {
        transform: scale(1, 1);
    }
  }
</style>
