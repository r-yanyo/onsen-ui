<template>
  <v-ons-page>
    <v-ons-navigator swipeable
      :page-stack="pageStack"
      @push-page="pageStack.push($event)"
    ></v-ons-navigator>
  </v-ons-page>
</template>

<script>
  import component5 from './component5'

  export default {
    data() {
      return {
        pageStack: [component5]
      }
    }
  }
</script>
