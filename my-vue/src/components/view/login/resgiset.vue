<template>
  <div class="login">
      <div class="loginbox">
          <form action="">
              
             <span><i class="fa fa-user-o"></i><input type="text" placeholder="请输入用户名" v-model='iusername'></span>
              
              
              <span><i class="fa fa-key"></i><input type="password" placeholder="请输入密码" v-model='ipassword'></span>
           
              <span><input type="text" placeholder="   请输入验证码"></span>
              <div class="delu">
              <router-link :to="{name:'login'}" tag="button" class="resgiset">立即注册</router-link>
              </div>
          </form>
      </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name:'login',
  data(){ 
    return{
        iusername:'',
        ipassword:''
    }
  },
  computed:{
      ...mapState(['username'])
  }
}
</script>
<style scoped>
.login{
    background: rgba(0, 255, 238, 0.432);
    position: fixed;
    left:0;
    right: 0;
    top: 0;
    bottom: 0;
}
 .loginbox{
     background: #fff;
     display: flex;
     box-sizing: border-box;
     padding:5px 10% 5px;
     margin-top:30px;
     flex-direction: column;
     justify-content: space-between;
 }
 span{
    
     display:block;
     line-height: 35px;
     font-size: 20px;
     height: 30px;
     padding:5px 0;
     border-bottom: 1px solid #ccc;
     border-top: 1px solid #ccc;
     margin:15px 0;
 }
 i{
     display: block;
     float: left;
 }
 input{
     display:block;
     float: left;
     margin-left:20px;
 }
 .delu{
     display: flex;
     justify-content: center;
 }
 button{
     font-size: 30px;
     width:120px;
     height: 40px;
     background: rgb(32, 214, 32);
     margin-top:40px;
    
     
 }
</style>
