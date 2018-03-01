<template>
  <div class="main-box home">
      <app-banner></app-banner>
      
  </div>
</template>
<script>

import appBanner from './banner'
export default {
  name:'home',
  components:{
   appBanner
  }
}
</script>
<style>
    .home{
      position: absolute;
      top:0;
      bottom: 0;
      right:0;
     left:0;
      background:#ccc;
      padding-top:50px;
      
    }
    
</style>


