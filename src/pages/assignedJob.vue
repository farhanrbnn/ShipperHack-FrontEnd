<template>
	<q-page>
  	<div id="main-row" class="row">
     <div class="col-12">
       <p class="title">Assigned Jobs</p>
       <q-separator color="#EFEFEF" inset />
       <q-table
          :columns="columns"
          row-key="name"
          class="assigned-table"
        />
     </div>
  	</div>
	</q-page>
</template>

<script>
export default {
	name: 'assignedJob',
	data () {
		return {
			columns: [
        {
          name: 'name',
          required: true,
          align: 'left'
        },
        { name: 'sku', align: 'center', label: 'SKU No.', field: 'sku' },
        { name: 'stored', align: 'center', label: 'Stored Date', field: 'stored',},
        { name: 'location', align: 'center', label: 'Location Bin', field: 'location' },
        { name: 'status', align: 'center',label: 'Status', field: 'status' },
        { name: 'action', align: 'center', label: 'Action', field: 'action' }
      ]
		}
	}

}
</script>

<style lang="scss">
.assigned-table {
	margin-top: 20px
}
#main-row {
  padding-top: 50px;
}

.title {
  font-size: 24px;
  font-weight: bold; 
}
</style>