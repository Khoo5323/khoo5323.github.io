import{_ as i,o as e,c as n,a as d}from"./app.74a5dc6f.js";const l={},s=d(`<h1 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符" aria-hidden="true">#</a> 运算符</h1><h1 id="运算符-1" tabindex="-1"><a class="header-anchor" href="#运算符-1" aria-hidden="true">#</a> 运算符</h1><h1 id="javascript运算符、运算符优先级、流程控制、循环" tabindex="-1"><a class="header-anchor" href="#javascript运算符、运算符优先级、流程控制、循环" aria-hidden="true">#</a> <strong>JavaScript运算符、运算符优先级、流程控制、循环</strong></h1><h1 id="一、运算符介绍" tabindex="-1"><a class="header-anchor" href="#一、运算符介绍" aria-hidden="true">#</a> <strong>一、运算符介绍</strong></h1><blockquote><p>运算符也被称为操作符，用于实现赋值，比较值和执行算术运算等功能的符号。</p></blockquote><ul><li>算术运算符</li><li>递增和递减运算符</li><li>比较运算符</li><li>逻辑运算符</li><li>赋值运算符</li></ul><p><strong><strong>算术运算符</strong></strong></p><blockquote><p>概念：算数运算使用的符号，用于执行两个变量或值的算数运算。</p></blockquote><table><thead><tr><th>运算符</th><th>描述</th><th>实例</th></tr></thead><tbody><tr><td>+</td><td>加</td><td>10+20=30</td></tr><tr><td>-</td><td>减</td><td>10-20=-10</td></tr><tr><td>*</td><td>乘</td><td>10*20=200</td></tr><tr><td>/</td><td>除</td><td>10/20=0.5</td></tr><tr><td>%</td><td>取余数（取模）</td><td>返回除数的余数 9%2=1</td></tr></tbody></table><p>浮点数，算数运算会有问题</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var num = 0.1 + 0.2
console.log(num == 0.3); // false

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>表达式和返回值</strong></p><p>表达式：是由数字、运算符、变量等能求得数值的有意义排列方法所得的集合。</p><p>简单理解，就是数字、运算符和变量组成的式子。</p><p>表达式最终会有一个结果，返回给我们，所以称为返回值。</p><p><strong><strong>递增和递减运算符</strong></strong></p><p><strong>递增和递减运算符</strong></p><blockquote><p>如果需要反复给数字变量添加或者减去1，可以使用递增（++）或者递减（--）运算符来完成。</p><p>在JavaScript中，递增（++）或者递减（--）既可以放在变量前面，也可以放在变量后面。放在变量前面时，我们可以称为前置递增（递减）运算符，放在后面时，我们可以称为后置递增（递减）运算符。</p></blockquote><p>注意：递增和递减运算符必须和变量配合使用</p><p><strong>前置递增运算符</strong></p><p>++num 就是自增1，类似于num = num + 1。(先自增1，后返回原值)</p><p><strong>后置递增运算符</strong></p><p>num++ 就是自增1，类似于num = num + 1。(先返回原值，后自增1)</p><ul><li>单独使用时，实现效果相同</li><li>与其他代码连用时，运行结果会不同</li><li>前置自增：先自增，后返回值</li><li>后置自增：先返回原值，后自增</li><li>开发时大多使用后置递增，并且代码独占一行</li></ul><p><strong><strong>比较运算符</strong></strong></p><blockquote><p>概念：比较运算符时两个数据进行比较时所运用的运算符，比较运算后，会返回一个布尔值（true或者false）作为比较运算的结果。</p></blockquote><table><thead><tr><th>运算符</th><th>说明</th><th>案例</th><th>结果</th></tr></thead><tbody><tr><td>&lt;</td><td>小于号</td><td>1&lt;2</td><td>true</td></tr><tr><td>&gt;</td><td>大于号</td><td>1&gt;2</td><td>false</td></tr><tr><td>&lt;=</td><td>大于等于号（大于或者等于）</td><td>2&lt;=2</td><td>true</td></tr><tr><td>&gt;=</td><td>小于等于号（小于或者等于）</td><td>3&lt;=2</td><td>false</td></tr><tr><td>&gt;=</td><td>判等号（会转型）</td><td>37!=37</td><td>false</td></tr><tr><td>==</td><td>判等号（会转型）</td><td>37==37</td><td>true</td></tr><tr><td>!=</td><td>判等号（会转型）</td><td>37!=37</td><td>false</td></tr><tr><td>===/!==</td><td>全等号（会转型）</td><td>37===&#39;37&#39;</td><td>false</td></tr></tbody></table><p><strong><strong>逻辑运算符</strong></strong></p><blockquote><p>概念：逻辑运算符是用来进行布尔值运算的运算符，其返回值也是布尔值。后面开发中经常用于多个条件的判断。</p></blockquote><table><thead><tr><th>逻辑运算符</th><th>说明</th><th>案例</th></tr></thead><tbody><tr><td>&amp;&amp;</td><td>“逻辑与”，简称“与”，and</td><td>true&amp;&amp;true</td></tr><tr><td></td><td></td><td></td></tr><tr><td>!</td><td>“逻辑非”，简称“非”，not</td><td>!true</td></tr></tbody></table><p><strong>逻辑与 &amp;&amp;</strong></p><p>两边都是true才返回true，否则返回false</p><p><strong>逻辑或 ||</strong></p><p>两边都是false才返回false，否则返回true</p><p><strong>逻辑非 !</strong></p><p>逻辑非也叫做取反符，用来取一个布尔值相反的值，如true的相反值是false</p><p><strong><strong>短路运算（逻辑中断）</strong></strong></p><p>短路运算的原理：当有多个表达式时，左边的表达式值可以确定结果时，就不再运算右边的表达式的值</p><p><strong>1. 逻辑与</strong></p><p>语法：表达式1 &amp;&amp; 表达式2</p><p>如果第一个表达式为真，则返回表达式2</p><p>如果第一个表达式为假，则返回表达式1</p><p><strong>2. 逻辑或</strong></p><p>语法：表达式1 || 表达式2</p><p>如果第一个表达式为真，则返回表达式1</p><p>如果第一个表达式为假，则返回表达式2</p><p><strong><strong>赋值运算符</strong></strong></p><blockquote><p>赋值运算符用于给 JavaScript 变量赋值。</p></blockquote><h1 id="二、运算符优先级" tabindex="-1"><a class="header-anchor" href="#二、运算符优先级" aria-hidden="true">#</a> <strong>二、运算符优先级</strong></h1><table><thead><tr><th>优先级</th><th>运算符</th><th>说明</th><th>结合性</th></tr></thead><tbody><tr><td>1</td><td>[]、.、()</td><td>字段访问、数组索引、函数调用和表达式分组</td><td>从左向右</td></tr><tr><td>2</td><td>++ -- -~!delete new typeof void</td><td>一元运算符、返回数据类型、对象创建、未定义的值</td><td>从右向左</td></tr><tr><td>3</td><td>*、/、%</td><td>相乘、相除、求余数</td><td>从左向右</td></tr><tr><td>4</td><td>+、-</td><td>相加、相减、字符串串联</td><td>从左向右</td></tr><tr><td>5</td><td>&lt;&lt;、&gt;&gt;、&gt;&gt;&gt;</td><td>左位移、右位移、无符号右移</td><td>从左向右</td></tr><tr><td>6</td><td>&lt;、&lt;=、&gt;、&gt;=、instanceof</td><td>小于、小于或等于、大于、大于或等于、是否为特定类的实例</td><td>从左向右</td></tr><tr><td>7</td><td>==、!=、===、!==</td><td>相等、不相等、全等，不全等</td><td>从左向右</td></tr><tr><td>8</td><td>&amp;</td><td>按位“与”</td><td>从左向右</td></tr><tr><td>9</td><td>^</td><td>按位“异或”</td><td>从左向右</td></tr><tr><td>10</td><td></td><td></td><td>按位“或”</td></tr><tr><td>11</td><td>&amp;&amp;</td><td>短路与（逻辑“与”）</td><td>从左向右</td></tr><tr><td>12</td><td></td><td></td><td></td></tr><tr><td>13</td><td>?:</td><td>条件运算符</td><td>从右向左</td></tr><tr><td>14</td><td>=、+=、-=、*=、/=、%=、&amp;=、</td><td>=、^=、&lt;、&lt;=、&gt;、&gt;=、&gt;&gt;=</td><td>混合赋值运算符</td></tr><tr><td>15</td><td>,</td><td>多个计算</td><td>按优先级计算，然后从右向左</td></tr></tbody></table><h1 id="三、流程控制" tabindex="-1"><a class="header-anchor" href="#三、流程控制" aria-hidden="true">#</a> <strong>三、流程控制</strong></h1><p><strong><strong>什么是流程控制</strong></strong></p><p>在一个程序执行的过程中，各条代码的执行顺序对程序的结果是有直接影响的。很多时候我们要通过控制代码的执行顺序来实现我们要完成的功能。</p><blockquote><p>简单理解：流程控制就是来控制我们的代码按照什么结构顺序来执行。</p></blockquote><p>流程控制主要有三种结构：分别是顺序结构、分支结构和循环结构，这三种结构代表三种代码执行的顺序。</p><p><strong><strong>顺序流程控制</strong></strong></p><blockquote><p>顺序结构是程序中最简单、最基本的流程控制，它没有特定的语法结构，程序会按照代码的先后顺序，依次执行，程序中大多数的代码都是这样执行的。</p></blockquote><p><strong><strong>分支流程控制</strong></strong></p><blockquote><p>由上到下执行代码的过程中，根据不同的条件，执行不同的路径代码（执行代码多选一的过程），从而得到不同的结果</p></blockquote><p>JS提供了两种分支结构语句：</p><ul><li>if语句</li><li>switch语句</li></ul><p><strong><strong>if 语句</strong></strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 1、if的语法结构  如果if
if (条件表达式) {
    // 执行语句
}
// 2、执行思路 如果if里面的条件表达式结果为真 true 则执行大括号里面的执行语句
// 如果if条件表达式结果为假 则不执行大括号里面的语句 则执行if语句后面的代码

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>if else 双分支语句</strong></strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 1、语法结构
if (条件表达式) {
    // 执行语句1
} else {
    // 执行语句2
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>判断闰年案例</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 算法：能被4整除且不能整除100的为闰年，或者能够被400整除的就是闰年
// 弹出prompt输入框，让用户输入年份，把这个值取过来保存到变量中
// 使用if语句来判断是否是闰年，如果是闰年，就执行if大括号里面的语句，否则就执行else大括号里面的语句
// 一定要注意里面的且 &amp;&amp; 还有或者 ||的写法，同时注意判断整除的方法是取余为0
var year = prompt(&#39;请您输入年份：&#39;);
if (year % 4 == 0 &amp;&amp; year % 100 != 0 || year % 400 == 0) {
    alert(&#39;您输入的年份是闰年&#39;);
} else {
    alert(&#39;您输入的年份是平年&#39;);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>if else if语句（多分支语句）</strong></strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 1、多分支语句  就是利用多个条件来选择不同的语句执行 得到不同的结果 多选1的过程
// 2、if else if语句是多分支语句
// 3、语法规范
if(条件表达式1){
    // 语句1;
}else if(条件表达式2){
    // 语句2;
}else if(条件表达式3){
    // 语句3;
}else{
    // 最后的语句;
}
// 4、执行思路
// 如果条件表达式1 满足就执行语句1  执行完毕后，退出整个if分支语句
// 如果条件表达式1 不满足，则判断条件表达式2 满足的话吗，执行语句2 以此类推
// 如果上面的所有条件表达式都不成立，则执行else 里面的语句
// 5、注意点
// (1)多分支语句还是多选一 最后只能有一个语句执行
// (2)else if 里面的条件理论上是可以任意多个的
// (3)else if中奖有个空格

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>案例</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 按照从大到小判断思路
// 弹出prompt输入框，让用户输入分数，把这个值取过来保存到变量中
// 使用多分支if else if 语句来分别判断输出不同的值
var score = prompt(&#39;请你输入分数：&#39;);
if (score &gt;= 90) {
    alert(&#39;A&#39;);
} else if (score &gt;= 80) {
    alert(&#39;B&#39;);
} else if (score &gt;= 70) {
    alert(&#39;C&#39;);
} else if (score &gt;= 60) {
    alert(&#39;D&#39;);
} else if (score &lt; 60) {
    alert(&#39;E&#39;);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>三元表达式</strong></strong></p><p><strong>三元表达式也能做一些简单的条件选择，由三元运算符组成的式子叫三元表达式。</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 1、有三元运算符组成的式子我们称为三元表达式
// 2、++num  3+5    ？：
// 3、语法结构
// 条件表达式  ？  表达式1 ： 表达式2
// 4、执行思路
// 如果条件表达式结果为真，则返回 表达式1 的值，如果条件表达式结果为假，则返回 表达式2 的值
// 5、代码体验
var num = 10;
var result = num &gt; 5 ? &#39;是的&#39; : &#39;不是&#39;;
alert(result);
// if(num&gt;5){
//     result=&#39;是的&#39;;
// }else{
//     result=&#39;不是&#39;;
// }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>switch语句</strong></strong></p><blockquote><p>switch语句也是多分支语句，它用于基于不同的条件来执行不同的代码。当要针对变量设置一系列的特定值的选项时，就可以使用switch</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 1、switch语句也是多分支语句 也可以实现多选1
// 2、语法结构  switch转换、开关   case 小例子或者选项的意思
/* switch (表达式) {
    case value1:
        执行语句1;
        break;
    case value2:
        执行语句2;
        break;
        ...
        default:
            执行最后的语句;
} */
// 3、执行思路  利用我们的表达式的值 和 case后面的选项值相匹配 如果匹配上，就执行该case里面的语句 如果都没有匹配上，那么执行 default里面的语句
// 4、代码验证
switch (2) {
    case 1:
        console.log(&#39;这是1&#39;);
        break;
    case 2:
        console.log(&#39;这是2&#39;);
        break;
    case 3:
        console.log(&#39;这是3&#39;);
        break;
    default:
        console.log(&#39;没有匹配结果&#39;);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意事项：没有break和对应的匹配项时，会逐行执行所有case和default语句</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// switch注意事项
var num = 3;
switch (num) {
    case 1:
        console.log(1);
        break;
    case 3:
        console.log(3);
        break;
}
// 1、我们开发里面 表达式我们经常写成变量
// 2、我们num 的值 和 case 里面的值相匹配的时候是 全等 必须是值和数据类型一致才可以 num===1
// 3、break 如果当前的case里面没有break 则不会退出switch 是继续执行下一个break

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>switch语句和if else if语句的区别</strong></p><ul><li>一般情况下，它们两个语句可以相互替换</li><li>switch......case语句通常处理case为比较确定值的情况，而if......else......语句更加灵活，常用于范围判断（大于、等于某个范围）</li><li>switch语句进行条件判断后直接执行到程序的条件语句，效率更高，而if......else语句有几种条件，就得判断多少次。</li><li>当分支比较少时，if......else语句的执行效率比switch语句高。</li><li>当分支比较多时，switch语句的执行效率比较高，而且结构更清晰。</li></ul><p>案例</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 1、判断时间阶段，比如用户输入12点弹出中午好 用户输入18点弹出傍晚好 用户输入23点 弹出深夜好
var time = prompt(&#39;输入时间：&#39;);
switch (parseInt(time)) {
    case 12:
        alert(&#39;中午好&#39;);
        break;
    case 18:
        alert(&#39;傍晚好&#39;);
        break;
    case 23:
        alert(&#39;深夜好&#39;);
        break;
    default:
        alert(&#39;你好&#39;);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="四、循环" tabindex="-1"><a class="header-anchor" href="#四、循环" aria-hidden="true">#</a> <strong>四、循环</strong></h1><p><strong><strong>JS中的循环</strong></strong></p><ul><li>for循环</li><li>while循环</li><li>do......while循环</li></ul><p><strong><strong>for循环</strong></strong></p><blockquote><p>在程序中，一组被重复执行的语句被称之为循环体，能否继重复执行，取决于循环的终止条件。由循环体及循环的终止条件组成的语句，被称之为循环语句。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 1、for 重复执行某些代码，通常跟计数有关系
// 2、for语法结构
        for (初始化变量; 条件表达式; 操作表达式) {
            // 循环体
        }
// 3、初始化变量 就是用var声明的一个普通变量，通常用于作为计数器使用
// 4、条件表达式 就是用来决定每一次循环是否继续执行 就是终止的条件
// 5、操作表达式 是每次循环最后执行的代码，经常用于我们计数器变量进行更新（递增或者递减）
// 6、代码体验 我们重复打印100句 你好
        for (var i = 1; i &lt;= 100; i++) {
            console.log(&#39;你好吗&#39;);
        }
// for循环的执行过程
// 1、首先执行里面的计数器变量 var i=1  但是这句话在for里面只执行一次  index
// 2、去i&lt;=100来判断是否满足条件，如果满足条件，就去执行 循环体 不满足条件退出循环
// 3、最后去执行i++  i++是单独写的代码，递增 第一轮结束
// 4、接着去执行i&lt;=100 如果满足条件  就去执行 循环体 不满足条件退出循环 第二轮

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>语法结构</strong></p><p><strong><strong>断点调试</strong></strong></p><p>断点调试是指自己在程序的某一行设置一个断点，调试时，程序运行到这一行就会停住，然后你可以一步一步往下调试，调试过程中可以看各个变量当前的值，出错的话，调试到出错的代码即显示错误，停下断点调试可以帮我们观察程序的运行过程</p><p>浏览器中按F12--&gt;sources--&gt;找到需要调试的文件--&gt;在程序的某一行设置断点</p><p>Watch：监视，通过watch可以监视变量的值的变化，非常的常用</p><p>F11：程序单步执行，让程序一步一步的执行，这个时候，观察watch中变量的值的变化</p><p>代码调试的能力非常重要，只有学会了代码调试，才能学会自己解决bug的能力。</p><p><strong>for循环重复相同的代码</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// for循环可以执行相同的代码
for (var i = 1; i &lt;= 10; i++) {
    console.log(&#39;我是谁&#39;);
}
// 我们可以让用户控制输出的次数
var num = prompt(&#39;请您输入次数&#39;);
for (var i = 1; i &lt;= num; i++) {
    console.log(&#39;我在干什么&#39;);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>for循环重复不相同的代码</strong></p><p>for循环可以重复不同的代码，这主要是因为使用了计数器，计数器在每次循环过程中都会有变化。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// for 循环可以重复执行不同的代码  因为我们有计数器变量i的存在 i每次循环值都会变化
// 我们输出有1个人1~100岁
for (var i = 1; i &lt;= 100; i++) {
    console.log(&#39;这个人今年&#39; + i + &#39;岁了&#39;);
}

for (var i = 1; i &lt;= 100; i++) {
    if (i == 1) {
        console.log(&#39;这个人今年1岁了，刚出生&#39;);
    } else if (i == 100) {
        console.log(&#39;这个人今年100岁了，老了&#39;);
    } else {
        console.log(&#39;这个人今年&#39; + i + &#39;岁了&#39;);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>for循环重复某些相同操作</strong></p><p>案例：求1-100之间所有整数的累加和</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// for循环重复执行某些操作
// 求1~100之间的整数累加和
// 需要循环100次，我们需要一个计数器 i
// 我们需要一个存储结果的变量 sum，但是初始值一定是0
// 核心算法：1+2+3+4......  sum=sum+i
var sum = 0; //求和的变量
for (var i = 1; i &lt;= 100; i++) {
    // sum = sum + i;
    sum += i;
}
console.log(sum);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>for循环因为有了计数器的存在，我们还可以重复的执行某些操作，比如做一些算术运算。</p><p><strong><strong>双重for循环</strong></strong></p><p>很多情况下，单层for循环并不能满足我们的需求，比如我们要打印一个5行5列的图形，打印一个倒直角三角形等，此时就可以通过循环嵌套来实现</p><p>循环嵌套是指在一个循环语句中再定义一个循环语句的语法结构，例如在for循环语句中，可以再嵌套一个for循环，这样的for循环语句我们称之为双重for循环。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 1、双重for循环 语法结构
// for (外层的初始化变量; 外层的条件表达式; 外层的操作表达式) {
//     for (里层的初始化变量; 里层的条件表达式是; 里层的操作表达式) {
//         // 执行语句;
//     }
// }
// 2、我们可以把里面的循环看做是外层循环的语句
// 3、外层循环循环一次，里面的循环执行全部
// 4、代码验证、
for (var i = 1; i &lt;= 3; i++) {
    console.log(&#39;这是外层循环第&#39; + i + &#39;次&#39;);
    for (var j = 1; j &lt;= 3; j++) {
        console.log(&#39;这是里层循环第&#39; + j + &#39;次&#39;);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>for循环小结</strong></p><ul><li>for循环可以重复执行某些相同的代码</li><li>for循环可以重复执行些许不同的代码，因为我们有计数器</li><li>for循环可以重复执行某些操作，比如算术运算符加法操作</li><li>随着需求增加，双重for循环可以做更多、更好看的效果</li><li>双重for循环，外层循环一次，内层for循环全部执行</li><li>for循环是循环条件和数字直接相关的循环</li><li>分析要比写代码更重要</li></ul><p><strong><strong>while循环</strong></strong></p><blockquote><p>while语句可以在条件表达式为真的前提下，循环执行指定的一段代码，直到表达式不为真时结束循环。</p></blockquote><p><strong>while语句语法结构：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>while (条件表达式) {
    // 循环体代码
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行思路：</p><ul><li>先执行条件表达式，如果结果为true，则执行循环体代码；如果为false，则退出循环，执行后面代码</li><li>执行循环体代码</li><li>循环体代码执行完毕后，程序会继续判断执行条件表达式，如条件仍为true，则会继续执行循环体，知道循环条件为false时，整个循环过程才结束</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 1、while循环语法结构  while 当。。。的时候
    while (条件表达式) {
    // 循环体
    }
// 2、执行思路 当条件表达式结构为true 则执行循环体 否则 退出循环
// 3、代码验证
    var num = 1;
    while (num &lt;= 100) {
        console.log(&#39;你好啊&#39;);
        num++;
    }
// 4、里面应该也有计数器 初始化变量
// 5、里面有个也有操作表达式 完成计数器更新 防止死循环

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>do while 循环</strong></strong></p><blockquote><p>do...while语句其实是while语句的一个变体，、。该循环会先执行一次代码块，然后对条件表达式进行判断，如果条件为真，就会重复执行循环体，否则退出循环。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//do while 循环 1、语法结构
    do {
        // 循环体
    } while (条件表达式)
// 2、执行思路 跟while不同的地方在于do while 先执行一次循环体 再判断条件 如果条件表达式结果为真，则继续执行循环体，否则退出循环
// 3、代码验证
    var i = 1;
    do {
        console.log(&#39;how are you&#39;);
        i++;
    } while (i &lt;= 100)
// 4、我们的do while循环体至少执行一次

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：先执行循环体，再判断，我们会发现do......while循环语句至少会执行一次循环体代码</p><p><strong>循环小结</strong></p><ul><li>JS中循环有for、while、do while</li><li>三个循环很多情况下都可以相互替代使用</li><li>如果是用来记次数，跟数字相关的，三者使用基本相同，但是我们更喜欢用for</li><li>while和do......while可以做更复杂的判断条件，比for循环灵活一些</li><li>while和do......while执行顺序不一样，while先判断后执行，do......while先执行一次，再判断执行</li><li>while和do......while执行次数不一样，do......while至少会执行一次循环体，而while可能一次也不执行</li><li>在实际工作中，我们更常用for循环语句，它写法更简洁直观</li></ul><p><strong><strong>continue关键字</strong></strong></p><p>continue关键字用于立即跳出本次循环，继续下一次循环（本次循环体中continue之后的代码就会少执行一次）。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// continue关键字  退出本次（当前次的循环）  继续执行剩余次数循环
for (var i = 1; i &lt;= 5; i++) {
    if (i == 3) {
        continue; //只要遇见 continue就退出本次循环 直接跳到i++
    }
    console.log(&#39;我正在干第&#39; + i + &#39;件事&#39;);
}

// 1、求1~100之间，除了能被7整除之外的整数和
var sum = 0;
for (var i = 1; i &lt;= 100; i++) {
    if (i % 7 == 0) {
        continue;
    }
    sum += i;
}
console.log(sum);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>break关键字</strong></strong></p><p>break关键字用于立即跳出整个循环（循环结束）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// break
for (var i = 1; i &lt;= 5; i++) {
    if (i == 3) {
        break;
    }
    console.log(&#39;我正在干第&#39; + i + &#39;件事&#39;);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,130),t=[s];function r(a,v){return e(),n("div",null,t)}const u=i(l,[["render",r],["__file","运算符.html.vue"]]);export{u as default};
