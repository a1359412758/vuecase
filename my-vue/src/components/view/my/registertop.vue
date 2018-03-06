<template>
	 <div class="app-my-regiseter-top" >
	 	  <div class="top-bar"><p class="set">设置</p></div>
	 	  <div class="regiseter-login">
	 	  	   <div class="regiseter-left">
	 	  	   	    <img alt=" 用户头像" src="http://img02.yiguo.com/e/web/150703/00781/140145/no-pic.jpg">
	 	  	   </div>
	 	  	   <div class="regiseter-right">
	 	  	   	    <div class="login">登录</div>&nbsp;&nbsp;<div class="register">注册</div>
	 	  	   </div>
	 	  </div>
	 	  <div class="register-nav">
	 	  	<div class="yu"><span>账户余额</span><i>-</i></div>
	 	  	<div class="youhui"><span>优惠券</span><i>-</i></div>
	 	  	<div class="youbi"><span>悠币</span><i>-</i></div>
	 	  </div>
	 </div>
</template>

<script>
	export default {
		name:'registertop',
		methods(){
			
		}
		
	}
</script>

<style scoped>
	
	*{margin:0;padding:0;}
	div,img{display:block;}
	html,body{
		font-size:14px;
		
	}
 .top-bar{

 	position: relative;
  
 	background:#228B22;
 	height:30px;
 	
 }
 .set{
 	 position: absolute;
   right:10px;
   top:10px;
   font-size:16px;
   color:#3a3a3a;

 
 }
 .regiseter-login{
 	display:flex;
 	
 	height:50px;
    padding-left:30px;
    background:#228B22;
 
    
 }      
 i{
 	font-size:14px;
 	font-style: normal;
 }
 .regiseter-left{
 
 	}
 	.regiseter-right{
 	padding: 10px 30px;
 	font-size:14px;
 	display:flex;
 	
 	}
 	img{z-index:10;float:left;width:40px;height:40px;text-align:center;line-height:40px;}
 	
 .register,.login{
 	color:#fff;

 	border:0;
 }
 .register-nav{
 	display:flex;
 	justify-content: space-around;
 	font-size:14px;
 	background:#1eb675;
 }
 .yu,.youhui,.youbi{display:flex;flex-direction: column;align-items:center;}
 span{
 	color:#555;
 }
</style>