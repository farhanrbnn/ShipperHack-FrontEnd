// API CONNECTION
import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios

export default axios.create({
  baseURL: 'https://covid19.mathdro.id/api',
  headers: {
    'Content-type': 'application/json'
  }
})