<template>
  <div class="document-container">
    <el-header style="text-align: left; font-size: 28px; height: 90px">
      <span class="header-bar">Documents</span>
      <span class="user-heading" @click="goToLab">Laboratory</span>
    </el-header>

    <el-row style="height: 100%;font-family: Georgia">
      <el-col :span="6" style="height: 100%">
        <el-menu style="height: 100%" @select="handleSelect">
          <el-menu-item index="0">
            <i class="el-icon-tickets"></i>
            <span slot="title">Development Stage</span>
          </el-menu-item>
          <el-menu-item index="1">
            <i class="el-icon-tickets"></i>
            <span slot="title"> Industry Distribution</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-tickets"></i>
              <span slot="title">Market Participants</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">Original Shareholders</el-menu-item>
              <el-menu-item index="2-2">Fund Institutions</el-menu-item>
              <el-menu-item index="2-3">Securities</el-menu-item>
              <el-menu-item index="2-4">Insurance Institutions</el-menu-item>
              <el-menu-item index="2-5">Other Types of Institutions</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-tickets"></i>
              <span slot="title">Performance in Different Market</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">Performance in A Bear Market</el-menu-item>
              <el-menu-item index="3-2">Performance in A Bull Market</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-tickets"></i>
              <span slot="title">Convertible bond Transaction Terms</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="4-1">Basic Elements</el-menu-item>
              <el-menu-item index="4-2">Conversion Terms</el-menu-item>
              <el-menu-item index="4-3">Pure Bond Terms</el-menu-item>
              <el-menu-item index="4-4">Three Important Additional Terms</el-menu-item>
              <el-menu-item index="4-4">Five Common Lifecycle</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>

      <el-col :span="18" style="overflow-y:scroll;overflow-x:hidden;height:100%">
        <post0 v-if="index==='0'"></post0>
        <post1 v-if="index==='1'"></post1>
        <post21 v-if="index==='2-1'"></post21>
        <post22 v-if="index==='2-2'"></post22>
        <post23 v-if="index==='2-3'"></post23>
        <post24 v-if="index==='2-4'"></post24>
        <post25 v-if="index==='2-5'"></post25>
        <post31 v-if="index==='3-1'"></post31>
        <post32 v-if="index==='3-2'"></post32>
        <post41 v-if="index==='4-1'"></post41>
        <post42 v-if="index==='4-2'"></post42>
        <post43 v-if="index==='4-3'"></post43>
        <post44 v-if="index==='4-4'"></post44>
        <post45 v-if="index==='4-5'"></post45>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Post0 from "./posts/Post0";
import Post1 from "./posts/Post1";
import Post21 from "./posts/Post21";
import Post22 from "./posts/Post22";
import Post23 from "./posts/Post23";
import Post24 from "./posts/Post24";
import Post25 from "./posts/Post25";
import Post31 from "./posts/Post31";
import Post32 from "./posts/Post32";
import Post41 from "./posts/Post41";
import Post42 from "./posts/Post42";
import Post43 from "./posts/Post43";
import Post44 from "./posts/Post44";
import Post45 from "./posts/Post45";

export default {
  name: "Document",
  components: {
    Post45,
    Post44, Post43, Post42, Post41, Post32, Post31, Post25, Post24, Post23, Post22, Post21, Post1, Post0
  },
  data() {
    return {
      index: 0,
    }
  },
  methods: {
    goToLab() {
      this.$router.push({path: `/`})
    },
    handleSelect(index) {
      console.log(index)
      this.index = index
    }
  }
}
</script>

<style scoped>

.el-header {
  border-bottom: 1px solid #eceaea;
  line-height: 90px;
}

.el-aside {
  color: #333;
  box-shadow: 5px 0 10px -5px #eceaea;
  /*background-image: linear-gradient(to bottom, rgb(230, 241, 253) 10%, rgba(230, 241, 253, 0.8) 50%, rgba(255, 255, 255, 0)), url(../assets/side_bg.jpg);*/
  height: 100%;
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

html, body, #app {
  height: 100%;
}

.document-container {
  width: 80%;
  margin: auto;
  height: 100%;
  left: 0;
  right: 0;
  position: fixed;
}

* {
  margin: 0;
  padding: 0;
}

.text-container {
  line-height: 2em;
  margin: 30px;
  text-indent: 40px;
  height: 100%;
}

.text-container p {
  text-indent: 40px;
  margin: 2em 0 2em 0;
  font-family: Georgia;
}
</style>
