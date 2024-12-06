<template>
  <div>
    <h3>查询书籍</h3>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-input v-model="searchText" placeholder="请输入书籍名称或作者" clearable />
      </el-col>
      <el-col :span="6">
        <el-button type="primary" @click="handleSearch" size="mini">查询</el-button>
      </el-col>
    </el-row>

    <!-- 显示查询结果 -->
    <el-table :data="filteredBooks" border style="width: 100%">
      <el-table-column prop="isbn" label="图书编号" />
      <el-table-column prop="name" label="图书名称" />
      <el-table-column prop="author" label="作者" />
      <el-table-column prop="publisher" label="出版社" />
    </el-table>
  </div>
</template>

<script>
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  props: {
    books: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const searchText = ref(''); // 搜索文本
    const filteredBooks = ref(props.books); // 存储过滤后的书籍数据

    // 监听 books 数据变化
    watch(() => props.books, (newBooks) => {
      filteredBooks.value = newBooks;
    });

    // 搜索处理
    const handleSearch = () => {
      if (searchText.value.trim() === '') {
        filteredBooks.value = props.books;
      } else {
        filteredBooks.value = props.books.filter(book =>
          book.name.includes(searchText.value) || book.author.includes(searchText.value)
        );
      }
    };

    return {
      searchText,
      filteredBooks,
      handleSearch
    };
  }
});
</script>
