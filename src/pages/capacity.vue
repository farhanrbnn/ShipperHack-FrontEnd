<template>
	<q-page>
		<div id="main-row" class="row">
     <div class="col-12">
       <p class="title">Capacity</p>
       <q-separator color="#EFEFEF" inset />
     </div>
  	</div>
	</q-page>
</template>

<script>
import DataService from "../boot/axios";

export default {
	name: 'capacity',
	data () {
		return {

		}
	},
	created () {
		DataService.get()
		.then((res) => {
			console.log(res)
		})
		.catch((err) => {
			console.log(err)
		})
	}
}
</script>