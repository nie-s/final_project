<template>
  <div style="padding: 30px">
    <el-row>
      <div class="result">
        <div class="result-header">Result</div>
        <el-divider style="width: 95%;"></el-divider>

        <el-row style="padding: 0 10px; margin-top: -8px">
          <el-col :span="5">
            <p class="index-header">Annualized Rate of Return</p>
            <p class="index-value"> {{ (data['res_stra'][0] * 100).toFixed(2) }} %</p>
          </el-col>
          <el-col :span="5">
            <p class="index-header">Annualized Volatility</p>
            <p class="index-value">{{ (data['res_stra'][1] * 100).toFixed(2) }} %</p>
          </el-col>
          <el-col :span="5">
            <p class="index-header">Annualized Sharpe Ratio</p>
            <p class="index-value">{{ (data['res_stra'][2] * 100).toFixed(2) }} %</p>
          </el-col>
          <el-col :span="5">
            <p class="index-header">Max Drawdown Rate</p>
            <p class="index-value">{{ (data['res_stra'][3] * 100).toFixed(2) }} %</p>
          </el-col>
          <el-col :span="4">
            <p class="index-header">Max Drawdown Duration</p>
            <p class="index-value">{{ data['res_stra'][4] }} </p>
          </el-col>

        </el-row>


        <el-row style="padding: 0 10px">
          <!--          <el-col :span="5" style="margin-top: 8px">-->
          <!--            <el-select v-model="option" placeholder="Please select" style="width:150px">-->
          <!--              <el-option-->
          <!--                v-for="item in optionList"-->
          <!--                :key="item.value"-->
          <!--                :label="item.label"-->
          <!--                :value="item.value">-->
          <!--              </el-option>-->
          <!--            </el-select>-->

          <!--          </el-col>-->
          <el-col :span="5">
            <p class="index-header">Annualized Excess Return</p>
            <p class="index-value">{{ (data[option][0] * 100).toFixed(2) }} %</p>
          </el-col>
          <el-col :span="5">
            <p class="index-header">Annualized Tracking Error</p>
            <p class="index-value">{{ (data[option][1] * 100).toFixed(2) }} %</p>
          </el-col>
          <el-col :span="5">
            <p class="index-header">Max Drawdown Rate</p>
            <p class="index-header">(relative to benchmark)</p>
            <p class="index-value">{{ (data[option][2] * 100).toFixed(2) }} %</p>
          </el-col>
          <el-col :span="4">
            <p class="index-header">Win Rate</p>
            <p class="index-value">{{ (data[option][3] * 100).toFixed(2) }} %</p>
          </el-col>
        </el-row>
      </div>

    </el-row>

    <div style="text-align: center;margin-top: -5px">
      <img :src="url" alt="" style="margin: 0 auto;z-index: -1;" width="500"/>
    </div>
  </div>

</template>

<script>

export default {
  name: "BacktestResult",
  data() {
    return {
      url: '',
      option: 'cb_index',
      optionList: [
        {
          value: 'stock_index',
          label: 'Stock Index'
        },
        {
          value: 'cb_index',
          label: 'CB Index'
        },
        {
          value: 'bond_index',
          label: 'Bond Index'
        },
      ],
      data: {}
    }
  },
  methods() {

  },
  mounted() {
    this.$EventBus.$on("getParam", (params) => {
      this.url = require(`../assets/images/${params + '.png'}`)

      this.$axios.get('../../static/json/' + params + '.json').then(res => {
        console.log(res.data)
        this.data = res.data
      })
    });
  }
}
</script>

<style>
.result {
  border: #eceaea 1px solid;
  padding: 16px;

}

.result p {
  margin: 4px 0;
}

.result-header {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: -8px
}


.index-header {
  color: #bfbfbf;
  font-size: 14px;
}

.index-value {
  font-size: 14px;
}
</style>
