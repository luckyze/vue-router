<template>
  <div class="about">
    <ul>
      <li>
        <router-link to="/concat">联系我们</router-link>
      </li>
      <li>
        <router-link to="/partner">合作伙伴</router-link>

      </li>
      <li>
         <router-link to="/address">公司地址</router-link>
      </li>
    </ul>



     <router-view class="heaven"></router-view>
  </div>
</template>

<script>
  export default {
    name: "About"
  }
</script>

<style scoped>
</style>
