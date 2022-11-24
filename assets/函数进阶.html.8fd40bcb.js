import{_ as l,r as a,o as d,c as r,b as n,d as e,e as s,a as t}from"./app.74a5dc6f.js";const v={},c=t(`<h1 id="函数进阶" tabindex="-1"><a class="header-anchor" href="#函数进阶" aria-hidden="true">#</a> 函数进阶</h1><h1 id="javascript函数进阶、this指向-call、apply、bind-、严格模式" tabindex="-1"><a class="header-anchor" href="#javascript函数进阶、this指向-call、apply、bind-、严格模式" aria-hidden="true">#</a> <strong>JavaScript函数进阶、this指向（call、apply、bind）、严格模式</strong></h1><h1 id="一、函数进阶" tabindex="-1"><a class="header-anchor" href="#一、函数进阶" aria-hidden="true">#</a> <strong>一、函数进阶</strong></h1><p><strong><strong>函数的定义方式</strong></strong></p><ul><li>函数声明</li><li>函数表达式</li><li>new Function</li></ul><p>函数声明与函数表达式的区别</p><ul><li>函数声明必须有名字</li><li>函数声明会函数提升，在预解析阶段就已创建，声明前后都可以调用</li><li>函数表达式类似于变量赋值</li><li>函数表达式可以没有名字，例如匿名函数</li><li>函数表达式没有变量提升，在执行阶段创建，必须在表达式执行之后才可以调用</li></ul><p><strong><strong>高阶函数</strong></strong></p><ul><li>函数可以作为参数</li><li>函数可以作为返回值</li></ul><p>作为参数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function eat (callback) {
  setTimeout(function () {
    console.log(&#39;吃完了&#39;)
    callback()
  }, 1000)
}

eat(function () {
  console.log(&#39;去唱歌&#39;)
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>作为返回值</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function genFun (type) {
  return function (obj) {
    return Object.prototype.toString.call(obj) === type
  }
}

var isArray = genFun(&#39;[object Array]&#39;)
var isObject = genFun(&#39;[object Object]&#39;)

console.log(isArray([])) // =&gt; true
console.log(isArray({})) // =&gt; true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>函数递归</strong></strong></p><blockquote><p>递归函数：是指函数直接或间接调用函数本身，则称该函数为递归函数。</p></blockquote><p>这句话理解起来并不难，从概念上出发，给出以下的例子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function foo(){
  console.log(&quot;函数 foo 是递归函数。&quot;);
  foo();
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个例子的 foo 函数就是一个递归函数。</p><p>当你把这个函数拿到浏览器上运行的时候，你会发现内存溢出了，为什么呢？因为这个递归函数没有停止处理或运算的出口，因此这个递归函数就演变为一个死循环。</p><p>使用递归函数必须要符合两个条件：</p><ul><li>在每一次调用自己时，必须是（在某种意义上）更接近于解；</li><li>必须有一个终止处理或计算的出口。</li></ul><p><strong>递归应用场景</strong></p><ul><li>深拷贝</li><li>菜单树</li><li>遍历 DOM 树</li></ul><h1 id="二、this指向" tabindex="-1"><a class="header-anchor" href="#二、this指向" aria-hidden="true">#</a> <strong>二、this指向</strong></h1><p><strong><strong>this指向核心</strong></strong></p><p>使用 JavaScript 开发的时候，很多开发者多多少少会被 this 的指向搞蒙圈，但是实际上，关于 this 的指向，记住最核心的一句话：</p><p>哪个对象调用函数，函数里面的this指向哪个对象。</p><p>分几种情况，下面描述下对应情况指向问题</p><p><strong><strong>普通函数调用</strong></strong></p><p>这个情况没特殊意外，就是指向全局对象-window。</p><p><strong>1、使用let</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/*普通函数调用*/
let username = &quot;小明&quot;;
function fn(){
    console.log(this.username);   //undefined
}
fn();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用node输出的是：undefined 使用谷歌浏览器console输出的是：undefined</p><p><strong>2、使用var</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var name = &quot;小明&quot;;
function fn(){
    console.log(this.name);
}
fn();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用node输出的是：undefined</p><p>使用谷歌浏览器console输出的是：小明</p><p><strong>3、使用window</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>window.username=&#39;小明&#39;
function fn(){
    console.log(this.username);
}
fn();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用node输出的是：报错，window没有定义</p><p>使用谷歌浏览器console输出的是：</p><p>PS：为什么会出现这个错误呢，因为node里面没有window 对象，浏览器中有window对象。</p><p><strong>4、let和var区别：</strong></p><p><strong>（1）let 允许把变量的作用域限制在块级域中；var 申明变量要么是全局的，要么是函数级的，而无法是块级的。</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let varClass = function(){
    var name=&#39;小明&#39;;
    if(true){
        var name=&#39;saucxs&#39;;
        console.log(name);
    }
    console.log(name);
}
varClass();
// saucxs
// saucxs

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let letClass = function(){
    let name=&#39;小明&#39;;
    if(true){
        let name=&#39;saucxs&#39;;
        console.log(name);
    }
    console.log(name);
}
letClass();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的结果说明了let只在｛｝内使用。</p><p><strong>（2）先let后var</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let subClass = function(){
    let name=&#39;小明&#39;;
    if(true){
        var name=&#39;saucxs&#39;;
        console.log(name);
    }
    console.log(name);
}
subClass();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>var 是函数级作用域，相当于一个作用域中有两个n的变量了</p><p>var 作用于整个 subClass ，和let冲突了，let不能重复声明，already been declared=已经被声明</p><p><strong>（3）先var后let</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let subClass = function(){
    var name=&#39;小明&#39;;
    if(true){
        let name=&#39;saucxs&#39;;
        console.log(name);
    }
    console.log(name);
}
subClass();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>先申明var，再申明let，这个没有问题。</p><p><strong><strong>对象函数调用</strong></strong></p><p>这个相信不难理解，就是哪个函数调用，this指向哪里。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/*对象函数调用*/
//window.name=&#39;小明&#39;;
//var name=&#39;小明&#39;;
let name=&#39;小明&#39;;
let obj={
    id:201102304,
    fn:function(){
        console.log(this.name);  //undefined
        console.log(this.id);   //201102304
    }
}
obj.fn();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>很明显，第一次就是输出 obj.name ，但是没有这个name属性，输出的结果undefined。而第二次输出obj.id，有这个id属性，输出 201102304，因为 this 指向 obj 。</p><p>有一种情况需要注意：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/*需要注意的情况*/
let obj1={
    a:111
}
let obj2={
    a:222,
    fn:function(){
        console.log(this.a);
    }
}
obj1.fn=obj2.fn;
obj1.fn();  //111

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个也不难理解，虽然 obj1.fn 是从 obj2.fn 赋值而来，但是调用函数的是 obj1 ，所以 this 指向 obj1 。</p><p><strong><strong>构造函数调用</strong></strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/*构造函数调用*/
let structureClass=function(){
    this.name=&#39;小明&#39;;
}
let subClass1=new structureClass();
console.log(subClass1.name);

let subClass=new structureClass();
subClass.name=&#39;成才&#39;;
console.log(subClass.name);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是有一个坑，虽然一般不会出现，但是有必要提一下。</p><p>在构造函数里面返回一个对象，会直接返回这个对象，而不是执行构造函数后创建的对象</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let structureClass=function(){
    this.name=&#39;小明&#39;;
    return {
        username:&#39;saucxs&#39;
    }
}
let subClass1=new structureClass();
console.log(subClass1);
console.log(subClass1.name);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>apply和call调用</strong></strong></p><p>1、apply和call简单来说就是会改变传入函数的this。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/*apply和call调用*/
let obj1={
    name:&#39;小明&#39;
};
let obj2={
    name:&#39;saucxs&#39;,
    fn:function(){
        console.log(this.name);
    }
}
obj2.fn.call(obj1);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时虽然是 obj2 调用方法，但是使用 了 call ，动态的把 this 指向到 obj1 。相当于这个 obj2.fn 这个执行环境是 obj1 。</p><p>call 和 apply 两个主要用途：</p><ul><li>1.改变 this 的指向（把 this 从 obj2 指向到 obj1 ）</li><li>2.方法借用（ obj1 没有 fn ，只是借用 obj2 方法）</li></ul><p><strong>2、call与apply区别</strong></p><p>call 和 apply 的作用，完全一样，唯一的区别就是在参数上面。</p><ul><li>call 接收的参数不固定，第一个参数是函数体内 this 的指向，第二个参数以下是依次传入的参数。</li><li>apply接收两个参数，第一个参数也是函数体内 this 的指向。第二个参数是一个集合对象（数组或者类数组）</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/*apply和call区别*/
let fn=function(a,b,c){
    console.log(a,b,c);
}
let arrArray=[1,2,3];
fn.call(window,arrArray);
fn.apply(window,arrArray);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>箭头函数调用</strong></strong></p><p>首先不得不说，ES6 提供了箭头函数，增加了我们的开发效率，但是在箭头函数里面，没有 this ，箭头函数里面的 this 是继承外面的环境。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/*箭头函数调用*/
let obj={
    name:&#39;小明&#39;,
    fn:function(){
        setTimeout(function(){console.log(this.name)})
    }
}
obj.fn();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不难发现，虽然 fn() 里面的 this 是指向 obj ，但是，传给 setTimeout 的是普通函数， this 指向是 window ， window 下面没有 name ，所以这里输出 underfind 。</p><p>换成箭头函数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//换成箭头函数
let obj={
    name:&quot;小明&quot;,
    fn:function(){
        setTimeout(()=&gt;{console.log(this.name)});
    }
}
obj.fn();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这次输出 小明 是因为，传给 setTimeout 的是箭头函数，然后箭头函数里面没有 this ，所以要向上层作用域查找，在这个例子上， setTimeout 的上层作用域是 fn 。而 fn 里面的 this 指向 obj ，所以 setTimeout 里面的箭头函数的 this ，指向 obj 。所以输出 小明。</p><h1 id="三、call、apply、bind" tabindex="-1"><a class="header-anchor" href="#三、call、apply、bind" aria-hidden="true">#</a> <strong>三、call、apply、bind</strong></h1><p><strong><strong>call、apply、bind作用</strong></strong></p><p>在JavaScript中，call、apply和bind是Function对象自带的三个方法，这三个方法的主要作用是改变函数中的this指向。</p><p>call、apply、bind方法的共同点和区别：</p><ul><li>apply 、 call 、bind 三者都是用来改变函数的this对象的指向的；</li><li>apply 、 call 、bind 三者第一个参数都是this要指向的对象，也就是想指定的上下文（函数的每次调用都会拥有一个特殊值——本次调用的上下文（context）——这就是this关键字的值。）；</li><li>apply 、 call 、bind 三者都可以利用后续参数传参；</li><li>bind 是返回对应函数，便于稍后调用；apply 、call 则是立即调用 。</li></ul><p><strong><strong>call</strong></strong></p><p>语法：call([thisObj[,arg1[, arg2[, [,.argN]]]]])</p><p>定义：调用一个对象的一个方法，以另一个对象替换当前对象。</p><p>说明： call 方法可以用来代替另一个对象调用一个方法。</p><p>call 方法可将一个函数的对象上下文从初始的上下文改变为由 thisObj 指定的新对象。</p><p>thisObj的取值有以下4种情况：</p><ul><li>（1） 不传，或者传null,undefined， 函数中的this指向window对象</li><li>（2） 传递另一个函数的函数名，函数中的this指向这个函数的引用</li><li>（3） 传递字符串、数值或布尔类型等基础类型，函数中的this指向其对应的包装对象，如 String、Number、Boolean</li><li>（4） 传递一个对象，函数中的this指向这个对象</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function a(){
    console.log(this);   //输出函数a中的this对象
}
function b(){}
var c={name:&quot;call&quot;};    //定义对象

a.call();   //window
a.call(null);   //window
a.call(undefined);   //window
a.call(1);   //Number
a.call(&#39;&#39;);   //String
a.call(true);   //Boolean
a.call(b);   //function b(){}
a.call(c);   //Object

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你不理解上面的，没关系，我们再来看一个例子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function class1(){
    this.name=function(){
        console.log(&quot;我是class1内的方法&quot;);
    }
}
function class2(){
    class1.call(this);  //此行代码执行后，当前的this指向了class1（也可以说class2继承了class1）
}

var f=new class2();
f.name();   //调用的是class1内的方法，将class1的name方法交给class2使用

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>常用例子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function eat(x,y){
    console.log(x+y);
}
function drink(x,y){
    console.log(x-y);
}
eat.call(drink,3,2);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：5</p><p>这个例子中的意思就是用 eat 来替换 drink，eat.call(drink,3,2) == eat(3,2) ，所以运行结果为：console.log(5);</p><p>注意：js 中的函数其实是对象，函数名是对 Function 对象的引用。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function Animal(){
    this.name=&quot;animal&quot;;
    this.showName=function(){
        console.log(this.name);
    }
}
function Dog(){
    this.name=&quot;dog&quot;;
}
var animal=new Animal();
var dog=new Dog()

animal.showName.call(dog);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：dog</p><p>在上面的代码中，我们可以看到Dog里并没有showName方法，那为什么（this.name）的值是dog呢？</p><p>关键就在于最后一段代码（animal.showName.call(dog)），意思是把animal的方法放到dog上执行，也可以说，把animal 的showName()方法放到 dog上来执行，所以this.name 应该是 dog。</p><p><strong>（3）继承</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function Animal(name){
    this.name=name;
    this.showName=function(){
        console.log(this.name);
    }
}
function Dog(name){
    Animal.call(this,name);
}
var dog=new Dog(&quot;Crazy dog&quot;);
dog.showName();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：Crazy dog</p><p>Animal.call(this) 的意思就是使用 Animal对象代替this对象，那么Dog就能直接调用Animal的所有属性和方法。</p><p><strong><strong>apply()</strong></strong></p><p>语法：apply([thisObj[,argArray]])</p><p>定义：应用某一对象的一个方法，用另一个对象替换当前对象。</p><p>说明：</p><p>如果 argArray 不是一个有效的数组或者不是 arguments 对象，那么将导致一个 TypeError。</p><p>如果没有提供 argArray 和 thisObj 任何一个参数，那么 Global 对象将被用作 thisObj， 并且无法被传递任何参数。</p><p><strong>call 和 apply的区别</strong></p><p>对于 apply、call 二者而言，作用完全一样，只是接受参数的方式不太一样。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function class1(args1,args2){
    this.name=function(){
        console.log(args,args);
    }
}
function class2(){
    var args1=&quot;1&quot;;
    var args2=&quot;2&quot;;
    class1.call(this,args1,args2);
    /*或*/
    class1.apply(this,[args1,args2]);
}

var c=new class2();
c.name();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：1 2</p><p>call 需要把参数按顺序传递进去，而 apply 则是把参数放在数组里。</p><p>既然两者功能一样，那该用哪个呢？</p><p>在JavaScript 中，某个函数的参数数量是不固定的，因此要说适用条件的话，当你的参数是明确知道数量时用 call ；而不确定的时候用 apply，然后把参数 push 进数组传递进去。当参数数量不确定时，函数内部也可以通过 arguments 这个数组来遍历所有的参数。</p><p><strong><strong>bind</strong></strong></p><p>bind是在EcmaScript5中扩展的方法（IE6,7,8不支持）</p><p>bind() 方法与 apply 和 call 很相似，也是可以改变函数体内 this 的指向。</p><p>MDN的解释是：bind()方法会创建一个新函数，称为绑定函数，当调用这个绑定函数时，绑定函数会以创建它时传入 bind()方法的第一个参数作为 this，传入 bind() 方法的第二个以及以后的参数加上绑定函数运行时本身的参数按照顺序作为原函数的参数来调用原函数。</p><p>注意：bind方法的返回值是函数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var bar=function(){
    console.log(this.x);
}
var foo={
    x:3
}
bar();
bar.bind(foo)();
/*或*/
var func=bar.bind(foo);
func();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>undefined
3

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>apply、call</strong></p><p>在 javascript 中，call 和 apply 都是为了改变某个函数运行时的上下文（context）而存在的，换句话说，就是为了改变函数体内部 this 的指向。</p><p>JavaScript 的一大特点是，函数存在「定义时上下文」和「运行时上下文」以及「上下文是可以改变的」这样的概念。</p><p>先来一个栗子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function fruits() {}

fruits.prototype = {
    color: &quot;red&quot;,
    say: function() {
        console.log(&quot;My color is &quot; + this.color);
    }
}

var apple = new fruits;
apple.say();    //My color is red

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是如果我们有一个对象banana= {color : &quot;yellow&quot;} ,我们不想对它重新定义 say 方法，那么我们可以通过 call 或 apply 用 apple 的 say 方法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>banana = {
    color: &quot;yellow&quot;
}
apple.say.call(banana);     //My color is yellow
apple.say.apply(banana);    //My color is yellow

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以，可以看出 call 和 apply 是为了动态改变 this 而出现的，当一个 object 没有某个方法（本栗子中banana没有say方法），但是其他的有（本栗子中apple有say方法），我们可以借助call或apply用其它对象的方法来操作。</p><p><strong>apply、call 的区别</strong></p><p>对于 apply、call 二者而言，作用完全一样，只是接受参数的方式不太一样。例如，有一个函数定义如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var func = function(arg1, arg2) {

};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>就可以通过如下方式来调用：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>func.call(this, arg1, arg2);
func.apply(this, [arg1, arg2])

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中 this 是你想指定的上下文，他可以是任何一个 JavaScript 对象(JavaScript 中一切皆对象)，call 需要把参数按顺序传递进去，而 apply 则是把参数放在数组里。</p><p>JavaScript 中，某个函数的参数数量是不固定的，因此要说适用条件的话，当你的参数是明确知道数量时用 call 。</p><p>而不确定的时候用 apply，然后把参数 push 进数组传递进去。当参数数量不确定时，函数内部也可以通过 arguments 这个数组来遍历所有的参数。</p><p>为了巩固加深记忆，下面列举一些常用用法：</p><p><strong>1、数组之间追加</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var array1 = [12 , &quot;foo&quot; , {name &quot;Joe&quot;} , -2458];
var array2 = [&quot;Doe&quot; , 555 , 100];
Array.prototype.push.apply(array1, array2);
/* array1 值为  [12 , &quot;foo&quot; , {name &quot;Joe&quot;} , -2458 , &quot;Doe&quot; , 555 , 100] */

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2、获取数组中的最大值和最小值</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var  numbers = [5, 458 , 120 , -215 ];
var maxInNumbers = Math.max.apply(Math, numbers),   //458
maxInNumbers = Math.max.call(Math,5, 458 , 120 , -215); //458

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>number 本身没有 max 方法，但是 Math 有，我们就可以借助 call 或者 apply 使用其方法。</p><p><strong>3、验证是否是数组（前提是toString()方法没有被重写过）</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>functionisArray(obj){
    return Object.prototype.toString.call(obj) === &#39;[object Array]&#39; ;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>4、类（伪）数组使用数组方法</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var domNodes = Array.prototype.slice.call(document.getElementsByTagName(&quot;*&quot;));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Javascript中存在一种名为伪数组的对象结构。比较特别的是 arguments 对象，还有像调用 getElementsByTagName , document.childNodes 之类的，它们返回NodeList对象都属于伪数组。不能应用 Array下的 push , pop 等方法。</p><p>但是我们能通过 Array.prototype.slice.call 转换为真正的数组的带有 length 属性的对象，这样 domNodes 就可以应用 Array 下的所有方法了。</p><p><strong><strong>深入理解运用apply、call</strong></strong></p><p>下面就【借用一道面试题】，来更深入的去理解下 apply 和 call 。</p><p>定义一个 log 方法，让它可以代理 console.log 方法，常见的解决方法是：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function log(msg)　{
    console.log(msg);
}
log(1);    //1
log(1,2);    //1

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面方法可以解决最基本的需求，但是当传入参数的个数是不确定的时候，上面的方法就失效了，这个时候就可以考虑使用 apply 或者 call，注意这里传入多少个参数是不确定的，所以使用apply是最好的，方法如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function log(){
    console.log.apply(console, arguments);
};
log(1);    //1
log(1,2);    //1 2

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来的要求是给每一个 log 消息添加一个&quot;(app)&quot;的前辍，比如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>log(&quot;hello world&quot;);    //(app)hello world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该怎么做比较优雅呢?这个时候需要想到arguments参数是个伪数组，通过 Array.prototype.slice.call 转化为标准数组，再使用数组方法unshift，像这样：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function log(){
    var args = Array.prototype.slice.call(arguments);
    args.unshift(&#39;(app)&#39;);
    console.log.apply(console, args);
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>bind</strong></p><p>说完了 apply 和 call ，再来说说bind。bind() 方法与 apply 和 call 很相似，也是可以改变函数体内 this 的指向。</p><p>MDN的解释是：bind()方法会创建一个新函数，称为绑定函数，当调用这个绑定函数时，绑定函数会以创建它时传入 bind()方法的第一个参数作为 this，传入 bind() 方法的第二个以及以后的参数加上绑定函数运行时本身的参数按照顺序作为原函数的参数来调用原函数。</p><p>直接来看看具体如何使用，在常见的单体模式中，通常我们会使用 _this , that , self 等保存 this ，这样我们可以在改变了上下文之后继续引用到它。 像这样：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var foo = {
    bar : 1,
    eventBind: function(){
        var _this = this;
        $(&#39;.someClass&#39;).on(&#39;click&#39;,function(event) {
            /* Act on the event */
            console.log(_this.bar);     //1
        });
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于 Javascript 特有的机制，上下文环境在 eventBind:function(){ } 过渡到 $(&#39;.someClass&#39;).on(&#39;click&#39;,function(event) { }) 发生了改变，上述使用变量保存 this 这些方式都是有用的，也没有什么问题。当然使用 bind() 可以更加优雅的解决这个问题：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var foo = {
    bar : 1,
    eventBind: function(){
        $(&#39;.someClass&#39;).on(&#39;click&#39;,function(event) {
            /* Act on the event */
            console.log(this.bar);      //1
        }.bind(this));
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述代码里，bind() 创建了一个函数，当这个click事件绑定在被调用的时候，它的 this 关键词会被设置成被传入的值（这里指调用bind()时传入的参数）。因此，这里我们传入想要的上下文 this(其实就是 foo )，到 bind() 函数中。然后，当回调函数被执行的时候， this 便指向 foo 对象。再来一个简单的栗子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var bar = function(){
    console.log(this.x);
}
var foo = {
    x:3
}
bar(); // undefined
var func = bar.bind(foo);
func(); // 3

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里我们创建了一个新的函数 func，当使用 bind() 创建一个绑定函数之后，它被执行的时候，它的 this 会被设置成 foo ， 而不是像我们调用 bar() 时的全局作用域。</p><p>有个有趣的问题，如果连续 bind() 两次，亦或者是连续 bind() 三次那么输出的值是什么呢？像这样：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var bar = function(){
    console.log(this.x);
}
var foo = {
    x:3
}
var sed = {
    x:4
}
var func = bar.bind(foo).bind(sed);
func(); //?

var fiv = {
    x:5
}
var func = bar.bind(foo).bind(sed).bind(fiv);
func(); //?

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>答案是，两次都仍将输出 3 ，而非期待中的 4 和 5 。原因是，在Javascript中，多次 bind() 是无效的。更深层次的原因， bind() 的实现，相当于使用函数在内部包了一个 call / apply ，第二次 bind() 相当于再包住第一次 bind() ,故第二次以后的 bind 是无法生效的。</p><p><strong>apply、call、bind比较</strong></p><p>那么 apply、call、bind 三者相比较，之间又有什么异同呢？何时使用 apply、call，何时使用 bind 呢。简单的一个栗子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var obj = {
    x: 81,
};

var foo = {
    getX: function() {
        return this.x;
    }
}

console.log(foo.getX.bind(obj)());  //81
console.log(foo.getX.call(obj));    //81
console.log(foo.getX.apply(obj));   //81

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>三个输出的都是81，但是注意看使用 bind() 方法的，他后面多了对括号。</p><p>也就是说，区别是，当你希望改变上下文环境之后并非立即执行，而是回调执行的时候，使用 bind() 方法。而 apply/call 则会立即执行函数。</p><p><strong><strong>总结</strong></strong></p><ul><li>apply 、 call 、bind 三者都是用来改变函数的this对象的指向的；</li><li>apply 、 call 、bind 三者第一个参数都是this要指向的对象，也就是想指定的上下文；</li><li>apply 、 call 、bind 三者都可以利用后续参数传参；</li><li>bind 是返回对应函数，便于稍后调用；apply 、call 则是立即调用 。</li></ul><h1 id="四、严格模式-strict" tabindex="-1"><a class="header-anchor" href="#四、严格模式-strict" aria-hidden="true">#</a> <strong>四、严格模式（strict）</strong></h1><p><strong><strong>目的</strong></strong></p><ul><li>消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;</li><li>消除代码运行的一些不安全之处，保证代码运行的安全；</li><li>提高编译器效率，增加运行速度；</li><li>为未来新版本的Javascript做好铺垫。</li></ul><p>&quot;严格模式&quot;体现了Javascript更合理、更安全、更严谨的发展方向，包括IE 10在内的主流浏览器，都已经支持它，许多大项目已经开始全面拥抱它。</p><p>另一方面，同样的代码，在&quot;严格模式&quot;中，可能会有不一样的运行结果；一些在&quot;正常模式&quot;下可以运行的语句，在&quot;严格模式&quot;下将不能运行。掌握这些内容，有助于更细致深入地理解Javascript，让你变成一个更好的程序员。</p><p><strong>在js代码顶部或者立即执行函数中加入下面这行语句，可以进入严格模式</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 页面顶部使用，全局严格模式
&quot;use strict&quot;;

// 立即执行函数中使用，局部严格模式
(function (){
    &quot;use strict&quot;;
    // some code here
})();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>老版本的浏览器会把它当作一行普通字符串，加以忽略。</p><p><strong><strong>全局变量显式声明</strong></strong></p><p>在正常模式中，如果一个变量没有声明就赋值，默认是全局变量。严格模式禁止这种用法，全局变量必须显式声明。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;use strict&quot;;
v = 1; // 报错，v未声明
for(i = 0; i &lt; 2; i++) { // 报错，i未声明
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因此，严格模式下，变量都必须先用var命令声明，然后再使用。</p><p><strong><strong>静态绑定</strong></strong></p><p>Javascript语言的一个特点，就是允许&quot;动态绑定&quot;，即某些属性和方法到底属于哪一个对象，不是在编译时确定的，而是在运行时（runtime）确定的。</p><p>严格模式对动态绑定做了一些限制。某些情况下，只允许静态绑定。也就是说，属性和方法到底归属哪个对象，在编译阶段就确定。这样做有利于编译效率的提高，也使得代码更容易阅读，更少出现意外。</p><p>具体来说，涉及以下几个方面。</p><p><strong>（1）禁止使用with语句</strong></p><p>因为with语句无法在编译时就确定，属性到底归属哪个对象。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;use strict&quot;;
var v = 1;
with (o){ // 语法错误
    v = 2;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（2）创设eval作用域</strong></p><p>正常模式下，Javascript语言有两种变量作用域（scope）：全局作用域和函数作用域。严格模式创设了第三种作用域：eval作用域。</p><p>正常模式下，eval语句的作用域，取决于它处于全局作用域，还是处于函数作用域。严格模式下，eval语句本身就是一个作用域，不再能够生成全局变量了，它所生成的变量只能用于eval内部。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;use strict&quot;;
var x = 2;
console.info(eval(&quot;var x = 5; x&quot;)); // 5
console.info(x); // 2

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>增强的安全措施</strong></strong></p><p><strong>（1）禁止this关键字指向全局对象</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function f(){
    return !this;
}
// 返回false，因为&quot;this&quot;指向全局对象，&quot;!this&quot;就是false
function f(){
    &quot;use strict&quot;;
    return !this;
}
// 返回true，因为严格模式下，this的值为undefined，所以&quot;!this&quot;为true。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因此，使用构造函数时，如果忘了加new，this不再指向全局对象，而是报错。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function f(){
&quot;use strict&quot;;
    this.a = 1;
};
f();// 报错，this未定义

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（2）禁止在函数内部遍历调用栈</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function f1(){
    &quot;use strict&quot;;
    f1.caller; // 报错
    f1.arguments; // 报错
}
f1();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>禁止删除变量</strong></strong></p><p>严格模式下无法删除变量。只有configurable设置为true的对象属性，才能被删除。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;use strict&quot;;
var x;
delete x; // 语法错误
var o = Object.create(null, {&#39;x&#39;: {
    value: 1,
    configurable: true
}});
delete o.x; // 删除成功

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>显式报错</strong></strong></p><p>正常模式下，对一个对象的只读属性进行赋值，不会报错，只会默默地失败。严格模式下，将报错。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;use strict&quot;;
var o = {};
Object.defineProperty(o, &quot;v&quot;, { value: 1, writable: false });
o.v = 2; // 报错

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>严格模式下，对一个使用getter方法读取的属性进行赋值，会报错。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;use strict&quot;;
var o = {
    get v() { return 1; }
};
o.v = 2; // 报错

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>严格模式下，对禁止扩展的对象添加新属性，会报错。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;use strict&quot;;
var o = {};
Object.preventExtensions(o);
o.v = 1; // 报错

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>严格模式下，删除一个不可删除的属性，会报错。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;use strict&quot;;
delete Object.prototype; // 报错

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>重名错误</strong></strong></p><p>严格模式新增了一些语法错误。</p><p><strong>（1）对象不能有重名的属性</strong></p><p>正常模式下，如果对象有多个重名属性，最后赋值的那个属性会覆盖前面的值。严格模式下，这属于语法错误。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;use strict&quot;;
var o = {
    p: 1,
    p: 2
}; // 语法错误

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（2）函数不能有重名的参数</strong></p><p>正常模式下，如果函数有多个重名的参数，可以用arguments[i]读取。严格模式下，这属于语法错误。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;use strict&quot;;
function f(a, a, b) { // 语法错误
    return ;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>禁止八进制表示法</strong></strong></p><p>正常模式下，整数的第一位如果是0，表示这是八进制数，比如0100等于十进制的64。严格模式禁止这种表示法，整数第一位为0，将报错。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;use strict&quot;;
var n = 0100; // 语法错误

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>arguments对象的限制</strong></strong></p><p>arguments是函数的参数对象，严格模式对它的使用做了限制。</p><p><strong>（1）不允许对arguments赋值</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;use strict&quot;;
arguments++; // 语法错误
var obj = { set p(arguments) { } }; // 语法错误
try { } catch (arguments) { } // 语法错误
function arguments() { } // 语法错误
var f = new Function(&quot;arguments&quot;, &quot;&#39;use strict&#39;; return 17;&quot;); // 语法错误

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（2）arguments不再追踪参数的变化</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function f(a) {
    a = 2;
    return [a, arguments[0]];
}
f(1); // 正常模式为[2,2]

function f(a) {
    &quot;use strict&quot;;
    a = 2;
    return [a, arguments[0]];
}

f(1); // 严格模式为[2,1]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（3）禁止使用arguments.callee</strong></p><p>这意味着，你无法在匿名函数内部调用自身了。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;use strict&quot;;
var f = function() {
    return arguments.callee;
};
f(); // 报错

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>函数必须声明在顶层</strong></strong></p><p>将来Javascript的新版本会引入&quot;块级作用域&quot;。为了与新版本接轨，严格模式只允许在全局作用域或函数作用域的顶层声明函数。也就是说，不允许在非函数的代码块内声明函数。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;use strict&quot;;

if (true) {
    function f() { } // 语法错误
}

for (var i = 0; i &lt; 5; i++) {
    function f2() { } // 语法错误
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>保留字</strong></strong></p><p>为了向将来Javascript的新版本过渡，严格模式新增了一些保留字：implements, interface, let, package, private, protected, public, static, yield。</p><p>使用这些词作为变量名将会报错。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function package(protected) { // 语法错误
    &quot;use strict&quot;;
    var implements; // 语法错误
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此外，ECMAscript第五版本身还规定了另一些保留字（class, enum, export, extends, import, super），以及各大浏览器自行增加的const保留字，也是不能作为变量名的。</p>`,260),u={href:"https://www.cnblogs.com/superjishere/p/11731537.html",target:"_blank",rel:"noopener noreferrer"},o={href:"https://www.cnblogs.com/chengxs/p/8679313.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.cnblogs.com/libin-1/p/6069031.html",target:"_blank",rel:"noopener noreferrer"},b={href:"http://www.ruanyifeng.com/blog/2013/01/javascript_strict_mode.html",target:"_blank",rel:"noopener noreferrer"};function p(g,x){const i=a("ExternalLinkIcon");return d(),r("div",null,[c,n("p",null,[e("本文参考："),n("a",u,[e("JS函数进阶"),s(i)]),n("a",o,[e("JavaScript中this的指向问题"),s(i)]),n("a",m,[e("理解JS中的call、apply、bind方法"),s(i)]),n("a",b,[e("Javascript 严格模式详解"),s(i)])])])}const f=l(v,[["render",p],["__file","函数进阶.html.vue"]]);export{f as default};
