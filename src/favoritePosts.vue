<template>
  <div>
    <ul id='my-post' class='posts'>
      <li v-for="post in posts">
        <a href='#' class='post' @click="openModal(post)">
          <img v-bind:src='post.imagePath' class="post-image">
        </a>
      </li>
    </ul>
    <modal-post ref="modal-post"></modal-post>
  </div>
</template>

<script>
  import auth from './auth.js'
  import axios from 'axios'

  const BASE_URL = process.env.NODE_ENV === 'production' ? "https://instagourmet.herokuapp.com/api" : "http://localhost:3000/api"

  export default {
    data() {
      return {
        posts: []
      }
    },
    mounted: function() {
      this.fetchPosts();
    },
    props: ['user_id', 'post_kind'],
    methods: {
      fetchPosts: function() {
        axios.get(`${BASE_URL}/api/users/${this.user_id}/favorite_posts`).then( res => {
          this.posts = res.data;
          this.posts.forEach((val,i,array)=>{
              array[i].imagePath = `${BASE_URL}${array[i].photo.url}`
          })
        }, error => {
          console.log(error);
        })
      },
      openModal: function(post) {
        this.$emit('openModal', post);
      }
    },

  }
</script>

<style scoped>
  .posts{
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: start;
    align-self: start;
  }
  .posts li{
    width: 33%;
    margin-bottom: auto;
  }
  .post{
    opacity: 1;
  }
  .post:hover{
    opacity: 0.8;
  }
  img.post-image{
    width: 100%;
  }
</style>
