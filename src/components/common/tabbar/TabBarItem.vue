<template>
  
    <div  @click="itemClick" class="tab-bar-item">
      <div v-if="!isActive"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>
      <div :style="styleActive"><slot name="item-text"></slot></div>
      
      <!-- <img src="../../assets/img/tabbar/home.svg" alt="" > <div>首页</div> -->
  </div>
</template>
<script>
export default {
  name: "TabBarItem",

  props: {
    path: String,
    activeColor:{
      type: String,
      default:'red'
    }
  },
  // data() {
  //   return {
  //     isActive:false
  //   }
  // },
    methods: {
    itemClick (){
     this.$router.push(this.path)
    }
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1  // indexOf() 对()里面进行检验，如果不一致则等于-1，等于则不等于-1
    },
     styleActive() {
    return this.isActive ? {color:this.activeColor} : {}
  }
  }
 

}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  height:24px;
  width: 24px;
  margin-top: 3px;
  margin-bottom: 2px;
  vertical-align: middle;
}
.active {
  color: red;
}
</style>