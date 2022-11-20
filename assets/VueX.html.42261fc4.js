import{_ as s,r as t,o as l,c as d,a as e,b as i,d as a,e as r}from"./app.629164ab.js";const u="/assets/Untitled.cf36d2b1.png",v={},o=e("h1",{id:"vuex",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vuex","aria-hidden":"true"},"#"),i(" Vuex")],-1),c=e("h1",{id:"vuex-状态管理器",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vuex-状态管理器","aria-hidden":"true"},"#"),i(),e("strong",null,"Vuex 状态管理器")],-1),m=e("p",null,[e("strong",null,"VueX相关笔记")],-1),b={href:"http://vue.cnsbq.com/vue/vuex_01.html",target:"_blank",rel:"noopener noreferrer"},p=r('<h1 id="一、vuex-状态管理器" tabindex="-1"><a class="header-anchor" href="#一、vuex-状态管理器" aria-hidden="true">#</a> <strong>一、Vuex 状态管理器</strong></h1><p><strong><strong>Vuex的原理</strong></strong></p><blockquote><p>概念：Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。</p></blockquote><p>应用场景：Vue多个组件之间需要共享数据或状态。</p><p>Vuex有几个核心属性：State、Getter、Mutation、Action、Module。</p><p><img src="'+u+`" alt="Untitled"></p><ul><li>State：存储状态数据</li><li>Getter：从状态数据派生数据，相当于State的计算属性。</li><li>Mutation：存储用于同步更改状态数据的方法，默认传入的参数为state。</li><li>Action：存储用于异步更改状态数据，但不是直接更改，而是通过触发Mutation方法实现，默认参数为context。</li><li>Module：Vuex模块化。</li></ul><p><strong><strong>全局配置Vuex</strong></strong></p><p>在 src 目录下创建 store 文件夹,并在里面创建一个index.js文件，然后index.js中配置如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 第一步：引入Vue、和Vuex(固定写法)
import Vue from &#39;vue&#39;
import Vuex from &#39;vuex&#39;
Vue.use(Vuex);

// 第二步：声明Vuex 的五个属性，其中state,mutations 是一定要定义的，其他的三个属性对象根据实际需要。
const state = {  // 初始化状态值--一定要有该属性对象
    ...
}
const mutations = {  // 自定义改变state初始值的方法--一定要有该属性对象
    ...
}
const getters = {  // 状态计算属性--该属性对象不是必须
    ...
}
const actions = { // 异步操作状态--该属性对象不是必须的
    ...
}
const modules = {  // 状态模块--该属性对象不是必须的
    ...
}

// 第三步：创建一个 store 实例，将声明的五个变量赋值赋值给 store 实例，如下：
const store = new Vuex.Store({
    state,
    mutations,
    //下面三个非必须
    getters,
    actions,
    modules
})

// 第四步：导出 store 实例，供外部访问
export default store

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在项目的main.js中将Vuex注册到全局实例中</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>...
import store from &#39;./store&#39;
...

new Vue({
    el: &#39;#app&#39;,
    router,
    store,         //注入,组件中可以使用 this.$store 获取
    components: { App },
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>配置流程</strong></strong></p><p><strong>梳理一下 Vuex 的配置流程：</strong></p><ul><li>1.声明 state 对象，存放要初始状态的数据对象</li><li>2.声明 getters 对象，存放 派生state中数据的方法（store计算属性）</li><li>3.声明 mutations 对象，存放 设置 state中数据的方法（同步操作）</li><li>4.声明 actions 对象，存放 异步操作 mutations中的方法的方法（异步操作）</li><li>5.声明 modules 对象， 存放 外部模板 文件 （如果没有创建外部 js 文件，次步可去除）</li><li>6.创建 Vuex 实例，注入上面声明的对象，并用export default导出，然后再在main.js中将 Vuex 挂在到Vue实例中</li></ul><p><strong>再简单看一下基本使用的语法：</strong></p><ul><li>1.获取 某个状态的值: index.js 中的 obj 的值：this.$store.state.obj <ul><li>index.js 中的 obj 的值：this.$store.getters.obj</li><li>page1.js 中的 arr 的值：this.$store.state[ &quot;page1/arr&quot; ]</li><li>page1.js 中的 arr 的值：this.$store.getters[ &quot;page1/arr&quot; ]</li></ul></li><li>2.设置 某个状态的值: index.js 中的 obj 的值：this.$store.commit( &quot;obj&quot; , val ) <ul><li>index.js 中的 obj 的值：this.$store.dispatch( &quot;obj&quot; , val ))</li><li>page1.js 中的 arr 的值：this.$store.commit( &quot;page1/arr&quot; , val ))</li><li>page1.js 中的 arr 的值：this.$store.dispatch( &quot;page1/arr&quot; , val )</li></ul></li></ul><p><strong><strong>各模块在流程中的功能</strong></strong></p><ul><li>Vue Components：Vue组件。HTML页面上，负责接收用户操作等交互行为，执行dispatch方法触发对应action进行回应。</li><li>dispatch：操作行为触发方法，是唯一能执行action的方法。</li><li>actions：操作行为处理模块,由组件中的$store.dispatch(&#39;action 名称&#39;, data1)来触发。然后由commit()来触发mutation的调用 , 间接更新 state。负责处理Vue Components接收到的所有交互行为。包含同步/异步操作，支持多个同名方法，按照注册的顺序依次触发。向后台API请求的操作就在这个模块中进行，包括触发其他action以及提交mutation的操作。该模块提供了Promise的封装，以支持action的链式触发。</li><li>commit：状态改变提交操作方法。对mutation进行提交，是唯一能执行mutation的方法。</li><li>mutations：状态改变操作方法，由actions中的commit(&#39;mutation 名称&#39;)来触发。是Vuex修改state的唯一推荐方法。该方法只能进行同步操作，且方法名只能全局唯一。操作之中会有一些hook暴露出来，以进行state的监控等。</li><li>state：页面状态管理容器对象。集中存储Vue components中data对象的零散数据，全局唯一，以进行统一的状态管理。页面显示所需的数据从该对象中进行读取，利用Vue的细粒度数据响应机制来进行高效的状态更新。</li><li>getters：state对象读取方法。图中没有单独列出该模块，应该被包含在了render中，Vue Components通过该方法读取全局state对象。</li></ul><p><strong><strong>Vuex与localStorage</strong></strong></p><p>vuex 是 vue 的状态管理器，存储的数据是响应式的。但是并不会保存起来，刷新之后就回到了初始状态，具体做法应该在vuex里数据改变的时候把数据拷贝一份保存到localStorage里面，刷新之后，如果localStorage里有保存的数据，取出来再替换store里的state。</p><p><strong><strong>Vue.sync的用法</strong></strong></p><p>日常开发时，我们总会遇到需要父子组件双向绑定的问题，但是考虑到组件的可维护性，vue中是不允许子组件改变父组件传的props值的。那么同时，vue中也提供了一种解决方案.sync修饰符。在此之前，希望你已经知道了vue中是如何通过事件的方式实现子组件修改父组件的data的。</p><p><strong>.sync修饰符</strong></p><p>首先我们知道，父组件通过绑定属性的方式向子组件传值，而在子组件中可以通过$emit向父组件通信，通过这种间接的方式改变父组件的data，从而实现子组件改变props的值。比如向下边这这样：</p><p>子组件使用$emit向父组件发送事件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>this.$emit(&#39;update:title&#39;, newTitle)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>父组件监听这个事件并更新一个本地的数据title</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;text-document
    :title=&quot;title&quot;
    @update:title=&quot;val =&gt; title = val&quot;
&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了方便这种写法，vue提供了.sync修饰符，说白了就是一种简写的方式，我们可以将其当作是一种语法糖，比如v-on: click可以简写为@click。而上边父组件的这种写法，换成sync的方式就像下边这样：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;text-document
    :title.sync=&quot;title&quot;
&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有没有发现很清晰，而子组件中我们的写法不变，其实这两种写法是等价的，只是一个语法糖而已，如果到这里你还不太明白。下边是个完整的demo，可以copy自己的项目中尝试一下。相信你会恍然大悟。</p><p>父组件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;child :name.sync=&quot;name&quot;&gt;&lt;/child&gt;
    &lt;button @click=&quot;al&quot;&gt;点击&lt;/button&gt;
    &lt;button @click=&quot;change&quot;&gt;改变&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import child from &#39;./child&#39;
export default {
  name: &#39;list&#39;,
  components: {
    child
  },
  data () {
    return {
      listItems: [&#39;buy food&#39;, &#39;play games&#39;, &#39;sleep&#39;],
      name: &#39;xiaoming&#39;
    }
  },
  methods: {
    al() {
      alert(this.name);
    },
    change() {
      this.name = &#39;123&#39;;
    }
  }
}
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>子组件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;input :value=&quot;name&quot; @input=&quot;abc&quot; type=&quot;text&quot;&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  methods: {
    abc(e) {
      console.log(e.target.value);
      this.$emit(&#39;update:name&#39;, e.target.value);
    }
  }
}
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>sync修饰符，与我们平常使用$emit实现父子组件通信没有区别，只不过是写法上方便一些。当然，利用引用类型的特性实现双向绑定我认为也并非完全不可取。</p><p><strong><strong>vuex的适用场景</strong></strong></p><p>在项目开发中，可能会有很多数据或者参数我们可能需要多次读取或者修改，像购物车等类似功能，这个时候我们的就可以用vuex来实现；vuex毕竟只是一个状态管理模式，状态管理模式是给我们提供方便的，但不是必需的，因为状态管理能做的事通过其他途径和办法也能实现。</p>`,39);function g(x,h){const n=t("ExternalLinkIcon");return l(),d("div",null,[o,c,m,e("p",null,[e("a",b,[i("VueX案例"),a(n)])]),p])}const q=s(v,[["render",g],["__file","VueX.html.vue"]]);export{q as default};
