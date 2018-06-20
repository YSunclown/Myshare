<template>
    <div>
        <el-alert
              title="本博客仅供学习和交流使用，如作他用所承受的法律责任一概与作者无关"       
               type="warning"
                center
                description="作者：troublemaker"
               show-icon>
          </el-alert>
          <el-row :gutter="20">
               <el-col :span="6" :offset="6">
                
              </el-col>
              <el-col :span="6" :offset="6">
                <el-button type="primary" icon="el-icon-back" circle  @click="back()" ></el-button>
              </el-col>
         </el-row>
  
    
    
    </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.push("/");
    }
  }
};
</script>

<style>

</style>