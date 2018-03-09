<template>
  <div>
      <div class='categorySearch'>
        <form action="." class="searchInp">
            <i class="icon"></i>
            <input type="text" style="display:none">
            <input type="search" name="search" id="search" placeholder="请输入商品名称" class="name"
            maxlength="30">
            <i class="close" style="display:none"></i>
        </form>
            <span class="txt">搜索</span>
      </div>
      <div class='categoryContainer'>
          <div class='categoryNav'>
                <ul class='navList'>
                    <li v-bind:class="[index==i? activeClass : '']" v-for = "(listData,i) in CategoryListDatas"    :key="i" @click='tabCategoryListChild(i)'>{{listData.CategoryName}}</li>
                </ul>
          </div>
          <ul class="listContent">
              <li>
                  <div class='commodityBox'>
                      <a class='commodityList' v-for="(Child,i) in Childs" :key ='i'>
                        <img :src="Child.PictureUrl"   alt="">
                        {{Child.CategoryName}}
                      </a>
                  </div>
              </li>
          </ul>
      </div>
      <index-bottom></index-bottom>
  </div>
</template>

<script>
import IndexBottom from '@/components/conmmon/bottom-nav.vue'
import axios from 'axios'
export default {
  name: 'categoryList',
  data () {
    return {
      CategoryListDatas: [],
      Childs: [],
      index: 0,
      activeClass: 'active'
    }
  },
  methods: {
    getCategoryList () {
      axios.get('../../../../static/json/categoryList/categoryList.json')
        .then(res => {
          this.CategoryListDatas = res.data.RspData.data
          this.Childs = res.data.RspData.data[0].Childs
        }).catch(function (err) {
          console.log('请求失败', err)
        })
    },
    tabCategoryListChild (index) {
      this.Childs = this.CategoryListDatas[index].Childs
      this.index = index
    }
  },
  components: {
    IndexBottom
  },
  created () {
    this.getCategoryList()
  }
}
</script>

<style lang='scss' scoped>
    .categorySearch{
        position: fixed;
        top: 0;
        left: 0;
        height: 40px;
        width: 100%;
        background: #fff;
        padding: .15rem .19rem;
        box-sizing: border-box;
        z-index: 102;
        .searchInp{
            position: relative;
            height: 27px;
            width: 6.12rem;
            background: #f4f4f4;
            border-radius: 20px;
            padding: 0 .42rem 0 .63rem;
            box-sizing: border-box;
            .icon{
                position: absolute;
                left: .22rem;
                top: 50%;
                margin-top: -.129rem;
                display: inline-block;
                width: .258rem;
                height: 12px;
                background: url(http://img05.yiguoimg.com/d/web/170830/00913/153914/search.png);
                background-size: 100% 100%;
            }
            input{
                width: 4.8rem;
                height: 100%;
                background: #f4f4f4;
                border: none;
                border-radius: 20px;
                font-size: 0.24rem;
            }
            .close{
                position: absolute;
                right: .168rem;
                top: 50%;
                margin-top: -.12rem;
                display: inline-block;
                width: 12px;
                height: .24rem;
                background: url(http://img05.yiguoimg.com/d/web/170830/00913/153914//icon-close.png);
                background-size: 100% 100%;
            }
        }
        .txt{
            position: absolute;
            right: 0;
            top: 0;
            padding-right: .192rem;
            display: block;
            height: 40px;
            width: 0.81rem;
            text-align: center;
            line-height: 40px;
            font-size: 13px;
            color: #11b57c;
        }
    }
    .categoryContainer{
        padding-top: 40px;
        .categoryNav{
            position: fixed;
            left: 0;
            top: 0.6rem;
            float: left;
            width: 1.88rem;
            height: 100%;
            overflow: hidden;
            z-index: 100;
            .navList{
                box-sizing: border-box;
                width: 2.16rem;
                height: 100%;
                background: #f4f4f4;
                padding: 0.5rem 0.28rem 100px 0;
                overflow-y: scroll;
                li{
                    box-sizing: border-box;
                    padding: 0.36rem 0rem 0.36rem 0;
                    text-align: center;
                    font-size: 0.24rem;
                    color: #333;
                    height: 0.98rem;
                    box-sizing: border-box;
                }
                .active{
                    color: #11b57c;
                    border-left: 0.04rem solid #11b57c;
                    background: #fff;
                    box-sizing: border-box;
                }
            }
        }
        .listContent{
            float: right;
            width: 6.02rem;
            background: #fff;
            li{
                width: 5.86rem;
                overflow: hidden;
                .commodityBox{
                    width: 6rem;
                    padding: .3rem .36rem 50px .36rem;
                    box-sizing: border-box;
                    overflow-y: scroll;
                    overflow-x: hidden;
                    .commodityList{
                        float: left;
                        display: inline-block;
                        width: 1.1rem;
                        height: 1.9rem;
                        position: relative;
                        padding-top: 1.2rem;
                        margin: 0.25rem;
                        text-align: center;
                        box-sizing: border-box;
                        font-size: 0.22rem;
                        color: #808080;
                        img {
                            width:1.08rem;
                            height:1.08rem;
                            position: absolute;
                            top: 0;
                            left: 0;
                        }
                    }
                }
            }
        }
    }
</style>
