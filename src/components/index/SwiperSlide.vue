<template>
    <div class="swiper-slide" >
        <a :href="item.LinkUrl">
            <img :src="item.ImageUrl" alt="">
        </a>
    </div>
</template>

<script>
export default {
  props:['item'],
  data(){
    return {
    }
  },
  mounted(){
    // console.log(item)
  }
}
</script>
<style lang="stylus" scoped>
 .swiper-slide
    height 100%
    width 100%
    a
        display inline-block
        height 100%
        img 
            height 100%
            width 100%  
</style>