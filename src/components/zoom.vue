<template>
  
      <!-- swiper变焦、点击放大 -->
      <swiper :options="swiperOption">
        <swiper-slide>
          <div class="swiper-zoom-container">
            <img src="http://img4.oldkids.cn/upload/260772000/u260771091/2014/02/28/blog_20140228154430048860.jpg">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="swiper-zoom-container">
            <img src="http://image11.m1905.cn/uploadfile/2012/1126/20121126112236478.jpg">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="swiper-zoom-container">
            <img src="http://file27.mafengwo.net/M00/52/F2/wKgB6lO_PTyAKKPBACID2dURuk410.jpeg">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="swiper-zoom-container">
            <img src="http://img4.oldkids.cn/upload/260772000/u260771091/2014/02/28/blog_20140228154430048860.jpg">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="swiper-zoom-container">
            <img src="http://image11.m1905.cn/uploadfile/2012/1126/20121126112236478.jpg">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="swiper-zoom-container">
            <img src="http://file27.mafengwo.net/M00/52/F2/wKgB6lO_PTyAKKPBACID2dURuk410.jpeg">
          </div>
        </swiper-slide>
        <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
  
 
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          zoom: true,
          pagination: '.swiper-pagination',
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev'
        }
      }
    }
  }
</script>
