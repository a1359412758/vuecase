<template>
  <div class="resgiset">
      <div class="resgisetbox">
          <form action="">
             <span><i class="fa fa-user-o"></i><input type="text" placeholder="请输入用户名" v-model='username'></span> 
              <span><i class="fa fa-key"></i><input type="password" placeholder="请输入密码" v-model='password'></span> 
              <span><input type="text"></span>
              <button class="login">登录</button><router-link :to="{name:'resgiset'}" class="resgiset">立即注册</router-link> 
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
