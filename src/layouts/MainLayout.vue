<!-- HEADER APP -->
<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="top-header">
    </q-header>
     <q-drawer 
        show-if-above
        :width="250"
        :breakpoint="500"
        bordered
        content-class="bg-grey-3"
      >
        <q-scroll-area class="fit">
          <q-list>

            <template>
              <div class="flex flex-center">
                <img src="../assets/Logo.png">
                <h5 class="flex flex-center">Warehouse NBWC</h5>
              </div>
              <q-expansion-item
                icon="perm_identity"
                label="Put List">
                <q-card class="bg-grey-9">
                 <!--  <q-card-section>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                    commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                    eveniet doloribus ullam aliquid.
                  </q-card-section> -->
                </q-card>
              </q-expansion-item>
              <q-expansion-item
                icon="perm_identity"
                label="Report">
                <q-card class="bg-grey-9">
                 <!--  <q-card-section>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                    commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                    eveniet doloribus ullam aliquid.
                  </q-card-section> -->
                </q-card>
              </q-expansion-item>
              <!-- <q-item :key="index" clickable :active="menuItem.label === 'Outbox'" v-ripple>
                <q-item-section avatar>
                  <q-icon :name="menuItem.icon" />
                </q-item-section>
                <q-item-section>
                  {{ menuItem.label }}
                </q-item-section>
              </q-item> -->
              <!-- <q-separator :key="'sep' + index"  v-if="menuItem.separator" /> -->
            </template>

          </q-list>
        </q-scroll-area>
      </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout'
  // data() {
  //   return {
  //     drawer: false,
  //     menuList

  //   }
  // }
}
</script>
<style lang="scss">
img {
  margin-top: 13px;
}

.top-header {
  height: 80px;
  background-color: #FAFAFA;
}

.fit {
  background-color: #404040;
  color: white;
  font-size: 18px;
}

</style>
