<template>
  <div class="index">
      <img class="logo" src="../../static/assets/logo.png">
      <H :iData="iData"></H>
      <List :iData="iData"></List>
      <F class="fo"></F>
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
.index{
    height: 100%;
    position: relative;
}
.fo{
    position: absolute;
    bottom: 10px;
    right:0;
    left: 0;

}

</style>
