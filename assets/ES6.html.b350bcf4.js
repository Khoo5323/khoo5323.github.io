import{_ as s,r as l,o as d,c as a,a as e,b as r,d as t,e as n}from"./app.37a6fc76.js";const v={},c=n('<h1 id="es6" tabindex="-1"><a class="header-anchor" href="#es6" aria-hidden="true">#</a> ES6</h1><h1 id="es6-1" tabindex="-1"><a class="header-anchor" href="#es6-1" aria-hidden="true">#</a> <strong>ES6</strong></h1><h1 id="一、es6介绍" tabindex="-1"><a class="header-anchor" href="#一、es6介绍" aria-hidden="true">#</a> <strong>一、ES6介绍</strong></h1><p>ES6， 全称 ECMAScript 6.0 ，是 JavaScript 的下一个版本标准，2015.06 发版。</p><p>ES6 主要是为了解决 ES5 的先天不足，比如 JavaScript 里并没有类的概念，但是目前浏览器的 JavaScript 是 ES5 版本，大多数高版本的浏览器也支持 ES6，不过只实现了 ES6 的部分特性和功能。</p><p>ECMAScript 6 目前基本成为业界标准，它的普及速度比 ES5 要快很多，主要原因是现代浏览器对 ES6 的支持相当迅速，尤其是 Chrome 和 Firefox 浏览器，已经支持 ES6 中绝大多数的特性。</p>',6),u={href:"https://es6.ruanyifeng.com/#README",target:"_blank",rel:"noopener noreferrer"},o=n(`<h1 id="二、es6简明教程" tabindex="-1"><a class="header-anchor" href="#二、es6简明教程" aria-hidden="true">#</a> <strong>二、ES6简明教程</strong></h1><p><strong><strong>ES6更新了哪些新语法？</strong></strong></p><ul><li>let 和 const （块级作用域）</li><li>class类（语法糖）</li><li>函数默认值，箭头函数（this指向调用者）</li><li>promise 和 fetch（异步编程）</li><li>async 和 await（优化promise）</li><li>export 和 import（导入导出）</li><li>extends 继承</li></ul><p><strong><strong>1. let、const 和 block 作用域</strong></strong></p><p>let 允许创建块级作用域，ES6 推荐在函数中使用 let 定义变量，而非 var：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var a = 2;
{
  let a = 3;
  console.log(a); // 3
}
console.log(a); // 2

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同样在块级作用域有效的另一个变量声明方式是 const，它可以声明一个常量。ES6 中，const 声明的常量类似于指针，它指向某个引用，也就是说这个「常量」并非一成不变的，如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  const ARR = [5,6];
  ARR.push(7);
  console.log(ARR); // [5,6,7]
  ARR = 10; // TypeError
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有几个点需要注意：</p><ul><li>let 关键词声明的变量不具备变量提升（hoisting）特性</li><li>let 和 const 声明只在最靠近的一个块中（花括号内）有效</li><li>当使用常量 const 声明时，请使用大写变量，如：CAPITAL_CASING</li><li>const 在声明时必须被赋值</li></ul><p><strong><strong>2. 箭头函数（Arrow Functions）</strong></strong></p><p>ES6 中，箭头函数就是函数的一种简写形式，使用括号包裹参数，跟随一个 =&gt;，紧接着是函数体：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var getPrice = function() {
  return 4.55;
};

// Implementation with Arrow Function
var getPrice = () =&gt; 4.55;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意的是，上面例子中的 getPrice 箭头函数采用了简洁函数体，它不需要 return 语句，下面这个例子使用的是正常函数体：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let arr = [&#39;apple&#39;, &#39;banana&#39;, &#39;orange&#39;];
let breakfast = arr.map(fruit =&gt; {
  return fruit + &#39;s&#39;;
});
console.log(breakfast); // apples bananas oranges

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然，箭头函数不仅仅是让代码变得简洁，函数中 this 总是绑定总是指向对象自身。具体可以看看下面几个例子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function Person() {
  this.age = 0;

  setInterval(function growUp() {
    // 在非严格模式下，growUp() 函数的 this 指向 window 对象
    this.age++;
  }, 1000);
}
var person = new Person();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们经常需要使用一个变量来保存 this，然后在 growUp 函数中引用：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function Person() {
  var self = this;
  self.age = 0;

  setInterval(function growUp() {
    self.age++;
  }, 1000);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而使用箭头函数可以省却这个麻烦：</p><p><code>function Person(){ this.age = 0; setInterval(() =&gt; { // |this| 指向 person 对象 this.age++; }, 1000); } var person = new Person();</code></p><p><strong><strong>3. 函数参数默认值</strong></strong></p><p>ES6 中允许你对函数参数设置默认值：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let getFinalPrice = (price, tax=0.7) =&gt; price + price * tax;
getFinalPrice(500); // 850

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>4. Spread / Rest 操作符</strong></strong></p><p>Spread / Rest 操作符指的是 ...，具体是 Spread 还是 Rest 需要看上下文语境。</p><p>当被用于迭代器中时，它是一个 Spread 操作符：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function foo(x,y,z) {
  console.log(x,y,z);
}

let arr = [1,2,3];
foo(...arr); // 1 2 3

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当被用于函数传参时，是一个 Rest 操作符：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function foo(...args) {
  console.log(args);
}
foo( 1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>5. 对象词法扩展</strong></strong></p><p>ES6 允许声明在对象字面量时使用简写语法，来初始化属性变量和函数的定义方法，并且允许在对象属性中进行计算操作：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function getCar(make, model, value) {
  return {
    // 简写变量
    make,  // 等同于 make: make
    model, // 等同于 model: model
    value, // 等同于 value: value

    // 属性可以使用表达式计算值
    [&#39;make&#39; + make]: true,

    // 忽略 \`function\` 关键词简写对象函数
    depreciate() {
      this.value -= 2500;
    }
  };
}

let car = getCar(&#39;Barret&#39;, &#39;Lee&#39;, 40000);

// output: {
//     make: &#39;Barret&#39;,
//     model:&#39;Lee&#39;,
//     value: 40000,
//     makeBarret: true,
//     depreciate: [Function: depreciate]
// }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>6. 二进制和八进制字面量</strong></strong></p><p>ES6 支持二进制和八进制的字面量，通过在数字前面添加 0o 或者0O 即可将其转换为八进制值：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let oValue = 0o10;
console.log(oValue); // 8

let bValue = 0b10; // 二进制使用 \`0b\` 或者 \`0B\`
console.log(bValue); // 2

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>7. 对象和数组解构</strong></strong></p><p>解构可以避免在对象赋值时产生中间变量：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function foo() {
  return [1,2,3];
}
let arr = foo(); // [1,2,3]

let [a, b, c] = foo();
console.log(a, b, c); // 1 2 3

function bar() {
  return {
    x: 4,
    y: 5,
    z: 6
  };
}
let {x: x, y: y, z: z} = bar();
console.log(x, y, z); // 4 5 6

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>8. 对象超类</strong></strong></p><p>ES6 允许在对象中使用 super 方法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var parent = {
  foo() {
    console.log(&quot;Hello from the Parent&quot;);
  }
}

var child = {
  foo() {
    super.foo();
    console.log(&quot;Hello from the Child&quot;);
  }
}

Object.setPrototypeOf(child, parent);
child.foo(); // Hello from the Parent
             // Hello from the Child

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>9. 模板语法和分隔符</strong></strong></p><p>ES6 中有一种十分简洁的方法组装一堆字符串和变量。</p><p>\${ ... } 用来渲染一个变量</p><p>\` 作为分隔符</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let user = &#39;Barret&#39;;
console.log(\`Hi \${user}!\`); // Hi Barret!

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>10. for...of VS for...in</strong></strong></p><p>for...of 用于遍历一个迭代器，如数组：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let nicknames = [&#39;di&#39;, &#39;boo&#39;, &#39;punkeye&#39;];
nicknames.size = 3;
for (let nickname of nicknames) {
  console.log(nickname);
}
// 结果: di, boo, punkeye

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>for...in 用来遍历对象中的属性：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let nicknames = [&#39;di&#39;, &#39;boo&#39;, &#39;punkeye&#39;];
nicknames.size = 3;
for (let nickname in nicknames) {
  console.log(nickname);
}
Result: 0, 1, 2, size

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>11. Map 和 WeakMap</strong></strong></p><p>ES6 中两种新的数据结构集：Map 和 WeakMap。事实上每个对象都可以看作是一个 Map。</p><p>一个对象由多个 key-val 对构成，在 Map 中，任何类型都可以作为对象的 key，如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var myMap = new Map();

var keyString = &quot;a string&quot;,
    keyObj = {},
    keyFunc = function () {};

// 设置值
myMap.set(keyString, &quot;value 与 &#39;a string&#39; 关联&quot;);
myMap.set(keyObj, &quot;value 与 keyObj 关联&quot;);
myMap.set(keyFunc, &quot;value 与 keyFunc 关联&quot;);

myMap.size; // 3

// 获取值
myMap.get(keyString);    // &quot;value 与 &#39;a string&#39; 关联&quot;
myMap.get(keyObj);       // &quot;value 与 keyObj 关联&quot;
myMap.get(keyFunc);      // &quot;value 与 keyFunc 关联&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>WeakMap</strong></p><blockquote><p>WeakMap 就是一个 Map，只不过它的所有 key 都是弱引用，意思就是 WeakMap 中的东西垃圾回收时不考虑，使用它不用担心内存泄漏问题。</p></blockquote><p>另一个需要注意的点是，WeakMap 的所有 key 必须是对象。它只有四个方法 delete(key),has(key),get(key) 和set(key, val)：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let w = new WeakMap();
w.set(&#39;a&#39;, &#39;b&#39;);
// Uncaught TypeError: Invalid value used as weak map key

var o1 = {},
    o2 = function(){},
    o3 = window;

w.set(o1, 37);
w.set(o2, &quot;azerty&quot;);
w.set(o3, undefined);

w.get(o3); // undefined, because that is the set value

w.has(o1); // true
w.delete(o1);
w.has(o1); // false

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>12. Set 和 WeakSet</strong></strong></p><p>Set 对象是一组不重复的值，重复的值将被忽略，值类型可以是原始类型和引用类型：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let mySet = new Set([1, 1, 2, 2, 3, 3]);
mySet.size; // 3
mySet.has(1); // true
mySet.add(&#39;strings&#39;);
mySet.add({ a: 1, b:2 });

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以通过 forEach 和 for...of 来遍历 Set 对象：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mySet.forEach((item) =&gt; {
  console.log(item);
    // 1
    // 2
    // 3
    // &#39;strings&#39;
    // Object { a: 1, b: 2 }
});

for (let value of mySet) {
  console.log(value);
    // 1
    // 2
    // 3
    // &#39;strings&#39;
    // Object { a: 1, b: 2 }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Set 同样有 delete() 和 clear() 方法。</p><p><strong>WeakSet</strong></p><p>类似于 WeakMap，WeakSet 对象可以让你在一个集合中保存对象的弱引用，在 WeakSet 中的对象只允许出现一次：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var ws = new WeakSet();
var obj = {};
var foo = {};

ws.add(window);
ws.add(obj);

ws.has(window); // true
ws.has(foo);    // false, foo 没有添加成功

ws.delete(window); // 从结合中删除 window 对象
ws.has(window);    // false, window 对象已经被删除

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>13. 类</strong></strong></p><p>ES6 中有 class 语法。值得注意是，这里的 class 不是新的对象继承模型，它只是原型链的语法糖表现形式。</p><p>函数中使用 static 关键词定义构造函数的的方法和属性：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Task {
  constructor() {
    console.log(&quot;task instantiated!&quot;);
  }

  showId() {
    console.log(23);
  }

  static loadAll() {
    console.log(&quot;Loading all tasks..&quot;);
  }
}

console.log(typeof Task); // function
let task = new Task(); // &quot;task instantiated!&quot;
task.showId(); // 23
Task.loadAll(); // &quot;Loading all tasks..&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>类中的继承和超集：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>classCar {
  constructor() {
    console.log(&quot;Creating a new car&quot;);
  }
}

class Porsche extendsCar {
  constructor() {
    super();
    console.log(&quot;Creating Porsche&quot;);
  }
}

let c = new Porsche();
// Creating a new car
// Creating Porsche

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>extends 允许一个子类继承父类，需要注意的是，子类的constructor 函数中需要执行 super() 函数。</p><p>当然，你也可以在子类方法中调用父类的方法，如super.parentMethodName()。</p><p>有几点值得注意的是：</p><ul><li>类的声明不会提升（hoisting)，如果你要使用某个 Class，那你必须在使用之前定义它，否则会抛出一个 ReferenceError 的错误</li><li>在类中定义函数不需要使用 function 关键词</li></ul><p><strong><strong>14. Symbol</strong></strong></p><p>Symbol 是一种新的数据类型，它的值是唯一的，不可变的。ES6 中提出 symbol 的目的是为了生成一个唯一的标识符，不过你访问不到这个标识符：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var sym = Symbol( &quot;some optional description&quot; );
console.log(typeof sym); // symbol

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，这里 Symbol 前面不能使用 new 操作符。</p><p>如果它被用作一个对象的属性，那么这个属性会是不可枚举的：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var o = {
  val: 10,
  [ Symbol(&quot;random&quot;) ]: &quot;I&#39;m a symbol&quot;,
};

console.log(Object.getOwnPropertyNames(o)); // val

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要获取对象 symbol 属性，需要使用Object.getOwnPropertySymbols(o)。</p><p><strong><strong>15. 迭代器（Iterators）</strong></strong></p><p>迭代器允许每次访问数据集合的一个元素，当指针指向数据集合最后一个元素时，迭代器便会退出。它提供了 next() 函数来遍历一个序列，这个方法返回一个包含 done 和 value 属性的对象。</p><p>ES6 中可以通过 Symbol.iterator 给对象设置默认的遍历器，无论什么时候对象需要被遍历，执行它的 @@iterator 方法便可以返回一个用于获取值的迭代器。</p><p>数组默认就是一个迭代器：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var arr = [11,12,13];
var itr = arr[Symbol.iterator]();

itr.next(); // { value: 11, done: false }
itr.next(); // { value: 12, done: false }
itr.next(); // { value: 13, done: false }

itr.next(); // { value: undefined, done: true }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以通过 <a href="">Symbol.iterator</a> 自定义一个对象的迭代器。</p><p><strong><strong>16. Generators</strong></strong></p><p>Generator 函数是 ES6 的新特性，它允许一个函数返回的可遍历对象生成多个值。</p><p>在使用中你会看到 * 语法和一个新的关键词 yield:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function *infiniteNumbers() {
  var n = 1;
  while (true){
    yield n++;
  }
}

var numbers = infiniteNumbers(); // returns an iterable object

numbers.next(); // { value: 1, done: false }
numbers.next(); // { value: 2, done: false }
numbers.next(); // { value: 3, done: false }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每次执行 yield 时，返回的值变为迭代器的下一个值。</p><p><strong><strong>17. Promise</strong></strong></p><p>ES6 对 Promise 有了原生的支持，一个 Promise 是一个等待被异步执行的对象，当它执行完成后，其状态会变成 resolved 或者rejected。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var p = new Promise(function(resolve, reject) {
  if (/* condition */) {
    // fulfilled successfully
    resolve(/* value */);
  } else {
    // error, rejected
    reject(/* reason */);
  }
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每一个 Promise 都有一个 .then 方法，这个方法接受两个参数，第一个是处理 resolved 状态的回调，一个是处理 rejected 状态的回调：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>p.then((val) =&gt; console.log(&quot;Promise Resolved&quot;, val),
    (err) =&gt; console.log(&quot;Promise Rejected&quot;, err));

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="三、es6详细教程" tabindex="-1"><a class="header-anchor" href="#三、es6详细教程" aria-hidden="true">#</a> <strong>三、ES6详细教程</strong></h1><p><strong><strong>let、const、var的区别</strong></strong></p><blockquote><p>let 允许创建块级作用域，ES6 推荐在函数中使用 let 定义变量，而非 var：</p></blockquote><ul><li>使用var声明的变量，其作用域为该语句所在的函数内，且存在变量提升现象</li><li>使用let声明的变量，其作用域为该语句所在的代码块内，不存在变量提升现象</li><li>使用const声明的是常量，在后面的代码中不能再修改该常量的值</li></ul><table><thead><tr><th>var</th><th>let</th><th>const</th></tr></thead><tbody><tr><td>函数级作用域</td><td>块级作用域</td><td>块级作用域</td></tr><tr><td>变量提升</td><td>不存在变量提升</td><td>不存在变量提升</td></tr><tr><td>值可更改</td><td>值可更改</td><td>值不可更改</td></tr></tbody></table><p><strong>暂时性死区（块级作用域中）</strong></p><blockquote><p>在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）。</p></blockquote><p>会报错 referenceError</p><p><strong><strong>变量的解构赋值</strong></strong></p><p><strong>1、数组的解构赋值</strong></p><blockquote><p>ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。</p></blockquote><p>ES6 允许写成下面这样。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let [a, b, c] = [1, 2, 3];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>解构赋值允许指定默认值。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let [foo = true] = [];
foo // true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2、对象的解构赋值</strong></p><p>解构不仅可以用于数组，还可以用于对象。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let { foo, bar } = { foo: &#39;aaa&#39;, bar: &#39;bbb&#39; };
foo // &quot;aaa&quot;
bar // &quot;bbb&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果解构失败，变量的值等于undefined。</p><p><strong>3、字符串的解构赋值</strong></p><p><strong>4、数组和布尔值的解构赋值</strong></p><p><strong>5、函数参数的解构赋值</strong></p><p><strong>结构赋值用途</strong></p><ul><li>交换变量的值</li><li>从函数返回多个值</li><li>函数参数的定义</li><li>提取JSON数据</li><li>函数参数的默认值</li><li>遍历map结构</li><li>输入模块的指定方法</li></ul><p><strong><strong>Set和Map数据结构</strong></strong></p><p><strong>Set</strong></p><ul><li>成员唯一、无序且不重复；</li><li>[value, value]，键值与键名是一致的（或者说只有键值，没有键名）；</li><li>可以遍历，方法有：add、delete、has、clear、entries、forEach、keys、values</li><li>Set也能用来保存NaN和undefined， 如果有重复的NaN， Set会认为就一个NaN(实际上NaN!=NaN);</li></ul><p><strong>WeakSet</strong></p><ul><li>成员都是对象；</li><li>成员都是弱引用，可以被垃圾回收机制回收，可以用来保存 DOM 节点，不容易造成内存泄漏；</li><li>不能遍历，方法有 add、delete、has。</li></ul><p><strong>Map</strong></p><ul><li>本质上是键值对的集合，类似集合；</li><li>可以遍历，方法很多，可以跟各种数据格式转换。</li></ul><p><strong>WeakMap</strong></p><ul><li>只接受对象最为键名（null 除外），不接受其他类型的值作为键名；</li><li>键名是弱引用，键值可以是任意的，键名所指向的对象可以被垃圾回收，此时键名是无效的；</li><li>不能遍历，方法有 get、set、has、delete。</li></ul><p><strong><strong>forEach()</strong></strong></p><p>forEach方法中的function回调有三个参数：</p><ul><li>value：第一个参数是遍历的数组内容，</li><li>index：第二个参数是对应的数组索引，</li><li>array：第三个参数是数组本身</li></ul><p><strong>forEach() 语法：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[].forEach(function(value, index, array){
  //code something
});

// 使用箭头函数
[].forEach((value, index, array) =&gt; {
  //code something
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>forEach() 方法对数组的每个元素执行一次提供的函数。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var array = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;];

array.forEach(function(element) {
  console.log(element);
});

// 箭头函数
array.forEach(element =&gt; {
  console.log(element);
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>a;
b;
c;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>forEach() 方法对数组的每个元素执行一次提供的函数。总是返回undefined；</p>`,145);function m(b,p){const i=l("ExternalLinkIcon");return d(),a("div",null,[c,e("p",null,[e("a",u,[r("阮一峰：ES6 入门教程"),t(i)])]),o])}const x=s(v,[["render",m],["__file","ES6.html.vue"]]);export{x as default};
