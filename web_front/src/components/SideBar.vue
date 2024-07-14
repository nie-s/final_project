<template>
  <el-aside width="450px">
    <div class="side-header">
      <i class="el-icon-sunrise"></i> Trading
      <el-divider></el-divider>
    </div>

    <div class="factor">
      <div class="factor-header">Strategy</div>
      <el-radio-group v-model="radio" text-color="#e2eeee" @change="handleClick">
        <el-radio :label="1">Linear Strategy 1</el-radio>
        <el-radio :label="2">Linear Strategy 2</el-radio>
        <el-radio :label="3">Linear Strategy 3</el-radio>
        <el-radio :label="4">Random Forest</el-radio>
        <el-radio :label="5">XGBoost</el-radio>
        <el-radio :label="6">Transformer</el-radio>
      </el-radio-group>
    </div>

    <div class="factor">
      <div class="factor-header">Preference</div>
      <div class="preference-content">
        <span class="preference-header"> Industry</span>
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
        <span class="preference-header"> History Volatility</span>
        <el-select v-model="volatility_value" placeholder="Please select" :disabled="radio===6">
          <el-option
            v-for="item in volatility"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>


      <div class="preference-content">
        <span class="preference-header"> Conversion Price</span>
        <el-select v-model="price_value" placeholder="Please select">
          <el-option
            v-for="item in price"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>


      <div class="preference-content">
        <span class="preference-header"> Bond Price</span>
        <el-select v-model="bond_value" placeholder="Please select">
          <el-option
            v-for="item in bond"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>


      <div style="text-align:center;margin-top: 20px">
        <el-button type="primary" @click="run"><i class="el-icon-caret-right"></i> Run Backtest</el-button>
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
    handleClick() {
      if (this.radio === 6) {
        this.volatility_value = 'ALL'
        console.log(this.volatility_value)
      }
    },
    anyEmpty() {
      if (this.radio === 6) {
        return this.industry_value === '' || this.price_value === '' || this.bond_value === ''
      } else {
        return this.industry_value === '' || this.volatility_value === '' || this.price_value === '' || this.bond_value === ''
      }
    },
    run() {
      if (this.anyEmpty()) {

        this.$alert('Required field(s)', 'Warning', {
          confirmButtonText: 'Confirm',
          type: 'warning'
        });


      } else {
        let file_name = 'strategy' + this.radio.toString() + '_'
        if (this.industry_value === 'ind_mas') {
          file_name += 'Industrials & Materials_'
        } else if (this.industry_value === 'consumer_health') {
          file_name += 'Consumer Goods & Health Care_'
        } else {
          file_name += 'Finance & Technology & Utilities_'
        }

        file_name += this.volatility_value + '_' + this.price_value + '_' + this.bond_value

        console.log(file_name)

        this.$EventBus.$emit('getParam', file_name)
      }
    }
  },
  data() {
    return {
      radio: 1,
      industries: [
        {
          value: 'ind_mas',
          label: 'Industrials & Materials'
        }, {
          value: 'consumer_health',
          label: 'Consumer Goods & Healthcare'
        }, {
          value: 'financials',
          label: 'Financials & Technology & Utilities'
        }
      ],
      industry_value: '',
      volatility: [
        {
          value: 'ALL',
          label: 'All'
        }, {
          value: 'Tail',
          label: 'Tail'
        }, {
          value: 'Head',
          label: 'Head'
        },
      ],
      volatility_value: '',
      price: [
        {
          value: 'ALL',
          label: 'All'
        }, {
          value: 'Tail',
          label: 'Tail'
        }, {
          value: 'Head',
          label: 'Head'
        },

      ],
      price_value: '',
      bond: [
        {
          value: 'ALL',
          label: 'All'
        }, {
          value: 'Tail',
          label: 'Tail'
        }, {
          value: 'Head',
          label: 'Head'
        },

      ],
      bond_value: '',
    };
  },

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
  overfhead-x: hidden;
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
  margin: 18px 18px 0 18px;
}

.factor-header {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}


/deep/ .el-radio {
  display: block;
  line-height: 23px;
  white-space: normal;
  color: black;
  margin: 8px 10px;
}

.preference-content {
  margin: 10px;
  height: 55px;
}

.preference-header {
  height: 40px;
  line-height: 38px;
}

.preference-content .el-select {
  width: 200px;
  float: right
}

</style>
