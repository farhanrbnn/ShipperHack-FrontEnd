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
                <router-link to="/">
                  <img src="../assets/Logo.png">
                </router-link>
                <h5 class="flex flex-center">Warehouse NBWC</h5>
              </div>
              <q-expansion-item
                icon="perm_identity"
                label="Put List">
                <q-card class="bg-grey-9">
                  <div>
                    <router-link to="/">
                      <q-item class="item-main dropdown">Active Job</q-item>
                    </router-link>
                    <router-link to="/assigned-job">
                      <q-item class="item dropdown">Assigned Job</q-item>
                    </router-link>
                  </div>
                </q-card>
              </q-expansion-item>
              <q-expansion-item
                icon="assessment"
                label="Report">
                <q-card class="bg-grey-9">
                  <div>
                    <router-link to="/capacity">
                      <q-item class="item dropdown">Capacity</q-item>
                    </router-link>
                    <router-link to="/statistics">
                      <q-item class="item dropdown">Statistics</q-item>  
                    </router-link>
                  </div>
              </q-card>
            </q-expansion-item>
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
  name: "MainLayout"
};
</script>