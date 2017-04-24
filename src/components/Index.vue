<template>
  <div class="index">
      <img class="logo" src="../../static/assets/logo.png">
      <H :iData="iData"></H>
      <List :iData="iData"></List>
      <div class="swiper-container">
          <div class="swiper-wrapper">
              <router-link :to="{ name: 'detail', params: { id: 'yy' }}" class="swiper-slide" >
                  <img src="../../static/assets/gongsigulo.jpg" alt="">
              </router-link>
              <router-link :to="{ name: 'detail', params: { id: 'jk' }}" class="swiper-slide" >
                  <img src="../../static/assets/gongsijian.jpg" alt="">
              </router-link>
              <router-link :to="{ name: 'detail', params: { id: 'ws' }}" class="swiper-slide" >
                  <img src="../../static/assets/gongsiwang.jpg" alt="">
              </router-link>
              <router-link :to="{ name: 'detail', params: { id: 'yk' }}" class="swiper-slide" >
                  <img src="../../static/assets/yuyueguaha.png" alt="">
              </router-link>
              <router-link :to="{ name: 'detail', params: { id: 'sm' }}" class="swiper-slide" >
                  <img src="../../static/assets/zizhuji.jpg" alt="">
              </router-link>
          </div>

      </div>
      <F class="fo"></F>
  </div>
</template>

<script>
import F from '@/components/Footer';
import H from '@/components/Header';
import List from '@/components/List';
let imgs = ['chanpinjie1.jpg','chanpinjie2.jpg','chanpinjie3.jpg','chanpinjie4.jpg','chanpinjie5.jpg',];
export default {
  name: 'index',
  data () {
    return {
        iData:{
            isList: 0,
            isOn:0,
        },

    }
  },
  mounted(){
      var mySwiper = new Swiper ('.swiper-container', {
    // direction: '',
    loop: true,
    autoplay: 5000,//可选选项，自动滑动
    // // 如果需要分页器
    // pagination: '.swiper-pagination',
    //
    // // 如果需要前进后退按钮
    // nextButton: '.swiper-button-next',
    // prevButton: '.swiper-button-prev',
    //
    // // 如果需要滚动条
    // scrollbar: '.swiper-scrollbar',
  })
  },
  methods:{


  },
  components:{F,List,H,},

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index{
    height: 100%;
    position: relative;
}
.swiper-container{
    width: 100%;
    padding: 10px 0;
}
.swiper-container img{
    width: 100%;
}
.fo{
    position: absolute;
    bottom: 10px;
    right:0;
    left: 0;

}

</style>
