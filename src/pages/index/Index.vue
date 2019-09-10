<template>
  <div class="index-container">
      <header>
          <div class="header-container">
            <h1>一嗨租车</h1>
            <a href="" class="icon-gift">优惠活动</a>
          </div>
      </header>
      <main>
        <article>
          <div class="banner">
            <swiper></swiper>
          </div>
        </article>
        <article>
          <div class="service-container">
            <div class="major-service">
              <router-link class="booking" tag='div' to='/'>
                <span class="icon-booking"></span>
                <p>自驾租车<span>百款车型 千个网点</span></p>
              </router-link>
              <router-link class="server" tag='div' to='/'>
                <span class="icon-server"></span>
                <p>专车接送<span>优质服务 信誉保证</span></p>
              </router-link>
            </div>
            <div class="business">
              <router-link v-for='item in businessList' :key="item.name" :to='item.target' class="">
                <span class="icon" :style="{backgroundImage:`url(${item.url})`}"></span>
                <p>{{item.name}}</p>
              </router-link>
            </div>
          </div>
        </article>
      </main>
      <footer>
        <div class="footer-container">
          <a :href="telNum">
            联系客服
          </a>
          <p>Copyright &copy; 2019 一嗨租车</p>
        </div>
      </footer>
      <aside>
        <div class="downLoadApp-container">
          <h2 :style='`background:url(${appLogo}) center center no-repeat `'></h2>
          <p>下载App<br>新用户专享首日0租金</p>
          <a :href="toApp">立即打开</a>
        </div>
      </aside>
  </div>
</template>

<script>
import Swiper from 'components/index/Swiper'
export default {
  components:{
    Swiper
  },
  props:{},
  data(){
    return {
      businessList:[
        {
          target:'https://m.1hai.cn/Booking#/Luxury/Index',
          url:'data:image/png;base64,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',
          name:'高端车'
        },
         {
          target:'https://m.1hai.cn/International',
          url:'data:image/png;base64,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',
          name:'国际租车'
        },
         {
          target:'https://m.1hai.cn/Chauffeur',
          url:'data:image/png;base64,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',
          name:'企业服务'
        },
         {
          target:'http://trip.1hai.cn/index-page?from=mHome',
          url:'data:image/png;base64,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',
          name:'景点门票'
        },
         {
          target:'https://m.1hai.cn/Login/Index?from=Home',
          url:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAACYCAMAAAAvHNATAAAAOVBMVEVHcEzcxKjcxKjZwaXQt5nOs5e6nnzdxarJr5DHrI25nXzTu5/hya25nXz////IrpDx6N759O/p28vLBYrVAAAAC3RSTlMAha/XShPR+SxnmocCO/oAAAR+SURBVHja7ZzXtuMgDEVdKKa4/v/Hjp3kZlIMSKKEB5/nBO+lIwlwoWkuXbp06VK14gNT7UOKsaEGJNZ2vbSfkv0O+Dso1fXWp779AdzQ+qH+QtcpXh/VQ12puLHOIiXbAvWAClaxsPFWWqpyoik61g0tk6Gst7FqM5Qo72wCSVWZi7n8TBOu9EFj0qZUlyrTWptY/VCbjU87E/Q03tscik60IQ/X3tIiuaS1NZKxfFx7cVYZryiyzFxkMp6bi5hnvLf5RekanS0h9vt5yDEHYGcnZgup53UVJLU0e1tOrL4Ee6QZr9FInJm9LSuomaowF9RMLkuDAaem1pYXpM0OP+AC5X/3CzBAyKgB25Z12rUuW6aQ0TJsmV605AgZNwZflNv0oS19yFqDJ1unL63Je1lvDsVyUcj8vYwZgyU75UKTSdP7e8UDDG7nMjmEKoHjksyf+k8R855UAbcL+rxUBku2usFWuI13QZyEonkCBg7Z83IM5CQs01Yf2IrC8nmpzJcCw05ewV28qYc6GQ7a5gfbEOE6NPi7KwJt8YMtKCxjXDcMBuOQzAF2cp0OnmIBNDqYPLtK75nAcWirH2xFRMuXZJ3xSso0EZPuSzg6mQlKxoN5x29h7TXMhm0XMjB4513yYNgwDRYwco8tSme+gack4Lj4onTAQSZxCR9y5inAbvIue6TEDTaPA6FbnMu3UEQPNiYEM+6lNYFrZPApnGrmih5o3sFUQjB5vn2TFK6kYKdkeK7DyMRgJxWAz/s7V2ow83lThcqVHOyI2vM2lCT8e84Hdp8LiH/848oFZmK5zvtYF2Pkzcl1XZdls5LMlRZMbp/9YkWl/wvX+ZTUJihIQmm+co08dj0WwoKjvXGNcStYwAwO7rPvXAK333WGK7B7O5ZkKC4HGMdW4gTQhuEaNebWBdFGyLLsk2tUpA0victH9sU1Dk30NgnM5SYbvxW4l56Wy0V2wiVc98fS5r23AuYTLlfuw5PMTkhZENfIGsp9KNhmErYzGc/lfJw0ZDHyK81mB5cIPeJKbeSHmS6uUfkfCqatyK+QObE8TsIaBilgz5B5uET4cWX6gD1C5sHyOgnxUk5EST+W10nICmOjgm0BLt3AnqQm62HPXubnGgNvHrE8qX/IHzERfEUrk5N7XY7k1AesfRY62BYVsFDI6Fz+JAO8qUvYLCHWqPSANY1IRQXGAgVsX2OM41yUChiwptHHb+diVO5NyFf7f/x8nktAhZv+S8v4/x8UHAXqMBL+hq54/+ccxJuJTJDJ6MzML76dcH7niULCGflhZm4J3HvzuhgY8ksDLgpxob8aGcpw6aapkkw0BKnqEr9cAVA/TdV1FWQxspgPZnWlXBnJROwHxqqqenzbA1TKtXdaUUO/P503UydaupMvVFVpn8lO3aSVqjBcCYOW/ByOe+OIRdPZDhdSMWg66+E9ZDSd/UwhkqG6yNFfA7LhioIHVzEwm9Clz0ljWgBi9ZvT27gHTmj14yPlOFNaC/FHKITWSg28uXTp0qVLl3D6B2Exk5LBArRXAAAAAElFTkSuQmCC',
          name:'我的一嗨'
        },
      ],
      telNum:'https://m.1hai.cn/tel:4008886608',
      toApp:'https://m.1hai.cn/m/s',
      appLogo:'data:image/png;base64,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'
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){
      
  }
}
</script>
<style lang="stylus" scoped>
div.index-container
  header
    div.header-container
      height .59rem
      width 100%
      padding .18rem .1rem
      position relative
      border-bottom 2px solid #29b7b7
      background url('https://image.1hai.cn/front/logo/H5/logo_long.png') center center no-repeat #f7f7f7
      background-size auto .26rem
      h1
        font-size .14rem
        text-indent -100%
      a.icon-gift
        position absolute
        width .2rem
        height .2rem
        right  .1rem
        top 50%
        margin-top -.1rem
        background url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAgCAMAAABNTyq8AAAAb1BMVEUAAAC2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2traHojumAAAAJHRSTlMABAlkGOSRQCUfUPjGOQ63em7unIpoNN7Jl15L9dnQrr2gRC9zUKSkAAABQklEQVQ4y7WTy5aDIBBEAUEFgu/EJOY99f/fOCBwAouM2cxd2G2dahsaJJ66hegZSeDlZegy5YyVnkaBneAYmqQKOBCmLhDcC0bjZhgbcXubCkwu0Ce09O84rwLQJN1Kn3RrA+M+HEyMRBqg9lmJQfVAFWse5E0JbXztdd2Az0+u1sMOi7oBuPavSp1bWMpCVcukXabUD7UTwhaCkiNEXxT7wrK3z04Dx70TAk/AEECSlAqaZsKIicRRRDiOJENZQYNnmoTITQU0EeiogzG2hhFYgrAGLgBr2uROSmzxYH7Ioww7onLOtttcsAtnMpM3r3zhbTjrE7pErXPTHTyY1OcRtKhDuyodZm7awXxjOnxh+q4d/2cTUtMMuW2K/8KYmSTAkvlH04R7QymzUBsmoJXhbvFliCaDv4g3Xs34SOvW/QvtkDMa5KlRNAAAAABJRU5ErkJggg==') center center no-repeat
        background-size .18rem .16rem
        text-indent -300%
        overflow hidden
  main
    div.banner
      height 0
      width 100%
      padding-bottom 43.125%
    div.service-container
      margin -.05rem .1rem 0
      padding-top .08rem
      border-radius .04rem
      position relative
      background-color #fff
      z-index 2
      background-color #fff
      div.major-service
        display flex
        height 1.41rem
        align-items center
        justify-content center
        text-align center
        >div
          flex 1
          padding .1rem .05rem .15rem
          font-size .18rem
          color #626262
          display flex
          flex-direction column
          justify-content center
          align-items center
          position relative
          span
            display block
            width .66rem
            height .66rem
            background-size .66rem
            background-position center
            background-repeat no-repeat
          span.icon-booking
            background-image url('data:image/png;base64,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')
          span.icon-server
            background-image url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADgCAMAAAAt85rTAAAANlBMVEVHcEz/fgD/fgD+/v7/fgD/fgD/fgD/fgD/fgD/egD/5rT++O/+zpb+6cj/u3T/p1D98Nr/kyi7p9+pAAAACnRSTlMAUP//dZYz5MMPjDvtJQAACUVJREFUeNrlneuWoyAMgL2Aotzf/2XXWjtVayuERNHNn9mzOzun3+RKgFAU1NI1JWNcCNG2bTXK8AchOGesbLriytKVA9gE9U1awVnZXZFtF22JeSXKAS6CbUbJrwDZMFEliGBN1nQw1a0V2dyYLlvGLs0yt2y1y0p5FYFko8ZSVEQiyhxss60IpT3ZUonxzkY8AO9UxGPwnohnhJbD8EbEo8NNJ6qD5dikwasT5Dg7bdrqFGmPUWLHq9OEd/dV31FK5NXJwmnVJ6rTRRAqsayykPK25klrpp2oshHR3S160kfTsspMkB2RVdkJu2V4IQo1ospSxA3DJ0UwzZcPhzBnPgzCvPnSCXPnSybMni8xll6AL4mQV5cQfqP6DLVqK6vLCKjybqoLCWD11LVXAmy7ewbQhFDKq4sJv22AAQWaprqgNOc6oFX9TMy5bsjR4Vw9inT6DWlPc8MGmU7WC5lR2lOMFDUDGldviXwxqhOyIaKBGll/lRejOtpIm0Pw5ozmWCPFMlDr6gBxI6JHM9Lj1kiqDhSHaqfsIAP1rg6X0VCPMlKcFG9lHSMS0UzFETWoqWNF4yXFhl6B8XxPT7T0cYadxfck9NRxBqWGsXV9LuGPegZDgV7WCYS0KkRRYF+DRSPlw68qZKc54CRYRsoIFfgzwUs3iH7I8FXSGekXFTK6CDNQ9Vui5YcKCb2QyAOn5a0y9mV+1qpZ/2KuSjQvJCtituiM32vTvBWJpcKSqIjxS5dTar84MZMecQEF0TJi5oJOBQdEr/4Y0ZYVDU2jwv7pLjLc+7dTEjUvOpxl4NPOQFWzRQWsOpqF/CMSwnP1w0qxABlNL1uPGjQQxqk7jNWBEkStNNtPa3RlwymtmVrf0b4bHGYQe6He6Hfp9Ujv3z+ztwPalASl0wq10c1JeoXb9drYrFfKTKIehYxeFaMOr++0Uc0g70YAV4O4gAsb5ecDSnRATmWhuQC2ZBu6mQDObJTdE5BR7VjnAihw69D8AP/q0fKugCXVmYNcADmRC0ogIJUTIrsgsLUtewLCjsIFoa1fibmVvXBC5CyoE/YmsA9AMQoXlAmde0XihMgnX1M2X7ABW4o0nxPgGGXKjADRw2hJcHmgzsgHxyiDXcfkFGTGWgb78Cs4TUiCc7ICP4iGn+HaAMRO9I8wih1E4ZvYjqDcHsIo+vlzn7BDjw/YEFwg0Pm44CNP4F8xs9lkwTFPENyhg64HFQkgwR0eA/RATwDISS4pOVAIpVDgAEhxy8xC+Cg88JHpSa7RKQCfJQKkuQfpovlIDPRRytAAxnWeeioDpQOMckNJxzcAUv1kG2Wh/nqAEemezAEfQgfYRyjQXhHQZuCBpIChqUKTWigloMlBgWRpIjjMECuQFNAEFjH+qoABXiiJrpzPAClnVvgzizTS1cRIF2Ck+mmgnhKQaCqH0bXfzfZ6MtAe8xjlESt6P84GMHstNv1aJT2+WxsiQIKu2gQ1OtePy7x/fB54kv2Urpp/D3ZwP9uk8n35+l3UaYsPiNr4tQuf8z+qbjebEDBvcEiDq8YSs3W/nlvx8qrPiQjL8QCr/4ZqqQ3a5ov/xPgrwfz8BtZrGIn5ni0RLbVD2j7zW300Obfdvh8vDm5MIdlKlg4pprY4G6D+S5vQLzT8vlG3PF6//Z9xEAXGFrb/2gVdf0ZvjTE2dNGhEVYZHOEQwo8mb1CZ6Sn301jyMZLfQ1XSFlUI/fwy9SDQTjW9MEf/J4sfoX+vNWxqEE0Ko3udM/Xle+efeu+IpUkMoilhdHez2n35ZhvYfNOJhCLtOGXAZrzfDkY+KEZNKkwgZEkHYkM6u2bTXWVwZypxqlWZcqQ5aA9Qb6YDHdwelmkD5rqEQ+mBjWu/FU1U+K9Jp1zsFQnXCkI3AM2Wy9rw3qlMubrMEy6GhG6t6C1l+Qg7SJmCWMKv9oTv/vmNKBPjyC5BhR38clb4Hrz5jDI6prsv4RNJBfx6Xcz27WeUUVE/R4NVyOAXJGMOUbxtVMunmChPduBBnQ34imvUQZ9Z4+Ljowbf+YGosIVfUo46MPlXtrzncfiwtcgK0ACTRLyNRh55fUX4zxHGYb8o6JySBjwoIPKg1hQ0Zz2ZPuoXpdeKj7fQSBuNPQ/qVwp8pW0VCajAFhpno9FnCdWrcbhSYcRJNoCNNuBxK9H3BuQyxLysLfTcrAZN5hbwgTnxJ5bNykKf1uaiNahAWT62HgVcG3DLEPO0tmBL1z3ERjvw0CrIiWxbrWfi2fBkCgLk8LFjkGsR2n5M/QsPVaA3ABr44DjQpQH1OdYw6np2rBMK+Og/2M0dDc817iO9RCx1AWOPgPdaLNjQewBgmzB+E3i5zKEosAfmiJgBqtARtxa2oJTr4BukwC5hBC70gqeDKXA1eNUkKDBQhQ4IuNgNdUC+MMDvc6gZVZZY9esNzD5D8wRLGiRe1+kqlJD4Egz462GUABX2TqaqUEHxwgBZ2jD/9dzh+PZTSKkgN/GCAEXicwzTskBDIH1Yolm8ztTH5sEy+UGN18pHR0P2ASnCfacLOuO1935W0Lpw9szXACnjsv3XRCp/aC58JbH7bk/g0n7xlJl2gZjSb6aIB9ovtoh1UsBzoMEdRL9apeuRU+6ExgWXdHtkHwe/4CkC1AT2Rm1MsB+H9btxH2KpqQfTa6J/HyImcl8w6PWz6A3fTcpUUQaw5xn2fh3wWQZvcThnU/+jt1sCnzpNPAT8OFOoYlnVwGVTj/oGvyGJObPZW2tfo4v/ZPyL4R886gHtiHdOL/ZGbViK/68eOb39M7X3f2j4/k9F3/+x79s/136pQFMWIGFX4WMFUPhNA+jFQqkoilsTii4FsBP35sufMJUvd8J0vrwJMfhyJsThyzeWovFlmvF5gSgZVm2sQJXsKu+yQJYmq/Vh2xToklMwRQwvc0J+y/CSoSOWBZk0GZipaApK4bc1zzyiadsU5HJmrOFdcYScpcQj1Dcp8ZTKjRUHyvHhVDTFsXKsnYqyOF7YYYgtK06R7hjElnXFWXIA4pl4ByCejfcswcWtQstmRCUpbnhT5CMdQ1ajyME212pE88Y2K+VhM2ZLNzGm2apgWdNN/ljCFNnysiuuIl3JRARlK64EN6fke5gDGiub4srSNSUbQIVo2yfs8LUVgnM2kNGr7R+cWKiaHTmzoAAAAABJRU5ErkJggg==')
          p
            height .5rem
            padding-top .05rem
            width 100%
            span 
              display block
              width 100%
              font-size .12rem
              color #898989
        .booking
          ::after
            content ''
            position absolute
            top 20%
            bottom  20%
            right 0
            width  1px
            background-color #eaeaea
            overflow hidden
      .business
        height .81rem
        display flex
        justify-content center
        align-items center
        a
          flex 1
          display block
          padding .1rem .05rem .15rem
          text-align center
          span
            position: relative;
            display: inline-block;
            width: .35rem;
            height: .35rem;
            vertical-align: top;
            background-size: .35rem;
            background-color: #fff;
            background-position: center center;
            background-repeat: no-repeat;
          p
            padding-top .03rem
            color: #7b7b7b;
  footer
    div.footer-container
      padding .15rem .10rem
      text-align center
      color #7b7b7b
      a
        color #7b7b7b
      p
        padding-top .02rem

  .downLoadApp-container
    height .52rem
    position fixed
    display flex
    justify-content center
    align-items center
    left 0 
    right 0
    bottom 0
    background-color rgba(0,0,0,.7)
    padding .06rem .08rem
    z-index 10
    h2
      width .4rem
      height .4rem
      border-radius 5px
      background-size .4rem !important
    p
      flex 1
      padding 0 .1rem
      color #fff
    a
      padding 0.08rem .1rem
      border-radius 5px
      color #ff7e00
      border 1px solid #ff7e00
</style>
