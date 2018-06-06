<template>
  <v-ons-page>
    <form>
      <div>
        <textarea v-model="text" />
      </div>
      <div>
        <input type="file" @change="onFileChange">
      </div>
    </form>
    <div>
      <button @click="submit">Submit</button>
    </div>
  </v-ons-page>
</template>

<script>
  import axios from 'axios'
  import auth from './auth.js';

  const BASE_URL = process.env.NODE_ENV === 'production' ? "https://instagourmet.herokuapp.com/api" : "http://localhost:3000/api"

  axios.defaults.headers['Authorization'] = auth.getAccessToken();

  export default {
    data() {
      return {
        user_id: '',
        text: '',
        image: '',
        files: [],
      }
    },
    mounted: function() {
      this.user_id = auth.getUserId();
    },
    methods: {
      onFileChange: function(e){
        var files = e.target.files || e.dataTransfer.files;
        this.files = e.target.files || e.dataTransfer;
        if (!files.length) {
            return;
        }
        //this.createImage(files[0]);
      },
      createImage(file) {
        var image = new Image();
        var reader = new FileReader();
        var vm = this;
        reader.onload = function(e) {
          vm.image = e.target.result;
        };
        reader.readAsDataURL(file);
      },
      submit: function() {
        let data = new FormData;
        data.append('post[user_id]', this.user_id);
        data.append('post[text]', this.text);
        data.append('post[photo]', this.files[0]);

        axios.post(`${BASE_URL}/api/users/${this.user_id}/posts`, data,{
          headers: {'Content-Type': ''}
        })
        .then( res => {
          console.log(res.data)
        }, error => {
          console.log(error);
        })
      }
    }
  }
</script>
