import{_ as s,r as t,o as r,c as a,a as n,b as e,d as l,e as d}from"./app.37a6fc76.js";const o="/assets/Untitled.68a11a73.png",v="/assets/Untitled1.c88b9d67.png",c="/assets/Untitled2.901bfe33.png",u={},m=d(`<h1 id="事件循环" tabindex="-1"><a class="header-anchor" href="#事件循环" aria-hidden="true">#</a> 事件循环</h1><h1 id="事件循环、执行上下文、执行栈与任务队列、事件循环机制" tabindex="-1"><a class="header-anchor" href="#事件循环、执行上下文、执行栈与任务队列、事件循环机制" aria-hidden="true">#</a> <strong>事件循环、执行上下文、执行栈与任务队列、事件循环机制</strong></h1><h1 id="一、事件循环" tabindex="-1"><a class="header-anchor" href="#一、事件循环" aria-hidden="true">#</a> <strong>一、事件循环</strong></h1><p><strong><strong>什么是事件循环</strong></strong></p><blockquote><p>简单地说，对于 JS 运行中的任务，JS 有一套处理收集，排队，执行的特殊机制，我们把这套处理机制称为事件循环（Event Loop）。</p></blockquote><p>JavaScript 语言的一大特点就是单线程，也就是说，同一个时间只能做一件事。为了协调事件、用户交互、脚本、UI 渲染和网络处理等行为，防止主线程的不阻塞，Event Loop 的方案应用而生。Event Loop 包含两类：一类是基于 Browsing Context，一种是基于 Worker。二者的运行是独立的，也就是说，每一个 JavaScript 运行的&quot;线程环境&quot;都有一个独立的 Event Loop，每一个 Web Worker 也有一个独立的 Event Loop。</p><p><strong><strong>单线程</strong></strong></p><blockquote><p>JavaScript的单线程，与它的用途有关。作为浏览器脚本语言，JavaScript的主要用途是与用户互动，以及操作DOM。这决定了它只能是单线程，否则会带来很复杂的同步问题。比如，假定JavaScript同时有两个线程，一个线程在某个DOM节点上添加内容，另一个线程删除了这个节点，这时浏览器应该以哪个线程为准？</p></blockquote><p>我们都知道，javascript从诞生之日起就是一门单线程的非阻塞的脚本语言。这是由其最初的用途来决定的：与浏览器交互。</p><ul><li>而非阻塞则是当代码需要进行一项异步任务（无法立刻返回结果，需要花一定时间才能返回的任务，如I/O事件）的时候，主线程会挂起（pending）这个任务，然后在异步任务返回结果的时候再根据一定规则去执行相应的回调。</li><li>单线程是必要的，也是javascript这门语言的基石，原因之一在其最初也是最主要的执行环境——浏览器中，我们需要进行各种各样的dom操作。试想一下 如果javascript是多线程的，那么当两个线程同时对dom进行一项操作，例如一个向其添加事件，而另一个删除了这个dom，此时该如何处理呢？因此，为了保证不会 发生类似于这个例子中的情景，javascript选择只用一个主线程来执行代码，这样就保证了程序执行的一致性。</li><li>当然，现如今人们也意识到，单线程在保证了执行顺序的同时也限制了javascript的效率，因此开发出了web worker技术。这项技术号称让javascript成为一门多线程语言。</li><li>然而，使用web worker技术开的多线程有着诸多限制，例如：所有新线程都受主线程的完全控制，不能独立执行。这意味着这些“线程” 实际上应属于主线程的子线程。另外，这些子线程并没有执行I/O操作的权限，只能为主线程分担一些诸如计算等任务。所以严格来讲这些线程并没有完整的功能，也因此这项技术并非改变了javascript语言的单线程本质。</li><li>可以预见，未来的javascript也会一直是一门单线程的语言。</li></ul><p>话说回来，前面提到javascript的另一个特点是“非阻塞”，那么javascript引擎到底是如何实现的这一点呢？答案就是今天这篇文章的主角——event loop（事件循环）。</p><p>注：虽然nodejs中的也存在与传统浏览器环境下的相似的事件循环。然而两者间却有着诸多不同，故把两者分开，单独解释。</p><h1 id="二、执行上下文" tabindex="-1"><a class="header-anchor" href="#二、执行上下文" aria-hidden="true">#</a> <strong>二、执行上下文</strong></h1><p><strong><strong>执行上下文</strong></strong></p><p>执行上下文总共有三种类型</p><ul><li>全局执行上下文：只有一个，浏览器中的全局对象就是 window 对象，this 指向这个全局对象。</li><li>函数执行上下文：存在无数个，只有在函数被调用的时候才会被创建，每次调用函数都会创建一个新的执行上下文。</li><li>Eval 函数执行上下文： 指的是运行在 eval 函数中的代码，很少用而且不建议使用。</li></ul><p><strong><strong>执行上下文的创建</strong></strong></p><p><strong>创建阶段</strong></p><ul><li>1、确定 this 的值，也被称为 This Binding。</li><li>2、LexicalEnvironment（词法环境） 组件被创建。</li><li>3、VariableEnvironment（变量环境） 组件被创建。</li></ul><p>直接看伪代码可能更加直观</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ExecutionContext = {
    ThisBinding = ,     // 确定this
    LexicalEnvironment = { ... },   // 词法环境
    VariableEnvironment = { ... },  // 变量环境
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>this绑定</strong></p><ul><li>全局执行上下文中，this 的值指向全局对象，在浏览器中this 的值指向 window对象，而在nodejs中指向这个文件的module对象。</li><li>函数执行上下文中，this 的值取决于函数的调用方式。具体有：默认绑定、隐式绑定、显式绑定（硬绑定）、new绑定、箭头函数，具体内容会在【this全面解析】部分详解。</li></ul><p><strong>词法环境</strong></p><p>词法环境有两个组成部分=自己的+外部引用</p><ol><li>环境记录：存储变量和函数声明的实际位置</li><li>对外部环境的引用：可以访问其外部词法环境</li></ol><p><strong>词法环境有两种类型</strong></p><ol><li>全局环境：是一个没有外部环境的词法环境，其外部环境引用为 null。拥有一个全局对象（window 对象）及其关联的方法和属性（例如数组方法）以及任何用户自定义的全局变量，this 的值指向这个全局对象。</li><li>函数环境：用户在函数中定义的变量被存储在环境记录中，包含了arguments 对象。对外部环境的引用可以是全局环境，也可以是包含内部函数的外部函数环境。</li></ol><p>直接看伪代码可能更加直观</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GlobalExectionContext = {  // 全局执行上下文
    LexicalEnvironment: {    	  // 词法环境
        EnvironmentRecord: {   		// 环境记录
        Type: &quot;Object&quot;,      		   // 全局环境
        // 标识符绑定在这里
        outer: &lt;null&gt;  	   		   // 对外部环境的引用
    }
}

FunctionExectionContext = { // 函数执行上下文
    LexicalEnvironment: {  	  // 词法环境
        EnvironmentRecord: {  		// 环境记录
        Type: &quot;Declarative&quot;,  	   // 函数环境
        // 标识符绑定在这里 			  // 对外部环境的引用
        outer: &lt;Global or outer function environment reference&gt;
        // 会引用全局环境和外部的函数环境
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>变量环境</strong></p><p>变量环境也是一个词法环境，因此它具有上面定义的词法环境的所有属性，在 ES6 中，他们的区别在于</p><p>词法环境用于存储函数声明和变量（ let 和 const ）绑定，变量环境仅用于存储变量（ var ）绑定。</p><p>看例子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let a = 20;
const b = 30;
var c;

function multiply(e, f) {
    var g = 20;
    return e * f * g;
}

c = multiply(20, 30);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行上下文如下所示</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//全局执行上下文
GlobalExectionContext = {
    //  this绑定
    ThisBinding: ,
    //词法环境
    LexicalEnvironment: {
        EnvironmentRecord: {
            Type: &quot;Object&quot;,
            // 标识符绑定在这里
            a: &lt; uninitialized &gt;,  //let 和 const 声明的变量保存在 词法环境 中
            b: &lt; uninitialized &gt;,
            multiply: &lt; func &gt;  //函数声明 也保存在词法环境中
        }
        outer: &lt;null&gt;
    },
    //变量环境
    VariableEnvironment: {
        EnvironmentRecord: {
            Type: &quot;Object&quot;,
            // 标识符绑定在这里
            c: undefined,  //var 声明的变量保存在 变量环境 中 ，且不保存 函数声明
        }
        outer: &lt;null&gt;
    }
}

//函数执行上下文
FunctionExectionContext = {
    //  this绑定
    ThisBinding: &lt;Global Object&gt;,
    //词法环境
    LexicalEnvironment: {
        EnvironmentRecord: {
            Type: &quot;Declarative&quot;,
            // 标识符绑定在这里
            Arguments: {0: 20, 1: 30, length: 2},
        },
        outer: &lt;GlobalLexicalEnvironment&gt;
    },
    //变量环境
    VariableEnvironment: {
        EnvironmentRecord: {
            Type: &quot;Declarative&quot;,
            // 标识符绑定在这里
            g: undefined
        },
        outer: &lt;GlobalLexicalEnvironment&gt;
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>变量提升和函数提升的原因：在创建阶段，函数和变量的声明已经存储在了执行上下文中，var声明的变量会被设置为 undefined，而在 let 和 const 的情况下，则会保持未初始化。</p><p>所以这就是为什么可以在声明之前访问 var 定义的变量（尽管是 undefined ），但如果在声明之前访问 let 和 const 定义的变量就会提示引用错误的原因。这就是所谓的变量提升。</p><h1 id="三、执行栈与任务队列" tabindex="-1"><a class="header-anchor" href="#三、执行栈与任务队列" aria-hidden="true">#</a> <strong>三、执行栈与任务队列</strong></h1><p><strong><strong>执行栈（Execution Stack）</strong></strong></p><blockquote><p>执行栈，也叫调用栈，具有 LIFO（后进先出）结构，用于存储在代码执行期间创建的所有执行上下文。</p></blockquote><p>首次运行JS代码时，会创建一个全局执行上下文并Push到当前的执行栈中。每当发生函数调用，引擎都会为该函数创建一个新的函数执行上下文并Push到当前执行栈的栈顶。</p><p>根据执行栈LIFO规则，当栈顶函数运行完成后，其对应的函数执行上下文将会从执行栈中Pop出，上下文控制权将移到当前执行栈的下一个执行上下文。</p><ul><li>当Javascript引擎遇到一段可执行代码时，新建一个执行上下文。</li><li>将它推入执行栈中。并设置为运行时执行上下文。 <ul><li>如果存在其他执行上下文。</li><li>那么将当前执行上下文挂起</li><li>然后再将新执行上下文推入执行栈中。</li></ul></li><li>执行上下文运行完毕，弹出销毁恢复并将原执行上下文设为运行时。</li></ul><p><strong><strong>任务队列（Task Queue）</strong></strong></p><blockquote><p>根据规范，事件循环是通过任务队列的机制来进行协调的。一个 Event Loop 中，可以有一个或者多个任务队列(task queue)，一个任务队列便是一系列有序任务(task)的集合；每个任务都有一个任务源(task source)，源自同一个任务源的 task 必须放到同一个任务队列，从不同源来的则被添加到不同队列。setTimeout/Promise 等API便是任务源，而进入任务队列的是他们指定的具体执行任务。</p></blockquote><p>在事件循环中，每进行一次循环操作称为 tick，每一次 tick 的任务处理模型是比较复杂的，但关键步骤如下：</p><ul><li>在此次 tick 中选择最先进入队列的任务(oldest task)，如果有则执行(一次)</li><li>检查是否存在 Microtasks，如果存在则不停地执行，直至清空 Microtasks Queue</li><li>更新 render</li><li>主线程重复执行上述步骤</li></ul><p>在上述tick的基础上需要了解以下几点：</p><ul><li>JS分为同步任务和异步任务</li><li>同步任务都在主线程上执行，形成一个执行栈</li><li>主线程之外，事件触发线程管理着一个任务队列，只要异步任务有了运行结果，就在任务队列之中放置一个事件。</li><li>一旦执行栈中的所有同步任务执行完毕（此时JS引擎空闲），系统就会读取任务队列，将可运行的异步任务添加到可执行栈中，开始执行。</li></ul><p><strong><strong>同步任务与异步任务</strong></strong></p><p><strong>同步任务</strong></p><blockquote><p>同步任务是指在主线程上排队执行的任务，只有前一个任务执行完毕，才能继续执行下一个任务，当我们打开网站时，网站的渲染过程，比如元素的渲染，其实就是一个同步任务</p></blockquote><p><strong>异步任务</strong></p><blockquote><p>异步任务是指不进入主线程，而进入任务队列的任务，只有任务队列通知主线程，某个异步任务可以执行了，该任务才会进入主线程，当我们打开网站时，像图片的加载，音乐的加载，其实就是一个异步任务</p></blockquote><p>常见异步任务</p><ul><li>ajax的回调函数</li><li>DOM事件的回调函数</li><li>setTimeout、setInterval定时器的回调函数</li></ul><h1 id="四、事件循环机制" tabindex="-1"><a class="header-anchor" href="#四、事件循环机制" aria-hidden="true">#</a> <strong>四、事件循环机制</strong></h1><p><strong><strong>事件循环机制</strong></strong></p><p><img src="`+o+'" alt="Untitled"></p><p>上面这张图很好地展示了 JS 中的事件循环机制，我们可以看到图中主要包括三个部分，Stack，Heap，Queue，下面逐个分析。</p><ul><li>Stack 表示计算机的栈结构，此处 Stack 区域表示的是当前 JS 线程正在处理的任务(一个任务)。结合执行环境部分，我们其实可以把这些 Frame 的组合当作当前的执行环境栈。一个 Frame 表示一个执行环境。这里也解释了一个任务下其实可以包含多个相关函数。</li><li>Heap 一般用来表示计算机内存，此处 Heap 表示当前任务下相关的数据，结合上面变量对象的概念，我们可以把其中的 Object 标签当作是执行环境对应的变量对象。一个执行环境推入执行环境栈时，创建一个变量对象放入 Heap 区域，当执行环境栈推出这个执行环境时，其相对应的变量对象在 Heap 移除并销毁。如果再深入点，我们可以发现，里面 Object 的集合其实就是我们的作用域链的变量对象集合。</li><li>Queue 在计算机中表示队列，是一种先进先出的数据结构。此处 Queue 区表示了当前正在排队的任务集合，我们称之为任务队列。一个 Message 表示一个待执行任务，它们是按顺序排队的。</li></ul><p>分析完图片的不同区域，我们就可以很轻松地分析出这张图中阐释的事件环境机制了</p><ol><li>JS 线程在同一时间只执行一个任务，期间可能创建多个函数执行环境，对应 Frame。</li><li>在执行任务的时候，随时执行环境栈的动态变化，相对应的变量对象不断创建销毁，对应 Object。</li><li>异步任务 ajax I/O 等得到结果时，会将其回调作为一个任务添加到任务队列，排队等待执行。</li><li>当 JS 线程中的任务执行完毕，会读取任务队列 Queue，并将队列中的第一个任务添加到 JS 线程中并执行。</li><li>循环 3 4 步，异步任务完成后不断地往任务队列中添加任务，线程空闲时从任务列表读取任务并执行。</li></ol><p><strong><strong>事件循环下的宏任务与微任务</strong></strong></p><p>通常我们把异步任务分为宏任务与微任务，它们的区分在于：</p><ul><li>宏任务（macro-task）：一般是 JS 引擎和宿主环境发生通信产生的回调任务，比如 setTimeout，setInterval 是浏览器进行计时的，其中回调函数的执行时间需要浏览器通知到 JS 引擎，网络模块, I/O处理的通信回调也是。包含有 setTimeout，setInterval，DOM事件回调，ajax请求结束后的回调，整体 script 代码，setImmediate。</li><li>微任务（micro-task）：一般是宏任务在线程中执行时产生的回调，如 Promise，process.nextTick，Object.observe(已废弃)， MutationObserver（DOM监听），这些都是 JS 引擎自身可以监听到回调。</li></ul><p><strong>优先级</strong></p><ul><li>宏任务优先级，主代码块 &gt; setImmediate &gt; MessageChannel &gt; setTimeout / setInterval</li><li>微任务优先级，process.nextTick &gt; Promise &gt; MutationObserver</li></ul><p><img src="'+v+'" alt="Untitled"></p><p><strong><strong>运行机制</strong></strong></p><p>在事件循环中，每进行一次循环操作称为 tick，每一次 tick 的任务处理模型是比较复杂的，但关键步骤如下：</p><p><img src="'+c+`" alt="Untitled"></p><h1 id="五、浏览器环境下的事件循环机制" tabindex="-1"><a class="header-anchor" href="#五、浏览器环境下的事件循环机制" aria-hidden="true">#</a> <strong>五、浏览器环境下的事件循环机制</strong></h1><p><strong><strong>宏任务（macro-task）</strong></strong></p><p>一般是 JS 引擎和宿主环境发生通信产生的回调任务，比如 setTimeout，setInterval 是浏览器进行计时的，其中回调函数的执行时间需要浏览器通知到 JS 引擎，网络模块, I/O处理的通信回调也是。包含有 setTimeout，setInterval，DOM事件回调，ajax请求结束后的回调，整体 script 代码，setImmediate。</p><p><strong>常见宏任务</strong></p><ul><li>script(整体代码)</li><li>setTimeout</li><li>setInterval</li><li>I/O</li><li>UI交互事件</li><li>postMessage</li><li>MessageChannel</li></ul><p><strong><strong>微任务（micro-task）</strong></strong></p><p>一般是宏任务在线程中执行时产生的回调，如 Promise，process.nextTick，Object.observe(已废弃)， MutationObserver（DOM监听），这些都是 JS 引擎自身可以监听到回调。</p><p><strong>常见微任务</strong></p><ul><li>Promise.then</li><li>Object.observe</li><li>MutationObserver</li></ul><p>microtask，可以理解是在当前 task 执行结束后立即执行的任务。也就是说，在当前task任务后，下一个task之前，在渲染之前。</p><p>所以它的响应速度相比setTimeout（setTimeout是task）会更快，因为无需等渲染。也就是说，在某一个macrotask执行完后，就会将在它执行期间产生的所有microtask都执行完毕（在渲染前）。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>setTimeout(() =&gt; {
    //执行后 回调一个宏事件
    console.log(&#39;内层宏事件3&#39;)
}, 0)
console.log(&#39;外层宏事件1&#39;);

new Promise((resolve) =&gt; {
    console.log(&#39;外层宏事件2&#39;);
    resolve()
}).then(() =&gt; {
    console.log(&#39;微事件1&#39;);
}).then(()=&gt;{
    console.log(&#39;微事件2&#39;)
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>外层宏事件1
外层宏事件2
微事件1
微事件2
内层宏事件3

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="六、node环境下的事件循环机制" tabindex="-1"><a class="header-anchor" href="#六、node环境下的事件循环机制" aria-hidden="true">#</a> <strong>六、Node环境下的事件循环机制</strong></h1><p><strong><strong>宏任务（macro-task）</strong></strong></p><p><strong>常见宏任务</strong></p><ul><li>script(整体代码)</li><li>setTimeout</li><li>setInterval</li><li>I/O</li><li>UI交互事件</li><li>postMessage</li><li>MessageChannel</li><li>setImmediate(Node.js 环境)</li></ul><p><strong><strong>微任务（micro-task）</strong></strong></p><p><strong>常见微任务</strong></p><ul><li>Promise.then</li><li>Object.observe</li><li>MutationObserver</li><li>process.nextTick(Node.js 环境)</li></ul><h1 id="七、案例" tabindex="-1"><a class="header-anchor" href="#七、案例" aria-hidden="true">#</a> <strong>七、案例</strong></h1><p><strong><strong>综合案例（node环境）</strong></strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//主线程直接执行
console.log(&#39;1&#39;);
//丢到宏事件队列中
setTimeout(function() {
    console.log(&#39;2&#39;);
    process.nextTick(function() {
        console.log(&#39;3&#39;);
    })
    new Promise(function(resolve) {
        console.log(&#39;4&#39;);
        resolve();
    }).then(function() {
        console.log(&#39;5&#39;)
    })
})
//微事件1
process.nextTick(function() {
    console.log(&#39;6&#39;);
})
//主线程直接执行
new Promise(function(resolve) {
    console.log(&#39;7&#39;);
    resolve();
}).then(function() {
    //微事件2
    console.log(&#39;8&#39;)
})
//丢到宏事件队列中
setTimeout(function() {
    console.log(&#39;9&#39;);
    process.nextTick(function() {
        console.log(&#39;10&#39;);
    })
    new Promise(function(resolve) {
        console.log(&#39;11&#39;);
        resolve();
    }).then(function() {
        console.log(&#39;12&#39;)
    })
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出结果</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1，7，6，8，2，4，3，5，9，11，10，12
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,100),b={href:"https://www.cnblogs.com/formercoding/p/12906640.html",target:"_blank",rel:"noopener noreferrer"},p={href:"https://www.cnblogs.com/w-yh/p/11967498.html",target:"_blank",rel:"noopener noreferrer"},g={href:"https://zhuanlan.zhihu.com/p/78113300",target:"_blank",rel:"noopener noreferrer"};function h(x,k){const i=t("ExternalLinkIcon");return r(),a("div",null,[m,n("p",null,[e("本文参考："),n("a",b,[e("JS事件循环（Event Loop）"),l(i)]),n("a",p,[e("JavaScript 中的执行上下文和执行栈"),l(i)]),n("a",g,[e("js中的宏任务与微任务"),l(i)])])])}const E=s(u,[["render",h],["__file","事件循环.html.vue"]]);export{E as default};
