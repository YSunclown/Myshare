<template>
    <div>
       <el-main>
        <el-row :gutter="20">
          <el-col :span="4">
            <el-button type="submit " @click="submitform('ruleForm')">新增</el-button>
        </el-col>
           <el-col :span="4">
    <!-- <img src="../../assets/pic.jpg" > -->
        </el-col>
        <el-col >
          <el-table
    :data="tableData3"
    max-height="250"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="分类"
      width="180">
    </el-table-column>
    <el-table-column
      prop="source"
      label="资源">
    </el-table-column>
      <el-table-column
      fixed="right"
      label="操作"
      width="120">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="lookRow(scope.$index, tableData3)"
          type="text"
          size="small">
          查看详情
        </el-button>
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData3)"
          type="text"
          size="small">
          移除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
        </el-col>
        </el-row>
       </el-main>
    </div>
</template>

<script>
export default {
  data(){
    return{
      tableData3: [{
          date: '2016-05-03',
          name: '图片',
         source: '海贼王第一集'
        }, {
          date: '2016-05-03',
          name: '图片',
         source: '海贼王第二集'
        }, {
          date: '2016-05-03',
          name: '视频',
         source: '海贼王第三集'
        }, {
         date: '2016-05-03',
          name: '图片',
         source: '海贼王第四集'
        }, {
         date: '2016-05-03',
          name: '图片',
         source: '海贼王第五集'
        }, {
          date: '2016-05-03',
          name: '视频',
         source: '海贼王第六集'
        }, {
          date: '2016-05-03',
          name: '图片',
         source: '海贼王第七集'
        }]
    }
  },
  methods: {
     deleteRow(index, rows) {
        rows.splice(index, 1);
      },
    back() {
      this.$router.push("/");
    }
  }
};
</script>

<style>

</style>