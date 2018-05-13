<template>
  <v-ons-page>
    <div class="search-container">
      <v-ons-search-input class="search-box" modifier="white" placeholder="Search" v-model="query"></v-ons-search-input>
    </div>
  </v-ons-page>
</template>

<script>
  export default{
    data(){
      return{
        query: '',
      }
    }
  }
</script>

<style scoped>
  .search-container{
    width: 100%;
    background-color: #dbdbdb;
  }
  .search-box{
    width: 95%;
    padding: 5px 0;
  }

</style>
