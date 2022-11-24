import{_ as l,r as s,o as r,c as t,b as n,d as e,e as d,a}from"./app.74a5dc6f.js";const o="/assets/Untitled.15e8036a.png",v="/assets/Untitled1.7a59f009.png",u={},c=a('<h1 id="数据劫持" tabindex="-1"><a class="header-anchor" href="#数据劫持" aria-hidden="true">#</a> 数据劫持</h1><h1 id="javascript数据劫持、排他思想、函数节流、函数防抖、回流与重绘" tabindex="-1"><a class="header-anchor" href="#javascript数据劫持、排他思想、函数节流、函数防抖、回流与重绘" aria-hidden="true">#</a> <strong>JavaScript数据劫持、排他思想、函数节流、函数防抖、回流与重绘</strong></h1><h1 id="一、数据劫持" tabindex="-1"><a class="header-anchor" href="#一、数据劫持" aria-hidden="true">#</a> <strong>一、数据劫持</strong></h1><p><strong><strong>什么是数据劫持</strong></strong></p><blockquote><p>访问或者修改对象的某个属性时，在访问和修改属性值时，除了执行基本的数据获取和修改操作以外，还基于数据的操作行为，以数据为基础去执行额外的操作。</p></blockquote><p>当前最经典的数据劫持应用就是数据渲染，各大前端框架的核心功能都是基于数据渲染来实现。</p><p>数据劫持实现的核心API就是在ES5中提供的Object.defineProperty()以及基于数组的数据修改方法push、pop、unshift、shift、slice、sort、reverse。</p><p><strong><strong>为什么要使用数据劫持？</strong></strong></p><p>在前端页面渲染中，最经典的触发渲染方案必然是基于事件机制实现，这种实现渲染的方案有个很大的闭端就是需要通过事件监听机制触发JS事件，然后JS通过document获取需要重新渲染的DOM，然后在js的DOM模型上修改数据触发document渲染页面。</p><p><img src="'+o+'" alt="Untitled"></p><p>在浏览器中document只是提供给JS操作文档模型的接口，双方通讯通道资源有限，基于事件机制触发页面渲染会消耗这个这个通道的大量资源，降低浏览器性能，下面来看看基于数据劫持实现数渲染的模型图（JS与document通讯仅仅只需要一次，而且基于虚拟DOM的支持还可以实现最精准的DOM渲染）：</p><p><img src="'+v+`" alt="Untitled"></p><p><strong><strong>Vue中数据劫持的两个api</strong></strong></p><p><strong>方法一：Object.defineProperty(target, key, desc)（vue2使用）</strong></p><ul><li>target: 目标对象</li><li>key： 将要操作的对象中的属性或名称</li><li>desc： 对象的描述</li></ul><p>Object.defineProperty()用来访问一个对象的设置，允许精确地添加或修改对象的属性</p><p>劫持即是通过Object.defineProperty()对对象属性的set和get操作与检测</p><p>需要注意的是在对数据实现数据监听时，需要对Object实现深度绑定（递归）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var data = {
  name:&#39;xiaoming&#39;
}
Object.keys(data).forEach(function(key){
  Object.defineProperty(data,key,{
    //enumerable: false,可否被枚举/遍历
    //writable: false,读写控制
    //configurable: false,可否重新定义属性，可否被删除
    get:function(){
      console.log(&#39;get&#39;);
    },
    set:function(){
      console.log(&#39;监听到数据发生了变化&#39;);
    }
  })
});
data.name //控制台会打印出 “get”
data.name = &#39;xiaohong&#39; //控制台会打印出 &quot;监听到数据发生了变化&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>方法二：Proxy(target, handler)（vue3使用）</strong></p><p>Proxy用于修改某些操作的默认行为，同等于在语言层面做出修改，所以属于一种“元编程”，即对编程语言进行编程。</p><ul><li>target: 目标对象</li><li>handler： 对象处理器</li></ul><p>相比Object.defineProperty()，速度更快，更重要的是，vue3因为它可以响应数组变化了</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const data = {
  bao: {
    price: 5000,
    name: &quot;LV&quot;
  },
  list: [1, 2]
};
const handler = {
  get: function(target, key) {
    if (target[key] &gt; 5000) {
      console.log(&quot;超出客户心理价位，不买了&quot;);
      return 1;
    } else {
      console.log(&quot;符合客户心理预期，买买买&quot;);
      return 3;
    }
  }
};
const handler2 = {
  get: function(target, key) {
    console.log(&quot;读到的下标&quot;, key);
    return target[key];
  }
};
// 读取对象
const p = new Proxy(data.bao, handler);
const value = p.price; // 此操作触发get，控制台打印&quot;符合客户心理预期，买买买&quot;
console.log(value); // 此时的 value 应是 3，因为get拦截了取值操作，并返回了新值
//读取数组
const p2 = new Proxy(data.list, handler2);
const value2 = p2[0] // 此操作触发get 控制台打印出：读到的下标, 0
console.log(value2) // 此时的 value2 应是 1

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="二、排他思想" tabindex="-1"><a class="header-anchor" href="#二、排他思想" aria-hidden="true">#</a> <strong>二、排他思想</strong></h1><p><strong><strong>什么是排他思想</strong></strong></p><p>如果有同一组元素，我们想要某一个元素实现某种样式， 需要用到循环的排他思想算法：</p><ul><li><ol><li>所有元素全部清除样式（干掉其他人）</li></ol></li><li><ol start="2"><li>给当前元素设置样式（留下我自己）</li></ol></li><li><ol start="3"><li>注意顺序不能颠倒，首先干掉其他人，再设置自己</li></ol></li></ul><p>例如：制作导航选中状态，点击导航项当前项选中，原选中的取消。运用排他思想直接先去掉所有选中样式，再给当前项选中，就不用去专门找选中项清除样式了。</p><h1 id="三、函数节流-throttle" tabindex="-1"><a class="header-anchor" href="#三、函数节流-throttle" aria-hidden="true">#</a> <strong>三、函数节流（throttle）</strong></h1><p><strong><strong>函数节流（throttle）</strong></strong></p><blockquote><p>概念：限制一个函数在一定时间内只能执行一次。</p></blockquote><p>举个栗子，坐火车或地铁，过安检的时候，在一定时间（例如10秒）内，只允许一个乘客通过安检入口，以配合安检人员完成安检工作。上例中，每10秒内，仅允许一位乘客通过，分析可知，“函数节流”的要点在于，在 一定时间 之内，限制 一个动作 只 执行一次 。</p><p><strong><strong>为什么需要函数节流</strong></strong></p><p>前端开发过程中，有一些事件或者函数，会被频繁地触发（短时间按内多次触发），最常见的例如，onresize，scroll，mousemove ,mousehover 等，这些事件的触发频率很高，不做限制的话，有可能一秒之内执行几十次、几百次，如果在这些函数内部执行了其他函数，尤其是执行了操作 DOM 的函数（浏览器操作 DOM 是很耗费性能的），那不仅会造成计算机资源的浪费，还会降低程序运行速度，甚至造成浏览器卡死、崩溃。这种问题显然是致命的。</p><p>除此之外，重复的 ajax 调用不仅可能会造成请求数据的混乱，还会造成网络拥塞，占用服务器带宽，增加服务器压力，显然这个问题也是需要解决的。</p><p><strong><strong>函数节流如何解决上述问题</strong></strong></p><blockquote><p>主要实现思路就是通过 setTimeout 定时器，通过设置延时时间，在第一次调用时，创建定时器，先设定一个变量true，写入需要执行的函数。第二次执行这个函数时，会判断变量是否true，是则返回。当第一次的定时器执行完函数最后会设定变量为false。那么下次判断变量时则为false，函数会依次运行。目的在于在一定的时间内，保证多次函数的请求只执行最后一次调用。</p></blockquote><p><strong><strong>函数节流的代码实现</strong></strong></p><p><strong>（1）方法一：时间戳方案</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 时间戳方案
function throttle(fn,wait){
    var pre = Date.now();
    return function(){
        var context = this;
        var args = arguments;
        var now = Date.now();
        if( now - pre &gt;= wait){
            fn.apply(context,args);
            pre = Date.now();
        }
    }
}

function handle(){
    console.log(Math.random());
}

window.addEventListener(&quot;mousemove&quot;,throttle(handle,1000));

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（2）方法二：定时器方案</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 定时器方案
function throttle(fn,wait){
    var timer = null;
    return function(){
        var context = this;
        var args = arguments;
        if(!timer){
            timer = setTimeout(function(){
                fn.apply(context,args);
                timer = null;
            },wait)
        }
    }
}

function handle(){
    console.log(Math.random());
}

window.addEventListener(&quot;mousemove&quot;,throttle(handle,1000));

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>函数节流的使用场景</strong></strong></p><ul><li>懒加载、滚动加载、加载更多或监听滚动条位置；</li><li>百度搜索框，搜索联想功能；</li><li>防止高频点击提交，防止表单重复提交；</li></ul><p>使用“函数节流”的主要目的，是为了优化程序性能，提高用户体验，不过最主要的为了节约计算机资源，推荐在合适的场合使用它，才能达到它应有的效果，切忌滥用哦！</p><h1 id="四、函数防抖-debounce" tabindex="-1"><a class="header-anchor" href="#四、函数防抖-debounce" aria-hidden="true">#</a> <strong>四、函数防抖（debounce）</strong></h1><p><strong><strong>函数防抖</strong></strong></p><blockquote><p>概念：函数防抖（debounce），就是指触发事件后，在 n 秒内函数只能执行一次，如果触发事件后在 n 秒内又触发了事件，则会重新计算函数延执行时间。</p></blockquote><p><strong><strong>为什么需要函数防抖</strong></strong></p><p>前端开发过程中，有一些事件，常见的例如，onresize，scroll，mousemove ,mousehover 等，会被频繁触发（短时间内多次触发），不做限制的话，有可能一秒之内执行几十次、几百次，如果在这些函数内部执行了其他函数，尤其是执行了操作 DOM 的函数（浏览器操作 DOM 是很耗费性能的），那不仅会浪费计算机资源，还会降低程序运行速度，甚至造成浏览器卡死、崩溃。这种问题显然是致命的。</p><p>除此之外，短时间内重复的 ajax 调用不仅会造成数据关系的混乱，还会造成网络拥塞，增加服务器压力，显然这个问题也是需要解决的。</p><p><strong><strong>函数防抖如何解决上述问题</strong></strong></p><p>函数防抖的要点，是需要一个 setTimeout 来辅助实现，延迟运行需要执行的代码。如果方法多次触发，则把上次记录的延迟执行代码用 clearTimeout 清掉，重新开始计时。若计时期间事件没有被重新触发，等延迟时间计时完毕，则执行目标代码。</p><p><strong><strong>函数防抖的代码实现</strong></strong></p><p>根据以上分析，我们对 “函数防抖” 来进行简单的代码实现，如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function debounce(fn,wait){
  var timer = null;
  return function(){
      if(timer !== null){
          clearTimeout(timer);
      }
      timer = setTimeout(fn,wait);
  }
}

function handle(){
  console.log(Math.random());
}

window.addEventListener(&quot;resize&quot;,debounce(handle,1000));

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，函数触发方式为 “resize”，改变窗口大小，观察浏览器控制台的变化</p><p><strong><strong>函数节流的使用场景</strong></strong></p><p>函数防抖一般用在什么情况之下呢？一般用在，连续的事件只需触发一次回调的场合。具体有：</p><ul><li>搜索框搜索输入。只需用户最后一次输入完，再发送请求；</li><li>用户名、手机号、邮箱输入验证；</li><li>浏览器窗口大小改变后，只需窗口调整完后，再执行 resize 事件中的代码，防止重复渲染。</li></ul><p>总结</p><p>函数防抖其实是分为 “立即执行版” 和 “非立即执行版” 的，根据字面意思就可以发现他们的差别，所谓立即执行版就是 触发事件后函数不会立即执行，而是在 n 秒后执行，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。 而 “非立即执行版” 指的是 触发事件后函数会立即执行，然后 n 秒内不触发事件才能继续执行函数的效果。。</p><p><strong><strong>非立即执行版和立即执行版的防抖函数</strong></strong></p><p>在开发过程中，我们需要根据不同的场景来决定我们需要使用哪一个版本的防抖函数，一般来讲上述的防抖函数都能满足大部分的场景需求。但我们也可以将非立即执行版和立即执行版的防抖函数结合起来，实现最终的双剑合璧版本的防抖函数，以下为小伙伴们做了简单的实现：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
  * @desc 函数防抖---“立即执行版本” 和 “非立即执行版本” 的组合版本
  * @param func 需要执行的函数
  * @param wait 延迟执行时间（毫秒）
  * @param immediate---true 表立即执行，false 表非立即执行
**/
function debounce(func,wait,immediate) {
  let timer;

  return function () {
    let context = this;
    let args = arguments;

    if (timer) clearTimeout(timer);
      if (immediate) {
        var callNow = !timer;
        timer = setTimeout(() =&gt; {
        timer = null;
      }, wait)
      if (callNow) func.apply(context, args)
      } else {
        timer = setTimeout(function(){
        func.apply(context, args)
      }, wait);
    }
  }
}

function handle(){
  console.log(Math.random());
}

// window.addEventListener(&quot;mousemove&quot;,debounce(handle,1000,true)); // 调用立即执行版本
window.addEventListener(&quot;mousemove&quot;,debounce(handle,1000,false)); // 调用非立即执行版本

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="五、回流与重绘" tabindex="-1"><a class="header-anchor" href="#五、回流与重绘" aria-hidden="true">#</a> <strong>五、回流与重绘</strong></h1><p>在HTML中, 每一个标签都有自己的盒子模型. 浏览器在解析HTML的过程中会通过一个叫frame的对象对盒子进行操作. 它主要有三个动作:</p><ul><li>构建 frame, 以建立DOM树.</li><li>回流(reflow), 布局引擎为frame计算图形, 以确定对象位置, 浏览器根据各种样式来计算结果放在它该出现的位置.</li><li>重绘(repaint), 当计算好盒子模型的位置, 大小以及其他属性后, 浏览器就根据各自的特性进行绘制一遍, 显现出来给用户看.</li></ul><p><strong><strong>回流</strong></strong></p><blockquote><p>回流(reflow)就是布局引擎为frame 计算图形的过程。但是这里需要我们注意的是, 回流并不仅仅只是在渲染页面的时候会触发, 实际上当我们动态修改某个 css 属性或者操作 DOM 时, 都有可能会触发回流和重绘。</p></blockquote><p>也就是说, 我们操作 DOM 实际上是有代价的。因为 DOM 的改变会导致浏览器重新计算的它的位置和渲染的样式。</p><p>假设有这么一个场景：用户打开了一个很长的页面，就比如 ecma-262 规格文档，同时右键点击了翻译，这时下拉滚动条页面, 在一些配置比较差的电脑可能会导致网页卡死。</p><p>我们知道浏览器的翻译功能是将当前页面的文字翻译至另一种语言，这其中需要替换 DOM 元素，同时用户打开的这个文档内容没有按章分隔，因此用户每滚动一次就需要重新替换内容、计算元素位置，频繁地触发回流的后果将导致网页占有性能徒然增大，配置较差的电脑顶不住这么大的压力，从而会引发页面卡死。这就是回流的代价。</p><p><strong><strong>触发回流的条件</strong></strong></p><p>回流是必不可免的，甚至很多时候我们不需要过分的关注回流的发生。但过于频繁的触发的话还是可能成为渲染性能瓶颈，因此我们需要知道回流是如何触发的。</p><ul><li>调整窗口大小</li><li>改变字体</li><li>增加或者移除样式表</li><li>内容变化，比如用户在 input 框中输入文字, CSS3 动画等</li><li>激活 CSS 伪类，比如 :hover</li><li>操作class属性</li><li>脚本操作DOM</li><li>计算offsetWidth和offsetHeight属性</li><li>设置 style 属性的值</li></ul><p>而重绘则是视觉效果变化引起的重新绘制。比如 color 或者 background 发生了变化，那就该给触发重绘的元素化化妆，化成它想要的样子。</p><p>注意：触发回流一定会触发重绘, 而触发重绘却不一定会触发回流</p><p><strong><strong>重绘</strong></strong></p><p>当页面中某些元素的样式发生变化，但是不会影响其在文档流中的位置时，浏览器就会对元素进行重新绘制，这个过程就是重绘。</p><p><strong>下面这些操作会导致重绘：</strong></p><ul><li>color、background 相关属性：background-color、background-image 等</li><li>outline 相关属性：outline-color、outline-width 、text-decoration</li><li>border-radius、visibility、box-shadow</li></ul><p><strong><strong>如何避免回流和重绘</strong></strong></p><p><strong>减少回流与重绘的措施：</strong></p><ul><li>操作DOM时，尽量在低层级的DOM节点进行操作</li><li>不要使用table布局， 一个小的改动可能会使整个table进行重新布局</li><li>使用CSS的表达式</li><li>不要频繁操作元素的样式，对于静态页面，可以修改类名，而不是样式。</li><li>使用absolute或者fixed，使元素脱离文档流，这样他们发生变化就不会影响其他元素</li><li>避免频繁操作DOM，可以创建一个文档片段documentFragment，在它上面应用所有DOM操作，最后再把它添加到文档中</li><li>将元素先设置display: none，操作结束后再把它显示出来。因为在display属性为none的元素上进行的DOM操作不会引发回流和重绘。</li><li>将DOM的多个读操作（或者写操作）放在一起，而不是读写操作穿插着写。这得益于浏览器的渲染队列机制。</li></ul><p>浏览器针对页面的回流与重绘，进行了自身的优化——渲染队列</p><p>浏览器会将所有的回流、重绘的操作放在一个队列中，当队列中的操作到了一定的数量或者到了一定的时间间隔，浏览器就会对队列进行批处理。这样就会让多次的回流、重绘变成一次回流重绘。</p><p>上面，将多个读操作（或者写操作）放在一起，就会等所有的读操作进入队列之后执行，这样，原本应该是触发多次回流，变成了只触发一次回流。</p><p><strong><strong>如何优化动画？</strong></strong></p><p>对于如何优化动画，我们知道，一般情况下，动画需要频繁的操作DOM，就就会导致页面的性能问题，我们可以将动画的position属性设置为absolute或者fixed，将动画脱离文档流，这样他的回流就不会影响到页面了。</p><p><strong><strong>documentFragment 是什么？用它跟直接操作 DOM 的区别是什么？</strong></strong></p><p>MDN中对documentFragment的解释：</p><ul><li>DocumentFragment，文档片段接口，一个没有父对象的最小文档对象。它被作为一个轻量版的 Document使用，就像标准的document一样，存储由节点（nodes）组成的文档结构。与document相比，最大的区别是DocumentFragment不是真实 DOM 树的一部分，它的变化不会触发 DOM 树的重新渲染，且不会导致性能等问题。</li><li>当我们把一个 DocumentFragment 节点插入文档树时，插入的不是 DocumentFragment 自身，而是它的所有子孙节点。在频繁的DOM操作时，我们就可以将DOM元素插入DocumentFragment，之后一次性的将所有的子孙节点插入文档中。和直接操作DOM相比，将DocumentFragment 节点插入DOM树时，不会触发页面的重绘，这样就大大提高了页面的性能。</li></ul>`,94),m={href:"https://www.cnblogs.com/ZheOneAndOnly/p/11404109.html",target:"_blank",rel:"noopener noreferrer"};function b(p,g){const i=s("ExternalLinkIcon");return r(),t("div",null,[c,n("p",null,[e("本文参考："),n("a",m,[e("数据劫持、Proxy、Reflect"),d(i)])])])}const f=l(u,[["render",b],["__file","数据劫持.html.vue"]]);export{f as default};
