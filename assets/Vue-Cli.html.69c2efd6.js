import{_ as e,o as i,c as n,e as s}from"./app.37a6fc76.js";const l="/assets/Untitled.a83c3c01.png",d={},a=s(`<h1 id="vue-cli" tabindex="-1"><a class="header-anchor" href="#vue-cli" aria-hidden="true">#</a> Vue-Cli</h1><h1 id="vue-cli-脚手架相关" tabindex="-1"><a class="header-anchor" href="#vue-cli-脚手架相关" aria-hidden="true">#</a> <strong>Vue-Cli 脚手架相关</strong></h1><h1 id="一、创建vue项目" tabindex="-1"><a class="header-anchor" href="#一、创建vue项目" aria-hidden="true">#</a> <strong>一、创建vue项目</strong></h1><p><strong><strong>基于 交互式命令行 的方式，创建新版vue项目</strong></strong></p><p>创建vue-cli2的项目时，使用的命令行是：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vue init webpack project-name

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>而创建vue-cli3的项目时，使用的命令行是：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vue create my-project

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>基于 图形化界面 的方式，创建新版vue项目</strong></strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vue ui

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>使用vue-ui视图工具创建Vue项目，需要安装最新的Vue-cli脚手架。</p><p><img src="`+l+`" alt="Untitled"></p><p><strong><strong>基于 2.x的旧模板 的方式，创建旧版vue项目</strong></strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install @vue/cli-init -g
vue init webpack my-project

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//安装依赖库和命令行工具
npm install vue@2.1.6 element-ui@1.4.6 vuex axios    //回车---安装依赖库，建议指定 vue 和 element 版本，避免版本升级带来意料之外的 bug
npm install -g vue-cli                               //回车---全局安装 vue 命令行工具

//选择项目的安装路径,若省略此操作则默认安装到 C 盘, cd.. 表示返回上级
d:                                                   //回车---选择D盘
cd test                                              //回车---选择D盘的test文件夹

//创建vue项目 (后续创建vue项目只需操作以下步骤)
vue init webpack myProject                           //回车---创建一个基于 webpack 模板的新项目myProject

//等待下载完成后,配置项目基础项
Project name (myTest)                                //项目名称，可不用书写直接回车
Project description (A Vue.js project)               //项目描述，可不用书写直接回车
Author (iwen )                       //项目作者，可不用书写直接回车
Vue bulid(Use....)                                   //回车
Install vue-router?(Y/n)                             //是否安装路由，     输入 Y 回车
Use ESLint to lint your code?(Y/n)                   //是否安装代码检查， 输入 n 回车(需要时选择 Y )
Set up unit tests (Y/n)                              //是否安装单元测试， 输入 n 回车(需要时选择 Y )
Setup e2e tests with Nightwatch?(Y/n)                //是否安装e2e测试，  输入 n 回车(需要时选择 Y )
/*
    这几个配置选择yes 或者 no 对于我们项目最大的影响就是，如果选择了yes 则生成的项目会自动有相关的配置，有一些loader就会配套下载。
    所以如果我们确定不用的话最好不要yes，不然下一步要下很多没有用的loader
*/

cd myProject                                         //回车---进入项目目录
npm install                                          //回车---安装依赖
npm run dev                                          //回车---运行项目

//然后提示: (打开页面网址即 http://localhost:8080)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>项目结构</strong></strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>初始项目结构如下：
┌── build                           // webpack相关配置文件
│   ├── build.js                    // webpack打包配置文件
│   ├── check-versions.js           // 检查npm,nodejs版本
│   ├── dev-client.js               // 设置环境
│   ├── dev-server.js               // 创建express服务器，配置中间件，启动可热重载的服务器，用于开发项目
│   ├── utils.js                    // 配置资源路径，配置css加载器
│   ├── vue-loader.conf.js          // 配置css加载器等
│   ├── webpack.base.conf.js        // webpack基本配置
│   ├── webpack.dev.conf.js         // 用于开发的webpack设置
│   └── webpack.prod.conf.js        // 用于打包的webpack设置
│
├── config                          // 项目基本设置文件夹，主要是指定开发和打包中的静态资源路径、要压缩的文件类型、开发使用的端口号、开发使用虚拟服务器跨域请求 api 等。
│   ├── dev.env.js                  // 开发配置文件，
│   ├── index.js                    // 配置主文件
│   └── prod.env.js                 // 编译配置文件
│
├── node_modules                    // 项目依赖包文件夹
├── src                             // 我们的项目的源码编写文件（里面的文件可根据喜好，随意更改）
│   ├── assets                      // 初始项目资源目录
│   │     └── logo.png
│   ├── components                  // 组件目录
│   │     └── Hello.vue             // 测试组件，回头删除
│   ├── router                      // 路由配置文件夹
│   │     └── index.js              // 路由配置文件
│   ├── App.vue                     // 入口组件，pages 里的组件会被插入此组件中，此组件再插入 index.html 文件里，形成单页面应用；
│   └── main.js                     // 入口 js 文件，影响全局，作用是引入全局使用的库、公共的样式和方法、设置路由等。
│
├── static                          // 资源放置目录,静态资源文件夹，放置不会变动的资源，直接被复制到最终的打包目录（默认是dist/static）下
├── .babelrc:                       // 使用 babel 的配置文件，用来设置转码规则和插件；
├── .editorconfig:                  // 编辑器配置(代码的规范文件，规定使用空格或 tab 缩进，缩进的长度是两位还是四位之类的代码风格，使用的话需要在编辑器里下载对应的插件)；
├── .eslintignore:                  // 指定 eslint 忽略的文件；
├── .eslintrc:                      // 配置 eslint 的检测规则，强制按照规则书写代码
├── .gitignore:                     // 指定 git 忽略的文件，所有 git 操作均不会对其生效；
├── .postcssrc:                     // 指定使用的 css 预编译器，里面默认配置了 autoprefixer ，自动补全浏览器前缀；
├── index.html:                     // 首页文件，项目运行的时候，会自动将我们在 src 文件夹里生成的组件插入这个文件里；
├── package-lock.json               // npm5 新增文件，优化性能
├── package.json                    // 项目依赖包配置文件（node配置文件）
└── README.md                       // 项目说明文档

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="二、运行项目" tabindex="-1"><a class="header-anchor" href="#二、运行项目" aria-hidden="true">#</a> <strong>二、运行项目</strong></h1><p>开发阶段</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// Vue2 项目打包
npm run dev

// Vue3 项目打包
npm run serve

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上线阶段</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm run build

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>单文件组件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vue serve demo.vue

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="三、脚手架的自定义配置" tabindex="-1"><a class="header-anchor" href="#三、脚手架的自定义配置" aria-hidden="true">#</a> <strong>三、脚手架的自定义配置</strong></h1><p>项目根目录新建vue.config.js</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module.export = {
    devServer: {
        // 自动打开浏览器
        open: true,
        // 配置端口
        port: 8888
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="四、vue-cli2和vue-cli3的区别" tabindex="-1"><a class="header-anchor" href="#四、vue-cli2和vue-cli3的区别" aria-hidden="true">#</a> <strong>四、vue-cli2和vue-cli3的区别</strong></h1><p><strong><strong>创建项目</strong></strong></p><p>创建vue-cli2的项目时，使用的命令行是：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vue init webpack project-name

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>而创建vue-cli3的项目时，使用的命令行是：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vue create my-project
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><strong>运行项目命令</strong></strong></p><p>vue-cli2项目使用的运行命令行是:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>vue-cli3项目使用的运行命令行是:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm run serve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><strong>跨域</strong></strong></p><p><strong>Vue-cli2使用proxyTable</strong></p><p>vue的转发机制（proxyTable），proxyTable代理功能可以实现转发机制（通过修改config里面修改index.js文件）。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 配置好后一定要关闭原来的server，重新npm run dev启动项目。不然无效。
proxyTable: {
  // 用‘/api’开头，代理所有请求到目标服务器
  &#39;/api&#39;: {
    target: &#39;http:xxx.com&#39;, // 目标接口域名
    changeOrigin: true, // 是否启用跨域
    pathRewrite: { //
      &#39;^/api&#39;: &#39;&#39;
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Vue-cli3使用proxy</strong></p><p>注意：配置proxy之后， axios 的 baseURL 也要做相应的修改。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module.exports = {
  devServer:{
    host: &#39;localhost&#39;,//target host
    port: 8080,
    //proxy:{&#39;/api&#39;:{}},代理器中设置/api,项目中请求路径为/api的替换为target
    proxy:{
      &#39;/api&#39;:{
        target: &#39;http://192.168.1.30:8085&#39;,//代理地址也就是服务器地址，这里设置的地址会代替axios中设置的baseURL
        changeOrigin: true,// 如果接口跨域，需要进行这个参数配置
        secure:false, // 使用的是http协议则设置为false，https协议则设置为true
        //ws: true, // proxy websockets
        //pathRewrite方法重写url
        pathRewrite: {
          &#39;^/api&#39;: &#39;/&#39;
          //pathRewrite: {&#39;^/api&#39;: &#39;/&#39;} 重写之后url为 http://192.168.1.30:8085/xxxx
          //pathRewrite: {&#39;^/api&#39;: &#39;/api&#39;} 重写之后url为 http://192.168.1.30:8085/api/xxxx
          // 设置之后虽然浏览器看到的请求还是 localhost/xxxx，但是实际上已经转到http://192.168.1.30:8085/xxxx上了
          // 如果只是修改域名，则不需要写pathRewrite
        }
      }
    }
  },
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>统一代理，赋值为字符串（/api）,与proxy里配置的要对应。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>axios.defaults.baseURL = &#39;/api&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="五、vue项目的性能优化" tabindex="-1"><a class="header-anchor" href="#五、vue项目的性能优化" aria-hidden="true">#</a> <strong>五、Vue项目的性能优化</strong></h1><p><strong><strong>编码阶段</strong></strong></p><ul><li>尽量减少data中的数据，data中的数据都会增加getter和setter，会收集对应的watcher</li><li>v-if和v-for不能连用</li><li>key保证唯一</li><li>使用路由懒加载、异步组件</li><li>防抖、节流</li><li>第三方模块按需导入</li><li>图片懒加载</li><li>长列表滚动到可视区域动态加载</li></ul><p><strong><strong>SEO优化</strong></strong></p><ul><li>预渲染</li><li>服务端渲染SSR</li></ul><p><strong><strong>打包优化</strong></strong></p><ul><li>压缩代码</li><li>Tree Shaking/Scope Hoisting</li><li>使用cdn加载第三方模块</li><li>多线程打包happypack</li><li>splitChunks抽离公共文件</li><li>sourceMap优化</li></ul><p><strong><strong>用户体验</strong></strong></p><ul><li>骨架屏</li><li>PWA</li><li>还可以使用缓存(客户端缓存、服务端缓存)优化、服务端开启gzip压缩等。</li></ul>`,56),r=[a];function v(t,c){return i(),n("div",null,r)}const m=e(d,[["render",v],["__file","Vue-Cli.html.vue"]]);export{m as default};
