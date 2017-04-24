<template>
  <div class="detail">
      <img class="logo" src="../../static/assets/logo.png">
      <H :iData="iData"></H>
      <List :iData="iData"></List>
      <div class="s" v-if="$route.params.id=='yy'">
          <img src="../../static/assets/yy1.jpg" alt="">
          <img src="../../static/assets/yy2.jpg" alt="">
      </div>
      <div class="s" v-if="$route.params.id=='jk'">
          <img src="../../static/assets/jk1.jpg" alt="">
          <img src="../../static/assets/jk2.jpg" alt="">
      </div>
      <div class="s" v-if="$route.params.id=='ws'">
          <img src="../../static/assets/ws1.jpg" alt="">
          <img src="../../static/assets/ws2.jpg" alt="">
      </div>
      <div class="s" v-if="$route.params.id=='yk'">
          <img src="../../static/assets/yk.png" alt="">
      </div>
      <div class="s" v-if="$route.params.id=='sm'">
          <img src="../../static/assets/sm1.jpg" alt="">
          <img src="../../static/assets/sm2.jpg" alt="">
      </div>
      <F  class="fo"  v-if="$route.params.id=='yk'"></F>
      <F v-else></F>
  </div>
</template>

<script>
import F from '@/components/Footer';
import H from '@/components/Header';
import List from '@/components/List';
let imgs = ['chanpinjie1.jpg','chanpinjie2.jpg','chanpinjie3.jpg','chanpinjie4.jpg','chanpinjie5.jpg',];
export default {
  name: 'detail',
  data () {
    return {
        iData:{
            isList: 0,
            isOn:0,
        },

    }
  },
  mounted(){
      console.log(111);
  },
  methods:{

  },
  components:{F,List,H,},

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.detail{
    height: 100%;
    position: relative;
}
.s{
    padding: 15px;
}
.s img{
    width: 100%;
}
.fo{
    position: absolute;
    bottom: 10px;
    right:0;
    left: 0;

}

</style>
