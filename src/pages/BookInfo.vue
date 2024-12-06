<template>
  <div>

    <el-row :gutter="20" class="search-row">
      <el-col :span="6">
        <el-input v-model="search1" placeholder="请输入图书编号" clearable  />
      </el-col>
      <el-col :span="6">
        <el-input v-model="search2" placeholder="请输入图书名称" clearable/>
      </el-col>
      <el-col :span="6">
        <el-input v-model="search3" placeholder="请输入作者" clearable />
      </el-col>
      <el-form-item>
        <el-button type="primary" style="margin-left: 1%" @click="fetchData" size="mini">查询</el-button>
      </el-form-item>
    </el-row>

    <!-- 表格展示 -->
    <el-table :data="filteredData" border style="width: 100%">
      <el-table-column prop="isbn" label="图书编号" sortable />
      <el-table-column prop="name" label="图书名称" />
      <el-table-column prop="price" label="价格" sortable/>
      <el-table-column prop="author" label="作者" />
      <el-table-column prop="publisher" label="出版社" />
      <el-table-column prop="createTime" label="出版时间" sortable/>
      <el-table-column prop="status" label="状态" sortable/>
     
    </el-table>

    <!-- 可选的标题 -->
    <h3>{{ str }}</h3>
  </div>
</template>

<script>
import axios from 'axios'; // 引入 axios
//import request from "../utils/request"

export default {
  name: "MyValidate",
  data() {
    return {
      str: "hello", // 可以用于其他文本显示
      tableData: [], // 用于存放从后端获取的数据
      //searchParams: {
        search1: '',      // 图书编号搜索条件
        search2: '',  // 图书名称搜索条件
        search3: ''   // 作者搜索条件
      //}
    };
  },
  mounted() {
    this.fetchData(); // 在组件加载时调用数据获取方法
  },
  computed: {
    // 过滤后的数据，根据搜索条件进行筛选
    filteredData() {
      return this.tableData.filter(item => {
        return (
          (this.searchParams.isbn ? item.isbn.includes(this.searchParams.isbn) : true) &&
          (this.searchParams.bookName ? item.bookName.includes(this.searchParams.bookName) : true) &&
          (this.searchParams.nickName ? item.nickName.includes(this.searchParams.nickName) : true)
        );
      });
    }
  },
  methods: {
    // 获取数据的方法
    fetchData() {
      axios.get('http://localhost:9876/api/book?pageNum=1&pageSize=10&search1=&search2=&search3=') // 假设你的 API URL 是 /api/books
        .then((response) => {
          if (response.data.code === "0") { // 判断返回的 code 是否为 0，表示成功
            this.tableData = response.data.data.records; // 获取 records 数据
          } else {
            console.error("获取数据失败:", response.data.msg); // 错误提示
          }
        })
        .catch((error) => {
          console.error("获取数据失败:", error);
        });
    }/*,
    load(){
      request.get('/book',{
          params:{
          pageNum: 1,
          pageSize: 10,
          search1: this.search1,
          search2: this.search2,
          search3: this.search3
        }
      }).then(res =>{
        console.log(res)
        this.tableData = res.data.records
        this.total = res.data.total
      })
    },*/

    // 搜索框内容变化时调用的处理函数
    /*handleSearch() {
      // 当搜索条件发生变化时，computed 中的 filteredData 会自动重新计算
    }*/
  }
};
</script>

<style scoped>
.search-row {
  margin-bottom: 20px;
}
</style>
