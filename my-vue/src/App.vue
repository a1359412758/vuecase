<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import appHeader from './components/view/Header/header'

export default {
  name: 'App',
  components:{
    appHeader
  }
}
</script>

<style>

</style>
