(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{699:function(t,a,s){"use strict";s.r(a);var e=s(27),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"electron-vue-改造已有-vue-项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#electron-vue-改造已有-vue-项目"}},[t._v("#")]),t._v(" electron-vue 改造已有 vue 项目")]),t._v(" "),s("p",[t._v("通过 "),s("a",{attrs:{href:"https://simulatedgreg.gitbooks.io/electron-vue/content/cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("electron-vue 的 gitbook"),s("OutboundLink")],1),t._v(" 了解其项目结构")]),t._v(" "),s("h2",{attrs:{id:"选择理由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选择理由"}},[t._v("#")]),t._v(" 选择理由")]),t._v(" "),s("p",[t._v("开发环境下可以热更新，这点就够了")]),t._v(" "),s("h2",{attrs:{id:"分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分析"}},[t._v("#")]),t._v(" 分析")]),t._v(" "),s("p",[s("strong",[t._v("改造的不利点")])]),t._v(" "),s("p",[t._v("a、项目树结构不一致，如 src 目录下细分 main 和 renderer")]),t._v(" "),s("p",[t._v("b、因为有些依赖包是使用指定版本的关系，需要重新配置 package.json")]),t._v(" "),s("p",[s("strong",[t._v("改造的有利点")])]),t._v(" "),s("p",[t._v("a、webpack 的配置中 @ 的路径是 src/renderer，不需要再去配置")]),t._v(" "),s("p",[t._v("b、文件树结构及引用关系同 vue 项目下基本一致")]),t._v(" "),s("h2",{attrs:{id:"改造步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#改造步骤"}},[t._v("#")]),t._v(" 改造步骤")]),t._v(" "),s("p",[s("strong",[t._v("a、处理依赖包")])]),t._v(" "),s("p",[t._v("删除 package-lock.json")]),t._v(" "),s("p",[t._v("比对 package.json")]),t._v(" "),s("p",[t._v("npm install")]),t._v(" "),s("p",[s("strong",[t._v("b、处理 main.js")])]),t._v(" "),s("p",[t._v("npm run dev")]),t._v(" "),s("p",[t._v("比对修改 main.js")]),t._v(" "),s("p",[s("strong",[t._v("c、处理原 src 目录")])]),t._v(" "),s("p",[t._v("和 src/renderer 目录比对增量添加")]),t._v(" "),s("p",[t._v("utils - store - api - router - components")]),t._v(" "),s("p",[s("strong",[t._v("d、处理静态文件")])]),t._v(" "),s("p",[t._v("注意检查各页面样式")]),t._v(" "),s("p",[s("strong",[t._v("e、修改 eslint 规则")])]),t._v(" "),s("p",[s("strong",[t._v("f、修改 dev 的端口")])]),t._v(" "),s("p",[t._v("默认是 9080，改成自己配置的测试原 vue 项目 build 后的文件的端口")]),t._v(" "),s("h2",{attrs:{id:"常见问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),s("h3",{attrs:{id:"vuex-的-dispatch-无法使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuex-的-dispatch-无法使用"}},[t._v("#")]),t._v(" vuex 的 dispatch 无法使用")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://segmentfault.com/a/1190000018038529?utm_source=tag-newest",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("注释掉 store 目录下 index.js 的 createSharedMutations 插件。")]),t._v(" "),s("p",[t._v("或")]),t._v(" "),s("p",[t._v("在主进程中加上了这一句：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../renderer/store"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"开发环境设置代理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发环境设置代理"}},[t._v("#")]),t._v(" 开发环境设置代理")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://blog.csdn.net/qq_32614411/article/details/80882131",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("在 .electron-vue/dev-runner.js 文件中引入 http-proxy-middleware 中间件")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" httpProxyMiddleware "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http-proxy-middleware"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("在 server.listen(9080) 之前添加代码")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("server"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("httpProxyMiddleware")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    target"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"目标服务器地址"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    changeOrigin"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nserver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9080")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("对于原 vue 项目中形如")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("proxyTable"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/**/*'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        target"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://192.168.1.1:8080/'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 目标接口域名")]),t._v("\n        changeOrigin"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否跨域")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[t._v("则写为")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("server"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("httpProxyMiddleware")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/**/*"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    target"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://192.168.1.1:8080/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 目标接口域名")]),t._v("\n    changeOrigin"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否跨域")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"animate-css-引入报错"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#animate-css-引入报错"}},[t._v("#")]),t._v(" animate.css 引入报错")]),t._v(" "),s("p",[t._v("在原 vue 项目中")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// main.js 中引入")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" animated "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"animate.css"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用")]),t._v("\nVue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("animated"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("会报错，类似于")]),t._v(" "),s("p",[t._v("Uncaught SyntaxError: Invalid or unexpected token")]),t._v(" "),s("p",[t._v("解决方案，在 .electron-vue/webpack.renderer.config.js 的 whiteListedModules 中加入 'animate.css'")]),t._v(" "),s("h3",{attrs:{id:"element-ui-样式错误"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#element-ui-样式错误"}},[t._v("#")]),t._v(" element-ui 样式错误")]),t._v(" "),s("p",[t._v("常见如组件不显示，table 高度为 0 等")]),t._v(" "),s("p",[t._v("在 .electron-vue/webpack.renderer.config.js 的 whiteListedModules 中加入 'element-ui'")])])}),[],!1,null,null,null);a.default=n.exports}}]);