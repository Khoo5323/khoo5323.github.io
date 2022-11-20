import{_ as e,o as n,c as i,e as s}from"./app.37a6fc76.js";const l={},d=s(`<h1 id="element-ui" tabindex="-1"><a class="header-anchor" href="#element-ui" aria-hidden="true">#</a> Element-UI</h1><h1 id="element-ui-1" tabindex="-1"><a class="header-anchor" href="#element-ui-1" aria-hidden="true">#</a> <strong>Element-UI</strong></h1><h1 id="一、使用教程" tabindex="-1"><a class="header-anchor" href="#一、使用教程" aria-hidden="true">#</a> <strong>一、使用教程</strong></h1><p><strong><strong>Element-UI的基本使用</strong></strong></p><p>Element-UI：一套为开发者、设计师和产品经理准备的基于Vue 2.0的桌面端组件库</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>官网地址：https://element.eleme.cn/#/zh-CN
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><strong>安装</strong></strong></p><p>基于命令行方式手动安装</p><p>1、安装依赖包 npm i element-ui -S</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm i element-ui -S
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、导入 Element-UI 相关资源</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 导入组件库
import ElementUI from &#39;element-ui&#39;;
// 导入组件相关样式
import &#39;element-ui/lib/theme-chalk/index.css&#39;;
// 配置Vue插件
Vue.use(ElementUI);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>基于图形化界面自动安装</strong></p><ul><li>1、运行 vue ui 命令，打开图形化页面</li><li>2、通过 Vue 项目管理器，进入具体的项目配置面板</li><li>3、点击 插件 -&gt; 添加插件，进入插件查询面板</li><li>4、搜索 vue-cli-plugin-element 并安装</li><li>5、配置插件，实现按需导入，从而减少打包后项目的体积</li></ul><p><strong><strong>按需导入</strong></strong></p><p>在实际项目开发中，根据实际情况按需导入使用到的模块，减少打包后项目的体积。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import Vue from &#39;vue&#39;
import {
  Button,
  Form,
  FormItem,
  Input
} from &#39;element-ui&#39;

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)

Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="二、常见问题" tabindex="-1"><a class="header-anchor" href="#二、常见问题" aria-hidden="true">#</a> <strong>二、常见问题</strong></h1><p><strong><strong>element的级联选择器Cascader超出屏幕现象</strong></strong></p><p>原因：版本不一致造成的。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 在全局的global.css样式中给el-cascader-panel添加高度
.el-cascader-panel{
    height: 200px;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>默认样式修改不成功</strong></strong></p><p>使用less的深度选择器修改</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.[parent-class] {
  /deep/ .el-input__inner {
    // 样式覆盖
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>表格多选按钮是否禁用</strong></strong></p><p>添加 :selectable=&quot;selectable&quot;</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;el-table-column
  type=&quot;selection&quot;
  header-align=&quot;center&quot;
  align=&quot;center&quot;
  :selectable=&quot;selectable&quot;
  width=&quot;50&quot;&gt;
&lt;/el-table-column&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>methods中设置判断规则</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/* 弹框多选判断是否显示多选 */
selectable (row,index) {
  /* 根据已退金额来判断是否可以退款多选 */
  if(row.refund_Amount==0) {
    return true
  } else {
    return false
  }
},

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>表单横向排列</strong></strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;el-form :inline=&quot;true&quot;&gt;&lt;/el-form&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,31),t=[d];function a(r,u){return n(),i("div",null,t)}const c=e(l,[["render",a],["__file","Element-UI.html.vue"]]);export{c as default};
