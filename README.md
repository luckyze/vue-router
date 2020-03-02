# vue_navrouter

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



参考网站：
https://blog.csdn.net/u011215281/article/details/78642801

在vue  router中，配置path 时，定义的为routes 不是routers   否则<router-view></router-view>标签不渲染页面
下面的
export default new Router({
  routes,    //同样此处必须是routes,不是routers.
  mode:'history'
})
