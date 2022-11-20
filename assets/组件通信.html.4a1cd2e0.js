import{_ as d,r as l,o as r,c as a,a as n,b as e,d as t,e as s}from"./app.629164ab.js";const v={},u=s('<h1 id="组件通信" tabindex="-1"><a class="header-anchor" href="#组件通信" aria-hidden="true">#</a> 组件通信</h1><h1 id="vue组件间通信" tabindex="-1"><a class="header-anchor" href="#vue组件间通信" aria-hidden="true">#</a> <strong>Vue组件间通信</strong></h1><h1 id="一、总结" tabindex="-1"><a class="header-anchor" href="#一、总结" aria-hidden="true">#</a> <strong>一、总结</strong></h1><p><strong>本站相关笔记</strong></p>',4),o={href:"http://vue.cnsbq.com/notebook/vue/vue_04.html",target:"_blank",rel:"noopener noreferrer"},c={href:"http://vue.cnsbq.com/notebook/vue/vue_05.html",target:"_blank",rel:"noopener noreferrer"},m={href:"http://vue.cnsbq.com/notebook/vue/vue_09.html",target:"_blank",rel:"noopener noreferrer"},b={href:"http://vue.cnsbq.com/notebook/vue/vue_11.html",target:"_blank",rel:"noopener noreferrer"},p={href:"http://vue.cnsbq.com/notebook/vue/vue_12.html",target:"_blank",rel:"noopener noreferrer"},g={href:"http://vue.cnsbq.com/notebook/vue/vue_10.html",target:"_blank",rel:"noopener noreferrer"},h=s(`<p>没错，先总结，后讲解</p><p><strong><strong>父子通信</strong></strong></p><p>父向子传递数据是通过 props，子向父是通过 events（$emit）；通过父链 / 子链也可以通信（$parent / $children）；ref 也可以访问组件实例；provide / inject API；$attrs/$listeners</p><p><strong><strong>兄弟通信</strong></strong></p><p>$Bus；Vuex</p><p><strong><strong>跨级通信</strong></strong></p><p>$Bus；Vuex；provide / inject API、$attrs/$listeners</p><h1 id="二、父传子-props" tabindex="-1"><a class="header-anchor" href="#二、父传子-props" aria-hidden="true">#</a> <strong>二、父传子 props</strong></h1><p>父组件通过v-bind绑定到子组件。子组件通过props接收传过来的值</p><p>总结：父组件通过props向下传递数据给子组件。注：组件中的数据共有三种形式：data、props、computed</p><blockquote><p>父组件示例：父子组件关联起来，并通过v-bind（即简写“：”）将父组件中的parentAge值，传递给子组件</p></blockquote><p>v-on绑定的属性名称deliverParentAge与data中定义的parentAge名称可以不一样</p><p>属性deliverParentAge通过v-bind绑定的，也是子组件中通过props接收的，而parentAge是要传递给子组件的数值，它是一个值</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;div class=&quot;my-parent&quot;&gt;
        &lt;h3&gt;我是父组件，我想告诉我的子组件，我的年龄值是:{{parentAge}}&lt;/h3&gt;
        &lt;h3&gt;我要通过v-bind(即简写&quot;:&quot;)语法糖绑定一个属性deliverParentAge，将父组件的值传递到子组件中&lt;/h3&gt;
        &lt;!-- 下面就是我的子组件 --&gt;
        &lt;my-child :deliverParentAge=&quot;parentAge&quot;&gt;&lt;/my-child&gt;

        &lt;/div&gt;
    &lt;/template&gt;

&lt;script&gt;
import MyChild from &quot;./Child&quot;;
export default {
    components: { MyChild },
    data() {
        return {
            parentAge: 49
        };
    }
};
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>子组件示例：子组件通过props属性，在子组件中接收父组件传过来的值</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;div class=&quot;my-child&quot;&gt;
        &lt;h5&gt;我是子组件，我可以通过属性props来接收父组件传过来的年龄值是：{{deliverParentAge}}&lt;/h5&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
    data() {
        return {
            childAge: 27
        };
    },
    props: {
        deliverParentAge: Number
    }
};
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="三、子传父-events-emit" tabindex="-1"><a class="header-anchor" href="#三、子传父-events-emit" aria-hidden="true">#</a> <strong>三、子传父 events($emit)</strong></h1><p>子组件定义一个事件，父组件通过v-on接收这个事件和传递过来的值</p><p>总结：子组件通过events给父组件发送消息，实际上就是子组件把自己的数据发送到父组件。</p><blockquote><p>现在来修改父组件的值（这个不是真的修改而是通过this.$emit提交一个事件，将子组件的行为告诉父组件）</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;div class=&quot;my-child&quot;&gt;
        &lt;h5&gt;我是子组件，我可以通过属性props来接收父组件传过来的年龄值是:{{deliverParentAge}}，这是一个数字类型&lt;/h5&gt;
        &lt;h5&gt;并且，我要告诉他，他今年生日已经过了，所以他的年龄应该&lt;button @click=&quot;AddAge&quot;&gt;加1&lt;/button&gt;&lt;/h5&gt;
            下面我要通过this.$emit方法提交一个事件addParentAge，告诉我的父组件，他的实际年龄
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
    data() {
        return {
            childAge: 27
        };
    },
    props: {
        deliverParentAge: Number
    },
    // 新建一个计算属性，将父组件原来的值加1
    computed: {
        parentActualAge() {
            return this.deliverParentAge + 1;
        }
    },
    methods: {
        AddAge() {
            this.$emit(&quot;addParentAge&quot;, this.parentActualAge);
        }
    }
};
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>父组件通过语法糖v-on（即简写为“@”）来监听子组件提交的事件addParentAge</p></blockquote><p>this.$emit提交的事件名称addParentAge，与方法handleAddParentAge名称可以不一样</p><p>addParentAge是子组件提交的事件名称，也是父组件通过v-on监听的事件名称，而handleAddParentAge是父组件自定义的方法名称</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;div class=&quot;my-parent&quot;&gt;
        &lt;h3&gt;我是父组件，我想告诉我的子组件，我的年龄值是:{{parentAge}}&lt;/h3&gt;
        &lt;h3&gt;我要通过v-bind(即简写&quot;:&quot;)语法糖绑定一个属性parentAge，告诉子组件我的年龄值是:{{parentAge}}&lt;/h3&gt;
        &lt;!-- 下面就是我的子组件 --&gt;
        &lt;my-child :deliverParentAge=&quot;parentAge&quot;
            @addParentAge=&quot;handleAddParentAge&quot;&gt;&lt;/my-child&gt;
        &lt;h3&gt;通过监听子组件提交的事件addParentAge，我知道到了自己的实际年龄应该是:{{parentAge+1}}，并通过方法handleAddParentAge，在控制台打印出我的真实年龄&lt;/h3&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import MyChild from &quot;./Child&quot;;
export default {
    components: { MyChild },
    data() {
        return {
        parentAge: 49
        };
    },
    methods: {
        handleAddParentAge(actualAge) {
            console.log(&quot;父组件的实际年龄是：&quot;, actualAge);
        }
    }
};
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="四、爷孙通信-provide-inject" tabindex="-1"><a class="header-anchor" href="#四、爷孙通信-provide-inject" aria-hidden="true">#</a> <strong>四、爷孙通信 provide / inject</strong></h1><p><strong><strong>简介</strong></strong></p><p>Vue2.2.0新增API,这对选项需要一起使用，以允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在起上下游关系成立的时间里始终生效。一言而蔽之：祖先组件中通过provider来提供变量，然后在子孙组件中通过inject来注入变量。</p><p>provide / inject API 主要解决了跨级组件间的通信问题，不过它的使用场景，主要是子组件获取上级组件的状态，跨级组件间建立了一种主动提供与依赖注入的关系。</p><p>总结：通过provide传值，通过inject接收。</p><h1 id="五、跨级通信-vuex" tabindex="-1"><a class="header-anchor" href="#五、跨级通信-vuex" aria-hidden="true">#</a> <strong>五、跨级通信 vuex</strong></h1><p><strong><strong>vuex的原理</strong></strong></p><p>Vuex实现了一个单向数据流，在全局拥有一个<strong>State</strong>存放数据，当组件要更改State中的数据时，必须通过<strong>Mutations</strong>进行，Mutations同时提供了订阅者模式供外部插件调用获取State数据的更新。而当所有异步操作(常见于调用后端接口异步获取更新数据)或批量的同步操作需要走Action，但Action也是无法直接修改State的，还是需要通过Mutation来修改State的数据。最后，根据State的变化，渲染到视图上。</p><p><strong><strong>各模块在流程中的功能</strong></strong></p><ul><li>Vue Components：Vue组件。HTML页面上，负责接收用户操作等交互行为，执行dispatch方法触发对应action进行回应。</li><li>dispatch：操作行为触发方法，是唯一能执行action的方法。</li><li>actions：操作行为处理模块,由组件中的$store.dispatch(&#39;action 名称&#39;, data1)来触发。然后由commit()来触发mutation的调用 , 间接更新 state。负责处理Vue Components接收到的所有交互行为。包含同步/异步操作，支持多个同名方法，按照注册的顺序依次触发。向后台API请求的操作就在这个模块中进行，包括触发其他action以及提交mutation的操作。该模块提供了Promise的封装，以支持action的链式触发。</li><li>commit：状态改变提交操作方法。对mutation进行提交，是唯一能执行mutation的方法。</li><li>mutations：状态改变操作方法，由actions中的commit(&#39;mutation 名称&#39;)来触发。是Vuex修改state的唯一推荐方法。该方法只能进行同步操作，且方法名只能全局唯一。操作之中会有一些hook暴露出来，以进行state的监控等。</li><li>state：页面状态管理容器对象。集中存储Vue components中data对象的零散数据，全局唯一，以进行统一的状态管理。页面显示所需的数据从该对象中进行读取，利用Vue的细粒度数据响应机制来进行高效的状态更新。</li><li>getters：state对象读取方法。图中没有单独列出该模块，应该被包含在了render中，Vue Components通过该方法读取全局state对象。</li></ul><p><strong><strong>Vuex与localStorage</strong></strong></p><p>vuex 是 vue 的状态管理器，存储的数据是响应式的。但是并不会保存起来，刷新之后就回到了初始状态，具体做法应该在vuex里数据改变的时候把数据拷贝一份保存到localStorage里面，刷新之后，如果localStorage里有保存的数据，取出来再替换store里的state。</p><h1 id="六、跨级只传值-attrs-listeners" tabindex="-1"><a class="header-anchor" href="#六、跨级只传值-attrs-listeners" aria-hidden="true">#</a> <strong>六、跨级只传值 $attrs/$listeners</strong></h1><p><strong><strong>简介</strong></strong></p><p>多级组件嵌套需要传递数据时，通常使用的方法是通过vuex。但如果仅仅是传递数据，而不做中间处理，使用 vuex 处理，未免有点大材小用。为此Vue2.4 版本提供了另一种方法----$attrs/$listeners</p><ul><li>$attrs：包含了父作用域中不被 prop 所识别 (且获取) 的特性绑定 (class 和 style 除外)。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，并且可以通过 v-bind=&quot;$attrs&quot; 传入内部组件。通常配合 interitAttrs 选项一起使用。</li><li>$listeners：包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 v-on=&quot;$listeners&quot; 传入内部组件</li></ul><h1 id="七、-eventbus" tabindex="-1"><a class="header-anchor" href="#七、-eventbus" aria-hidden="true">#</a> <strong>七、$eventBus</strong></h1><p><strong><strong>$eventBus</strong></strong></p><blockquote><p>$eventBus 主要作用是进行非父子组件信息传递</p></blockquote><p><strong><strong>$eventBus</strong></strong></p><p>新建 event-bus.js 文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// event-bus.js
import Vue from &#39;vue&#39;
export const eventBus = new Vue()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第一步：在main.js中将$eventBus绑定到vue原型上</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Vue.prototype.$eventBus = new Vue()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>第二步：在需要传递信息的组件上将一个方法发射出去，并需要在某个条件激活这个方法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div @click=&quot;busclick&quot;&gt;按钮&lt;/div&gt;
import { eventBus } from &quot;../event-bus.js&quot;;

methods(){
  busclick(){
    this.$eventBus.$emit(&#39;busfunction&#39;)
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第三步：在组件的创建时created中接收emit的方法，并执行回调函数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>created(){
  this.$eventBus.$on(&#39;busfunction&#39;，()=&gt;{
    this.$refs.scroll.refresh()
  })
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第四步：在beforeDestroy里销毁事件总线，不销毁的话会一直叠加的调用这个方法,如果这个子组件在不同的页面都调用这个子组件，那么在一个父组件this.off(&quot;busfunction&quot;);会把其他附件也销毁，如果只单独销毁一个父组件，那么需要在后面指定调用函数this.off(&quot;busfunction&quot;，callback（）);</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>beforDestroy（）{
  this.$eventBus.$off(&quot;busfunction&quot;);  //当这个组件销毁的时候bus也跟着一起销毁
},
beforDestroy（）{
  this.$eventBus.$off(&quot;busfunction&quot;，callback（）);  //当这个组件销毁的时候bus也跟着一起销毁
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>Vue3.X 使用eventbus</strong></strong></p><p><strong>安装mitt依赖包</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install mitt@2.1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>创建eventBus.js文件</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 导入mitt包
import mitt from &#39;mitt&#39;
// 创建eventbus的实例对象
const bus = mitt()

// 将eventbus的实例对象共享出去
export default bus

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>在数据接收方声明事件</strong></p><p>在数据接收方，调用bus.on(&#39;事件名称&#39;, 事件处理函数)方法注册一个自定义事件。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import bus from &#39;./eventBus.js&#39;
export default {
  data () {
    return {
      count: 0
    }
  },
  created () {
    bus.on(&#39;countChange&#39;, (count) =&gt; {
      this.count = count
    })
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>在数据发送方触发事件</strong></p><p>在数据发送方，调用bus.emit(&#39;事件名称&#39;, 要发送的数据)方法触发自定义事件。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import bus from &#39;./eventBus.js&#39;
export default {
  data () {
    return {
      count: 0
    }
  },
  methods: {
    addCount () {
      this.count++
      bus.emit(&#39;countChange&#39;, this.count)
    }
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,66);function x(f,q){const i=l("ExternalLinkIcon");return r(),a("div",null,[u,n("p",null,[n("a",o,[e("组件通信"),t(i)]),e(),n("a",c,[e("接口调用"),t(i)]),e(),n("a",m,[e("源码探索"),t(i)]),e(),n("a",b,[e("常见配置"),t(i)]),e(),n("a",p,[e("Vue项目开发"),t(i)]),e(),n("a",g,[e("常用组件"),t(i)])]),h])}const _=d(v,[["render",x],["__file","组件通信.html.vue"]]);export{_ as default};
