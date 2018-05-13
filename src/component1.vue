<template>
  <v-ons-page>
    <div class="content-wrapper">
      <v-ons-card class="cards"　v-for="i in 5" :key="i">
        <div class="title">
          美味しい夕食
        </div>
          <v-ons-carousel fullscreen swipeable auto-scroll overscrollable :index.sync="carouselIndexes[i]">
            <v-ons-carousel-item v-for="(item,index) in items" :key="index">
              <img class="carousel-images" v-bind:src="'/public/img/'+item">
                  <div :style="dots">
                    <span :index="dotIndex - 1" v-for="dotIndex in Object.keys(items).length" :key="dotIndex" style="cursor: pointer" @click="setCarousel(i,dotIndex)">
                      {{ carouselIndexes[i] === dotIndex - 1 ? '\u25CF' : '\u25CB' }}
                    </span>
                </div>
            </v-ons-carousel-item>
        </v-ons-carousel>
        <div class="content">
        <div>
          <a href="#"><v-ons-icon icon="fa-heart" class="myicon"></v-ons-icon></a>
          <a href="#"><v-ons-icon icon="fa-share" class="myicon"></v-ons-icon></a>
          <p>いいね！ 500件</p>
        </div>
            <p>説明文です。</p>
        </div>
      </v-ons-card>
    </div>
  </v-ons-page>
</template>

<script>
  export default{
    data() {
      return {
        carouselIndexes: [0,0,0,0,0],
        items: [
          "food1.jpg",
          "food2.jpg",
          "food3.jpg"
        ],
        dots: {
          textAlign: 'center',
          fontSize: '30px',
          color: '#fff',
          position: 'absolute',
          bottom: '40px',
          left: 0,
          right: 0
        }
      }
    },
    methods: {
      setCarousel: function(i,dotIndex){
        this.$set(this.carouselIndexes,i,dotIndex - 1)
      }
    }
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
