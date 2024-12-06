<!-- src/views/ViewBooks.vue -->
<template>
  <div>
    <h1>书籍列表</h1>
    <ul>
      <li v-for="(book, index) in books" :key="index">
        {{ book.title }} - {{ book.author }} ({{ book.year }})
      </li>
    </ul>
    <button @click="goToAddPage">添加新书籍</button>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'BorrowStatus',
  setup() {
    const books = ref([]);
    const router = useRouter();

    // 获取书籍列表
    const loadBooks = () => {
      const savedBooks = JSON.parse(localStorage.getItem('books')) || [];
      books.value = savedBooks;
    };

    const goToAddPage = () => {
      router.push('/'); // 跳转到添加书籍页面
    };

    onMounted(() => {
      loadBooks(); // 组件加载时读取书籍信息
    });

    return {
      books,
      goToAddPage
    };
  }
};
</script>

