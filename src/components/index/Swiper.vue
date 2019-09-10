<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <SwiperSlide v-for="item in swiperSlideList" :item='item' :key='item.LinkUrl'></SwiperSlide>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
import Swiper from 'swiper'
import SwiperSlide from 'components/index/SwiperSlide'
import http from 'utils/http.js'
export default {
  components:{
      SwiperSlide
  },
  data(){
    return {
        swiperSlideList :[]
    }
  },
  async created(){
    //获取轮播图数据
    let result = await http.get({url:'/Navigate/GetFocusPictureList?logitude=121.473701&latitude=31.230416'})
    this.swiperSlideList = result
    this.$nextTick(function(){
         let mySwiper = new Swiper ('.swiper-container', {
        autoplay:{disableOnInteraction: false},
        loop:true,
        pagination: {
        el: '.swiper-pagination',
        },
    })      
    })
    
  },
  mounted(){
  }
  
}
</script>
<style lang="stylus" scoped>
    .swiper-container
        height 1.38rem
        .swiper-wrapper
            height 100%
                   

</style>