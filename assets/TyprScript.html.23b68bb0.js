import{_ as d,r as a,o as r,c as v,a as e,b as n,d as s,e as l}from"./app.629164ab.js";const t={},c=l('<h1 id="typrscript" tabindex="-1"><a class="header-anchor" href="#typrscript" aria-hidden="true">#</a> TyprScript</h1><h1 id="typrscript基础知识" tabindex="-1"><a class="header-anchor" href="#typrscript基础知识" aria-hidden="true">#</a> <strong>TyprScript基础知识</strong></h1><h1 id="一、typrscript安装与编译" tabindex="-1"><a class="header-anchor" href="#一、typrscript安装与编译" aria-hidden="true">#</a> <strong>一、TyprScript安装与编译</strong></h1><p><strong><strong>TyprScript介绍</strong></strong></p><blockquote><p>TypeScript是JavaScript类型的超集，它可以编译成纯JavaScript。TypeScript可以在任何浏览器、任何计算机和任何操作系统上运行，并且是开源的。</p></blockquote>',5),u={href:"https://www.tslang.cn/",target:"_blank",rel:"noopener noreferrer"},m=l(`<p><strong><strong>TyprScript</strong></strong></p><p>TypeScript可以编译出纯净、 简洁的JavaScript代码，并且可以运行在任何浏览器上、Node.js环境中和任何支持ECMAScript 3（或更高版本）的JavaScript引擎中。</p><p><strong><strong>安装环境</strong></strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm i typescript -g //全局安装typescript

npm init -y //进入文件夹，初始化项目，生成package.json文件

tsc --init //创建tsconfig.json文件

npm i @types/node -S //这个主要是解决模块的声明文件问题

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>构建你的第一个TypeScript文件</strong></strong></p><p>在编辑器，将下面的代码输入到greeter.ts文件里：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function greeter(person) {
    return &quot;Hello, &quot; + person;
}

let user = &quot;Jane User&quot;;

document.body.innerHTML = greeter(user);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译代码</strong></p><p>在命令行上，运行TypeScript编译器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tsc greeter.ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="二、原始数据类型" tabindex="-1"><a class="header-anchor" href="#二、原始数据类型" aria-hidden="true">#</a> <strong>二、原始数据类型</strong></h1><blockquote><p>js中数据类型分两种，原始数据类型和对象类型，原始类型包括：布尔值、数字、字符串、null、undefined以及Symbol。</p></blockquote><p><strong><strong>布尔值</strong></strong></p><p>在TypeScript中，使用boolean定义布尔值类型</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let isStatus:boolean=true;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><strong>数字</strong></strong></p><p>使用number定义数值类型</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let isNumber:number=1;

//16进制(编译后显示10进制数字)
let isNumber16:number:=0b1010;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>字符串</strong></strong></p><p>使用string定义字符串类型：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let isString:string=&#39;hello word&#39;;

let year:number=2020;

let add:string=\`\${isString},\${year}!\`;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>空值</strong></strong></p><p>JavaScript 没有空值（Void）的概念，在TypeScript中，可以用void表示没有任何返回值的函数.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function alertName():void{
    alert(&quot;my name is tom&quot;)
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let unusable: void = undefined;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><strong>Null 和 Undefined</strong></strong></p><p>在TypeScript中可以使用null和undefined来定义这两个原始数据类型</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let u:undefined=undefined;

let n:null=null;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说undefined类型的变量，可以赋值给number类型的变量，而void类型的变量不能赋值给number类型的变量：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let num:number=undefined;//不会报错

let u:undefined;

let num: number = u;//也不会报错

let u:void;

let num:number=u;// Type &#39;void&#39; is not assignable to type &#39;number&#39;.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>任意值</strong></strong></p><p>任意值（Any）用来表示允许赋值为任意类型。</p><p><strong>什么是任意值类型</strong></p><p>如果是一个普通类型，在赋值过程中改变类型是不被允许的：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let renyiString:string=&#39;string&#39;;

renyiString=8;

//Type &#39;number&#39; is not assignable to type &#39;string&#39;.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但如果类型是Any,类型，则允许被赋值为任意类型:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let renyiString:any=&#39;string&#39;;

renyiString=8;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在任意值上访问任何属性都是允许的：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let anyThis:any=&#39;hello&#39;;

console.log(anyThis.myName)

console.log(anyThis.myName.firstName)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也允许调用任何方法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let anyThing: any = &#39;Tom&#39;;

anyThing.setName(&#39;Jerry&#39;);

anyThing.setName(&#39;Jerry&#39;).sayHello();

anyThing.myName.setFirstName(&#39;Cat&#39;);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以认为，声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值。</p><p><strong><strong>未声明类型的变量</strong></strong></p><p>变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let something;

something = &#39;seven&#39;;

something = 7;

something.setName(&#39;Tom&#39;);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>等于</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let something: any;

something = &#39;seven&#39;;

something = 7;

something.setName(&#39;Tom&#39;);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="三、数组的类型" tabindex="-1"><a class="header-anchor" href="#三、数组的类型" aria-hidden="true">#</a> <strong>三、数组的类型</strong></h1><p><strong><strong>基础表示</strong></strong></p><p>「类型 + 方括号」表示法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let numbers:number[]=[1,2,3,4,5]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此时不允许出现其他类型，而且如果使用数组中push等方法，添加元素也得符合相应类型。</p><p><strong><strong>数组泛型</strong></strong></p><p>我们也可以使用数组泛型（Array Generic） Array 来表示数组</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let fibonacci:Array&lt;number&gt;=[1,2,3,4]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果数组中又有number类型又有string类型，则可以用｜符号来区别定义：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let arr:(number|string)[]=[&#39;tom&#39;,1];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><strong>数组中对象类型的定义</strong></strong></p><p>项目中经常遇到数组中有对象的存在，对于这种就比较麻烦了，比如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let arr:{name:string,age:number}[]=[
    {name:&#39;tom&#39;,age:18}
]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就比较麻烦了，我们可以使用ts中的类型别名来解决这个问题：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>type PeopleType={name:String,age:Number};

let arr:PeopleType[]=[
    {name:&#39;bob&#39;,age:19}
]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以用类型定义也可以解决：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class PeopleType{
    name:string;
    age:number
}

let arr:PeopleType[]=[
    {name:&#39;bob&#39;,age:19}
]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>数组的使用和类型约束</strong></strong></p><p>在数组中如果里面又有string和number,可以使用｜来进行定义，但一定程度上并不严格。比如改成下面这种格式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let arr:(number|string)[]=[111,&#39;222&#39;,111];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>ts并没有报错，如果想要严格限制，则可以这样进行约束：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let arr:[number,string,number]=[111,&#39;222&#39;,111];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="四、接口和类" tabindex="-1"><a class="header-anchor" href="#四、接口和类" aria-hidden="true">#</a> <strong>四、接口和类</strong></h1><p><strong><strong>Interface接口</strong></strong></p><p>比如我们要做一个筛选，吧不符合条件的过滤出去，我们可能会这样写：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const types=(name:string,age:number,height:number)=&gt;{
    age&gt;=20 &amp;&amp; height&gt;=180 &amp;&amp; console.log(&#39;符合条件&#39;);

    age&lt;=20 &amp;&amp; height &lt;180 &amp;&amp;console.log(&#39;不符合&#39;)
};

types(&#39;tom&#39;,20,180) //符合条件

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但如果又修改了一些需求，可能还会去大量变更代码，在开发中，代码能复用肯定是最好的，所以可以把一些重复的代码抽离出来：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>interface People{
    name:string;
    age:number;
    height:number;
}

const types=(people:People)=&gt;{
    people.age&gt;=20 &amp;&amp; people.height&gt;=180 &amp;&amp; console.log(&#39;符合条件&#39;);

    people.age&lt;=20 &amp;&amp; people.height &lt;180 &amp;&amp;console.log(&#39;不符合&#39;)
};

const choose=(people:People)=&gt;{
    console.log(people.name+&#39;----&#39;+people.age+&#39;---&#39;+people.height)
}

const people={
    name:&#39;tom&#39;,
    age:18,
    height:178
}

types(people);

choose(people);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>接口与类型别名的区别</strong></strong></p><p>看起来两者没有什么区别，但有个小细节：类型别名可以直接给类型，接口必须代表对象</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>type People=string;

interface People{
    name:string;
    age:number;
    height:number;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果传入的参数中有不确定项，我们可以使用 ?: 来进行处理：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>interface People{
    name:string;
    age:number;
    height:number;
    say?:string
};

const types=(people:People)=&gt;{
    people.age&gt;=20 &amp;&amp; people.height&gt;=180 &amp;&amp; console.log(&#39;符合条件&#39;);

    people.age&lt;=20 &amp;&amp; people.height &lt;180 &amp;&amp;console.log(&#39;不符合&#39;)
};

const people={
    name:&#39;tom&#39;,
    age:18,
    height:178
}
const people2={
    name:&#39;tom&#39;,
    age:18,
    height:178,
    say:&#39;hello&#39;
}

types(people);

types(people2);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时候又有新需求了，如何在后面加入任意多的字段？这时候我们就可以这么写：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>interface People{
    name:string;
    age:number;
    height:number;
    say?:string;
    [propname:string]:any;
}

const types=(people:People)=&gt;{
    people.age&gt;=20 &amp;&amp; people.height&gt;=180 &amp;&amp; console.log(&#39;符合条件&#39;);

    people.age&lt;=20 &amp;&amp; people.height lt;180 &amp;&amp;console.log(&#39;不符合&#39;)
};

const people={
    name:&#39;tom&#39;,
    age:18,
    height:178,
    say:&#39;hello&#39;,
    add:&#39;new add&#39;,
    addNumber:123
}

types(people);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>接口里的方法</strong></strong></p><p>接口不仅仅可以存属性，也可以存方法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>interface People{
    name:string;
    age:number;
    height:number;
    goto():string;
}

const types=(people:People)=&gt;{
    people.age&gt;=20 &amp;&amp; people.height&gt;=180 &amp;&amp; console.log(&#39;符合条件&#39;);

    people.age&lt;=20 &amp;&amp; people.height &lt;180 &amp;&amp;console.log(&#39;不符合&#39;)
};

const people={
    name:&#39;tom&#39;,
    age:18,
    height:178,
    goto(){
        return &#39;hello&#39;
    }
}

types(people)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>接口和类的约束</strong></strong></p><p>在ES6中是有类的概念，类可以和接口相结合：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>interfacePeople{
    name:string;
    age:number;
    height:number;
    goto():string;
}
const types=(people:People)=&gt;{
    people.age&gt;=20 &amp;&amp; people.height&gt;=180 &amp;&amp; console.log(&#39;符合条件&#39;);

    people.age&lt;=20 &amp;&amp; people.height &lt;180 &amp;&amp;console.log(&#39;不符合&#39;)
};

const people={
    name:&#39;tom&#39;,
    age:18,
    height:178,
    say:&#39;hello&#39;,
    add:&#39;new add&#39;,
    addNumber:123,
    goto(){
        return &#39;hello&#39;
    }
};

class newPeople implementsPeople{
    name=&#39;bob&#39;;
    age=19;
    height:190;
    say:&#39;hello&#39;;
    add:&#39;new add2&#39;;
    addNumber:123;
    goto(){
        return &#39;hi&#39;
    }
};

let a=new newPeople();
console.log(a.goto())
types(people)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>接口的继承</strong></strong></p><p>接口与接口也是可以继承的：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>interfacePeople{
    name:string;
    age:number;
    height:number;
    say?:string;
    [propname:string]:any;
    goto():string;
}

const types=(people:newPeople)=&gt;{
    people.age&gt;=20 &amp;&amp; people.height&gt;=180 &amp;&amp; console.log(&#39;符合条件&#39;);

    people.age&lt;=20 &amp;&amp; people.height &lt;180 &amp;&amp;console.log(&#39;不符合&#39;)
};

const people={
    name:&#39;tom&#39;,
    age:18,
    height:178,
    say:&#39;hello&#39;,
    add:&#39;new add&#39;,
    addNumber:123,
    goto(){
        return &#39;hello&#39;
    },
    back(){
        console.log(1)
    }
}

interface newPeople extendsPeople{
    back():void
}
types(people)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="五、类的基本使用" tabindex="-1"><a class="header-anchor" href="#五、类的基本使用" aria-hidden="true">#</a> <strong>五、类的基本使用</strong></h1><p>首先，我们先创建一个类：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Test{
    name=&#39;say&#39;
    say(){
        return this.name
    }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这就是平时所写的类，在ts中的继承和ES6的继承是一样的，关键字也是extends，比如我们这里新建个类，继承Text;</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>classTest{
    name=&#39;say&#39;
    say(){
        return this.name
    }
};
class NewTest extendsTest{
    back(){
        return &#39;hello&#39;
    }
}

const tom=new NewTest();

console.log(tom.say());
console.log(tom.back());

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>super关键字的使用</strong></strong></p><p>如果想在say方法中后面加点东西，可以这么操作：</p><p><code>class Test{ name=&#39;say&#39; say(){ return this.name } }; class NewTest extends Test{ back(){ return &#39;hello&#39; } say(){ return super.say()+&#39;----hello&#39; } } const tom=new NewTest(); console.log(tom.say()); console.log(tom.back());</code></p><p><strong><strong>ts中类的访问类型</strong></strong></p><p>ts中的访问类型就是基于三个关键字：private、protected以及pubilc这三种访问类型。看例子，先定义一个类，然后用这个类的对象，进行赋值：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Person{
    name:string
}

const person=new Person();

person.name=&#39;tom&#39;;

console.log(person.name)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>pubilc</strong></p><p>运行可以看到正常的输出内容，这是因为如果不对name的访问属性进行定义，那么他的默认属性就是pubilc,从字面意思来看，它的意思就是公用的，允许在类的内部和外部被调用。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>classPerson{
    public name:string
}

const person=new Person();

person.name=&#39;tom&#39;;

console.log(person.name)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>private</strong></strong></p><p>private的属性意思就是只允许在类的内部调用，不能在外部调用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Person{
    private name:string;
    public say(){
        console.log(this.name+&#39;-----hello&#39;);
    }
}

const person=new Person();

person.name=&#39;tom&#39;;//报错

console.log(person.name)//报错

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>protected</strong></strong></p><p>protected允许在类内以及继承的子类中使用，把刚刚的name改成protected属性，这时候在外部就会报错，这时候再写一个继承，代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>classPerson{
    protected name:string;
    public say(){
        console.log(this.name+&#39;-----hello&#39;);
    }

}

const person=new Person();

person.name=&#39;tom&#39;;//报错

console.log(person.name)//报错

class NewPerson extendsPerson{
    public back(){
        console.log(this.name)
    }
}

const newperson=new NewPerson();

newperson.back()//正常

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>类的构造函数</strong></strong></p><p>首先新建一个类：Person,定义一个name，并在new的时候进行参数传递，然后打印出来，这时候我们就可以使用构造函数constructor :</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Person{
    pubilc name:string;
    constructor(name){
        this.name=name
    }
};

const person=new Person(&#39;tom&#39;);
console.log(person.name);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到可以打印出来，但是上面写法有点麻烦，还可以再进行简化：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>classPerson{
    constructor(pubilc name:string){}
};
const person=new Person(&#39;tom&#39;);
console.log(person.name);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>类继承中的构造器写法</strong></strong></p><p>普通的书写方法上面已经演示了，在子类中使用构造函数需要用super()调用父类的构造函数，直接看代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>classPerson{
    constructor(pubilc name:string){}
};

class Teacher extendsPerson{
    constructor(pubilc age:number){
        super()
    }
};

const teacher=new Teacher(18);
console.log(teacher.age+&#39;---&#39;+teacher.name);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>ts中类的Getter、Setter、static以及readonly</strong></strong></p><p>在上面中提到了访问类型private,它的最大用处就是封装一个书写，然后通过Getter和Setter去访问和修改：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>classPerson{
    constructor(private _age:number){

    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果想让别人知道，就可以使用Getter来实现，他并不是一个方法，只是一个属性：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>classPerson{
    constructor(private _age:number){

    };
    get age(){
        return this._age
    }
};

const person=new Person(30);
console.log(person.age)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时候你可能会觉得这不是多此一举吗？但在Getter中可以对 _age进行处理：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>classPerson{
    constructor(private _age:number){

    };
    get age(){
        return this._age-10
    }
};

const person=new Person(30);
console.log(person.age)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>既然 _age是私有的，我们无法进行改变，这时候就可以用Setter进行改变：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>classPerson{
    constructor(private _age:number){

    };
    get age(){
        return this._age
    }
    set age(age:number){
        this._age=age
    }
};

const person=new Person(30);

person.age=20;

console.log(person.age)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在类中，如果想用这个类的实例，就必须先进行new操作，但有没有一种方法不需要new就可以？</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//常规方法
classPerson{
    say(){
        return &#39;say hello&#39;
    }
};

const person=new Person();
console.log(person.say());

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在ts中，我们不想new的话可以这么写：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Person{
    static say(){
        return &#39;say hello&#39;
    }
};

console.log(Person.say())

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>readonly在初始化后赋值，以后就不能进行修改</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Person{
    constructor(readonly name:string){}
}
let p=new Person(&#39;tom&#39;);

p.name=&#39;bob&#39;//报错

console.log(p.name);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>类的抽象类</strong></strong></p><p>abstract 用于定义抽象类和其中的抽象方法。它有几个特点：</p><p>抽象类是不允许实例化的</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//错误演示
abstract class Person {
    public abstract say()
}
const tom=new Person()//无法创建抽象类的实例

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>抽象类中的抽象方法必须被子类实现：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//错误演示
abstract classPerson {
    abstract say(){
        console.log(&#39;hello&#39;)
    }
}
class Tom extendsPerson{
    say(){
        console.log(&#39;say hello&#39;)
    }
};
//正确方法
abstract classPerson {
    abstract say()
}
class Tom extendsPerson{
    say(){
        console.log(&#39;say hello&#39;)
    }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>tsconfig.json配置</strong></strong></p><p>生成</p><p>我们可以通过tsc --init去生成ts配置文件:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tsc --init //终端执行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>编译</p><p>会生成一个tsconfig.json文件，我们在ts文件中可以随便写点什么：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//测试tsconfig.json
const test:string=&#39;tsconfig.json&#39;;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后打开tsconfig.json文件，找到complilerOptions属性下的removeComments:true（这个配置是编译后不输出注释），取消掉注释，然后执行命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tsc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这时候打开生成的js文件，发现没有注释，说明成功。</p><p><strong><strong>include 、exclude 和 files</strong></strong></p><p>如果有多个ts文件，只想编译一个可以在ts配置项中加入include：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;include&quot;:[&quot;text.ts&quot;],
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果想除了某个文件不编译，剩下的都编译，可以使用exclude：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;exclude&quot;:[&quot;text.ts&quot;],
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>files和include没有什么区别：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;files&quot;:[&quot;text.ts&quot;],
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><strong>compilerOptions配置</strong></strong></p><p><strong>removeComments</strong></p><p>这个配置意思就是编译后不输出注释</p><p><strong>strict</strong></p><p>这个设置为true,就代表严格执行ts语法，要严格按照ts语法来编写。</p><p><strong>noImplicitAny</strong></p><p>允许你的注解类型 any 不用特意表明，如果此时设置了true,看例子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//这时候编译会报错
function test(name) {
    return name;
}

//正确
function test(name:any) {
    return name;
}
strictNullChecks

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>意思就是，不强制检查null类型,此时如果配置为true看例子:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//此时就不会报错
const test: string = null;
outDir和rootDir

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此项配置是来指定文件目录和打包后存放目录，rootDir为文件目录，outDir为打包后保存的目录</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;outDir&quot;: &quot;./build&quot; ,
    &quot;rootDir&quot;: &quot;./src&quot; ,
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>编译ES6语法</strong></strong></p><p>可以使用target和allowJs，target默认为true</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;target&quot;:&#39;es5&#39; ,  // 这一项默认是开启的，你必须要保证它的开启，才能转换成功
&quot;allowJs&quot;:true,   // 这个配置项的意思是联通

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>sourceMap</strong></p><p>sourceMap 简单说，Source map 就是一个信息文件，里面储存着位置信息。也就是说，转换后的代码的每一个位置，所对应的转换前的位置。有了它，出错的时候，除错工具将直接显示原始代码，而不是转换后的代码。这无疑给开发者带来了很大方便。</p><p><strong>noUnusedLocals</strong></p><p>设置noUnusedLocals为true，编译代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const name:tring=&#39;111&#39;;
export const age = &quot;text&quot;;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时候就会报错，因为有name变量没有使用。</p><h1 id="六、联合类型和类型保护" tabindex="-1"><a class="header-anchor" href="#六、联合类型和类型保护" aria-hidden="true">#</a> <strong>六、联合类型和类型保护</strong></h1><p><strong><strong>联合类型</strong></strong></p><p>联合类型的意思就是允许一个类型有两种或者两种以上的类型:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>interfaceTest{
    name:string;
    say:()=&gt;{

    }
}

interfaceTest2{
    name:string;
    call:()=&gt;{};
}

function Tom(fun: Test | Test2){
    console.log(fun.name)
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果此时修改一下方法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function Tom(fun: Test | Test2){
    fun.say()
}
//报错

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是因为只能访问两个类型的共有方法。</p><p><strong><strong>类型保护-类型断言</strong></strong></p><p>上面的方法，如果修改完报错，这时候我们可以用as来判断：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>interfaceTest {
    text: boolean;
    say(): void
}

interfaceTest2 {
    text: boolean;
    skill():string
}
function judgeWho(val: Waiter | Teacher) {
    if (val.text) {
    (val as Teacher).skill();
    }else{
    (val as Waiter).say();
    }
}

const a={
    text:true,
    skill:function():void{
        console.log(1)
    },
    say:function():void{
        console.log(2)
    }
}
judgeWho(a) //1

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>类型保护-in语法</strong></strong></p><p>in方法与断言比较类似，使用方法如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>interfacePerson{
    name:string;
    say:()=&gt;{

    }
}

interfacePerson2{
    name:string;
    todo:()=&gt;{

    }
};

function tom(val:Person|Person2){
    if(&#39;todo&#39; in val){
        val.todo()
    }else{
        val.say()
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>类型保护-typeof语法</strong></strong></p><p>可以用typeof方法来判断：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function add(name:string|number,name2:string|number){
    if(typeof name===&#39;string&#39;||typeof name2==&#39;string&#39;){
        return name+&#39;---&#39;+name2
    }else{
        return name+name2
    }
}

add(1,2)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>类型保护-instanecof语法</strong></strong></p><p>如果要保护类型是一个对象，就可以使用instanceof：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>classNumObject{
    num:number
}

function numbers(num1:object|NumObject,num2:object|NumObject){
    if(num1 instanceof NumObject &amp;&amp; num2 instanceof NumObject){
        return num1.num+num2.num
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>Enum枚举类型</strong></strong></p><p>我们平时会有这种写法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function getName(status:any){
    if(status===0){
        return &#39;one&#39;
    }else if(status===1){
        return &#39;two&#39;
    }else{
        return &#39;three&#39;
    }
}

console.log(getName(0))

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这么写可能有点麻烦，阅读起来还是有点麻烦，这时候可以这么写：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const Status={
    ONE:0,
    TWO:1,
    THREE:3
}

function getName(status:any){
    if(status===Status.ONE){
        return &#39;one&#39;
    }else if(status===Status.TWO){
        return &#39;two&#39;
    }else{
        return &#39;three&#39;
    }
}

console.log(getName(0));

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时候我们的枚举就要上场了：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>enum Status{
    ONE,
    TWO,
    THREE
}

function getName(status:any){
    if(status===Status.ONE){
        return &#39;one&#39;
    }else if(status===Status.TWO){
        return &#39;two&#39;
    }else{
        return &#39;three&#39;
    }
}

console.log(getName(1));

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一样也可以输出，因为枚举是有对应数字值的，默认从0开始，当然也可以改变：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>enum Status{
    ONE=1,
    TWO,//2
    THREE//3
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以进行返查操作：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>enum Status{
    ONE,
    TWO,
    THREE
}

function getName(status:any){
    if(status===Status.ONE){
        return &#39;one&#39;
    }else if(status===Status.TWO){
        return &#39;two&#39;
    }else{
        return &#39;three&#39;
    }
}

console.log(Status.ONE,Status[1]);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="七、泛型" tabindex="-1"><a class="header-anchor" href="#七、泛型" aria-hidden="true">#</a> <strong>七、泛型</strong></h1><blockquote><p>泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。</p></blockquote><p><strong><strong>在函数中使用</strong></strong></p><p>我们先编写一个函数：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function add(one:string,two:string){
    return \`\${one}\${two}\`
}

console.log(add(&#39;a&#39;,&#39;b&#39;))

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时候我们希望参数更加灵活一些，两个参数为number或者string：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function add(one:string|number,two:string|number){
    return \`\${one}\${two}\`
}

console.log(add(&#39;a&#39;,&#39;b&#39;))

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这么书写有些麻烦，这时候就可以使用泛型：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function add&lt;T&gt;(one:T,two:T){
    return \`\${one}\${two}\`
}

console.log(add&amp;lt;string&amp;gt;(&#39;a&#39;,&#39;b&#39;))

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在使用中，泛型通常用 &lt;T&gt; 来进行表示。泛型可以有多个吗？当然可以：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function add&lt;T,P&gt;(one:T,two:P){
    return \`\${one}\${two}\`
}

console.log(add&lt;string,number&gt;(&#39;a&#39;,2))

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同时泛型也支持类型推断：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function add&lt;T,P&gt;(one:T,two:P){
    return \`\${one}\${two}\`
}

console.log(add&lt;string,number&gt;(&#39;a&#39;,2))

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>在类中使用</strong></strong></p><p>首先先写一个类,且接受参数为一个数组，数组里面存放string类型的数据：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>classList {
    constructor(private list:string[]) {};
    getItem(index:number):string{
        return this.list[index]
    }
};

const list=new List([&#39;girl&#39;,&#39;boy&#39;,&#39;wom&#39;]);
console.log(list.getItem(1))

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时候如果我们传递数组时候里面又想放数字怎么办：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>classList {
    constructor(private list:string[]|number[]) {};
    getItem(index:number):string|number{
        return this.list[index]
    }
};

const list=new List([&#39;girl&#39;,&#39;boy&#39;,&#39;wom&#39;]);
console.log(list.getItem(1))

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这么写就比较复杂了,这时候就可以使用泛型来简化我们的代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class List&lt;T&gt;{
    constructor(private list:T[]) {};
    getItem(index:number):T{
        return this.list[index]
    }
};

const list=new List([&#39;girl&#39;,&#39;boy&#39;,&#39;wom&#39;]);
console.log(list.getItem(1))

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>发现上面的代码没有报错？因为类型推论，所以不会报错，严格意义上应该new的时候加上类型：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const list=new List&lt;string&gt;([&#39;girl&#39;,&#39;boy&#39;,&#39;wom&#39;]);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>还有一种场景，传递过来是一个数组对象，这时候可以通过继承来解决：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>interfacePeople{
    name:string
}

class List&lt;T extendsPeople&gt;{
    constructor(private list:T[]) {};
    getItem(index:number):string{
        return this.list[index].name
    }
};

const list=new List(
    [
        {name:&#39;boy&#39;},
        {name:&#39;girl&#39;}
    ]
);
console.log(list.getItem(1))

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>泛型约束</strong></strong></p><p>上面例子中，泛型可以为任意值，但有时候我们希望还是能稍微约束一下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function list&lt;T extends number|string&gt;(name:T){
    return \`\${name}\`
}

console.log(list&lt;number&gt;(1))

class  List&lt;T extends number|string&gt; {
    constructor(private list:T[]) {

    };
    getItem(index:number):T{
        return this.list[index]
    }
}

const list=new List([1,2])

console.log(list.getItem(0))

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="八、namespace命名空间" tabindex="-1"><a class="header-anchor" href="#八、namespace命名空间" aria-hidden="true">#</a> <strong>八、Namespace命名空间</strong></h1><p><strong><strong>新建一个ts项目</strong></strong></p><ul><li>首先，我们建立一个项目文件，然后npm init -y生成package.json文件，然后再tsc -init生成ts配置文件。</li><li>在根目录下新建index.html文件，再建立一个src和bulid目录，在src目录下新建一个index.js。</li><li>配置tsconfig.json文件，设置入口和输出目录（outDir和rootDir）。</li></ul><p>打开index.html,引入js文件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script src=&quot;./build/index.js&quot;&gt;&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在新建的ts文件中随便写点什么：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>console.log(&#39;hello&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后tsc编译一下，打开控制台，我们就可以看到了</p><p><strong><strong>编写一个小组件</strong></strong></p><p>在我们刚刚建立的index.ts文件，写一个header、content和footer组件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>classHeader {
    constructor() {
        const elem = document.createElement(&quot;div&quot;);
        elem.innerText = &quot;This is Header&quot;;
        document.body.appendChild(elem);
    }
}

classContent {
    constructor() {
        const elem = document.createElement(&quot;div&quot;);
        elem.innerText = &quot;This is Content&quot;;
        document.body.appendChild(elem);
    }
}

classFooter {
    constructor() {
        const elem = document.createElement(&quot;div&quot;);
        elem.innerText = &quot;This is Footer&quot;;
        document.body.appendChild(elem);
    }
}

classPage {
    constructor() {
        new Header();
        new Content();
        new Footer();
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在index.html中加一行js代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script&gt;new Page();&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这时候我们可以看到内容正常输出，但有一个问题，我们的Header、content和footer都暴露了出来，并不是只暴露一个page，这时候我们的命名空间就派上了用场：</p><p><strong><strong>命名空间</strong></strong></p><p>命名空间声明的关键词是namespace 比如声明一个namespace Home,需要暴露出去的类，可以使用export关键词，这样只有暴漏出去的类是全局的，其他的不会再生成全局污染了。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>namespace Home {
classHeader {
    constructor() {
        const elem = document.createElement(&quot;div&quot;);
        elem.innerText = &quot;This is Header&quot;;
        document.body.appendChild(elem);
    }
}

classContent {
    constructor() {
        const elem = document.createElement(&quot;div&quot;);
        elem.innerText = &quot;This is Content&quot;;
        document.body.appendChild(elem);
    }
}

classFooter {
    constructor() {
        const elem = document.createElement(&quot;div&quot;);
        elem.innerText = &quot;This is Footer&quot;;
        document.body.appendChild(elem);
    }
}

export classPage {
    constructor() {
        new Header();
        new Content();
        new Footer();
        }
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这么写也是比较麻烦，因为我们需要引入两个文件，我们可以通过配置来让他成为一个文件，打开tsconfig.json,找到这一行：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;module&quot;:&quot;commonjs&quot;
//修改为：
&quot;module&quot;:&quot;amd

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后找到这一行：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;outFile&quot;: &quot;./build/index.js&quot;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>子命名空间</strong></strong></p><p>如果在刚刚的组件中再写一个会怎么样？</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>namespace Components {
    export namespace SubComponents {
        export class Test {}
    }

    //someting ...
}

//读取
// Components.SubComponents.Test

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>ts中使用import</strong></strong></p><p>首先建立一个文件compontent.ts,随便写点东西，然后使用export导出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export classHeader {
    constructor() {
    const elem = document.createElement(&quot;div&quot;);
    elem.innerText = &quot;This is Header&quot;;
    document.body.appendChild(elem);
    }
}

export classContent {
    constructor() {
    const elem = document.createElement(&quot;div&quot;);
    elem.innerText = &quot;This is Content&quot;;
    document.body.appendChild(elem);
    }
}

export classFooter {
    constructor() {
    const elem = document.createElement(&quot;div&quot;);
    elem.innerText = &quot;This is Footer&quot;;
    document.body.appendChild(elem);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在index.ts中导入一下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { Header, Content, Footer } from &quot;./compontent&quot;;

export classPage{
    constructor(){
        new Header();
        new Content();
        new Footer();
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行tsc编译，打开build中的index.js,可以看到代码是define开头的，这是 amd 规范的代码，不能直接在浏览器中运行，可以在 Node 中直接运行，所以我们还需要借助require.js的支持：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script src=&quot;https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.js&quot;&gt;&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后在index.html中使用require.js写法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script&gt;
require([&quot;page&quot;], function (page) {
    new page.default();
});
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,269),o={href:"https://zhuanlan.zhihu.com/p/361269219",target:"_blank",rel:"noopener noreferrer"};function b(g,p){const i=a("ExternalLinkIcon");return r(),v("div",null,[c,e("p",null,[e("a",u,[n("TyprScript官网"),s(i)])]),m,e("p",null,[n("本文参考："),e("a",o,[n("TypeScript基础知识整理"),s(i)])])])}const h=d(t,[["render",b],["__file","TyprScript.html.vue"]]);export{h as default};
