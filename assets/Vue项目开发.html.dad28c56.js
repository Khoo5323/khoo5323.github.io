import{_ as s,r as l,o as t,c as d,b as e,d as i,e as a,a as r}from"./app.74a5dc6f.js";const v={},u=r(`<h1 id="vue项目开发" tabindex="-1"><a class="header-anchor" href="#vue项目开发" aria-hidden="true">#</a> Vue项目开发</h1><h1 id="vue项目相关-基于-vue2-x-与-elementui" tabindex="-1"><a class="header-anchor" href="#vue项目相关-基于-vue2-x-与-elementui" aria-hidden="true">#</a> <strong>Vue项目相关（基于 Vue2.X 与 ElementUI）</strong></h1><h1 id="一、项目配置" tabindex="-1"><a class="header-anchor" href="#一、项目配置" aria-hidden="true">#</a> <strong>一、项目配置</strong></h1><p><strong><strong>axios的全局配置</strong></strong></p><ul><li>axios.defaults.timeout = 3000; // 超时时间</li><li>axios.defaults.baseURL = &#39;http://localhost:3000/app&#39;; // 默认地址</li><li>axios.defaults.headers[ &#39;mytoken&#39; ] = &#39;aasdfrwqwdadasdsa&#39;; // 请求头信息</li></ul><p><strong>在main.js中</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import axios from &#39;axios&#39;
// 配置请求的跟路径
axios.defaults.baseURL = &#39;http://127.0.0.1:8888/api/private/v1/&#39;
// 在 request 拦截器中，展示进度条 NProgress.start()
axios.interceptors.request.use(config =&gt; {
  // console.log(config)
  NProgress.start()
  config.headers.Authorization = window.sessionStorage.getItem(&#39;token&#39;)
  // 在最后必须 return config
  return config
})
// 在 response 拦截器中，隐藏进度条 NProgress.done()
axios.interceptors.response.use(config =&gt; {
  NProgress.done()
  return config
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>全局过滤器 Vue.filter</strong></strong></p><p>过滤器处理时间字段</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Vue.filter(&#39;dateFormat&#39;, function(originVal) {
  const dt = new Date(originVal)

  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + &#39;&#39;).padStart(2, &#39;0&#39;)
  const d = (dt.getDate() + &#39;&#39;).padStart(2, &#39;0&#39;)

  const hh = (dt.getHours() + &#39;&#39;).padStart(2, &#39;0&#39;)
  const mm = (dt.getMinutes() + &#39;&#39;).padStart(2, &#39;0&#39;)
  const ss = (dt.getSeconds() + &#39;&#39;).padStart(2, &#39;0&#39;)

  return \`\${y}-\${m}-\${d} \${hh}:\${mm}:\${ss}\`
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>过滤器使用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> {{ scope.row.add_time | dateFormat }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="二、增删改查" tabindex="-1"><a class="header-anchor" href="#二、增删改查" aria-hidden="true">#</a> <strong>二、增删改查</strong></h1><p><strong><strong>增</strong></strong></p><p><strong>绑定添加按钮事件</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;el-button type=&quot;primary&quot; @click=&quot;addDialogVisible = true&quot;&gt;添加用户&lt;/el-button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>添加用户对话框</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!-- 添加用户对话框 --&gt;
&lt;el-dialog
  title=&quot;添加用户&quot;
  :visible.sync=&quot;addDialogVisible&quot;
  width=&quot;50%&quot;
  @close=&quot;addDialogClosed&quot;&gt;
  &lt;!-- 内容主体区域 --&gt;
  &lt;el-form :model=&quot;addForm&quot; :rules=&quot;addFormRules&quot; ref=&quot;addFormRef&quot; label-width=&quot;70px&quot;&gt;
    &lt;el-form-item label=&quot;用户名&quot; prop=&quot;username&quot;&gt;
      &lt;el-input v-model=&quot;addForm.username&quot;&gt;&lt;/el-input&gt;
    &lt;/el-form-item&gt;
    &lt;el-form-item label=&quot;密码&quot; prop=&quot;password&quot;&gt;
      &lt;el-input v-model=&quot;addForm.password&quot;&gt;&lt;/el-input&gt;
    &lt;/el-form-item&gt;
    &lt;el-form-item label=&quot;邮箱&quot; prop=&quot;email&quot;&gt;
      &lt;el-input v-model=&quot;addForm.email&quot;&gt;&lt;/el-input&gt;
    &lt;/el-form-item&gt;
    &lt;el-form-item label=&quot;手机&quot; prop=&quot;mobile&quot;&gt;
      &lt;el-input v-model=&quot;addForm.mobile&quot;&gt;&lt;/el-input&gt;
    &lt;/el-form-item&gt;
  &lt;/el-form&gt;
  &lt;!-- 底部区域 --&gt;
  &lt;span slot=&quot;footer&quot; class=&quot;dialog-footer&quot;&gt;
    &lt;el-button @click=&quot;addDialogVisible = false&quot;&gt;取 消&lt;/el-button&gt;
    &lt;el-button type=&quot;primary&quot; @click=&quot;addUser&quot;&gt;确 定&lt;/el-button&gt;
  &lt;/span&gt;
&lt;/el-dialog&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>数据操作 data中</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>      // 用户表单信息
addForm: {
  username: &#39;&#39;,
  password: &#39;&#39;,
  email: &#39;&#39;,
  mobile: &#39;&#39;
},
// 控制添加用户对话框显示隐藏
addDialogVisible: false,
// 添加表单的验证规则对象
addFormRules: {
  username: [
    { required: true, message: &#39;请输入用户名&#39;, trigger: &#39;blur&#39; },
    { min: 3, max: 10, message: &#39;用户名的长度在3-10个字符之间&#39;, trigger: &#39;blur&#39; }
  ],
  password: [
    { required: true, message: &#39;请输入用户密码&#39;, trigger: &#39;blur&#39; },
    { min: 6, max: 12, message: &#39;密码的长度在6-12个字符之间&#39;, trigger: &#39;blur&#39; }
  ],
  email: [
    { required: true, message: &#39;请输入用户邮箱&#39;, trigger: &#39;blur&#39; },
    { validator: checkEmail, trigger: &#39;blur&#39; }
  ],
  mobile: [
    { required: true, message: &#39;请输入用户手机&#39;, trigger: &#39;blur&#39; },
    { validator: checkMobile, trigger: &#39;blur&#39; }
  ]
},

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>数据操作 methods中</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 监听添加用户对话框的关闭事件
addDialogClosed() {
  this.$refs.addFormRef.resetFields()
},
// 点击按钮添加新用户
addUser() {
  this.$refs.addFormRef.validate(async valid =&gt; {
    if (!valid) return false
    const { data: res } = await this.$http.post(&#39;users&#39;, this.addForm)
    if (res.meta.status !== 201) {
      this.$message.error(&#39;添加用户失败&#39;)
    }
    this.$message.success(&#39;添加用户成功&#39;)
    this.addDialogVisible = false
    this.getUserList()
  })
},

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>删</strong></strong></p><p><strong>绑定删除按钮事件</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;el-table-column prop=&quot;&quot; label=&quot;操作&quot;&gt;
  &lt;template slot-scope=&quot;scope&quot;&gt;
    &lt;!-- 修改按钮 --&gt;
    &lt;el-tooltip class=&quot;item&quot; effect=&quot;dark&quot; content=&quot;修改&quot; placement=&quot;top&quot;&gt;
      &lt;el-button type=&quot;primary&quot; icon=&quot;el-icon-edit&quot; circle size=&quot;mini&quot; @click=&quot;showEditDialog(scope.row.id)&quot;&gt;&lt;/el-button&gt;
    &lt;/el-tooltip&gt;
    &lt;!-- 删除按钮 --&gt;
    &lt;el-tooltip class=&quot;item&quot; effect=&quot;dark&quot; content=&quot;删除&quot; placement=&quot;top&quot;&gt;
      &lt;el-button type=&quot;danger&quot; icon=&quot;el-icon-delete&quot; circle size=&quot;mini&quot; @click=&quot;removeUserById(scope.row.id)&quot;&gt;&lt;/el-button&gt;
    &lt;/el-tooltip&gt;
  &lt;/template&gt;
&lt;/el-table-column&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>根据id删除对应的用户信息</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 根据id删除对应的用户信息
async removeUserById(id) {
  // 弹窗询问用户是否删除数据
  const confirmResult = await this.$confirm(&#39;此操作将永久删除该用户, 是否继续?&#39;, &#39;提示&#39;, { confirmButtonText: &#39;确定&#39;, cancelButtonText: &#39;取消&#39;, type: &#39;warning&#39; }).catch(err =&gt; err)
  // 如果用户确认删除，返回值为字符串 confirm
  // 如果用户取消删除，返回值为字符串 cancel
  if (confirmResult !== &#39;confirm&#39;) {
    return this.$message.info(&#39;已经取消删除&#39;)
  }
  const { data: res } = await this.$http.delete(&#39;users/&#39; + id)
  if (res.meta.status !== 200) {
    return this.$message.error(&#39;删除用户失败！&#39;)
  }
  this.$message.success(&#39;删除用户成功！&#39;)
  this.getUserList()
},

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>改</strong></strong></p><p><strong>绑定修改按钮事件</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;el-table-column prop=&quot;&quot; label=&quot;操作&quot;&gt;
  &lt;template slot-scope=&quot;scope&quot;&gt;
    &lt;!-- 修改按钮 --&gt;
    &lt;el-tooltip class=&quot;item&quot; effect=&quot;dark&quot; content=&quot;修改&quot; placement=&quot;top&quot;&gt;
      &lt;el-button type=&quot;primary&quot; icon=&quot;el-icon-edit&quot; circle size=&quot;mini&quot; @click=&quot;showEditDialog(scope.row.id)&quot;&gt;&lt;/el-button&gt;
    &lt;/el-tooltip&gt;
    &lt;!-- 删除按钮 --&gt;
    &lt;el-tooltip class=&quot;item&quot; effect=&quot;dark&quot; content=&quot;删除&quot; placement=&quot;top&quot;&gt;
      &lt;el-button type=&quot;danger&quot; icon=&quot;el-icon-delete&quot; circle size=&quot;mini&quot; @click=&quot;removeUserById(scope.row.id)&quot;&gt;&lt;/el-button&gt;
    &lt;/el-tooltip&gt;
  &lt;/template&gt;
&lt;/el-table-column&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>修改用户的对话框</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!-- 修改用户的对话框 --&gt;
&lt;el-dialog
  title=&quot;修改用户&quot;
  :visible.sync=&quot;editDialogVisible&quot;
  width=&quot;50%&quot;
  @close=&quot;editDialogClosed&quot;&gt;
  &lt;!-- 内容主体区域 --&gt;
  &lt;el-form :model=&quot;editForm&quot; :rules=&quot;editFormRules&quot; ref=&quot;editFormRef&quot; label-width=&quot;70px&quot;&gt;
    &lt;el-form-item label=&quot;用户名&quot;&gt;
      &lt;el-input v-model=&quot;editForm.username&quot; disabled&gt;&lt;/el-input&gt;
    &lt;/el-form-item&gt;
    &lt;el-form-item label=&quot;邮箱&quot; prop=&quot;email&quot;&gt;
      &lt;el-input v-model=&quot;editForm.email&quot;&gt;&lt;/el-input&gt;
    &lt;/el-form-item&gt;
    &lt;el-form-item label=&quot;手机号&quot; prop=&quot;mobile&quot;&gt;
      &lt;el-input v-model=&quot;editForm.mobile&quot;&gt;&lt;/el-input&gt;
    &lt;/el-form-item&gt;
  &lt;/el-form&gt;
  &lt;!-- 底部区域 --&gt;
  &lt;span slot=&quot;footer&quot; class=&quot;dialog-footer&quot;&gt;
    &lt;el-button @click=&quot;editDialogVisible = false&quot;&gt;取 消&lt;/el-button&gt;
    &lt;el-button type=&quot;primary&quot; @click=&quot;editUserInfo&quot;&gt;确 定&lt;/el-button&gt;
  &lt;/span&gt;
&lt;/el-dialog&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>数据操作 data中</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 控制修改表单的提示框显示隐藏
editDialogVisible: false,
// 修改表单的验证规则对象
editFormRules: {
  email: [
    { required: true, message: &#39;请输入用户邮箱&#39;, trigger: &#39;blur&#39; },
    { validator: checkEmail, trigger: &#39;blur&#39; }
  ],
  mobile: [
    { required: true, message: &#39;请输入用户手机&#39;, trigger: &#39;blur&#39; },
    { validator: checkMobile, trigger: &#39;blur&#39; }
  ]
},
// 查询到的用户信息对象
editForm: [],

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>数据操作 methods中</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//  监听修改用户对话框的关闭事件
editDialogClosed() {
  this.$refs.editFormRef.resetFields()
},
// 修改用户信息并提交
editUserInfo() {
  this.$refs.editFormRef.validate(async valid =&gt; {
    if (!valid) return false
    // 发起修改用户信息的数据请求
    const { data: res } = await this.$http.put(&#39;users/&#39; + this.editForm.id, { email: this.editForm.email, mobile: this.editForm.mobile })
    if (res.meta.status !== 200) {
      return this.$message.error(&#39;更新用户信息失败&#39;)
    }
    // 关闭对话框
    this.editDialogVisible = false
    // 更新数据列表
    this.getUserList()
    // 提示信息
    this.$message.success(&#39;更新用户信息成功&#39;)
  })
},

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>查</strong></strong></p><p><strong>查询用户</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;el-input placeholder=&quot;请输入内容&quot; class=&quot;input-with-select&quot; v-model=&quot;queryInfo.query&quot; clearable @clear=&quot;getUserList&quot;&gt;
  &lt;el-button slot=&quot;append&quot; icon=&quot;el-icon-search&quot; @click=&quot;getUserList&quot;&gt;&lt;/el-button&gt;
&lt;/el-input&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>数据处理 data中</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 获取用户列表的参数对象
queryInfo: {
  query: &#39;&#39;,
  pagenum: 1,
  pagesize: 2
},

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>数据处理 methods中</strong></p><p>默认query条件为空输出全部列表，搜索时传入搜索条件查询指定内容。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>async getUserList() {
  const { data: res } = await this.$http.get(&#39;users&#39;, {
    params: this.queryInfo
  })
  if (res.meta.status !== 200) {
    return this.$message.error(&#39;获取用户列表失败！&#39;)
  }
  this.userList = res.data.users
  this.total = res.data.total
  // console.log(res)
},

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>列表输出</strong></strong></p><p><strong>数据列表 data中</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 用户列表
userList: [],

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>数据列表 created中</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>created() {
  this.getUserList()
},

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>数据列表 methods中</strong></p><p>不需要传参</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>async getRightsList() {
  const { data: res } = await this.$http.get(&#39;rights/list&#39;)
  if (res.meta.status !== 200) {
    return this.$message.error(&#39;获取权限列表失败！&#39;)
  }
  this.rightsList = res.data
  console.log(this.rightsList)
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有搜索功能，需要传参</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 获取用户数据列表
async getUserList() {
  const { data: res } = await this.$http.get(&#39;users&#39;, {
    params: this.queryInfo
  })
  if (res.meta.status !== 200) {
    return this.$message.error(&#39;获取用户列表失败！&#39;)
  }
  this.userList = res.data.users
  this.total = res.data.total
  // console.log(res)
},

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>分页</strong></strong></p><p><strong>分页区域</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!-- 分页区域 --&gt;
&lt;el-pagination
  @size-change=&quot;handleSizeChange&quot;
  @current-change=&quot;handleCurrentChange&quot;
  :current-page=&quot;queryInfo.pagenum&quot;
  :page-sizes=&quot;[2, 4, 5, 20]&quot;
  :page-size=&quot;100&quot;
  layout=&quot;total, sizes, prev, pager, next, jumper&quot;
  :total=&quot;total&quot;&gt;
&lt;/el-pagination&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>数据列表 created中</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>created() {
  this.getUserList()
},

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>数据处理 data中</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 获取用户列表的参数分页对象
queryInfo: {
  pagenum: 1,
  pagesize: 2
},
// 列总数
total: 0,

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>数据处理 methods中</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 监听 pagesize 改变的事件
handleSizeChange(newSize) {
  this.queryInfo.pagesize = newSize
  this.getUserList()
},
handleCurrentChange(newPage) {
  this.queryInfo.pagenum = newPage
  this.getUserList()
},

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>添加商品</strong></strong></p><p><strong>整体结构</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!-- 卡片视图 --&gt;
&lt;el-card&gt;
  &lt;!-- 提示区域 --&gt;
  &lt;el-alert title=&quot;添加商品信息&quot; type=&quot;info&quot; center show-icon :closable=&quot;false&quot;&gt;
  &lt;/el-alert&gt;
  &lt;!-- 步骤条区域 --&gt;
  &lt;el-steps :space=&quot;200&quot; :active=&quot;activeIndex - 0&quot; finish-status=&quot;success&quot; align-center&gt;
    &lt;el-step title=&quot;基本信息&quot;&gt;&lt;/el-step&gt;
    &lt;el-step title=&quot;商品参数&quot;&gt;&lt;/el-step&gt;
    &lt;el-step title=&quot;商品属性&quot;&gt;&lt;/el-step&gt;
    &lt;el-step title=&quot;商品图片&quot;&gt;&lt;/el-step&gt;
    &lt;el-step title=&quot;商品内容&quot;&gt;&lt;/el-step&gt;
    &lt;el-step title=&quot;完成&quot;&gt;&lt;/el-step&gt;
  &lt;/el-steps&gt;

  &lt;!-- tab栏区域 --&gt;

  &lt;el-form :model=&quot;addForm&quot; :rules=&quot;addFormRules&quot; ref=&quot;addFormRef&quot; label-width=&quot;100px&quot; label-position=&quot;top&quot;&gt;
    &lt;el-tabs v-model=&quot;activeIndex&quot; :tab-position=&quot;&#39;left&#39;&quot; :before-leave=&quot;beforeTabLeave&quot; @tab-click=&quot;tabClicked&quot;&gt;
      &lt;el-tab-pane label=&quot;基本信息&quot; name=&quot;0&quot;&gt;
        &lt;el-form-item label=&quot;商品名称&quot; prop=&quot;goods_name&quot;&gt;
          &lt;el-input v-model=&quot;addForm.goods_name&quot;&gt;&lt;/el-input&gt;
        &lt;/el-form-item&gt;
        &lt;el-form-item label=&quot;商品价格&quot; prop=&quot;goods_price&quot;&gt;
          &lt;el-input v-model=&quot;addForm.goods_price&quot; type=&quot;number&quot;&gt;&lt;/el-input&gt;
        &lt;/el-form-item&gt;
        &lt;el-form-item label=&quot;商品重量&quot; prop=&quot;goods_weight&quot;&gt;
          &lt;el-input v-model=&quot;addForm.goods_weight&quot; type=&quot;number&quot;&gt;&lt;/el-input&gt;
        &lt;/el-form-item&gt;
        &lt;el-form-item label=&quot;商品数量&quot; prop=&quot;goods_number&quot;&gt;
          &lt;el-input v-model=&quot;addForm.goods_number&quot; type=&quot;number&quot;&gt;&lt;/el-input&gt;
        &lt;/el-form-item&gt;
        &lt;el-form-item label=&quot;商品分类&quot; prop=&quot;goods_cat&quot;&gt;
          &lt;el-cascader expand-trigger=&quot;hover&quot; :options=&quot;catelist&quot; :props=&quot;cateProps&quot; v-model=&quot;addForm.goods_cat&quot; @change=&quot;handleChange&quot;&gt;
          &lt;/el-cascader&gt;
        &lt;/el-form-item&gt;
      &lt;/el-tab-pane&gt;
      &lt;el-tab-pane label=&quot;商品参数&quot; name=&quot;1&quot;&gt;
        &lt;!-- 渲染表单的Item项 --&gt;
        &lt;el-form-item :label=&quot;item.attr_name&quot; v-for=&quot;item in manyTableData&quot; :key=&quot;item.attr_id&quot;&gt;
          &lt;!-- 复选框组 --&gt;
          &lt;el-checkbox-group v-model=&quot;item.attr_vals&quot;&gt;
            &lt;el-checkbox :label=&quot;cb&quot; v-for=&quot;(cb, i) in item.attr_vals&quot; :key=&quot;i&quot; border&gt;&lt;/el-checkbox&gt;
          &lt;/el-checkbox-group&gt;
        &lt;/el-form-item&gt;
      &lt;/el-tab-pane&gt;
      &lt;el-tab-pane label=&quot;商品属性&quot; name=&quot;2&quot;&gt;
        &lt;el-form-item :label=&quot;item.attr_name&quot; v-for=&quot;item in onlyTableData&quot; :key=&quot;item.attr_id&quot;&gt;
          &lt;el-input v-model=&quot;item.attr_vals&quot;&gt;&lt;/el-input&gt;
        &lt;/el-form-item&gt;
      &lt;/el-tab-pane&gt;
      &lt;el-tab-pane label=&quot;商品图片&quot; name=&quot;3&quot;&gt;
        &lt;!-- action 表示图片要上传到的后台API地址 --&gt;
        &lt;el-upload :action=&quot;uploadURL&quot; :on-preview=&quot;handlePreview&quot; :on-remove=&quot;handleRemove&quot; list-type=&quot;picture&quot; :headers=&quot;headerObj&quot; :on-success=&quot;handleSuccess&quot;&gt;
          &lt;el-button size=&quot;small&quot; type=&quot;primary&quot;&gt;点击上传&lt;/el-button&gt;
        &lt;/el-upload&gt;
      &lt;/el-tab-pane&gt;
      &lt;el-tab-pane label=&quot;商品内容&quot; name=&quot;4&quot;&gt;
        &lt;!-- 富文本编辑器组件 --&gt;
        &lt;quill-editor v-model=&quot;addForm.goods_introduce&quot;&gt;&lt;/quill-editor&gt;
        &lt;!-- 添加商品的按钮 --&gt;
        &lt;el-button type=&quot;primary&quot; class=&quot;btnAdd&quot; @click=&quot;add&quot;&gt;添加商品&lt;/el-button&gt;
      &lt;/el-tab-pane&gt;
    &lt;/el-tabs&gt;
  &lt;/el-form&gt;

&lt;/el-card&gt;

&lt;!-- 图片预览 --&gt;
&lt;el-dialog title=&quot;图片预览&quot; :visible.sync=&quot;previewVisible&quot; width=&quot;50%&quot;&gt;
  &lt;img :src=&quot;previewPath&quot; alt=&quot;&quot; class=&quot;previewImg&quot;&gt;
&lt;/el-dialog&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>处理代码</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import _ from &#39;lodash&#39;

export default {
  data() {
    return {
      activeIndex: &#39;0&#39;,
      // 添加商品的表单数据对象
      addForm: {
        goods_name: &#39;&#39;,
        goods_price: 0,
        goods_weight: 0,
        goods_number: 0,
        // 商品所属的分类数组
        goods_cat: [],
        // 图片的数组
        pics: [],
        // 商品的详情描述
        goods_introduce: &#39;&#39;,
        attrs: []
      },
      addFormRules: {
        goods_name: [
          { required: true, message: &#39;请输入商品名称&#39;, trigger: &#39;blur&#39; }
        ],
        goods_price: [
          { required: true, message: &#39;请输入商品价格&#39;, trigger: &#39;blur&#39; }
        ],
        goods_weight: [
          { required: true, message: &#39;请输入商品重量&#39;, trigger: &#39;blur&#39; }
        ],
        goods_number: [
          { required: true, message: &#39;请输入商品数量&#39;, trigger: &#39;blur&#39; }
        ],
        goods_cat: [
          { required: true, message: &#39;请选择商品分类&#39;, trigger: &#39;blur&#39; }
        ]
      },
      // 商品分类列表
      catelist: [],
      cateProps: {
        label: &#39;cat_name&#39;,
        value: &#39;cat_id&#39;,
        children: &#39;children&#39;
      },
      // 动态参数列表数据
      manyTableData: [],
      // 静态属性列表数据
      onlyTableData: [],
      // 上传图片的URL地址
      uploadURL: &#39;http://127.0.0.1:8888/api/private/v1/upload&#39;,
      // 图片上传组件的headers请求头对象
      headerObj: {
        Authorization: window.sessionStorage.getItem(&#39;token&#39;)
      },
      previewPath: &#39;&#39;,
      previewVisible: false
    }
  },
  created() {
    this.getCateList()
  },
  methods: {
    // 获取所有商品分类数据
    async getCateList() {
      const { data: res } = await this.$http.get(&#39;categories&#39;)

      if (res.meta.status !== 200) {
        return this.$message.error(&#39;获取商品分类数据失败！&#39;)
      }

      this.catelist = res.data
      console.log(this.catelist)
    },
    // 级联选择器选中项变化，会触发这个函数
    handleChange() {
      console.log(this.addForm.goods_cat)
      if (this.addForm.goods_cat.length !== 3) {
        this.addForm.goods_cat = []
      }
    },
    beforeTabLeave(activeName, oldActiveName) {
      // console.log(&#39;即将离开的标签页名字是：&#39; + oldActiveName)
      // console.log(&#39;即将进入的标签页名字是：&#39; + activeName)
      // return false
      if (oldActiveName === &#39;0&#39; &amp;&amp; this.addForm.goods_cat.length !== 3) {
        this.$message.error(&#39;请先选择商品分类！&#39;)
        return false
      }
    },
    async tabClicked() {
      // console.log(this.activeIndex)
      // 证明访问的是动态参数面板
      if (this.activeIndex === &#39;1&#39;) {
        const { data: res } = await this.$http.get(
          \`categories/\${this.cateId}/attributes\`,
          {
            params: { sel: &#39;many&#39; }
          }
        )

        if (res.meta.status !== 200) {
          return this.$message.error(&#39;获取动态参数列表失败！&#39;)
        }

        console.log(res.data)
        res.data.forEach(item =&gt; {
          item.attr_vals =
            item.attr_vals.length === 0 ? [] : item.attr_vals.split(&#39; &#39;)
        })
        this.manyTableData = res.data
      } else if (this.activeIndex === &#39;2&#39;) {
        const { data: res } = await this.$http.get(
          \`categories/\${this.cateId}/attributes\`,
          {
            params: { sel: &#39;only&#39; }
          }
        )

        if (res.meta.status !== 200) {
          return this.$message.error(&#39;获取静态属性失败！&#39;)
        }

        console.log(res.data)
        this.onlyTableData = res.data
      }
    },
    // 处理图片预览效果
    handlePreview(file) {
      console.log(file)
      this.previewPath = file.response.data.url
      this.previewVisible = true
    },
    // 处理移除图片的操作
    handleRemove(file) {
      // console.log(file)
      // 1. 获取将要删除的图片的临时路径
      const filePath = file.response.data.tmp_path
      // 2. 从 pics 数组中，找到这个图片对应的索引值
      const i = this.addForm.pics.findIndex(x =&gt; x.pic === filePath)
      // 3. 调用数组的 splice 方法，把图片信息对象，从 pics 数组中移除
      this.addForm.pics.splice(i, 1)
      console.log(this.addForm)
    },
    // 监听图片上传成功的事件
    handleSuccess(response) {
      console.log(response)
      // 1. 拼接得到一个图片信息对象
      const picInfo = { pic: response.data.tmp_path }
      // 2. 将图片信息对象，push 到pics数组中
      this.addForm.pics.push(picInfo)
      console.log(this.addForm)
    },
    // 添加商品
    add() {
      this.$refs.addFormRef.validate(async valid =&gt; {
        if (!valid) {
          return this.$message.error(&#39;请填写必要的表单项！&#39;)
        }
        // 执行添加的业务逻辑
        // lodash   cloneDeep(obj)
        const form = _.cloneDeep(this.addForm)
        form.goods_cat = form.goods_cat.join(&#39;,&#39;)
        // 处理动态参数
        this.manyTableData.forEach(item =&gt; {
          const newInfo = {
            attr_id: item.attr_id,
            attr_value: item.attr_vals.join(&#39; &#39;)
          }
          this.addForm.attrs.push(newInfo)
        })
        // 处理静态属性
        this.onlyTableData.forEach(item =&gt; {
          const newInfo = { attr_id: item.attr_id, attr_value: item.attr_vals }
          this.addForm.attrs.push(newInfo)
        })
        form.attrs = this.addForm.attrs
        console.log(form)

        // 发起请求添加商品
        // 商品的名称，必须是唯一的
        const { data: res } = await this.$http.post(&#39;goods&#39;, form)

        if (res.meta.status !== 201) {
          return this.$message.error(&#39;添加商品失败！&#39;)
        }

        this.$message.success(&#39;添加商品成功！&#39;)
        this.$router.push(&#39;/goods&#39;)
      })
    }
  },
  computed: {
    cateId() {
      if (this.addForm.goods_cat.length === 3) {
        return this.addForm.goods_cat[2]
      }
      return null
    }
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="三、功能实现" tabindex="-1"><a class="header-anchor" href="#三、功能实现" aria-hidden="true">#</a> <strong>三、功能实现</strong></h1><p><strong><strong>登陆验证</strong></strong></p><p>登陆表单结构</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;el-form :model=&quot;loginForm&quot; :rules=&quot;loginFormRules&quot; ref=&quot;loginFormRef&quot; class=&quot;login_form&quot;&gt;
  &lt;!-- 用户名 --&gt;
  &lt;el-form-item prop=&quot;username&quot;&gt;
    &lt;el-input v-model=&quot;loginForm.username&quot; prefix-icon=&quot;iconfont icon-user&quot; placeholder=&quot;请输入用户名&quot;&gt;&lt;/el-input&gt;
  &lt;/el-form-item&gt;
  &lt;!-- 密码 --&gt;
  &lt;el-form-item prop=&quot;password&quot;&gt;
    &lt;el-input v-model=&quot;loginForm.password&quot; prefix-icon=&quot;iconfont icon-3702mima&quot; placeholder=&quot;请输入密码&quot; type=&quot;password&quot;&gt;&lt;/el-input&gt;
  &lt;/el-form-item&gt;
  &lt;!-- 按钮 --&gt;
  &lt;el-form-item class=&quot;btns&quot;&gt;
    &lt;el-button type=&quot;primary&quot; @click=&quot;login&quot;&gt;登录&lt;/el-button&gt;
    &lt;el-button type=&quot;info&quot; @click=&quot;resetLoginForm&quot;&gt;重置&lt;/el-button&gt;
  &lt;/el-form-item&gt;
&lt;/el-form&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>data数据</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>loginForm: {
  username: &#39;admin&#39;,
  password: &#39;123456&#39;
},
loginFormRules: {
  // 验证登录用户名
  username: [
    { required: true, message: &#39;请输入登录名称&#39;, trigger: &#39;blur&#39; },
    { min: 3, max: 10, message: &#39;长度在 3 到 10 个字符&#39;, trigger: &#39;blur&#39; }
  ],
  // 验证登录密码
  password: [
    { required: true, message: &#39;请输入登录密码&#39;, trigger: &#39;blur&#39; },
    { min: 6, max: 12, message: &#39;长度在 6 到 12 个字符&#39;, trigger: &#39;blur&#39; }
  ]
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>表单验证 保存token</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 重置表单
resetLoginForm() {
  this.$refs.loginFormRef.resetFields()
},
// 登录验证
login() {
  this.$refs.loginFormRef.validate(async valid =&gt; {
    if (!valid) return false
    const { data: res } = await this.$http.post(&#39;login&#39;, this.loginForm)
    if (res.meta.status !== 200) {
      return this.$message.error(&#39;登录失败！&#39;)
    } else {
      this.$message.success(&#39;登录成功！&#39;)
      // 1. 将登录成功之后的token保存到客户端的 sessionStorage 中
      // 1.1 项目中除了登录之外的其他api接口，必须在登录之后才能访问
      // 1.2 token 只应在当前网站打开期间生效，所以将 token 保存在 sessionStorage 中
      window.sessionStorage.setItem(&#39;token&#39;, res.data.token)
      // 2. 通过编程式导航跳转到后台主页，路由地址是 /home
      this.$router.push(&#39;/home&#39;)
    }
  })
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>退出登录</strong></strong></p><p><strong>绑定退出按钮</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;el-button type=&quot;info&quot; @click=&quot;logout&quot;&gt;退出&lt;/el-button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>退出方法 methods中</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>logout() {
  window.sessionStorage.clear()
  this.$router.push(&#39;/login&#39;)
},

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>设置长时间未操作登录自动到期重新返回登录页</strong></strong></p><p>在main.js中</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import routerUtil from &quot;@/utils/routerutil&quot;; // 先将js文件在main.js中引入

routerUtil(router);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在登陆成功后调用sessionUtil文件中的setSession，sessionUtil</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import sessionUtil from &#39;@/utils/sessionutil&#39;

sessionUtil.setSession(&quot;userInfo&quot;, &#39;2&#39;);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在routerutil.js文件中</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import sessionUtil from &quot;./sessionutil&quot;;
const whiteList = [&quot;/&quot;,&#39;/logins&#39;]; // 路由白名单，不需要校验

export default router =&gt; {
  router.beforeEach(async (to, from, next) =&gt; {/*在跳转之前执行*/
    const userInfo = sessionUtil.getSession(&quot;userInfo&quot;);//触发sessionUtil中的getSession方法
      if ( userInfo ) {
      } else {
      if (whiteList.indexOf(to.path) !== -1) {
        next();
      } else {
        Message({
          type: &quot;warning&quot;,
          message: &quot;用户登录过期，请重新登录&quot;,
          duration: 1500,
          onClose() {
            next(\`/\`);
          }
        });
      }
    }
  });
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在sessionutil.js文件中</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const sessionutil = {
  setSession(key,value,maxAge){ //key=userInfo  value=2  maxAge=&#39;&#39;  ||  可自行设置
    const maxAgeTime = new Date().getTime() + 1000 * 3600; // 当前时间的+1小时 session 过期时间
    try{
      let data = { value, maxAge: maxAge ? maxAge : maxAgeTime }
      sessionStorage.setItem(typeof key === &#39;string&#39;?key: JSON.stringify(key),JSON.stringify(data))
    }catch(err){
    }
  },
  getSession(key){
    try{
      const maxAgeTime = new Date().getTime() + 1000 * 3600; // 首先先设置一个 session 过期时间 1H后可自行设置
      let date = new Date().getTime();  //当前时间
      let session  = JSON.parse(sessionStorage.getItem(typeof key === &#39;string&#39;?key: JSON.stringify(key)));
      if(session &amp;&amp; session.maxAge != null &amp;&amp; session.maxAge-date &gt; 0 &amp;&amp; session.maxAge &lt;= maxAgeTime ){
        this.setSession(key,session.value);
        return session.value;
      } else {
        return null;
      }
    }catch(err){
    }
  },
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>VueX实践</strong></strong></p><p>在项目的src目录下新建一个目录store，在该目录下新建一个index.js文件，我们用来创建vuex实例，然后在该文件中引入vue和vuex，创建Vuex.Store实例保存到变量store中，最后使用export default导出store</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import Vue from &#39;vue&#39;
import Vuex from &#39;vuex&#39;

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在main.js文件中引入该文件，在文件里面添加 import store from ‘./store’;，再在vue实例全局引入store对象</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import Vue from &#39;vue&#39;
import App from &#39;./App.vue&#39;
import router from &#39;./router&#39;
import store from &#39;./store&#39;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h =&gt; h(App)
}).$mount(&#39;#app&#39;)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>State：vuex中的数据源，一般用来保存数据，例如登录人的id，name，等等信息</p><p>Getters：Getter相当于vue中的computed计算属性，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算，这里我们可以通过定义vuex的Getter来获取，Getters 可以用于监听、state中的值的变化，返回计算后的结果</p><h1 id="三、第三方组件使用" tabindex="-1"><a class="header-anchor" href="#三、第三方组件使用" aria-hidden="true">#</a> <strong>三、第三方组件使用</strong></h1><p><strong><strong>Vue轻量级富文本编辑器-Vue-Quill-Editor</strong></strong></p><p><strong>下载Vue-Quill-Editor</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install vue-quill-editor --save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>下载quill（Vue-Quill-Editor需要依赖）</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install quill --save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>在main.js中导入</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 导入富文本编辑器
import VueQuillEditor from &#39;vue-quill-editor&#39;
// require styles 导入富文本编辑器对应的样式
import &#39;quill/dist/quill.core.css&#39;
import &#39;quill/dist/quill.snow.css&#39;
import &#39;quill/dist/quill.bubble.css&#39;

// 将富文本编辑器，注册为全局可用的组件
Vue.use(VueQuillEditor)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>页面组件使用</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
&lt;template&gt;
  &lt;div class=&quot;edit_container&quot;&gt;
    &lt;quill-editor
      v-model=&quot;content&quot;
      ref=&quot;myQuillEditor&quot;
      :options=&quot;editorOption&quot;
      @blur=&quot;onEditorBlur($event)&quot; @focus=&quot;onEditorFocus($event)&quot;
      @change=&quot;onEditorChange($event)&quot;&gt;
    &lt;/quill-editor&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
import { quillEditor } from &quot;vue-quill-editor&quot;; //调用编辑器
import &#39;quill/dist/quill.core.css&#39;;
import &#39;quill/dist/quill.snow.css&#39;;
import &#39;quill/dist/quill.bubble.css&#39;;
export default {
  components: {
    quillEditor
  },
  data() {
    return {
      content: \`&lt;p&gt;&lt;/p&gt;&lt;p&gt;&lt;br&gt;&lt;/p&gt;&lt;ol&gt;&lt;li&gt;&lt;strong&gt;&lt;em&gt;Or drag/paste an image here.&lt;/em&gt;&lt;/strong&gt;&lt;/li&gt;&lt;li&gt;&lt;strong&gt;&lt;em&gt;rerew&lt;/em&gt;&lt;/strong&gt;&lt;/li&gt;&lt;li&gt;&lt;strong&gt;&lt;em&gt;rtrete&lt;/em&gt;&lt;/strong&gt;&lt;/li&gt;&lt;li&gt;&lt;strong&gt;&lt;em&gt;tytrytr&lt;/em&gt;&lt;/strong&gt;&lt;/li&gt;&lt;li&gt;&lt;strong&gt;&lt;em&gt;uytu&lt;/em&gt;&lt;/strong&gt;&lt;/li&gt;&lt;/ol&gt;\`,
      editorOption: {}
    }
  },
  methods: {
    onEditorReady(editor) { // 准备编辑器

    },
    onEditorBlur(){}, // 失去焦点事件
    onEditorFocus(){}, // 获得焦点事件
    onEditorChange(){}, // 内容改变事件
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    },
  }
}
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>swipper</strong></strong></p><p>下载组件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install swiper
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用组件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template  style=&quot;touch-action:none;&quot;&gt;
  &lt;swiper :options=&quot;swiperOption&quot; class=wrapper&gt;
    &lt;swiper-slide v-for=&quot;item of swiperList&quot; :key=&quot;item.id&quot;&gt;
      &lt;img class=&quot;swiper-img&quot; v-bind:src=&quot;item.imgUrl&quot;&gt;
    &lt;/swiper-slide&gt;
    &lt;div class=&quot;swiper-pagination&quot;  slot=&quot;pagination&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;swiper-button-prev&quot; slot=&quot;button-prev&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;swiper-button-next&quot; slot=&quot;button-next&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;swiper-scrollbar&quot;   slot=&quot;scrollbar&quot;&gt;&lt;/div&gt;
  &lt;/swiper&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  name: &#39;carrousel&#39;,
  props:[&#39;swiperList&#39;],
  data () {
    return {
      swiperOption: {
          loop:true,
          pagination:{
              el:&#39;.swiper-pagination&#39;,
              clickable:true,
          },
          navigation: {
            nextEl: &#39;.swiper-button-next&#39;,
            prevEl: &#39;.swiper-button-prev&#39;,
          },
          scrollbar: {
            el: &#39;.swiper-scrollbar&#39;,
          },
      }
    }
  }
}
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>better-scroll</strong></strong></p>`,114),o={href:"https://blog.csdn.net/senmage/article/details/82388728",target:"_blank",rel:"noopener noreferrer"};function m(c,b){const n=l("ExternalLinkIcon");return t(),d("div",null,[u,e("p",null,[i("本文参考："),e("a",o,[i("Vue轻量级富文本编辑器-Vue-Quill-Editor"),a(n)])])])}const p=s(v,[["render",m],["__file","Vue项目开发.html.vue"]]);export{p as default};
