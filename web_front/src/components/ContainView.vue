<template>
  <el-container class="contain-view">

    <el-header style="text-align: right; font-size: 12px">
      <span class="header_bar">Project</span>
      <span class="header_bar">Backtest</span>
      <span class="header_bar">Support</span>
    </el-header>

    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>

export default {
  name: "ContainView",
  components: {},
}
</script>

<style scoped>
.el-header {
  /*background-color: #B3C0D1;*/
  box-shadow: 0 5px 10px #eceaea;
  line-height: 60px;
}

.header_bar {
  margin: 0 10px;
  color: #6c6a6a;
}

.text-view {
  padding: 20px 20px 20px 30px;
  line-height: 180%;
  margin-bottom: 50px;
  font-family: "Georgia";
}


</style>
