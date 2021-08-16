<template>
  <div id = "home">
    <nav-bar class = "home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar';
import {getHomeMultidata} from 'network/home';
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from "./childComps/RecommendView.vue"



export default {
  name:"Home",
  components:{
    NavBar,
   HomeSwiper,
   RecommendView
  
    
 
  },
  data() {
    return{
    //  result:null
     banners: [],
     recommends: []
    }
  },
  
  created() {
    //1. 请求多个数据
    getHomeMultidata().then(res => {
      // console.log(res);
      // this.result = res;
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
      
    })
  }
}
</script>

<style scoped>
  .home-nav{
     background-color: #ff8198;        
    color:#fff;
  }
</style>

// 函数调用 - 压入函数栈（保存函数调用过程中所有变量）
// 函数调用结束 - 弹出函数栈（释放函数所有的变量）

//  function test() {
  const name = ['why','aaa']
}
//test()