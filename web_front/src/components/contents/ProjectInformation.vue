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


    <div id="progress">
      <h2>Progress</h2>
      <el-steps direction="vertical" :active="5" style="margin-top: 40px">
        <el-step title="Convertible bond market analysis"></el-step>
        <el-step title="Analysis of the connection between the convertible bond market and the stock market"></el-step>
        <el-step title="Analysis of convertible bond terms"></el-step>
        <el-step title="Backtesting system and profit statistics system development" description=""></el-step>
        <el-step title="Factors mining"></el-step>
        <el-step title="Traditional multi-factor model"></el-step>
        <el-step title="Machine learning and deep learning models"></el-step>
        <el-step title="Webpage design"></el-step>
      </el-steps>
    </div>
  </div>

</template>

<script>
export default {
  name: "ProjectInformation"
}
</script>

<style scoped>


#progress {
  height: 500px;
  margin: 50px 0 ;
}
</style>
