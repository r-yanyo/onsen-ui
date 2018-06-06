<template>
  <v-ons-page>
    <div class="content-wrapper">
      <v-ons-card class="cards"　v-for="(post, i) in this.posts" :key="i">
        <div class="title">
          美味しい夕食
        </div>
          <v-ons-carousel fullscreen swipeable auto-scroll overscrollable :index.sync="carouselIndexes[i]">
            <!-- <v-ons-carousel-item v-for="(item, index) in post.imagePath" :key="index"> -->
              <img class="carousel-images" :src="post.imagePath">
                  <div :style="dots">
                    <span :index="dotIndex - 1" v-for="dotIndex in Object.keys(items).length" :key="dotIndex" style="cursor: pointer" @click="setCarousel(i,dotIndex)">
                      {{ carouselIndexes[i] === dotIndex - 1 ? '\u25CF' : '\u25CB' }}
                    </span>
                </div>
            <!-- </v-ons-carousel-item> -->
        </v-ons-carousel>
        <div class="content">
          <div>
            <FavoriteHeartIcon :post_id="post.id"></FavoriteHeartIcon>
            <a href="#"><v-ons-icon icon="fa-share" class="myicon"></v-ons-icon></a>
            <p>いいね！ 500件</p>
          </div>
          <p>{{post.text}}</p>
        </div>
      </v-ons-card>
    </div>
  </v-ons-page>
</template>

<script>
  import axios from 'axios'
  import auth from './auth.js'
  import FavoriteHeartIcon from './FavoriteHeartIcon'

  const BASE_URL = process.env.NODE_ENV === 'production' ? "https://instagourmet.herokuapp.com" : "http://localhost:3000"

  export default{
    data() {
      return {
        following: [],
        posts: [],
        items: [
          'food0.jpg',
          'food1.jpg',
          'food2.jpg',
          'food3.jpg',
          'food4.jpg',
        ],
        carouselIndexes: [0,0,0,0,0],
        dots: {
          textAlign: 'center',
          fontSize: '3.0rem',
          color: '#fff',
          position: 'absolute',
          bottom: '20px',
          left: 0,
          right: 0
        }
      }
    },
    mounted: function(){
      this.fetchFollowing();
    },
    methods: {
      setCarousel: function(i,dotIndex){
        this.$set(this.carouselIndexes,i,dotIndex - 1)
      },
      fetchPosts: function() {
        this.following.forEach(user => {
          axios.get(`${BASE_URL}/api/users/${user.id}/posts`).then( res => {
            if(res.data.length != 0) this.posts.push(...res.data)
            this.posts.forEach((val,i,array)=>{
              array[i].imagePath = `${BASE_URL}${array[i].photo.url}`
            })
          }, error => {
            console.log(error);
          })
        })
      },
      fetchFollowing: function() {
        axios.get(`${BASE_URL}/api/users/${auth.getUserId()}/following`).then( res => {
          this.following = res.data;
          this.fetchPosts();
        }, error => {
          console.log(error);
        })
      },
    },
    components: { FavoriteHeartIcon }
  }
</script>

<style scoped>
  .content-wrapper{
    max-width: 600px;
    height: 100%;
    margin: 0 auto;
  }
  .title{
    width: 100%;
    border-bottom: 1px solid #dbdbdb;
  }
  .myicon{
    color: #999999;
    font-size: 1.5rem;
    margin-right: 10px;
  }
  .carousel-images{
    width: 100%;
  }
</style>
