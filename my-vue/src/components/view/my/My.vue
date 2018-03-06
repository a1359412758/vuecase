<template>
	<div class="my-min-box">
	
 		<register-top></register-top>
 		<register-nav></register-nav>
 		<nav-item></nav-item>
 		<app-footer></app-footer>
 		
	</div>
</template>

<script>
	import RegisterTop from './registertop'
	import RegisterNav from './Nav'
	import NavItem from './NavItem'
	import AppFooter from '../../comment/footer'
	export default {
		name:'my',
		components:{
			RegisterTop,
			RegisterNav,
			NavItem,
		    AppFooter
			
		}
		
	}
</script>

<style scoped>
	.my-min-box{
		
		
		
	}
	body{
	 
	    background: #f4f4f4;
	    color: #000;
	}
	*{
    margin: 0;
    padding: 0;
    outline: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-text-size-adjust: none;
	}
	div{
		display:block;
	}
</style>