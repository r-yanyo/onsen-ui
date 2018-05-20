<template>
	<div v-if="show" class="modal-wrapper">
    <div class="modal-back" v-on:click="this.close"></div>
    <div class="modal-window">
      <ul>
        <li><div class="modal-title item-block">フォロー</div></li>
        <li v-for="user in list">
          <div class="item-block">
            {{user.name}}
          </div>
        </li>
      </ul>
    </div>
	</div>
</template>

<script>
  export default {
    data() {
      return {
        show: false,
      }
    },
    props: ['list'],
    methods: {
      open: function(){
        this.show = true;
      },
      close: function(){
        this.show = false;
      }
    }
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
    width: 80%;
    max-width: 500px;
    height: 80%;
    margin: 80px auto;
    background-color: #fafafa;
    overflow-y: scroll;
  }
  .modal-window ul{
    margin: 0;
    padding: 0;
  }
  .modal-title{
    font-size: 1.2rem;
  }
  .item-block{
    width: 100%;
    min-height: 30px;
    padding: 8px 16px;
    border: 1px solid gray;
  }
  .item-block img{
    width: 30px;
    height: 30px;
    margin-right: 10px;
    border-radius: 50%;
    vertical-align: middle;
  }
  .modal-window li{
    list-style-type: none;
  }

  .v-enter, .v-leave {
    opacity: 0;
  }
  v-enter-active, .v-leave-active{
    transition: opacity 1s;
  }

</style>
