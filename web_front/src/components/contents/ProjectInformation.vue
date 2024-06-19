<template>
  <div class="text-view">
    <h2>Introduction</h2>
    <p>Our final project is in the field of investment in convertible bonds, and our research will
      focus on quantitative factors mining and factor fusion to get convertible bond investment
      portfolios. </p>

    <p>The significance of this project lies in giving effective quantitative investment strategies to
      the convertible bond investors. This research aims to develop a comprehensive convertible
      bond investment system powered by quantitative methods, advanced machine learning
      models and related research. </p>

    <p>This investment system we want to create will automate portfolio construction based on the
      user's risk preference and demonstrate the effect of the strategy on historical data through
      backtesting. </p>

    <el-image
      style="width: 100px; height: 100px"
      :src="url"></el-image>
  </div>

</template>

<script>
export default {
  name: "ProjectInformation",
  data() {
    return {
      url: '../'
    }
  }
}
</script>

<style scoped>

</style>
