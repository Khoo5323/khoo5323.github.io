import{_ as s,r as a,o as r,c as l,a as n,b as e,d,e as i}from"./app.37a6fc76.js";const o={},v=i(`<h1 id="正则" tabindex="-1"><a class="header-anchor" href="#正则" aria-hidden="true">#</a> 正则</h1><h1 id="javascript执行上下文、浅拷贝和深拷贝、正则" tabindex="-1"><a class="header-anchor" href="#javascript执行上下文、浅拷贝和深拷贝、正则" aria-hidden="true">#</a> <strong>JavaScript执行上下文、浅拷贝和深拷贝、正则</strong></h1><h1 id="一、浅拷贝和深拷贝" tabindex="-1"><a class="header-anchor" href="#一、浅拷贝和深拷贝" aria-hidden="true">#</a> <strong>一、浅拷贝和深拷贝</strong></h1><p><strong><strong>什么是浅拷贝和深拷贝</strong></strong></p><p>在讲两者概念之前我们先看一个需求：现在有一个对象A，需求是将A拷贝一份到B对象当中？</p><p>浅拷贝</p><p>当B拷贝了A的数据，且当B的改变会导致A的改变时，此时叫B浅拷贝了A，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//浅拷贝
var A={
    name:&quot;martin&quot;,
    data:{num:10}
}
var B={}
var B=A;
B.name=&quot;lucy&quot;;
console.log(A.name);    //lucy

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A直接赋值给B后，B中name属性的改变导致了A中name属性也发生了变化。</p><p>其实是因为这种赋值方式只是将A的堆内存地址赋值给了B，A和B储存的是同一个地址，指向的是同一个内容，因此B的改变当然会引起A的改变。</p><p><strong><strong>浅拷贝的方式</strong></strong></p><ul><li>直接赋值</li></ul><p>第一种方式就是上面所写代码中的将对象地址直接进行赋值。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var A={
    name:&quot;martin&quot;,
    data:{num:10}
};
var B={};
B=A;
B.name=&quot;lucy&quot;;
console.log(A.name);    //&quot;lucy&quot;,A中name属性已改变

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Object.assign(target,source)</li></ul><p>这是ES6中新增的对象方法，对它不了解的见ES6对象新增方法，它可以实现第一层的“深拷贝”，但无法实现多层的深拷贝。</p><p>以当前A对象进行说明</p><p>第一层“深拷贝”：就是对于A对象下所有的属性和方法都进行了深拷贝，但是当A对象下的属性如data是对象时，它拷贝的是地址，也就是浅拷贝，这种拷贝方式还是属于浅拷贝。</p><p>多层深拷贝：能将A对象下所有的属性，及时属性是对象，也能够深拷贝出来，让A和B相互独立，这种叫才叫深拷贝。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var A={
    name:&quot;martin&quot;,
    data:{num:10}，
    say:function(){
        console.log(&quot;hello world&quot;)
    }
}
var B={}
Object.assign(B,A);    //将A拷贝到B
B.name=&quot;lucy&quot;;
console.log(A.name);    //martin,发现A中name并没有改变
B.data.num=5;
console.log(A.data.num);     //5,发现A中data的num属性改变了，说明data对象没有被深拷贝

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>总结</strong></p><ul><li>直接赋值：这种方式实现的就是纯粹的浅拷贝，B的任何变化都会反映在A上。</li><li>Object.assign()：这种方式实现的实现的是单层“深拷贝”，但不是意义上的深拷贝，对深层还是实行的浅拷贝。</li></ul><p><strong><strong>深拷贝</strong></strong></p><p>当B拷贝了A的数据，且当B的改变不会导致A的改变时，此时叫B深拷贝了A，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//深拷贝
var A={
    name:&quot;martin&quot;,
    data:{num:10}，
    say:function(){
        console.log(&quot;hello world&quot;)
    }
}                        //开辟了一个新的堆内存地址，假设为placaA
var B={};        //又开辟了一个新的堆内存地址，假设为placeB
B=JSON.parse(JSON.stringify(A));
B.name=&quot;lucy&quot;;
console.log(A.name);    //martin

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过JSON对象方法实现对象的深拷贝，我们可以看到其中B.name值的改变并没有影响A.name的值，因为A和B分别指向不同的堆内存地址，因此两者互不影响。</p><p><strong>深拷贝的方式</strong></p><p>理解了深浅拷贝，接下来说一下深拷贝的几种方式。</p><p>首先假设一个已知的对象A，然后需要把A深拷贝到B。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var A={
    name:&quot;martin&quot;,
    data:{num:10},
    say:function () {
        console.log(&quot;say&quot;);
    }
};
var B={};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>递归赋值</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function deepCopy(A,B) {
    for(item in A){
        if(typeof item==&quot;object&quot;){
            deepCopy(item,B[item]);
        }else{
            B[item]=A[item];
        }
    }
}
deepCopy(A,B);
B.data.num=5;
console.log(A.data.num);    //10，A中属性值并没有改变,说明是深拷贝

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过这种方式能实现深层拷贝，而且能自由控制拷贝是如何进行的，如：当B中有和A同名的属性，要不要重新赋值？这些都可以进行控制，但是代码相对复杂一些。</p><ul><li>JSON.parse()和JSON.stringify</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var B=JSON.parse(JSON.stringify(A));
B.data.num=5;
console.log(A.data.num);    //10,A中属性值并没有改变,说明是深拷贝

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用这种方式实现深拷贝的时候要，上述代码中B也并没有拷贝出A中的say函数，这和JSON.stringify方法的规则有关系，它在序列化的时候会直接忽略函数，因此最后A中的say函数没有被拷贝到B，关于JSON.stringify序列化的具体规则见JSON.stringify指南。</p><p><strong>总结</strong></p><ul><li>递归：使用递归进行深拷贝时比较灵活，但是代码较为复杂；</li><li>JSON对象：JSON对象方法实现深拷贝时比较简单，但是当拷贝对象包含方法时，方法会被丢失；</li></ul><p>因此使用者可按自身的使用场景来选择拷贝方式。</p><p><strong><strong>递归</strong></strong></p><blockquote><p>递归函数是在一个函数内通过名字调用自身的情况。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function fun() {
    // 自己调用自己，称为递归调用
    fun();
    console.log(&quot;m2&quot;);
}
fun();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：递归需要一个边界条件来打断递归。要不然的话会进入死循环!</p><h1 id="二、正则表达式" tabindex="-1"><a class="header-anchor" href="#二、正则表达式" aria-hidden="true">#</a> <strong>二、正则表达式</strong></h1><blockquote><p>正则表达式的语法体现在字符模式上。字符模式是一组特殊格式的字符串，它由一系列特殊字符和普通字符构成，其中每个特殊字符都包含一定的语义和功能。</p></blockquote>`,45),u={href:"https://c.runoob.com/front-end/854/",target:"_blank",rel:"noopener noreferrer"},c=i(`<p><strong><strong>描述字符</strong></strong></p><p>根据正则表达式语法规则，大部分字符仅能够描述自身，这些字符被称为普通字符，如所有的字母、数字等。</p><p>元字符就是拥有特动功能的特殊字符，大部分需要加反斜杠进行标识，以便于普通字符进行区别，而少数元字符，需要加反斜杠，以便转译为普通字符使用。JavaScript 正则表达式支持的元字符如表所示。</p><table><thead><tr><th>元字符</th><th>描述</th></tr></thead><tbody><tr><td>.</td><td>查找单个字符，除了换行和行结束符</td></tr><tr><td>\\w</td><td>查找单词字符</td></tr><tr><td>\\W</td><td>查找非单词字符</td></tr><tr><td>\\d</td><td>查找数字</td></tr><tr><td>\\D</td><td>查找非数字字符</td></tr><tr><td>\\s</td><td>查找空白字符</td></tr><tr><td>\\S</td><td>查找非空白字符</td></tr><tr><td>\\b</td><td>匹配单词边界</td></tr><tr><td>\\B</td><td>匹配非单词边界</td></tr><tr><td>\\0</td><td>查找 NUL字符</td></tr><tr><td>\\n</td><td>查找换行符</td></tr><tr><td>\\f</td><td>查找换页符</td></tr><tr><td>\\r</td><td>查找回车符</td></tr><tr><td>\\t</td><td>查找制表符</td></tr><tr><td>\\xxx</td><td>查找以八进制数 xxxx 规定的字符</td></tr><tr><td>\\xdd</td><td>查找以十六进制数 dd 规定的字符</td></tr><tr><td>\\uxxxx</td><td>查找以十六进制 xxxx规定的 Unicode 字符</td></tr></tbody></table><p><strong><strong>描述字符范围</strong></strong></p><p>在正则表达式语法中，放括号表示字符范围。在方括号中可以包含多个字符，表示匹配其中任意一个字符。如果多个字符的编码顺序是连续的，可以仅指定开头和结尾字符，省略中间字符，仅使用连字符~表示。如果在方括号内添加脱字符^前缀，还可以表示范围之外的字符。例如：</p><ul><li>[abc]：查找方括号内任意一个字符。</li><li>[^abc]：查找不在方括号内的字符。</li><li>[0-9]：查找从 0 至 9 范围内的数字，即查找数字。</li><li>[a-z]：查找从小写 a 到小写 z 范围内的字符，即查找小写字母。</li><li>[A-Z]：查找从大写 A 到大写 Z 范围内的字符，即查找大写字母。</li><li>[A-z]：查找从大写 A 到小写 z 范围内的字符，即所有大小写的字母。</li></ul><p><strong><strong>选择匹配</strong></strong></p><p>选择匹配类似于 JavaScript 的逻辑与运算，使用竖线|描述，表示在两个子模式的匹配结果中任选一个。例如：</p><ol><li>匹配任意数字或字母</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var r = /\\w+|\\d+/;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>可以定义多重选择模式。设计方法：在多个子模式之间加入选择操作符。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var r = /(abc)|(efg)|(123)|(456)/;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><strong>重复匹配</strong></strong></p><p>在正则表达式语法中，定义了一组重复类量词，如表所示。它们定义了重复匹配字符的确数或约数。</p><table><thead><tr><th>量词</th><th>描述</th></tr></thead><tbody><tr><td>n+</td><td>匹配任何包含至少一个 n 的字符串</td></tr><tr><td>n*</td><td>匹配任何包含零个或多个 n 的字符串</td></tr><tr><td>n?</td><td>匹配任何包含零个或一个 n 的字符串</td></tr><tr><td>n{x}</td><td>匹配包含 x 个 n 的序列的字符串</td></tr><tr><td>n{x,y}</td><td>匹配包含最少 x 个、最多 y 个 n 的序列的字符串</td></tr><tr><td>n{x,}</td><td>匹配包含至少 x 个 n 的序列的字符串</td></tr></tbody></table><p>重复类量词总是出现在它们所作用的字符或子表达式后面。如果想作用于多个字符，需要使用小括号把它们包裹在一起形成一个子表达式。</p><p><strong><strong>惰性匹配</strong></strong></p><p>重复类量词都具有贪婪性，在条件允许的前提下，会匹配尽可能多的字符。</p><ul><li>?、{n} 和 {n,m} 重复类具有弱贪婪性，表现为贪婪的有限性。</li><li>、+ 和 {n,} 重复类具有强贪婪性，表现为贪婪的无限性。</li></ul><p><strong><strong>边界量词</strong></strong></p><p>边界就是确定匹配模式的位置，如字符串的头部或尾部，具体说明如表所示。</p><table><thead><tr><th>量词</th><th>说明</th></tr></thead><tbody><tr><td>^</td><td>匹配开头，在多行检测中，会匹配一行的开头</td></tr><tr><td>$</td><td>匹配结尾，在多行检测中，会匹配一行的结尾</td></tr></tbody></table><p><strong><strong>声明词量</strong></strong></p><p>声明表示条件的意思。声明词量包括正向声明和反向声明两种模式。</p><p><strong>正向声明</strong></p><p>指定匹配模式后面的字符必须被匹配，但又不返回这些字符。</p><p><strong>反向声明</strong></p><p>与正向声明匹配相反，指定接下来的字符都不必被匹配。</p>`,29),m={href:"https://github.com/Dongss/dogs/blob/v2/posts/javascript/3.md",target:"_blank",rel:"noopener noreferrer"},p={href:"https://zhuanlan.zhihu.com/p/80922071",target:"_blank",rel:"noopener noreferrer"},b={href:"http://c.biancheng.net/view/5632.html",target:"_blank",rel:"noopener noreferrer"};function g(h,x){const t=a("ExternalLinkIcon");return r(),l("div",null,[v,n("p",null,[n("a",u,[e("正则表达式在线测试"),d(t)])]),c,n("p",null,[e("本文参考"),n("a",m,[e("JavaScript 变量作用域、this、闭包"),d(t)]),n("a",p,[e("原来深拷贝和浅拷贝是这样？"),d(t)]),n("a",b,[e("JS正则表达式语法大全"),d(t)])])])}const B=s(o,[["render",g],["__file","正则.html.vue"]]);export{B as default};
