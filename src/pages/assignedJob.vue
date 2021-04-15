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
              <div v-if="props.row.status === true" class="status-label label-grey">
                <p class="status-label__text">Dispatched</p>
              </div>
              <div v-if="props.row.status === false" class="status-label label-blue">
                <p class="status-label__text">Stored</p>
              </div>
            </q-td>
            <q-td key="action" :props="props">
              <q-btn v-if="props.row.status === true" color="primary" label="finalized" />
              <q-btn v-if="props.row.status === false" flat color="primary" disable label="finalized" />
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
      data: []
		}
	},
  async created () {

    // const arrayLocation = []

    // await DataService.get('/location-bin')
    // .then((res) => {
    //   const apiData = res.data

    //   for(let i = 0; i < apiData.length; i++) {
    //     arrayLocation.push(apiData[i].name)
    //   }

    // })
    // .catch((err) => {
    //   console.log(err)
    // })

    await DataService.get('/inbound')
    .then((res) => {
      const apiData = res.data.data
      const dataTable = []


      for(let i = 0; i < apiData.length; i++) {
        const timestamp = new Date(apiData[i].received_timestamp)

        const realDate = timestamp.getDate() + '/' + (timestamp.getMonth() + 1) + '/' + timestamp.getFullYear()

        const newData = {
          sku: apiData[i].serial,
          stored: realDate,
          location: arrayLocation[i],
          status: apiData[i].is_done,
          action:'finalized'
        }
         dataTable.push(newData)
      }

      this.data = dataTable

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