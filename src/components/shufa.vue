<template>
  	<div class="shufa">
  	<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
  <ul>
    <li v-for="item in list">{{ item }}</li>
  </ul>
</mt-loadmore>
		<p>{{msg}}</p>
		<p>{{msgd}}</p>
  	</div>
</template>

<script>
	
	
  export default {
    data() {
      return {
        list:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
        msg:'',
        msgd:''
      }
    },
    
    methods:{
    	loadTop() {
		  // load more data
//		  this.$refs.loadmore.onTopLoaded();
			console.log('22');
			this.list.push(1,2,3,4,5);
		},
		loadBottom() {
		  // load more data
		  this.allLoaded = true;// if all data are loaded
//		  this.$refs.loadmore.onBottomLoaded();
			console.log('88');
			this.list.push(5,6,7,8,9);
		},
		allLoaded(){
			return false
		}
    }
  }
</script>
