import{_ as a,r as t,o as r,c as d,a as e,b as n,d as s,e as l}from"./app.37a6fc76.js";const o={},c=l(`<h1 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h1><h1 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> <strong>JavaScript</strong></h1><h1 id="javascript数据类型、类型判断、堆和栈、垃圾回收机制" tabindex="-1"><a class="header-anchor" href="#javascript数据类型、类型判断、堆和栈、垃圾回收机制" aria-hidden="true">#</a> <strong>JavaScript数据类型、类型判断、堆和栈、垃圾回收机制</strong></h1><h1 id="一、数据类型介绍" tabindex="-1"><a class="header-anchor" href="#一、数据类型介绍" aria-hidden="true">#</a> <strong>一、数据类型介绍</strong></h1><blockquote><p>JavaScript中有八种数据类型，包括五种基本数据类型（Number，String，Boolean，Null，undefined），和一种复杂数据类型（Object），以及ES6新增基本数据类型（Symbol，Bigint）。</p></blockquote><blockquote><p>ES6新增 Symbol ，代表创建后独一无二且不可变的数据类型，它主要是为了解决可能出现的全局变量冲突的问题。</p></blockquote><p>JavaScript是动态语言，同样的变量的数据类型是可以变化的。</p><h1 id="二、基本数据类型-简单数据类型-值类型" tabindex="-1"><a class="header-anchor" href="#二、基本数据类型-简单数据类型-值类型" aria-hidden="true">#</a> <strong>二、基本数据类型（简单数据类型/值类型）</strong></h1><p><strong><strong>有五种基本数据类型（ES6新增的两个也是）</strong></strong></p><ul><li>Number：数字型</li><li>String：字符串型</li><li>Boolean：布尔型</li><li>undefined：未定义</li><li>Null：空对象指针</li></ul><p><strong><strong>Number：数字型</strong></strong></p><blockquote><p>数字类型，包括整数和浮点数。</p></blockquote><p>Infinity，代表无穷大，大于任何数值；-Infinity，代表无穷小，小于任何数值；</p><p>NaN，Not a Number，代表一个非数值（isNaN用来判断是不是非数字，返回true或者false）</p><p><strong><strong>String：字符串型</strong></strong></p><blockquote><p>字符串类型是不可变的，改变字符串会销毁原字符串用另一个字符串填充。</p></blockquote><p>字符串转义符：反斜杠开头，\\n代表换行（n是newline）；\\是反斜杠；\\t是tab缩进（t是tab）；\\b是空格（b是blank）</p><p>字符串的长度，变量.length，每个空格也算一个字符，字符串加任何值都会变成字符串（数值相加，字符相连）。</p><p>变量是通过和字符串相连的方式实现的，即引引加加。</p><p><strong><strong>Boolean：布尔型</strong></strong></p><blockquote><p>只有两个值true（真）和false（假）。参加运算比较时true为1，false为0。</p></blockquote><p><strong><strong>undefined：未定义</strong></strong></p><blockquote><p>只有一个值undefined，未定义数据类型。是从null中派生出来的。</p></blockquote><p>和字符串相加返回的是字符串（undefined+字符串），和数字相加返回的是NaN（not a number）</p><p><strong><strong>Null：空值</strong></strong></p><blockquote><p>只有一个值null，表示空指针对象（不存在的对象）。Typeof检测会返回object。</p></blockquote><p>和字符串相加返回的是字符串（null+字符串），和数字相加返回的是数字</p><h1 id="三、复杂数据类型-引用类型" tabindex="-1"><a class="header-anchor" href="#三、复杂数据类型-引用类型" aria-hidden="true">#</a> <strong>三、复杂数据类型（引用类型）</strong></h1><p><strong>三种引用类型</strong></p><ul><li>Object：对象</li><li>Array：数组</li><li>Function：函数</li></ul><p><strong><strong>Object：对象</strong></strong></p><blockquote><p>Object又包括Data、function、Array。我们看到的大多数类型值都是Object类型的实例，创建Object实例的方式有两种。</p></blockquote><p>第一种是使用new操作符后跟Object构造函数，如下所示</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var person = new Object();
person.name = &quot;Micheal&quot;;
person.age = 24;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二种方式是使用对象字面量表示法，如下所示</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var person = {
　　name : &quot;Micheal&quot;,
　　age : 24
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>Array：数组</strong></strong></p><blockquote><p>数组的每一项可以用来保存任何类型的数据，也就是说，可以用数组的第一个位置来保存字符串，第二个位置保存数值，第三个位置保存对象....另外，数组的大小是可以动态调整的。</p></blockquote><p><strong><strong>Function：函数</strong></strong></p><blockquote><p>每个函数都是Function类型的实例，而且都与其他引用类型一样具有属性和方法。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function sum(num1, num2) {
    return num1 + num2;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>Date：日期</strong></strong></p><blockquote><p>ECMAScript中的Date类型是在早期Java中的java.util.Date类的基础上构建的。为此，Date类型使用自UTC（Coordinated Universal Time，国际协调时间）1970年1月1日午夜（零时）开始经过的毫秒数来保存日期。在使用这种数据存储格式的条件下，Date类型保存的日期能够精确到1970年1月1日之前或之后的285 616年。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var now = new Date();
const date1 = new Date(&#39;December 17, 1995 03:24:00&#39;);
// Sun Dec 17 1995 03:24:00 GMT...

const date2 = new Date(&#39;1995-12-17T03:24:00&#39;);
// Sun Dec 17 1995 03:24:00 GMT...

console.log(date1 === date2);
// expected output: false;

console.log(date1 - date2);
// expected output: 0

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Date.now() 方法返回自 1970 年 1 月 1 日 00:00:00 (UTC) 到当前时间的毫秒数。</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var timeInMs = Date.now();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Date.parse() 方法解析一个表示某个日期的字符串，并返回从1970-1-1 00:00:00 UTC 到该日期对象（该日期对象的UTC时间）的毫秒数，如果该字符串无法识别，或者一些情况下，包含了不合法的日期数值（如：2015-02-31），则返回值为NaN。</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const unixTimeZero = Date.parse(&#39;01 Jan 1970 00:00:00 GMT&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><strong>Math：内置对象</strong></strong></p><blockquote><p>Math 是一个内置对象，它拥有一些数学常数属性和数学函数方法。Math 不是一个函数对象。</p></blockquote><p><strong>Math.PI</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 使用 Math.PI 计算给定半径的圆周长
function calculateCircumference (radius) {
  return 2 * Math.PI * radius;
}
calculateCircumference(1);  // 6.283185307179586

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Math.max() 函数返回一组数中的最大值。</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var arr = [1, 2, 3];
var max = Math.max(...arr);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Math.max() 函数返回零个或更多个数值的最小值。</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var x = 10, y = -20;
var z = Math.min(x, y);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Math.floor() 返回小于或等于一个给定数字的最大整数。</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Math.floor( 45.95);
// 45
Math.floor( 45.05);
// 45

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="四、es6新增基本数据类型" tabindex="-1"><a class="header-anchor" href="#四、es6新增基本数据类型" aria-hidden="true">#</a> <strong>四、ES6新增基本数据类型</strong></h1><p><strong><strong>Symbal：独一无二的值</strong></strong></p><blockquote><p>Symbol 是 ES6 引入了一种新的原始数据类型，表示独一无二的值。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let s1 = Symbol()
let s2 = Symbol(&#39;another symbol&#39;)
let s3 = Symbol(&#39;another symbol&#39;)

s1 === s2 // false
s2 === s3 // false

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对象的属性名现在可以有两种类型，一种是原来就有的字符串，另一种就是新增的 Symbol 类型。凡是属性名属于 Symbol 类型，就都是独一无二的，可以保证不会与其他属性名产生冲突。</p><p>比较两个symbol实例的时候，总会返回false</p><p><strong><strong>Bigint：表示任意精度格式的整数</strong></strong></p><blockquote><p>ES10 引入的一种数字类型的数据，它可以表示任意精度格式的整数，使用 BigInt 可以安全地存储和操作大整数，即使这个数已经超出了 Number 能够表示的安全整数范围。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const theBiggestInt = 9007199254740991n;

const alsoHuge = BigInt(9007199254740991);
// ↪ 9007199254740991n

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="五、判断数据类型" tabindex="-1"><a class="header-anchor" href="#五、判断数据类型" aria-hidden="true">#</a> <strong>五、判断数据类型</strong></h1><ul><li>typeof 操作符：可以判断 Number、String、Boolean、undefined，判断unll返回的是object（null就是一个空对象，对象属于object）</li><li>instanceof 操作符：可以判断对象的类型 Array、Function、Object</li><li>constructor 操作符：可以判断 Number、Boolean、String、Array、Function、Object (undefined和null没有constructor属性)</li><li>Object.prototype.toString.call()：可以判断 基本类型 原生引用类型 原生JSON对象 正则</li><li>Array.isArray()：Array.isArray() 判断是否是数组</li><li>isNaN()：isNaN() 判断是否是非数字</li></ul><p>prompt取过来的值是字符型的</p><p><strong><strong>typeof 操作符</strong></strong></p><blockquote><p>由于js中的变量是松散类型的，所以它提供了一种检测当前变量的数据类型的方法，也就是typeof关键字</p></blockquote><p>有2种使用方式：typeof(表达式) 和 typeof 变量名</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var num = 10;
console.log(typeof num); // 返回的是number
var str = ‘pink’;
console.log(typeof str); // 返回的是string
var flag = true;
console.log(typeof flag); // 返回的是boolean
var vari =undefined;
console.log(typeof vari); // 返回的是undefined
var timer = null;
console.log(typeof timer); // 返回的是object，null就是一个空对象，对象属于object。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>instanceof 操作符</strong></strong></p><p>instanceof可以正确判断对象的类型，其内部运行机制是判断在其原型链中能否找到该类型的原型。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>console.log(2 instanceof Number);                    // false
console.log(true instanceof Boolean);                // false
console.log(&#39;str&#39; instanceof String);                // false

console.log([] instanceof Array);                    // true
console.log(function(){} instanceof Function);       // true
console.log({} instanceof Object);                   // true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，instanceof只能正确判断引用数据类型，而不能判断基本数据类型。instanceof 运算符可以用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性。</p><p><strong><strong>constructor 操作符</strong></strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>console.log((2).constructor === Number); // true
console.log((true).constructor === Boolean); // true
console.log((&#39;str&#39;).constructor === String); // true
console.log(([]).constructor === Array); // true
console.log((function() {}).constructor === Function); // true
console.log(({}).constructor === Object); // true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>constructor有两个作用，一是判断数据的类型，二是对象实例通过 constrcutor 对象访问它的构造函数。需要注意，如果创建一个对象来改变它的原型，constructor就不能用来判断数据类型了：</p><p><strong><strong>Object.prototype.toString.call()</strong></strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Object.prototype.toString.call() 使用 Object 对象的原型方法 toString 来判断数据类型：
var a = Object.prototype.toString;

console.log(a.call(2));
console.log(a.call(true));
console.log(a.call(&#39;str&#39;));
console.log(a.call([]));
console.log(a.call(function(){}));
console.log(a.call({}));
console.log(a.call(undefined));
console.log(a.call(null));

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.判断基本类型：
Object.prototype.toString.call(null); // &quot;[object Null]&quot;
Object.prototype.toString.call(undefined); // &quot;[object Undefined]&quot;
Object.prototype.toString.call(&quot;“&quot;abc&quot;); // ”[object String]”
Object.prototype.toString.call(123); // ”[object Number]”
Object.prototype.toString.call(true); // ”[object Boolean]”

2.判断原生引用类型：
函数类型
Function fn(){console.log(“test”);}
Object.prototype.toString.call(fn); // ”[object Function]”
日期类型
var date = new Date();
Object.prototype.toString.call(date); // ”[object Date]”
数组类型
var arr = [1,2,3];
Object.prototype.toString.call(arr); // ”[object Array]”
正则表达式
var reg = /[hbc]at/gi;
Object.prototype.toString.call(arr); // ”[object RegExp]”
自定义类型
function Person(name, age) {
    this.name = name;
    this.age = age;
}
var person = new Person(&quot;Rose&quot;, 18);
Object.prototype.toString.call(person); // ”[object Object]”
很明显这种方法不能准确判断person是Person类的实例，而只能用instanceof 操作符来进行判断，如下所示：
console.log(person instanceof Person);//输出结果为true

3.判断原生JSON对象：
var isNativeJSON = window.JSON &amp;&amp; Object.prototype.toString.call(JSON);
console.log(isNativeJSON);//输出结果为”[object JSON]”说明JSON是原生的，否则不是

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同样是检测对象obj调用toString方法，obj.toString()的结果和Object.prototype.toString.call(obj)的结果不一样，这是为什么？</p><p>这是因为toString是Object的原型方法，而Array、function等类型作为Object的实例，都重写了toString方法。不同的对象类型调用toString方法时，根据原型链的知识，调用的是对应的重写之后的toString方法（function类型返回内容为函数体的字符串，Array类型返回元素组成的字符串…），而不会去调用Object上原型toString方法（返回对象的具体类型），所以采用obj.toString()不能得到其对象类型，只能将obj转换为字符串类型；因此，在想要得到对象的具体类型时，应该调用Object原型上的toString方法。</p><p><strong><strong>isNaN() 判断是否是非数字</strong></strong></p><p>如果该值等于 NaN，则此函数返回 true。否则返回 false。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>isNaN(0) //false
isNaN(&#39;123&#39;) //false
isNaN(&#39;Hello&#39;) //true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Number.isNaN() 不会将值转换为数字，并且不会为任何非数字类型的值返回 true。</p><p><strong><strong>Array.isArray() 判断是否是数组</strong></strong></p><p>Array.isArray() 用于确定传递的值是否是一个 Array。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Array.isArray([1, 2, 3]);
// true
Array.isArray({foo: 123});
// false

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="六、数据类型转换" tabindex="-1"><a class="header-anchor" href="#六、数据类型转换" aria-hidden="true">#</a> <strong>六、数据类型转换</strong></h1><p><strong><strong>1、转换为字符串</strong></strong></p><p>number.toString();</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var number = 12;
string_value = number.toString();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>String(value)强制转换</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var str = 1;
console.log(String(str));

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Js隐式转换（运算符）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>console.log(120 + &#39;&#39;); // 输出字符串120
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><strong>2、转换为数字型</strong></strong></p><p>parseInt(string)函数（120px会返回120，rem120px会返回NaN）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var age = &#39;18.34&#39;;  console.log(parseInt(age);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,104),u={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/floor",target:"_blank",rel:"noopener noreferrer"},v=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>parseInt(0.0000005); // =&gt; 5
// 类似于
parseInt(5e-7);      // =&gt; 5
// 类似于
parseInt(&#39;5e-7&#39;);    // =&gt; 5

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>parseFloat(string)函数（120px会返回120，rem120px会返回NaN）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var age1 = &#39;18.21321&#39;;  console.log(parseFloat(age1);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Number强制转换</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var str = &#39;1&#39;;  console.log(Number(str));
Number(true) // 1

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Js隐式转换（运算符）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>console.log(&#39;120&#39; - 100); // 输出20
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><strong>3、转换为布尔型</strong></strong></p><blockquote><p>代表否定、空的值会被转换为false，如&#39;&#39;、NaN、null、undefind、0、false六种。</p></blockquote><p>Boolean强制转换</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Boolean(undefined) // false
Boolean(null) // false
Boolean(0) // false
Boolean(&#39;&#39;) // false
Boolean(NaN) // false

Boolean(1) // true
Boolean(&#39;false&#39;) // true
Boolean([]) // true
Boolean({}) // true
Boolean(function () {}) // true
Boolean(/foo/) // true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Js隐式转换（使用两个取反符可以转换为布尔值）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>!!undefined // false
!!null // false
!!0 // false
!!&#39;&#39; // false
!!NaN // false

!!1 // true
!!&#39;false&#39; // true
!![] // true
!!{} // true
!!function(){} // true
!!/foo/ // true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>数组直接使用Boolean转换时，结果都是true。</p><p>对于一些特殊值，Boolean对象前面加不加new，会得到完全相反的结果，必须小心。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if (Boolean(false)) {
    console.log(&#39;true&#39;);
} // 无输出

if (new Boolean(false)) {
    console.log(&#39;true&#39;);
} // true

if (Boolean(null)) {
    console.log(&#39;true&#39;);
} // 无输出

if (new Boolean(null)) {
    console.log(&#39;true&#39;);
} // true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="七、标识符、关键字、保留字" tabindex="-1"><a class="header-anchor" href="#七、标识符、关键字、保留字" aria-hidden="true">#</a> <strong>七、标识符、关键字、保留字</strong></h1><p><strong><strong>标识符</strong></strong></p><blockquote><p>指开发人员为变量、函数、属性、参数取的名字。</p></blockquote><p>标识符不能是关键字或保留字。</p><p><strong><strong>关键字</strong></strong></p><blockquote><p>是指js本身已经用了的字，不能再用他们充当变量名，方法名。</p></blockquote><p>包括：break、case、catch、continue、default、delete、do、else、finally、for、function、if、in、instanceof、new、return、switch、this、throw、try、typeof、var、void、while、with等。</p><p><strong><strong>保留字</strong></strong></p><blockquote><p>实际上就是预留的关键字，未来可能成为关键字。</p></blockquote><p>包括：boolean、byte、char、class、const、debugger、double、enum、export、import、extends、Fimal、float、goto、int、long、package、private、public、static、super、volatile、throws等。</p><h1 id="八、堆和栈" tabindex="-1"><a class="header-anchor" href="#八、堆和栈" aria-hidden="true">#</a> <strong>八、堆和栈</strong></h1><p><strong><strong>堆(heap)和栈(stack)</strong></strong></p><ul><li>栈(stack)会自动分配内存空间，会自动释放。</li><li>堆(heap)动态分配的内存，大小不定也不会自动释放。</li></ul><p><strong><strong>基本类型和引用类型</strong></strong></p><ul><li>基本类型：简单的数据段，存放在栈内存中，占据固定大小的空间。</li><li>引用类型：指那些可能由多个值构成的对象，保存在堆内存中，包含引用类型的变量实际上保存的不是变量本身，而是指向该对象的指针。</li></ul><p>基本类型：Undefined、Null、Boolean、Number、String、Symbal、Bigint。这些类型在内存中分别占有固定大小的空间，他们的值保存在栈空间，我们通过按值来访问的。</p><p>引用类型：值大小不固定，栈内存中存放地址指向堆内存中的对象。是按引用访问的。栈内存中存放的只是该对象的访问地址，在堆内存中为这个值分配空间。由于这种值的大小不固定，因此不能把它们保存到栈内存中。但内存地址大小的固定的，因此可以将内存地址保存在栈内存中。 这样，当查询引用类型的变量时， 先从栈中读取内存地址， 然后再通过地址找到堆中的值。对于这种，我们把它叫做按引用访问。</p><p><strong><strong>传值和传址</strong></strong></p><ul><li>从一个变量向另一个变量复制基本类型的值，会创建这个值的副本。</li><li>从一个变量向另一个变量复制引用类型的值，复制的其实是指针，因此两个变量最终指向同一个对象。即复制的是栈中的地址而不是堆中的对象。</li></ul><p><strong><strong>数据销毁</strong></strong></p><p>基本数据类型在当前执行环境结束时销毁，而引用类型不会随执行环境结束而销毁，只有当所有引用他的变量不存在时这个对象才会被垃圾回收机制回收。</p><h1 id="九、垃圾回收机制" tabindex="-1"><a class="header-anchor" href="#九、垃圾回收机制" aria-hidden="true">#</a> <strong>九、垃圾回收机制</strong></h1><p><strong><strong>垃圾回收机制</strong></strong></p><p>JS的垃圾回收机制是为了防止内存泄漏，内存泄漏的含义就是当已经不需要某块内存时这块内存还存在着，垃圾回收机制就是间歇的不定期的寻找到不再使用的变量，并释放掉它们所指向的内存。</p><p><strong><strong>变量的生命周期</strong></strong></p><p>当一个变量的生命周期结束之后它所指向的内存就应该被释放。JS有两种变量，全局变量和在函数中产生的局部变量。局部变量的生命周期在函数执行过后就结束了，此时便可将它引用的内存释放（即垃圾回收），但全局变量生命周期会持续到浏览器关闭页面。</p><p><strong><strong>JS垃圾回收方式</strong></strong></p><p>JS执行环境中的垃圾回收器怎样才能检测哪块内存可以被回收有两种方式：标记清除（mark and sweep）、引用计数（reference counting）。</p><p><strong>标记清除（mark and sweep）</strong></p><p>大部分浏览器以此方式进行垃圾回收，当变量进入执行环境（函数中声明变量）的时候，垃圾回收器将其标记为“进入环境”，当变量离开环境的时候（函数执行结束）将其标记为“离开环境”，在离开环境之后还有的变量则是需要被删除的变量。标记方式不定，可以是某个特殊位的反转或维护一个列表等。</p><p>垃圾收集器给内存中的所有变量都加上标记，然后去掉环境中的变量以及被环境中的变量引用的变量的标记。在此之后再被加上的标记的变量即为需要回收的变量，因为环境中的变量已经无法访问到这些变量。</p><p><strong>引用计数（reference counting）</strong></p><p>这种方式常常会引起内存泄漏，低版本的IE使用这种方式。机制就是跟踪一个值的引用次数，当声明一个变量并将一个引用类型赋值给该变量时该值引用次数加1，当这个变量指向另一个时该值的引用次数便减1。当该值引用次数为0时就会被回收。</p><p>该方式会引起内存泄漏的原因是它不能解决循环引用的问题：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function sample(){
    var a={};
    var b={};
    a.prop = b;
    b.prop = a;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种情况下每次调用sample()函数，a和b的引用计数都是2，会使这部分内存永远不会被释放，即内存泄漏。</p><p>低版本IE中有一部分对象并不是原生JS对象。例如，其BOM和DOM中的对象就是使用C++以COM(Component Object Model)对象的形式实现的，而COM对象的垃圾收集机制采用的就是引用计数策略。</p><p>因此即使IE的js引擎是用的标记清除来实现的，但是js访问COM对象如BOM,DOM还是基于引用计数的策略的，也就是说只要在IE中设计到COM对象，也就会存在循环引用的问题。</p><p>当一个DOM元素和一个原生的js对象之间的循环引用时：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var ele = document.getElementById(&quot;eleId&quot;);
var obj = {};
obj.property = ele;
ele.property = obj;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加 obj.property = null;ele.property = null;即可解除原生JS对象与DOM元素之间的连接。</p><p>当闭包中创建循环引用时：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>window.onload = function outerFunction(){
    var obj= document.getElementById(&quot;eleId&quot;);
    obj.onclick = function innerfunction(){
        console.log(obj.id);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这个代码创建了一个作为obj元素处理程序的闭包，而这个闭包则又创建了一个循环引用。obj引用了document.getElementById(&quot;element&quot;)，而document.getElementById(&quot;eleId&quot;)的onclick方法会引用包括 obj 以内的外部环境中的变量，所谓“外部环境”包括了包含函数的整个活动对象，所以一定会包括 obj（即使闭包没有对 obj 进行直接的引用，例如上文程序中没有 obj.id 出现，包含函数的活动对象（obj）中也依旧会保存一个引用）。</p><p>可以改成下面这个：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>window.onload = function outerFunction(){
    var obj= document.getElementById(&quot;element&quot;);
    var id = obj.id;//将obj副本保存于变量id中，则不会使obj元素处理程序的闭包创建循环引用
    obj.onclick = function innerfunction(){
        console.log(id);
    }
    ele = null;//手动断开 obj 对 document.getElemengById(&quot;element&quot;)的引用
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,62),b={href:"https://www.cnblogs.com/sunhuahuaa/p/7655587.html",target:"_blank",rel:"noopener noreferrer"};function g(m,p){const i=t("ExternalLinkIcon");return r(),d("div",null,[c,e("p",null,[n("parseInt(0.00000005)会返回5（parseInt(numericalString) 的第一个参数如果不是字符串，将执行 ToString 操作注1将其转换为字符串，然后再将该字符串解析为整数值。），所以返回整数时建议用 "),e("a",u,[n("Math.floor(x)"),s(i)])]),v,e("p",null,[n("本文参考："),e("a",b,[n("JS垃圾回收机制"),s(i)])])])}const h=a(o,[["render",g],["__file","数据类型.html.vue"]]);export{h as default};
