
<template>
<div class="goods">
  <div class="good" >
    
      <img :src="food.componentCommoditys[0].cornerPictureUrl" alt="">
      <div class='box'>
        <p>{{food.componentCommoditys.commodityName}}</p>
        <span>￥{{food.componentCommoditys.commodityPrice}}</span><span>{{food.componentCommoditys.commodityPrice}}</span>
      </div>
  </div>
  </div>
</template>
<script>
export default {
  name:'goods',
  props:['food'],
}
</script>
