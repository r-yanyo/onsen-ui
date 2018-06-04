<template>
  <v-ons-page>
    <div class="content-wrapper">
      <v-ons-back-button style="float: left;">Back</v-ons-back-button>
      <div id="user-info">
          <div class="left">
            <img src='/public/img/ball.jpg' id="user-icon">
            <p id="user-name">{{user.name}}</p>
          </div>
          <div class="right">
            <div id="user-numbers">
              <div id='post-n'>
                <a href='#'>投稿</a><br>
                <b>{{posts.length}}</b>
              </div>
              <div id='follow-n'>
                <a href='#' v-on:click="openModal('follow')" id='follow'>フォロー</a><br>
                <b>{{following.length}}</b>
              </div>
              <div id='follower-n'>
                <a href='#' v-on:click="openModal('follower')" id='follower'>フォロワー</a><br>
                <b>{{followers.length}}</b>
              </div>
            </div>
            <div id='follow-button'>
              <a v-if="!isFollowing" href="#" class="mybutton" @click="follow">フォローする</a>
              <a v-if="isFollowing" href="#" class="mybutton" @click="unfollow">フォロー解除</a>
            </div>
          </div>
      </div>
      <div id="tabs">
        <a @click='toggle = true' v-bind:class='{selected:toggle}' href='#' class="tab" >投稿</a>
        <a @click='toggle = false' v-bind:class='{selected:!toggle}' href='#' class="tab" >保存済み</a>
      </div>
      <div id="post-wrapper">
        <Posts v-if='toggle' :user_id="this.user_id" @openModal="(id) => openPostModal(id)"></Posts>
        <FavoritePosts v-if='!toggle' :user_id="this.user_id" @openModal="(id) => openPostModal(id)"></FavoritePosts>
      </div>
    </div>

    <modal-user v-bind:list="followers" ref="modal-follower" @push-page="(newPage, id) => pushPage(newPage, id)" ></modal-user>
    <modal-user v-bind:list="following" ref="modal-follow" @push-page="(newPage, id) => pushPage(newPage, id)" ></modal-user>
    <modal-post v-bind:posts="posts" ref="modal-post"></modal-post>
  </v-ons-page>
</template>

<script>
  import router from './router.js'
  import auth from './auth.js'
  import axios from 'axios'
  import Posts from './Posts'
  import FavoritePosts from './favoritePosts'

  const BASE_URL = "http://localhost:3000"

  axios.defaults.headers['Authorization'] = auth.getAccessToken();

  export default {
    data() {
      return {
        user: {},
        following: [],
        followers: [],
        toggle: true,
        tabIndex: 0,
        posts: [],
        isFollowing: false,
        tabs: [
        {
          label: '投稿',
          page: Posts,
        },
        {
          label: '保存済み',
          page: Posts,
        }
        ]
      }
    },
    props: ['user_id'],
    mounted: function() {
      this.fetchUser();
      this.fetchFollowing();
      this.fetchFollowers();
      this.fetchPosts();
      this.checkFollowing();
    },
    methods: {
      isLoggedIn: function(){
        return auth.isLoggedIn();
      },
      logout: function(){
        auth.logout();
      },
      follow: function(){
        axios.post(`${BASE_URL}/api/users/follow/${this.user_id}`
        ).then( res => {
          this.isFollowing = res.data.isfollowing;
        }, error => {
          console.log(error);
        })
      },
      unfollow: function(){
        axios.post(`${BASE_URL}/api/users/unfollow/${this.user_id}`
        ).then( res => {
          this.isFollowing = res.data.isfollowing;
        }, error => {
          console.log(error);
        })
      },
      checkFollowing: function () {
        axios.get(`${BASE_URL}/api/users/isfollowing/${this.user_id}`
        ).then( res => {
          this.isFollowing = res.data.isfollowing;
        }, error => {
          console.log(error);
        })
      },
      fetchUser: function () {
        axios.get(`${BASE_URL}/api/users/${this.user_id}`).then( res => {
          this.user = res.data;
        }, error => {
          console.log(error);
        })
      },
      fetchFollowing: function () {
        axios.get(`${BASE_URL}/api/users/${this.user_id}/following`).then( res => {
          this.following = res.data;
        }, error => {
          console.log(error);
        })
      },
      fetchFollowers: function () {
        axios.get(`${BASE_URL}/api/users/${this.user_id}/followers`).then( res => {
          this.followers = res.data;
        }, error => {
          console.log(error);
        })
      },
      fetchPosts: function () {
        axios.get(`${BASE_URL}/api/users/${this.user_id}/posts`).then( res => {
          this.posts = res.data;
        }, error => {
          console.log(error);
        })
      },
      openModal: function(kind) {
        this.$refs[`modal-${kind}`].open();
      },
      openPostModal: function(id) {
        this.$refs['modal-post'].open(id);
      },
      pushPage: function(newPage, id) {
        this.$emit('push-page', {
          extends: newPage,
          onsNavigatorProps: {
            user_id: id
          }
        });
      }
    },
    components: { Posts, FavoritePosts }
  }
</script>

<style scoped>
  .content-wrapper{
    max-width: 700px;
    height: 100%;
    margin: 0 auto;
  }
  .mybutton{
    display: block;
    max-width: 200px;
    padding: 3px 5px;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    margin: 5px auto;
    font-size: 1.0rem;
    color: black;
    background-color: white;
  }
  .mybutton:hover{
    opacity: 0.5;
  }
  #user-info{
    position: relative;
    height: 30%;
    margin: 5px 10px;

    display: flex;
    justify-content: space-around;
  }
  #user-info .left{
    width: 40%;
    height: 100%;
    padding: 5px;
  }
  #user-icon{
    height: 70%;
    border-radius: 50%;
  }
  #user-name{
    margin: 5px 0;
    text-align: center;
    font-size: 1.0rem;
  }
  #user-info .right{
    width: 60%;
    height: 70%;
    margin: auto 0;
  }
  #user-numbers{
    width: 100%;
    display: flex;
    justify-content: space-around;
    white-space: nowrap;
  }
  #follow-n, #follower-n{
    margin: 0;
  }
  #edit-profile{
    width: 100%;
  }
  #tabs{
    border-top: 1px solid #dbdbdb;
    height: 50px;
    align-items: center;
  }
  .tab{
    display: inline-block;
    height: 100%;
    margin: 0 50px;
    padding: 10px 0;
  }
  .tab.selected{
    border-top: 1px solid black;
  }
</style>
