import{_ as e,o as i,c as n,a as t}from"./app.74a5dc6f.js";const s={},l=t(`<h1 id="jquery" tabindex="-1"><a class="header-anchor" href="#jquery" aria-hidden="true">#</a> jQuery</h1><h1 id="jquery介绍与使用" tabindex="-1"><a class="header-anchor" href="#jquery介绍与使用" aria-hidden="true">#</a> <strong>jQuery介绍与使用</strong></h1><h1 id="一、jquery介绍" tabindex="-1"><a class="header-anchor" href="#一、jquery介绍" aria-hidden="true">#</a> <strong>一、jQuery介绍</strong></h1><blockquote><p>jQuery 是一个JavaScript库，是一个轻量级的&quot;写的少，做的多&quot;的JavaScript库。</p></blockquote><p><strong><strong>jQuery相比JavaScript优点：</strong></strong></p><ul><li>jQuery的onload加载事件速度更快，并且多个加载并行</li><li>jQuery绑定事件都是使用的事件函数，不需要加on；</li><li>JavaScript的onload加载事件，后面的覆盖前面的；</li><li>在jQuery中，$( )是其运行环境；</li><li>jQuery的模块可以分为3部分：入口模块、底层支持模块和功能模块。</li></ul><p>jQuery 极大地简化了 JavaScript 编程</p><p><strong><strong>jQuery库包含以下功能：</strong></strong></p><ul><li>HTML 元素选取</li><li>HTML 元素操作</li><li>CSS 操作</li><li>HTML 事件函数</li><li>JavaScript 特效和动画</li><li>HTML DOM 遍历和修改</li><li>AJAX</li><li>Utilities</li></ul><h1 id="二、jquery教程" tabindex="-1"><a class="header-anchor" href="#二、jquery教程" aria-hidden="true">#</a> <strong>二、jQuery教程</strong></h1><p><strong><strong>下载jQuery</strong></strong></p><p>我们可以到jQuery的官网下载jQuery文件（PS：其实jQuery就是一个封装了很多函数的js文件，把这个js文件导入到网页中就可以了）。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>jQuery官网地址： https://jquery.com/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>打开官网，即可看到jQuery的下载按钮，点击进入下载页面。有两个版本的jQuery可以下载：</p><ul><li>Production version - 用于实际的网站中，是已经被精简和压缩过的jQuery文件。</li><li>Development version - 用于测试和开发中，是未压缩的jQuery文件，可以方便阅读源码。</li></ul><p><strong><strong>使用jQuery</strong></strong></p><p>jQuery库就是一个JavaScript文件，我们可以在HTML中使用&lt;script&gt;标签引入jQuery库：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;head&gt;
	&lt;script src=&quot;jquery-1.10.2.min.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CDN方式引用 - 百度CDN</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;head&gt;
	&lt;script src=&quot;https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>Vue项目中引用jQuery</strong></strong></p><p><strong>安装</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install jquery --save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>修改配置文件</strong></p><p>在webpack.base.conf.js文件中添加以下代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const webpack = require(&#39;webpack&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后在webpack.base.conf.js文件中添加plugins，代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>plugins: [
  new webpack.ProvidePlugin({
    $: &quot;jquery&quot;,
    jQuery: &quot;jquery&quot;
  }),
]
//  $函数会自动添加到当前模块的上下文，无需显示声明

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在项目中引用jQuery</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;div id=&quot;app&quot;&gt;&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import $ from &#39;jquery&#39;
export default {
  name: &#39;App&#39;,
  components: {},
  data: function () {
    return {}
  },
  created:function(){
    console.log($(&#39;#app&#39;));
  }
}
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>基础语法</strong></strong></p><blockquote><p>jQuery 语法是通过选取 HTML 元素，并对选取的元素执行某些操作。</p></blockquote><p>基础语法： $(selector).action()</p><ul><li>美元符号定义 jQuery</li><li>选择符（selector）&quot;查询&quot;和&quot;查找&quot; HTML 元素</li><li>jQuery 的 action() 执行对元素的操作</li></ul><p>实例</p><ul><li>$(this).hide() - 隐藏当前元素</li><li>$(&quot;p&quot;).hide() - 隐藏所有 &lt;p&gt; 元素</li><li>$(&quot;p.test&quot;).hide() - 隐藏所有 class=&quot;test&quot; 的 &lt;p&gt; 元素</li><li>$(&quot;#test&quot;).hide() - 隐藏 id=&quot;test&quot; 的元素</li></ul><p><strong>jQuery语法</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$(document).ready(function(){
  // 开始写 jQuery 代码...
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>jQuery简洁语法</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$(function(){
  // 开始写 jQuery 代码...
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,40),r=[l];function a(d,u){return i(),n("div",null,r)}const o=e(s,[["render",a],["__file","jQuery.html.vue"]]);export{o as default};
