<template>
    <div>
        <el-header>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
           
  <el-menu-item index="1">
 <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 50px; width:50px">

   <div id="div1" style="display:block;">
  <el-radio-button :label="false" @click="open1()"><i class="el-icon-plus"></i></el-radio-button>
   </div>
  <div id="div2" style="display:block;">
  <el-radio-button  :label="true" @click="close1()"  ><i class="el-icon-minus" ></i></el-radio-button>
</div>
</el-radio-group> -->

<!-- <el-button icon="el-icon-plus" v-model="isCollapse" @click="open()"   type="text" v-if="flag1"></el-button> -->
<!-- <el-button icon="el-icon-minus" v-model="isCollapse" @click="close()"   type="text" v-if="flag2"></el-button> -->
<router-link to="/home">
     <img src="../assets/title.png" href="/home"  width="50px">
</router-link>
 
  </el-menu-item>
  <el-submenu index="2">
    <template slot="title"> <img src="../assets/about.png" width="50px"></template>
    <el-menu-item index="2-1">INFO</el-menu-item>
    <el-menu-item index="2-2">HOBBY</el-menu-item>
    <el-menu-item index="2-3">NOW</el-menu-item>
    </el-submenu>
    <el-submenu index="3">
    <template slot="title"><img src="../assets/chat.png" width="50px"></template>
      <el-menu-item index="3-1">OFFEN</el-menu-item>
      <el-menu-item index="3-2">USUSLLY</el-menu-item>
      <el-menu-item index="3-3">NEVER</el-menu-item>
  </el-submenu>
 
</el-menu>
        </el-header>

<el-menu  router :default-active="$route.path"  class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"   :collapse="isCollapse" style="position:absolute; z-index:99999;">
    
  
    <el-menu-item index="/home" >
    <i class="el-icon-star-off"></i>
    <span slot="title">我的主页</span>
  </el-menu-item>
  <el-menu-item index="/diary" >
    <i class="el-icon-menu" ></i>
    <span slot="title">我的日志</span>
  </el-menu-item>
  <el-menu-item index="/travel" >
    <i class="el-icon-location"></i>
    <span slot="title">我的旅行</span>
  </el-menu-item>
  <el-menu-item index="/source" >
    <i class="el-icon-document"></i>
    <span slot="title">我的资源</span>
  </el-menu-item>
  <el-menu-item index="/count" >
    <i class="el-icon-setting"></i>
    <span slot="title">我的统计</span>
  </el-menu-item>
</el-menu>
   

        <router-view/>
    </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      isCollapse: true,
   
    };
  },
  methods: {
    open1() {
      console.log("111".sdsdsdds);
      document.getElementById('div1').style.display='none';
      document.getElementById('div2').style.display='block';
      
    },
    close1() {
      document.getElementById('div1').style.display='block';
      document.getElementById('div2').style.display='none';
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
      
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
 .el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
/* el-radio-button {
  width: 10px;
  height: 5px;
}  */

</style>

