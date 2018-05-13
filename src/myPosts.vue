<template>
  <ul id='favorite-post' class='posts'>
    <li v-for="i in 7">
      <a href='#' class='post'>
        <img v-bind:src='"/public/img/food"+i+".jpg"' class="post-image">
      </a>
    </li>
  </ul>
</template>

<style scoped>
  .posts{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: flex-start;
  }
  .posts li{
    width: 33%;
    margin-right: auto;
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
