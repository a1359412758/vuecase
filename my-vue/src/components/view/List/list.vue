<template>
  <div class="app-list">
      <div class='categorySearch'>
         <div class="search-box">
            <i class="icon"></i>
            <input type="search" name="search" id="search" placeholder="请输入商品名" class="name"
            maxlength="30">
         </div>
         <a class="txt">搜索</a>
      </div>
      
      <div class="nav">
          <ul class="navList">
              <li class="good" v-for="(info,i) in infos" :key="i" @click=" changeStyle(i)" v-bind:class="[i==nowIndex?'active':'']">
              {{info.CategoryName}}
              </li>
          </ul>
      </div> 
      <ul class="listContent">
          <li class="commodityBox ">
              <a class="gooditem" v-for="item in infos[nowIndex].Childs" :key="item.CategoryId">
                  <img :src="item.PictureUrl" alt="" class="img"/>
                  {{item.CategoryName}}
              </a>

          </li>
      </ul> 
      
      <app-footer></app-footer>
      
  </div>
</template>

<script>


import axios from 'axios'
import AppFooter from '../../comment/footer'
export default {
  components:{AppFooter},
  data () {
      return{
       infos:[],
       nowIndex:0   
      }
  },
  methods:{
      getInfo () {
        axios.get('../../../../static/modules/categoryList.json')
        .then( (res)=> {
            this.infos=res.data.RspData.data
            console.log(this.infos)
        })

      },
      changeStyle (i) {
         this.nowIndex = i
      }
  },
  created(){
     this.getInfo () 
  }   
  
}
</script>
  
<style lang="stylus" scoped>
  .categorySearch
    width:100%;
    height:40px;
    border-bottom:1px solid #f4f4f4;
    padding:8px 10px;
    box-sizing: border-box;
  .icon
    display:block;
    position:absolute;
    left:20px;
    top:15px;
    width:15px;
    height:15px;
    background: url(http://img05.yiguoimg.com/d/web/170830/00913/153914/search.png) no-repeat;
    background-size: 100% 100%; 
  .search-box
    width:308px;
    height:27px;
    background:red;
    padding:0 21px 0 31px;
    box-sizing: border-box;
    background: #f4f4f4;
    border-radius: 20px;
    
  #search
    width:173px;
    height:27px;
    background: #f4f4f4;
    display:block;
    font-size:12px;
    font-family:Arial;
  .txt
    position: absolute;
    right: 0;
    top: 0;
    padding-right: .096rem;
    display: block;
    height: .432rem;
    width: .4rem;
    text-align: center;
    line-height: .4rem;
    font-size: 14px;
    color: #11b57c;
    display:block;
  .nav
    position:absolute;
    width:.7rem;
    background: #f4f4f4;
    float:left;
    left:0;
    top:40px;
    z-index 10;
    
    overflow : auto;
  .navList
    overflow-y :hidden
  .good
    text-align: center;
    font-size: .1rem;
    color: #333;
    height: .45rem;
    line-height:.4rem;
  .active
    color: #11b57c;
    border-left: 3px solid #11b57c;
    background: #fff;
    text-align: center;
  

  .listContent
    padding:40px 0 0 .7rem;
    overflow-y :hidden;
    width:100%;
  .commodityBox 

    
    overflow-y: scroll;
  .gooditem
    float: left;
    padding:0 13px;
    width:73px;
    height:110px;
    color: #808080;
    font-size:12px;
    text-align:center
  .img
    width:58px;
    height:58px;
  



  
</style>
