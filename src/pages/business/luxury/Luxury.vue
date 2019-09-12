<template>
  <div class="luxury-container">
      <div class="picker">
        <div class="city">
          <span>上海</span>
          <span class="icon-bottom"></span>
        </div>
        <div class="borrow">
          <span class="blue">取车</span>
          09-11 23:00
        </div>
        <span class="icon-right"></span>
        <div class="revert">
          <span class="orange">还车</span>
          09-13 23:00
        </div>
        <span class="icon-right"></span>
      </div>
      <div class="car-list">
        <CarItem></CarItem>
      </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { NavBar } from 'vant';
Vue.use(NavBar);
import CarItem from './CarItem'
export default {
  components:{
    CarItem
  },
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{
    
  },
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style lang="stylus" scoped>
.blue
  color #29b7b7!important
.orange
  color #ff7e00!important
.luxury-container
  .picker
    height .41rem
    display flex
    justify-content center
    align-items center
    background #fff
    padding-right .1rem
    .city
      width .68rem
      padding .1rem
      border-right 1px solid #eaeaea
      span 
        .16rem
      .icon-bottom
        width .1rem
        height .1rem
        border solid #d2d2d2
        border-width 1px 1px 0 0
        transform rotate(135deg)
        display inline-block
        margin-left .05rem
    .borrow,.revert
      flex 1
      padding .1rem 0 .1rem .1rem
      font-size .12rem
      vertical-align bottom 
    .icon-right
        width .1rem
        height .1rem
        border solid #d2d2d2
        border-width 1px 1px 0 0
        display block
        transform rotate(45deg)
  .car-list
    padding .15rem
</style>
