<template>
  <q-page>
  	<div id="main-row" class="row">
     <div class="col-12">
       <p class="title">Active Jobs</p>
       <q-separator color="#EFEFEF" inset />

       <div class="active">
        <q-card flat bordered class="active">
          <q-card-section class="q-pt-none">
            <div class="row">
              <div class="col-3">
                <p>Date</p>
                <h4>10/04/21</h4>
              </div>
              <div class="col-3">
                <p>P.O.ID</p>
                <h4>IB10002</h4>
              </div>
            </div>
          </q-card-section>
         </q-card>
         <q-table
          :data="data"
          :columns="columns"
          row-key="name"
        />
        </div>
       <!-- <div class="no-active">
         <p>No Active Data</p>
         <q-btn unelevated color="primary" label="Generate Pick List From Inbound" />
       </div> -->
     </div> 
     <hr>
    </div>
  </q-page>
</template>

<script>
import DataService from '../boot/axios'

export default {
  name: 'PageIndex',
  data () {
    return {
      columns: [
        {
          name: 'name',
          required: true,
          align: 'left'
        },
        { name: 'calories', align: 'center', label: 'Category', field: 'calories', sortable: true },
        { name: 'fat', align: 'center', label: 'Goods Qty.', field: 'fat', sortable: true },
        { name: 'carbs', align: 'center', label: 'Exp. Date', field: 'carbs' },
        { name: 'protein', align: 'center',label: 'Category', field: 'protein' },
        { name: 'sodium', align: 'center', label: 'Location Bin', field: 'sodium' },
        { name: 'calcium', align: 'center', label: 'Status', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
        { name: 'iron', align: 'center', label: 'Action', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
      ]
    }
  },
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
<style lang="scss">
h4 {
  margin-top: 10px;
  margin-bottom: 10px;
}
.q-pt-none {
  margin-top: 10px;
  margin-bottom: 10px;
}
.no-active {
  font-size: 18px;
  margin-top: 20px;
}

.title {
  font-size: 24px;
  font-weight: bold; 
}

#main-row {
  padding-top: 50px;
}

.col-12 {
  padding-left: 80px;
  padding-right: 80px;
}  

.active {
  margin-top: 20px;
  background-color: #EFEFEF;
}
</style>