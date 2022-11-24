import{_ as e,o as n,c as i,a as s}from"./app.74a5dc6f.js";const l={},d=s(`<h1 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack" aria-hidden="true">#</a> Webpack</h1><h1 id="webpack-1" tabindex="-1"><a class="header-anchor" href="#webpack-1" aria-hidden="true">#</a> <strong>Webpack</strong></h1><h1 id="一、webpack入门" tabindex="-1"><a class="header-anchor" href="#一、webpack入门" aria-hidden="true">#</a> <strong>一、Webpack入门</strong></h1><p><strong><strong>Webpack简介</strong></strong></p><blockquote><p>webpack是当前前端最热门的前端资源模块化管理和打包工具。</p></blockquote><p><strong><strong>安装Webpack</strong></strong></p><p>首先要安装Node.js，Node.js自带了软件包管理工具npm，可以使用npm安装各种插件。Webpack至少需要Node.js v0.6版本，直接安装最新版就好了。</p><p>新建一个目录，初始化npm</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>webpack是运行在node环境中的，我们需要安装以下两个npm包</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm i -D webpack webpack-cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>npm i -D 为npm install --save-dev的缩写</li><li>npm i -S 为npm install --save的缩写</li></ul><p><strong>webpack的帮助界面</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>webpack -h
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="二、webpack使用" tabindex="-1"><a class="header-anchor" href="#二、webpack使用" aria-hidden="true">#</a> <strong>二、Webpack使用</strong></h1><p>新建一个文件夹src ,然后新建一个文件main.js,写一点代码测试一下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>console.log(&#39;webpack&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置package.json命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;scripts&quot;: {
    &quot;build&quot;: &quot;webpack src/main.js&quot;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>执行</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此时如果生成了一个dist文件夹，并且内部含有main.js说明已经打包成功了</p><p><strong><strong>开始自定义配置</strong></strong></p><p>上面一个简单的例子只是webpack自己默认的配置，下面我们要实现更加丰富的自定义配置</p><p>新建一个build文件夹,里面新建一个 webpack.config.js</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// webpack.config.js

const path = require(&#39;path&#39;);
module.exports = {
    mode:&#39;development&#39;, // 开发模式
    entry: path.resolve(__dirname,&#39;../src/main.js&#39;),    // 入口文件
    output: {
        filename: &#39;output.js&#39;,      // 打包后的文件名称
        path: path.resolve(__dirname,&#39;../dist&#39;)  // 打包后的目录
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>配置打包的入口与出口</strong></strong></p><p>webpack 的 4.x 版本中默认约定</p><ul><li>打包的入口文件为 src -&gt; index.js</li><li>打包的输出文件为 dist -&gt; main.js</li></ul><p>如果需要修改打包的入口与出口，可以在 webpack.config.js 中新增如下配置信息</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const path = require(&#39;path&#39;) // 倒入node.js中专门操作路径的模块
module.exports = {
    entry: path.join(__dirname, &#39;./src/index.js&#39;),打包入口文件的路径
    output: {
        path: path.join(__dirname, &#39;./dist&#39;), // 输出文件的存放路径
        filename: &#39;bundle.js&#39; // 输出文件的名称
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>配置webpack的自动打包功能</strong></strong></p><p>配置webpack的自动打包功能</p><ul><li><p>1、运行 npm install webpack-dev-server -D 命令，安装支持项目自动打包的工具</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install webpack-dev-server -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>2、修改 package.json -&gt; scripts 中的 dev 命令如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;scripts&quot;: {
    &quot;dev&quot;: &quot;webpack-dev-server&quot; // script节点下的脚本，可以通过npm run 执行
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>3、将 src -&gt; index.html 中，script 脚本的引用路径，修改为 &quot;/buldle.js&quot;</p></li><li><p>4、运行 npm run dev 命令，重新进行打包</p></li><li><p>5、在浏览器访问 http://localhost:8080 地址，查看自动打包效果</p></li></ul><p><strong><strong>配置 html-webpack-plugin 生成预览页面</strong></strong></p><p>配置 html-webpack-plugin 生成预览页面</p><ul><li><p>1、运行 npm install html-webpack-plugin -D 命令，安装生成预览页面的插件</p></li><li><p>2、修改 webpack.config.js 文件头部区域，添加如下配置信息：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 导入生成预览页面的插件，得到一个构造函数
const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;)
const htmlPlugin = new HtmlWebpackPlugin({ // 创建插件的实例对象
    template: &#39;./src/index.html&#39;, // 指定要用到的模板文件
    filename: &#39;index.html&#39; // 指定生成的文件的名称，该文件存在与内存中，在目录中不显示
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>3、修改 webpack.config.js 文件中向外暴露的配置对象，新增如下配置节点：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module.exports = {
    plugins:[ htmlPlugin ] // plugins 数组是 webpack 打包期间会用到的一些插件列表
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><strong><strong>配置自动打包的相关参数</strong></strong></p><p>配置自动打包的相关参数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// package.json中的配置
// --open 打包完成后自动打开浏览器页面
// --host 配置IP地址
// --port 配置端口
&quot;scripts&quot;: {
    &quot;dev&quot;: &quot;webpack-dev-server --open --host 127.0.0.1 --port 8888&quot;
},

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>webpack中的加载器</strong></strong></p><p><strong>通过loader打包非js模块</strong></p><p>在实际开发过程中，webpack默认只能打包处理以 .js 为后缀名结尾的模块，其他非 .js 后缀名结尾的模块，webpack 默认处理不了，需要调用 loader 加载器才可以正常打包，否则会报错！</p><ul><li>loader 加载器可以协助 webpack 打包处理特定的文件模块，比如：</li><li>less-loader 可以打包处理 .less 相关的文件</li><li>sass-loader 可以打包处理 .sass 相关的文件</li><li>url-loader 可以打包处理 css 中与 url 路径相关的文件</li></ul><p><strong><strong>webpack中加载器的基本使用</strong></strong></p><p><strong>打包处理css文件</strong></p><p>1、运行 npm i style-loader css-loader -D 命令，安装处理 css 文件的loader</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm i style-loader css-loader -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、在 webpack.config.js 的 module -&gt; rules 数组中，添加loader规则如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 所有第三方模块的匹配规则
module: {
    rules: [
        { text: /\\.css$/, use: [&#39;style-loader&#39;, &#39;css-loader&#39;] }
    ]
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，test 表示匹配的文件类型，use 表示对应要调用的loader</p><p>注意：</p><ul><li>use 数组中指定的loader顺序是固定的</li><li>多个loader的调用顺序是：从后往前调用</li></ul><p><strong>打包处理 less 文件</strong></p><p>1、运行 npm i less-loader less -D 命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm i less-loader less -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、在 webpack.config.js 的 module -&gt; rules 数组中，新增 loader 规则如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 所有第三方模块的匹配规则
module: {
    rules: [
        { text: /\\.less$/, use: [&#39;style-loader&#39;, &#39;css-loader&#39;, &#39;less-loader&#39;] }
    ]
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>打包处理scss文件</strong></p><p>1、运行 npm i sass-loader node-sass -D 命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm i sass-loader node-sass -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、在 webpack.config.js 的 module -&gt; rules 数组中，新增 loader 规则如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 所有第三方模块的匹配规则
module: {
    rules: [
        { text: /\\.scss$/, use: [&#39;style-loader&#39;, &#39;css-loader&#39;, &#39;sass-loader&#39;] }
    ]
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置postcss自动添加css的兼容前缀</p><p>1、运行 npm i postcss-loader autoprefixer -D 命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm i postcss-loader autoprefixer -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、在项目根目录中创建 postcss 的配置文件 postcss.config.js，并初始化如下配置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const autoprefixer = require(&#39;autoprefixer&#39;) // 导入自动添加前缀的插件
module.exports = {
    plugins: [ autoprefixer ] // 挂载插件
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、在 webpack.config.js 的 module -&gt; rules 数组中，修改 css 的 loader 规则如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module: {
    rules: [
        { text: /\\.css$/, use: [&#39;style-loader&#39;, &#39;css-loader&#39;, &#39;postcss-loader&#39;] }
    ]
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>打包样式表中的图片和字体文件</strong></p><p>1、运行 npm i url-loader file-loader -D 命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm i url-loader file-loader -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、在 webpack.config.js 的 module -&gt; rules 数组中，添加 loader 规则如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module: {
    rules: [
        {
            text: /\\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,
            use: &#39;url-loader?limit=16940&#39;
        }
    ]
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>其中 ？ 之后的是loader的参数项</li><li>limit 用来指定图片的大小，单位是字节（byte），只有小于 limit 大小的图片，才会被转为 base64 图片</li></ul><p><strong>打包处理js文件中的高级语法</strong></p><p>1、安装babel转换器相关的包： npm i babel-loader @babel/core @babel/runtime -D</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm i babel-loader @babel/core @babel/runtime -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、安装babel语法插件相关的包： npm i @babel/preset-env @babel/plugin-transform-runtime @babel/plugin-proposal-class-properties -D</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm i @babel/preset-env @babel/plugin-transform-runtime @babel/plugin-proposal-class-properties -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3、在项目根目录中，创建 babel 配置文件 babel.config.js 并初始化基本配置如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module.exports = {
    presets: [ &#39;@babel/preset-env&#39; ],
    plugins: [ &#39;@babel/plugin-transform-runtime&#39;, &#39;@babel/plugin-proposal-class-properties&#39; ]
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、在 webpack.config.js 的 module -&gt; rules 数组中，添加 loader 规则如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// exclude 为排除项，表示babel-loader不需要处理 node_modules 中的js文件
{ test: /\\.js$/, use: &#39;babel-loader&#39;, exclude: /node_modules/ }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>webpack中配置vue组件的加载器</strong></strong></p><p>1、运行 npm i vue-loader vue-template-compiler -D 命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm i vue-loader vue-template-compiler -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、在 webpack.config.js 配置文件中，添加 vue-loader 的配置项如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const VueLoaderPlugin = require(&#39;vue-loader/lib/plugin&#39;)
module.experts = {
    module: {
        rules: [
        // ... 其他规则
        { test: /\\.vue$/, loader: &#39;vue-loader&#39; }
        ]
    },
    plugins: [
        // ... 其他插件
        new VueLoaderPlugin() // 请确保引入这个插件！
    ]
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>在webpack项目中使用vue</strong></strong></p><ul><li>1、运行 npm i vue -s 安装 vue</li><li>2、在 src -&gt; index.js 入口文件中，通过 import Vue from &#39;vue&#39; 来导入 vue 构造函数</li><li>3、创建 vue 的实例对象，并指定要控制的 el 区域</li><li>4、通过 render 函数渲染 App 根组件</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 1.导入vue构造函数
import Vue from &#39;vue&#39;
// 2.导入app根组件
import App from &#39;./components/App.vue&#39;

const vm = new Vue({
    // 3.指定 vm 实例要控制的页面区域
    el: &#39;#app&#39;,
    // 4.通过 render 函数，把指定的组件渲染到 el 区域中
    render: h =&gt; h(App)
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>webpack打包发布</strong></strong></p><p>上线之前需要通过webpack将应用进行整体打包，可以通过package.json文件配置打包命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 在package.json 文件中配置 webpack 打包命令
// 该命令默认加载项目根目录的webpack.config.js 配置文件
&quot;scripts&quot;: {
    // 用于打包的命令
    &quot;build&quot;: &quot;webpack -p&quot;,
    // 用于开发调试的命令
    &quot;dev&quot;: &quot;webpack-dev-server --open --host 127.0.0.1 --port 3000&quot;,
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,96),a=[d];function r(t,u){return n(),i("div",null,a)}const v=e(l,[["render",r],["__file","Webpack.html.vue"]]);export{v as default};
