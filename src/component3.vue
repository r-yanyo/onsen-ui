<template>
  <v-ons-page>
    <form>
      <input type="file">
    </form>
  </v-ons-page>
</template>

<script>
  import auth from './auth.js';

  const BASE_URL = "http://localhost:3000"

  export default {
    data() {
      return {
        user_id: '',
      }
    },
    mounted: function() {
      this.user_id = auth.getUserId();
    }
  }
</script>
