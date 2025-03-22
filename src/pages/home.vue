<!-- src/views/AddBook.vue -->
<template>
  <div>
    <h1>测试Git</h1>
    <h1>添加书籍</h1>
    <form @submit.prevent="addBook">
      <div>
        <label for="title">书名：</label>
        <input v-model="title" id="title" type="text" required />
      </div>
      <div>
        <label for="author">作者：</label>
        <input v-model="author" id="author" type="text" required />
      </div>
      <div>
        <label for="year">出版年份：</label>
        <input v-model="year" id="year" type="number" required />
      </div>
      <button type="submit">添加书籍</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: "HomePage",
  setup() {
    const title = ref('');
    const author = ref('');
    const year = ref('');
    const router = useRouter();

    const addBook = () => {
      // 获取已保存的书籍列表
      const books = JSON.parse(localStorage.getItem('books')) || [];
      const newBook = {
        title: title.value,
        author: author.value,
        year: year.value
      };
      
      // 将新书添加到书籍列表
      books.push(newBook);
      
      // 更新 localStorage
      localStorage.setItem('books', JSON.stringify(books));

      // 跳转到查看书籍页面
      router.push('/');
    };

    return {
      title,
      author,
      year,
      addBook
    };
  }
};
</script>
