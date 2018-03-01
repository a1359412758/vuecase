<template>
  <div class="app-header">
        <div class="city">
            <span>北京</span>
            <span>v</span>
        </div>
        <div class="search">
            <a></a>
        </div>


  </div>
</template>
<script>
export default {
  name:'app-header',

}
</script>
<style scoped>
.app-header{
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        
        height:35px;
        box-sizing: border-box;
        background: linear-gradient(to right, #36db84 , #0eb27b);
        z-index: 100;
        justify-content: space-between;
        padding-top:5px;
        
}
.city{
        width:20%;
        text-align: center;
        line-height: 25px;
        color: #fff;
        font-size: 14px;
        
    }
.search{
    flex:1;
    background: rgba(255,255,255,.2);
    height: 25px;
    position: relative;
    border-radius: .65rem;
    box-sizing: border-box;
    
}

   .search a{
        
       
        position:absolute;
        top:0.1rem;
        left:0.3rem;
        width: 1.5rem;
        height: 1.5rem;
        background: url(//img05.yiguoimg.com/e/web/161222/01856/102912/search.png) left center no-repeat;
        background-size: 100% 100%;
    } 
    
</style>


