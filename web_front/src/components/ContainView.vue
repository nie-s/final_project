<template>
  <el-container class="contain-view">

    <el-header style="text-align: left; font-size: 28px; height: 90px">
      <span class="header-bar">Backtest Laboratory</span>
      <span class="user-heading" @click="goToDocument">Document</span>
    </el-header>

    <el-main>
      <backtest-result></backtest-result>
    </el-main>
  </el-container>
</template>

<script>
import BacktestResult from "./BacktestResult";

export default {
  name: "ContainView",
  components: {BacktestResult},
  methods: {
    goToDocument() {
      this.$router.push({path: `/document`})
    }
  }
}
</script>

<style scoped>

.el-container {
  height: 100%;
}

.el-header {
  /*background-color: #B3C0D1;*/
  box-shadow: 0 5px 10px #eceaea;
  line-height: 90px;
}

/deep/ .el-main {
  overflow: visible;
  padding: 0;
}

.header-bar {
  margin: 0 25px;
  font-weight: bold;
}

.user-heading {
  float: right;
  font-size: 18px;
  color: #b6b6b6;
}

</style>
