<template>
  <div class="app-banner">
    1241s
  </div>
</template>
<script src="../../../static/js/swiper.min.js"></script>
<script>
import axios from 'axios'
import Swiper from 'swiper' 
export default {
  name:'app-banner',
  data(){
      banners:[]
  },
  methods:{
      getbanners(){
          axios.get('')
      }
  }
}
</script>
<style scoped>
.app-banner{
    padding-top:35px;
}
</style>

