import{_ as n,o as e,c as i,e as s}from"./app.37a6fc76.js";const r={},l=s(`<h1 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h1><h1 id="javascript数组、数组排序、常用api、数组去重、常见算法题" tabindex="-1"><a class="header-anchor" href="#javascript数组、数组排序、常用api、数组去重、常见算法题" aria-hidden="true">#</a> <strong>JavaScript数组、数组排序、常用API、数组去重、常见算法题</strong></h1><h1 id="一、数组" tabindex="-1"><a class="header-anchor" href="#一、数组" aria-hidden="true">#</a> <strong>一、数组</strong></h1><p><strong><strong>数组的概念</strong></strong></p><blockquote><p>数组是指一组数据的集合，其中的每个数据被称作为元素，在数组中可以存放任意类型的元素。数组是一种将一组数据存储在单个变量名下的优雅方式。</p></blockquote><p><strong><strong>创建数组</strong></strong></p><p><strong>数组的创建方式</strong></p><p>JS中创建数组的两种方式：</p><ul><li>利用new创建数组</li><li>利用数组字面量创建数组</li></ul><p><strong>利用new创建数组</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var 数组名=new Array();
var arr=new Array();  //创建一个新的空数组

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>利用数组字面量创建数组</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 1、利用数组字面量方式创建空的数组
    var 数组名 = [];
// 2、使用数组字面量方式创建带初始值的数值
    var 数组名 = [&#39;小白&#39;, &#39;小黑&#39;, &#39;大黄&#39;];

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>数组的字面量是方括号[ ]</li><li>声明数组并赋值称为数组的初始化</li><li>这种字面量方式也是我们以后最多使用的方式</li></ul><p><strong>数组的元素类型</strong></p><p>数组中可以存放任意类型的数据，例如字符串，数字，布尔值等</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var arrStus = [&#39;小白&#39;, 12, true, 28.9];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 1、数组（Array）：就是一组数据的集合，存储在单个变量下的优雅方式
// 2、利用new 创建数组
    var arr = new Array(); //创建了一个空的数组
// 3、利用数组字面量方式创建空的数组
    var arr = []; //创建了一个空的数组
    var arr1 = [&#39;小白&#39;, &#39;小黑&#39;, &#39;大黄&#39;, 1, 2, true];
// 4、我们数组里面的数据一定用逗号分隔
// 5、数组里面的数据 比如1,2  我们称为数组元素

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>获取数组元素</strong></strong></p><p><strong>数据的索引</strong></p><p>索引（小标）：用来访问数组元素的序号（数组下标从0开始）</p><p>数组可以通过索引来访问、设置、修改对应的数组元素，我们可以通过“数组名[索引]”的形式来获取数组中的元素。</p><p>这里的访问就是获取得到的意思</p><p><strong><strong>遍历数组</strong></strong></p><p>遍历：就是把数组中的每个元素从头到尾都访问一次（类似学生点名）。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 遍历数组：就是把数组的元素从头到尾访问一次
    var arr = [&#39;red&#39;, &#39;green&#39;, &#39;blue&#39;];
    for (var i = 0; i &lt; 3; i++) {
        console.log(arr[i]);
    }
// 1、因为我们的数组索引号从0开始，所以 i 必须从 0开始  i&lt;3
// 2、输出的时候arr[i] i 计数器当索引号来用

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>数组的长度</strong></p><p>使用“数组名：length”可以访问数组元素的数量（数组长度）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 数组长度  数组名.length
    var arr = [&#39;关羽&#39;, &#39;张飞&#39;, &#39;马超&#39;, &#39;赵云&#39;, &#39;黄忠&#39;, &#39;刘备&#39;, &#39;姜维&#39;];
    for (var i = 0; i &lt; 7; i++) {
        console.log(arr[i]);
    }
    console.log(arr.length);
    for (var i = 0; i &lt; arr.length; i++) {
        console.log(arr[i]);
    }
// 1.数组的长度是元素个数 不要跟索引号混淆
// 2.arr.length动态监测数组元素的个数

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>数组中新增元素</strong></strong></p><p>可以通过修改length长度以及索引号增加数组元素</p><p><strong>1. 通过修改length长度新增数组元素</strong></p><ul><li>可以通过修改length长度来实现数组扩容的目的</li><li>length属性是可读写的</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 1.新增数组元素  修改length长度
var arr = [&#39;red&#39;, &#39;green&#39;, &#39;blue&#39;];
console.log(arr.length);
arr.length = 5; //把我们数组的长度修改为 5 里面应该有5个元素
console.log(arr);
console.log(arr[3]);  //undefined
console.log(arr[4]);  //undefined

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中索引号3、4的空间没有给值，就是声明变量未给值，默认值就是undefined</p><p><strong>通过修改数组索引新增数组元素</strong></p><ul><li>可以通过修改数组索引的方式追加数组元素</li><li>不能直接给数组名赋值，否则会覆盖掉以前的数据</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 2.新增数组元素 修改索引号 追加数组元素
var arr1 = [&#39;red&#39;, &#39;green&#39;, &#39;blue&#39;];
arr1[3] = &#39;pink&#39;;
console.log(arr1);
arr1[4] = &#39;hotpink&#39;;
console.log(arr1);
arr1[0] = &#39;yellow&#39;; //这里是替换原来的数组元素
console.log(arr1);
arr1 = &#39;有点意思&#39;;
console.log(arr1); //不要直接给 数组名赋值 否则里面的数组元素都没有了

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>翻转数组</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 将数组[&#39;red&#39;,&#39;green&#39;,&#39;blue&#39;,&#39;pink&#39;,&#39;purple&#39;]的内容反过来存放
// 1、声明一个新数组newArr
// 2、把旧数组索引号第4个取过来（arr.length -1），给新数组索引号第0个元素(newArr.length)
// 3、我们采取递减的方式 i--
var arr = [&#39;red&#39;, &#39;green&#39;, &#39;blue&#39;, &#39;pink&#39;, &#39;purple&#39;];
var newArr = [];
for (var i = arr.length - 1; i &gt;= 0; i--) {
    newArr[newArr.length] = arr[i]
}
console.log(newArr);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="二、数组方法" tabindex="-1"><a class="header-anchor" href="#二、数组方法" aria-hidden="true">#</a> <strong>二、数组方法</strong></h1><p><strong><strong>方法汇总</strong></strong></p><ul><li>pop() 从数组中删除最后一个元素</li><li>push() 方法（在数组结尾处）向数组添加一个新的元素</li><li>shift() 方法会删除首个数组元素，并把所有其他元素“位移”到更低的索引。</li><li>unshift() 方法（在开头）向数组添加新元素，并“反向位移”旧元素</li><li>splice() 方法可用于向数组添加新项</li><li>sort() 方法用于对数组的元素进行排序。</li><li>reverse() 方法反转数组中元素的顺序。</li><li>concat() 方法通过合并（连接）现有数组来创建一个新数组</li><li>slice() 方法用数组的某个片段切出新数组。</li><li>isArray() 这个方法主要用来判断变量是否是一个js数组。</li><li>forEach() 这个方法主要用于遍历数组。</li><li>reduce() 主要是对数组中的每个元素执行函数，生成一个值。例如，下面求数组元素的总和。</li><li>indexOf() 主要用于在数组中查找元素，并把元素的位置返回来。</li><li>filter() 与map方法类似，也是对数组中的每个元素执行相同的函数，将结果组合成一个新数组。</li><li>map() 主要用于对每个数组里面的元素执行相同的函数来创建新的数组。</li><li>find() 返回通过测试（函数内判断）的数组的第一个元素的值。</li><li>some() 用于检测数组中的元素是否满足指定条件（函数提供）。</li><li>every() 主要用于检查数组中每个元素是否符合函数的条件，如果其中有一个不符合，则返回false</li></ul><p>push()、pop()、shift()、unshift()、splice()、sort()、reverse()方法会改变原数组</p><p>filter()、concat()、slice()方法会返回新数组</p><p><strong><strong>pop()</strong></strong></p><blockquote><p>pop() 从数组中删除最后一个元素</p></blockquote><p><strong>实现原理</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Array.prototype.pop = function () {
    //this :当前实例
    var num = this[this.length-1];
    this.length--;
    return num;
};
console.log(ary.pop());
console.log(ary);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>push()</strong></strong></p><blockquote><p>push() 方法（在数组结尾处）向数组添加一个新的元素</p></blockquote><p><strong>实现原理</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Array.prototype.push=function () {
    for (var i = 0; i &lt; arguments.length; i++){
        this[this.length] = arguments[i]
    }
    return this.length;
};
console.log(ary.push(1, 2, 3));
console.log(ary);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>shift()</strong></strong></p><blockquote><p>shift() 方法会删除首个数组元素，并把所有其他元素“位移”到更低的索引。</p></blockquote><p><strong>实现原理</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Array.prototype.shift = function () {
    var num=this[0];
    for(var i = 1; i &lt; this.length; i++){
        this[i-1]=this[i];
    }
    this.length--;
    return num;
};
console.log(ary.shift());
console.log(ary);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>unshift()</strong></strong></p><blockquote><p>unshift() 方法（在开头）向数组添加新元素，并“反向位移”旧元素</p></blockquote><p><strong>实现原理</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Array.prototype.unshift = function () {
    var ary = [...arguments,...this];
    this.length = ary.length;
    for(var i = 0; i &lt; ary.length; i++){
        this[i] = ary[i];
    }
    return ary.length;
};
Array.prototype.unshift = function () {
    var str=&quot;&quot;;
    for(var i = 0; i &lt; arguments.length; i++){
        if(typeof arguments[i] == &quot;string&quot;){
            str += &quot;&#39;&quot; + arguments[i] + &quot;&#39;,&quot;;
        }else {
            str += arguments[i] + &quot;,&quot;;
        }

    }
    for(var i = 0; i &lt; this.length;i++){
        if(typeof this[i] == &quot;string&quot;){
            str += &quot;&#39;&quot; + this[i] + &quot;&#39;,&quot;
        } else {
            str += this[i] + &quot;,&quot;
        }
    }
    var ary = eval(&quot;[&quot;+str+&quot;]&quot;);
    this.length=ary.length;
    for(var i = 0; i &lt; ary.length; i++){
        this[i] = ary[i];
    }
    return ary.length;
};
ary.unshift(&quot;哈哈&quot;,&quot;嘿嘿&quot;);
console.log(ary);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>splice()</strong></strong></p><blockquote><p>splice() 方法可用于向数组添加新项</p></blockquote><p><strong><strong>concat()</strong></strong></p><blockquote><p>concat() 方法通过合并（连接）现有数组来创建一个新数组</p></blockquote><p><strong><strong>slice()</strong></strong></p><blockquote><p>slice() 方法用数组的某个片段切出新数组。</p></blockquote><p><strong><strong>reverse()</strong></strong></p><blockquote><p>reverse() 方法反转数组中元素的顺序。</p></blockquote><p>语法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>array.reverse()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注释：reverse() 方法将改变原始数组。</p><p><strong><strong>filter()</strong></strong></p><blockquote><p>与map方法类似，也是对数组中的每个元素执行相同的函数，将结果组合成一个新数组。</p></blockquote><p><strong>用法</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let arr=[2,4,6,8];
let arr1 = arr.filter(function(item){
    return item &gt; 5
})
console.log(arr1) //[6,8]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>实现原理</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Array.prototype.filter1 = function (fn) {
    if (typeof fn !== &quot;function&quot;) {
        throw new TypeError(\`\${fn} is not a function\`);
    }
    let newArr = [];
    for(let i = 0; i &lt; this.length; i++) {
        fn(this[i]) &amp;&amp; newArr.push(this[i]);
    }
    return newArr;
}
let arr = [2,4,6,8];
let arr1 = arr.filter1(function(item){
    return item&gt;5
})
console.log(arr1) //[6,8]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>map()</strong></strong></p><blockquote><p>主要用于对每个数组里面的元素执行相同的函数来创建新的数组。</p></blockquote><p><strong>用法</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let arr = [&#39;bob&#39;, &#39;grex&#39;, &#39;tom&#39;];
let arr1 = arr.map(function(item) {
    return \`&lt;li&gt;\${item}&lt;/li&gt;\`;
});
console.log(arr1); //[ &#39;&lt;li&gt;bob&lt;/li&gt;&#39;, &#39;&lt;li&gt;grex&lt;/li&gt;&#39;, &#39;&lt;li&gt;tom&lt;/li&gt;&#39; ]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>实现原理</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Array.prototype.map = function(fn) {
    if (typeof fn !== &quot;function&quot;) {
        throw new TypeError(\`\${fn} is not a function\`);
    }
    let newArr = [];
    for (let i = 0; i &lt; this.length; i++) {
        newArr.push(fn(this[i]))
    };
    return newArr;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>find()</strong></strong></p><blockquote><p>返回通过测试（函数内判断）的数组的第一个元素的值。为数组中的每个元素都调用一次函数执行</p></blockquote><ul><li>当数组中的元素在测试条件时返回 true 时, find() 返回符合条件的元素，之后的值不会再调用执行函数。</li><li>如果没有符合条件的元素返回 undefined</li></ul><p>注意: find() 对于空数组，函数是不会执行的。find() 并没有改变数组的原始值。</p><p><strong>用法</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let arr = [1,2,3];
let arr1 = arr.find(function (item) {
    return item &gt;= 2
});
console.log( arr5); //2

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>实现原理</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Array.prototype.find = function(fn) {
    if (typeof fn !== &quot;function&quot;) {
	throw new TypeError(\`\${fn} is not a function\`);
    }
    for (let i = 0; i &lt; this.length; i++) {
        if (fn(this[i])) return this[i]
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>some()</strong></strong></p><blockquote><p>用于检测数组中的元素是否满足指定条件（函数提供）。会依次执行数组的每个元素</p></blockquote><ul><li>如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测。</li><li>如果没有满足条件的元素，则返回false。</li></ul><p>注意: some() 对于空数组，函数是不会执行的。some() 并没有改变数组的原始值。</p><p><strong>用法</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let arr = [2, 4, 6, 8];
let flag = arr.some(function(item) {
    return item &gt; 5
});
console.log(flag); //true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>实现原理</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Array.prototype.some=function (fn) {
    if (typeof fn !== &quot;function&quot;) {
        throw new TypeError(\`\${fn} is not a function\`);
    }
    for(let i = 0; i &lt; this.length; i++){
        if(fn(this[i])) {
            return true
        }
    }
    return false
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>every()</strong></strong></p><blockquote><p>用于检测数组所有元素是否都符合指定条件（通过函数提供）。使用指定函数检测数组中的所有元素</p></blockquote><ul><li>如果数组中检测到有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再进行检测。</li><li>如果所有元素都满足条件，则返回 true。</li></ul><p>注意: every() 对于空数组，函数是不会执行的。every() 并没有改变数组的原始值。</p><p><strong>用法</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let arr = [2, 4, 6, 8];
let flag = arr.every(function(item) {
    return item &gt; 5
});
console.log(flag); //false

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>实现原理</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Array.prototype.every = function (fn) {
    if (typeof fn !== &quot;function&quot;) {
        throw new TypeError(\`\${fn} is not a function\`);
    }
    for(let i = 0; i &lt; this.length; i++){
        if(!fn(this[i])) {
            return false
        }
    }
    return true
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>是否改变原数组</strong></strong></p><p><strong>以下方法会改变原数组</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var arr = []
arr.splice()
arr.reverse()
arr.sort()
arr.push()
arr.pop()
arr.unshift()
arr.shift()

// es6方法
arr.fill()
arr.copyWithin()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以下方法不会改变原数组</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var arr = []
arr.slice()
arr.map()
arr.forEach()
arr.every()
arr.some()
arr.filter()
arr.reduce()
arr.entries()
arr.find()
arr.concat(&#39;1&#39;,[&#39;2&#39;,&#39;3&#39;]) //[1,2,3]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="三、数组排序" tabindex="-1"><a class="header-anchor" href="#三、数组排序" aria-hidden="true">#</a> <strong>三、数组排序</strong></h1><p><strong><strong>数组排序</strong></strong></p><p><strong>sort() 方法以字母顺序对数组进行排序：</strong></p><p>默认地，sort() 函数按照字符串顺序对值进行排序。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var fruits = [&quot;Banana&quot;, &quot;Orange&quot;, &quot;Apple&quot;, &quot;Mango&quot;];
fruits.sort();
console.log(fruits)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>reverse() 方法反转数组中的元素。</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var fruits = [&quot;Banana&quot;, &quot;Orange&quot;, &quot;Apple&quot;, &quot;Mango&quot;];
fruits.sort();            // 对 fruits 中的元素进行排序
fruits.reverse();         // 反转元素顺序

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认地，sort() 函数按照字符串顺序对值进行排序。</p><p>该函数很适合字符串（&quot;Apple&quot; 会排在 &quot;Banana&quot; 之前）。</p><p>不过，如果数字按照字符串来排序，则 &quot;25&quot; 大于 &quot;100&quot;，因为 &quot;2&quot; 大于 &quot;1&quot;。</p><p>正因如此，sort() 方法在对数值排序时会产生不正确的结果。</p><p>我们通过一个比值函数来修正此问题：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>冒泡排序</strong></strong></p><blockquote><p>冒泡排序：是一种算法，把一系列的数据按照一定的顺序进行排列显示（从小到大或从大到小）</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 冒泡排序
var arr = [5, 4, 3, 2, 1];
for (var i = 0; i &lt; arr.length - 1; i++) { //外面循环管趟数
    for (var j = 0; j &lt;= arr.length - i - 1; j++) { //里面的循环管每一趟交换的次数
        // 内部交换2个变量的值 前一个和后面一个数组元素相比较
        if (arr[j] &gt; arr[j + 1]) {
            var temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
console.log(arr);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="js-数组、字符串-常用api" tabindex="-1"><a class="header-anchor" href="#js-数组、字符串-常用api" aria-hidden="true">#</a> <strong>JS(数组、字符串，常用API)</strong></h1><p><strong><strong>API定义</strong></strong></p><blockquote><p>API：JS中预定义好的一些函数或者方法</p></blockquote><p><strong><strong>数组API</strong></strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>toString()   将数组转为字符串，元素之间用逗号隔开
join()   将数组转为字符串，可以指定元素之间的分隔符

reverse()   翻转数组元素，原数组会发生变化
sort()   对数组进行排序，默认是按照首个字符的Unicode码排列，原数组会发生变化

shift()   删除数组开头的一个元素，返回删除的元素，原数组会发生变化
pop()   删除数组末尾的一个元素，返回删除的元素，原数组会发生变化
unshift()   在数据的开头添加元素，返回数组的长度，原数组会发生变化
push()   在数据的末尾添加元素，返回数组的长度，原数组会发生变化
indexOf()   查看数组中是否含有某个元素，返回下标，如果找不到返回-1

slice(start, end)   截取数组元素，start开始的下标，end结束的下标，不包括end本身，end为空截取	到最后，下标为负数表示倒数，返回截取到的元素。
splice(start, count, v1,v2)   删除数组元素，start开始的下标，count删除的长度，count为空删除到最	后，下标为负数表示倒数，v1，v2表示删除后补充的元素，返回删除的元素，原数组会发生变化。

concat() 方法用于连接两个或多个字符串。
every() 方法用于检测数组所有元素是否都符合指定条件（通过函数提供）。
some() 方法用于检测数组中的元素是否满足指定条件（函数提供）。
filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>字符串API</strong></strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>length   获取字符串的长度
charAt()    获取下标对应的字符，也可以使用数组的写法   字符串[下标]

indexOf()   查找字符串中是否含有某个字符串，返回满足条件的第一个的下标，找不到返回-1
lastIndexOf()   查找字符串中是否含有某个字符串，返回满足条件的最后一个的下标，找不到返回-1

taosang#tedu.cn
toUpperCase()  英文字母转大写
toLowerCase()  英文字母转小写
所有的字符串对象下的API都不会对原来的字符串产生任何影响，会生成一个新的字符串
slice(start, end)   截取字符串，start开始的下标，end结束的下标，不包括end本身，end为空截取到	最后，如果下标为负数表示倒数

substr(start,count)  截取字符串，start开始的下标，count截取的长度，count为空截取到最后，下标为	负数表示倒数
split()    将字符串转为数组

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>Number对象API</strong></strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>new Number()   将数据转为数值，返回对象
Number()   将数据转为数值，返回是数值
toFixed(n)   保留小数点后n位
toString()   将数值转为字符串

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>Boolean对象</strong></strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>new Boolean()  将数据转为布尔型，返回对象
Boolean()  将数据转为布尔型，返回布尔型
!!数据    将数据隐式转换为布尔型

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>Math对象API</strong></strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PI   圆周率
abs()   获取绝对值
ceil()  向上取整
floor()  向下取整
round()  四舍五入取整
pow(x,y)   次方/次幂
max()  获取一组数字最大值
min()  获取一组数字最小值
random()   获取随机   &gt;=0   &lt;1

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>Date对象API</strong></strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>getFullYear()/getMonth()/getDate()
    月份的范围是0~11，代表1~12月
getHours()/getMinutes()/getSeconds()/getMilliseconds()  获	取毫秒
getDay()    获取星期  0~6  对应 星期日~星期六
getTime()   获取距离计算机元年的毫秒数

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="四、数组去重" tabindex="-1"><a class="header-anchor" href="#四、数组去重" aria-hidden="true">#</a> <strong>四、数组去重</strong></h1><p><strong><strong>最简单方法（indexOf 方法）</strong></strong></p><p>实现思路：新建一个数组，遍历要去重的数组，当值不在新数组的时候（indexOf 为 -1）就加入该新数组中；</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function unique(arr){
    var newArr = [];
    for(var i = 0; i &lt; arr.length; i++){
        if(newArr.indexOf(arr[i]) == -1){
            newArr.push(arr[i])
        }
    }
    return newArr;
}

var arr = [1,2,2,3,4,4,5,1,3];
var newArr = unique(arr);
console.log(newArr);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>优化遍历数组法</strong></strong></p><p>实现思路：双层循环，外循环表示从0到arr.length，内循环表示从i+1到arr.length，</p><p>将没重复的右边值放入新数组。（检测到有重复值时终止当前循环同时进入外层循环的下一轮判断）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function unique(arr){
    var newArr = [];
    for(var i = 0; i &lt; arr.length; i++){
        for(var j = i+1; j &lt; arr.length; j++){
            if(arr[i] == arr[j]){
                ++i;
            }
        }
        newArr.push(arr[i]);
    }
    return newArr;
}
var arr = [1,2,2,3,5,3,6,5];
var newArr = unique(arr);
console.log(newArr);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>利用对象的属性不能相同的特点进行去重（推荐使用）</strong></strong></p><p>实现思路：</p><ul><li>1.创建一个新的数组存放结果</li><li>2.创建一个空对象</li><li>3.for循环时，每次取出一个元素与对象进行对比，如果这个元素不重复，则把它存放到结果数组中，同时把这个元素的内容作为对象的一个属性，并赋值为1，存入到第2步建立的对象中。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function unique(arr){
    var res = [];
    var obj = {};
    for(var i = 0; i &lt; arr.length; i++){
    if( !obj[arr[i]] ){
            obj[arr[i]] = 1;
            res.push(arr[i]);
        }
    }
    return res;
}
var arr = [1,2,2,3,5,3,6,5];
var res = unique(arr)
console.log(res );

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>ES6 数组去重</strong></strong></p><p>利用 ES6的 Set 方法。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function unique(arr){
    //Set数据结构，它类似于数组，其成员的值都是唯一的
    return Array.from(new Set(arr)); // 利用Array.from将Set结构转换成数组
}

var arr = [1,2,2,3,5,3,6,5];
var res = unique(arr)
console.log(res);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="六、常见算法题" tabindex="-1"><a class="header-anchor" href="#六、常见算法题" aria-hidden="true">#</a> <strong>六、常见算法题</strong></h1><p><strong><strong>统计字符串中出现最多的字母</strong></strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
* 获取字符串中出现次数最多的字母
* @param {String} str
*/
function getChar(str) {
    if (typeof str !== &#39;string&#39;) return // 判断参数是否为字符串
    const obj = new Object() // 键为字母，值为次数
    for (let i = 0; i &lt; str.length; i ++) { // 遍历字符串每一个字母
        let char = str.charAt(i) // 当前字母
        obj[char] = obj[char] || 0 // 保证初始值为0
        obj[char] ++ // 次数加1
    }
    let maxChar // 存储字母
    let maxNum = 0 // maxChar字母对应的次数
    for(let key in obj) { // 遍历obj
        if (obj[key] &gt; maxNum) {
            maxChar = key // 比较后存储次数多的字母
            maxNum = obj[key] // 以及它对应的次数
        }
    }
    return maxChar // 返回结果
}

let str = &#39;aabbbccdd&#39;
console.log(&#39;出现次数最多的字母为：&#39; + getChar(str))

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>字符串反序</strong></strong></p><p>首先将字符串序列化成数组，通过数组方法对数组反序，最后把数组转换成字符串。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&#39;say I love U&#39;.split(&#39;&#39;).reverse().join(&#39;&#39;)   //  U evol I yas
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,165),d=[l];function a(t,v){return e(),i("div",null,d)}const c=n(r,[["render",a],["__file","数组.html.vue"]]);export{c as default};
