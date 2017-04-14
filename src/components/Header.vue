<template>
  <div class="header">
      <h4>
          {{msg}}
          <a href="javascript:;" @click="isShow">...</a>
      </h4>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      msg: '网站导航',
      list:[]
    }
  },
  props:['iData'],
  methods:{
      isShow:function(){
          this.iData.isList=!this.iData.isList;
      }
  },
  mouted(){

  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
    position: relative;
    padding: 0 10px;
}
h4{
    position: relative;
    height: 40px;
    color:#169fe6;
    line-height: 40px;
    text-align: left;
    padding-left: 10px;
    background-color: #333333;
    margin:0;
}
a{
    position: absolute;
    top:0;
    right: 0;
    text-align: center;
    height: 40px;
    width: 40px;
    color: rgb(102, 102, 102);
    background-color: rgb(52, 178, 134);
}
</style>
