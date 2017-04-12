<template>
  <div class="jz">
      <H :iData="iData"></H>
      <List :iData="iData"></List>
      <h4>
          家族掠影
      </h4>
      <ul>
          <li v-for="item in data.content" >
            <a href="javascript:;">
                <img :src="item.img" alt="">
                <p>{{item.title}}</p>
            </a>
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
  name: 'jz',
  data () {
    return {
        data:{
            content:[]
        },
        iData:{
            isList: 0,
            isOn:4,
        }
    }
  },
  methods:{
    getCustomers: function() {
        this.$http.get('./static/data/jz.json').then(response => {
            console.log(response.data);
            this.data.content=response.data.statuses.content;
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
    .jz{
        margin: 10px 0;
    }
    li{
        padding: 10px 0 0 0;
        position: relative;
    }
    h4{
        margin:20px 10px;
        background-image: url('/static/assets/wenhua_bg.png');
        font-size: 23px;
        color: rgb(72, 164, 124);
        font-weight: bold;
        font-style: italic;
        text-decoration: 0;
        letter-spacing: 0px;
        line-height: 2.0em;
        text-align: left;
    }
    a{
        display: block;
    }
    img{
        vertical-align: top;
        width: 100%;
    }
    a p{
        position: absolute;
        right: 0;
        left: 0;
        bottom: 0;
        color: #fff;
        line-height: 2em;
        background-color: rgba(0, 0, 0, 0.498039)
    }




</style>
