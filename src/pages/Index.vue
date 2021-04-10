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
                  <h4>{{today}}</h4>
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
                  <div v-if="props.row.status.automated === true" class="status-label label-green">
                    <p class="status-label__text"><q-icon name="fa fa-magic" />Assigned</p>
                  </div>
                  <div v-if="props.row.status.normal === true" class="status-label label-green">
                    <p class="status-label__text"><q-icon name="fa fa-check" />Assigned</p>
                  </div>
                  <div v-if="props.row.status.normal === false" class="status-label label-grey">
                    <p class="status-label__text">Pending</p>
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
      today: null,
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
      data: []
    }
  },
 created() {
    const dateNow = new Date()
    const todayDate = dateNow.getDate() + '/' + (dateNow.getMonth() + 1) + '/' + dateNow.getFullYear()

    this.today = todayDate
    
    DataService.get('/inbound')
      .then((res) => {
        const apiData = res.data

        const dataTable = []

        for(let i = 0; i < apiData.length; i++) {
          const timestamp = new Date(apiData[i].exp_date)

          const realDate = timestamp.getDate() + '/' + (timestamp.getMonth() + 1) + '/' + timestamp.getFullYear()

          const newData = { 
            sku:apiData[i].serial,
            goods:apiData[i].good_qty,
            exp:realDate,
            location:apiData[i].location_bin_id,
            category:apiData[i].category_id,
            status: {
              normal: apiData[i].is_dispatch,
              automated: apiData[i].is_automated
            }
          }

          dataTable.push(newData)

        }

        this.data = dataTable
        
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
</script>