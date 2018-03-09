
<template>
<div class="goods">
  <div class="good">
    <div class="title">
      <span>--</span> {{foodt.componentBase.customComponentName}} <span>--</span>
    </div>
    <div class="bigbox" v-for="info in foodt.componentCommoditys" :key="info.id">
      <div class="imgbox">
        <img class="new" :src="info.cornerPictureUrl" alt="">

         <img :src="info.pictureUrl" alt="">
      </div>
      <div class='box'>
        <p>{{info.commodityName}}</p>
        <div>
              <span class="price">￥{{info.commodityPrice}}</span><span class="unit">{{info.commoditySpec}}</span> 
              
        </div>
    </div>
      
      </div>
  </div>
  </div>
</template>
<script>
export default {
  name:'goods',
  props:['foodt'],
  created(){
    console.log(this.foodt)
  }
  
}
</script>
<style scoped>
.goods{
  font-size: 14px;
  background: #fff;
  margin: 3px 0; 
}
.good{
   display: flex;
  flex-flow: wrap;
}
.bigbox{
  position: relative;
  width:50%;
  text-align: center;
  
}
.imgbox{
  padding: 10px;
  box-sizing: border-box;}
img{
  width:80%;
  height: 80%;
}
.new{
  position: absolute;
  width:30px;
  height:30px;
}
.title{
  height: 50px;
  line-height: 50px;
   width:100%;
  text-align: center;
  font-size: 16px;
}
.box{
  box-sizing: border-box;
  padding-bottom: 10px;
}
.price{
  color: red;
  font-size: 10px;
}
.unit{
   font-size: 10px;
}
</style>

