<template>
  <div class="list" v-show="iData.isList">
      <ul>
          <li v-for="(item,index) in msg" @click="change(index)" :class="{on:isOn==index}">
              <router-link :to="{path:item[1]}">{{item[0]}}</router-link>
          </li>
      </ul>
  </div>
</template>

<script>

let aMsg=[['首页','/index'],['企业文化','/culture'],['产品中心','/product'],['新闻动态','/news'],['YouYou家族','/jz'],['加入我们','/join']]

export default {
  name: 'list',
  data () {
    return {
        msg: aMsg,
        isOn: this.iData.isOn
    }
  },
  props:['iData'],
  methods:{
      change:function(index){
          this.iData.isOn=index;
          this.iData.isList=0;
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .list {
        position: relative;
    }
    li{
        text-align: left;
        padding-left: 20px;
        color:rgb(102, 102, 102);
        background-color: #f0f0f0;
        border-bottom: 1px solid #dbdbdb;
    }
    .on{
        background-color: rgb(52, 178, 134);
        border-bottom-color: rgb(52, 178, 134);
    }
    .on a{
        color:#fafafa;
    }
    a{
        line-height: 2.1em;
    }

</style>
