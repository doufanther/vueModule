<template>
  <div id="app">
  			
    <img src="./assets/logo.png">
   	<up :src="'/api/imgs'"></up><!--文件上次组件-->
   	<!--<waterfall :line-gap="200" :watch="items">  vue的瀑布流
		   each component is wrapped by a waterfall slot 
		  <waterfall-slot
		    v-for="(item, index) in items"
		    :width="item.width"
		    :height="item.height"
		    :order="index"
		    :key="item.id"
		  >
		   
		      your component
		    
		  </waterfall-slot>
		</waterfall>-->
		<sw></sw>
		<scrollbar></scrollbar>
		<zoom></zoom>
		<pickDate></pickDate>
		<shufa></shufa>
			

  </div>
</template>

<script>
	import uploader from './components/uploader.vue'
	//import waterfall from './components/waterfall.vue'
	import swiper from './components/swiper.vue'
	import scrollbar from './components/scrollbar.vue'
	import zoom from './components/zoom.vue'
	import pickDate from './components/pickDate.vue'
	//import amap from './components/amap.vue'
	import shufa from './components/shufa.vue'
	
	export default {
	  name: 'app',
	 	components:{
	  	'up':uploader,//文件上传组件
	//	'waterfall':waterfall
			'sw':swiper,//lu轮播
			'scrollbar':scrollbar,
			'zoom':zoom,
			'pickDate':pickDate,//日期选择组件
			//'amap':amap
			'shufa':shufa
		},
	  methods:{
	  
			
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
