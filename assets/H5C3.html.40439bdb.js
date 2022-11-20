import{_ as i,o as n,c as e,e as d}from"./app.93fa9761.js";const s={},t=d(`<h1 id="h5c3" tabindex="-1"><a class="header-anchor" href="#h5c3" aria-hidden="true">#</a> H5C3</h1><h1 id="常见面试题" tabindex="-1"><a class="header-anchor" href="#常见面试题" aria-hidden="true">#</a> <strong>常见面试题</strong></h1><h1 id="html5-和-css3面试题" tabindex="-1"><a class="header-anchor" href="#html5-和-css3面试题" aria-hidden="true">#</a> <strong>HTML5 和 CSS3面试题</strong></h1><h1 id="一、html5介绍" tabindex="-1"><a class="header-anchor" href="#一、html5介绍" aria-hidden="true">#</a> <strong>一、HTML5介绍</strong></h1><p>为了更好地处理今天的互联网应用，HTML5添加了很多新元素及功能，比如： 图形的绘制，多媒体内容，更好的页面结构，更好的形式 处理，和几个api拖放元素，定位，包括网页 应用程序缓存，存储，网络工作者，等。</p><p><strong><strong>新特性</strong></strong></p><blockquote><p>HTML5将Web带入一个成熟的应用平台，在这个平台上，视频、音频、图像、动画以及与设备的交互都进行了规范。</p></blockquote><p><strong><strong>canvas</strong></strong></p><table><thead><tr><th>标签</th><th>描述</th></tr></thead><tbody><tr><td>&lt;canvas&gt;</td><td>标签定义图形，比如图表和其他图像。该标签基于 JavaScript 的绘图 API</td></tr></tbody></table><p><strong><strong>多媒体</strong></strong></p><table><thead><tr><th>标签</th><th>描述</th></tr></thead><tbody><tr><td>&lt;audio&gt;</td><td>定义音频内容</td></tr><tr><td>&lt;audio&gt;</td><td>定义视频（video 或者 movie）</td></tr><tr><td>&lt;source&gt;</td><td>定义多媒体资源 &lt;video&gt; 和 &lt;audio&gt;</td></tr><tr><td>&lt;embed&gt;</td><td>定义嵌入的内容，比如插件。</td></tr><tr><td>&lt;track&gt;</td><td>为诸如 &lt;video&gt; 和 &lt;audio&gt; 元素之类的媒介规定外部文本轨道。</td></tr></tbody></table><p><strong><strong>表单</strong></strong></p><table><thead><tr><th>标签</th><th>描述</th></tr></thead><tbody><tr><td>&lt;datalist&gt;</td><td>定义选项列表。请与 input 元素配合使用该元素，来定义 input 可能的值。</td></tr><tr><td>&lt;keygen&gt;</td><td>规定用于表单的密钥对生成器字段。</td></tr><tr><td>&lt;output&gt;</td><td>定义不同类型的输出，比如脚本的输出。</td></tr></tbody></table><p><strong><strong>语义和结构</strong></strong></p><table><thead><tr><th>标签</th><th>描述</th></tr></thead><tbody><tr><td>&lt;header&gt;</td><td>定义了文档的头部区域</td></tr><tr><td>&lt;footer&gt;</td><td>定义 section 或 document 的页脚。</td></tr><tr><td>&lt;article&gt;</td><td>定义页面独立的内容区域。</td></tr><tr><td>&lt;section&gt;</td><td>定义文档中的节（section、区段）。</td></tr><tr><td>&lt;aside&gt;</td><td>定义页面的侧边栏内容。</td></tr><tr><td>&lt;nav&gt;</td><td>定义运行中的进度（进程）。</td></tr></tbody></table><p><strong><strong>已移除元素</strong></strong></p><p>以下的 HTML 4.01 元素在HTML5中已经被删除</p><ul><li>&lt;frame&gt;</li><li>&lt;center&gt;</li><li>&lt;big&gt;</li><li>&lt;font&gt;</li></ul><p><strong><strong>HTML5的本地存储</strong></strong></p><p>我们知道，在HTML4中可以使用cookie在客户端保存诸如用户名等简单的用户信息，但是，通过长期的使用，你会发现，用cookie存储永久数据存在以下几个问题</p><ul><li>1.大小：cookie的大小被限制在4KB。</li><li>2.带宽：cookie是随HTTP事务一起被发送的，因此会浪费一部分发送cookie时使用的带宽。</li><li>3.复杂性：要正确的操纵cookie是很困难的。</li></ul><p>针对这些问题，在HTML5中，重新提供了一种在客户端本地保存数据的功能，它就是Web Storage。</p><ul><li>cookie：在HTML4中可以使用cookie在客户端保存诸如用户名等简单的用户信息</li><li>WebStorage：两个主要目标：（1）提供一种在cookie之外存储会话数据的路径。（2）提供一种存储大量可以跨会话存在的数据的机制。 <ul><li>localStorage：localStorage的生命周期是永久的，关闭页面或浏览器之后localStorage中的数据也不会消失。localStorage除非主动删除数据，否则数据永远不会消失。</li><li>sessionStorage：sessionStorage的生命周期是在仅在当前会话下有效。sessionStorage引入了一个“浏览器窗口”的概念，sessionStorage是在同源的窗口中始终存在的数据。只要这个浏览器窗口没有关闭，即使刷新页面或者进入同源另一个页面，数据依然存在。但是sessionStorage在关闭了浏览器窗口后就会被销毁。同时独立的打开同一个窗口同一个页面，sessionStorage也是不一样的。</li></ul></li></ul><table><thead><tr><th>特性</th><th>cookie</th><th>sessionStorage</th><th>localStorage</th></tr></thead><tbody><tr><td>数据生命周期</td><td>生成时就会指定一个maxAge值，这就是cookie的生命周期，在这个周期内cookie有效，默认关闭浏览器无效</td><td>页面会话期间可用</td><td>除非数据被清除，否则一直存在</td></tr><tr><td>存放数据大小</td><td>4kb左右，因为每次http请求都会携带cookie</td><td>一般5MB或更大</td><td></td></tr><tr><td>与服务器通信</td><td>由对服务器的请求来传递，每次都会携带在HTTP头中，如果使用cookie保存过多数据会带来性能问题</td><td>数据不是由每个服务器请求传递的，而是只有在请求时使用数据，不参与和服务器的通信</td><td></td></tr><tr><td>易用性</td><td>cookie需要自己封装setCookie，getCookie</td><td>可用原生接口，也可自己封装对Object和Arrey更好的支持</td><td></td></tr><tr><td>共同点</td><td>都是保存在浏览器端，和服务器的sessin机制不同</td><td></td><td></td></tr></tbody></table><h1 id="css3介绍" tabindex="-1"><a class="header-anchor" href="#css3介绍" aria-hidden="true">#</a> <strong>CSS3介绍</strong></h1><h1 id="二、css3介绍" tabindex="-1"><a class="header-anchor" href="#二、css3介绍" aria-hidden="true">#</a> <strong>二、CSS3介绍</strong></h1><p>CSS3是CSS（层叠样式表）技术的升级版本，于1999年开始制订，2001年5月23日W3C完成了CSS3的工作草案，主要包括盒子模型、列表模块、超链接方式、语言模块、背景和边框、文字特效、多栏布局等模块。</p><p><strong><strong>新增特性</strong></strong></p><blockquote><p>CSS3的新特征有很多，例如圆角效果、图形化边界、块阴影与文字阴影、使用RGBA实现透明效果、渐变效果、使用@Font-Face实现定制字体、多背景图、文字或图像的变形处理（旋转、缩放、倾斜、移动）、多栏布局、媒体查询等。</p></blockquote><p><strong><strong>1、边框特性</strong></strong></p><p>CSS3对网页中的边框进行了一些改进，主要包括支持圆角边框、多层边框、边框色彩与图片等。在CSS3中最常用的一个改进就是圆角边框，通过CSS3的属性可以快速实现圆角定义，同时还可以根据实际情况针对特定角进行圆角定义</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/*圆角边框*/
div{
    border:2px solid;
    border-radius:25px;
}

/*图片边框*/
div{
    border-image:url(border.png) 30 30 round;
    -webkit-border-image:url(border.png) 30 30 round; /* Safari 5 and older */
    -o-border-image:url(border.png) 30 30 round; /* Opera */
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>2、多背景图</strong></strong></p><p>CSS3允许使用多个属性（比如background-image、background-repeat、background-size、background-position、background-origin和background-clip等）在一个元素上添加多层背景图片。该属性的应用大大改善了以往面对多层次设计需要多层布局的问题，帮助Web前端开发者在不借助Photoshop的情况下实现对页面背景的设计，简化了背景图片的维护成本</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/*多图背景*/
#example1 {
    background-image: url(img_flwr.gif), url(paper.gif);
    background-position: right bottom, left top;
    background-repeat: no-repeat, repeat;
}
/*或*/
#example1 {
    background: url(img_flwr.gif) right bottom no-repeat, url(paper.gif) left top repeat;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>3、颜色与透明度</strong></strong></p><p>CSS3颜色模块的引入，实现了制作Web效果时不再局限于RGB和十六进制两种模式。CSS3增加了HSL、HSLA、RGBA几种新的颜色模式。这几种颜色模式的提出，在做开发的时候不仅可以设置元素的色彩，还能根据需要轻松地设定元素透明度 [40] 。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><strong>4、多列布局与弹性盒模型布局</strong></strong></p><p>CSS3多列布局属性可以不使用多个div标签就能实现多列布局。CSS3中的多列布局模块描述了如何像报纸、杂志那样，把一个简单的区块拆成多列，并通过相应属性来实现列数、列宽、各列之间的空白间距。弹性盒模型布局方便了Web前端开发者根据复杂的前端分辨率进行弹性布局，轻松地实现页面中的某一区块在水平、垂直方向对齐，是进行响应式网站开发的一大利器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/*多列布局*/
.newspaper{
    column-count:3;
    column-gap:40px;
    column-rule-style:outset;
    column-rule-color:#ff0000;
    column-rule-width: 1px;
}
h2{
    column-span:all;
}

/*弹性盒子*/
&lt;style&gt;;
.flex-container {
    display: flex;
    justify-content: center;
    width: 400px;
    height: 250px;
    background-color: lightgrey;
}
.flex-item {
    background-color: cornflowerblue;
    width: 100px;
    height: 100px;
    margin: 10px;
}
&lt;/style&gt;
    &lt;div class=&quot;flex-container&quot;&gt;
    &lt;div class=&quot;flex-item&quot;&gt;flex item 1&lt;/div&gt;
    &lt;div class=&quot;flex-item&quot;&gt;flex item 2&lt;/div&gt;
    &lt;div class=&quot;flex-item&quot;&gt;flex item 3&lt;/div&gt;
&lt;/div&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>5、盒子的变形</strong></strong></p><p>在CSS2.1中，想让某个元素变形必须要借助JavaScript写大量的代码实现，在CSS3中加入了变形属性，该属性在2D或3D空间里操作盒子的位置和形状，来实现例如旋转、扭曲、缩放或者移位。变形属性的出现，使Web前端中的元素展示不仅仅局限在二维空间，Web前端开发者可以通过旋转、扭曲、缩放或者移位等操作实现元素在三维控件上的展示。通过变形元素，web前端中的内容展示更加形象、真实</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/*2D转换*/
/*移动*/
div{
    transform: translate(50px,100px);
}
/*旋转*/
div{
    transform: rotate(30deg);
}
/*改变宽高*/
div{
    transform: scale(2,3);
}
/*倾斜*/
div{
    transform: skew(30deg,20deg);
}
/*使用六个值的矩阵实现转换*/
div{
    transform: matrix(0.866,0.5,-0.5,0.866,0,0);
}

/*3D转换*/
/*围绕X轴旋转*/
div
{
    transform:rotateX(120deg);
}
/*围绕Y轴旋转*/
div
{
    transform:rotateY(130deg);
}
/*围绕Z轴旋转*/
div
{
    transform:rotateZ(140deg);
}
/*围绕Z轴旋转*/
div
{
    transform:rotateZ(140deg);
}
/*改变被转换元素的位置*/
#div2
{
    transform: rotate(45deg);
    transform-origin:20% 40%;
}
/*让转换的子元素保留3D转换*/
&lt;style&gt;
#div1
{
    padding:50px;
    position: absolute;
    border: 1px solid black;
    background-color: red;
    transform: rotateY(60deg);
    transform-style: preserve-3d;
}
#div2{
    padding:40px;
    position: absolute;
    border: 1px solid black;
    background-color: yellow;
    transform: rotateY(-60deg);
}
&lt;/style&gt;
&lt;div id=&quot;div1&quot;&gt;HELLO
    &lt;div id=&quot;div2&quot;&gt;YELLOW&lt;/div&gt;
&lt;/div&gt;
/*透视效果及规定其底部位置*/
div{
    perspective:150;
    perspective-origin: 10% 10%;
}
/*定义元素在不面对屏幕时是否可见*/
div{
    backface-visibility:hidden;/*可见为visible*/
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>6、过渡与动画</strong></strong></p><p>CSS3的“过渡”（transition）属性通过设定某种元素在某段时间内的变化实现一些简单的动画效果，让某些效果变得更加具有流线性与平滑性。CSS3的“动画”（animation）属性能够实现更复杂的样式变化以及一些交互效果，而不需要使用任何Flash或JavaScript脚本代码。过渡与动画的出现，使CSS在Web前端开发中不再仅仅局限于简单的静态内容展示，而是通过简单的方法使页面元素动了起来，实现了元素从静到动的变化</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/*过渡*/
div{
    transition-property: width;
    transition-duration: 1s;
    transition-timing-function: linear;
    transition-delay: 2s;
}
/*或*/
div
{
    transition: width 1s linear 2s;
}

/*动画*/
div{
    width:100px;
    height:100px;
    background:red;
    animation:myfirst 5s;
}
@keyframes myfirst{
    0%   {background:red;}
    25%  {background:yellow;}
    50%  {background:blue;}
    100% {background:green;}
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>7、Web字体</strong></strong></p><p>CSS3中引入了@font-face，@font-face是链接服务器字体的一种方式，这些嵌入的字体能变成浏览器的安全字体，开发人员不用再担心用户没有这些字体而导致网页在用户浏览器无法正常显示的问题</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/*引入字体*/
@font-face{
    font-family: myFirstFont;
    src: url(sansation_light.woff);
}
div{
    font-family:myFirstFont;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>8、媒体查询</strong></strong></p><p>CSS3中引入媒体查询（mediaqueries），可为不同分辨率的设备定义不同的样式。比如，在可视区域小于480像素时，可能想让原来在右侧的网站侧栏显示在主内容的下边，以往必须通过JavaScript判断用户浏览器的分辨率，然后再通过JavaScript修改CSS。CSS3中只需要通过媒体查询就可实现上述操作</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>body {
    background-color: pink;
}
@media screen and (min-width: 480px) {
    body {
        background-color: lightgreen;
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>9、阴影</strong></strong></p><p>阴影主要分为两种：文本阴影（text-shadow）和盒子阴影（box-shadow）。文本阴影在CSS2中已经存在，但没有得到广泛的运用（CSS2.1中删除了）。CSS3延续了这个特性，并进行了新的定义，该属性提供了一种新的跨浏览器解决方案，使文本看起来更加醒目。CSS3中的盒子阴影的引入，可轻易地为任何元素添加盒子阴影</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/*文本阴影*/
h1{
    text-shadow: 5px 5px 5px #FF0000;
}

/*盒子阴影*/
div{
    box-shadow: 10px 10px 5px #888888;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,56),l=[t];function r(a,v){return n(),e("div",null,l)}const c=i(s,[["render",r],["__file","H5C3.html.vue"]]);export{c as default};
