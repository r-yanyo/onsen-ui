<template>
  <v-ons-page>
    <div class="content-wrapper">
      <div id="user-info">
          <div class="left">
            <img src='/public/img/ball.jpg' id="user-icon">
            <p id="user-name">r-yanyo</p>
          </div>
          <div class="right">
            <div id="user-numbers">
              <div id='post-n'>
                <a href='#'>投稿</a><br>
                <b>30</b>
              </div>
              <div id='follow-n'>
                <a href='#'>フォロー</a><br>
                <b>200</b>
              </div>
              <div id='follower-n'>
                <a href='#'>フォロワー</a><br>
                <b>300</b>
              </div>
            </div>
            <div id='edit-profile'>
              <a href="#" class="mybutton">プロフィールを編集</a>
            </div>
          </div>
      </div>
      <div id="tabs">
        <a @click='toggle = true' v-bind:class='{selected:toggle}' href='#' class="tab" >投稿</a>
        <a @click='toggle = false' v-bind:class='{selected:!toggle}' href='#' class="tab" >保存済み</a>
      </div>
      <div id="post-wrapper">
        <myPosts v-if='toggle' myPosts></myPosts>
        <favoritePosts v-if='!toggle' favoritePosts></favoritePosts>
      </div>
    </div>
  </v-ons-page>
</template>

<script>
  import myPosts from './myPosts'
  import favoritePosts from './favoritePosts'

  export default {
    data() {
      return {
        toggle: true,
        tabIndex: 0,
        tabs: [
        {
          label: '投稿',
          page: myPosts,
        },
        {
          label: '保存済み',
          page: favoritePosts,
        }
        ]
      }
    },
    components: { myPosts, favoritePosts }
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
    width: 80%;
    padding: 3px 5px;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    margin: 5px;
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
    height: 70%;
    margin: auto 0;
  }
  #user-numbers{
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  #user-info .right div{
    margin: 0 5px;
  }
  #edit-profile{
    width: 100%;
  }

  #post-wrapper{
    background-color: #fafafa;
    border-top: 1px solid gray;
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
