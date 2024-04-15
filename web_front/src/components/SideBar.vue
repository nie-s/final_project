<template>
  <el-aside width="400px">
    <el-menu :default-active="$route.path" @select="handleSelect">
      <el-menu-item index="/project/info">
        <template slot="title"><i class="el-icon-tickets"></i>Project Information</template>
      </el-menu-item>

      <el-menu-item index="/project/rp">
        <template slot="title"><i class="el-icon-reading"></i>Research Proposal</template>
      </el-menu-item>

      <el-submenu index="3">
        <template slot="title"><i class="el-icon-menu"></i>Milestones</template>
        <el-menu-item-group>
          <el-menu-item index="/project/ms1">April 6th</el-menu-item>
          <el-menu-item index="3-2">May</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: "SideBar",
  methods: {
    handleSelect(path) {
      this.$router.push(path)
    },
  }
}
</script>

<style scoped>


.el-menu {
  height: 100%;
  border-right: none !important;
  background: none;
  /*font-family: Arial;*/
  font-weight: bold;
}
.el-aside {
  color: #333;
  box-shadow: 5px 0 10px #eceaea;

  background-image: linear-gradient(to bottom, rgb(230, 241, 253) 10%, rgba(230, 241, 253, 0.8) 50%, rgba(255, 255, 255, 0)), url(../assets/side_bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;

  padding: 20px;
}

</style>
