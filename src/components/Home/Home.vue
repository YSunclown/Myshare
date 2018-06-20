<template >
<div>
    <el-main>
        <el-row :gutter="20">
        <el-col :span="22" :offset="2">
           <el-carousel indicator-position="outside">
               <el-carousel-item v-for="item in 3" :key="item">
               <h3></h3>
               </el-carousel-item>
           </el-carousel>
           
            <el-col :span="6" v-for="(o, index) in 8" :key="o" >
    <el-card :body-style="{ padding: '0px' }">
      <img src="../../assets/back.png" class="image">
      <!-- <div style="padding: 14px;">
        <span>好吃的汉堡</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button">操作按钮</el-button>
        </div>
      </div> -->
    </el-card>
  </el-col>
        </el-col>
     
</el-row>
</el-main>
</div>
</template>
<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(3n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(3n + 1) {
  background-color: #d3dce6;
}
.el-carousel__item:nth-child(3n + 2) {
  background-color: #1479ee;
}

/* 卡片 */
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>
<script>
export default {
  data() {
    return {
      currentDate: new Date()
    };
  }
};
</script>

