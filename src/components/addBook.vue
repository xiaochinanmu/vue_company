<template>
  <div>
    <h3>添加书籍</h3>
    <el-form :model="newBook" label-width="100px">
      <el-form-item label="图书编号">
        <el-input v-model="newBook.isbn" placeholder="请输入图书编号"></el-input>
      </el-form-item>
      <el-form-item label="图书名称">
        <el-input v-model="newBook.name" placeholder="请输入图书名称"></el-input>
      </el-form-item>
      <el-form-item label="作者">
        <el-input v-model="newBook.author" placeholder="请输入作者"></el-input>
      </el-form-item>
      <el-form-item label="出版社">
        <el-input v-model="newBook.publisher" placeholder="请输入出版社"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleAddBook">添加书籍</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup(props, { emit }) {
    const newBook = ref({
      isbn: '',
      name: '',
      author: '',
      publisher: ''
    });

    const handleAddBook = () => {
      // 校验输入
      if (!newBook.value.isbn || !newBook.value.name || !newBook.value.author || !newBook.value.publisher) {
        // 你可以使用任何消息提示库
        alert('请填写完整的书籍信息');
        return;
      }

      // 通过 emit 向父组件发送事件
      emit('add-book', { ...newBook.value });

      // 清空输入框
      newBook.value = { isbn: '', name: '', author: '', publisher: '' };
      alert('书籍添加成功');
    };

    return {
      newBook,
      handleAddBook
    };
  }
});
</script>
