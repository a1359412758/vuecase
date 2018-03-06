<template>
  <div class="cars">
   <div class="login">
       <div class='loginbox' v-if='!username'>
       <span class='info'>登陆可同步购物车商品</span>
       <button class='loginbtn'>登录</button>
       </div>
       <div class="cut">全场满100包邮，还差<span class='money'>100.00</span>元包邮</div>
  </div>
  
  <div class="goodbox">
      <div class="mask">
            <div class="car null" v-if='cargoods.length'> 
                <img src="static/images/car.png" alt="">
                <span class='nogood'>购物车空空如也，去逛逛吧</span>
                <button class="tobuy" >去逛逛</button>
            </div>
            <div class="car hasgood" v-else> 
               <input type="checkbox" v-model='cargoods' >
            </div>
    </div>
  </div>
<app-footer></app-footer>
  </div>
</template>
<script>
import appFooter from '../../comment/footer'
import {mapState} from 'vuex'
export default {
  name:'cars',
  components:{
      appFooter,
  },
  
  computed:{
      ...mapState(['username','cargoods'])
  }
}
</script>
<style scoped>

.cars{
   font-size: 14px;
   
   color: #808080;
  
}
.login{
    z-index: 9999;
    position: fixed;
    width:100%;
   
    box-sizing: border-box;
    
   
}
.loginbox{
    box-sizing: border-box;
    padding:10px 40px 0 80px;
    height:40px;
    border-bottom: 1px solid #ccc;
}
.info{
    float:left;
    line-height: 28px;
}
.loginbtn{
    float: right;
    width:60px;
    border: 1px solid #ddd;
    background: #fff;
    border-radius: 4px;
    height: 26px;
}
.cut{
    
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    background: #fff9eb;
    line-height: 40px;
    font-size:14px;
    color: #333;
    z-index: 100;
    text-align: left;
    padding-left: 40px;
}
.money{
    color: red
}
.null{
   display: flex;
    padding: 40px 0;
    background: #fff;
    text-align: center;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.hasgood{
    display: flex;
    padding: 40px 0;
    background: #fff;
    text-align: center;
    
    justify-content: space-between;
    align-items: center;
}
.tobuy{
    width:120px;
    height: 40px;
       
    border: 1px solid #11b57c;
    border-radius: 6px;
    background: #fff;
    color: #11b57c;
}
.nogood{
    display:block;
    margin:10px 0;
}
.goodbox{
    width: 100%;
    position: absolute;
    top:40px;
    
}
</style>

