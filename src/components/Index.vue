<template>
  <div class="index">
      <H :iData="iData"></H>
      <List :iData="iData"></List>
      <img :src="'./static/assets/guanwangpe1.png'" alt="">
      <F></F>
  </div>
</template>

<script>
import F from '@/components/Footer';
import H from '@/components/Header';
import List from '@/components/List';
export default {
  name: 'index',
  data () {
    return {
        iData:{
            isList: 0,
            isOn:0,
        }
    }
  },
  methods:{

  },
  components:{F,List,H,},

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
