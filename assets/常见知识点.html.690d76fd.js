import{_ as l,r,o as d,c as a,b as e,d as n,e as s,a as v}from"./app.74a5dc6f.js";const t={},u=v(`<h1 id="常见知识点" tabindex="-1"><a class="header-anchor" href="#常见知识点" aria-hidden="true">#</a> 常见知识点</h1><h1 id="javascript知识点" tabindex="-1"><a class="header-anchor" href="#javascript知识点" aria-hidden="true">#</a> <strong>JavaScript知识点</strong></h1><h1 id="一、概念" tabindex="-1"><a class="header-anchor" href="#一、概念" aria-hidden="true">#</a> <strong>一、概念</strong></h1><p>汇总一些杂项概念。</p><p><strong><strong>闭包</strong></strong></p><blockquote><p>可以使用另一个函数作用域中变量的函数。</p></blockquote><p><strong><strong>原型</strong></strong></p><blockquote><p>在JavaScript中是使用构造函数来新建一个对象的，每一个构造函数的内部都有一个 prototype 属性，它的属性值是一个对象，这个对象包含了可以由该构造函数的所有实例共享的属性和方法。当使用构造函数新建一个对象后，在这个对象的内部将包含一个指针，这个指针指向构造函数的 prototype 属性对应的值，在 ES5 中这个指针被称为对象的原型。一般来说不应该能够获取到这个值的，但是现在浏览器中都实现了 proto 属性来访问这个属性，但是最好不要使用这个属性，因为它不是规范中规定的。ES5 中新增了一个 Object.getPrototypeOf() 方法，可以通过这个方法来获取对象的原型。</p></blockquote><p><strong><strong>原型链</strong></strong></p><blockquote><p>当访问一个对象的属性时，如果这个对象内部不存在这个属性，那么它就会去它的原型对象里找这个属性，这个原型对象又会有自己的原型，于是就这样一直找下去，也就是原型链的概念。原型链的尽头一般来说都是 Object.prototype （再往上找Object.prototype.__proto__就是null了） 所以这就是新建的对象为什么能够使用 toString() 等方法的原因。</p></blockquote><h1 id="二、js方法" tabindex="-1"><a class="header-anchor" href="#二、js方法" aria-hidden="true">#</a> <strong>二、JS方法</strong></h1><p>汇总一些杂项方法。</p><p><strong><strong>split() 把一个字符串分割成字符串数组</strong></strong></p><blockquote><p>split() 方法用于把一个字符串分割成字符串数组。</p></blockquote><p>语法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>stringObject.split(separator,howmany)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>separator 从该参数指定的地方分割 stringObject。</li><li>howmany 可选。该参数可指定返回的数组的最大长度。</li></ul><p>一些示例</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;2:3:4:5&quot;.split(&quot;:&quot;)	//将返回[&quot;2&quot;, &quot;3&quot;, &quot;4&quot;, &quot;5&quot;]
&quot;|a|b|c&quot;.split(&quot;|&quot;)	//将返回[&quot;&quot;, &quot;a&quot;, &quot;b&quot;, &quot;c&quot;]
&quot;hello&quot;.split(&quot;&quot;)	//可返回 [&quot;h&quot;, &quot;e&quot;, &quot;l&quot;, &quot;l&quot;, &quot;o&quot;]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>toLowerCase() 用于把字符串转换为小写</strong></strong></p><blockquote><p>toLowerCase() 方法用于把字符串转换为小写。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var str=&quot;Hello World!&quot;
console.log(str.toLowerCase())

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>toUpperCase() 用于把字符串转换为大写</strong></strong></p><blockquote><p>toUpperCase() 方法用于把字符串转换为大写。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var str=&quot;Hello World!&quot;
console.log(str.toUpperCase())

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="三、es6方法" tabindex="-1"><a class="header-anchor" href="#三、es6方法" aria-hidden="true">#</a> <strong>三、ES6方法</strong></h1><p>汇总一些杂项方法。</p><p><strong><strong>字符串反转</strong></strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const reverseString = string =&gt; [...string].reverse().join(&#39;&#39;)
// 实例
reverseString(&#39;Medium&#39;) // &quot;muideM&quot;
reverseString(&#39;Better Programming&#39;) // &quot;gnimmargorP retteB&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>计算指定数字的阶乘</strong></strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const factorialOfNumber = number =&gt;
  number &lt; 0
    ? (() =&gt; {
      throw new TypeError(&#39;请输入正整数&#39;)
    })()
    : number &lt;= 1
      ? 1
      : number * factorialOfNumber(number - 1)

// 实例
factorialOfNumber(4) // 24
factorialOfNumber(8) // 40320

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>将数字转换为数字数组</strong></strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const converToArray = number =&gt; [...\`\${number}\`].map(el =&gt; parseInt(el))

// 实例
converToArray(5678) // [5, 6, 7, 8]
converToArray(12345678) // [1, 2, 3, 4, 5, 6, 7, 8]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="四、js工具方法" tabindex="-1"><a class="header-anchor" href="#四、js工具方法" aria-hidden="true">#</a> <strong>四、JS工具方法</strong></h1><p>汇总一些工具方法</p><p><strong><strong>实时获取窗口大小变化</strong></strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$(window).resize(function(){
    var Height = $(window).height();
    var Width = $(window).width();
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>日期格式化</strong></strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + &#39;&#39;).substr(4 - RegExp.$1.length))
  }
  let o = {
    &#39;M+&#39;: date.getMonth() + 1,
    &#39;d+&#39;: date.getDate(),
    &#39;h+&#39;: date.getHours(),
    &#39;m+&#39;: date.getMinutes(),
    &#39;s+&#39;: date.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(\`(\${k})\`).test(fmt)) {
      let str = o[k] + &#39;&#39;
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : (&#39;00&#39; + str).substr(str.length))
    }
  }
  return fmt
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>去除空格</strong></strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// type   0：去除全部空格，1：去除左边空格，2：去除右边空格
function cTrim (sInputString, type) {
  var sTmpStr = &#39; &#39;;
  var i = -1;

  if (type == 0 || type == 1) {
    while (sTmpStr == &#39; &#39;) {
      ++i;
      sTmpStr = sInputString.substr(i, 1);
    }
    sInputString = sInputString.substring(i);
  }

  if (type == 0 || type == 2) {
    sTmpStr = &#39; &#39;;
    i = sInputString.length;
    while (sTmpStr == &#39; &#39;) {
      --i;
      sTmpStr = sInputString.substr(i, 1);
    }
    sInputString = sInputString.substring(0, i + 1);
  }
  return sInputString;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>url中取参数</strong></strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function getQueryString(name) {
  if (undefined == window.location) return null
  var reg = new RegExp(&#39;(^|&amp;)&#39; + name + &#39;=([^&amp;]*)(&amp;|$)&#39;)
  var r = window.location.search.substr(1).match(reg)
  if (r != null) {
    return unescape(r[2].replace(/\\%20/g, &#39;+&#39;))
  } else {
    return null
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>获取、设置、删除cookie值</strong></strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 获取cookie第一种方法
function getCookie(e) {
  var i = document.cookie.match(new RegExp(&#39;(^| )&#39; + e + &#39;=([^;]*)(;|$)&#39;))
  if (i !== null) {
    return i[2]
  } else {
    return &#39;&#39;
  }
}
// 获取cookie第二种方法
function getCookie(name = &#39;&#39;) {
  if (document.cookie.length &gt; 0) {
    let start = document.cookie.indexOf(name + &#39;=&#39;)
    if (start !== -1) {
      start = start + name.length + 1
      let end = document.cookie.indexOf(&#39;;&#39;, start)
      if (end === -1) end = document.cookie.length
      return unescape(document.cookie.substring(start, end))
    }
  }
  return null
}
// 设置cookie
function setCookie(name, value, expireHours) {
  let exDate = new Date()
  exDate.setTime(exDate.getTime() + expireHours * 60 * 60 * 1000)
  document.cookie = name + &#39;=&#39; + escape(value) + (typeof expireHours === &#39;undefined&#39; ? &#39;&#39; : &#39;;expires=&#39; + exDate.toGMTString())
}
// 删除cookie
function delCookie(name = &#39;&#39;) {
  let exDate = new Date()
  exDate.setTime(exDate.getTime() - 1)
  let value = getCookie(name)
  if (value !== null) {
    document.cookie = name + &#39;=&#39; + escape(value) + &#39;;expires=&#39; + exDate.toGMTString()
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>设置、获取、删除、清除sessionStorage（localStorage也是同样操作）</strong></strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function setSessionStorage(key, value) {
  sessionStorage.setItem(key, value)
}
function getSessionStorage(key) {
  return sessionStorage.getItem(key)
}
function delSessionStorage(key) {
  sessionStorage.removeItem(key)
}
function clearSessionStorage() {
  sessionStorage.clear()
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>获取设备号，安卓，ios，web</strong></strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function getDeviceType() {
  var deviceType = &#39;WEB&#39; //其他
  var u = navigator.userAgent
  var isAndroid = u.indexOf(&#39;Android&#39;) &gt; -1 || u.indexOf(&#39;Adr&#39;) &gt; -1
  var isiOS = !!u.match(/\\(i[^;]+;( U;)? CPU.+Mac OS X/)
  if (isAndroid) {
    deviceType = &#39;ANDROID&#39;
  } else if (isiOS) {
    deviceType = &#39;IOS&#39;
  }
  return deviceType
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>正则检测，手机号、姓名、邮箱、身份证</strong></strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let RegExp = {
  // 检测手机号
  checkMobile(s) {
    var regu = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
    if (regu.test(s)) {
      return true
    } else {
      return false
    }
  },
  // 检测姓名 必须要有两个汉字
  checkNomalName(s) {
    var regu = /^[\\u4e00-\\u9fa5]{2,}$/;
    if (regu.test(s)) {
      return true;
    } else {
      return false;
    }
  },
  // 检测邮箱
  isEmail(str) {
    var myReg = /^[-_A-Za-z0-9]+@([_A-Za-z0-9]+\\.)+[A-Za-z0-9]{2,3}$/;
    if (myReg.test(str)) return true;
    return false;
  },
  //  检测身份证
  checkIdCard(idCard) {
    var regIdCard = /^(^[1-9]\\d{7}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}$)|(^[1-9]\\d{5}[1-9]\\d{3}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])((\\d{4})|\\d{3}[Xx])$)$/
    //如果通过该验证，说明身份证格式正确，但准确性还需计算
    if (regIdCard.test(idCard)) {
      if (idCard.length == 18) {
        var idCardWi = new Array(7,  9,  10,  5,  8,  4,  2,  1,  6,  3,  7,  9,  10,  5,  8,  4,  2)  //将前17位加权因子保存在数组里
        var idCardY = new Array(1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2) //这是除以11后，可能产生的11位余数、验证码，也保存成数组
        var idCardWiSum = 0 //用来保存前17位各自乖以加权因子后的总和
        for (var i = 0; i &lt; 17; i++) {
          idCardWiSum += idCard.substring(i, i + 1) * idCardWi[i]
        }
        var idCardMod = idCardWiSum % 11 //计算出校验码所在数组的位置
        var idCardLast = idCard.substring(17) //得到最后一位身份证号码
        //如果等于2，则说明校验码是10，身份证号码最后一位应该是X
        if (idCardMod == 2) {
          if (idCardLast == &#39;X&#39; || idCardLast == &#39;x&#39;) {
            return true
          } else {
            return false
          }
        } else {
          //用计算出的验证码与最后一位身份证号码匹配，如果一致，说明通过，否则是无效的身份证号码
          if (idCardLast == idCardY[idCardMod]) {
            return true
          } else {
            return false
          }
        }
      }
    } else {
      return false
    }
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>身份证打码</strong></strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function idCardMask (idCard = &#39;&#39;) {
  return idCard.substr(0, 1) + idCard.slice(1, -4).replace(/\\d/g, &#39;*&#39;) + idCard.substr(-4)
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>微信环境、小程序环境检测</strong></strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 微信环境
function isWeiXinWeb () {
  return navigator.userAgent.toLowerCase().indexOf(&#39;micromessenger&#39;) != -1
}
// 小程序环境
function isWechatApplet() {
    const ua = window.navigator.userAgent.toLowerCase()
    return new Promise(resolve =&gt; {
        if (ua.indexOf(&#39;micromessenger&#39;) == -1) {
            //不在微信或者小程序中
            resolve(false)
        } else {
            wx.miniProgram.getEnv(res =&gt; {
                if (res.miniprogram) {
                    //在小程序中
                    resolve(true)
                } else {
                    resolve(false)
                }
            })
        }
    })
}
// 使用说明
let isWx = isWeiXinWeb
let isWechatApp = false
isWechatApplet().then(res =&gt; {
  isWechatApp = res
}).catch(res =&gt; {
  isWechatApp = false
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>数组方法</strong></strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 数组最大值
function arrayMax(arr) {
  return Math.max.apply(null, arr)
}
// 数组最小值
function arrayMin(arr) {
  return Math.min.apply(null, arr)
}
// 数组并集
function arrayUnion(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])]
}
// 数组交集
function arrayIntersect(arr1, arr2) {
  // let arr3 = [...arr1].filter(value =&gt; arr2.includes(value))
  // return [...new Set([...arr3])]
  return [...new Set([...arr1].filter(value =&gt; arr2.includes(value)))]
}
// 数组差集
function arrayDiff(arr1, arr2) {
  return [...new Set([...arr1].filter(value =&gt; !arr2.includes(value)))]
}
// 数组去重
function arrayUnique(arr) {
  return [...new Set([...arr])]
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>localStorage存储，并且设定过期时间</strong></strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let handleLocalStorage = {
  // 存储localStorage，并且设定过期时间
  setLocalStorageItem(key, value, exp) {
      var obj = new Object(),
          expires = exp.expires || null
      obj.value = value
      obj.time = new Date().getTime()
      // expires 类型
      if (expires === null) {
          delete obj.expires
      } else if (typeof expires === &#39;object&#39;) {
          obj.expires = expires.getTime() - obj.time
      } else if (typeof expires === &#39;number&#39;) {
          if ((expires | 0) !== expires) {
              throw new Error(&#39;expires must be integer number!&#39;)
          }
          // expires 小于 365、366 则，按天算。否则按时间戳算
          let days = new Date().getFullYear() % 4 === 0 ? 366 : 365
          if (expires &lt;= days &amp;&amp; expires &gt; 0) {
              obj.expires = expires * 1000 * 60 * 60 * 24
          } else if (expires &gt; days) {
              obj.expires = expires
          } else if (expires &lt;= 0) {
              this.removeLocalStorageItem(key)
          }
      }
      localStorage.setItem(key, JSON.stringify(obj))
  },
  // getLocalStorageItem
  getLocalStorageItem(key) {
    var obj = JSON.parse(localStorage.getItem(key))
    if (obj === &#39;null&#39; || obj === null) return null
    var expires = obj.expires,
      now = new Date().getTime(),
      time = obj.time

    if (now - time &gt;= expires || now &lt; time) {
      localStorage.removeItem(key)
      return null
    } else {
      return obj.value
    }
  },
  // removeLocalStorageItem
  removeLocalStorageItem(key) {
    if (this.getLocalStorageItem(key) !== null) {
      localStorage.removeItem(key)
      return this.getLocalStorageItem(key) === null ? true : false
    }
    return true
  },
}
// 使用，假定，有一个缓存地址(address)，需要缓存一天，一天之后，自动失效
let address = JSON.parse(handleLocalStorage. getLocalStorageItem(&#39;address&#39;)）
let limitTime = address.time + address.expires
let now =  new Date().getTime()
// 已经过期， 重新定位
if (limitTime &lt;= now) {
  handleLocalStorage.removeLocalStorageItem(&#39;address&#39;)
}
if(localStorage.address) {
  // 缓存未过期，直接取localStorage中的地址
} else {
  // 缓存过期，重新定位
  // 定位结束，需要将定位到的信息重新存入localStorage中
  handleLocalStorage.setLocalStorageItem(&#39;address&#39;, &#39;新地址&#39; , {expires: 1})
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>js操作页面，滚动到具体位置</strong></strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 简单的方法 参数一是时间，参数二是距离，但是有些机型，并不能兼容这个方法
window.scrollTo(10, 200)
// 模拟滚动  参数一是距离，参数二是时间
function scrollTop(number = 0, time) {
  if (!time) {
    document.body.scrollTop = document.documentElement.scrollTop = number
    return number
  }
  const spacingTime = 20
  let spacingInex = time / spacingTime
  let nowTop = document.body.scrollTop + document.documentElement.scrollTop
  let everTop = (number - nowTop) / spacingInex
  let scrollTimer = setInterval(() =&gt; {
    if (spacingInex &gt; 0) {
      spacingInex--
      scrollTop((nowTop += everTop))
    } else {
      clearInterval(scrollTimer)
    }
  }, spacingTime)
}
// 使用，将页面滚动到某个元素
let ele = document.getElementById(&#39;scrollId&#39;)
this.scrollTop(ele.offsetTop, 200)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,61),c={href:"http://imberzsk.gitee.io/dumi-js/js%E5%B8%B8%E7%94%A8%E6%96%B9%E6%B3%95",target:"_blank",rel:"noopener noreferrer"},m={href:"https://zhuanlan.zhihu.com/p/144709419",target:"_blank",rel:"noopener noreferrer"},o={href:"https://www.jianshu.com/p/b8d9ffba02b1",target:"_blank",rel:"noopener noreferrer"};function b(g,p){const i=r("ExternalLinkIcon");return d(),a("div",null,[u,e("p",null,[n("本文参考："),e("a",c,[n("第三方笔记"),s(i)]),e("a",m,[n("前端js常用的60余种Vue工具方法"),s(i)]),e("a",o,[n("一些常见的js工具方法的封装"),s(i)])])])}const f=l(t,[["render",b],["__file","常见知识点.html.vue"]]);export{f as default};
