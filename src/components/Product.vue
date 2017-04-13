<template>
  <div class="product">
      <img class="logo" src="../../static/assets/logo.png">
      <H :iData="iData"></H>
      <List :iData="iData"></List>
      <h4 :style="{'background-image': 'url('+ cloudSrc +')'}">
          健康无忧成长史
      </h4>
      <ul>
          <li v-for="item in data.imgs" >
            <img :src="item" alt="">
          </li>
      </ul>
      <F></F>
  </div>
</template>

<script>
import F from '@/components/Footer';
import H from '@/components/Header';
import List from '@/components/List';
export default {
  name: 'culture',
  data () {
    return {
        data:{
            imgs:[]
        },
        iData:{
            isList: 0,
            isOn:2,
        },
        cloudSrc:require('../../static/assets/wenhua_bg.png')
    }
  },
  methods:{
    getCustomers: function() {
        console.log(this);
        this.$http.get('./static/data/chanpinjie.json').then(response => {
            this.data.imgs=response.data.statuses.imgs;
        }, response => {
        // error callback
        });
    }

  },
  mounted(){
      this.getCustomers();
  },
  components:{F,List,H,},

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .product{
        margin: 10px 0;
    }
    P{
        padding: 10px;
    }
    ul{
        overflow: hidden;
    }
    h4{
        margin:20px 10px;
        /*background-image: url('/wenhua_bg.png');*/
        font-size: 23px;
        color: rgb(72, 164, 124);
        font-weight: bold;
        font-style: italic;
        text-decoration: 0;
        letter-spacing: 0px;
        line-height: 2.0em;
        text-align: left;
    }
    li{
        float: left;
        width: 50%;
        padding:10px 10px 0 10px;
        margin:0;
        box-sizing: border-box;
    }
    img{
        width: 100%;
    }


</style>
