<template>
  <q-page class="flex flex-center">
  	<router-link to="/next">
	   <!--  <img
	      alt="Quasar logo"
	      src="~assets/quasar-logo-full.svg"
	    > -->
	    <h1>HOME PAGE</h1>
    </router-link>
  </q-page>
</template>

<script>
import DataService from '../boot/axios'

export default {
  name: 'PageIndex',
  created() {
  	DataService.get()
  	.then((res)=>{
  		console.log(res)
  	})
  	.catch((err)=>{
  		console.log(err)
  	})
  }
}
</script>
