<template>
  <div class="main-container">
    <el-container>
      <side-bar></side-bar>
      <contain-view></contain-view>
    </el-container>
  </div>
</template>

<script>
import SideBar from "./SideBar";
import ContainView from "./ContainView";

export default {
  name: 'HelloWorld',
  components: {ContainView, SideBar},
  data() {
    return {}
  },
  methods: {},
  created: function () {
  }
}
</script>

<style>

html, body, #app, .el-container {
  padding: 0;
  margin: 0;
  height: 100%;
}

.main-container {
  height: 100%;
  width: 100%;
}


</style>
