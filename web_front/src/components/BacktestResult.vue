<template>
  <div style="padding: 30px">

    <div class="result">
      <div class="result-header">Result</div>
      <el-divider style="width: 95%"></el-divider>

      <el-row style="padding: 0 10px">
        <el-col :span="4">
          <p class="index-header">Beginning capital</p>
          <p class="index-value">$10,000,000</p>
        </el-col>
        <el-col :span="3">
          <p class="index-header">Total assets</p>
          <p class="index-value">$10,471,259</p>
        </el-col>
        <el-col :span="5">
          <p class="index-header">Accumulated profit/loss</p>
          <p class="index-value">$471,259</p>
        </el-col>
        <el-col :span="3">
          <p class="index-header">Sharp ratio</p>
          <p class="index-value">1.5</p>
        </el-col>
        <el-col :span="4">
          <p class="index-header">Annualized income</p>
          <p class="index-value">19.33%</p>
        </el-col>
        <el-col :span="3">
          <p class="index-header">Winning rate</p>
          <p class="index-value">65%</p>
        </el-col>

      </el-row>
    </div>
    <img :src="url" alt="" style="margin-top: 20px"/>
  </div>

</template>

<script>

export default {
  name: "BacktestResult",
  data() {
    return {
      url: require('../assets/result.jpg'),
    }
  },
}
</script>

<style>
.result {
  border: #eceaea 1px solid;
  padding: 16px;

}

.result p {
  margin: 10px 0;
}
.result-header {
  font-size: 20px;
  font-weight: bold;
}

.index-header {
  color: #bfbfbf;
}
</style>
