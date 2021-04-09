<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
   watch: {
        $route: {
            immediate: true,
            handler(to, from) {
                document.title = to.meta.title || 'NBWC';
            }
        },
    }
}
</script>
