<template>
  <div id="app">
    <v-ons-page>
      <v-ons-toolbar>
        <div class="center">Instagramanai</div>
        <div class="right">
          <v-ons-toolbar-button icon="ion-ios-paperplane, material: md-menu"></v-ons-toolbar-button>
        </div>
      </v-ons-toolbar>
  
      <v-ons-tabbar swipeable position="auto" animation="none" :tabs="tabs" :index.sync="tabIndex">
      </v-ons-tabbar>

    </v-ons-page>
  </div>
</template>

<script>
import auth from './auth.js'
import component1 from './component1'
import component2 from './component2'
import component3 from './component3'
import component4 from './component4'
import component5 from './component5'
import component6 from './component6'
import component7 from './component7'

export default {
  name: 'app',
  data() {
    return {
      tabIndex: 0,
      tabs: [
        {
          icon: 'fa-home',
          page: component1,
        },
        {
          icon: 'fa-search',
          page: component2,
        },
        {
          icon: 'fa-plus-square',
          page: component3,
        },
        // {
        //   icon: 'fa-heart',
        //   page: component4,
        // },
        {
          icon: 'fa-user',
          page: auth.isLoggedIn() ? component7 : component6,
        },
      ]
    }
  },
  components: { component1, component2, component3, component4, component7, component6 },
}
</script>

<style>
* {
  box-sizing: border-box;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

a {
  color: black;
  text-decoration: none;
}

.search-input{
  background-color: white;
}
</style>
