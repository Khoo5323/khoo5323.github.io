import{_ as e,o as i,c as n,e as l}from"./app.629164ab.js";const t="/assets/Untitled.754864a7.png",s="/assets/Untitled1.d7a075e1.png",a="/assets/Untitled2.8767c51e.png",r="/assets/Untitled3.75551f84.png",d="/assets/Untitled4.3d101351.png",o="/assets/Untitled5.f3ed54fe.png",c={},u=l(`<h1 id="flex" tabindex="-1"><a class="header-anchor" href="#flex" aria-hidden="true">#</a> Flex</h1><h1 id="flex布局教程" tabindex="-1"><a class="header-anchor" href="#flex布局教程" aria-hidden="true">#</a> <strong>Flex布局教程</strong></h1><h1 id="flex-1" tabindex="-1"><a class="header-anchor" href="#flex-1" aria-hidden="true">#</a> <strong>Flex</strong></h1><h1 id="一、诞生背景" tabindex="-1"><a class="header-anchor" href="#一、诞生背景" aria-hidden="true">#</a> <strong>一、诞生背景</strong></h1><p>布局的传统解决方案，基于盒状模型，依赖 display 属性 + position属性 + float属性。它对于那些特殊布局非常不方便，比如，垂直居中就不容易实现。</p><p>2009年，W3C 提出了一种新的方案----Flex 布局，可以简便、完整、响应式地实现各种页面布局。目前，它已经得到了所有浏览器的支持，这意味着，现在就能很安全地使用这项功能。</p><h1 id="二、flex介绍" tabindex="-1"><a class="header-anchor" href="#二、flex介绍" aria-hidden="true">#</a> <strong>二、Flex介绍</strong></h1><blockquote><p>Flex 是 Flexible Box 的缩写，意为&quot;弹性布局&quot;，用来为盒状模型提供最大的灵活性。</p></blockquote><p>任何一个容器都可以指定为 Flex 布局。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.box{
    display: flex;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="三、基本概念" tabindex="-1"><a class="header-anchor" href="#三、基本概念" aria-hidden="true">#</a> <strong>三、基本概念</strong></h1><blockquote><p>采用 Flex 布局的元素，称为 Flex 容器（flex container），简称&quot;容器&quot;。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称&quot;项目&quot;。</p></blockquote><p>容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；交叉轴的开始位置叫做cross start，结束位置叫做cross end。</p><p>项目默认沿主轴排列。单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。</p><h1 id="四、容器的属性" tabindex="-1"><a class="header-anchor" href="#四、容器的属性" aria-hidden="true">#</a> <strong>四、容器的属性</strong></h1><p>以下6个属性设置在容器上。</p><ul><li>flex-direction 主轴方向</li><li>flex-wrap 是否换行</li><li>flex-flow flex-direction属性和flex-wrap属性的简写</li><li>justify-content 主轴上的对齐方式</li><li>align-items 交叉轴上如何对齐</li><li>align-content 多根轴线的对齐方式</li></ul><p><strong><strong>flex-direction属性</strong></strong></p><p>flex-direction属性决定主轴的方向（即项目的排列方向）。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.box {
    flex-direction: row | row-reverse | column | column-reverse;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>它可能有4个值。</p><ul><li>row（默认值）：主轴为水平方向，起点在左端。</li><li>row-reverse：主轴为水平方向，起点在右端。</li><li>column：主轴为垂直方向，起点在上沿。</li><li>column-reverse：主轴为垂直方向，起点在下沿。</li></ul><p><img src="`+t+'" alt="Untitled"></p><p><img src="'+s+`" alt="Untitled"></p><p><strong><strong>flex-wrap属性</strong></strong></p><blockquote><p>默认情况下，项目都排在一条线（又称&quot;轴线&quot;）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.box{
    flex-wrap: nowrap | wrap | wrap-reverse;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>它可能取三个值。</p><p>（1）nowrap（默认）：不换行。</p><p><img src="`+a+'" alt="Untitled"></p><p>（2）wrap：换行，第一行在上方。</p><p><img src="'+r+'" alt="Untitled"></p><p>（3）wrap-reverse：换行，第一行在下方。</p><p><img src="'+d+`" alt="Untitled"></p><p><strong><strong>flex-flow属性</strong></strong></p><blockquote><p>flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.box {
    flex-flow: &lt;flex-direction&gt; || &lt;flex-wrap&gt;;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>justify-content属性</strong></strong></p><blockquote><p>justify-content属性定义了项目在主轴上的对齐方式。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.box {
    justify-content: flex-start | flex-end | center | space-between | space-around;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>它可能取5个值，具体对齐方式与轴的方向有关。下面假设主轴为从左到右。</p><ul><li>flex-start（默认值）：左对齐</li><li>flex-end：右对齐</li><li>center： 居中</li><li>space-between：两端对齐，项目之间的间隔都相等。</li><li>space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。</li></ul><p><strong><strong>align-items属性</strong></strong></p><blockquote><p>align-items属性定义项目在交叉轴上如何对齐。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.box {
    align-items: flex-start | flex-end | center | baseline | stretch;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>它可能取5个值。具体的对齐方式与交叉轴的方向有关，下面假设交叉轴从上到下。</p><ul><li>flex-start：交叉轴的起点对齐。</li><li>flex-end：交叉轴的终点对齐。</li><li>center：交叉轴的中点对齐。</li><li>baseline: 项目的第一行文字的基线对齐。</li><li>stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。</li></ul><p><strong><strong>align-content属性</strong></strong></p><blockquote><p>align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.box {
    align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该属性可能取6个值。</p><ul><li>flex-start：与交叉轴的起点对齐。</li><li>flex-end：与交叉轴的终点对齐。</li><li>center：与交叉轴的中点对齐。</li><li>space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。</li><li>space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。</li><li>stretch（默认值）：轴线占满整个交叉轴。</li></ul><h1 id="项目的属性" tabindex="-1"><a class="header-anchor" href="#项目的属性" aria-hidden="true">#</a> <strong>项目的属性</strong></h1><blockquote><p>以下6个属性设置在项目上。</p></blockquote><ul><li>order</li><li>flex-grow</li><li>flex-shrink</li><li>flex-basis</li><li>flex</li><li>align-self</li></ul><p><strong><strong>order属性</strong></strong></p><blockquote><p>order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.item {
    order: &lt;integer&gt;;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>flex-grow属性</strong></strong></p><blockquote><p>flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.item {
    flex-grow: &lt;number&gt;; /* default 0 */
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。</p><p><strong><strong>flex-shrink属性</strong></strong></p><blockquote><p>flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.item {
    flex-shrink: &lt;number&gt;; /* default 1 */
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。</p><p>负值对该属性无效。</p><p><strong><strong>flex-basis属性</strong></strong></p><blockquote><p>flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.item {
    flex-basis: &lt;length&gt; | auto; /* default auto */
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。</p><p><strong><strong>flex属性</strong></strong></p><blockquote><p>flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.item {
    flex: none | [ &lt;&#39;flex-grow&#39;&gt; &lt;&#39;flex-shrink&#39;&gt;? || &lt;&#39;flex-basis&#39;&gt; ]
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该属性有两个快捷值：<strong>auto (1 1 auto)</strong> 和 <strong>none (0 0 auto)</strong>。</p><p>建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。</p><p><strong><strong>align-self属性</strong></strong></p><blockquote><p>align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.item {
    align-self: auto | flex-start | flex-end | center | baseline | stretch;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该属性可能取6个值，除了auto，其他都与align-items属性完全一致。</p><p><img src="`+o+'" alt="Untitled"></p>',81),p=[u];function g(v,x){return i(),n("div",null,p)}const m=e(c,[["render",g],["__file","Flex.html.vue"]]);export{m as default};
