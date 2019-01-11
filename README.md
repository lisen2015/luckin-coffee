# luckin-coffee

> Vue Study - luckin Coffee

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

> 安装axios
### npm安装
``` bash
  npm install --save axios
```

####
在入口main.js中导入axios 并将axios写入vue的原型，这样就能更简单的使用。

``` javascript
import axios from 'axios'
import Qs from 'qs'
//QS是axios库中带的，不需要我们再npm安装一个

Vue.prototype.axios = axios;
Vue.prototype.qs = Qs;
```

#### 使用Demo
``` javascript
this.axios.post('/api/test',this.qs.stringify({'name':'xiaoming'}),{
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}).then(res => {
  //控制台打印请求成功时返回的数据
  console.log(res.data)
}).catch(err => {
  if(err.response) {
    //控制台打印错误返回的内容
    console.log(err.response)
  }
})
```
##### `# bind(this) 异步绑定 改变this指向`
``` javascript
this.axios.post('/api/test',this.qs.stringify({'name':'xiaoming'}),{
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}).then(function (res) {
  //控制台打印请求成功时返回的数据
  console.log(res.data)
}.bind(this)).catch(function (err) {
  if(err.response) {
    //控制台打印错误返回的内容
    console.log(err.response)
  }
}.bind(this))
```

> 安装 Vuex
### npm安装
``` bash
  npm install vuex --save
```

---
> 安装Element-UI
### npm安装
``` bash
  npm i element-ui -S
```

### 在main.js中引入
``` javascript
import Vue from 'vue';
// 引入 ElementUI
import ElementUI from 'element-ui';
// 引入主题CSS
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

// 全局注册
Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App)
});

```

> 参考

http://element.eleme.io/#/zh-CN/component/quickstart

---

> Vue install less
### Step1：在项目中安装Less
``` bash
  $ npm install less less-loader --save
```
### Step2：配置Less解析器
#### 在webpack.base.conf.js中，modules结节下的rules节点中添加Less的解析器，如下所示：
``` json
  module: {
    rules: [
       {
        test: /\.scss$/,
        loaders: ["style", "css", "sass","style-loader!css-loader!less-loader"]
      },
```
### Step3: 书写Less
``` html
  <style lang="less">
      ···
  </style>
```

> 参考文档

  http://lesscss.cn/

  http://less.bootcss.com/#

  http://www.bootcss.com/p/lesscss/

  https://www.cnblogs.com/lin-dong/p/6711224.html

  https://www.zhihu.com/question/50135522


---
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
