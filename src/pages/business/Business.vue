<template>
  <div class="business-wrapper">
      <header>
          <van-nav-bar
            title="高端车"
            right-text="预定规则"
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight"
            />
      </header>
      <main>
          <router-view></router-view>
      </main>
  </div>
</template>

<script>
//引入vant  nav-bar导航栏
import Vue from 'vue';
import { NavBar } from 'vant';

Vue.use(NavBar);
export default {
  components:{},
  props:{},
  data(){
    return {
    }
  },
 
  methods:{
    onClickLeft() {
      this.$router.back()
    },
    onClickRight() {
      Toast('按钮');
    }
  }

}
</script>
<style lang="stylus" scoped>
.van-nav-bar.van-hairline--bottom
    background #29b7b7
    height .44rem
    .van-nav-bar__left
        .van-icon.van-icon-arrow-left.van-nav-bar__arrow
            color #fff
    .van-nav-bar__title.van-ellipsis
        font-size .18rem
        font-weight 400
        color #fff 
    .van-nav-bar__right   
        .van-nav-bar__text
            color #fff
            font-size .14rem

</style>