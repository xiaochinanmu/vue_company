<template>
  <div>
    <!-- 搜索栏 -->
    <el-row :gutter="20" class="search-row">
      <el-col :span="6">
        <el-input v-model="search1" placeholder="请输入图书编号" clearable />
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

    <!-- 添加书籍表单 -->
    <el-row :gutter="20" class="add-book-row" style="margin-top: 20px;">
      <el-col :span="4">
        <el-input v-model="newBook.isbn" placeholder="请输入图书编号" clearable />
      </el-col>
      <el-col :span="4">
        <el-input v-model="newBook.name" placeholder="请输入图书名称" clearable />
      </el-col>
      <el-col :span="4">
        <el-input v-model="newBook.author" placeholder="请输入作者" clearable />
      </el-col>
      <el-col :span="4">
        <el-input v-model="newBook.publisher" placeholder="请输入出版社" clearable />
      </el-col>
      <el-form-item>
        <el-button type="success" @click="addBook" size="mini">添加书籍</el-button>
      </el-form-item>
    </el-row>

    <!-- 表格展示 -->
    <el-table :data="filteredData" border style="width: 100%">
      <el-table-column prop="isbn" label="图书编号" sortable />
      <el-table-column prop="name" label="图书名称" />
      <el-table-column prop="price" label="价格" sortable />
      <el-table-column prop="author" label="作者" />
      <el-table-column prop="publisher" label="出版社" />
      <el-table-column prop="createTime" label="出版时间" sortable />
      <el-table-column prop="status" label="状态" sortable />
    </el-table>

    <!-- 可选的标题 -->
    <h3>{{ str }}</h3>
  </div>
</template>

<script>
export default {
  name:"BorrowInfo",
  data() {
    return {
      // 搜索条件
      search1: '',
      search2: '',
      search3: '',
      // 添加书籍时的新书数据
      newBook: {
        isbn: '',
        name: '',
        author: '',
        publisher: '',
        price: '',
        createTime: '',
        status: ''
      },
      // 所有书籍数据
      books: [],
      // 用于展示的过滤后的书籍数据
      filteredData: [],
      str: '书籍信息管理'
    };
  },
  methods: {
    // 添加书籍
    addBook() {
      // 校验数据是否完整
      if (!this.newBook.isbn || !this.newBook.name || !this.newBook.author || !this.newBook.publisher) {
        this.$message.error('请填写完整书籍信息！');
        return;
      }

      // 给书籍添加一些默认的属性值（如价格、出版时间、状态）
      const book = {
        ...this.newBook,
        price: this.newBook.price || '未定价',
        createTime: this.newBook.createTime || new Date().toLocaleDateString(),
        status: this.newBook.status || '在库'
      };

      // 将新书添加到书籍列表中
      this.books.push(book);
      // 清空添加书籍表单
      this.newBook = { isbn: '', name: '', author: '', publisher: '', price: '', createTime: '', status: '' };

      // 重新执行查询来更新表格
      this.fetchData();

      // 提示添加成功
      this.$message.success('书籍添加成功！');
    },
    
    // 查询数据
    fetchData() {
      // 基于搜索条件过滤书籍数据
      this.filteredData = this.books.filter(book => {
        return (
          (!this.search1 || book.isbn.includes(this.search1)) &&
          (!this.search2 || book.name.includes(this.search2)) &&
          (!this.search3 || book.author.includes(this.search3))
        );
      });
    }
  },
  // 在页面加载时初始化展示的数据
  created() {
    this.filteredData = this.books;
  }
};
</script>

<style scoped>
.search-row {
  margin-top: 20px;
}
.add-book-row {
  margin-top: 20px;
}
</style>
