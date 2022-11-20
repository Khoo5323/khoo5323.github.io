import{_ as p,r as i,o as d,c as m,a as e,b as n,d as s,t as l,e as o}from"./app.93fa9761.js";const u={},_=e("h1",{id:"微信小程序",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#微信小程序","aria-hidden":"true"},"#"),n(" 微信小程序")],-1),g=e("h1",{id:"一、微信小程序",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#一、微信小程序","aria-hidden":"true"},"#"),n(),e("strong",null,"一、微信小程序")],-1),b=e("p",null,[e("strong",null,[e("strong",null,"微信小程序介绍")])],-1),F=e("p",null,"微信小程序是一种全新的连接用户与服务的方式，它可以在微信内被便捷地获取和传播，同时具有出色的使用体验",-1),h={href:"https://developers.weixin.qq.com/miniprogram/dev/framework/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://mp.weixin.qq.com/",target:"_blank",rel:"noopener noreferrer"},x=o(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>微信公众平台：https://mp.weixin.qq.com/
微信小程序开发文档：https://developers.weixin.qq.com/miniprogram/dev/framework/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>微信小程序开发者工具</strong></strong></p><p><strong>使用技巧</strong></p><p><strong>1、配置开发者工具字体大小</strong></p><p>路径：设置 -&gt; 外观设置 -&gt; 字号</p><p><strong>2、修改文件时自动保存</strong></p><p>路径：设置 -&gt; 外观设置 -&gt; 编辑 -&gt; 文件保存</p><p><strong>3、页面布局</strong></p><p>左侧模拟器，右侧编辑器，右下方调试工具，使用的VS Code内核。</p><p><strong>4、快捷新建页面</strong></p><p>在app.josn中设置pages保存后，开发者工具会自动创建对应的文件夹和页面文件。</p><p><strong>5、不校验合法域名</strong></p><p>如果您使用的域名未进行SSL认证或者网址前缀不是https://,可以通过微信开发者工具右上角[详情] -&gt; [项目设置]最下方勾选上 [不校验合法域名、web-view（业务域名）、TLS 版本以及 HTTPS 证书] 这个按钮</p><p>同时你也可以通过这个路径查看当前小程序的App ID和本地目录，可以直接通过此处修改项目的App ID</p><h1 id="_1-小程序介绍" tabindex="-1"><a class="header-anchor" href="#_1-小程序介绍" aria-hidden="true">#</a> <strong>1 小程序介绍</strong></h1><p><strong>1.1 小程序的应用</strong></p><p><img src="https://img-blog.csdnimg.cn/20201029211612254.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center" alt="https://img-blog.csdnimg.cn/20201029211612254.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center"></p><ul><li>支付宝</li><li>头条</li><li>qq</li><li>百度</li><li>字节跳动</li><li>微信</li></ul><p><strong>1.2 小程序的介绍</strong></p><ul><li>运行在某个APP里面，比如微信：没有跨平台限制</li><li>微信小程序 <ul><li>Wechat Mini Program 是一种不需要下载安装即可使用的应用，它实现了应用“触手可及”的梦想，用户扫一扫或搜一搜即可使用</li></ul></li></ul><p><strong>1.3 市场分类</strong></p><p><img src="https://img-blog.csdnimg.cn/20201029212516334.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center" alt="https://img-blog.csdnimg.cn/20201029212516334.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center"></p><p><strong>1.3.1 小程序</strong></p><ul><li>运行在某个APP里面，比如微信</li></ul><p><strong>1.3.2 webapp</strong></p><ul><li>运行在浏览器上，没有跨平台限制</li></ul><p><strong>1.3.3 混合app</strong></p><ul><li>运行在终端上，有跨平台限制，内部运行的是webapp</li></ul><p><strong>1.3.4 原生app</strong></p><ul><li>运行在终端上，有跨平台限制，内部运行的是机器码01</li></ul><p>1 ios</p><ul><li>object-c</li><li>js</li></ul><p>2 android</p><p>3 react-native</p><ul><li>一套代码开发两套的应用</li><li>taro</li></ul><h1 id="_2-开发" tabindex="-1"><a class="header-anchor" href="#_2-开发" aria-hidden="true">#</a> <strong>2 开发</strong></h1><p><strong>2.1 准备</strong></p><p><strong>1 官网注册登录</strong></p>`,38),G={href:"https://mp.weixin.qq.com/",target:"_blank",rel:"noopener noreferrer"},Z=e("li",null,[e("p",null,"个人开发 记住AppID"),e("p",null,[e("img",{src:"https://img-blog.csdnimg.cn/20201029125732616.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center",alt:"https://img-blog.csdnimg.cn/20201029125732616.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70pic_center"})])],-1),w=o('<p><strong>2 工具下载</strong></p><ul><li><p>在个人主页中点击<code>文档</code></p></li><li><p>进入新页面后点击<code>工具</code>，点击<code>微信开发者工具</code></p></li><li><p>选择与自己电脑合适的版本进行下载</p><p><img src="https://img-blog.csdnimg.cn/20201029130028592.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center" alt="https://img-blog.csdnimg.cn/20201029130028592.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center"></p></li><li><p>进入新的页面</p><p><img src="https://img-blog.csdnimg.cn/20201029130123683.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center" alt="https://img-blog.csdnimg.cn/20201029130123683.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center"></p></li><li><p>进行下载</p><p><img src="https://img-blog.csdnimg.cn/202010291304163.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center" alt="https://img-blog.csdnimg.cn/202010291304163.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center"></p></li></ul><p><strong>2.2 入门小程序</strong></p><p><strong>1 创建</strong></p><p><img src="https://img-blog.csdnimg.cn/20201029130752792.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center" alt="https://img-blog.csdnimg.cn/20201029130752792.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center"></p><p><strong>2 创建成功</strong></p><p><img src="https://img-blog.csdnimg.cn/20201029131136221.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center" alt="https://img-blog.csdnimg.cn/20201029131136221.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center"></p><h1 id="_3-开发" tabindex="-1"><a class="header-anchor" href="#_3-开发" aria-hidden="true">#</a> <strong>3 开发</strong></h1><p><img src="https://img-blog.csdnimg.cn/20201029214044382.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center" alt="https://img-blog.csdnimg.cn/20201029214044382.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center"></p><p>项目结构</p><p><img src="https://img-blog.csdnimg.cn/20201029132003881.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center" alt="https://img-blog.csdnimg.cn/20201029132003881.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center"></p><p>与vue对比</p>',12),y=e("thead",null,[e("tr",null,[e("th",null,"序号"),e("th",null,"差异"),e("th",null,"vue框架"),e("th",null,"微信小程序")])],-1),L=e("tr",null,[e("td",null,"1"),e("td",null,"样式"),e("td",null,"style标签"),e("td",null,".wxss文件")],-1),k=e("tr",null,[e("td",null,"2"),e("td",null,"行为"),e("td",null,"script标签"),e("td",null,".js文件")],-1),N=e("tr",null,[e("td"),e("td"),e("td"),e("td",null,"< wxs >标签")],-1),V=e("tr",null,[e("td",null,"3"),e("td",null,"结构"),e("td",null,"template标签"),e("td",null,".wxml文件")],-1),z=e("tr",null,[e("td",null,"4"),e("td",null,"盒子"),e("td",null,"div"),e("td",null,"view")],-1),H=e("tr",null,[e("td",null,"5"),e("td",null,"文本"),e("td",null,"span"),e("td",null,"text")],-1),q=e("td",null,"6",-1),R=e("td",null,"属性绑定",-1),M=["title"],X=e("td",null,[e("text",{title:"{{msg}}"})],-1),f=e("tr",null,[e("td",null,"7"),e("td",null,"流程分支"),e("td",null,"v-for"),e("td",null,"wx:for")],-1),W=e("td",null,"8",-1),T=e("td",null,"判断",-1),E=e("td",null,"v-if()=''/v-else",-1),P=e("td",null,"9",-1),j=e("td",null,"显示隐藏",-1),S=e("td",null,"v-show=''",-1),I=e("tr",null,[e("td",null,"10"),e("td",null,"生命周期"),e("td",null,"8种"),e("td",null,"应用3种+页面5种+组件6种")],-1),D=e("td",null,"11",-1),A=e("td",null,"编程式路由",-1),C=e("td",null,"v-show=''",-1),U=e("td",null,"12",-1),B=e("td",null,"组件式路由",-1),O=e("td",null,"13",-1),$=e("td",null,"路由参数",-1),J=e("tr",null,[e("td",null,"14"),e("td",null,"网络请求"),e("td",null,"axios"),e("td",null,"wx.request()")],-1),K=e("tr",null,[e("td",null,"15"),e("td",null,"绑定事件"),e("td",null,"@click"),e("td",null,"bindtop=''")],-1),Q=e("tr",null,[e("td",null,"16"),e("td",null,"双向绑定"),e("td",null,"v-model=''"),e("td",null,"bindinput=''")],-1),Y=e("tr",null,[e("td",null,"17"),e("td",null,"获取data数据"),e("td",null,"this.msg"),e("td",null,"this.data.msg")],-1),ee=e("tr",null,[e("td",null,"18"),e("td",null,"设置data数据"),e("td",null,"this.msg=''"),e("td",null,"this.setdata({msg:''})")],-1),ne=e("tr",null,[e("td",null,"19"),e("td",null,"创建方法"),e("td",null,"methods:{test(){}}"),e("td",null,"与data同级直接创建")],-1),se=o(`<h1 id="_4-基本创建结构" tabindex="-1"><a class="header-anchor" href="#_4-基本创建结构" aria-hidden="true">#</a> <strong>4 基本创建结构</strong></h1><p><strong>创建</strong></p><ul><li><p>app.js中新增一个页面(全局配置) ,会自动创建</p></li><li><p>默认打开第一个位置的页面</p><p><img src="https://img-blog.csdnimg.cn/2020102917402576.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center" alt="https://img-blog.csdnimg.cn/2020102917402576.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center"></p></li><li><p>页面的结构</p><p><img src="https://img-blog.csdnimg.cn/20201029174538489.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center" alt="https://img-blog.csdnimg.cn/20201029174538489.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center"></p></li></ul><h1 id="_5-基本使用" tabindex="-1"><a class="header-anchor" href="#_5-基本使用" aria-hidden="true">#</a> <strong>5 基本使用</strong></h1><ul><li>插值表达式(小胡子语法)的使用</li><li>属性绑定</li><li>事件使用</li><li>流程语句</li><li>循环语句</li><li>显示隐藏语句</li><li>属性的设置和获取</li><li>路由的使用</li><li>tabbar的使用</li><li>请求的使用和封装</li><li>生命周期的使用</li></ul><p><strong>1 插值表达式</strong></p><p><img src="https://img-blog.csdnimg.cn/20201029174838918.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center" alt="https://img-blog.csdnimg.cn/20201029174838918.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center"></p><p><strong>2 属性绑定</strong></p><p><img src="https://img-blog.csdnimg.cn/20201029175152868.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center" alt="https://img-blog.csdnimg.cn/20201029175152868.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center"></p><p><strong>3 事件使用</strong></p><ul><li>与vue中事件基本相同,没有参数时默认是event</li></ul><p><strong>点击事件</strong></p><p><img src="https://img-blog.csdnimg.cn/20201029191104183.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center" alt="https://img-blog.csdnimg.cn/20201029191104183.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center"></p><p><strong>输入框事件</strong></p><ul><li><p>输入框默认边框为白色,需要自己设置home.wxss</p><p><img src="https://img-blog.csdnimg.cn/20201029191504281.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center" alt="https://img-blog.csdnimg.cn/20201029191504281.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center"></p></li></ul><p><strong>4 流程语句</strong></p><ul><li><p>wx:if</p></li><li><p>wx:else</p><p><img src="https://img-blog.csdnimg.cn/20201029192255598.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center" alt="https://img-blog.csdnimg.cn/20201029192255598.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center"></p></li></ul><p><strong>5 显示和隐藏</strong></p><p><img src="https://img-blog.csdnimg.cn/20201029192536274.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center" alt="https://img-blog.csdnimg.cn/20201029192536274.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center"></p><p><strong>6 循环语句</strong></p><ul><li><p>wx:for</p></li><li><p>wx:for-index</p></li><li><p>wx:for-item</p></li><li><p>wx:key</p><p><img src="https://img-blog.csdnimg.cn/20201029193227334.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center" alt="https://img-blog.csdnimg.cn/20201029193227334.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center"></p></li></ul><p><strong>7 属性设置和获取</strong></p><ul><li><p>设置:this.setData()</p></li><li><p>获取属性:this.data.flag</p><p><img src="https://img-blog.csdnimg.cn/20201029193450561.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center" alt="https://img-blog.csdnimg.cn/20201029193450561.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center"></p></li></ul><p><strong>8 tabbar使用</strong></p><ul><li><p>可参考官网的API文档设置tabber</p><p><img src="https://img-blog.csdnimg.cn/20201029194704863.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center" alt="https://img-blog.csdnimg.cn/20201029194704863.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center"></p></li><li><p>代码</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  &quot;tabBar&quot;: {
    &quot;color&quot;: &quot;#dddddd&quot;,
    &quot;selectedColor&quot;: &quot;#16f2e7&quot;,
    &quot;backgroundColor&quot;: &quot;#fff&quot;,
    &quot;borderStyle&quot;: &quot;black&quot;,
    &quot;list&quot;: [
      {
        &quot;pagePath&quot;: &quot;pages/home/home&quot;,
        &quot;text&quot;: &quot;主页&quot;,
        &quot;iconPath&quot;: &quot;tabs/home.png&quot;,
        &quot;selectedIconPath&quot;: &quot;tabs/home-active.png&quot;
      },
      {
        &quot;pagePath&quot;: &quot;pages/index/index&quot;,
        &quot;text&quot;: &quot;消息&quot;,
        &quot;iconPath&quot;: &quot;tabs/message.png&quot;,
        &quot;selectedIconPath&quot;: &quot;tabs/message-active.png&quot;
      }
    ]
  },

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>9 路由的使用</strong></p><h1 id="组件式路由" tabindex="-1"><a class="header-anchor" href="#组件式路由" aria-hidden="true">#</a> <strong>组件式路由</strong></h1><ul><li>使用navigater</li></ul><p>1 可返回</p><p><img src="https://img-blog.csdnimg.cn/20201029194041816.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center" alt="https://img-blog.csdnimg.cn/20201029194041816.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center"></p><p><img src="https://img-blog.csdnimg.cn/20201029195315820.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center" alt="https://img-blog.csdnimg.cn/20201029195315820.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center"></p><p>2 不能返回</p><p><img src="https://img-blog.csdnimg.cn/20201029195349416.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center" alt="https://img-blog.csdnimg.cn/20201029195349416.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center"></p><p>3 路由传参</p><p><img src="https://img-blog.csdnimg.cn/20201029195901718.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center" alt="https://img-blog.csdnimg.cn/20201029195901718.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center"></p><p><strong>编程式路由</strong></p><ul><li><p>只能跳转非tabbar 有返回 <code>wx.navigateTo({url: &#39;/pages/test/test&#39;})</code></p></li><li><p>只能跳转非tabbar 无返回<code>wx.redirectTo({url: &#39;/pages/test/test&#39;})</code></p></li><li><p>能跳转所有页面 无返回 关闭当前页面<code>wx.switchTab({url: &#39;/pages/index/index&#39;})</code></p></li><li><p>能跳转所有页面 无返回 关闭所有页面<code>wx.reLaunch({url: &#39;/pages/index/index&#39;})</code></p><p><img src="https://img-blog.csdnimg.cn/20201029200922294.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center" alt="https://img-blog.csdnimg.cn/20201029200922294.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center"></p></li><li><p>传参</p><p><img src="https://img-blog.csdnimg.cn/20201029201601494.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center" alt="https://img-blog.csdnimg.cn/20201029201601494.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center"></p></li></ul><p><strong>10 请求的使用</strong></p><ul><li><code>wx:request</code></li><li>无跨域问题</li></ul><p><strong>请求成功时</strong></p><p><img src="https://img-blog.csdnimg.cn/20201029202413464.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center" alt="https://img-blog.csdnimg.cn/20201029202413464.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center"></p><p><strong>请求失败时</strong></p><p><img src="https://img-blog.csdnimg.cn/20201029202228378.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center" alt="https://img-blog.csdnimg.cn/20201029202228378.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center"></p><p><strong>11 请求的三种封装</strong></p><ul><li>封装属于工具类,存放到utils文件夹下</li></ul><p><strong>1 简单式封装</strong></p><ul><li>base.js</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const baseUrl=&#39;http://jsonplaceholder.typicode.com/&#39;
module.exports=(url,data,method)=&gt;{
   return new Promise((resolve,reject)=&gt;{
     wx.showLoading({
       title: &#39;loading&#39;,
       mask: true,
       success: (res) =&gt; {},
       fail: (res) =&gt; {},
       complete: (res) =&gt; {
         wx.hideLoading()
       },
     })
     wx.request({
       url: baseUrl+url,
       data: data,
       method,
       success:resolve,
       fail:reject,
       complete: (res) =&gt; {},
     })
   })
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img-blog.csdnimg.cn/20201029203136198.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center" alt="https://img-blog.csdnimg.cn/20201029203136198.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center"><strong>2 完全式封装</strong></p><ul><li>有加载的效果</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
  const app = getApp()
  const request = (url, options) =&gt; {
     // 请求之前提示加载中
    wx.showLoading({title: &#39;加载中...&#39;})
    return new Promise((resolve, reject) =&gt; {
      wx.request({
        url: \`\${app.globalData.baseURL}\${url}\`,
        // url: host + url,
        method: options.method,
        data: options.method === &#39;GET&#39; ? options.data : JSON.stringify(options.data),
        header: {
          &#39;Content-Type&#39;: &#39;application/json; charset=UTF-8&#39;,
          &#39;x-token&#39;: &#39;x-token&#39;  // 看自己是否需要
        },
        success: resolve,
        fail: reject,
        // success(request) {
        //   // console.log(request)
        //   if (request.statusCode === 200) {
        //     resolve(request.data)
        //   } else {
        //     reject(request.data)
        //   }
        // },
        // fail(error) {
        //   reject(error.data)
        // }
        complete() {
        	wx.hideLoading()
      	}
      })
    })
  }

  const get = (url, options = {}) =&gt; {
    return request(url, { method: &#39;GET&#39;, data: options })
  }

  const post = (url, options) =&gt; {
    return request(url, { method: &#39;POST&#39;, data: options })
  }

  const put = (url, options) =&gt; {
    return request(url, { method: &#39;PUT&#39;, data: options })
  }

  // 不能声明DELETE（关键字）
  const remove = (url, options) =&gt; {
    return request(url, { method: &#39;DELETE&#39;, data: options })
  }

  module.exports = {
    get,
    post,
    put,
    remove
  }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img-blog.csdnimg.cn/20201029203601128.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center" alt="https://img-blog.csdnimg.cn/20201029203601128.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center"></p><p><strong>3 外部式封装</strong></p><ul><li>第一步:在pages安装flyio<code>npm i flyio -S</code></li><li>第二步:将node_modules/flyio 复制到项目工程目录下</li><li>第三步:严格按照前两步操作否则出现模块找不到错误</li><li>封装文件如下:</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import Fly from &#39;../flyio/dist/npm/wx&#39;
const fly = new Fly()
const host = &#39;http://jsonplaceholder.typicode.com/&#39;
// 添加请求拦截器
fly.interceptors.request.use(
  (request) =&gt; {
    wx.showLoading({
      title: &#39;加载中&#39;,
      mask: true
    })
    console.log(request)
    // request.headers[&quot;X-Tag&quot;] = &quot;flyio&quot;;
    // request.headers[&#39;content-type&#39;]= &#39;application/json&#39;;
    request.headers = {
      &#39;X-Tag&#39;: &#39;flyio&#39;,
      &#39;content-type&#39;: &#39;application/json&#39;
    }
    let authParams = {
    // 公共参数
      &#39;categoryType&#39;: &#39;SaleGoodsType@sim&#39;,
      &#39;streamNo&#39;: &#39;wxapp153570682909641893&#39;,
      &#39;reqSource&#39;: &#39;MALL_H5&#39;,
      &#39;appid&#39;: &#39;string&#39;,
      &#39;timestamp&#39;: new Date().getTime(),
      &#39;sign&#39;: &#39;string&#39;
    }

    request.body &amp;&amp; Object.keys(request.body).forEach((val) =&gt; {
      if (request.body[val] === &#39;&#39;) {
        delete request.body[val]
      };
    })
    request.body = {
      ...request.body,
      ...authParams
    }
    return request
  })

// 添加响应拦截器
fly.interceptors.response.use((response) =&gt; {
  wx.hideLoading()
  return response.data// 请求成功之后将返回值返回
},
(err) =&gt; {
  // 请求出错，根据返回状态码判断出错原因
  console.log(err)
  wx.hideLoading()
  if (err) {
    return &#39;请求失败&#39;
  };
}
)

fly.config.baseURL = host

export default fly

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>常规写法</p><p><img src="https://img-blog.csdnimg.cn/20201029204904798.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center" alt="https://img-blog.csdnimg.cn/20201029204904798.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center"></p><p>ES7写法</p><p><img src="https://img-blog.csdnimg.cn/20201029205334885.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center" alt="https://img-blog.csdnimg.cn/20201029205334885.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center"></p><p><strong>11 wxs使用</strong></p><ul><li>类似&lt; script &gt;标签</li><li>使用较少</li><li>缺点: <ul><li><p>不易操作</p></li><li><p>不能在里面写注释</p></li><li><p>语法过于严谨</p><p><img src="https://img-blog.csdnimg.cn/20201029205702834.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center" alt="https://img-blog.csdnimg.cn/20201029205702834.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center"></p></li></ul></li></ul><p><strong>12 组件的抽离</strong></p><p><img src="https://img-blog.csdnimg.cn/20201029210459858.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center" alt="https://img-blog.csdnimg.cn/20201029210459858.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xheXhpbmcyNw==,size_16,color_FFFFFF,t_70#pic_center"></p><p><strong>13 生命周期</strong></p>`,65),te=e("li",null,"参考链接下篇",-1),ie={href:"https://blog.csdn.net/layxing27/article/details/109398512",target:"_blank",rel:"noopener noreferrer"},le=e("h1",{id:"总结",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#总结","aria-hidden":"true"},"#"),n(),e("strong",null,"总结")],-1),oe=e("h1",{id:"参考",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考","aria-hidden":"true"},"#"),n(),e("strong",null,"参考")],-1),re={href:"https://gitee.com/lakerzhang/wx.git",target:"_blank",rel:"noopener noreferrer"},ae=e("ul",null,[e("li",null,"码云地址: https://gitee.com/lakerzhang/wx.git")],-1),ce={href:"https://blog.csdn.net/layxing27/article/details/109356735?spm=1001.2101.3001.6650.3&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-3.no_search_link&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-3.no_search_link",target:"_blank",rel:"noopener noreferrer"};function pe(c,de){const t=i("ExternalLinkIcon"),r=i("router-link"),a=i("navigator");return d(),m("div",null,[_,g,b,F,e("p",null,[e("a",h,[n("微信小程序开发文档、"),s(t)]),e("a",v,[n("微信公众平台"),s(t)])]),x,e("ul",null,[e("li",null,[e("p",null,[e("a",G,[n("微信小程序官网"),s(t)])])]),Z]),w,e("table",null,[y,e("tbody",null,[L,k,N,V,z,H,e("tr",null,[q,R,e("td",null,[e("span",{title:c.lay},null,8,M)]),X]),f,e("tr",null,[W,T,E,e("td",null,"wx:if='"+l()+"'/wx:else",1)]),e("tr",null,[P,j,S,e("td",null,"hidden='"+l()+"'",1)]),I,e("tr",null,[D,A,C,e("td",null,"hidden='"+l()+"'",1)]),e("tr",null,[U,B,e("td",null,[s(r,{to:"地址"})]),e("td",null,[s(a,{url:"地址"})])]),e("tr",null,[O,$,e("td",null,[s(r,{to:"地址?id=1"})]),e("td",null,[s(a,{url:"地址?id=1"})])]),J,K,Q,Y,ee,ne])]),se,e("ul",null,[te,e("li",null,[e("a",ie,[n("微信小程序的生命周期详解"),s(t)])])]),le,oe,e("p",null,[e("a",re,[n("源码地址"),s(t)])]),ae,e("p",null,[n("本文参考："),e("a",ce,[n("微信小程序入门开发超详细笔记(一)"),s(t)])])])}const ue=p(u,[["render",pe],["__file","微信小程序.html.vue"]]);export{ue as default};
