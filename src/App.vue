<template>
  <div >
    <div id="app">
      <router-view/>
    </div>
    <!-- <img src="./assets/logo.png"> --> 
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'App',
  data () {

    return {

    }

  },

  methods: {

  

  }
}
</script>

<style>
/* #app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
   margin-top: 60px; 
} */
body {
    margin: 0;
    padding: 0;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
}
 
#app {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
}
 
.el-submenu [class^=fa] {
    vertical-align: baseline;
    margin-right: 10px;
}
 
.el-menu-item [class^=fa] {
    vertical-align: baseline;
    margin-right: 10px;
}
 
.toolbar {
    background: #f2f2f2;
    padding: 10px;
    margin: 10px 0;

}
 /* el-main{
    padding-left:70px;
    position: right;
} */
.fade-enter-active,
.fade-leave-active {
    transition: all 0.2s ease;
}
 
.fade-enter,
.fade-leave-active {
    opacity: 0;
}
</style>
