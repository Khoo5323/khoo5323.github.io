import{_ as r,r as l,o as a,c as t,b as e,d as n,e as s,a as d}from"./app.74a5dc6f.js";const u={},o=d(`<h1 id="vue路由" tabindex="-1"><a class="header-anchor" href="#vue路由" aria-hidden="true">#</a> Vue路由</h1><h1 id="vue路由-vue-router" tabindex="-1"><a class="header-anchor" href="#vue路由-vue-router" aria-hidden="true">#</a> <strong>Vue路由（Vue-router）</strong></h1><h1 id="一、vue路由" tabindex="-1"><a class="header-anchor" href="#一、vue路由" aria-hidden="true">#</a> <strong>一、Vue路由</strong></h1><p>路由是一个比较广义和抽象的概念，路由的本质就是对应关系。</p><p>在开发中，路由分为：</p><ul><li>前端路由：对于单页面应用程序来说，主要通过URL中的hash(#号)来实现不同页面之间的切换，同时，hash有一个特点：HTTP请求中不会包含hash相关的内容；所以，单页面程序中的页面跳转主要用hash实现</li><li>后端路由：对于普通的网站，所有的超链接都是URL地址，所有的URL地址都对应服务器上对应的资源，这个对应关系就是后端中的路由</li></ul><blockquote><p>Vue Router 是 Vue.js 官方的路由管理器。它和 Vue.js 的核心深度集成，让构建单页面应用变得易如反掌。路由实际上就是可以理解为指向，就是我在页面上点击一个按钮需要跳转到对应的页面，这就是路由跳转</p></blockquote><ul><li>route：首先它是个单数，译为路由，即我们可以理解为单个路由或者某一个路由；</li><li>routes：它是个复数，表示多个的集合才能为复数；即我们可以理解为多个路由的集合，JS中表示多种不同状态的集合的形式只有数组和对象两种，事实上官方定义routes是一个数组；所以我们记住了，routes表示多个数组的集合；</li><li>router：译为路由器，上面都是路由，这个是路由器，我们可以理解为一个容器包含上述两个或者说它是一个管理者，负责管理上述两个；举个常见的场景的例子：当用户在页面上点击按钮的时候，这个时候router就会去routes中去查找route，就是说路由器会去路由集合中找对应的路由；</li></ul><p><strong>$route 和$router 的区别</strong></p><ul><li>$route 是“路由信息对象”，包括 path，params，hash，query，fullPath，matched，name 等路由信息参数</li><li>$router 是“路由实例”对象包括了路由的跳转方法，钩子函数等。</li></ul><p><strong><strong>安装vue-router</strong></strong></p><p>在项目目录安装vue-router</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install vue-router -g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><strong>路由导航两种方式</strong></strong></p><ul><li>标签导航：标签导航&lt;router-link&gt;&lt;router-link&gt;是通过转义为&lt;a&gt;&lt;/a&gt;标签进行跳转，其中router-link标签中的to属性会被转义为a标签中的href属性；</li><li>编程式导航：我们可以通过this.$router.push()这个方法来实现编程式导航，当然也可以实现参数传递，这种编程式导航一般是用于按钮点击之后跳转</li></ul><p>标签导航</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//跳转到名为user路由，并传递参数userId
&lt;router-link :to=&quot;{ name: &#39;user&#39;, params: { userId: 123 }}&quot;&gt;User&lt;/router-link&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编程式导航</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>router.push({ name: &#39;user&#39;, params: { userId: 123 }})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><strong>命名路由</strong></strong></p><p>有的时候，通过一个名称来标识一个路由显得更方便一些，所以官方为了方便我们偷懒，又给我们在路由中添加了一个name属性，命名这个属性之后我们访问这个属性就等于直接访问到路由；</p><p>普通路由</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>router.push({ path: &#39;/user/:userId&#39;, params: { userId: 123 }})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命名路由</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>router.push({ name: &#39;user&#39;, params: { userId: 123 }})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><strong>hash 模式的实现原理</strong></strong></p><p>早期的前端路由的实现就是基于 location.hash 来实现的。原理很简单，location.hash 的值就是URL中 # 后面的内容。比如下面这个网站，它的 location.hash 的值为 &#39;#search&#39;：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>https://www.test.com#search
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>hash 路由模式的实现主要是基于下面几个特性：</p><ul><li>1.URL 中 hash 值只是客户端的一种状态，也就是说当向服务器端发出请求时，hash 部分不会被发送；</li><li>2.hash 值的改变，都会在浏览器的访问历史中增加一个记录。因此我们能通过浏览器的回退、前进按钮控制hash 的切换；</li><li>3.可以通过 a 标签，并设置 href 属性，当用户点击这个标签后，URL 的 hash 值会发生改变；或者使用 JavaScript 来对 loaction.hash 进行赋值，改变 URL 的 hash 值；</li><li>4.我们可以使用 hashchange 事件来监听 hash 值的变化，从而对页面进行跳转(渲染)。</li></ul><p><strong><strong>history 模式的实现原理</strong></strong></p><p>HTML5 提供了 History API 来实现 URL 的变化。其中做最主要的 API 有以下两个：history.pushState() 和 history.repalceState()。这两个 API 可以在不进行刷新的情况下，操作浏览器的历史纪录。唯一不同的是，前者是新增一个历史记录，后者是直接替换当前的历史记录，如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>window.history.pushState(null, null, path);window.history.replaceState(null, null, path);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>history 路由模式的实现主要基于存在下面几个特性：</p><ul><li>1.pushState 和 repalceState 两个 API 来操作实现 URL 的变化 ；</li><li>2.我们可以使用 popstate 事件来监听 url 的变化，从而对页面进行跳转(渲染)；</li><li>3.history.pushState() 或 history.replaceState() 不会触发 popstate 事件，这时我们需要手动触发页面跳转(渲染)。</li></ul><p><strong><strong>路由传参的三种基本方式</strong></strong></p><p>先有如下场景 点击当前页的某个按钮跳转到另外一个页面去，并将某个值带过去</p><p><strong>第一种方法 页面刷新数据不会丢失</strong></p><p>直接调用 $router.push 实现携带参数的跳转</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>methods：{
    insurance(id) {
    //直接调用$router.push 实现携带参数的跳转
    this.$router.push({
        path: \`/particulars/\${id}\`,
    })
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要对应路由配置如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    path: &#39;/particulars/:id&#39;,
    name: &#39;particulars&#39;,
    component: particulars
 }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看出需要在path中添加/:id来对应 $router.push 中path携带的参数。在子组件中可以使用来获取传递的参数值</p><p>另外页面获取参数如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>this.$route.params.id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>第二种方法 页面刷新数据会丢失</strong></p><p>通过路由属性中的name来确定匹配的路由，通过params来传递参数。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>methods：{
    insurance(id) {
    this.$router.push({
        name: &#39;particulars&#39;,
        params: {
            id: id
        }
    })
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对应路由配置: 注意这里不能使用:/id来传递参数了，因为组件中，已经使用params来携带参数了。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> {
    path: &#39;/particulars&#39;,
    name: &#39;particulars&#39;,
    component: particulars
 }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>子组件中: 这样来获取参数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>this.$route.params.id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>第三种方法 页面刷新数据不会丢失</strong></p><p>使用path来匹配路由，然后通过query来传递参数</p><p>这种情况下 query传递的参数会显示在url后面?id=？</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>methods：{
    insurance(id) {
        this.$router.push({
        path: &#39;/particulars&#39;,
        query: {
            id: id
        }
    })
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对应路由配置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    path: &#39;/particulars&#39;,
    name: &#39;particulars&#39;,
    component: particulars
 }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对应子组件: 这样来获取参数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>this.$route.query.id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="二、路由守卫" tabindex="-1"><a class="header-anchor" href="#二、路由守卫" aria-hidden="true">#</a> <strong>二、路由守卫</strong></h1><p><strong><strong>钩子函数</strong></strong></p><ul><li>全局前置钩子函数（beforeEach、beforeResolve、afterEach)</li><li>路由独享的钩子函数（beforeEnter）</li><li>组件内钩子函数（beforeRouterEnter、beforeRouterUpdate、beforeRouterLeave）进入前、修改前、离开前</li></ul><p><strong><strong>全局钩子函数</strong></strong></p><p><strong>beforeEach：</strong></p><p>你可以使用 router.beforeEach 注册一个全局前置守卫：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const router = new VueRouter({ ... })

router.beforeEach((to, from, next) =&gt; {
    // ...
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当一个导航触发时，全局前置守卫按照创建顺序调用。守卫是异步解析执行，此时导航在所有守卫 resolve 完之前一直处于 等待中。</p><p>beforeEach一共接收三个参数，分别是to、from、next；to：即将进入的路由对象；from：正要离开的路由对象；next：路由的控制参数；</p><ul><li>to: Route: 即将要进入的目标 路由对象</li><li>from: Route: 当前导航正要离开的路由</li><li>next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。 <ul><li>next(): 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed (确认的)。</li><li>next(false): 中断当前的导航。如果浏览器的 URL 改变了 (可能是用户手动或者浏览器后退按钮)，那么 URL 地址会重置到 from 路由对应的地址。</li><li>next(&#39;/&#39;) 或者 next({ path: &#39;/&#39; }): 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。你可以向 next 传递任意位置对象，且允许设置诸如 replace: true、name: &#39;home&#39; 之类的选项以及任何用在 router-link 的 to prop 或 router.push 中的选项。</li><li>next(error): (2.4.0+) 如果传入 next 的参数是一个 Error 实例，则导航会被终止且该错误会被传递给 router.onError() 注册过的回调。</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 进入路由前方法勾子
router.beforeEach((to, from, next) =&gt; {
    console.log(to, &#39;前置第一个参数&#39;)
    console.log(from, &#39;前置第二个参数&#39;)
    console.log(next, &#39;前置第三个参数&#39;)
    /*
        to 目标路由
        from 源路由
        next 跳转到下一个路由
    */
    //这里暂时用local、storange来简单模拟验证权限
    if (window.localstorange.getItem(&quot;token&quot;)) {
        // 如果存在，则直接跳转到对应路由
        next();
    } else {
        // 如果不存在，则跳转到登录页
        next(&#39;/login&#39;);
    }
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们一般是用全局钩子来控制权限，像什么进页面没有登录就跳登录页，需要用户达到什么级别才能访问当前页面都是属于页面权限控制，都是可以通过beforeEach钩子函数来实现</p><p><strong>AfterEach：</strong></p><p>AfterEach和beforeEach一样都是属于全局守卫钩子，都是在main.js中进行调用；其中AfterEach比beforeEach少一个next参数；</p><ul><li>to：即将要进入的路由对象；</li><li>from：正要离开的路由对象；</li><li>afterEach()我们一般用来重置页面滚动条位置：</li></ul><p>假如我们有一个页面很长，滚动后其中的某个位置后跳转，这时新的页面的滚动条位置就会在上一个页面停留的位置；这个时候我们就可以利用afterEach进行重置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//全局路由改变后钩子
router.afterEach((to, from) =&gt; {
    //将滚动条恢复到最顶端
    window.scrollTo(0, 0);
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>路由独享的钩子函数</strong></strong></p><p><strong>beforeEneter</strong></p><p>路由独享顾名思义就是指定的路由才有这些钩子函数，通常这类路由独享的钩子函数我们是在路由配置文件中进行配置，只能设置改变前的钩子，不能设置改变后的钩子</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const router=new VueRouter({
    routes
});
const routes=[
    {
        path:&#39;/page1&#39;,
        component:page1,
        children: [
            {
                path: &quot;phone&quot;,
                component: phone
            },
            {
                path: &quot;computer&quot;,
                component: computer
            },
        ],
//路由独享的钩子函数
        beforeEnter:(to,from,next)=&gt;{
            console.log(to);
            console.log(from);
            next(false);
        }
    },

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码理解为只有进入/page1才会触发beforeEnter这个钩子，如果进入其他页面，是不触发的；</p><p><strong><strong>组件内的钩子函数</strong></strong></p><p><strong>beforeRouteEnter(to,from,next):</strong></p><p>在路由进入前调用，因为此时的vue实例还没有创建，所以beforeEnter是唯一一个不能使用this的钩子函数；</p><ul><li>to:即将要进入的路由对象；</li><li>from：正要离开的路由对象；</li><li>next：路由控制参数</li></ul><p><strong>beforeRouteUpdate(to,from,next):</strong></p><p>在路由发生修改的时候进行调用，比如动态路由传参，这种情况我们的beforeRouteUpdate也是会被调用的；</p><ul><li>to:即将要进入的路由对象；</li><li>from：正要离开的路由对象；</li><li>next：路由控制参数</li></ul><p><strong>beforeRouteLeave(to,from,next):</strong></p><p>在路由离开该组件时调用；</p><ul><li>to:即将要进入的路由对象；</li><li>from：正要离开的路由对象；</li><li>next：路由控制参数</li></ul><p>注意：beforeRouteEnter因为触发的时候vue实例还没有创建，所以这个钩子函数中不能使用this，而beforeRouteUpdate和beforeRouteLeave都是可以访问到实例的，因为当这两个函数触发的时候实例都已经被创建了；</p>`,93),v={href:"https://www.cnblogs.com/tugenhua0707/p/10859214.html",target:"_blank",rel:"noopener noreferrer"},c={href:"https://blog.csdn.net/weixin_42441929/article/details/113454100",target:"_blank",rel:"noopener noreferrer"};function p(m,b){const i=l("ExternalLinkIcon");return a(),t("div",null,[o,e("p",null,[n("本文参考："),e("a",v,[n("前端路由hash、history原理及简单的实践"),s(i)]),e("a",c,[n("Vue中hash与history路由的实现原理"),s(i)])])])}const g=r(u,[["render",p],["__file","Vue路由.html.vue"]]);export{g as default};
