<template>
  <div id="app">
    <!-- <img class="logo" src="./assets/logo.png"> -->
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
*{
    margin: 0;
    padding:0;
}
html,body{
    margin:0;
    padding:0;
    height: 100%;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  height: 100%;
  position: relative;
}
.logo{
    max-width: 100%;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
  margin:0;
}

li {
  margin: 0 10px;
}

a {
  text-decoration: none;
  color: #42b983;
}
p{
    line-height: 1;
}
.footer{
    font-size: 14px;
}
</style>
