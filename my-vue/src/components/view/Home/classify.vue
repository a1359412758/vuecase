<template>
<div>
  <div class="classify" v-for="info in goodinfos" :key="info.id">
      <div class="imgbox">
          <img class="big" :src="info.adPictures[0].pictureUrl" alt="">
      </div>
      <div class="box">
          <div class="mask">
              <div id="smallbox" v-for ="good in info.componentCommoditys" :key="good.id">
                  <img class="small" :src="good.pictureUrl" alt="">
                  <div class="infobox">
                    <span class="desc">{{good.commodityName}}</span>
                    <span class="discount" v-if="good.saleSlogan">{{good.saleSlogan}}</span>
                    <i><span class="price">￥{{good.commodityPrice}}</span><span class="unit">{{good.commoditySpec}}</span></i>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>
</template>
<script>
import axios from "axios"
export default {
  name:'classify',
  data(){
      return{
          goodinfos:[]
      }
  },
  methods:{
      getinfos(){
         axios.post('http://h5homeapi.yiguo.com/api/Template/GetTemplate',{"Area":{"Default":0,"Version":"2.0","Id":"eabbe02f-59e0-46e6-90e7-cd8a89dbb98f","Name":"北京","Code":2,"DId":"c8d9363c-fc0a-4f7b-9a18-3aedbbc83e57","DName":"昌平区"},"token":"","Channel":5}).then(res=>{
            //  console.log(res.data.data.template.componentList[8].componentCommoditys[0].commodityName)
           this.goodinfos = res.data.data.template.componentList.splice(1,5)
           //console.log(this.goodinfos)
           })
      },
   },
   created(){
     this.getinfos()  
   }
}
  

</script>
<style scoped>
.classify{
    font-size: 10px;
    display:flex;
    flex-direction: column;
    box-sizing: border-box;
    
    justify-content: space-between;
    height: 458px;
    overflow-y: hidden;
}
   .imgbox{
       width:100%;
       height:217px;
   }
.big{
       width:100%;
       height:100%；
   }
   .box{
         overflow-y: hidden;
       
         overflow-x: auto;

   }
   .mask{
      display: flex;
       box-sizing: border-box;
       overflow-y: hidden;
        
        overflow-x: auto;
        flex-wrap: nowrap;
        
      
   }
   .desc{
       display:block;
       overflow: hidden;
       white-space: nowrap;
       text-overflow: ellipsis;
       width:100%;
       box-sizing: border-box;
       padding:0 10px; 
   }


   .small{
       width:110px;
       height:50%;
   }
   #smallbox{
      
        display:flex;
        flex-direction: column;
        height:190px;
        padding: 10px 0 50px 0;
        justify-content: space-around;
        width: 110px;
   }
   .infobox{
       display:flex;
        flex-direction: column;
       align-items: center;
       justify-content: space-between;
       height:60px;
   }
   .discount{
       
    display: inline-block;
    
    color: #45b575;
    
    border: 1px solid #45b575;
    height:14px;
    line-height: 14px;
    border-radius: 5px;
   }
   .price{
     color:red
   }
   .unit{
     font-size: 10px;
   }
</style>


