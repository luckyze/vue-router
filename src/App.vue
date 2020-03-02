<template>
  <div id="app">
    <div class="navlist">
      <router-link to="/home">首页</router-link>
      <router-link to="/user">用户中心</router-link>
      <router-link to="/About">关于我们</router-link>
      <router-link to="/login">登录</router-link>
      <router-link to="/register">注册</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}

#app{
  position: relative;
  width: 800px;
  height: 500px;
  border: solid;
  margin: 50px auto;
}
#app .navlist {
  overflow: hidden;
}
a{
  text-decoration: none;
  line-height: 40px;
  height: 40px;
  display: inherit;
  text-align: center;
}

#app .navlist a{
  float: left;
  width: 20%;
  box-shadow: 0 0 10px 0 blue inset;
}
#app .about {
  position: absolute;
  left: 0;
  right: 0;
  top: 60px;
  width: 100%;
  margin: auto;
  height: 440px;
  box-shadow: 0 0 10px 0 blue inset;
}
#app .about ul{
  float: left;
}
#app .about li {
  list-style-type: none;
  width: 162px;
  height: 40px;
  margin: 20px;
  box-shadow:0 0 10px 0 blue inset;
}
#app .about .heaven {
  float: right;
  width: 590px;
  height: 400px;
  margin: 20px 8px 0 0;
   box-shadow:0 0 10px 0 blue inset;
}
.router-link-active {
  background-color: pink;
}
</style>
