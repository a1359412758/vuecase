<template>
	<div class="register-nav">
		  <div class="nav-ttn"><i class="fa fa-address-book"></i><span>待支付</span></div>
		  <div class="nav-ttn"><i class="fa fa-amazon"></i><span>待收货</span></div>
		  <div class="nav-ttn"><i class="fa fa-anchor"></i><span>评价送悠币</span></div>
		  <div class="nav-ttn"><i class="fa fa-angle-double-right"></i><span>在线退换货</span></div>
		  <div class="nav-ttn"><i class="fa fa-apple"></i><span>全部订单</span></div>
	</div>
</template>

<script>
	export default{
		name:'navcontent'
	}
</script>

<style scoped>
	.register-nav{
		display:flex;
		justify-content: space-around;
		font-size:14px;
		
	}
	.nav-ttn{
		display:flex;
		flex-direction: column;
		align-items:center;
		text-align:center;
		
		background:#FFFFFF;
	}
	span{
		color:#444;
		font-family: "agency fb";
        text-align:center;
        align-self:center;
	}
	i{
		font-style: normal;
	}

</style>