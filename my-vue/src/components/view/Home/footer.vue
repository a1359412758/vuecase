<template>
  <div class="app-footer">
   <div class="box">
       <i class='fa fa-home show'></i>
       <span>首页</span>
   </div>
   <div class="box">
       <i class='fa fa-th-large'></i>
       <span>分类</span>
   </div>
   <div class="box">
       <i class='fa fa-free-code-camp'></i>
       <span>吃饭吧</span>
   </div>
   <div class="box">
       <i class='fa fa-shopping-cart'></i>
       <span>购物车</span>
   </div>
   <div class="box">
       <i class='fa fa-user-o'></i>
       <span>我的易果</span>
   </div>
  </div>
</template>
<script>
export default {
  name:'app-footer'
}
</script>
<style scoped>
.app-footer{
    position:fixed;
    bottom:0;
    height:50px;
    background: #ccc;
    width:100%;
    display:flex;
    justify-content: space-around;

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
.show{
    color:forestgreen;
    
}
.fa{
    font-size: 22px!important;
}
</style>
