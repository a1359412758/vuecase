
<template>
<div class="goods">
  <div class="good" >
       <div class="imgbox">
         <img :src="foodo.componentCommoditys[0].cornerPictureUrl || ''
" alt="" class='new'>
         <img :src="foodo.componentCommoditys[0].pictureUrl" alt="">
       </div>
      
      <div class='box'>
        <p>{{foodo.componentCommoditys[0].commodityName}}</p>
        <div class="infobox">
              <span class="price">￥{{foodo.componentCommoditys[0].commodityPrice}}</span><span class="unit">{{foodo.componentCommoditys[0].commoditySpec}}</span>
        </div>
      </div>
  </div>
  </div>
</template>
<script>
export default {
  name:'goods',
  props:['foodo'],
  
}
</script>
<style scoped>
.goods{
 
}
   .good{
     position: relative;
     font-size: 16px;
     display: flex;
     height:1rem;
     margin: .03rem 0;
     align-items: center;
    background: #fff
   } 
   .imgbox{ 
     float: left; 
     width:40%;
     height:80%} 
   img{
    width: 100%;
    height:100%
    
   }
   .box{
     float: left;
     display: flex;
     flex-direction: column;
     justify-content: space-between;
     margin-left: 20px;
   }
   .price{
     color:red
   }
   .unit{
     font-size: 10px;
   }
   .new{
     width:30px;
     height: 30px;
     position: absolute;
     left:10px;
   }
   .infobox{
     box-sizing: border-box;
     padding-bottom: 5px;
   }


</style>

