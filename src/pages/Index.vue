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
          <q-table :columns="columns" :data="data" row-key="name">
            <template v-slot:body="props">
              <q-tr :props="props">
                <q-td key="sku" :props="props">
                  {{ props.row.sku }}
                </q-td>
                <q-td key="goods" :props="props">
                  {{ props.row.goods }}
                </q-td>
                <q-td key="exp" :props="props">
                  {{ props.row.exp }}
                </q-td>
                <q-td key="category" :props="props">
                  {{ props.row.category }}
                </q-td>
                <q-td key="location" :props="props">
                  {{ props.row.location }}
                </q-td>
                <q-td key="status" :props="props">
                  <div class="status-label label-green">
                    <p class="status-label__text"><q-icon name="fa fa-check" />Assigned</p>
                  </div>
                </q-td>
                <q-td key="action" :props="props">
                  <q-btn color="primary" label="edit" />
                </q-td>
              </q-tr>
            </template>
          </q-table>
        </div>
        <!-- <div class="no-active">
         <p>No Active Data</p>
         <q-btn unelevated color="primary" label="Generate Pick List From Inbound" />
       </div> -->
      </div>
      <hr />
    </div>
  </q-page>
</template>

<script>
import DataService from "../boot/axios";

export default {
  name: "PageIndex",
  components: {},
  data() {
    return {
      columns: [
        {
          name: "sku",
          align: "center",
          label: "SKU No.",
          field: "sku"
        },
        {
          name: "goods",
          align: "center",
          label: "Goods Qty.",
          field: "goods"
        },
        { name: "exp", 
          align: "center", 
          label: "Exp. Date", 
          field: "exp" },
        {
          name: "category",
          align: "center",
          label: "Category",
          field: "category"
        },
        {
          name: "location",
          align: "center",
          label: "Location Bin",
          field: "location"
        },
        {
          name: "status",
          align: "center",
          label: "Status",
          field: "status",
        },
        {
          name: "action",
          align: "center",
          label: "Action",
          field: "action",
        }
      ],
      data: [
      {sku:'SKU0001',goods:'25',exp:'27/03/5000',category:'A',location:'PendingXX01',status:'assigned', action:'edit'}
      ]
    }
  },
  created() {
    DataService.get()
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>