<template>
  <div>
      <el-menu
        style="width: 200px; min-height: calc(100vh - 50px);border: 2px solid red;"
        :default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose" 
        background-color="#30333c" text-color="#fff"
        router
      >
        <el-menu-item index="/">
          <el-icon><HomeFilled /></el-icon>
          <span>展示板</span>
        </el-menu-item>
        <el-sub-menu index="2">
          <template #title>
            <el-icon><location /></el-icon>
            <span>个人信息</span>
          </template>
          <!--<el-menu-item-group title="Group One">-->
            <el-menu-item index="/personal-info" >修改信息</el-menu-item>
            <el-menu-item index="/personal-mima">修改密码</el-menu-item>
          <!--</el-menu-item-group>-->
        </el-sub-menu>
        <el-menu-item index="/book-info" >
          <el-icon><document /></el-icon>
          <span>图书信息</span>
        </el-menu-item>
        <el-menu-item index="/borrow-info">
          <el-icon><setting /></el-icon>
          <span>借阅信息</span>
        </el-menu-item>
        <el-menu-item index="/borrow-status">
          <el-icon><setting /></el-icon>
          <span>借阅状态</span>
          <el-icon><Edit /></el-icon>
        </el-menu-item>
      </el-menu>
   </div>
    

</template>

<script>
import {Edit} from  "@element-plus/icons-vue"

export default{
    name:"MyAside",
    components:{
      Edit
    },
    data(){
        return{
            str:"hello",
            path: this.$route.path
            
        }
    }
}
</script>

