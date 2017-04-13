<template>
  <div class="culture">
      <img class="logo" src="../../static/assets/logo.png">
      <H :iData="iData"></H>
      <List :iData="iData"></List>
      <h4 :style="{'background-image': 'url('+ cloudSrc +')'}">
          健康无忧成长史
      </h4>
      <p v-for="item in data.wContent">{{item}}</p>
      <p v-for="item in data.imgs" >
          <img :src="item" alt="">
      </p>
      <h4 :style="{'background-image': 'url('+ cloudSrc +')'}">
          企业文化
      </h4>
      <p v-for="item in data.content">{{item}}</p>
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
            content:[],
            imgs:[],
            wContent:[]
        },
        iData:{
            isList: 0,
            isOn:1,
        },
        cloudSrc:require('../../static/assets/wenhua_bg.png')
    }
  },
  methods:{
    getCustomers: function() {
        this.$http.get('./static/data/wenhua.json').then(response => {
            this.data.content=response.data.statuses.history.content;
            this.data.imgs=response.data.statuses.history.imgs;
            this.data.wContent=response.data.statuses.wenhua.content;
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
    .culture{
        margin: 10px 0;
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
    img{
        width: 100%;
    }
    p{
        margin: 0 10px;
        text-align: left;
        line-height: 2em;
        letter-spacing: 0px;
    }

</style>
