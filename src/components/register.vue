<template >
  <div class="note">  
       <el-form :model="ruleForm" status-icon  ref="ruleForm" label-width="80px" >
         <div style="background-color:rgba(255,255,255,0.5);">
         <h1>{{ msg }}</h1>
          <el-form-item label="用户名：" prop="name" name="username">
             <el-input type="text" v-model="ruleForm.username" auto-complete="off" size="medium" clearable></el-input>
          </el-form-item>
          <el-form-item label="密 码：" prop="checkPass" name="password">
              <el-input type="password" v-model="ruleForm.password" auto-complete="off" size="medium" clearable></el-input>
          <span><br>密码只支持数字组合</span>
          </el-form-item>
  
          <el-form-item>
              
              <el-button type="primary" @click="submitForm()">提交</el-button>
              <el-button type="reset" @click="resetform()">重置</el-button>
              <span @click="back()" style="color:#0489cc;cursor:pointer; ">返回登录页面</span>
           </el-form-item>
            
           
         </div>
        </el-form>
  
   <!-- </form> -->
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";

export default {
  data() {
    return {
      ruleForm: {
        username: "",
        password: ""
      },

      msg: "注册"
    };
  },
  methods: {
    submitForm() {
      var name = this.ruleForm.username;
      var pass = this.ruleForm.password;
      console.log("--", name, pass);

      if (name == "" || name == null) {
        this.$message({
          message: "用户名不能为空！",
          type: "warning"
        });
        return;
      }
      if (pass == "" || pass == null) {
        this.$message({
          message: "密码不能为空！",
          type: "warning"
        });
        return;
      }

      const url = "http://127.0.0.1:5000/register";
      axios
        .post(url, this.ruleForm)
        .then(res => {
          if (res.data.data == "注册成功！") {
            this.$router.push("/");
            this.$message("注册成功！");
          } else if (res.data.data == "用户已存在！") {
            this.ruleForm.username = "";
            this.ruleForm.password = "";
            this.$message("用户已存在！！");
          } else {
            this.ruleForm.username = "";
            this.ruleForm.password = "";
            this.$message("注册失败！");
          }
        })
        .catch(function(error) {
          console.log(error);
          this.$message("注册失败！");
        });
    },
    resetform() {
      this.ruleForm.username = "";
      this.ruleForm.password = "";
      this.$message("密码已重置！");
    },
    back() {
      this.$router.push("/");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
form {
  padding: 0px 15px 15px 120px;
  text-align: center;
}
form {
  width: 500px;
  height: 300px;
}
form fieldset {
  border: 0;
  align: center;
}
form label {
  display: inline-block;
  width: 60px;
  text-align: right;
}
input {
  width: 240px;
  height: 30px;
}

body {
  width: 100%;
  height: 100%;
}

a {
  position: relative;
  bottom: -10px;
}
form {
  margin: 0% 20% 40%;
  padding-top: 20%;
}
.note {
  background: url(../assets/back.png) no-repeat;
  background-size: cover;
  height: 100%;
}
.el-input {
  width: 90%;
}
.el-button,
.el-checkbox {
  margin-bottom: 10px;
}
</style>