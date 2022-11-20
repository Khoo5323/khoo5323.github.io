import{_ as d,r as a,o as u,c as v,a as e,b as n,d as l,t as s,e as t}from"./app.629164ab.js";const o={},c=t('<h1 id="vue2-x-基础" tabindex="-1"><a class="header-anchor" href="#vue2-x-基础" aria-hidden="true">#</a> Vue2.X 基础</h1><h1 id="vue2-x-基础-指令、计算、侦听、修饰符等" tabindex="-1"><a class="header-anchor" href="#vue2-x-基础-指令、计算、侦听、修饰符等" aria-hidden="true">#</a> <strong>Vue2.X 基础（指令、计算、侦听、修饰符等）</strong></h1><h1 id="一、vue介绍" tabindex="-1"><a class="header-anchor" href="#一、vue介绍" aria-hidden="true">#</a> <strong>一、Vue介绍</strong></h1><p><strong>本站相关笔记</strong></p>',4),p={href:"http://vue.cnsbq.com/notebook/vue/vue_04.html",target:"_blank",rel:"noopener noreferrer"},m={href:"http://vue.cnsbq.com/notebook/vue/vue_05.html",target:"_blank",rel:"noopener noreferrer"},g={href:"http://vue.cnsbq.com/notebook/vue/vue_09.html",target:"_blank",rel:"noopener noreferrer"},b={href:"http://vue.cnsbq.com/notebook/vue/vue_11.html",target:"_blank",rel:"noopener noreferrer"},h={href:"http://vue.cnsbq.com/notebook/vue/vue_12.html",target:"_blank",rel:"noopener noreferrer"},x={href:"http://vue.cnsbq.com/notebook/vue/vue_10.html",target:"_blank",rel:"noopener noreferrer"},f=e("p",null,[e("strong",null,[e("strong",null,"Vue是什么？")])],-1),q=e("blockquote",null,[e("p",null,"Vue：渐进式JavaScript框架")],-1),_=e("p",null,"Vue.js（读音 /vjuː/, 类似于 view） 是一套构建用户界面的渐进式框架。它的作者是位中国人–尤雨溪（EvanYou).",-1),k=e("p",null,"它提供了 MVVM 数据绑定和一个可组合的组件系统，具有简单、灵活的API。",-1),V=e("p",null,"很多使用过vue的程序员这样评价它，“vue.js兼具angular.js和react.js的优点，并剔除了它们的缺点”。",-1),y={href:"https://cn.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},w={href:"https://cn.vuejs.org/v2/guide/",target:"_blank",rel:"noopener noreferrer"},M={href:"https://v3.cn.vuejs.org/guide/introduction.html",target:"_blank",rel:"noopener noreferrer"},N={href:"https://learning.dcloud.io/#/?vid=0",target:"_blank",rel:"noopener noreferrer"},O={href:"http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html",target:"_blank",rel:"noopener noreferrer"},D={href:"https://element.eleme.cn/#/zh-CN",target:"_blank",rel:"noopener noreferrer"},S=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vue官网：https://cn.vuejs.org/v2/guide/
Vue2.0手册：https://cn.vuejs.org/v2/guide/
Vue3.0手册：https://v3.cn.vuejs.org/guide/introduction.html
Vue视频：https://learning.dcloud.io/#/?vid=0
grid布局：http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html
组件库：https://element.eleme.cn/#/zh-CN

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>Vue的优点</strong></strong></p><ul><li>小而简单，轻量级框架，上手容易，简单易学，便于与第三方库或既有项目整合</li><li>只关注视图层，采用自底向上增量开发的设计</li><li>它的目标是通过尽可能简单的 API 实现响应的数据绑定和组合的视图组件</li><li>当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。</li><li>Vue封装了大量的组件,可以直接使用,简便而而美,省去了大量的Js代码.(有字体\\主题\\各种表单,表格,图标,按钮,提示框,导航栏等等)</li></ul><p><strong><strong>Element组件库</strong></strong></p>`,4),j={href:"https://element.eleme.cn/#/zh-CN",target:"_blank",rel:"noopener noreferrer"},T={href:"https://element.eleme.cn/#/zh-CN/component/installation",target:"_blank",rel:"noopener noreferrer"},C=e("p",null,"Element组件库：https://element.eleme.cn/#/zh-CN",-1),X=e("p",null,"Element文档：https://element.eleme.cn/#/zh-CN/component/installation",-1),z=e("p",null,[e("strong",null,[e("strong",null,"Vant组件库")])],-1),H=e("blockquote",null,[e("p",null,"基于 Vue2.X 和 Vue3.X 的 Mobile 组件库")],-1),L={href:"https://vant-contrib.gitee.io/vant/#/zh-CN/",target:"_blank",rel:"noopener noreferrer"},E={href:"https://vant-contrib.gitee.io/vant/v3/#/zh-CN",target:"_blank",rel:"noopener noreferrer"},P=t(`<p>Vant2.X文档：https://vant-contrib.gitee.io/vant/#/zh-CN/</p><p>Vant3.X文档：https://vant-contrib.gitee.io/vant/v3/#/zh-CN</p><h1 id="二、vue基础" tabindex="-1"><a class="header-anchor" href="#二、vue基础" aria-hidden="true">#</a> <strong>二、Vue基础</strong></h1><p><strong><strong>Vue的使用</strong></strong></p><p>创建一个 .html文件,然后通过如下方式引入Vue:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!-- 开发环境版本，包含了有帮助的命令行警告 --&gt;
&lt;script src=&quot;https://cdn.jsdelivr.net/npm/vue/dist/vue.js&quot;&gt;&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!-- 生产环境版本，优化了尺寸和速度 --&gt;
&lt;script src=&quot;https://cdn.jsdelivr.net/npm/vue&quot;&gt;&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再或者:</p><p>到Vue官网 Vue官网 直接下载并用 &lt;script&gt; 标签引入，Vue 会被注册为一个全局变量</p><p><strong>1. 初识Vue的简单例子: Hello Vue!</strong></p><p>Vue的简单例子: Hello Vue!</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div id=&quot;app&quot;&gt;
    {{message}}
&lt;div&gt;

var app = new Vue({
  el: &quot;#app&quot;,
  data: {
    message: &#39;Hello World!&#39;
  }
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果: Hello Vue!</p>`,14),R=e("li",null,"new Vue() 是创建了一个Vue实例;",-1),A=e("li",null,"el: '#app' 意思是让Vue实例去接管id为'app'的div里面的内容,即为Vue实例和这个div的Dom元素做了绑定,el绑定的div为挂载点",-1),$=e("li",null,"data: 就是vue的一些数据",-1),J=t(`<p><strong>Object.freeze()</strong></p><p>应用场景：在data或vuex里我们可以使用freeze冻结对象，对于纯展示的大数据，都可以使用Object.freeze提升性能</p><p>注意点：Object.freeze()冻结的是值，你仍然可以将变量的引用替换掉</p><p><strong><strong>methods: Vue方法</strong></strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>methods: {
    //这个是要执行的函数
    hello: function() { }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>methods里面放vue的方法</p><h1 id="三、vue指令" tabindex="-1"><a class="header-anchor" href="#三、vue指令" aria-hidden="true">#</a> <strong>三、Vue指令</strong></h1><p><strong><strong>Vue的指令</strong></strong></p><blockquote><p>指令（Directives）是 vue 为开发者提供的模板语法，用于辅助开发者渲染页面的基本结构。</p></blockquote><p><strong>vue 中的指令按照不同的用途可以分为如下 6 大类：</strong></p>`,10),B=e("p",null,[e("strong",null,"内容渲染指令")],-1),I=e("li",null,[e("p",null,"内容渲染指令用来辅助开发者渲染 DOM 元素的文本内容。常用的内容渲染指令有如下 3 个：")],-1),W=t(`<li><p><strong>v-text</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;p v-text=&quot;username&quot;&gt;&lt;/p&gt;
&lt;p v-text=&quot;username&quot;&gt;姓名&lt;/p&gt; &lt;!--  姓名两字会被覆盖掉 --&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>注意：v-text 指令会覆盖元素内默认的值。</li></ul></li>`,1),F=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;p&gt;姓名：{{ username }} &lt;/p&gt;
&lt;p&gt;性别：{{ sex }}&lt;/p&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>注意：相对于 v-text 指令来说，插值表达式在开发中更常用一些！因为它不会覆盖元素中默认的文本内容。</li></ul>`,2),U=t(`<li><p><strong>v-html</strong></p><ul><li>v-text 指令和插值表达式只能渲染纯文本内容。如果要把包含 HTML 标签的字符串渲染为页面的 HTML 元素， 则需要用到 v-html 这个指令：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!-- 假设demo里面包含&lt;h2 style=&quot;color: red&quot;&gt;123&lt;/h2&gt; --&gt;
&lt;div v-html=&quot;demo&quot;&gt;&lt;/div&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>最终输出的是</li></ul></li>`,1),Y=t(`<li><p><strong>属性绑定指令</strong></p><ul><li>如果需要为元素的属性动态绑定属性值，则需要用到 v-bind 属性绑定指令。用法示例如下：</li><li>由于 v-bind 指令在开发中使用频率非常高，因此，vue 官方为其提供了简写形式（简写为英文的 : ）。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;input type=&quot;text&quot; :placeholder=&quot;inputValue&quot; &gt;
&lt;img :src=&quot;imgSrc&quot; alt=&quot;&quot; &gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>事件绑定指令</strong></p><ul><li>vue 提供了 v-on 事件绑定指令，用来辅助程序员为 DOM 元素绑定事件监听。语法格式如下：</li><li>注意：原生 DOM 对象有 onclick、oninput、onkeyup 等原生事件，替换为 vue 的事件绑定形式后，分别为：v-on:click、v-on:input、v-on:keyup</li><li>通过 v-on 绑定的事件处理函数，需要在 methods 节点中进行声明：</li><li>由于 v-on 指令在开发中使用频率非常高，因此，vue 官方为其提供了简写形式（简写为英文的 @ ）。</li><li>事件参数对象 <ul><li>在原生的 DOM 事件绑定中，可以在事件处理函数的形参处，接收事件参数对象 event。同理，在 v-on 指令 （简写为 @ ）所绑定的事件处理函数中，同样可以接收到事件参数对象 event，示例代码如下：</li></ul></li><li>绑定事件并传参 <ul><li>在使用 v-on 指令绑定事件时，可以使用 ( ) 进行传参，示例代码如下：</li></ul></li><li>$event <ul><li>$event 是 vue 提供的特殊变量，用来表示原生的事件参数对象 event。$event 可以解决事件参数对象 event 被覆盖的问题。示例用法如下：</li></ul></li></ul></li><li><p><strong>双向绑定指令</strong></p><ul><li>vue 提供了 v-model 双向数据绑定指令，用来辅助开发者在不操作 DOM 的前提下，快速获取表单的数据。</li></ul></li><li><p><strong>条件渲染指令</strong></p><ul><li><p>条件渲染指令用来辅助开发者按需控制 DOM 的显示与隐藏。条件渲染指令有如下两个，分别是：</p><ul><li>v-if</li><li>v-show</li></ul></li><li><p>v-if 和 v-show 的区别</p><ul><li>实现原理不同： <ul><li>v-if 指令会动态地创建或移除 DOM 元素，从而控制元素在页面上的显示与隐藏；</li><li>v-show 指令会动态为元素添加或移除 style=&quot;display: none;&quot; 样式，从而控制元素的显示与隐藏；</li></ul></li><li>性能消耗不同：v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此： <ul><li>如果需要非常频繁地切换，则使用 v-show 较好;</li><li>如果在运行时条件很少改变，则使用 v-if 较好;</li></ul></li></ul></li><li><p>v-else</p><ul><li>v-if 可以单独使用，或配合 v-else 指令一起使用：</li></ul><p>注意：v-else 指令必须配合 v-if 指令一起使用，否则它将不会被识别！</p></li><li><p>v-else-if</p><ul><li>v-else-if 指令，顾名思义，充当 v-if 的“else-if 块”，可以连续使用：</li></ul><p>注意：v-else-if 指令必须配合 v-if 指令一起使用，否则它将不会被识别！</p></li></ul></li><li><p><strong>列表渲染指令</strong></p><ul><li><p>vue 提供了 v-for 列表渲染指令，用来辅助开发者基于一个数组来循环渲染一个列表结构。v-for 指令需要使 用 item in items 形式的特殊语法，其中：</p><ul><li>items 是待循环的数组</li><li>item 是被循环的每一项</li></ul></li><li><p>v-for 中的索引</p><ul><li>v-for 指令还支持一个可选的第二个参数，即当前项的索引。语法格式为 (item, index) in items，示例代码如下：</li></ul><p>注意：v-for 指令中的 item 项和 index 索引都是形参，可以根据需要进行重命名。例如 (user, i) in userlist</p></li><li><p>使用 key 维护列表的状态</p><ul><li>当列表的数据变化时，默认情况下，vue 会尽可能的复用已存在的 DOM 元素，从而提升渲染的性能。但这种 默认的性能优化策略，会导致有状态的列表无法被正确更新。</li><li>为了给 vue 一个提示，以便它能跟踪每个节点的身份，从而在保证有状态的列表被正确更新的前提下，提升渲 染的性能。此时，需要为每项提供一个唯一的 key 属性：</li><li>key 的注意事项： <ol><li>key 的值只能是字符串或数字类型</li><li>key 的值必须具有唯一性（即：key 的值不能重复）</li><li>建议把数据项 id 属性的值作为 key 的值（因为 id 属性的值具有唯一性）</li><li>使用 index 的值当作 key 的值没有任何意义（因为 index 的值不具有唯一性）</li><li>建议使用 v-for 指令时一定要指定 key 的值（既提升性能、又防止列表状态紊乱）</li></ol></li></ul></li></ul></li>`,5),G=t(`<p>注意：指令是 vue 开发中最基础、最常用、最简单的知识点。</p><p><strong>指令中使用 Javascript 表达式</strong></p><p>在 vue 提供的模板渲染语法中，除了支持绑定简单的数据值之外，还支持 Javascript 表达式的运算，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{{ age + 1 }}
{{ ok ? &#39;yes&#39; : &#39;no&#39; }}
&lt;div v-bind:id=&quot;&#39;list&#39; + id&quot;&gt;&lt;/div&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>常见指令</strong></p><p>Vue指令以v-开头，作用在HTML元素上，将指令绑定在元素上时，会给绑定的元素添加一些特殊行为，可将指令视作特殊的HTML属性</p><ul><li><p>v-model：在表单元素上实现双向绑定</p></li><li><p>v-if：条件判断指令，根据表达式值的真假来插入或删除元素，表达式返回一个布尔值（直接决定是否进行DOM渲染）</p></li><li><p>v-show：条件渲染指令，与v-if不同的是，无论v-show的值为true或false，元素都会存在于HTML代码中；而只有当v-if的值为true，元素才会存在于HTML代码中。v-show指令只是设置了元素CSS的style值</p></li><li><p>v-else：可配合v-if或v-show使用，v-else指令必须紧邻v-if或v-show，否则该命令无法正常工作。v-else绑定的元素能否渲染在HTML中，取决于前面使用的是v-if还是v-show。若前面使用的是v-if，且v-if值为true，则v-else元素不会渲染；若前面使用的是v-show，且v-show值为true，则v-else元素仍会渲染到HTML。</p></li><li><p>v-for 循环指令，基于一个数组渲染一个列表(使用key跟踪每个节点的身份，添加index可以输出数组下标)，语法如下：</p><p>v-for = &quot;item in items&quot;</p></li><li><p>v-bind：给DOM绑定元素属性，语法如下：</p><p>v-bind:argument=&quot;expression&quot;</p><p>其中，argument通常是HTML元素的特性，如：v-bind:class=&quot;expression&quot;。</p><p>注：v-bind指令可以缩写为:冒号。如：:class=&quot;expression&quot;。</p></li><li><p>v-on：用于监听DOM事件，语法与v-bind类似，如监听点击事件v-on:click=&quot;doSth&quot;</p><p>注：v-on指令可以缩写为@符号。如：@click=&quot;doSth&quot;。</p></li></ul><p><strong><strong>列表渲染 v-for</strong></strong></p><blockquote><p>可以用 v-for 指令基于一个数组来渲染一个列表。v-for 指令需要使用 item in items 形式的特殊语法，其中 items 是源数据数组，而 item 则是被迭代的数组元素的别名。</p></blockquote><p>为了给 Vue 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，你需要为每项提供一个唯一 key</p><p>v-for 添加 index 可以输出当前项的索引</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;ul id=&quot;example-1&quot;&gt;
  &lt;li v-for=&quot;(item, index) in items&quot; :key=&quot;item.message&quot;&gt;
    {{ item.message }} - {{ index }}
  &lt;/li&gt;
&lt;/ul&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>filters 指令与过滤器</strong></strong></p><blockquote><p>过滤器（Filters）是 vue 为开发者提供的功能，常用于文本的格式化。过滤器可以用在两个地方：插值表达式 和 v-bind 属性绑定。过滤器应该被添加在 JavaScript 表达式的尾部，由“管道符”进行调用。示例代码如下：</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;li&gt;商品价格：{{item.price | filterPrice}}&lt;/li&gt;

filters: {
    filterPrice (price) {
        return price ? (&#39;￥&#39; + price) : &#39;--&#39;
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要格式化数据的情况，比如需要处理时间、价格等数据格式的输出 / 显示。</p><p><strong>全局过滤器 Vue.filter( id, [definition] )</strong></p><p>注册或获取全局过滤器。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 注册
Vue.filter(&#39;my-filter&#39;, function (value) {
  // 返回处理后的值
})

// getter，返回已注册的过滤器
var myFilter = Vue.filter(&#39;my-filter&#39;)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：过滤器仅在 vue 2.x 和 1.x 中受支持，在 vue 3.x 的版本中剔除了过滤器相关的功能。</p><h1 id="四、修饰符" tabindex="-1"><a class="header-anchor" href="#四、修饰符" aria-hidden="true">#</a> <strong>四、修饰符</strong></h1><p><strong><strong>事件修饰符</strong></strong></p><p>在事件处理函数中调用 event.preventDefault() 或 event.stopPropagation() 是非常常见的需求。因此， vue 提供了事件修饰符的概念，来辅助程序员更方便的对事件的触发进行控制。常用的 5 个事件修饰符如下：</p><p>为了解决这个问题，Vue.js 为 v-on 提供了事件修饰符。之前提过，修饰符是由点开头的指令后缀来表示的。</p><ul><li>.stop 阻止事件冒泡，相当于调用了event.stopPropagation()方法</li><li>.prevent 阻止默认行为，相当于调用了event.preventDefault()方法，比如表单的提交、a标签的跳转就是默认事件</li><li>.self 只有元素本身触发时才触发方法，就是只有点击元素本身才会触发。比如一个div里面有个按钮，div和按钮都有事件，我们点击按钮，div绑定的方法也会触发，如果div的click加上self，只有点击到div的时候才会触发，变相的算是阻止冒泡</li><li>.once 事件只能用一次，无论点击几次，执行一次之后都不会再执行</li><li>.capture 事件的完整机制是捕获-目标-冒泡，事件触发是目标往外冒泡</li><li>.sync 对prop进行双向绑定</li><li>.keyCode 监听按键的指令，具体可以查看vue的键码对应表</li></ul><p>使用修饰符时，顺序很重要；相应的代码会以同样的顺序产生。因此，用 v-on:click.prevent.self 会阻止所有的点击，而 v-on:click.self.prevent 只会阻止对元素自身的点击。</p><p><strong><strong>按键修饰符</strong></strong></p><blockquote><p>在监听键盘事件时，我们经常需要检查详细的按键。Vue 允许为 v-on 在监听键盘事件时添加按键修饰符：</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!--@keydown.xx,点什么键,就是按下什么键触发事件--&gt;
&lt;input @keydown.enter=&quot;keyEnter()&quot;/&gt;  //按下回车键即触发事件
&lt;input @keydown.a=&quot;kerA()&quot; /&gt;  //按下键盘的A键

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>v-model中的修饰符</strong></strong></p><ul><li>v-model.lazy 只有在input输入框发生一个blur时才触发</li><li>v-model.trim 将用户输入的前后的空格去掉</li><li>v-model.number 将用户输入的字符串转换成number</li></ul><h1 id="五、计算与侦听" tabindex="-1"><a class="header-anchor" href="#五、计算与侦听" aria-hidden="true">#</a> <strong>五、计算与侦听</strong></h1><p><strong><strong>Computed 计算属性</strong></strong></p><blockquote><p>当其依赖的属性的值发生变化时，计算属性会重新计算，反之，则使用缓存中的属性值。</p></blockquote><ol><li>computed中属性不能和data重名，也不能和methods重名</li><li>计算属性：当一个属性依赖多个属性改变时，一般采用computed方法；当依赖的属性发生改变时，会立即执行get方法，并且重新计算当前最新的val值，最后重新渲染视图；</li><li>computed：会默认走缓存，节省性能；</li><li>computed中不支持异步；</li></ol><p>如果a的依赖数据是通过异步被更新的，那么a不能监听到最新发生的变化</p><p><strong><strong>Watch 侦听属性</strong></strong></p><blockquote><p>当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的。</p></blockquote><p><strong><strong>Computed 和 Watch 的区别</strong></strong></p><ul><li>computed 计算属性 : 依赖其它属性值，并且 computed 的值有缓存，只有它依赖的属性值发生改变，下一次获取 computed 的值时才会重新计算 computed 的值。</li><li>watch 侦听器 : 更多的是观察的作用，无缓存性，类似于某些数据的监听回调，每当监听的数据变化时都会执行回调进行后续操作。</li></ul><p><strong>运用场景：</strong></p><ul><li>当需要进行数值计算,并且依赖于其它数据时，应该使用 computed，因为可以利用 computed 的缓存特性，避免每次获取值时都要重新计算。</li><li>当需要在数据变化时执行异步或开销较大的操作时，应该使用 watch，使用 watch 选项允许执行异步操作 ( 访问一个 API )，限制执行该操作的频率，并在得到最终结果前，设置中间状态。这些都是计算属性无法做到的。</li></ul><h1 id="六、动态组件与插槽" tabindex="-1"><a class="header-anchor" href="#六、动态组件与插槽" aria-hidden="true">#</a> <strong>六、动态组件与插槽</strong></h1><p><strong><strong>v-bind:is 动态组件</strong></strong></p><blockquote><p>动态组件指的是动态切换组件的显示与隐藏。</p></blockquote><p>vue 提供了一个内置的 &lt;component&lt; 组件，专门用来实现动态组件的渲染。示例代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>data () {
    // 当前要渲染的组件名称
    return {
        comName: &#39;Left&#39;
    }
}

// 通过is属性动态指定要渲染的组件
&lt;component :is=&quot;comName&quot;&gt;&lt;/component&gt;
// 点击按钮，动态切换组件的名称
&lt;button @click=&quot;comName = &#39;Left&#39;&quot;&gt;Left&lt;/button&gt;
&lt;button @click=&quot;comName = &#39;Right&#39;&quot;&gt;Right&lt;/button&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>keep-alive 抽象组件</strong></strong></p><blockquote><p>keep-alive是一个抽象组件：它自身不会渲染一个DOM元素，也不会出现在父组件链中；使用keep-alive包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。</p></blockquote><p>默认情况下，切换动态组件时无法保持组件的状态。此时可以使用 vue 内置的 &lt;keep-alive&gt; 组件保持动态组 件的状态。示例代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;keep-alive&gt;
    &lt;component :is=&quot;comName&quot;&gt;&lt;/component&gt;
&lt;/keep-alive&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>v-slot 插槽</strong></strong></p><p>在 2.6.0 中，我们为具名插槽和作用域插槽引入了一个新的统一的语法 (即 v-slot 指令)。它取代了 slot 和 slot-scope 这两个目前已被废弃但未被移除且仍在文档中的 attribute。</p><p><strong>具名插槽</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div class=&quot;container&quot;&gt;
  &lt;header&gt;
    &lt;slot name=&quot;header&quot;&gt;&lt;/slot&gt;
  &lt;/header&gt;
  &lt;main&gt;
    &lt;slot&gt;&lt;/slot&gt;
  &lt;/main&gt;
  &lt;footer&gt;
    &lt;slot name=&quot;footer&quot;&gt;&lt;/slot&gt;
  &lt;/footer&gt;
&lt;/div&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个不带 name 的 &lt;slot&gt; 出口会带有隐含的名字“default”。</p><p><strong>作用域插槽</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;slot v-bind:user=&quot;user&quot;&gt;
  {{ user.lastName }}
&lt;/slot&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>绑定在 &lt;slot&gt; 元素上的 attribute 被称为插槽 prop。现在在父级作用域中，我们可以使用带值的 v-slot 来定义我们提供的插槽 prop 的名字：</p><p><strong><strong>ref 属性</strong></strong></p><ul><li><ol><li>被用来给元素或子组件注册引用信息（id的替代者）</li></ol></li><li><ol start="2"><li>应用在html标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象（vc）</li></ol></li></ul><p>使用方式：</p><ul><li><ol><li>打标识：&lt;h1 ref=&quot;xxx&quot;&gt;.....&lt;/h1&gt; 或 &lt;School ref=&quot;xxx&quot;&gt;&lt;/School&gt;</li></ol></li><li><ol start="2"><li>获取：this.$refs.xxx</li></ol></li></ul><h1 id="七、vue高级" tabindex="-1"><a class="header-anchor" href="#七、vue高级" aria-hidden="true">#</a> <strong>七、Vue高级</strong></h1><p><strong><strong>props 父传子</strong></strong></p><blockquote><p>让组件接收外部传过来的数据。</p></blockquote><p>App.vue中</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;student name=&quot;小明&quot; :age=&quot;9&quot; sex=&quot;男&quot;&gt;&lt;/student&gt;
    &lt;student name=&quot;小红&quot; :age=&quot;8&quot; sex=&quot;女&quot;&gt;&lt;/student&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
  import Student from &#39;./components/Student&#39;
  export default {
    name: &#39;App&#39;,
    components: { Student }
  }
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Student.vue中</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;h2&gt;姓名：{{ name }}&lt;/h2&gt;
    &lt;h2&gt;性别：{{ sex }}&lt;/h2&gt;
    &lt;h2&gt;年龄：{{ age }}&lt;/h2&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    name: &#39;Student&#39;,
    // 简单声明接收
    // props: [ &#39;name&#39;, &#39;age&#39;, &#39;sex&#39; ]

    // 接收的同时对类型进行限制
    // props: {
    //   name: String,
    //   age: Number,
    //   sex: String
    // }

    // 接收的同时对类型进行限制，且可以设置默认值或者是否是必要的
    props: {
      name: {
        type: String, // 限制类型
        required: true // 设置必传项
      },
      age: {
        type: Number,
        default: 18 // 默认值
      },
      sex: {
        type: String,
        required: true
      }
    }
  }
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接收方式</p><ul><li>简单声明接收</li><li>接收的同时对类型进行限制</li><li>接收的同时对类型进行限制，且可以设置默认值、必要性</li></ul><p>备注：props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data中的数据。</p><p><strong><strong>mixin 混入</strong></strong></p><blockquote><p>混入 (mixin) 提供了一种非常灵活的方式，来分发 Vue 组件中的可复用功能。一个混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被“混合”进入该组件本身的选项。</p></blockquote><p><strong>混入 (mixin)</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 定义一个混入对象
var myMixin = {
  created: function () {
    this.hello()
  },
  methods: {
    hello: function () {
      console.log(&#39;hello from mixin!&#39;)
    }
  }
}

// 定义一个使用混入对象的组件
var Component = Vue.extend({
  mixins: [myMixin]  // 数组形式，可填多个
})

var component = new Component() // =&gt; &quot;hello from mixin!&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>全局混入 Vue.mixin</strong></p><blockquote><p>在main.js中使用Vue.mixin(mixin1)进行全局混入，会在所有组件中运用。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Vue.mixin(mixin1)
Vue.mixin(mixin2)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Mixin 使我们能够为 Vue 组件编写可插拔和可重用的功能。</li><li>如果希望在多个组件之间重用一组组件选项，例如生命周期 hook、 方法等，则可以将其编写为 mixin，并在组件中简单的引用它。</li><li>然后将 mixin 的内容合并到组件中。如果你要在 mixin 中定义生命周期 hook，那么它在执行时将优化于组件自已的 hook。</li></ul><p><strong><strong>extend 构造器</strong></strong></p><p>使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象。</p><p>data 选项是特例，需要注意 - 在 Vue.extend() 中它必须是函数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div id=&quot;mount-point&quot;&gt;&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 创建构造器
var Profile = Vue.extend({
  template: &#39;&lt;p&gt;{{firstName}} {{lastName}} aka {{alias}}&lt;/p&gt;&#39;,
  data: function () {
    return {
      firstName: &#39;Walter&#39;,
      lastName: &#39;White&#39;,
      alias: &#39;Heisenberg&#39;
    }
  }
})
// 创建 Profile 实例，并挂载到一个元素上。
new Profile().$mount(&#39;#mount-point&#39;)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>Vue.nextTick( [callback, context] ) 延迟回调</strong></strong></p><blockquote><p>在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。</p></blockquote><p>Vue.nextTick用于延迟执行一段代码，它接收2个参数（回调函数和执行回调函数的上下文环境），如果没有提供回调函数，那么将返回promise对象。</p><p>所以，在以下情况下，会用到nextTick：</p><ul><li>在数据变化后执行的某个操作，而这个操作需要使用随数据变化而变化的DOM结构的时候，这个操作就需要方法在nextTick()的回调函数中。</li><li>在vue生命周期中，如果在created()钩子进行DOM操作，也一定要放在nextTick()的回调函数中。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>this.$nextTick(() =&gt; {
  // 获取数据的操作...
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li><p>语法：this.$nextTick(回调函数)</p></li><li><p>作用：在下一次 DOM 更新结束后执行其指定的回调。</p></li><li><p>什么时候用：当改变数据后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数中执行。</p></li></ol><p><strong><strong>Vue.set( target, propertyName/index, value )</strong></strong></p><p>参数</p><ul><li>{Object | Array} target</li><li>{string | number} propertyName/index</li><li>{any} value</li></ul><p>向响应式对象中添加一个 property，并确保这个新 property 同样是响应式的，且触发视图更新。它必须用于向响应式对象上添加新 property，因为 Vue 无法探测普通的新增 property (比如 this.myObject.newProperty = &#39;hi&#39;)</p><p>注意对象不能是 Vue 实例，或者 Vue 实例的根数据对象。</p><p><strong><strong>数组更新检测</strong></strong></p><p><strong>变更方法</strong></p><blockquote><p>Vue 将被侦听的数组的变更方法进行了包裹，所以它们也将会触发视图更新。</p></blockquote><p>这些被包裹过的方法包括：</p><ul><li>pop() 从数组中删除最后一个元素</li><li>push() 方法（在数组结尾处）向数组添加一个新的元素</li><li>shift() 方法会删除首个数组元素，并把所有其他元素“位移”到更低的索引。</li><li>unshift() 方法（在开头）向数组添加新元素，并“反向位移”旧元素</li><li>splice(1,0,p1,p2...) 方法可用于向数组添加新项(第一位代表位置，第二位代表删除数量，后面的代表添加的数据)。</li><li>sort() 方法用于对数组的元素进行排序。</li><li>reverse() 方法反转数组中元素的顺序。</li></ul><p>你可以打开控制台，然后对前面例子的 items 数组尝试调用变更方法。比如 example1.items.push({ message: &#39;Baz&#39; })。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>example1.items.push({ message: &#39;Baz&#39; })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>替换数组</strong></p><blockquote><p>变更方法，顾名思义，会变更调用了这些方法的原始数组。相比之下，也有非变更方法，例如 filter() 、concat() 和 slice()。它们不会变更原始数组，而总是返回一个新数组。当使用非变更方法时，可以用新数组替换旧数组：</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>example1.items = example1.items.filter(function (item) {
  return item.message.match(/Foo/)
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可能认为这将导致 Vue 丢弃现有 DOM 并重新渲染整个列表。幸运的是，事实并非如此。Vue 为了使得 DOM 元素得到最大范围的重用而实现了一些智能的启发式方法，所以用一个含有相同元素的数组去替换原来的数组是非常高效的操作。</p><p>注意事项：由于 JavaScript 的限制，Vue 不能检测数组和对象的变化。</p><p><strong><strong>SSR 服务端渲染</strong></strong></p><blockquote><p>SSR也就是服务端渲染，也就是将Vue在客户端把标签渲染成HTML的工作放在服务端完成，然后再把html直接返回给客户端</p></blockquote><h1 id="九、vue2-x-和-vue3-x-的异同" tabindex="-1"><a class="header-anchor" href="#九、vue2-x-和-vue3-x-的异同" aria-hidden="true">#</a> <strong>九、Vue2.X 和 Vue3.X 的异同</strong></h1><p><strong><strong>v-if 与 v-for 一起使用</strong></strong></p><ul><li>Vue2.X：当 v-if 与 v-for 一起使用时，v-for 具有比 v-if 更高的优先级。</li><li>Vue3.X：当 v-if 与 v-for 一起使用时，v-if 具有比 v-for 更高的优先级。</li></ul><p>不推荐同时使用 v-if 和 v-for。</p><p>以Vue2.X为例，当 v-if 与 v-for 一起使用时，v-for 具有比 v-if 更高的优先级，这意味着 v-if 将分别重复运行于每个 v-for 循环中。可以尝试用computed计算属性遍历处理。</p><p><strong><strong>keep-alive 缓存组件</strong></strong></p><p><strong>Vue2写法</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;keep-alive&gt;
  &lt;router-view/&gt;
&lt;/keep-alive&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Vue3写法</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;router-view v-slot=&quot;{ Component }&quot;&gt;
  &lt;keep-alive&gt;
    &lt;component :is=&quot;Component&quot; /&gt;
  &lt;/keep-alive&gt;
&lt;/router-view&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>filter 过滤器</strong></strong></p><ul><li>Vue2.X：中可以使用过滤器对数据进行处理，分为全局过滤器和局部过滤器。</li><li>Vue3.X：中移除了过滤器。</li></ul><p><strong><strong>使用data数据时</strong></strong></p><p><strong>Vue2.X</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export default {
  data(){
    return{
      name:&#39;hello 番茄&#39;
    }
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Vue3.X</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import {reactive} from &#39;vue&#39;
export default {
  setup(){
    const name = reactive({
      name:&#39;hello 番茄&#39;
    })
    return {name}
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="十、vue使用vue-cli配置跨域的异同" tabindex="-1"><a class="header-anchor" href="#十、vue使用vue-cli配置跨域的异同" aria-hidden="true">#</a> <strong>十、Vue使用Vue-cli配置跨域的异同</strong></h1><p><strong><strong>跨域</strong></strong></p><p><strong>Vue-cli2使用proxyTable</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 配置好后一定要关闭原来的server，重新npm run dev启动项目。不然无效。
proxyTable: {
  // 用‘/api’开头，代理所有请求到目标服务器
  &#39;/api&#39;: {
    target: &#39;http:xxx.com&#39;, // 目标接口域名
    changeOrigin: true, // 是否启用跨域
    pathRewrite: { //
      &#39;^/api&#39;: &#39;&#39;
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Vue-cli3使用proxy</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module.exports = {
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,135);function K(r,Q){const i=a("ExternalLinkIcon");return u(),v("div",null,[c,e("p",null,[e("a",p,[n("组件通信"),l(i)]),e("a",m,[n("接口调用"),l(i)]),e("a",g,[n("源码探索"),l(i)]),e("a",b,[n("常见配置"),l(i)]),e("a",h,[n("Vue项目开发"),l(i)]),e("a",x,[n("常用组件"),l(i)])]),f,q,_,k,V,e("p",null,[e("a",y,[n("Vue官网"),l(i)]),e("a",w,[n("Vue2.0手册"),l(i)]),e("a",M,[n("Vue3.0手册"),l(i)]),e("a",N,[n("Vue视频"),l(i)]),e("a",O,[n("grid布局"),l(i)]),e("a",D,[n("Element组件库"),l(i)])]),S,e("p",null,[e("a",j,[n("Element组件库"),l(i)]),e("a",T,[n("Element文档"),l(i)])]),C,X,z,H,e("p",null,[e("a",L,[n("Vant2.X文档"),l(i)]),e("a",E,[n("Vant3.X文档"),l(i)])]),P,e("ul",null,[R,A,$,e("li",null,s(r.message)+": 通过el和div做了绑定之后,可以直接通过"+s()+"双花括号的形式显示在data里的message的数据",1),e("li",null,"如果在别的div里写"+s(r.message)+"是不会显示'Hello Vue!'的,只会显示"+s(r.message)+",因为Vue实例只会去处理id为'app'的这个div里面的内容.",1)]),J,e("ol",null,[e("li",null,[B,e("ul",null,[I,e("li",null,[e("p",null,"v-text"+s()+"v-html",1)]),W,e("li",null,[e("p",null,[e("strong",null,s(),1)]),e("ul",null,[e("li",null,"vue 提供的 "+s()+" 语法，专门用来解决 v-text 会覆盖默认文本内容的问题。这种 "+s()+" 语法的专业名称是插值表达 式（英文名为：Mustache）。",1)]),F]),U])]),Y]),G])}const ee=d(o,[["render",K],["__file","Vue2.X基础.html.vue"]]);export{ee as default};
