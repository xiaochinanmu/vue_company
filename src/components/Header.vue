<template>
 <div style="height: 50px; line-height:50px; border: 1px solid #ccc; display: flex;margin-top: -10px;">
   <div style="width: 200px; padding-left:30px; font-weight: bold; color:dodgerblue">
     <img :src="imgUrl" class="icon" >
     图书馆管理系统</div>
   <div style="flex: 1;border: 1px solid #ccc;"></div>
   <div style="width: 100px;margin-top: 20px;" >
     <el-dropdown>
      <span class="el-dropdown-link">
      游客<el-icon class="el-icon--right">
          <arrow-down />
          </el-icon>
      </span>
       <template #dropdown>
         <el-dropdown-menu>
           <el-dropdown-item @click="exit">退出系统</el-dropdown-item>
         </el-dropdown-menu>
       </template>
     </el-dropdown>
   </div>
 </div>
</template>
<script>

export default{
    name:"MyHeader",
    data(){
        return{
            str:"hellosssbbb"
        }
    }
}
</script>