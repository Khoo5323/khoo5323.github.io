import{_ as l,r as d,o as r,c as t,b as e,d as n,e as s,a}from"./app.74a5dc6f.js";const v={},c=a(`<h1 id="异步" tabindex="-1"><a class="header-anchor" href="#异步" aria-hidden="true">#</a> 异步</h1><h1 id="javascript异步编程和跨域、同源策略、开发环境跨域" tabindex="-1"><a class="header-anchor" href="#javascript异步编程和跨域、同源策略、开发环境跨域" aria-hidden="true">#</a> <strong>JavaScript异步编程和跨域、同源策略、开发环境跨域</strong></h1><h1 id="一、异步编程" tabindex="-1"><a class="header-anchor" href="#一、异步编程" aria-hidden="true">#</a> <strong>一、异步编程</strong></h1><p><strong><strong>什么是异步编程？</strong></strong></p><p>有必要了解一下，什么是异步编程，为什么要异步编程。 先说一个概念异步与同步。</p><p>介绍异步之前，回顾一下，所谓同步编程，就 是计算机一行一行按顺序依次执行代码，当前代码任务耗时执行会阻塞后 续代码的执行。 同步编程，即是一种典型的请求-响应模型，当请求调用一个函数或方法 后，需等待其响应返回，然后执行后续代码。 一般情况下，同步编程，代码按序依次执行，能很好的保证程序的执行， 但是在某些场景下，比如读取文件内容，或请求服务器接口数据，需要根 据返回的数据内容执行后续操作，读取文件和请求接口直到数据返回这一 过程是需要时间的，网络越差，耗费时间越长，如果按照同步编程方式实 现，在等待数据返回这段时间，JavaScript 是不能处理其他任务的，此时 页面的交互，滚动等任何操作也都会被阻塞，这显然是及其不友好，不可 接受的，而这正是需要异步编程大显身手的场景。我们想通过 Ajax 请求数 据来渲染页面，这是一个在我们前端当中很常见渲染页面的方式。基本每 个页面都会都这样的过程。在这里用同步的方式请求页面会怎么样？浏览 器锁死，不能进行其他操作。而且每当发送新的请求，浏览器都会锁死， 用户体验极差。</p><p>在浏览器中同步执行将会是上面的这个样子， 任务 1 做完才能做任务 2， 任务 2 做完才会做任务 3。这里面体现出同步编程的有序的特点。只能 1， 2，3 不能 1，3，2。但是我们的代码逻辑中可以存在多任务同时执行的过 程。在我们生活中，煮饭和烧水可以同时去做，同样在我们编程中也需要 这样的逻辑。</p><p>在计算机中有多线程的概念，什么意思呢，每一个线程做一件事，像下面 任务 1 任务 2 任务 3 这样。</p><p>在不同的线程中可以执行不同的任务。 但是我们的 JavaScript 是单线程的，这里的单线程，强调的执行线程是单 线程。后面也是有线程池的，线程以及线程池的概念在这里就不多说了。 想了解的同学可以看看操作系统相关书籍。</p><p>JavaScript 语言执行环境是单线程的，单线程在程序执行时，所走的程序 路径按照连续顺序排下来，前面的必须处理好，后面的才会执行。 但是我们也需要类似多线程机制的这种执行方式。但是 JavaScript 还是单 线程的，我们需要异步执行，异步执行会使得多个任务并发执行。 并行与并发。前文提到多线程的任务可以并行执行，而 JavaScript 单线程 异步编程可以实现多任务并发执行，这里有必要说明一下并行与并发的区 别。 并行，指同一时刻内多任务同时进行。边煮饭，边烧水，可以同时进行 并发，指在同一时间段内，多任务同时进行着，但是某一时刻，只有某一 任务执行。边吃饭边喝水，同一时间点只能喝水和吃饭。 接下来说一说异步机制。</p><p><strong>并发模型</strong></p><p>目前，我们已经知道，JavaScript 执行异步任务时，不需要等待响应返回， 可以继续执行其他任务，而在响应返回时，会得到通知，执行回调或事件 处理程序。那么这一切具体是如何完成的，又以什么规则或顺序运作呢？ 接下来我们需要解答这个问题。回调和事件处理程序本质上并无区别，只 是在不同情况下，不同的叫法。 前文已经提到，JavaScript 异步编程使得多个任务可以并发执行，而实现 这一功能的基础是 JavaScript 拥有一个基于事件循环的并发模型。</p><p><strong>堆栈与队列</strong></p><p>介绍 JavaScript 并发模型之前，先简单介绍堆栈和队列的区别：</p><ul><li>堆（heap）：内存中某一未被阻止的区域，通常存储对象（引用类型）；</li><li>栈（stack）：后进先出的顺序存储数据结构，通常存储函数参数和基本类 型值变量（按值访问）；</li><li>队列（queue）：先进先出顺序存储数据结构。</li><li>事件循环（Event Loop）</li></ul><p>JavaScript 引擎负责解析，执行 JavaScript 代码，但它并不能单独运行，通 常都得有一个宿主环境，一般如浏览器或 Node 服务器，前文说到的单线 程是指在这些宿主环境创建单一线程，提供一种机制，调用 JavaScript 引 擎完成多个 JavaScript 代码块的调度，执行（是的，JavaScript 代码都是按 块执行的），这种机制就称为事件循环（Event Loop）。 JavaScript 执行环境中存在的两个结构需要了解：</p><p>消息队列(message queue)，也叫任务队列（task queue）：存储待处理消 息及对应的回调函数或事件处理程序； 执行栈(execution context stack)，也可以叫执行上下文栈：JavaScript 执行 栈，顾名思义，是由执行上下文组成，当函数调用时，创建并插入一个执 行上下文，通常称为执行栈帧（frame），存储着函数参数和局部变量， 当该函数执行结束时，弹出该执行栈帧； 注：关于全局代码，由于所有的代码都是在全局上下文执行，所以执行栈 顶总是全局上下文就很容易理解，直到所有代码执行完毕，全局上下文退 出执行栈，栈清空了；也即是全局上下文是第一个入栈，最后一个出栈。</p><p>任务：分析事件循环流程前，先阐述两个概念，有助于理解事件循环：同步任务 和异步任务。 任务很好理解，JavaScript 代码执行就是在完成任务，所谓任务就是一个 函数或一个代码块，通常以功能或目的划分，比如完成一次加法计算，完 成一次 ajax 请求；很自然的就分为同步任务和异步任务。同步任务是连续 的，阻塞的；而异步任务则是不连续，非阻塞的，包含异步事件及其回调， 当我们谈及执行异步任务时，通常指执行其回调函数。</p><p>事件循环流程 关于事件循环流程分解如下：</p><ul><li>宿主环境为 JavaScript 创建线程时，会创建堆(heap)和栈(stack)，堆内存储 JavaScript 对象，栈内存储执行上下文；</li><li>栈内执行上下文的同步任务按序执行，执行完即退栈，而当异步任务执行 时，该异步任务进入等待状态（不入栈），同时通知线程：当触发该事件 时（或该异步操作响应返回时），需向消息队列插入一个事件消息；</li><li>当事件触发或响应返回时，线程向消息队列插入该事件消息（包含事件及 回调）；</li><li>当栈内同步任务执行完毕后，线程从消息队列取出一个事件消息，其对应 异步任务（函数）入栈，执行回调函数，如果未绑定回调，这个消息会被 丢弃，执行完任务后退栈；</li><li>当线程空闲（即执行栈清空）时继续拉取消息队列下一轮消息（next tick， 事件循环流转一次称为一次 tick）。</li></ul><p>使用代码可以描述如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var eventLoop = [];
var event;
var i = eventLoop.length - 1; // 后进先出
while(eventLoop[i]) {
    event = eventLoop[i--];
    if (event) { // 事件回调存在
        event();
    }
    // 否则事件消息被丢弃
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里注意的一点是等待下一个事件消息的过程是同步的。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var ele = document.querySelector(&#39;body&#39;);
function clickCb(event) {
    console.log(&#39;clicked&#39;);
}
function bindEvent(callback) {
    ele.addEventListener(&#39;click&#39;, callback);
}
bindEvent(clickCb);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>针对如上代码我们可以构建如下并发模型：</p><p>如上图，当执行栈同步代码块依次执行完直到遇见异步任务时，异步任务 进入等待状态，通知线程，异步事件触发时，往消息队列插入一条事件消 息；而当执行栈后续同步代码执行完后，读取消息队列，得到一条消息， 然后将该消息对应的异步任务入栈，执行回调函数；一次事件循环就完成 了，也即处理了一个异步任务。</p><h1 id="二、js-中异步有几种" tabindex="-1"><a class="header-anchor" href="#二、js-中异步有几种" aria-hidden="true">#</a> <strong>二、JS 中异步有几种？</strong></h1><p><strong><strong>JS 中异步操作还挺多的，常见的分以下几种：</strong></strong></p><ul><li>setTimeout (setInterval)</li><li>AJAX</li><li>Promise</li><li>Generator</li></ul><p><strong><strong>setTimeout (setInterval)</strong></strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>setTimeout(function() {
    console.log(&quot;Hello!&quot;);
}, 1000);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>setTimout（setInterval）并不是立即就执行的，这段代码意思是，等 1s 后，把这个 function 加入任务队列中，如果任务队列中没有其他任务了， 就执行输出 &#39;Hello&#39;。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var outerScopeVar;
helloCatAsync();
alert(outerScopeVar);
function helloCatAsync() {
    setTimeout(function() {
        outerScopeVar = &#39;hello&#39;;
    }, 2000);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行上面代码，发现 outerScopeVar 输出是 undefined，而不是 hello。之 所以这样是因为在异步代码中返回的一个值是不可能给同步流程中使用 的，因为 console.log(outerScopeVar) 是同步代码，执行完后才会执行 setTimout。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>helloCatAsync(function(result) {
    console.log(result);
});
function helloCatAsync(callback) {
    setTimeout(function() {
        callback(&#39;hello&#39;)
    }, 1000)
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>把上面代码改成，传递一个 callback，console 输出就会是 hello。</p><p><strong>AJAX</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if ((xhr.status &gt;= 200 &amp;&amp; xhr.status &lt; 300) || xhr.status == 304 ) {
        console.log(xhr.responseText);
    } else {
        console.log( xhr.status);
    }
}
xhr.open(&#39;GET&#39;, &#39;url&#39;, false);
xhr.send();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这段代码，xhr.open 中第三个参数默认为 false 异步执行，改为 true 时为同步执行。</p><p><strong><strong>Promise</strong></strong></p><p>规范简述：</p><p>promise 是一个拥有 then 方法的对象或函数。</p><p>一个 promise 有三种状态 pending, rejected, resolved 状态一旦确定就不能 改变，且只能够由 pending 状态变成 rejected 或者 resolved 状态，reject 和 resolved 状态不能相互转换。 当 promise 执行成功时，调用 then 方法的第一个回调函数，失败时调用第 二个回调函数。 promise 实例会有一个 then 方法，这个 then 方法必须返回一个新的 promise。 基本用法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 异步操作放在 Promise 构造器中
const promise1 = new Promise((resolve) =&gt; {
    setTimeout(() =&gt; {
        resolve(&#39;hello&#39;);
    }, 1000);
});
// 得到异步结果之后的操作
promise1.then(value =&gt; {
    console.log(value, &#39;world&#39;);
}, error =&gt;{
    console.log(error, &#39;unhappy&#39;)
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>异步代码，同步写法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>asyncFun()
    .then(cb)
    .then(cb)
    .then(cb)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>promise 以这种链式写法，解决了回调函数处理多重异步嵌套带来的回调 地狱问题，使代码更加利于阅读，当然本质还是使用回调函数。</p><p><strong>异常捕获</strong></p><p>前面说过如果在异步的 callback 函数中也有一个异常，那么是捕获不到的， 原因就是回调函数是异步执行的。我们看看 promise 是怎么解决这个问题 的。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>asyncFun(1).then(function (value) {
    throw new Error(&#39;出错啦&#39;);
}, function (value) {
    console.error(value);
}).then(function (value) {}, function (result) {
    console.log(&#39;有错误&#39;, result);
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其实是 promise 的 then 方法中，已经自动帮我们 try catch 了这个回调函数， 实现大致如下。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Promise.prototype.then = function(cb) {
    try {
        cb()
    } catch (e) {
        // todo
        reject(e)
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>then 方法中抛出的异常会被下一个级联的 then 方法的第二个参数捕获到 （前提是有），那么如果最后一个 then 中也有异常怎么办。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Promise.prototype.done = function (resolve, reject) {
    this.then(resolve, reject).catch(function (reason) {
        setTimeout(() =&gt; {
            throw reason;
        }, 0);
    });
};
asyncFun(1).then(function (value) {
    throw new Error(&#39;then resolve 回调出错啦&#39;);
}).catch(function (error) {
    console.error(error);
    throw new Error(&#39;catch 回调出错啦&#39;);
}).done((reslove, reject) =&gt; {});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以加一个 done 方法，这个方法并不会返回 promise 对象，所以在 此之后并不能级联，done 方法最后会把异常抛到全局，这样就可以被全 局的异常处理函数捕获或者中断线程。这也是 promise 的一种最佳实践策 略，当然这个 done 方法并没有被 ES6 实现，所以我们在不适用第三方 Promise 开源库的情况下就只能自己来实现了。为什么需要这个 done 方 法。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const asyncFun = function (value) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(value);
        }, 0);
    })
};
asyncFun(1).then(function (value) {
    throw new Error(&#39;then resolve 回调出错啦&#39;);
});
(node:6312) UnhandledPromiseRejectionWarning: Unhandled promise
rejection (rejection id: 1): Error: then resolve 回调出错啦
(node:6312) [DEP0018] DeprecationWarning: Unhandled promise rejections
are deprecated. In the future, promise rejections that are not handled will
terminate the Node.js process with a non-zero exit code

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>局限</strong></p><p>promise 有一个局限就是不能够中止 promise 链，例如当 promise 链中某一 个环节出现错误之后，已经没有了继续往下执行的必要性，但是 promise 并没有提供原生的取消的方式，我们可以看到即使在前面已经抛出异常， 但是 promise 链并不会停止。虽然我们可以利用返回一个处于 pending 状 态的 promise 来中止 promise 链。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const promise1 = new Promise((resolve) =&gt; {
    setTimeout(() =&gt; {
        resolve(&#39;hello&#39;);
    }, 1000);
});
promise1.then((value) =&gt; {
    throw new Error(&#39;出错啦!&#39;);
}).then(value =&gt; {
    console.log(value);
}, error=&gt; {
    console.log(error.message);
    return result;
}).then(function () {
    console.log(&#39;yinchengnuo&#39;);
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面所说的都是 ES6 的 promise 实现，实际上功能是比较少，而且还有一 些不足的，所以还有很多开源 promise 的实现库，像 q.js 等等，它们提供 了更多的语法糖，也有了更多的适应场景。</p><p><strong>核心代码</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var defer = function () {
    var pending = [], value;
    return {
        resolve: function (_value) {
            value = _value;
            for (var i = 0, ii = pending.length; i &lt; ii; i++) {
                var callback = pending[i];
                callback(value);
            }
            pending = undefined;
        },
        then: function (callback) {
            if (pending) {
                pending.push(callback);
            } else {
                callback(value);
            }
        }
    }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当调用 then 的时候，把所有的回调函数存在一个队列中，当调用 resolve 方法后，依次将队列中的回调函数取出来执行:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var ref = function (value) {
    if (value &amp;&amp; typeof value.then === &quot;function&quot;)
        return value;
    return {
        then: function (callback) {
            return ref(callback(value));
        }
    };
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这一段代码实现的级联的功能，采用了递归。如果传递的是一个 promise 那么就会直接返回这个 promise，但是如果传递的是一个值，那么会将这 个值包装成一个 promise。 下面 promise 和 ajax 结合例子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function ajax(url) {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if ((xhr.status &gt;= 200 &amp;&amp; xhr.status &lt; 300) || xhr.status == 304 ) {
                resovle(xhr.responseText);
            } else {
                reject( xhr.status);
            }
        }
        xhr.open(&#39;GET&#39;, url, false);
        xhr.send();
    });
}
ajax(&#39;/test.json&#39;)
    .then(function(data){
        console.log(data);
    })
    .cacth(function(err){
        console.log(err);
    });

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>generator</strong></strong></p><p>基本用法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function * gen (x) {
    const y = yield x + 2;
    // console.log(y); // 猜猜会打印出什么值
}
const g = gen(1);
console.log(&#39;first&#39;, g.next()); //first { value: 3, done: false }
console.log(&#39;second&#39;, g.next()); // second { value: undefined, done: true }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通俗的理解一下就是 yield 关键字会交出函数的执行权，next 方法会交回 执行权，yield 会把 generator 中 yield 后面的执行结果，带到函数外面，而 next 方法会把外面的数据返回给 generator 中 yield 左边的变量。这样就实 现了数据的双向流动。我们来看 generator 如何是如何来实现一个异步编程（*）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const fs = require(&#39;fs&#39;);
function * gen() {
    try {
        const file = yield fs.readFile;
        console.log(file.toString());
    } catch(e) {
        console.log(&#39;捕获到异常&#39;, e);
    }
}
// 执行器
const g = gen();
g.next().value(&#39;./config1.json&#39;, function (error, value) {
    if (error) {
        g.throw(&#39;文件不存在&#39;);
    }
    g.next(value);
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么我们 next 中的参数就会是上一个 yield 函数的返回结果，可以看到在 generator 函数中的代码感觉是同步的，但是要想执行这个看似同步的代 码，过程却很复杂，也就是流程管理很复杂。</p><p><strong><strong>扩展：异步编程与多线程的区别</strong></strong></p><p>共同点：异步和多线程两者都可以达到避免调用线程阻塞的目的，从而提 高软件的可响应性</p><p>不同点：</p><ul><li>（1）线程不是一个计算机硬件的功能，而是操作系统提供的一种逻辑功能，线程本质上是进程中一段并发运行的代码，所以线程需要操作 系统投入 CPU 资源来运行和调度。 多线程的优点很明显，线程中的处理程序依然是顺序执行， 符合普通人的思维习惯，所以编程简单。但是多线程的缺点也同样明显， 线 程的使用（滥用）会给系统带来上下文切换的额外负担。并 且线程间的共享变量可能造成死锁的出现</li><li>（2）异步操作无须额外的线程负担，并且使用回调的方式进行处理， 在设计良好的情况下，处理函数可以不必使用共享变量（即使无法 完 全不用，最起码可以减少 共享变量的数量），减少了死 锁的可能。当然异步操作也并非完美无暇。编写异步操作的复杂程度较高， 程序 主要使用回调方式进行处理，与普通人的思维方式有些 初入，而且难以调试。</li></ul><p>这里有一个疑问。异步操作没有创建新的线程，我们一定会想，比 如有一个文件操作，大量数据从硬盘上读取，若使用单线程的同步操作自 然要等待会很长时间，但是若使用异步操作的话，我们让数据读取异步进 行，二线程在数据读取期间去干其他的事情，我们会想，这怎么行呢，异 步没有创建其他的线程，一个线程去干其他的事情去了，那数据的读取异 步执行是去由谁完成的呢？实际上，本质是这样的。</p><p>熟悉电脑硬件的朋友肯定对 DMA 这个词不陌生，硬盘、光驱的技 术规格中都有明确 DMA 的模式指标，其实网卡、声卡、显卡也是有 DMA 功能的。DMA 就是直 接内存访问的意思，也就是说，拥有 DMA 功能的 硬件在和内存进行数据交换的时候可以不消耗 CPU 资源。只要 CPU 在发 起数据传输时发送一个指令，硬件就开 始自己和内存交换数据，在传输 完成之后硬件会触发一个中断来通知操作完成。这些无须消耗 CPU 时间的 I/O 操作正是异步操作的硬件基础。所以即使在 DOS 这样的单进程（而且 无线程概念）系统中也同样可以发起异步的 DMA 操作。</p><p>即 CPU 在数据的长时间读取过程中 ，只需要做两件事，第一发布指 令，开始数据交换；第二，交换结束，得到指令，CPU 再进行后续操作。 而中间读取数据漫长的等待过程，CPU 本身就不需要参与，顺序执行就是 我不参与但是我要干等着，效率低下；异步执行就是，我不需要参与那我 就去干其他事情去了，你做完了再通知我就可以了（回调）。</p><p>但是你想一下，如果有一些异步操作必须要 CPU 的参与才能完成呢， 即我开始的那个线程是走不开的，这该怎么办呢，在.NET 中，有线程池去 完成，线程池会高效率的开启一个新的线程去完成异步操作，在 python 中这是系统自己去安排的，无需人工干预，这就比自己创建很多的线程更 加高效。</p><p><strong>总结：</strong></p><ul><li>（1）“多线程”，第一、最大的问题在于线程本身的调度和运行需 要很多时间，因此不建议自己创建太大量的线程；第二、共享资源的调度 比较难，涉及到死锁，上锁等相关的概念。</li><li>（2）“异步” ，异步最大的问题在于“回调”，这增加了软件设 计上的难度。 在实际设计时，我们可以将两者结合起来：</li><li>（1）当需要执行 I/O 操作时，使用异步操作比使用线程+同步 I/O 操作更合适。I/O 操作不仅包括了直接的文件、网络的读写，还包括数据 库操作、Web Service、HttpRequest 以及.net Remoting 等跨进程的调用。 异步特别适用于大多数 IO 密集型的应用程序。</li><li>（2）而线程的适用范围则是那种需要长时间 CPU 运算的场合，例如 耗时较长的图形处理和算法执行。但是往 往由于使用线程编程的简单和 符合习惯，所以很多朋友往往会使用线程来执行耗时较长的 I/O 操作。这 样在只有少数几个并发操作的时候还无伤大雅，如果需要处 理大量的并 发操作时就不合适了。</li></ul><h1 id="三、跨域、同源策略" tabindex="-1"><a class="header-anchor" href="#三、跨域、同源策略" aria-hidden="true">#</a> <strong>三、跨域、同源策略</strong></h1><p><strong><strong>为什么会出现跨域问题</strong></strong></p><blockquote><p>出于浏览器的同源策略限制。同源策略（Sameoriginpolicy）是一种约定，它是浏览器最核心也最基本的安全功能，如果缺少了同源策略，则浏览器的正常功能可能都会受到影响。可以说Web是构建在同源策略基础之上的，浏览器只是针对同源策略的一种实现。同源策略会阻止一个域的javascript脚本和另外一个域的内容进行交互。所谓同源（即指在同一个域）就是两个页面具有相同的协议（protocol），主机（host）和端口号（port）</p></blockquote><p><strong><strong>什么是跨域</strong></strong></p><blockquote><p>当一个请求url的协议、域名、端口三者之间任意一个与当前页面url不同即为跨域</p></blockquote><table><thead><tr><th>当前页面url</th><th>被请求页面url</th><th>是否跨域</th><th>原因</th></tr></thead><tbody><tr><td>http://www.test.com/</td><td>http://www.test.com/index.html</td><td>否</td><td>同源（协议、域名、端口号相同）</td></tr><tr><td>http://www.test.com/</td><td>https://www.test.com/index.html</td><td>跨域</td><td>协议不同（http/https）</td></tr><tr><td>http://www.test.com/</td><td>http://www.baidu.com/</td><td>跨域</td><td>主域名不同（test/baidu）</td></tr><tr><td>http://www.test.com/</td><td>http://blog.test.com/</td><td>跨域</td><td>子域名不同（www/blog）</td></tr><tr><td>http://www.test.com:8080/</td><td>http://www.test.com:7001/</td><td>跨域</td><td>端口号不同（8080/7001）</td></tr></tbody></table><p><strong><strong>非同源限制</strong></strong></p><ul><li>【1】无法读取非同源网页的 Cookie、LocalStorage 和 IndexedDB</li><li>【2】无法接触非同源网页的 DOM</li><li>【3】无法向非同源地址发送 AJAX 请求</li></ul><h1 id="四、跨域解决方法" tabindex="-1"><a class="header-anchor" href="#四、跨域解决方法" aria-hidden="true">#</a> <strong>四、跨域解决方法</strong></h1><p><strong><strong>常见解决办法</strong></strong></p><p><strong>前端解决跨域（面试回答前三即可）</strong></p><ul><li>1. JSONP：（JSONP 是服务器与客户端跨源通信的常用方法。最大特点就是简单适用，兼容性好（兼容低版本IE），缺点是只支持get请求，不支持post请求。）</li><li>2. 服务器代理：服务器代理（后端不存在跨域，使用代理后端转发请求）</li><li>3. CORS：（普通跨域请求：只需服务器端设置Access-Control-Allow-Origin；带cookie跨域请求：前后端都需要进行设置）</li><li><ol start="4"><li>设置document.domain解决无法读取非同源网页的 Cookie问题</li></ol></li><li><ol start="5"><li>跨文档通信 API：window.postMessage()</li></ol></li></ul><p><strong>后端解决跨域</strong></p><ul><li>1. 服务器配置：服务器端对于CORS的支持，主要是通过设置Access-Control-Allow-Origin来进行的。如果浏览器检测到相应的设置，就可以允许Ajax进行跨域的访问。</li><li>2. Websocket：Websocket 是 HTML5 的一个持久化的协议，它实现了浏览器与服务器的全双工通信，同时也是跨域的一种解决方案。</li><li>3. Nginx 反向代理：使用 nginx 反向代理实现跨域，是最简单的跨域方式。只需要修改 nginx 的配置即可解决跨域问题，支持所有浏览器，支持 session，不需要修改任何代码，并且不会影响服务器性能。</li></ul><p><strong><strong>1. 设置document.domain解决无法读取非同源网页的 Cookie问题</strong></strong></p><blockquote><p>因为浏览器是通过document.domain属性来检查两个页面是否同源，因此只要通过设置相同的document.domain，两个页面就可以共享Cookie（此方案仅限主域相同，子域不同的跨域应用场景。）</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 两个页面都设置
document.domain = &#39;test.com&#39;;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>2. 跨文档通信 API：window.postMessage()</strong></strong></p><p>调用postMessage方法实现父窗口http://test1.com向子窗口http://test2.com发消息（子窗口同样可以通过该方法发送消息给父窗口）</p><p>它可用于解决以下方面的问题：</p><ul><li>页面和其打开的新窗口的数据传递</li><li>多窗口之间消息传递</li><li>页面与嵌套的iframe消息传递</li><li>上面三个场景的跨域数据传递</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 父窗口打开一个子窗口
var openWindow = window.open(&#39;http://test2.com&#39;, &#39;title&#39;);

// 父窗口向子窗口发消息(第一个参数代表发送的内容，第二个参数代表接收消息窗口的url)
openWindow.postMessage(&#39;Nice to meet you!&#39;, &#39;http://test2.com&#39;);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用message事件，监听对方发送的消息</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 监听 message 消息
window.addEventListener(&#39;message&#39;, function (e) {
    console.log(e.source); // e.source 发送消息的窗口
    console.log(e.origin); // e.origin 消息发向的网址
    console.log(e.data);   // e.data   发送的消息
},false);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>3. JSONP</strong></strong></p><blockquote><p>JSONP 是服务器与客户端跨源通信的常用方法。最大特点就是简单适用，兼容性好（兼容低版本IE），缺点是只支持get请求，不支持post请求。</p></blockquote><p>核心思想：网页通过添加一个&lt;script&gt;元素，向服务器请求 JSON 数据，服务器收到请求后，将数据放在一个指定名字的回调函数的参数位置传回来。</p><p><strong>①原生实现：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script src=&quot;http://test.com/data.php?callback=dosomething&quot;&gt;&lt;/script&gt;
// 向服务器test.com发出请求，该请求的查询字符串有一个callback参数，用来指定回调函数的名字

// 处理服务器返回回调函数的数据
&lt;script type=&quot;text/javascript&quot;&gt;
    function dosomething(res){
        // 处理获得的数据
        console.log(res.data)
    }
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>② jQuery ajax：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$.ajax({
    url: &#39;http://www.test.com:8080/login&#39;,
    type: &#39;get&#39;,
    dataType: &#39;jsonp&#39;,  // 请求方式为jsonp
    jsonpCallback: &quot;handleCallback&quot;,    // 自定义回调函数名
    data: {}
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>③ Vue.js</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>this.$http.jsonp(&#39;http://www.domain2.com:8080/login&#39;, {
    params: {},
    jsonp: &#39;handleCallback&#39;
}).then((res) =&gt; {
    console.log(res);
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>4. CORS</strong></strong></p><blockquote><p>CORS 是跨域资源分享（Cross-Origin Resource Sharing）的缩写。它是 W3C 标准，属于跨源 AJAX 请求的根本解决方法。</p></blockquote><ul><li>1、普通跨域请求：只需服务器端设置<code>Access-Control-Allow-Origin</code></li><li>2、带cookie跨域请求：前后端都需要进行设置</li></ul><p><strong>【前端设置】根据xhr.withCredentials字段判断是否带有cookie</strong></p><p><strong>①原生ajax</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var xhr = new XMLHttpRequest(); // IE8/9需用window.XDomainRequest兼容
// 前端设置是否带cookie
xhr.withCredentials = true;

xhr.open(&#39;post&#39;, &#39;http://www.domain2.com:8080/login&#39;, true);
xhr.setRequestHeader(&#39;Content-Type&#39;, &#39;application/x-www-form-urlencoded&#39;);
xhr.send(&#39;user=admin&#39;);

xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 &amp;&amp; xhr.status == 200) {
        alert(xhr.responseText);
    }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>② jQuery ajax</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$.ajax({
    url: &#39;http://www.test.com:8080/login&#39;,
    type: &#39;get&#39;,
    data: {},
    xhrFields: {
        withCredentials: true    // 前端设置是否带cookie
    },
    crossDomain: true,   // 会让请求头中包含跨域的额外信息，但不会含cookie
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>③vue-resource</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Vue.http.options.credentials = true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>④ axios</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>axios.defaults.withCredentials = true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>【服务端设置】</strong></strong></p><blockquote><p>服务器端对于CORS的支持，主要是通过设置Access-Control-Allow-Origin来进行的。如果浏览器检测到相应的设置，就可以允许Ajax进行跨域的访问。</p></blockquote><p><strong>① Java后台</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/*
* 导入包：import javax.servlet.http.HttpServletResponse;
* 接口参数中定义：HttpServletResponse response
*/

// 允许跨域访问的域名：若有端口需写全（协议+域名+端口），若没有端口末尾不用加&#39;/&#39;
response.setHeader(&quot;Access-Control-Allow-Origin&quot;, &quot;http://www.domain1.com&quot;);

// 允许前端带认证cookie：启用此项后，上面的域名不能为&#39;*&#39;，必须指定具体的域名，否则浏览器会提示
response.setHeader(&quot;Access-Control-Allow-Credentials&quot;, &quot;true&quot;);

// 提示OPTIONS预检时，后端需要设置的两个常用自定义头
response.setHeader(&quot;Access-Control-Allow-Headers&quot;, &quot;Content-Type,X-Requested-With&quot;);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>② Nodejs后台</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var http = require(&#39;http&#39;);
var server = http.createServer();
var qs = require(&#39;querystring&#39;);

server.on(&#39;request&#39;, function(req, res) {
    var postData = &#39;&#39;;

    // 数据块接收中
    req.addListener(&#39;data&#39;, function(chunk) {
        postData += chunk;
    });

    // 数据接收完毕
    req.addListener(&#39;end&#39;, function() {
        postData = qs.parse(postData);

        // 跨域后台设置
        res.writeHead(200, {
            &#39;Access-Control-Allow-Credentials&#39;: &#39;true&#39;,     // 后端允许发送Cookie
            &#39;Access-Control-Allow-Origin&#39;: &#39;http://www.domain1.com&#39;,    // 允许访问的域（协议+域名+端口）
            /*
                * 此处设置的cookie还是domain2的而非domain1，因为后端也不能跨域写cookie(nginx反向代理可以实现)，
                * 但只要domain2中写入一次cookie认证，后面的跨域接口都能从domain2中获取cookie，从而实现所有的接口都能跨域访问
                */
            &#39;Set-Cookie&#39;: &#39;l=a123456;Path=/;Domain=www.domain2.com;HttpOnly&#39;  // HttpOnly的作用是让js无法读取cookie
        });

        res.write(JSON.stringify(postData));
        res.end();
    });
});

server.listen(&#39;8080&#39;);
console.log(&#39;Server is running at port 8080...&#39;);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>③ PHP后台</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?php
    header(&quot;Access-Control-Allow-Origin:*&quot;);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>④ Apache需要使用mod_headers模块来激活HTTP头的设置，它默认是激活的。你只需要在Apache配置文件的&lt;Directoryg&gt;, &lt;Location&gt;, &lt;Files&gt;或&lt;VirtualHost&gt;的配置里加入以下内容即可</strong></strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Header set Access-Control-Allow-Origin *
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><strong>5. webpack本地代理</strong></strong></p><p>在webpack.config.js中利用 WebpackDevServer 配置本地代理，详情配置查看devServer</p><p>如下简单配置案例，这样 <code>http://localhost:8080/api/getUser.php</code> 的请求就是后端的接口 <code>http://192.168.25.20:8088/getUser.php</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>devServer: {
    port: 8080,
    proxy: {
        &quot;/api&quot;: {
          target: &quot;http://192.168.25.20:8088&quot; // 后端接口
        }
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>6. websocket</strong></strong></p><p>Websocket 是 HTML5 的一个持久化的协议，它实现了浏览器与服务器的全双工通信，同时也是跨域的一种解决方案。WebSocket 和 HTTP 都是应用层协议，都基于 TCP 协议。但是 WebSocket 是一种双向通信协议，在建立连接之后，</p><p>WebSocket 的 服务器与 客户端都能主动向对方发送或接收数据。同时，WebSocket 在建立连接时需要借助 HTTP 协议，连接建立好了之后 client 与 server 之间的双向通信就与 HTTP 无关了。</p><p><strong><strong>7. Nginx反向代理</strong></strong></p><p>实现原理类似于 Node 中间件代理，需要你搭建一个中转 nginx 服务器，用于转发请求。</p><p>使用 nginx 反向代理实现跨域，是最简单的跨域方式。只需要修改 nginx 的配置即可解决跨域问题，支持所有浏览器，支持 session，不需要修改任何代码，并且不会影响服务器性能。</p><p>我们只需要配置nginx，在一个服务器上配置多个前缀来转发http/https请求到多个真实的服务器即可。这样，这个服务器上所有url都是相同的域 名、协议和端口。因此，对于浏览器来说，这些url都是同源的，没有跨域限制。而实际上，这些url实际上由物理服务器提供服务。这些服务器内的 javascript可以跨域调用所有这些服务器上的url。</p><p>先下载nginx，然后将 nginx 目录下的 nginx.conf 修改如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
    #nginx监听所有localhost:8080端口收到的请求
    listen       8080;
    server_name  localhost;

    # Load configuration files for the default server block.
    include /etc/nginx/default.d//*.conf;
    #localhost:8080 会被转发到这里
    #同时, 后端程序会接收到 &quot;192.168.25.20:8088&quot;这样的请求url
    location / {
        proxy_pass http://192.168.25.20:8088;
    }
    #localhost:8080/api/ 会被转发到这里
    #同时, 后端程序会接收到 &quot;192.168.25.20:9000/api/&quot;这样的请求url
    location /api/ {
        proxy_pass http://192.168.25.20:9000;
    }
    error_page 404 /404.html;
        location = /40x.html {
    }
    error_page 500 502 503 504 /50x.html;
        location = /50x.html {
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="五、vue开发环境跨域解决方法" tabindex="-1"><a class="header-anchor" href="#五、vue开发环境跨域解决方法" aria-hidden="true">#</a> <strong>五、Vue开发环境跨域解决方法</strong></h1><p><strong><strong>Vue-Cli2环境</strong></strong></p><blockquote><p>配置proxyTable</p></blockquote><p><strong><strong>Vue-Cli3环境</strong></strong></p><blockquote><p>配置proxy</p></blockquote>`,155),o={href:"https://blog.csdn.net/weixin_40851188/article/details/90648666",target:"_blank",rel:"noopener noreferrer"},u={href:"https://blog.csdn.net/qq_38128179/article/details/84956552",target:"_blank",rel:"noopener noreferrer"},m={href:"https://zhuanlan.zhihu.com/p/202556039",target:"_blank",rel:"noopener noreferrer"};function b(p,g){const i=d("ExternalLinkIcon");return r(),t("div",null,[c,e("p",null,[n("本文参考"),e("a",o,[n("什么是JavaScript异步编程？"),s(i)]),n(" "),e("a",u,[n("什么是跨域？跨域解决方法"),s(i)])]),e("p",null,[e("a",m,[n("浅析JS中跨域"),s(i)])])])}const x=l(v,[["render",b],["__file","异步.html.vue"]]);export{x as default};
