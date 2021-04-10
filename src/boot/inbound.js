import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios

export default axios.create({
  baseURL: 'http://ec2-54-172-237-163.compute-1.amazonaws.com:9090/api/v1/category',
  headers: {
    'Content-type': 'application/json'
  }
})