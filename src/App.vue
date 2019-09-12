<template>
  <router-view>
  </router-view>
</template>

<script>
import 'styles/reset.css'
import Index from './pages/index/Index'
import Business from './pages/business/Business'
export default {
  components:{
    Index,
    Business
  }
}
</script>