<template>
  <div class="app-footer">
   <router-link :to="{name:'home'}" class="box show" tag='div'>
       <i class='fa fa-home' ></i>
       <span>首页</span>
   </router-link>
   <router-link :to="{name:'list'}" class="box" tag='div'>
       <i class='fa fa-th-large' ></i>
       <span>分类</span>
   </router-link>
   <router-link :to="{name:'shop'}" class="box" tag='div'>
       <i class='fa fa-free-code-camp'></i>
       <span>吃饭吧</span>

   </router-link >
 
   

   </router-link>
   <router-link :to="{name:'cars'}" tag='div'  class="box">
       <i class='fa fa-shopping-cart'></i>
       <span>购物车</span>
   </router-link>
   <router-link :to="{name:'mine'}" class="box" tag='div'>
       <i class='fa fa-user-o'></i>
       <span>我的易果</span>
   </router-link>

  </div>
</template>
<script>
export default {
  name:'app-footer',
  
  
}
</script>
<style scoped>
.app-footer{
	left:0;
    border-top:1px solid #ccc;
    position:fixed;
    bottom:0;
    height:50px;
    background: #ccc;
    width:100%;
    display:flex;
    justify-content: space-around;
    background: #fff;
    left:0;
    z-index: 99999999;
}
.box{
    display:flex;
    width:20%;
  
   
   flex-direction: column;
  justify-content: space-between;
   padding:5px 10px;
   text-align: center;
    font-size: 12px;
}
.box{
    color: black;
}
.router-link-exact-active{
    color:forestgreen;
    
}

.fa{
    font-size: 22px!important;
}

</style>
