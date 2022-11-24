import{_ as d,r as v,o as a,c as r,b as n,d as i,e as l,a as s}from"./app.74a5dc6f.js";const c={},u=s(`<h1 id="作用域" tabindex="-1"><a class="header-anchor" href="#作用域" aria-hidden="true">#</a> 作用域</h1><h1 id="javascript作用域、作用域链、闭包、执行上下文" tabindex="-1"><a class="header-anchor" href="#javascript作用域、作用域链、闭包、执行上下文" aria-hidden="true">#</a> <strong>JavaScript作用域、作用域链、闭包、执行上下文</strong></h1><h1 id="一、作用域-scope" tabindex="-1"><a class="header-anchor" href="#一、作用域-scope" aria-hidden="true">#</a> <strong>一、作用域 scope</strong></h1><p><strong><strong>函数作用域</strong></strong></p><p>通常来说，一段程序代码中所用到的名字并不总是有效和可用的，而限定这个名字的可用性代码范围就是这个名字的作用域，作用域的使用提高了程序逻辑的局限性，增强了程序的可靠性，减少了名字冲突。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 1.JavaScript作用域：就是代码名字(变量)在某个范围内起作用和效果  目的是为了提高程序的可靠性 更重要的是减少命名冲突
// 2.js的作用域(es6)之前：全局作用域  局部作用域
// 3.全局作用域：整个script标签 或者是一个单独的js文件
var num = 10;
console.log(num);
// 4.局部作用域(函数作用域) 在函数内部就是局部作用域 这个代码的名字只在函数内部起效果和作用
function fn() {
    // 局部作用域
    var num = 20;
    console.log(num);
}
fn();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>是在 es6 的时候新增的块级作用域，块级作用域{} if{} for{}</p><p><strong><strong>变量作用域（var）</strong></strong></p><p>在JavaScript中，根据作用域的不同，变量可以分为两种：/p&gt;</p><ul><li>全局变量</li><li>局部变量</li></ul><p><strong>全局变量</strong></p><p>在全局作用域下声明的变量叫做全局变量（在函数外部定义的变量）。</p><ul><li>全局变量在代码中的任何位置都可以使用</li><li>特殊情况下，在函数内不使用var声明的变量也是全局变量（不建议使用）</li></ul><p><strong>局部变量</strong></p><p>在局部作用域下声明的变量叫做局部变量（在函数内部定义的变量）。</p><ul><li>局部变量只能在该函数内部使用</li><li>函数的形参实际上就是局部变量</li></ul><p><strong>全局变量和局部变量的区别</strong></p><ul><li>全局变量：在任何一个地方都可以使用，只有在浏览器关闭时才会被销毁，因此比较占内存</li><li>局部变量：只在函数内部使用，当其所在的代码块被执行时，会被初始化；当代码块运行结束后，就会被销毁，因此更节省内存空间</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 变量的作用域： 根据作用域的不同我们变量分为全局变量和局部变量
// 1.全局变量：在全局作用域下的变量  在全局都可以使用
// 注意 如果在函数内部没有声明直接赋值的变量也属于全局变量
var num = 10; //num就是一个全局变量
console.log(num);

function fn() {
    console.log(num);

}
fn();
// 2.局部变量  在局部作用域下的变量  或者在函数内部的变量就是 局部变量
// 注意 函数的形参也可以看做是局部变量
function fun() {
    var num1 = 10; //num1就是局部变量 只能在函数内部使用
    num2 = 20; //在函数内部没有声明直接赋值的变量  全局变量

}
fun();
// console.log(num1);
console.log(num2);
// 3.从执行效率来看全局变量和局部变量
// (1)全局变量只有浏览器关闭的时候才会销毁，比较占内存资源
// (2)局部变量 当我们程序执行完毕就会销毁，比较节约内存资源

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>JavaScript 有两种作用域：全局作用域和局部作用域。</p></blockquote><p>JavaScript 中，在函数体内 var 声明的变量是函数级作用域，是局部变量，在本函数体内可以访问，而且是在函数体内任意位置可以访问</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// JS 代码
function test() {
    console.log(val);
    var val = &#39;this is val&#39;;
    console.log(val);

    func();
    function func() {
        for (var i = 0; i &lt; 5; i++) {
        }
        console.log(&#39;i: &#39;, i);
        console.log(&#39;this is func&#39;);
    }
}

test();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码结果是：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>undefined
this is val
i:  5
this is func

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>JavaScript 解析器预解析代码的时候， test 函数作如下解析：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function test() {
    // 变量提升, 缺省值是 undefined
    var val;

    // 函数声明提升
    function func() {
        // 变量提升
        var i;

        for (i = 0, i &lt; 5, i++) {
        }
        console.log(&#39;i: &#39;, i);
        console.log(&#39;this is func&#39;);
    }

    console.log(val);
    // 变量赋值
    val = &#39;this is val&#39;;
    console.log(val);

    func();
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以第一次 console.log(val) 时候并不会抛异常， 因为此时变量 val 是被声明过的，值是 undefined。 理解 变量提升 ，写代码时应注意 变量污染 的坑。</p><h1 id="二、作用域链" tabindex="-1"><a class="header-anchor" href="#二、作用域链" aria-hidden="true">#</a> <strong>二、作用域链</strong></h1><p><strong><strong>作用域链</strong></strong></p><blockquote><p>作用域链包含了执行环境有权访问的所有变量和访问顺序。</p><p>作为单线程语言的 JavaScript，初始化代码时会创建一个全局上下文，每一次函数调用都会创建一个执行上下文，执行上下文及包含关系：</p><ul><li>只要是代码，就至少有一个作用域</li><li>写在函数内部的局部作用域</li><li>如果函数中还有函数，那么在这个作用域中就又可以诞生一个作用域</li><li>根据在内部函数可以访问外部函数变量这种机制，用链式查找决定哪些数据能被内部函数访问，就称作作用域链</li></ul></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 作用域链：内部函数访问外部函数的变量，采取的是链式查找的方式来决定取哪个值 这种结构我们成为作用域链 （就近原则）
var num = 10;

function fn() { //外部函数
    var num = 20;

    function fun() { //内部函数
        console.log(num);
    }
    fun();
}
fn();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>变量对象 <ul><li>变量</li><li>函数声明</li><li>参数(arguments)</li></ul></li><li>作用域链 <ul><li>有权访问的变量和访问顺序（本作用域变量和所有父作用域变量）。即函数内部属性 scope : 本函数有权访问的[变量、对象、函数]的集合</li><li>this 值</li></ul></li></ul><p>如下代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function func_1() {
    var val_1 = 1;
    // 抛异常： ReferenceError: val_2 is not defined
    console.log(val_1, val_2);

    function func_2() {
        var val_2 = 2;
        // 输出：1 2
        console.log(val_1, val_2);
    }

    func_2();
}

func_1();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简言之， func_1 不能访问 func_2 中声明的变量， func_2 可以访问 func_1 中声明的变量。</p><p>当在作用域内访问一个变量 x 时，JavaScript 的查找顺序是这样的：</p><p>当前作用域 var x 的定义 =&gt; 2. x 形参 =&gt; 3. 函数自身名称是否是 x =&gt; 4. 上级作用域从 1 开始查找</p><p><strong>ES6 中的 let 和 const</strong></p><blockquote><p>ES6 的 let 和 const 实现了块级所用域的变量声明方式，使用 let 和 const 声明变量能有效避免由于变量提升导致的变量污染的问题。</p></blockquote><p>用 let 和 const 声明的变量作用域是代码块，这个设计比较符合大多数人的思维方式。（代码块简单来说就是 {} 大括号包着的区域）</p><p>关于 const 的作用有必要正确理解： 严格来说， const 声明了一个指向变量的指针，并不是说 const 声明的变量不可改变， 而是该指针指向的地址不可改变。</p><p><strong><strong>this</strong></strong></p><blockquote><p>简言之： this 总是指向调用该函数的对象。</p></blockquote><p><strong><strong>预解析</strong></strong></p><blockquote><p>JavaScript代码是由浏览器中的JavaScript解析器来执行的。JavaScript解析器在运行JavaScript代码的时候分为两步：预解析和代码执行。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 1问
// console.log(num);

// 2问
    console.log(num); //undefined   坑1
    var num = 10;
    // 相当于执行了以下代码
    // var num;
    // console.log(num);
    // var num = 10;

// 3问  （函数提升）
    fn();
    function fn() {
        console.log(11);
    }

// 4问
    fun(); //报错 坑2
    var fun = function() {
        console.log(22);
    }
    // 函数表达式 调用 必须写在函数表达式的下面
    // 相当于执行了以下代码
    // var fun;
    // fun();
    // fun = function() {
    //     console.log(22);
    // }

// 1.我们js引擎运行js分为两步： 预解析  代码执行
    // (1)预解析 js引擎会把js 里面所有的var 还有function 提升到当前作用域的最前面
    // (2)代码执行  按照代码书写的顺序从上往下执行
// 2.预解析分为 变量预解析（变量提升） 和 函数预解析（函数提升）
    // (1)变量提升 就是把所有的变量声明提升到当前的作用域最前面 不提升赋值操作
    // (2)函数提升 就是把所有的函数声明提升到当前作用域的最前面 不调用函数

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>预解析案例</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 案例1  undefined
var num = 10;
fun();

function fun() {
    console.log(num);
    var num = 20;
}
// 相当于执行了以下操作
// var num;
// function fun() {
//     var num;
//     console.log(num);
//     num = 20;
// }
// num = 10;
// fun();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 案例2
f1();
console.log(c);
console.log(b);
console.log(a);

function f1() {
    var a = b = c = 9;
    console.log(a);
    console.log(b);
    console.log(c);
}

// 相当于以下代码
function f1() {
    var a;
    a = b = c = 9;
    // var a = b = c = 9;
    // 相当于 var a = 9; b = 9; c = 9;   b和c直接赋值 没有var声明 当全局变量看
    // 集体声明 var a = 9, b = 9, c = 9;
    console.log(a); //9
    console.log(b); //9
    console.log(c); //9
}
f1();
console.log(c); //9
console.log(b); //9
console.log(a); //报错

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 案例3   undefined，20
var num = 10;

function fn() {
    console.log(num);
    var num = 20;
    console.log(num);
}
fn();
// 相当于以下代码
// var num;
// function fn() {
//     var num;
//     console.log(num);
//     num = 20;
//     console.log(num);
// }
// num = 10;
// fn();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="三、闭包-closure" tabindex="-1"><a class="header-anchor" href="#三、闭包-closure" aria-hidden="true">#</a> <strong>三、闭包（closure）</strong></h1><p><strong><strong>什么是闭包？</strong></strong></p><blockquote><p>闭包是指有权访问另一个函数作用域中变量的函数</p></blockquote><p>简单理解：一个作用域可以访问另一个函数内部的局部变量</p><p><strong><strong>闭包的作用</strong></strong></p><blockquote><p>延申了变量的作用范围</p></blockquote><p>JavaScript的变量作用域分为全局作用域和局部作用域。在JavaScript（特指es5前的版本）语言中具有作用域的仅有函数function。并且有个特点就是：函数内部可以直接访问外部变量，但在函数外部无法访问函数内部变量。这也就是Javascript语言特有的“作用域链”结构。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function fn() {
    var num = 10;
    return function() {
        console.log(num)
    }
}
var f = fn();
f();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>使用注意</strong></strong></p><p>由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，在IE中可能导致内存泄露。解决方法是，在退出函数之前，将不使用的局部变量全部删除。</p><p>闭包会在父函数外部，改变父函数内部变量的值。所以，如果你把父函数当作对象（object）使用，把闭包当作它的公用方法（Public Method），把内部变量当作它的私有属性（private value），这时一定要小心，不要随便改变父函数内部变量的值。</p><p>闭包和内存泄漏的理解</p>`,62),o={href:"http://www.ruanyifeng.com/blog/2009/08/learning_javascript_closures.html",target:"_blank",rel:"noopener noreferrer"},t={href:"https://www.cnblogs.com/rubylouvre/p/3345294.html",target:"_blank",rel:"noopener noreferrer"},m=s(`<h1 id="四、执行上下文" tabindex="-1"><a class="header-anchor" href="#四、执行上下文" aria-hidden="true">#</a> <strong>四、执行上下文</strong></h1><blockquote><p>执行上下文：指当前执行环境中的变量、函数声明，参数（arguments），作用域链，this等信息。分为全局执行上下文、函数执行上下文，其区别在于全局执行上下文只有一个，函数执行上下文在每次调用函数时候会创建一个新的函数执行上下文。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const ExecutionContextObj = {
    VO: window, // 变量对象
    ScopeChain: {}, // 作用域链
    this: window
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>执行上下文生命周期</strong></p><ul><li>创建阶段 <ul><li>生成变量对象 <ul><li>创建arguments</li><li>扫描函数声明</li><li>扫描变量声明</li></ul></li><li>建立作用域链</li><li>确定this的指向</li></ul></li><li>执行阶段 <ul><li>变量赋值</li><li>函数的引用</li><li>执行其他代码</li></ul></li></ul><p><strong><strong>执行上下文栈</strong></strong></p><p>执行上下文栈的作用是用来跟踪代码的，由于JS是单线程的，每次只能做一件事情，其他的事情会放在指定的上下文栈中排队等待执行。</p><p>JS解释器在初始化代码的时候，首先会创建一个新的全局执行上下文到执行上下文栈顶中，然后随着每次函数的调用都会创建一个新的执行上下文放入到栈顶中，随着函数执行完毕后被执行上下文栈顶弹出，直到回到全局的执行上下文中。（栈：一种数据结构，遵循后进先出的原则）。示例如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function getName() {
    const year = getYear();

    const name = &#39;Lynn&#39;;
    console.log(\`\${name} \${year} years old this year\`);
}

function getYear() {
    return 18;
}

getName();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),b={href:"https://github.com/Dongss/dogs/blob/v2/posts/javascript/3.md",target:"_blank",rel:"noopener noreferrer"};function g(p,f){const e=v("ExternalLinkIcon");return a(),r("div",null,[u,n("p",null,[n("a",o,[i("学习Javascript闭包（Closure）"),l(e)]),n("a",t,[i("闭包回收测试"),l(e)])]),m,n("p",null,[i("本文参考："),n("a",b,[i("JavaScript 变量作用域、this、闭包"),l(e)])])])}const x=d(c,[["render",g],["__file","作用域.html.vue"]]);export{x as default};
