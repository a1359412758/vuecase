<template>
<div class="foodsbox">
    <img src="//img14.yiguoimg.com/d/items/2018/180224/9288719561598040_1125x408.jpg?w=1125&amp;h=408">
    <food-one :food="food" v-for="food in foodsone" :key="food.id"></food-one>
</div>

</template>
<script>
import foodOne from './foodone'
import axios from 'axios'
export default {
  name:'foodsbox',
  data(){
      return{
      foodsone:[],
      foodstwo:[]
      }
     
  },
  components:{
      foodOne
  },
  methods:{
      getfoodone(){
         axios.post('http://h5homeapi.yiguo.com/api/Template/GetTemplate',{"Area":{"Default":0,"Version":"2.0","Id":"eabbe02f-59e0-46e6-90e7-cd8a89dbb98f","Name":"北京","Code":2,"DId":"c8d9363c-fc0a-4f7b-9a18-3aedbbc83e57","DName":"昌平区"},"token":"","Channel":5}).then(res=>{
            //  console.log(res.data.data.template.componentList[8].componentCommoditys[0].commodityName)
           this.foodsone = res.data.data.template.componentList.splice(8,14)
           console.log(this.foodsone[0].componentCommoditys[0].commodityName)
           })
            
       
      }
  },
  created(){
     this.getfoodone()
     
  }
}
</script>
<style scoped>
img{
     margin: 0;
    padding: 0;
    outline: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    width: 100%;
    height: 1.5rem;
    border: 0;
    vertical-align: middle;
}

</style>

