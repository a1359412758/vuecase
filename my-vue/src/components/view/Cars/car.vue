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
            <div class="car null" v-if='!cargoods.length'>
                <img src="static/images/car.png" alt="">
                <span class='nogood'>购物车空空如也，去逛逛吧</span>
                <button class="tobuy" >去逛逛</button>
            </div>
            <div class="car" v-else> 
                <div class="hasgood" v-for="good in cargoods" :key='good.id'>
               <input class="lbtn" type="checkbox" >
               
                   <img class="goodimg" src="" alt="">
               <div class="showbox">
                   <span>{{good.desc}}</span>
                   <span>￥{{good.price}}</span>
               </div>
               <div class="rbox">
                   <span class="fa fa-trash-o"></span>
                   <p><span class='left'  @click="addgoods(good.id,good.price,good.desc,-1)">-</span><span class='num'>{{good.num}}</span><span class='right' @click="addgoods(good.id,good.price,good.desc,1)">+</span></p>
               </div>
               </div>
            </div>
            <div class="like">
                <div class="title">猜你喜欢</div>
                <div class="dfbox">
                    <div class="dfgood" v-for="data in defaultlist" :key='data.componentCommoditys[0].commodityCode'>
                        <img class="dfimg" :src="data.componentCommoditys[0].pictureUrl" alt="">
                        <span>{{data.componentCommoditys[0].commodityName}}</span>
                        <div class='pricebox'>
                        <span class='price'>￥{{data.componentCommoditys[0].commodityPrice}}</span><span class="btn" @click="addgoods({id:data.componentCommoditys[0].commodityCode,price:data.componentCommoditys[0].commodityPrice,desc:data.componentCommoditys[0].commodityName,type:1})">+</span>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  </div>
<app-footer></app-footer>
  </div>
</template>
<script>
import appFooter from '../../comment/footer'
import {mapState,mapMutations,mapActions} from 'vuex'
import axios from 'axios'
export default {
  name:'cars',
  components:{
      appFooter,
  },
  data(){
      return{
          defaultlist:[]
      }
  },
  computed:{
      ...mapState(['username','cargoods'])
  },
  methods:{
      getdefaultlist(){
         axios.post('http://h5homeapi.yiguo.com/api/Template/GetTemplate',{"Area":{"Default":0,"Version":"2.0","Id":"eabbe02f-59e0-46e6-90e7-cd8a89dbb98f","Name":"北京","Code":2,"DId":"c8d9363c-fc0a-4f7b-9a18-3aedbbc83e57","DName":"昌平区"},"token":"","Channel":5}).then(res=>{
            //  console.log(res.data.data.template.componentList[8].componentCommoditys[0].commodityName)
           this.defaultlist = res.data.data.template.componentList.splice(8,12)
           console.log(this.defaultlist[0])
           })
      },
      ...mapActions(['getcargoods','addcargoods']),
      ...mapMutations(['getetcargoods']),
      addgoods({id,price,desc,type}){
          
          this.addcargoods({id,price,desc,type})
      }
  },
  created(){
      this.getdefaultlist()
      this.getcargoods()
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
    height:80px;
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
.like{
    width:100%
}
.title{
    text-align: center;
    font-size: 14px;
    height: 40px;
    line-height: 40px;
}
.dfbox{
    display: flex;
    flex-flow:wrap;
    justify-content: space-between;
    
}
.dfgood{
    width:50%;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center
}
.dfimg{
    display: block;
    width:100%;
    height: 70%
}
.pricebox{
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding:0 10px;
}
.price{
    color:red;
    
}
.btn{
    border:1px solid skyblue;
    display:block;
    width:20px;
    height: 20px;
    border-radius: 10px;
}
.lbtn{
    margin-left: 15px;
}
.goodimg{
    height:100%;
    width:60px;
    background: pink; 
}
.showbox,.rbox{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height:100%;
    text-align: left;
}

.rbox p{
    display: flex;
    justify-content: space-between;
    padding:4px 5px;
}
.left,.right{
    width:20px;
    height: 20px;
    display: block;
    border:1px solid skyblue;
    text-align: center;
    line-height: 20px;
    
}

.num{
    padding:0 5px;
    display: block;
    border: 1px solid skyblue;
    height: 20px;
    line-height: 20px;
}
.fa{
    margin-left:70%;
    font-size: 20px;
    color: #11b57c
}
</style>

