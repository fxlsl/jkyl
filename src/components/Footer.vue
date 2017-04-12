<template>
  <div class="footer">
    <span>{{msgs[0]}}<a href="javascript:;">{{msgs[1]}}</a>{{msgs[2]}}</span>
  </div>
</template>

<script>
const arr=['Copyright © 2015 江苏健康无忧网络科技有限公司 版权所有 备案证书号：','苏ICP备15012617号','  互联网医疗保健信息服务 宁卫网审 [2015] 024号'];
export default {
  name: 'footer',
  data () {
    return {
      msgs: arr
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer{
    display: block;
    padding: 20px 0 0;
    color: rgb(156, 156, 156);
    text-align: center;
}
a{
    text-decoration: none;
    color: rgb(156, 156, 156);
}
</style>
