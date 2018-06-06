import VueRouter from 'vue-router';
import axios from 'axios';
import router from './router.js';

const BASE_URL = process.env.NODE_ENV === 'production' ? "https://instagourmet.herokuapp.com/api" : "http://localhost:3000/api"

export default {
  login: function(email,password){
    axios.post(`${BASE_URL}/login`,{
      email,
      password
    }).then((res) => {
      this.setAccessToken(res.data.auth_token);
      router.push('/');
    }).catch((err) => {
      console.log(err);
    })
  },
  logout: function(){
    localStorage.removeItem('user_id');
    localStorage.removeItem('access_token');
    router.push('/login');
  },
  setAccessToken: function(id_token) {
    const token_split = id_token.split(':');
    const user_id = token_split[0];
    const token = token_split[1];
    localStorage.setItem('user_id',user_id);
    localStorage.setItem('access_token', id_token);
  },
  isLoggedIn: function(){
    return !!localStorage.getItem('access_token');
  },
  getUserId: function(){
    return localStorage.getItem('user_id');
  },
  getAccessToken: function(){
    return localStorage.getItem('access_token');
  }
}
