<template>
	<div class="content clearfloat">
	  <div class="contentlist"><a  href="#" class="iconfont icon-shouhuodizhi"></a><i>收货地址</i></div>
	  <div class="contentlist"><a href="#"  class="ionfont  icon-chongzhi"></a><i>充值卡</i></div>
	  <div class="contentlist"><a  href="#" class="iconfont icon-gouwuche"></a><i>礼品兑换券</i></div>
	  <div class="contentlist"><a href="#"  class="iconfont icon-bangzhu"></a><i>帮助</i></div>
	  <div class="contentlist"><a href="#"  class="iconfont icon-kefu"></a><i>客服</i></div>
	 
	</div>
</template>

<script>
	export default{
		name:'navitem'
	}
</script>

<style scoped>
	.clearfloat:after{display:block;clear:both;content:"";visibility:hidden;height:0} 
    .clearfloat{zoom:1} 
	.content{
    position: relative;
 
    background: #fff;
    margin-bottom: 30px;
    font-size:12px;
    
	}
	i{font-style:normal;font-size:12px;}
	
	a,i{display:inline-block;}
	.contentlist{
	position: relative;
    float: left;
    width: 25%;
    height: 50px;
   
    text-align:center;
	}
	.contentlist a{
	position: relative;
    display: inline-block;
    width: 100%;
    height: 100%;
    padding-top: 20px;
    box-sizing: border-box;
    color: #333;
    font-size:12px;
   
	}
	.icon-shouhuodizhi{color:#FF0000!important;font-size:16px;}
	.icon-chongzhi{color:#1EB675!important;font-size:16px;}
	.icon-gouwuche{color:#007AFF!important;font-size:16px;}
	.icon-bangzhu{color:#FFA500!important;font-size:16px;}
	.icon-kefu{color:#90EE90!important;font-size:16px;}
	
</style>