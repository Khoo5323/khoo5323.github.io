import{_ as s,r as l,o as a,c as d,b as e,d as n,e as r,a as t}from"./app.74a5dc6f.js";const v={},o=t(`<h1 id="对象" tabindex="-1"><a class="header-anchor" href="#对象" aria-hidden="true">#</a> 对象</h1><h1 id="javascript对象" tabindex="-1"><a class="header-anchor" href="#javascript对象" aria-hidden="true">#</a> <strong>JavaScript对象</strong></h1><h1 id="一、对象" tabindex="-1"><a class="header-anchor" href="#一、对象" aria-hidden="true">#</a> <strong>一、对象</strong></h1><p><strong><strong>什么是对象？</strong></strong></p><p>现实生活中：万物皆对象，对象是一个具体的事物，看得见摸得着的实物。例如，一本书，一辆汽车，一个人可以是“对象”，一个数据库，一张网页一个与远程服务器的连接也可以是“对象”。</p><p>在JavaScript中，对象是一组无序的相关属性和方法的集合，所有的事物都是对象，例如字符串、数值、数组、函数等。</p><p>对象是由属性和方法组成的：</p><ul><li>属性：事物的特征，在对象中用属性来表示（常用名词）</li><li>方法：事物的行为，在对象中用方法来表示（常用动词）</li></ul><p><strong><strong>为什么需要对象</strong></strong></p><p>保存一个值时，可以使用变量，保存多个值（一组值）时，可以使用数组，如果要保存一个人的完整信息呢？</p><p>JS中的对象表达结构更清晰，更强大</p><p><strong><strong>创建对象的三种方式</strong></strong></p><p>在JavaScript中，现阶段我们可以采用三种方式创建对象（object）：</p><ul><li>利用字面量创建对象</li><li>利用new Object创建对象</li><li>利用构造函数创建对象</li></ul><p><strong><strong>利用字面量创建对象</strong></strong></p><blockquote><p>对象字面量：就是花括号{}里面包含了表达这个具体事物（对象）的属性和方法。</p></blockquote><p>对象的调用</p><ul><li>对象里面的属性调用：对象.属性名，这个小点.就理解为“的”</li><li>对象里面属性的另一种调用方式：对象[&#39;属性名&#39;]，注意方括号里面的属性必须加引号，</li><li>对象里面的方法调用：对象.方法名()，注意这个方法名后面一定加括号</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>console.log(star.name);      //调用名字属性
console.log(star[&#39;name&#39;]);   //调用名字属性
star.sayHi();                //调用sayHi方法，一定不要忘记带后面的括号

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>利用new Object创建对象</strong></strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 利用 new Object 创建对象
var obj = new Object(); //创建了一个空的对象
obj.uname = &#39;张三疯&#39;;
obj.age = 18;
obj.sex = &#39;男&#39;;
obj.sayHi = function() {
        console.log(&#39;hi~&#39;);

    }
    // (1)我们利用 等号=赋值的方法 添加对象的属性和方法
    // (2)每个属性和方法之间用 分号;结束
console.log(obj.uname);
console.log(obj[&#39;sex&#39;]);
obj.sayHi();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>利用构造函数创建对象</strong></strong></p><p>构造函数：是一种特殊的函数，主要用来初始化对象，即为对象成员变量赋初始值，它总与new运算符一起使用，我们可以把对象中一些公共的属性和方法抽取出来，然后封装到这个函数里面。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 利用构造函数创建对象
// 我们需要创建四大天王的对象  相同的属性：名字 年龄 性别  相同的方法：唱歌
// 构造函数的语法格式
function 构造函数名() {
    this.属性 = 值;
    this.方法 = function() {}
}
new 构造函数名();

function Star(uname, age, sex) {
    this.name = uname;
    this.age = age;
    this.sex = sex;
    this.sing=function(sang){
        console.log(sang);
    }
}
var ldh = new Star(&#39;刘德华&#39;, 18, &#39;男&#39;); //调用函数返回的是一个对象
// console.log(typeof ldh); //object
console.log(ldh.name);
ldh.sing(&#39;冰雨&#39;);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>总结</strong></p><ul><li>1.构造函数名字首字母要大写</li><li>2.我们构造函数不需要return 就可以返回结果</li><li>3.我们调用构造函数 必须使用 new</li><li>4.我们只要new Star() 调用函数就创建一个对象ldh</li><li>5.我们的属性和方法前面必须添加 this</li></ul><h1 id="二、其他对象" tabindex="-1"><a class="header-anchor" href="#二、其他对象" aria-hidden="true">#</a> <strong>二、其他对象</strong></h1><p><strong><strong>包装对象</strong></strong></p><blockquote><p>对象是 JavaScript 语言最主要的数据类型，三种原始类型的值——数值、字符串、布尔值——在一定条件下，也会自动转为对象，也就是原始类型的“包装对象”（wrapper）。</p></blockquote><p><strong>包装类</strong></p><ul><li>Boolean</li><li>String</li><li>Number</li></ul><p>原始值不能有属性和方法，当给它们添加属性的时候系统会自动进行包装类并销毁。</p><p><strong>包装对象</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var v1 = new Number(123);
var v2 = new String(&#39;abc&#39;);
var v3 = new Boolean(true);

typeof v1 // &quot;object&quot;
typeof v2 // &quot;object&quot;
typeof v3 // &quot;object&quot;

v1 === 123 // false
v2 === &#39;abc&#39; // false
v3 === true // false

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所谓“包装对象”，指的是与数值、字符串、布尔值分别相对应的Number、String、Boolean三个原生对象。这三个原生对象可以把原始类型的值变成（包装成）对象。</p><p>包装对象的设计目的，首先是使得“对象”这种类型可以覆盖 JavaScript 所有的值，整门语言有一个通用的数据模型，其次是使得原始类型的值也有办法调用自己的方法。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 字符串转为数值
Number(&#39;123&#39;) // 123

// 数值转为字符串
String(123) // &quot;123&quot;

// 数值转为布尔值
Boolean(123) // true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：这三个对象作为构造函数使用（带有new）时，可以将原始类型的值转为对象；作为普通函数使用时（不带有new），可以将任意类型的值，转为原始类型的值。</p><p><strong>实例方法</strong></p><p>三种包装对象各自提供了许多实例方法。这里介绍两种它们共同具有、从Object对象继承的方法：valueOf()和toString()。</p><p>valueOf()</p><p>valueOf()方法返回包装对象实例对应的原始类型的值。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>new Number(123).valueOf()  // 123
new String(&#39;abc&#39;).valueOf() // &quot;abc&quot;
new Boolean(true).valueOf() // true
toString()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>toString()方法返回对应的字符串形式。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>new Number(123).toString() // &quot;123&quot;
new String(&#39;abc&#39;).toString() // &quot;abc&quot;
new Boolean(true).toString() // &quot;true&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,45),c={href:"https://www.cnblogs.com/wxdddm/p/12894311.html",target:"_blank",rel:"noopener noreferrer"};function u(b,m){const i=l("ExternalLinkIcon");return a(),d("div",null,[o,e("p",null,[n("本文参考："),e("a",c,[n("js对象"),r(i)])])])}const p=s(v,[["render",u],["__file","对象.html.vue"]]);export{p as default};
