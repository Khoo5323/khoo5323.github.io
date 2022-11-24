import{_ as e,o as n,c as i,a as s}from"./app.74a5dc6f.js";const l="/assets/Untitled.b1bc8b28.png",a={},d=s(`<h1 id="面向对象" tabindex="-1"><a class="header-anchor" href="#面向对象" aria-hidden="true">#</a> 面向对象</h1><h1 id="javascript面向对象、类继承" tabindex="-1"><a class="header-anchor" href="#javascript面向对象、类继承" aria-hidden="true">#</a> <strong>JavaScript面向对象、类继承</strong></h1><h1 id="一、面向对象" tabindex="-1"><a class="header-anchor" href="#一、面向对象" aria-hidden="true">#</a> <strong>一、面向对象</strong></h1><p><strong><strong>什么是面向对象</strong></strong></p><blockquote><p>面向对象编程 —— Object Oriented Programming，简称 OOP ，是一种编程开发思想。 它将真实世界各种复杂的关系，抽象为一个个对象，然后由对象之间的分工与合作，完成对真实世界的模拟。</p></blockquote><p>在面向对象程序开发思想中，每一个对象都是功能中心，具有明确分工，可以完成接受信息、处理数据、发出信息等任务。 因此，面向对象编程具有灵活、代码可复用、高度模块化等特点，容易维护和开发，比起由一系列函数或指令组成的传统的过程式编程（procedural programming），更适合多人合作的大型软件项目。</p><p>面向对象与面向过程：</p><ul><li>面向过程就是亲力亲为，事无巨细，面面俱到，步步紧跟，有条不紊</li><li>面向对象就是找一个对象，指挥得结果</li><li>面向对象将执行者转变成指挥者</li><li>面向对象不是面向过程的替代，而是面向过程的封装</li></ul><p>面向对象的特性：</p><ul><li>封装性</li><li>继承性</li><li>[多态性]抽象</li></ul><p><strong><strong>程序中面向对象的基本体现</strong></strong></p><p>在 JavaScript 中，所有数据类型都可以视为对象，当然也可以自定义对象。 自定义的对象数据类型就是面向对象中的类（ Class ）的概念。</p><p>我们以一个例子来说明面向过程和面向对象在程序流程上的不同之处。</p><p>假设我们要处理学生的成绩表，为了表示一个学生的成绩，面向过程的程序可以用一个对象表示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var std1 = { name: &#39;Michael&#39;, score: 98 }
var std2 = { name: &#39;Bob&#39;, score: 81 }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而处理学生成绩可以通过函数实现，比如打印学生的成绩：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function printScore (student) {
  console.log(&#39;姓名：&#39; + student.name + &#39;  &#39; + &#39;成绩：&#39; + student.score)
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果采用面向对象的程序设计思想，我们首选思考的不是程序的执行流程， 而是 Student 这种数据类型应该被视为一个对象，这个对象拥有 name 和 score 这两个属性（Property）。 如果要打印一个学生的成绩，首先必须创建出这个学生对应的对象，然后，给对象发一个 printScore 消息，让对象自己把自己的数据打印出来。</p><p>抽象数据行为模板（Class）：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function Student(name, score) {
  this.name = name;
  this.score = score;
  this.printScore = function() {
    console.log(&#39;姓名：&#39; + this.name + &#39;  &#39; + &#39;成绩：&#39; + this.score);
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据模板创建具体实例对象（Instance）：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var std1 = new Student(&#39;Michael&#39;, 98)
var std2 = new Student(&#39;Bob&#39;, 81)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实例对象具有自己的具体行为（给对象发消息）：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>std1.printScore() // =&gt; 姓名：Michael  成绩：98
std2.printScore() // =&gt; 姓名：Bob  成绩 81

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>面向对象的设计思想是从自然界中来的，因为在自然界中，类（Class）和实例（Instance）的概念是很自然的。 Class 是一种抽象概念，比如我们定义的 Class——Student ，是指学生这个概念， 而实例（Instance）则是一个个具体的 Student ，比如， Michael 和 Bob 是两个具体的 Student 。</p><p><strong>所以，面向对象的设计思想是：</strong></p><ul><li>抽象出 Class(构造函数)</li><li>根据 Class(构造函数) 创建 Instance</li><li>指挥 Instance 得结果</li></ul><p>面向对象的抽象程度又比函数要高，因为一个 Class 既包含数据，又包含操作数据的方法。</p><p><strong><strong>创建对象</strong></strong></p><p><strong>简单方式</strong></p><p>我们可以直接通过 new Object() 创建：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var person = new Object()
person.name = &#39;Jack&#39;
person.age = 18

person.sayName = function () {
  console.log(this.name)
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每次创建通过 new Object() 比较麻烦，所以可以通过它的简写形式对象字面量来创建：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var person = {
  name: &#39;Jack&#39;,
  age: 18,
  sayName: function () {
    console.log(this.name)
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于上面的写法固然没有问题，但是假如我们要生成两个 person 实例对象呢？</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var person1 = {
  name: &#39;Jack&#39;,
  age: 18,
  sayName: function () {
    console.log(this.name)
  }
}

var person2 = {
  name: &#39;Mike&#39;,
  age: 16,
  sayName: function () {
    console.log(this.name)
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过上面的代码我们不难看出，这样写的代码太过冗余，重复性太高。</p><p><strong>简单方式的改进：工厂函数</strong></p><p>我们可以写一个函数，解决代码重复问题：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function createPerson (name, age) {
  return {
    name: name,
    age: age,
    sayName: function () {
      console.log(this.name)
    }
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后生成实例对象：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var p1 = createPerson(&#39;Jack&#39;, 18)
var p2 = createPerson(&#39;Mike&#39;, 18)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样封装确实爽多了，通过工厂模式我们解决了创建多个相似对象代码冗余的问题， 但却没有解决对象识别的问题（即怎样知道一个对象的类型）。</p><p><strong>构造函数</strong></p><p><strong>更优雅的工厂函数：构造函数</strong></p><p>一种更优雅的工厂函数就是下面这样，构造函数：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function Person(name, age) {
  this.name = name
  this.age = age
  this.sayName = function () {
    console.log(this.name)
  }
}

var p1 = new Person(&#39;Jack&#39;, 18)
p1.sayName() // =&gt; Jack

var p2 = new Person(&#39;Mike&#39;, 23)
p2.sayName() // =&gt; Mike

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解析构造函数代码的执行</strong></p><p>在上面的示例中，Person() 函数取代了 createPerson() 函数，但是实现效果是一样的。 这是为什么呢？</p><p>我们注意到，Person() 中的代码与 createPerson() 有以下几点不同之处：</p><ul><li>没有显示的创建对象</li><li>直接将属性和方法赋给了 this 对象</li><li>没有 return 语句</li><li>函数名使用的是大写的 Person</li></ul><p>而要创建 Person 实例，则必须使用 new 操作符。 以这种方式调用构造函数会经历以下 4 个步骤：</p><ul><li>创建一个新对象</li><li>将构造函数的作用域赋给新对象（因此 this 就指向了这个新对象）</li><li>执行构造函数中的代码</li><li>返回新对象</li></ul><p>下面是具体的伪代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function Person (name, age) {
  // 当使用 new 操作符调用 Person() 的时候，实际上这里会先创建一个对象
  // var instance = {}
  // 然后让内部的 this 指向 instance 对象
  // this = instance
  // 接下来所有针对 this 的操作实际上操作的就是 instance

  this.name = name
  this.age = age
  this.sayName = function () {
    console.log(this.name)
  }

  // 在函数的结尾处会将 this 返回，也就是 instance
  // return this
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>构造函数和实例对象的关系</strong></p><p>使用构造函数的好处不仅仅在于代码的简洁性，更重要的是我们可以识别对象的具体类型了。 在每一个实例对象中同时有一个 constructor 属性，该属性指向创建该实例的构造函数：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>console.log(p1.constructor === Person) // =&gt; true
console.log(p2.constructor === Person) // =&gt; true
console.log(p1.constructor === p2.constructor) // =&gt; true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对象的 constructor 属性最初是用来标识对象类型的， 但是，如果要检测对象的类型，还是使用 instanceof 操作符更可靠一些：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>console.log(p1 instanceof Person) // =&gt; true
console.log(p2 instanceof Person) // =&gt; true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>总结：</strong></p><ul><li>构造函数是根据具体的事物抽象出来的抽象模板</li><li>实例对象是根据抽象的构造函数模板得到的具体实例对象</li><li>每一个实例对象都具有一个 constructor 属性，指向创建该实例的构造函数</li></ul><p>注意： constructor 是实例的属性的说法不严谨，具体后面的原型会讲到</p><p>可以通过实例的 constructor 属性判断实例和构造函数之间的关系</p><p>注意：这种方式不严谨，推荐使用 instanceof 操作符，后面学原型会解释为什么</p><p>构造函数的问题</p><p>使用构造函数带来的最大的好处就是创建对象更方便了，但是其本身也存在一个浪费内存的问题：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function Person (name, age) {
  this.name = name
  this.age = age
  this.type = &#39;human&#39;
  this.sayHello = function () {
    console.log(&#39;hello &#39; + this.name)
  }
}

var p1 = new Person(&#39;Tom&#39;, 18)
var p2 = new Person(&#39;Jack&#39;, 16)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在该示例中，从表面上好像没什么问题，但是实际上这样做，有一个很大的弊端。 那就是对于每一个实例对象，type 和 sayHello 都是一模一样的内容， 每一次生成一个实例，都必须为重复的内容，多占用一些内存，如果实例对象很多，会造成极大的内存浪费。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>console.log(p1.sayHello === p2.sayHello) // =&gt; false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>对于这种问题我们可以把需要共享的函数定义到构造函数外部：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function sayHello = function () {
  console.log(&#39;hello &#39; + this.name)
}

function Person (name, age) {
  this.name = name
  this.age = age
  this.type = &#39;human&#39;
  this.sayHello = sayHello
}

var p1 = new Person(&#39;Top&#39;, 18)
var p2 = new Person(&#39;Jack&#39;, 16)

console.log(p1.sayHello === p2.sayHello) // =&gt; true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样确实可以了，但是如果有多个需要共享的函数的话就会造成全局命名空间冲突的问题。</p><p>你肯定想到了可以把多个函数放到一个对象中用来避免全局命名空间冲突的问题：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var fns = {
  sayHello: function () {
    console.log(&#39;hello &#39; + this.name)
  },
  sayAge: function () {
    console.log(this.age)
  }
}

function Person (name, age) {
  this.name = name
  this.age = age
  this.type = &#39;human&#39;
  this.sayHello = fns.sayHello
  this.sayAge = fns.sayAge
}

var p1 = new Person(&#39;lpz&#39;, 18)
var p2 = new Person(&#39;Jack&#39;, 16)

console.log(p1.sayHello === p2.sayHello) // =&gt; true
console.log(p1.sayAge === p2.sayAge) // =&gt; true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>至此，我们利用自己的方式基本上解决了构造函数的内存浪费问题。 但是代码看起来还是那么的格格不入，那有没有更好的方式呢？</p><p><strong>小结</strong></p><ul><li>构造函数语法</li><li>分析构造函数</li><li>构造函数和实例对象的关系</li><li>实例的 constructor 属性</li><li>instanceof 操作符</li><li>构造函数的问题</li></ul><p><strong><strong>原型</strong></strong></p><p><strong>更好的解决方案： prototype</strong></p><p>JavaScript 规定，每一个构造函数都有一个 prototype 属性，指向另一个对象。 这个对象的所有属性和方法，都会被构造函数的所拥有。</p><p>这也就意味着，我们可以把所有对象实例需要共享的属性和方法直接定义在 prototype 对象上。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function Person (name, age) {
  this.name = name
  this.age = age
}

console.log(Person.prototype)

Person.prototype.type = &#39;human&#39;

Person.prototype.sayName = function () {
  console.log(this.name)
}

var p1 = new Person(...)
var p2 = new Person(...)

console.log(p1.sayName === p2.sayName) // =&gt; true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时所有实例的 type 属性和 sayName() 方法， 其实都是同一个内存地址，指向 prototype 对象，因此就提高了运行效率。</p><p>构造函数、实例、原型三者之间的关系</p><p><img src="`+l+`" alt="Untitled"></p><p><strong>任何函数都具有一个 prototype 属性，该属性是一个对象。</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function F () {}
console.log(F.prototype) // =&gt; object

F.prototype.sayHi = function () {
  console.log(&#39;hi!&#39;)
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>构造函数的 prototype 对象默认都有一个 constructor 属性，指向 prototype 对象所在函数。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>console.log(F.prototype.constructor === F) // =&gt; true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过构造函数得到的实例对象内部会包含一个指向构造函数的 prototype 对象的指针 <strong>proto</strong>。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var instance = new F()
console.log(instance.__proto__ === F.prototype) // =&gt; true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`__proto__\` 是非标准属性。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>实例对象可以直接访问原型对象成员。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>instance.sayHi() // =&gt; hi!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>总结：</strong></p><ul><li>任何函数都具有一个 prototype 属性，该属性是一个对象</li><li>构造函数的 prototype 对象默认都有一个 constructor 属性，指向 prototype 对象所在函数</li><li>通过构造函数得到的实例对象内部会包含一个指向构造函数的 prototype 对象的指针 <strong>proto</strong></li><li>所有实例都直接或间接继承了原型对象的成员</li></ul><p><strong><strong>属性成员的搜索原则：原型链</strong></strong></p><p>了解了 构造函数-实例-原型对象 三者之间的关系后，接下来我们来解释一下为什么实例对象可以访问原型对象中的成员。</p><p>每当代码读取某个对象的某个属性时，都会执行一次搜索，目标是具有给定名字的属性</p><ul><li>搜索首先从对象实例本身开始</li><li>如果在实例中找到了具有给定名字的属性，则返回该属性的值</li><li>如果没有找到，则继续搜索指针指向的原型对象，在原型对象中查找具有给定名字的属性</li><li>如果在原型对象中找到了这个属性，则返回该属性的值</li></ul><p>也就是说，在我们调用 person1.sayName() 的时候，会先后执行两次搜索：</p><ul><li>首先，解析器会问：“实例 person1 有 sayName 属性吗？”答：“没有。</li><li>”然后，它继续搜索，再问：“ person1 的原型有 sayName 属性吗？”答：“有。</li><li>”于是，它就读取那个保存在原型对象中的函数。</li><li>当我们调用 person2.sayName() 时，将会重现相同的搜索过程，得到相同的结果。</li></ul><p>而这正是多个对象实例共享原型所保存的属性和方法的基本原理。</p><p>总结：</p><ul><li>先在自己身上找，找到即返回</li><li>自己身上找不到，则沿着原型链向上查找，找到即返回</li><li>如果一直到原型链的末端还没有找到，则返回 undefined</li></ul><p>实例对象读写原型对象成员</p><p>读取：</p><ul><li>先在自己身上找，找到即返回</li><li>自己身上找不到，则沿着原型链向上查找，找到即返回</li><li>如果一直到原型链的末端还没有找到，则返回 undefined</li></ul><p>值类型成员写入（实例对象.值类型成员 = xx）：</p><ul><li>当实例期望重写原型对象中的某个普通数据成员时实际上会把该成员添加到自己身上</li><li>也就是说该行为实际上会屏蔽掉对原型对象成员的访问</li></ul><p>引用类型成员写入（实例对象.引用类型成员 = xx）：</p><ul><li>同上</li></ul><p>复杂类型修改（实例对象.成员.xx = xx）：</p><ul><li>同样会先在自己身上找该成员，如果自己身上找到则直接修改</li><li>如果自己身上找不到，则沿着原型链继续查找，如果找到则修改</li><li>如果一直到原型链的末端还没有找到该成员，则报错（实例对象.undefined.xx = xx）</li></ul><p><strong>更简单的原型语法</strong></p><p>我们注意到，前面例子中每添加一个属性和方法就要敲一遍 Person.prototype 。 为减少不必要的输入，更常见的做法是用一个包含所有属性和方法的对象字面量来重写整个原型对象：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function Person (name, age) {
  this.name = name
  this.age = age
}

Person.prototype = {
  type: &#39;human&#39;,
  sayHello: function () {
    console.log(&#39;我叫&#39; + this.name + &#39;，我今年&#39; + this.age + &#39;岁了&#39;)
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在该示例中，我们将 Person.prototype 重置到了一个新的对象。 这样做的好处就是为 Person.prototype 添加成员简单了，但是也会带来一个问题，那就是原型对象丢失了 constructor 成员。</p><p>所以，我们为了保持 constructor 的指向正确，建议的写法是：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function Person (name, age) {
  this.name = name
  this.age = age
}

Person.prototype = {
  constructor: Person, // =&gt; 手动将 constructor 指向正确的构造函数
  type: &#39;human&#39;,
  sayHello: function () {
    console.log(&#39;我叫&#39; + this.name + &#39;，我今年&#39; + this.age + &#39;岁了&#39;)
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>原生对象的原型</strong></p><p>所有函数都有 prototype 属性对象。</p><ul><li>Object.prototype</li><li>Function.prototype</li><li>Array.prototype</li><li>String.prototype</li><li>Number.prototype</li><li>Date.prototype</li><li>...</li></ul><p><strong>原型对象使用建议</strong></p><ul><li>私有成员（一般就是非函数成员）放到构造函数中</li><li>共享成员（一般就是函数）放到原型对象中</li><li>如果重置了 prototype 记得修正 constructor 的指向</li></ul><h1 id="二、继承" tabindex="-1"><a class="header-anchor" href="#二、继承" aria-hidden="true">#</a> <strong>二、继承</strong></h1><p><strong><strong>什么是继承</strong></strong></p><ul><li>现实生活中的继承</li><li>程序中的继承</li></ul><p><strong>构造函数的属性继承：借用构造函数</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function Person (name, age) {
  this.type = &#39;human&#39;
  this.name = name
  this.age = age
}

function Student (name, age) {
  // 借用构造函数继承属性成员
  Person.call(this, name, age)
}

var s1 = Student(&#39;张三&#39;, 18)
console.log(s1.type, s1.name, s1.age) // =&gt; human 张三 18

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>构造函数的原型方法继承：拷贝继承（for-in）</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function Person (name, age) {
  this.type = &#39;human&#39;
  this.name = name
  this.age = age
}

Person.prototype.sayName = function () {
  console.log(&#39;hello &#39; + this.name)
}

function Student (name, age) {
  Person.call(this, name, age)
}

// 原型对象拷贝继承原型对象成员
for(var key in Person.prototype) {
  Student.prototype[key] = Person.prototype[key]
}

var s1 = Student(&#39;张三&#39;, 18)

s1.sayName() // =&gt; hello 张三

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>另一种继承方式：原型继承</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function Person (name, age) {
  this.type = &#39;human&#39;
  this.name = name
  this.age = age
}

Person.prototype.sayName = function () {
  console.log(&#39;hello &#39; + this.name)
}

function Student (name, age) {
  Person.call(this, name, age)
}

// 利用原型的特性实现继承
Student.prototype = new Person()

var s1 = Student(&#39;张三&#39;, 18)

console.log(s1.type) // =&gt; human

s1.sayName() // =&gt; hello 张三

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,135),r=[d];function t(v,c){return n(),i("div",null,r)}const o=e(a,[["render",t],["__file","面向对象.html.vue"]]);export{o as default};
