<template>
  <div class="main-box app-banner">
      <div class="swiper-container banner">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="banner in banners" :key="banner.id">
             <img width="100%" height="100%" :src="banner.pictureUrl" alt="">
          </div>
        </div>
      <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
  </div>
</template>
<script src="../../../static/fonts/js/swiper.min.js"></script>
<script>
import axios from 'axios'
import Swiper from 'swiper'
export default {
  name:'app-banner',
  data(){
    return{
      banners:[]
    }
  },
  methods:{
    getbanners(){
       axios.post('http://h5homeapi.yiguo.com/api/Template/GetTemplate',{"Area":{"Default":0,"Version":"2.0","Id":"eabbe02f-59e0-46e6-90e7-cd8a89dbb98f","Name":"北京","Code":2,"DId":"c8d9363c-fc0a-4f7b-9a18-3aedbbc83e57","DName":"昌平区"},"token":"","Channel":5}).then(res=>{
           this.banners=res.data.data.template.componentList[0].carouselPictures
           })
       
    }
  },
  mounted(){
    this.getbanners()
    
  },
  updated(){
     new Swiper ('.banner', {
                        loop: true,  
                        autoplay: {
                            delay: 2000,
                            stopOnLastSlide: false,
                            disableOnInteraction: true,
                            }, 
                        // 如果需要分页器
                        pagination: {
                            el: '.swiper-pagination',
                        }
                })
  }
}
</script>
<style>
.app-banner{
 height:217px;
}
</style>




