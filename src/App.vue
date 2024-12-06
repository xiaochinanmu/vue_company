<template>
  <div class="common-layout">
      <Header/>
      <el-container >
        <Aside />
        <el-main :style="{ border: '1px solid #000'}"><router-view /></el-main>
        <!--  <Validate/>  主体-->
      </el-container>
   
  </div>

</template>

<script>
//import myHelloWor from './components/HelloWorld.vue'
import Header from "./components/Header";
import Aside from "./components/Aside";
//import Validate from "./components/validate";
export default {
  name: 'App',
  components: {

    Header,
    Aside,
    //Validate
  }
}
</script>


