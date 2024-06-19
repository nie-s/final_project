<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  position: relative;
}

html {
  height: 100%;
  overflow-y: hidden
}

body {
  height: 100%;
}
</style>
