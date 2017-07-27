<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <up :src="'/api/imgs'"></up>
  </div>
</template>

<script>
	import Hello from './components/Hello.vue'
	import uploader from './components/uploader.vue'
export default {
  name: 'app',
  components:{
  	'hello':Hello,
  	'up':uploader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
