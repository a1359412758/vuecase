<template>
  <div class="list">
      <div class="good" v-for="info in list" :key='info.id'>
       <img :src="info.pictureUrl" alt="">
       <span>{{info.navName}}</span>
      </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name:'list',
  data(){
      return{
          list:[]
      }
  },
  methods:{
      getlist(){
       axios.post('http://h5homeapi.yiguo.com/api/Template/GetTemplate',{"Area":{"Default":0,"Version":"2.0","Id":"eabbe02f-59e0-46e6-90e7-cd8a89dbb98f","Name":"北京","Code":2,"DId":"c8d9363c-fc0a-4f7b-9a18-3aedbbc83e57","DName":"昌平区"},"token":"","Channel":5}).then(res=>{
           this.list=res.data.data.template.componentList[0].componentNavs

           })
       
    }
  },
  created(){
      this.getlist()
  }
}
</script>
<style scoped>
.list{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    
}
.good{
    font-size: 12px;
    display:flex;
    box-sizing: border-box;
    width:25%;
    padding:5px;
    text-align: center;
    flex-direction: column;
    justify-content: space-between
}
img{
    width:48px;
    height:48px;
    margin:0 auto;
}
</style>


