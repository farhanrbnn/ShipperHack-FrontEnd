<template>
	<q-page>
  	<div id="main-row" class="row">
     <div class="col-12">
       <p class="title">Assigned Jobs</p>
       <q-separator color="#EFEFEF" inset />
       <q-table
          :columns="columns"
          :data="data"
          row-key="name"
          class="assigned-table"
        >
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="sku" :props="props">
              {{ props.row.sku }}
            </q-td>
            <q-td key="stored" :props="props">
              {{ props.row.stored }}
            </q-td>
            <q-td key="location" :props="props">
              {{ props.row.location }}
            </q-td>
            <q-td key="status" :props="props">
              {{ props.row.status }}
            </q-td>
            <q-td key="action" :props="props">
              <q-btn color="primary" label="finalized" />
            </q-td>
          </q-tr>
        </template>
      </q-table>
     </div>
  	</div>
	</q-page>
</template>

<script>
import DataService from "../boot/axios";

export default {
	name: 'assignedJob',
	data () {
		return {
			columns: [
        { name: 'sku', align: 'center', label: 'SKU No.', field: 'sku' },
        { name: 'stored', align: 'center', label: 'Stored Date', field: 'stored',},
        { name: 'location', align: 'center', label: 'Location Bin', field: 'location' },
        { name: 'status', align: 'center',label: 'Status', field: 'status' },
        { name: 'action', align: 'center', label: 'Action', field: 'action' }
      ],
      data: [
      {sku:'SKU001', stored: '10/04/2021', location: 'AIAssignXX01', status: 'Dispatched', action: 'finalized'},
      {sku:'SKU002', stored: '10/04/2021', location: 'AIAssignXX02', status: 'Dispatched', action: 'finalized'}
      ]
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