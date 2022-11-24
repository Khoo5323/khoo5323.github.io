import{_ as a,r,o as v,c as u,b as e,d as n,e as l,t as s,a as i}from"./app.74a5dc6f.js";const c="/assets/Untitled.77412cca.png",o="/assets/Untitled1.d1ca0400.png",m="/assets/Untitled2.f4839e43.png",b="/assets/Untitled3.08f62dfc.png",p="/assets/Untitled4.7918295f.png",g="/assets/Untitled5.e5d7dc58.png",f="/assets/Untitled6.373795c0.png",h="/assets/Untitled7.ea405cd0.png",x="/assets/Untitled8.de44cf98.png",V="/assets/Untitled9.c0192073.png",w="/assets/Untitled10.3d1140e0.png",y="/assets/Untitled11.7b382628.png",S="/assets/Untitled12.e77078e9.png",E="/assets/property.6a4b3c20.gif",O={},_=e("h1",{id:"源码探索",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#源码探索","aria-hidden":"true"},"#"),n(" 源码探索")],-1),D=e("h1",{id:"vue源码探索、diff算法、双向数据绑定原理",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vue源码探索、diff算法、双向数据绑定原理","aria-hidden":"true"},"#"),n(),e("strong",null,"Vue源码探索、diff算法、双向数据绑定原理")],-1),I={href:"https://book.penblog.cn/",target:"_blank",rel:"noopener noreferrer"},k=i('<h1 id="一、vue源码探索" tabindex="-1"><a class="header-anchor" href="#一、vue源码探索" aria-hidden="true">#</a> <strong>一、Vue源码探索</strong></h1><p><strong><strong>Diff算法</strong></strong></p><ul><li>什么是diff算法，是linux的基础命令</li><li>vdom中应用diff算法是为了找出需要更新的节点</li><li>diff算法的实现，关注patch。</li><li>核心逻辑。createElement和updateChildren</li></ul><p><strong><strong>Vue中的Diff算法</strong></strong></p><p><strong>1. 为什么要用Diff算法</strong></p><p>由于在浏览器中操作DOM的代价是非常“昂贵”的，所以才在Vue引入了Virtual DOM，Virtual DOM是对真实DOM的一种抽象描述，不懂的朋友可以自行查阅相关资料。</p><p>即使使用了Virtual DOM来进行真实DOM的渲染，在页面更新的时候，也不能全量地将整颗Virtual DOM进行渲染，而是去渲染改变的部分，这时候就需要一个计算Virtual DOM树改变部分的算法了，这个算法就是Diff算法。</p><p><strong>2. 传统的Diff算法</strong></p><p>传统的Diff算法通过循环递归对节点进行比较，然后判断每个节点的状态以及要做的操作（add，remove，change），最后 根据Virtual DOM进行DOM的渲染。大体流程如下图（图来源）：</p><p><img src="'+c+'" alt="Untitled"></p><p>传统Diff算法的复杂度为O(n^3)，这个复杂度相对来说还是较高的。后来React开发者提供了一种复杂度仅为O(n) 的Diff算法。下面就来看一下O(n)复杂度的Diff算法是如何实现的。</p><p><strong>3. 更高效的Diff算法</strong></p><p>React的开发者结合Web界面的特点做出了两个大胆的假设，使得Diff算法复杂度直接从O(n^3)降低到O(n)，假设如下：</p><ul><li>两个相同组件产生类似的DOM结构，不同的组件产生不同的DOM结构；</li><li>对于同一层次的一组子节点，它们可以通过唯一的id进行区分。</li></ul><p>通过这两个假设，他们提供了下面的Diff算法思路。</p><p><strong>同层比较</strong></p><p>新的Diff算法是逐层进行比较，只比较同一层次的节点，大大降低了复杂度，具体如下图。在后面的内容中也会介绍Vue中同层节点比较的具体实现。</p><p><img src="'+o+'" alt="Untitled"></p><p><strong>不同类型节点的比较</strong></p><p>如果发现新旧两个节点类型不同时，Diff算法会直接删除旧的节点及其子节点并插入新的节点，这是由于前面提出的不同组件产生的DOM结构一般是不同的，所以可以不用浪费时间去比较。注意的是，删除节点意味着彻底销毁该节点，并不会将该节点去与后面的节点相比较。</p><p><strong>相同类型节点的比较</strong></p><p>若是两个节点类型相同时，Diff算法会更新节点的属性实现转换。</p><p><strong>列表节点的比较</strong></p><p>列表节点的操作一般包括添加、删除和排序，列表节点需要我们给它一个key才能进行高效的比较。</p><p><strong>4.Vue Diff算法的实现</strong></p><p>了解了Diff算法的大体思路后，我们回过头来看下Vue中的Diff算法是如何实现的。</p><p>Vue的Diff算法与上面的思路大体相似，只比较同级的节点，若找不到与新节点类型相同的节点，则插入一个新节点，若有相同类型的节点则进行节点属性的更新，最后删除新节点列表中不包含的旧节点。具体的实现在vue源码的src/core/vdom/patch.js中的updateChildren方法中，由于代码较长，下面简单说一下整个的比较流程。</p><p><strong>初始化</strong></p><p><img src="'+m+`" alt="Untitled"></p><p>如上图，有一组新旧节点数组before：[A, B, C, D]、after：[E, C, F, G]，我们设置了四个哨兵节点，oldStartIdx、newStartIdx、oldEndIdx、newEndIdx分别指向新旧节点数组的起始下标和开始下标，值为0,0,3,3；oldStartVnode，newStartVnode，oldEndVnode，newEndVnode则分别指向了before和after节点列表中对应哨兵节点下标的值，值为before[oldStartVnode],after[newStartIdx],before[oldEndIdx],after[newEndIdx]。</p><p><strong>Diff</strong></p><p>当哨兵满足oldStartIdx &lt;= oldEndIdx &amp;&amp; newStartIdx &lt;= newEndIdx的条件的时候，我们会循环进行一系列节点之间的比较。</p><p><strong>优先判断</strong></p><p>我们首先对上面声明的各个节点进行一些优先级较高的判断。</p><p>判断1：oldStartVnode是否为空，若为true则oldStartIdx向后移动，继续下一个节点的判断。判断代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if (isUndef(oldStartVnode)) {
    // 更新哨兵
    oldStartVnode = oldCh[++oldStartIdx] // Vnode has been moved left
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>判断2：oldEndVnode是否为空，若为true则oldEndIdx向前移动。判断代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>else if (isUndef(oldEndVnode)) {
    oldEndVnode = oldCh[--oldEndIdx]
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>判断3：使用 sameVnode判断before和after未判断的头节点是否为相同节点，若为true，则按照上面思路说的，对相同类型节点进行节点的属性的更新并修改哨兵位置。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// sameVnode为判断节点是否相等的方法，包括key、tag、isComment等各个属性的相等才能算作相同节点
else if (sameVnode(oldStartVnode, newStartVnode)) {
    // 更新节点内容
    patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue)
    // 更新哨兵
    oldStartVnode = oldCh[++oldStartIdx]
    newStartVnode = newCh[++newStartIdx]
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>判断4：使用上一步相同的方法对oldEndVnode和newEndVnode进行判断。并执行相同的更新操作。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>else if (sameVnode(oldEndVnode, newEndVnode)) {
    patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue)
    // 更新哨兵
    oldEndVnode = oldCh[--oldEndIdx]
    newEndVnode = newCh[--newEndIdx]
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>判断5：使用sameVNode判断旧列表的头节点和新列表的尾节点进行判断，</p><p>sameVnode(oldStartVnode, newEndVnode)，若为true，更新相同节点，若该节点可以移动在真实DOM中将oldStartVnode，放到真实节点列表的最后。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
    patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue)
    // 真实DOM移动到真实节点列表的最后面
    canMove &amp;&amp; nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm))
    // 更新哨兵
    oldStartVnode = oldCh[++oldStartIdx]
    newEndVnode = newCh[--newEndIdx]
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>判断6：使用sameVnode比较旧列表的尾节点和新列表的头节点，若为true，和上面一样，更新相同节点，将oldEndVnode放到真实节点列表的最开始。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
    patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue)
    // 真实DOM移动到真实节点列表最前面
    canMove &amp;&amp; nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm)
    oldEndVnode = oldCh[--oldEndIdx]
    newStartVnode = newCh[++newStartIdx]
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过这一系列的优先判断条件，一方面对于一些不需要做移动的DOM可以得到快速处理，另一方面使待处理节点变少，缩小了后续操作的处理范围，可以更快地完成同级节点的对比。</p><p>若节点不满足上面的所有判断，则会进入到最后一个条件分支，判断7：。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>else {
    // oldKeyToIdx为after列表中key和index的映射，可以加快查找速度
    if (isUndef(oldKeyToIdx)) {
        // 若不存在该映射则去初始化映射
        oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx)
    }
    // 若newStartVnode存在key的情况，则去映射中查找，若无则从oldStartIdx到oldEndIdx遍历after列表查找新节点是否存在
    idxInOld = isDef(newStartVnode.key)
        ? oldKeyToIdx[newStartVnode.key]
        : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx)
    // 若新节点不存在于旧节点数组中，新建一个元素并插入真实DOM节点列表中
    if (isUndef(idxInOld)) { // New element
        createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx)
    } else {
        // 若在旧列表中查找到新节点，则去判断两个节点是否相等
        vnodeToMove = oldCh[idxInOld]
        if (sameVnode(vnodeToMove, newStartVnode)) {
            // 更新节点内容和哨兵并进行节点的移动
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue)
            oldCh[idxInOld] = undefined
            canMove &amp;&amp; nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm)
        } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx)
        }
    }
    newStartVnode = newCh[++newStartIdx]
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>循环结束</strong></p><p>最后当oldStartIdx &gt; oldEndIdx || newStartIdx &gt; newEndIdx，也就是新或旧节点数组有一个被查找完之后则退出判断循环。当循环结束时，旧节点数组中剩下的节点即为要删除的节点，新节点数组中剩下的即为要新增的节点。只需要进行简单的新增和删除操作即可，代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if (oldStartIdx &gt; oldEndIdx) {
    // 新节点数组中有剩余，新增新节点
    refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm
    addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue)
} else if (newStartIdx &gt; newEndIdx) {
    // 旧节点数组中有剩余，删除旧节点
    removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx)
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>经历过了这么多的判断之后，就完成了同级节点之间的Diff比较。</p><p><strong>就地复用</strong></p><p>在Diff中会使用到一种就地复用的策略。就地复用是指Vue会尽可能复用之前的DOM，尽可能不发生DOM的移动。</p><p>Vue判断新旧节点是否为相同节点（也就是上面的sameVnode方法），这个相同节点的意思并不是两个完全相同的节点，实际上它仅判断是否为同类节点（同类节点为类型相同且节点数据一致，如前后两个span，span标签上的属性没有改变，但是里面的内容变了，这样就算作同类节点），如果是同类节点，那么Vue会直接复用旧DOM节点，只要更新节点中的内容即可。这样可以大大减少列表中节点的移动操作。</p><p><strong>图解Diff</strong></p><p>下面通过之前的初始化的节点图，进行一步一步的图解。</p><p>（1）在初始化并设置了哨兵之后，进入了条件判断循环。第一步发现了旧数组的头和新数组的尾都是A节点，这时候进入了上面的判断5。oldStartIdx向后移动，newEndIdx向前移动。更新A节点内容并在真实DOM中将A移动到队伍最后。</p><p><img src="`+b+'" alt="Untitled"></p><p>（2）第二次循环，进入判断7，发现新节点E并不存在于旧节点列表中，只能新建E节点，并插入真实DOM中。哨兵newStartIdx向后移动。</p><p><img src="'+p+'" alt="Untitled"></p><p>（3）第三次循环，进入判断7，根据key map获取遍历旧节点数组发现C节点存在旧节点数组中，获取C节点在旧节点数组中的位置，在真实DOM中将C节点插入到oldStartNode（B节点）前面，将旧节点数组中的该元素（before[idxInOld]）置为undefined，newStartIdx向后移动。</p><p><img src="'+g+'" alt="Untitled"></p><p>（4）第四次循环，同第二次循环，新节点F并不存在旧节点数组中，新建F节点，并插入节点C后。newStartIdx向后移动。</p><p><img src="'+f+'" alt="Untitled"></p><p>（5）newStartIdx &gt; newEndIdx，不满足循环条件，即新节点数组已处理完成。接下来进入退出循环后的条件处理，所以从oldStartIdx到oldEndIdx遍历旧节点数组，依次删除B，D两个节点。完成节点比较</p><p><img src="'+h+'" alt="Untitled"></p><p><strong>总结</strong></p><p>Vue中的Diff算法采用了React相似的思路，都是同层节点进行比较，在比较的过程中，使用了一些优先判断和就地复用策略，提高了Diff算法的效率。</p><h1 id="二、双向数据绑定原理" tabindex="-1"><a class="header-anchor" href="#二、双向数据绑定原理" aria-hidden="true">#</a> <strong>二、双向数据绑定原理</strong></h1><p><strong><strong>学习目标</strong></strong></p>',73),j=e("li",null,[e("ol",null,[e("li",null,"vue数据双向绑定的原理。")])],-1),C={start:"2"},q=i(`<p>相关代码地址：https://github.com/canfoo/self-vue</p><p><strong><strong>vue数据双向绑定原理</strong></strong></p><p>vue数据双向绑定是通过数据劫持结合发布者-订阅者模式的方式来实现的，我们可以先来看一下通过控制台输出一个定义在vue初始化数据上的对象是个什么东西。</p><p>代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var vm = new Vue({
  data: {
    obj: {
      a: 1
    }
  },
  created: function () {
    console.log(this.obj);
  }
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果：</p><p><img src="`+x+`" alt="Untitled"></p><p>我们可以看到属性a有两个相对应的get和set方法，为什么会多出这两个方法呢？因为vue是通过Object.defineProperty()来实现数据劫持的。</p><p>Object.defineProperty( )是用来做什么的？它可以来控制一个对象属性的一些特有操作，比如读写权、是否可以枚举，这里我们主要先来研究下它对应的两个描述属性get和set，如果还不熟悉其用法，请点击这里阅读更多用法。</p><p>在平常，我们很容易就可以打印出一个对象的属性数据：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var Book = {
  name: &#39;vue权威指南&#39;
};
console.log(Book.name);  // vue权威指南

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果想要在执行console.log(book.name)的同时，直接给书名加个书名号，那要怎么处理呢？或者说要通过什么监听对象 Book 的属性值。这时候Object.defineProperty( )就派上用场了，代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var Book = {}
var name = &#39;&#39;;
Object.defineProperty(Book, &#39;name&#39;, {
  set: function (value) {
    name = value;
    console.log(&#39;你取了一个书名叫做&#39; + value);
  },
  get: function () {
    return &#39;《&#39; + name + &#39;》&#39;
  }
})
Book.name = &#39;vue权威指南&#39;;  // 你取了一个书名叫做vue权威指南
console.log(Book.name);  // 《vue权威指南》

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们通过Object.defineProperty()设置了对象Book的name属性，对其get和set进行重写操作，顾名思义，get就是在读取name属性这个值触发的函数，set就是在设置name属性这个值触发的函数，所以当执行 Book.name = &#39;vue权威指南&#39; 这个语句时，控制台会打印出 &quot;你取了一个书名叫做vue权威指南&quot;，紧接着，当读取这个属性时，就会输出 &quot;《vue权威指南》&quot;，因为我们在get函数里面对该值做了加工了。如果这个时候我们执行下下面的语句，控制台会输出什么？</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>console.log(Book);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结果：</p><p><img src="`+V+'" alt="Untitled"></p><p>乍一看，是不是跟我们在上面打印vue数据长得有点类似，说明vue确实是通过这种方法来进行数据劫持的。接下来我们通过其原理来实现一个简单版的mvvm双向绑定代码。</p><p><strong><strong>思路分析</strong></strong></p><blockquote><p>实现mvvm主要包含两个方面，数据变化更新视图，视图变化更新数据：</p></blockquote><p><img src="'+w+'" alt="Untitled"></p><p>关键点在于data如何更新view，因为view更新data其实可以通过事件监听即可，比如input标签监听 &#39;input&#39; 事件就可以实现了。所以我们着重来分析下，当数据改变，如何更新视图的。</p><p>数据更新视图的重点是如何知道数据变了，只要知道数据变了，那么接下去的事都好处理。如何知道数据变了，其实上文我们已经给出答案了，就是通过Object.defineProperty( )对属性设置一个set函数，当数据改变了就会来触发这个函数，所以我们只要将一些需要更新的方法放在这里面就可以实现data更新view了。</p><p><img src="'+y+'" alt="Untitled"></p><p>思路有了，接下去就是实现过程了。</p><p><strong><strong>实现过程</strong></strong></p><p>我们已经知道实现数据的双向绑定，首先要对数据进行劫持监听，所以我们需要设置一个监听器Observer，用来监听所有属性。如果属性发上变化了，就需要告诉订阅者Watcher看是否需要更新。因为订阅者是有很多个，所以我们需要有一个消息订阅器Dep来专门收集这些订阅者，然后在监听器Observer和订阅者Watcher之间进行统一管理的。接着，我们还需要有一个指令解析器Compile，对每个节点元素进行扫描和解析，将相关指令对应初始化成一个订阅者Watcher，并替换模板数据或者绑定相应的函数，此时当订阅者Watcher接收到相应属性的变化，就会执行对应的更新函数，从而更新视图。因此接下去我们执行以下3个步骤，实现数据的双向绑定：</p><ul><li>1.实现一个监听器Observer，用来劫持并监听所有属性，如果有变动的，就通知订阅者。</li><li>2.实现一个订阅者Watcher，可以收到属性的变化通知并执行相应的函数，从而更新视图。</li><li>3.实现一个解析器Compile，可以扫描和解析每个节点的相关指令，并根据初始化模板数据以及初始化相应的订阅器。</li></ul><p>流程图如下：</p><p><img src="'+S+`" alt="Untitled"></p><p><strong><strong>1.实现一个Observer</strong></strong></p><p>Observer是一个数据监听器，其实现核心方法就是前文所说的Object.defineProperty( )。如果要对所有属性都进行监听的话，那么可以通过递归方法遍历所有属性值，并对其进行Object.defineProperty( )处理。如下代码，实现了一个Observer。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function defineReactive(data, key, val) {
    observe(val); // 递归遍历所有子属性
    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get: function() {
            return val;
        },
        set: function(newVal) {
            val = newVal;
            console.log(&#39;属性&#39; + key + &#39;已经被监听了，现在值为：“&#39; + newVal.toString() + &#39;”&#39;);
        }
    });
}

function observe(data) {
    if (!data || typeof data !== &#39;object&#39;) {
        return;
    }
    Object.keys(data).forEach(function(key) {
        defineReactive(data, key, data[key]);
    });
};

var library = {
    book1: {
        name: &#39;&#39;
    },
    book2: &#39;&#39;
};
observe(library);
library.book1.name = &#39;vue权威指南&#39;; // 属性name已经被监听了，现在值为：“vue权威指南”
library.book2 = &#39;没有此书籍&#39;;  // 属性book2已经被监听了，现在值为：“没有此书籍”

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>思路分析中，需要创建一个可以容纳订阅者的消息订阅器Dep，订阅器Dep主要负责收集订阅者，然后再属性变化的时候执行对应订阅者的更新函数。所以显然订阅器需要有一个容器，这个容器就是list，将上面的Observer稍微改造下，植入消息订阅器：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function defineReactive(data, key, val) {
    observe(val); // 递归遍历所有子属性
    var dep = new Dep();
    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get: function() {
            if (是否需要添加订阅者) {
                dep.addSub(watcher); // 在这里添加一个订阅者
            }
            return val;
        },
        set: function(newVal) {
            if (val === newVal) {
                return;
            }
            val = newVal;
            console.log(&#39;属性&#39; + key + &#39;已经被监听了，现在值为：“&#39; + newVal.toString() + &#39;”&#39;);
            dep.notify(); // 如果数据变化，通知所有订阅者
        }
    });
}

function Dep () {
    this.subs = [];
}
Dep.prototype = {
    addSub: function(sub) {
        this.subs.push(sub);
    },
    notify: function() {
        this.subs.forEach(function(sub) {
            sub.update();
        });
    }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从代码上看，我们将订阅器Dep添加一个订阅者设计在getter里面，这是为了让Watcher初始化进行触发，因此需要判断是否要添加订阅者，至于具体设计方案，下文会详细说明的。在setter函数里面，如果数据变化，就会去通知所有订阅者，订阅者们就会去执行对应的更新的函数。到此为止，一个比较完整Observer已经实现了，接下来我们开始设计Watcher。</p><p><strong><strong>2.实现Watcher</strong></strong></p><p>订阅者Watcher在初始化的时候需要将自己添加进订阅器Dep中，那该如何添加呢？我们已经知道监听器Observer是在get函数执行了添加订阅者Wather的操作的，所以我们只要在订阅者Watcher初始化的时候触发对应的get函数去执行添加订阅者操作即可，那要如何触发get的函数，再简单不过了，只要获取对应的属性值就可以触发了，核心原因就是因为我们使用了Object.defineProperty( )进行数据监听。这里还有一个细节点需要处理，我们只要在订阅者Watcher初始化的时候才需要添加订阅者，所以需要做一个判断操作，因此可以在订阅器上做一下手脚：在Dep.target上缓存下订阅者，添加成功后再将其去掉就可以了。订阅者Watcher的实现如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function Watcher(vm, exp, cb) {
    this.cb = cb;
    this.vm = vm;
    this.exp = exp;
    this.value = this.get();  // 将自己添加到订阅器的操作
}

Watcher.prototype = {
    update: function() {
        this.run();
    },
    run: function() {
        var value = this.vm.data[this.exp];
        var oldVal = this.value;
        if (value !== oldVal) {
            this.value = value;
            this.cb.call(this.vm, value, oldVal);
        }
    },
    get: function() {
        Dep.target = this;  // 缓存自己
        var value = this.vm.data[this.exp]  // 强制执行监听器里的get函数
        Dep.target = null;  // 释放自己
        return value;
    }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时候，我们需要对监听器Observer也做个稍微调整，主要是对应Watcher类原型上的get函数。需要调整地方在于defineReactive函数：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function defineReactive(data, key, val) {
    observe(val); // 递归遍历所有子属性
    var dep = new Dep();
    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get: function() {
            if (Dep.target) {.  // 判断是否需要添加订阅者
                dep.addSub(Dep.target); // 在这里添加一个订阅者
            }
            return val;
        },
        set: function(newVal) {
            if (val === newVal) {
                return;
            }
            val = newVal;
            console.log(&#39;属性&#39; + key + &#39;已经被监听了，现在值为：“&#39; + newVal.toString() + &#39;”&#39;);
            dep.notify(); // 如果数据变化，通知所有订阅者
        }
    });
}
Dep.target = null;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>到此为止，简单版的Watcher设计完毕，这时候我们只要将Observer和Watcher关联起来，就可以实现一个简单的双向绑定数据了。因为这里没有还没有设计解析器Compile，所以对于模板数据我们都进行写死处理，假设模板上又一个节点，且id号为&#39;name&#39;，并且双向绑定的绑定的变量也为&#39;name&#39;，且是通过两个大双括号包起来（这里只是为了演示，暂时没什么用处），模板如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;body&gt;
    &lt;h1 id=&quot;name&quot;&gt;{{name}}&lt;/h1&gt;
&lt;/body&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时候我们需要将Observer和Watcher关联起来：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function SelfVue (data, el, exp) {
    this.data = data;
    observe(data);
    el.innerHTML = this.data[exp];  // 初始化模板数据的值
    new Watcher(this, exp, function (value) {
        el.innerHTML = value;
    });
    return this;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在页面上new以下SelfVue类，就可以实现数据的双向绑定了：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;body&gt;
    &lt;h1 id=&quot;name&quot;&gt;{{name}}&lt;/h1&gt;
&lt;/body&gt;
&lt;script src=&quot;js/observer.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;js/watcher.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;js/index.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot;&gt;
var ele = document.querySelector(&#39;#name&#39;);
var selfVue = new SelfVue({
    name: &#39;hello world&#39;
}, ele, &#39;name&#39;);

window.setTimeout(function () {
    console.log(&#39;name值改变了&#39;);
    selfVue.data.name = &#39;canfoo&#39;;
}, 2000);
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时候打开页面，可以看到页面刚开始显示了是&#39;hello world&#39;，过了2s后就变成&#39;canfoo&#39;了。到这里，总算大功告成一半了，但是还有一个细节问题，我们在赋值的时候是这样的形式 &#39; selfVue.data.name = &#39;canfoo&#39; &#39; 而我们理想的形式是&#39; selfVue.name = &#39;canfoo&#39; &#39;为了实现这样的形式，我们需要在new SelfVue的时候做一个代理处理，让访问selfVue的属性代理为访问selfVue.data的属性，实现原理还是使用Object.defineProperty( )对属性值再包一层：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function SelfVue (data, el, exp) {
    var self = this;
    this.data = data;

    Object.keys(data).forEach(function(key) {
        self.proxyKeys(key);  // 绑定代理属性
    });

    observe(data);
    el.innerHTML = this.data[exp];  // 初始化模板数据的值
    new Watcher(this, exp, function (value) {
        el.innerHTML = value;
    });
    return this;
}

SelfVue.prototype = {
    proxyKeys: function (key) {
        var self = this;
        Object.defineProperty(this, key, {
            enumerable: false,
            configurable: true,
            get: function proxyGetter() {
                return self.data[key];
            },
            set: function proxySetter(newVal) {
                self.data[key] = newVal;
            }
        });
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这下我们就可以直接通过&#39; selfVue.name = &#39;canfoo&#39; &#39;的形式来进行改变模板数据了。</p><p><strong><strong>3.实现Compile</strong></strong></p><p>虽然上面已经实现了一个双向数据绑定的例子，但是整个过程都没有去解析dom节点，而是直接固定某个节点进行替换数据的，所以接下来需要实现一个解析器Compile来做解析和绑定工作。解析器Compile实现步骤：</p><ul><li>1.解析模板指令，并替换模板数据，初始化视图</li><li>2.将模板指令对应的节点绑定对应的更新函数，初始化相应的订阅器</li></ul><p>为了解析模板，首先需要获取到dom元素，然后对含有dom元素上含有指令的节点进行处理，因此这个环节需要对dom操作比较频繁，所有可以先建一个fragment片段，将需要解析的dom节点存入fragment片段里再进行处理：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function nodeToFragment (el) {
    var fragment = document.createDocumentFragment();
    var child = el.firstChild;
    while (child) {
        // 将Dom元素移入fragment中
        fragment.appendChild(child);
        child = el.firstChild
    }
    return fragment;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,55),M=i(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function compileElement (el) {
    var childNodes = el.childNodes;
    var self = this;
    [].slice.call(childNodes).forEach(function(node) {
        var reg = /\\{\\{(.*)\\}\\}/;
        var text = node.textContent;

        if (self.isTextNode(node) &amp;&amp; reg.test(text)) {  // 判断是否是符合这种形式{{}}的指令
            self.compileText(node, reg.exec(text)[1]);
        }

        if (node.childNodes &amp;&amp; node.childNodes.length) {
            self.compileElement(node);  // 继续递归遍历子节点
        }
    });
},
function compileText (node, exp) {
    var self = this;
    var initText = this.vm[exp];
    updateText(node, initText);  // 将初始化的数据初始化到视图中
    new Watcher(this.vm, exp, function (value) {  // 生成订阅器并绑定更新函数
        self.updateText(node, value);
    });
},
function updateText (node, value) {
    node.textContent = typeof value == &#39;undefined&#39; ? &#39;&#39; : value;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),P=i(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function SelfVue (options) {
    var self = this;
    this.vm = this;
    this.data = options;

    Object.keys(this.data).forEach(function(key) {
        self.proxyKeys(key);
    });

    observe(this.data);
    new Compile(options, this.vm);
    return this;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更改后，我们就不要像之前通过传入固定的元素值进行双向绑定了，可以随便命名各种变量进行双向绑定了：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;body&gt;
    &lt;div id=&quot;app&quot;&gt;
        &lt;h2&gt;{{title}}&lt;/h2&gt;
        &lt;h1&gt;{{name}}&lt;/h1&gt;
    &lt;/div&gt;
&lt;/body&gt;
&lt;script src=&quot;js/observer.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;js/watcher.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;js/compile.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;js/index.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot;&gt;
var selfVue = new SelfVue({
    el: &#39;#app&#39;,
    data: {
        title: &#39;hello world&#39;,
        name: &#39;&#39;
    }
});
window.setTimeout(function () {
    selfVue.title = &#39;你好&#39;;
}, 2000);
window.setTimeout(function () {
    selfVue.name = &#39;canfoo&#39;;
}, 2500);
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如上代码，在页面上可观察到，刚开始titile和name分别被初始化为 &#39;hello world&#39; 和空，2s后title被替换成 &#39;你好&#39; 3s后name被替换成 &#39;canfoo&#39; 了。废话不多说，再给你们来一个这个版本的代码（v2），获取代码！</p><p>到这里，一个数据双向绑定功能已经基本完成了，接下去就是需要完善更多指令的解析编译，在哪里进行更多指令的处理呢？答案很明显，只要在上文说的compileElement函数加上对其他指令节点进行判断，然后遍历其所有属性，看是否有匹配的指令的属性，如果有的话，就对其进行解析编译。这里我们再添加一个v-model指令和事件指令的解析编译，对于这些节点我们使用函数compile进行解析处理：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function compile (node) {
    var nodeAttrs = node.attributes;
    var self = this;
    Array.prototype.forEach.call(nodeAttrs, function(attr) {
        var attrName = attr.name;
        if (self.isDirective(attrName)) {
            var exp = attr.value;
            var dir = attrName.substring(2);
            if (self.isEventDirective(dir)) {  // 事件指令
                self.compileEvent(node, self.vm, exp, dir);
            } else {  // v-model 指令
                self.compileModel(node, self.vm, exp, dir);
            }
            node.removeAttribute(attrName);
        }
    });
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的compile函数是挂载Compile原型上的，它首先遍历所有节点属性，然后再判断属性是否是指令属性，如果是的话再区分是哪种指令，再进行相应的处理，处理方法相对来说比较简单，这里就不再列出来，想要马上看阅读代码的同学可以马上点击这里获取。</p><p>最后我们在稍微改造下类SelfVue，使它更像vue的用法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function SelfVue (options) {
    var self = this;
    this.data = options.data;
    this.methods = options.methods;

    Object.keys(this.data).forEach(function(key) {
        self.proxyKeys(key);
    });

    observe(this.data);
    new Compile(options.el, this);
    options.mounted.call(this); // 所有事情处理好后执行mounted函数
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时候我们可以来真正测试了，在页面上设置如下东西：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;body&gt;
    &lt;div id=&quot;app&quot;&gt;
        &lt;h2&gt;{{title}}&lt;/h2&gt;
        &lt;input v-model=&quot;name&quot;&gt;
        &lt;h1&gt;{{name}}&lt;/h1&gt;
        &lt;button v-on:click=&quot;clickMe&quot;&gt;click me!&lt;/button&gt;
    &lt;/div&gt;
&lt;/body&gt;
&lt;script src=&quot;js/observer.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;js/watcher.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;js/compile.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;js/index.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot;&gt;
new SelfVue({
    el: &#39;#app&#39;,
    data: {
        title: &#39;hello world&#39;,
        name: &#39;canfoo&#39;
    },
    methods: {
        clickMe: function () {
            this.title = &#39;hello world&#39;;
        }
    },
    mounted: function () {
        window.setTimeout(() =&gt; {
            this.title = &#39;你好&#39;;
        }, 1000);
    }
});
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),U={href:"https://github.com/canfoo/self-vue/tree/master/v3",target:"_blank",rel:"noopener noreferrer"},W=i('<p><img src="'+E+'" alt="property.gif"></p><h1 id="三、vue2和vue3双向数据绑定原理的区别" tabindex="-1"><a class="header-anchor" href="#三、vue2和vue3双向数据绑定原理的区别" aria-hidden="true">#</a> <strong>三、Vue2和Vue3双向数据绑定原理的区别</strong></h1><p><strong><strong>Vue2基于Object.defineProperty</strong></strong></p><p>Vue.js 是采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty()来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。主要分为以下几个步骤：</p><ul><li>需要observe的数据对象进行递归遍历，包括子属性对象的属性，都加上setter和getter这样的话，给这个对象的某个值赋值，就会触发setter，那么就能监听到了数据变化</li><li>compile解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图</li><li>Watcher订阅者是Observer和Compile之间通信的桥梁，主要做的事情是: ①在自身实例化时往属性订阅器(dep)里面添加自己 ②自身必须有一个update()方法 ③待属性变动dep.notice()通知时，能调用自身的update()方法，并触发Compile中绑定的回调，则功成身退。</li><li>MVVM作为数据绑定的入口，整合Observer、Compile和Watcher三者，通过Observer来监听自己的model数据变化，通过Compile来解析编译模板指令，最终利用Watcher搭起Observer和Compile之间的通信桥梁，达到数据变化 -&gt; 视图更新；视图交互变化(input) -&gt; 数据model变更的双向绑定效果。</li></ul><p>在对一些属性进行操作时，使用这种方法无法拦截，比如通过下标方式修改数组数据或者给对象新增属性，这都不能触发组件的重新渲染，因为 Object.defineProperty 不能拦截到这些操作。更精确的来说，对于数组而言，大部分操作都是拦截不到的，只是 Vue 内部通过重写函数的方式解决了这个问题。</p><p><strong><strong>Vue3基于Proxy和Reflect</strong></strong></p><p>在 Vue2 中， 0bject.defineProperty 会改变原始数据，而 Proxy 是创建对象的虚拟表示，并提供 set 、get 和 deleteProperty 等处理器，这些处理器可在访问或修改原始对象上的属性时进行拦截，有以下特点∶</p><ul><li>不需用使用 Vue.$set 或 Vue.$delete 触发响应式。</li><li>全方位的数组变化检测，消除了Vue2 无效的边界情况。</li><li>支持 Map，Set，WeakMap 和 WeakSet。</li></ul><p>Proxy 实现的响应式原理与 Vue2的实现原理相同，实现方式大同小异∶</p><ul><li>get 收集依赖</li><li>Set、delete 等触发依赖</li></ul><p>对于集合类型，就是对集合对象的方法做一层包装：原方法执行后执行依赖相关的收集或触发逻辑。</p><p>在 Vue3.0 中已经不使用这种方式了，而是通过使用 Proxy 对对象进行代理，从而实现数据劫持。使用Proxy 的好处是它可以完美的监听到任何方式的数据改变，唯一的缺点是兼容性的问题，因为 Proxy 是 ES6 的语法。</p><p><strong><strong>defineProperty和proxy的区别</strong></strong></p><p>Vue 在实例初始化时遍历 data 中的所有属性，并使用 Object.defineProperty 把这些属性全部转为 getter/setter。这样当追踪数据发生变化时，setter 会被自动调用。</p><p>Object.defineProperty 是 ES5 中一个无法 shim 的特性，这也就是 Vue 不支持 IE8 以及更低版本浏览器的原因。</p><p><strong>但是这样做有以下问题：</strong></p><ul><li>添加或删除对象的属性时，Vue 检测不到。因为添加或删除的对象没有在初始化进行响应式处理，只能通过$set 来调用Object.defineProperty()处理。</li><li>无法监控到数组下标和长度的变化。</li></ul><p>Vue3 使用 Proxy 来监控数据的变化。Proxy 是 ES6 中提供的功能，其作用为：用于定义基本操作的自定义行为（如属性查找，赋值，枚举，函数调用等）。相对于Object.defineProperty()，其有以下特点：</p><ul><li>Proxy 直接代理整个对象而非对象属性，这样只需做一层代理就可以监听同级结构下的所有属性变化，包括新增属性和删除属性。</li><li>Proxy 可以监听数组的变化。</li></ul>',20),T={href:"https://blog.csdn.net/qq_34179086/article/details/88086427",target:"_blank",rel:"noopener noreferrer"},B={href:"https://www.cnblogs.com/canfoo/p/6891868.html",target:"_blank",rel:"noopener noreferrer"};function N(t,K){const d=r("ExternalLinkIcon");return v(),u("div",null,[_,D,e("p",null,[e("a",I,[n("深入剖析Vue源码"),l(d)])]),k,e("ul",null,[j,e("li",null,[e("ol",C,[e("li",null,"实现简单版vue的过程，主要实现"+s()+"、v-model和事件指令的功能。",1)])])]),q,e("p",null,"接下来需要遍历各个节点，对含有相关指定的节点进行特殊处理，这里咱们先处理最简单的情况，只对带有 '"+s(t.变量)+"' 这种形式的指令进行处理，先简道难嘛，后面再考虑更多指令情况：",1),M,e("p",null,"获取到最外层节点后，调用compileElement函数，对所有子节点进行判断，如果节点是文本节点且匹配"+s()+"这种形式指令的节点就开始进行编译处理，编译处理首先需要初始化视图数据，对应上面所说的步骤1，接下去需要生成一个并绑定更新函数的订阅器，对应上面所说的步骤2。这样就完成指令的解析、初始化、编译三个过程，一个解析器Compile也就可以正常的工作了。为了将解析器Compile与监听器Observer和订阅者Watcher关联起来，我们需要再修改一下类SelfVue函数：",1),P,e("p",null,[n("是不是看起来跟vue的使用方法一样，哈，真正的大功告成！想要代码，直接"),e("a",U,[n("点击这里获取"),l(d)]),n("！现象还没描述？直接上图！！！请观赏")]),W,e("p",null,[n("本文参考："),e("a",T,[n("Vue中的Diff算法"),l(d)]),e("a",B,[n("vue的双向绑定原理及实现"),l(d)])])])}const A=a(O,[["render",N],["__file","源码探索.html.vue"]]);export{A as default};
