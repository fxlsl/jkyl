<template>
  <div class="join">
      <H :iData="iData"></H>
      <List :iData="iData"></List>
      <h4>加入我们</h4>
      <ul>
          <li>
              <p class="tit">{{data.content.title}}</p>
          </li>
          <li v-for="item in data.content.con" >
            <p>{{item}}</p>
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
  name: 'join',
  data () {
    return {
        data:{
            content:{}
        },
        iData:{
            isList: 0,
            isOn:5,
        }
    }
  },
  methods:{
    getCustomers: function() {
        this.$http.get('./static/data/join.json').then(response => {
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
    .join{
        margin: 10px 0;
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
    h5{
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
    h5 a{
        color:rgb(22, 161, 230);
        font-size: 16px;
        font-weight: bold;
        letter-spacing: 0px;
        line-height: 1.8em;
    }
    li{
        text-align: left;
    }
    p{
        text-indent: 2em;
        line-height: 2em;
        color:rgb(51, 51, 51);
        font-weight: 300;
    }
    .tit{
        text-indent: 0;
        font-size: 1.3em;
        font-weight: 700;
        line-height: 2.7em;
    }

</style>
