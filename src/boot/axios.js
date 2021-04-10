// API CONNECTION
import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios

export default axios.create({
  baseURL: 'http://ec2-54-226-184-221.compute-1.amazonaws.com:9090/api/v1',
  headers: {
    'Content-type': 'application/json'
  }
})