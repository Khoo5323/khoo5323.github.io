import{_ as r,r as d,o as a,c as o,a as e,b as t,d as i,t as u,e as l}from"./app.629164ab.js";const v="/assets/Untitled.3c453237.png",c="/assets/Untitled1.a356cf9c.png",p={},m=l('<h1 id="vue3-x-基础" tabindex="-1"><a class="header-anchor" href="#vue3-x-基础" aria-hidden="true">#</a> Vue3.X 基础</h1><h1 id="vue3-x-基础-指令、计算、侦听、修饰符等" tabindex="-1"><a class="header-anchor" href="#vue3-x-基础-指令、计算、侦听、修饰符等" aria-hidden="true">#</a> <strong>Vue3.X 基础（指令、计算、侦听、修饰符等）</strong></h1><h1 id="一、vue3-x-介绍" tabindex="-1"><a class="header-anchor" href="#一、vue3-x-介绍" aria-hidden="true">#</a> <strong>一、Vue3.X 介绍</strong></h1><p><strong>本站相关笔记</strong></p>',4),g={href:"http://vue.cnsbq.com/notebook/vue/vue_04.html",target:"_blank",rel:"noopener noreferrer"},b={href:"http://vue.cnsbq.com/notebook/vue/vue_05.html",target:"_blank",rel:"noopener noreferrer"},h={href:"http://vue.cnsbq.com/notebook/vue/vue_09.html",target:"_blank",rel:"noopener noreferrer"},x={href:"http://vue.cnsbq.com/notebook/vue/vue_11.html",target:"_blank",rel:"noopener noreferrer"},f={href:"http://vue.cnsbq.com/notebook/vue/vue_12.html",target:"_blank",rel:"noopener noreferrer"},V={href:"http://vue.cnsbq.com/notebook/vue/vue_10.html",target:"_blank",rel:"noopener noreferrer"},_=e("p",null,[e("strong",null,[e("strong",null,"Vue3简介")])],-1),y=e("p",null,"2020年9月18日，Vue.js发布3.0版本，代号：One Piece（海贼王）",-1),w=e("p",null,"github上的tags地址：https://github.com/vuejs/vue-next/releases/tag/v3.0.0",-1),k={href:"https://cn.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},R={href:"https://v3.cn.vuejs.org/guide/introduction.html",target:"_blank",rel:"noopener noreferrer"},P=l('<p><strong><strong>Vue3带来了什么</strong></strong></p><p><strong>1.性能的提升</strong></p><ul><li>打包大小减少41%</li><li>初次渲染快55%, 更新渲染快133%</li><li>内存减少54%</li><li>......</li></ul><p><strong>2.源码的升级</strong></p><ul><li>使用Proxy代替defineProperty实现响应式</li><li>重写虚拟DOM的实现和Tree-Shaking</li><li>......</li></ul><p><strong>3.拥抱TypeScript</strong></p><p>Vue3可以更好的支持TypeScript</p><p><strong>4.新的特性</strong></p><ul><li><ol><li>Composition API（组合API）</li></ol><ul><li>setup配置</li><li>ref与reactive</li><li>watch与watchEffect</li><li>provide与inject</li></ul></li><li><ol start="2"><li>新的内置组件</li></ol><ul><li>Fragment</li><li>Teleport</li><li>Suspense</li></ul></li><li><ol start="3"><li>其他改变</li></ol><ul><li>新的生命周期钩子</li><li>data 选项应始终被声明为一个函数</li><li>移除keyCode支持作为 v-on 的修饰符</li><li>......</li></ul></li></ul><p><strong><strong>创建Vue3.0工程</strong></strong></p><p><strong>1.使用 Vue-cli 创建</strong></p><p>官方文档：https://cli.vuejs.org/zh/guide/creating-a-project.html#vue-create</p>',12),j={href:"https://cli.vuejs.org/zh/guide/creating-a-project.html#vue-create",target:"_blank",rel:"noopener noreferrer"},q=l(`<p>查看@vue/cli版本，确保@vue/cli版本在4.5.0以上</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vue --version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装或者升级你的@vue/cli</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install -g @vue/cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vue create vue_test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd vue_test
npm run serve

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2.使用 Vite 创建</strong></p><p>官方文档：https://v3.cn.vuejs.org/guide/installation.html#vite</p><p>Vite官网：https://vitejs.cn</p>`,11),A={href:"https://vitejs.cn/",target:"_blank",rel:"noopener noreferrer"},C={href:"https://v3.cn.vuejs.org/guide/installation.html#vite",target:"_blank",rel:"noopener noreferrer"},I=l('<p><strong>什么是Vite？—— 新一代前端构建工具。</strong></p><p>优势如下：</p><ul><li>开发环境中，无需打包操作，可快速的冷启动。</li><li>轻量快速的热重载（HMR）。</li><li>真正的按需编译，不再等待整个应用编译完成。</li></ul><p>传统构建 与 vite构建对比图</p><p><img src="'+v+`" alt="Untitled"></p><p>创建工程</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm init vite-app &lt;project-name&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>进入工程目录</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd &lt;project-name&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装依赖</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="二、常用-composition-api" tabindex="-1"><a class="header-anchor" href="#二、常用-composition-api" aria-hidden="true">#</a> <strong>二、常用 Composition API</strong></h1><blockquote><p>官方文档: https://v3.cn.vuejs.org/guide/composition-api-introduction.html</p></blockquote><p><strong><strong>1.拉开序幕的setup</strong></strong></p><ol><li><p>理解：Vue3.0中一个新的配置项，值为一个函数。</p></li><li><p>setup是所有<strong>Composition API（组合API）<em>“ 表演的舞台 ”</em></strong>。</p></li><li><p>组件中所用到的：数据、方法等等，均要配置在setup中。</p></li><li><p>setup函数的两种返回值：</p></li></ol><ul><li><ol><li>若返回一个对象，则对象中的属性、方法, 在模板中均可以直接使用。（重点关注！）</li></ol></li><li>2. 若返回一个渲染函数：则可以自定义渲染内容。（了解）</li></ul><ol start="5"><li>注意点：</li></ol><ul><li><ol><li>尽量不要与Vue2.x配置混用</li></ol><ul><li>Vue2.x配置（data、methos、computed...）中<strong>可以访问到</strong>setup中的属性、方法。</li><li>但在setup中<strong>不能访问到</strong>Vue2.x配置（data、methos、computed...）。</li><li>如果有重名, setup优先。</li></ul></li><li><ol start="2"><li>setup不能是一个async函数，因为返回值不再是return的对象, 而是promise, 模板看不到return对象中的属性。（后期也可以返回一个Promise实例，但需要Suspense和异步组件的配合）</li></ol></li></ul><p><strong><strong>2.ref函数</strong></strong></p><p>作用: 定义一个响应式的数据</p><p>语法: const xxx = ref(initValue)</p><p>创建一个包含响应式数据的<strong>引用对象（reference对象，简称ref对象）</strong>。</p><p>JS中操作数据： xxx.value</p><p>模板中读取数据: 不需要.value，直接：</p>`,26),S=l(`<p><strong>备注：</strong></p><ul><li>接收的数据可以是：基本类型、也可以是对象类型。</li><li>基本类型的数据：响应式依然是靠Object.defineProperty()的get与set完成的。</li><li>对象类型的数据：内部 <em><strong>“ 求助 ”</strong></em> 了Vue3.0中的一个新函数—— reactive函数。</li></ul><p><strong><strong>3.reactive函数</strong></strong></p><ul><li>作用: 定义一个<strong>对象类型</strong>的响应式数据（基本类型不要用它，要用ref函数）</li><li>语法：const 代理对象= reactive(源对象)接收一个对象（或数组），返回一个<strong>代理对象（Proxy的实例对象，简称proxy对象）</strong></li><li>reactive定义的响应式数据是“深层次的”。</li><li>内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据进行操作。</li></ul><p><strong><strong>4.Vue3.0中的响应式原理</strong></strong></p><p><strong>vue2.x的响应式</strong></p><p>实现原理：</p><ul><li>对象类型：通过Object.defineProperty()对属性的读取、修改进行拦截（数据劫持）。</li><li>数组类型：通过重写更新数组的一系列方法来实现拦截。（对数组的变更方法进行了包裹）。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Object.defineProperty(data, &#39;count&#39;, {
  get () {},
  set () {}
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>存在问题：</p><ul><li>新增属性、删除属性, 界面不会更新。</li><li>直接通过下标修改数组, 界面不会自动更新。</li></ul><p><strong>Vue3.0的响应式</strong></p><p>实现原理:</p><ul><li>通过Proxy（代理）: 拦截对象中任意属性的变化, 包括：属性值的读写、属性的添加、属性的删除等。</li><li>通过Reflect（反射）: 对源对象的属性进行操作。</li></ul><p>MDN文档中描述的Proxy与Reflect：</p><p>Proxy：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy</p><p>Reflect：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>new Proxy(data, {
	// 拦截读取属性值
  get (target, prop) {
    return Reflect.get(target, prop)
  },
  // 拦截设置属性值或添加新属性
  set (target, prop, value) {
    return Reflect.set(target, prop, value)
  },
  // 拦截删除属性
  deleteProperty (target, prop) {
    return Reflect.deleteProperty(target, prop)
  }
})

proxy.name = &#39;tom&#39;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>5.reactive对比ref</strong></strong></p><p>从定义数据角度对比：</p><ul><li>ref用来定义：<strong>基本类型数据</strong>。</li><li>reactive用来定义：<strong>对象（或数组）类型数据</strong>。</li><li>备注：ref也可以用来定义<strong>对象（或数组）类型数据</strong>, 它内部会自动通过reactive转为<strong>代理对象</strong>。</li></ul><p>从原理角度对比：</p><ul><li>ref通过Object.defineProperty()的get与set来实现响应式（数据劫持）。</li><li>reactive通过使用<strong>Proxy</strong>来实现响应式（数据劫持）, 并通过<strong>Reflect</strong>操作<strong>源对象</strong>内部的数据。</li></ul><p>从使用角度对比：</p><ul><li>ref定义的数据：操作数据<strong>需要</strong>.value，读取数据时模板中直接读取<strong>不需要</strong>.value。</li><li>reactive定义的数据：操作数据与读取数据：<strong>均不需要</strong>.value。</li></ul><p><strong><strong>6.setup的两个注意点</strong></strong></p><p><strong>setup执行的时机</strong></p><p>在beforeCreate之前执行一次，this是undefined。</p><p><strong>setup的参数</strong></p><ul><li>props：值为对象，包含：组件外部传递过来，且组件内部声明接收了的属性。</li><li>context：上下文对象 <ul><li>attrs: 值为对象，包含：组件外部传递过来，但没有在props配置中声明的属性, 相当于 this.$attrs。</li><li>slots: 收到的插槽内容, 相当于 this.$slots。</li><li>emit: 分发自定义事件的函数, 相当于 this.$emit。</li></ul></li></ul><p><strong><strong>7.计算属性与监视</strong></strong></p><p><strong>1.computed函数</strong></p><p>与Vue2.x中computed配置功能一致</p><p>写法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import {computed} from &#39;vue&#39;

setup(){
    ...
  //计算属性——简写
    let fullName = computed(()=&gt;{
        return person.firstName + &#39;-&#39; + person.lastName
    })
    //计算属性——完整
    let fullName = computed({
        get(){
            return person.firstName + &#39;-&#39; + person.lastName
        },
        set(value){
            const nameArr = value.split(&#39;-&#39;)
            person.firstName = nameArr[0]
            person.lastName = nameArr[1]
        }
    })
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2.watch函数</strong></p><p>与Vue2.x中watch配置功能一致</p><p>两个小“坑”：</p><ul><li>监视reactive定义的响应式数据时：oldValue无法正确获取、强制开启了深度监视（deep配置失效）。</li><li>监视reactive定义的响应式数据中某个属性时：deep配置有效。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//情况一：监视ref定义的响应式数据
watch(sum,(newValue,oldValue)=&gt;{
  console.log(&#39;sum变化了&#39;,newValue,oldValue)
},{immediate:true})

//情况二：监视多个ref定义的响应式数据
watch([sum,msg],(newValue,oldValue)=&gt;{
  console.log(&#39;sum或msg变化了&#39;,newValue,oldValue)
})

/* 情况三：监视reactive定义的响应式数据
      若watch监视的是reactive定义的响应式数据，则无法正确获得oldValue！！
      若watch监视的是reactive定义的响应式数据，则强制开启了深度监视
*/
watch(person,(newValue,oldValue)=&gt;{
  console.log(&#39;person变化了&#39;,newValue,oldValue)
},{immediate:true,deep:false}) //此处的deep配置不再奏效

//情况四：监视reactive定义的响应式数据中的某个属性
watch(()=&gt;person.job,(newValue,oldValue)=&gt;{
  console.log(&#39;person的job变化了&#39;,newValue,oldValue)
},{immediate:true,deep:true})

//情况五：监视reactive定义的响应式数据中的某些属性
watch([()=&gt;person.job,()=&gt;person.name],(newValue,oldValue)=&gt;{
  console.log(&#39;person的job变化了&#39;,newValue,oldValue)
},{immediate:true,deep:true})

//特殊情况
watch(()=&gt;person.job,(newValue,oldValue)=&gt;{
    console.log(&#39;person的job变化了&#39;,newValue,oldValue)
},{deep:true}) //此处由于监视的是reactive素定义的对象中的某个属性，所以deep配置有效

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3.watchEffect函数</strong></p><ul><li>watch的套路是：既要指明监视的属性，也要指明监视的回调。</li><li>watchEffect的套路是：不用指明监视哪个属性，监视的回调中用到哪个属性，那就监视哪个属性。</li></ul><p>watchEffect有点像computed：</p><ul><li>但computed注重的计算出来的值（回调函数的返回值），所以必须要写返回值。</li><li>而watchEffect更注重的是过程（回调函数的函数体），所以不用写返回值。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//watchEffect所指定的回调中用到的数据只要发生变化，则直接重新执行回调。
watchEffect(()=&gt;{
  const x1 = sum.value
  const x2 = person.age
  console.log(&#39;watchEffect配置的回调执行了&#39;)
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>8.生命周期</strong></strong></p><p><strong>Vue3.0中可以继续使用Vue2.x中的生命周期钩子，但有有两个被更名：</strong></p><p>beforeDestroy改名为 beforeUnmount</p><p>destroyed改名为 unmounted</p><p><strong>Vue3.0也提供了 Composition Vue2.x中钩子对应关系如下：</strong></p><ul><li>beforeCreate===&gt;setup()</li><li>created=======&gt;setup()</li><li>beforeMount ===&gt;onBeforeMount</li><li>mounted=======&gt;onMounted</li><li>beforeUpdate===&gt;onBeforeUpdate</li><li>updated =======&gt;onUpdated</li><li>beforeUnmount ==&gt;onBeforeUnmount</li><li>unmounted =====&gt;onUnmounted</li></ul><p><strong><strong>9.自定义hook函数</strong></strong></p><ul><li>什么是hook？—— 本质是一个函数，把setup函数中使用的Composition API进行了封装。</li><li>类似于vue2.x中的mixin。</li><li>自定义hook的优势: 复用代码, 让setup中的逻辑更清楚易懂。</li></ul><p><strong><strong>10.toRef</strong></strong></p><ul><li>作用：创建一个 ref 对象，其value值指向另一个对象中的某个属性。</li><li>语法：const name = toRef(person,&#39;name&#39;)</li><li>应用: 要将响应式对象中的某个属性单独提供给外部使用时。</li><li>扩展：toRefs 与toRef功能一致，但可以批量创建多个 ref 对象，语法：toRefs(person)</li></ul><h1 id="三、其它-composition-api" tabindex="-1"><a class="header-anchor" href="#三、其它-composition-api" aria-hidden="true">#</a> <strong>三、其它 Composition API</strong></h1><p><strong><strong>1.shallowReactive 与 shallowRef</strong></strong></p><ul><li>shallowReactive：只处理对象最外层属性的响应式（浅响应式）。</li><li>shallowRef：只处理基本数据类型的响应式, 不进行对象的响应式处理。</li></ul><p>什么时候使用?</p><ul><li>如果有一个对象数据，结构比较深, 但变化时只是外层属性变化 ===&gt; shallowReactive。</li><li>如果有一个对象数据，后续功能不会修改该对象中的属性，而是生新的对象来替换 ===&gt; shallowRef。</li></ul><p><strong><strong>2.readonly 与 shallowReadonly</strong></strong></p><ul><li>readonly: 让一个响应式数据变为只读的（深只读）。</li><li>shallowReadonly：让一个响应式数据变为只读的（浅只读）。</li></ul><p>应用场景: 不希望数据被修改时。</p><p><strong><strong>3.toRaw 与 markRaw</strong></strong></p><p>toRaw：</p><ul><li>作用：将一个由reactive生成的<strong>响应式对象</strong>转为<strong>普通对象</strong>。</li><li>使用场景：用于读取响应式对象对应的普通对象，对这个普通对象的所有操作，不会引起页面更新。</li></ul><p>markRaw：</p><p>作用：标记一个对象，使其永远不会再成为响应式对象。</p><p>应用场景:</p><ul><li><ol><li>有些值不应被设置为响应式的，例如复杂的第三方类库等。</li></ol></li><li><ol start="2"><li>当渲染具有不可变数据源的大列表时，跳过响应式转换可以提高性能。</li></ol></li></ul><p><strong><strong>4.customRef</strong></strong></p><p>作用：创建一个自定义的 ref，并对其依赖项跟踪和更新触发进行显式控制。</p><p>实现防抖效果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
	&lt;input type=&quot;text&quot; v-model=&quot;keyword&quot;&gt;
	&lt;h3&gt;{{keyword}}&lt;/h3&gt;
&lt;/template&gt;

&lt;script&gt;
	import {ref,customRef} from &#39;vue&#39;
	export default {
		name:&#39;Demo&#39;,
		setup(){
			// let keyword = ref(&#39;hello&#39;) //使用Vue准备好的内置ref
			//自定义一个myRef
			function myRef(value,delay){
				let timer
				//通过customRef去实现自定义
				return customRef((track,trigger)=&gt;{
					return{
						get(){
							track() //告诉Vue这个value值是需要被“追踪”的
							return value
						},
						set(newValue){
							clearTimeout(timer)
							timer = setTimeout(()=&gt;{
								value = newValue
								trigger() //告诉Vue去更新界面
							},delay)
						}
					}
				})
			}
			let keyword = myRef(&#39;hello&#39;,500) //使用程序员自定义的ref
			return {
				keyword
			}
		}
	}
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>5.provide 与 inject</strong></strong></p><p><img src="`+c+`" alt="Untitled"></p><p>作用：实现<strong>祖与后代组件间</strong>通信</p><p>套路：父组件有一个 provide 选项来提供数据，后代组件有一个 inject 选项来开始使用这些数据</p><p>具体写法：</p><p>祖组件中：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>setup(){
	......
    let car = reactive({name:&#39;奔驰&#39;,price:&#39;40万&#39;})
    provide(&#39;car&#39;,car)
    ......
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>后代组件中：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>setup(props,context){
	......
    const car = inject(&#39;car&#39;)
    return {car}
	......
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>6.响应式数据的判断</strong></strong></p><ul><li>isRef: 检查一个值是否为一个 ref 对象</li><li>isReactive: 检查一个对象是否是由 reactive 创建的响应式代理</li><li>isReadonly: 检查一个对象是否是由 readonly 创建的只读代理</li><li>isProxy: 检查一个对象是否是由 reactive 或者 readonly 方法创建的代理</li></ul><h1 id="四、composition-api-的优势" tabindex="-1"><a class="header-anchor" href="#四、composition-api-的优势" aria-hidden="true">#</a> <strong>四、Composition API 的优势</strong></h1><p><strong><strong>1.Options API 存在的问题</strong></strong></p><p>使用传统OptionsAPI中，新增或者修改一个需求，就需要分别在data，methods，computed里修改 。</p><p><strong><strong>2.Composition API 的优势</strong></strong></p><p>我们可以更加优雅的组织我们的代码，函数。让相关功能的代码更加有序的组织在一起。</p><h1 id="五、新的组件" tabindex="-1"><a class="header-anchor" href="#五、新的组件" aria-hidden="true">#</a> <strong>五、新的组件</strong></h1><p><strong><strong>1.Fragment</strong></strong></p><ul><li>在Vue2中: 组件必须有一个根标签</li><li>在Vue3中: 组件可以没有根标签, 内部会将多个标签包含在一个Fragment虚拟元素中</li><li>好处: 减少标签层级, 减小内存占用</li></ul><p><strong><strong>2.Teleport</strong></strong></p><p>什么是Teleport？—— Teleport 是一种能够将我们的<strong>组件html结构</strong>移动到指定位置的技术。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;teleport to=&quot;移动位置&quot;&gt;
	&lt;div v-if=&quot;isShow&quot; class=&quot;mask&quot;&gt;
    &lt;div class=&quot;dialog&quot;&gt;
      &lt;h3&gt;我是一个弹窗&lt;/h3&gt;
			&lt;button @click=&quot;isShow = false&quot;&gt;关闭弹窗&lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/teleport&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>3.Suspense</strong></strong></p><p>等待异步组件时渲染一些额外内容，让应用有更好的用户体验</p><p>使用步骤：</p><p>异步引入组件</p><p>使用Suspense包裹组件，并配置好default 与 fallback</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
	&lt;div class=&quot;app&quot;&gt;
    &lt;h3&gt;我是App组件&lt;/h3&gt;
		&lt;Suspense&gt;
      &lt;template v-slot:default&gt;
        &lt;Child/&gt;
      &lt;/template&gt;
			&lt;template v-slot:fallback&gt;
        &lt;h3&gt;加载中.....&lt;/h3&gt;
      &lt;/template&gt;
    &lt;/Suspense&gt;
  &lt;/div&gt;
&lt;/template&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="六、其他" tabindex="-1"><a class="header-anchor" href="#六、其他" aria-hidden="true">#</a> <strong>六、其他</strong></h1><p><strong><strong>全局API的转移</strong></strong></p><p><strong>Vue 2.x 有许多全局 API 和配置。</strong></p><p>例如：注册全局组件、注册全局指令等。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//注册全局组件
Vue.component(&#39;MyButton&#39;, {
  data: () =&gt; ({
    count: 0
  }),
  template: &#39;&lt;button @click=&quot;count++&quot;&gt;Clicked {{ count }} times.&lt;/button&gt;&#39;
})

//注册全局指令
Vue.directive(&#39;focus&#39;, {
  inserted: el =&gt; el.focus()
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Vue3.0中对这些API做出了调整：</strong></p><p>将全局的API，即：Vue.xxx调整到应用实例（app）上</p><table><thead><tr><th>2.x 全局 API（Vue）</th><th>3.x 实例 API (app)</th></tr></thead><tbody><tr><td>Vue.config.xxxx</td><td>app.config.xxxx</td></tr><tr><td>Vue.config.productionTip</td><td>移除</td></tr><tr><td>Vue.component</td><td>app.component</td></tr><tr><td>Vue.directive</td><td>app.directive</td></tr><tr><td>Vue.mixin</td><td>app.mixin</td></tr><tr><td>Vue.use</td><td>app.use</td></tr><tr><td>Vue.prototype</td><td>app.config.globalProperties</td></tr></tbody></table><p><strong><strong>其他改变</strong></strong></p><p><strong>data选项应始终被声明为一个函数。</strong></p><p><strong>过度类名的更改：</strong></p><p>Vue2.x写法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-leave,
.v-enter-to {
  opacity: 1;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Vue3.x写法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-leave-from,
.v-enter-to {
  opacity: 1;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>移除</strong>keyCode作为 v-on 的修饰符，同时也不再支持config.keyCodes</p><p><strong>移除</strong>v-on.native修饰符</p><p>父组件中绑定事件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;my-component
  v-on:close=&quot;handleComponentEvent&quot;
  v-on:click=&quot;handleNativeClickEvent&quot;
/&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>子组件中声明自定义事件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script&gt;
export default {
  emits: [&#39;close&#39;]
}
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>移除</strong>过滤器（filter）</p><p>过滤器虽然这看起来很方便，但它需要一个自定义语法，打破大括号内表达式是 “只是 JavaScript” 的假设，这不仅有学习成本，而且有实现成本！建议用方法调用或计算属性去替换过滤器。</p>`,125);function N(s,E){const n=d("ExternalLinkIcon");return a(),o("div",null,[m,e("p",null,[e("a",g,[t("组件通信"),i(n)]),e("a",b,[t("接口调用"),i(n)]),e("a",h,[t("源码探索"),i(n)]),e("a",x,[t("常见配置"),i(n)]),e("a",f,[t("Vue项目开发"),i(n)]),e("a",V,[t("常用组件"),i(n)])]),_,y,w,e("p",null,[e("a",k,[t("Vue官网"),i(n)]),e("a",R,[t("Vue3.0手册"),i(n)])]),P,e("p",null,[e("a",j,[t("Vue-cli官方文档"),i(n)])]),q,e("p",null,[e("a",A,[t("Vite官网"),i(n)]),e("a",C,[t("Vite官方文档"),i(n)])]),I,e("p",null,u(s.xxx),1),S])}const U=r(p,[["render",N],["__file","Vue3.X基础.html.vue"]]);export{U as default};
