<template>
  <div class="main-box home">
    <app-header></app-header>
      <app-banner></app-banner>
      <list></list>
      
      <foods-box></foods-box>
      <app-footer></app-footer>
  </div>
</template>
<script>
import appHeader from '../../comment/header'
import foodsBox from './foodsbox'
import appFooter from '../../comment/footer'
import appBanner from './banner'
import list from './list'
export default {
  name:'home',
  components:{
   appBanner,list,appFooter,foodsBox,appHeader
  }
}
</script>
<style scoped>
    .home{
      position: absolute;
      top:0;
      bottom: 0;
      right:0;
      left:0;
      background:#fff;
      padding-top:35px;
      
    }
    
</style>


