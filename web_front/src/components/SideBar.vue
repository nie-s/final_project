<template>
  <el-aside width="400px">
    <div class="side-header">
      <i class="el-icon-sunrise"></i> Trading
      <el-divider></el-divider>
    </div>

    <div class="factor">
      <div class="factor-header">Strategy</div>
      <el-radio-group v-model="radio" text-color="#e2eeee">
        <el-radio :label="1">Linear Strategy A + B</el-radio>
        <el-radio :label="2">Linear Strategy C + D</el-radio>
        <el-radio :label="3">Random Forest</el-radio>
        <el-radio :label="4">XGBoost</el-radio>
      </el-radio-group>
    </div>

    <div class="factor">
      <div class="factor-header">Preference</div>
      <div class="preference-content">
        <div class="preference-header"> Industry</div>
        <el-select v-model="industry_value" placeholder="Please select">
          <el-option
            v-for="item in industries"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>

      <div class="preference-content">
        <div class="preference-header"> History Volatility</div>
        <el-select v-model="volatility_value" placeholder="Please select">
          <el-option
            v-for="item in volatility"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>


      <div class="preference-content">
        <div class="preference-header"> Conversion Price</div>
        <el-select v-model="price_value" placeholder="Please select">
          <el-option
            v-for="item in price"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>

      <div style="text-align:center;margin-top: 40px">
        <el-button type="primary"><i class="el-icon-caret-right"></i> Run Backtest</el-button>
      </div>


    </div>
  </el-aside>
</template>

<script>
export default {
  name: "SideBar",
  methods: {
    handleSelect(path) {
      this.$router.push(path)
    },
  },
  data() {
    return {
      radio: 1,
      industries: [
        {
          value: 'materials',
          label: 'Materials'
        }, {
          value: 'industrials',
          label: 'Industrials'
        }, {
          value: 'consumer_discretionary',
          label: 'Consumer Discretionary'
        }, {
          value: 'consumer_staples',
          label: 'Consumer Staples'
        }, {
          value: 'health',
          label: 'Health Care'
        }, {
          value: 'financials',
          label: 'Financials'
        }, {
          value: 'information',
          label: 'Information Technology'
        }, {
          value: 'communication',
          label: 'Communication Services'
        }, {
          value: 'utilities',
          label: 'Utilities'
        }, {
          value: 'estate',
          label: 'Real Estate'
        },
      ],
      industry_value: '',
      volatility: [
        {
          value: 'high',
          label: 'High'
        }, {
          value: 'medium',
          label: 'Medium'
        }, {
          value: 'low',
          label: 'Low'
        }
      ],
      volatility_value: '',
      price: [
        {
          value: 'high',
          label: 'High'
        }, {
          value: 'medium',
          label: 'Medium'
        }, {
          value: 'low',
          label: 'Low'
        }
      ],
      price_value: '',
    };
  }
}
</script>

<style scoped>


.el-aside {
  color: #333;
  box-shadow: 5px 0 10px #eceaea;
  /*background-image: linear-gradient(to bottom, rgb(230, 241, 253) 10%, rgba(230, 241, 253, 0.8) 50%, rgba(255, 255, 255, 0)), url(../assets/side_bg.jpg);*/
  padding: 20px;
  height: 100%;
}

.aside_scroll .el-scrollbar__wrap {
  overflow-x: hidden;
}

.side-header {
  font-weight: bold;
  font-size: 30px;
  font-family: Sans-serif
}

.el-icon-sunrise {
  background: url('../assets/dollar-line.png') center center no-repeat;
  background-size: 24px;
}

.el-icon-sunrise:before {
  content: "11";
  visibility: hidden;
}

.factor {
  margin: 20px;
}

.factor-header {
  font-size: 18px;
  font-weight: bold;
}


/deep/ .el-radio {
  display: block;
  line-height: 23px;
  white-space: normal;
  color: black;
  margin: 15px;
}

.preference-content {
  margin: 15px;
}

.preference-header {
  height: 30px;
}

.preference-content .el-select {
  width: 250px;
}

</style>
