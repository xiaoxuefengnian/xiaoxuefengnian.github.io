(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{701:function(t,r,e){"use strict";e.r(r);var a=e(27),n=Object(a.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"electron"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#electron"}},[t._v("#")]),t._v(" electron")]),t._v(" "),e("p",[t._v("先简单快速了解下")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.bilibili.com/video/av65972154?from=search&seid=9625749770332205007",target:"_blank",rel:"noopener noreferrer"}},[t._v("一个小时内构建一个 Electron 应用【中英双语】"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.zhangxinxu.com/wordpress/2017/05/electron-node-js-desktop-application-experience/",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用 electron 构建跨平台 Node.js 桌面应用经验分享"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("strong",[t._v("参考")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://hacpai.com/article/1536561975474",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用 electron 代理包装 web 网站"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://hacpai.com/article/1536118267393",target:"_blank",rel:"noopener noreferrer"}},[t._v("限定用户只能通过专有机器访问网站"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://hacpai.com/article/1535277215816",target:"_blank",rel:"noopener noreferrer"}},[t._v("百度不限速下载器 BND2 技术架构简介"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/24275216",target:"_blank",rel:"noopener noreferrer"}},[t._v("Electron 应用实战 (架构篇)"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"官网"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#官网"}},[t._v("#")]),t._v(" 官网")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://electronjs.org/docs",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://electronjs.org/docs/tutorial/installation",target:"_blank",rel:"noopener noreferrer"}},[t._v("国内镜像"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"多标签页"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多标签页"}},[t._v("#")]),t._v(" 多标签页")]),t._v(" "),e("p",[t._v("不侵入现有代码的方案")]),t._v(" "),e("p",[t._v("1、拦截弹窗请求")]),t._v(" "),e("p",[t._v("2、实现一个多标签的壳")]),t._v(" "),e("p",[e("strong",[t._v("参考")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/simply-coded/electron-navigation?utm_source=hacpai.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("electron-navigation"),e("OutboundLink")],1),t._v("（版本很老，但基本实现，可以使用，也可以借鉴一下思路）")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/brrd/electron-tabs",target:"_blank",rel:"noopener noreferrer"}},[t._v("electron-tabs"),e("OutboundLink")],1),t._v("（版本很老，当前环境下无法实现，排除）")]),t._v(" "),e("p",[e("strong",[t._v("实现")])]),t._v(" "),e("p",[t._v("监听 webview 的 new-window 事件")]),t._v(" "),e("p",[t._v("启用 webview 需要设置")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("webPreferences"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  webviewTag"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"图标"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#图标"}},[t._v("#")]),t._v(" 图标")]),t._v(" "),e("p",[t._v("应用图标在打包时配置")]),t._v(" "),e("h2",{attrs:{id:"发布"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#发布"}},[t._v("#")]),t._v(" 发布")]),t._v(" "),e("p",[e("strong",[t._v("参考")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.christianengvall.se/electron-packager-tutorial/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Electron packager tutorial"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("注意不同的系统对应不同的图标文件 "),e("a",{attrs:{href:"http://www.iconarchive.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("iconarchive 图标网站"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("可以添加并修改如下脚本到 package.json 中")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"package-mac"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"electron-packager . electron-tutorial-app --overwrite --platform=darwin --arch=x64 --icon=assets/icons/mac/icon.icns --prune=true --out=release-builds"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"package-win"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"electron-packager . electron-tutorial-app --overwrite --asar --platform=win32 --arch=ia32 --icon=assets/icons/win/icon.ico --prune=true --out=release-builds --version-string.CompanyName=CE --version-string.FileDescription=CE --version-string.ProductName=\\"Electron Tutorial App\\""')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"package-linux"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"electron-packager . electron-tutorial-app --overwrite --asar --platform=linux --arch=x64 --icon=assets/icons/png/1024x1024.png --prune=true --out=release-builds"')]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("注意 package-mac 指令使用的 icon 必须是 icns 图标 "),e("RouterLink",{attrs:{to:"/zh/分类/系统/mac/mac 生成 icns 图标.html"}},[t._v("mac 生成 icns 图标")])],1),t._v(" "),e("p",[t._v(". 打包目录为当前目录")]),t._v(" "),e("p",[t._v("electron-tutorial-app 应用名称")]),t._v(" "),e("p",[t._v("platform 平台")]),t._v(" "),e("p",[t._v("icon 应用图标")]),t._v(" "),e("p",[t._v("out 打包后的应用存放目录")]),t._v(" "),e("h2",{attrs:{id:"自动更新"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自动更新"}},[t._v("#")]),t._v(" 自动更新")]),t._v(" "),e("h2",{attrs:{id:"常见问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),e("h3",{attrs:{id:"打包慢-无反应"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#打包慢-无反应"}},[t._v("#")]),t._v(" 打包慢，无反应")]),t._v(" "),e("p",[t._v("electron-packager 在当前机器的首次打包前，会下载 electron 的预编译文件至当前用户，而 electron-prebuilder 的默认源在国外，在网络不好的情况下，即便有代理，速度也会非常慢。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 更换阿里镜像源")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" config "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" ELECTRON_MIRROR https://npm.taobao.org/mirrors/electron/\n")])])]),e("h3",{attrs:{id:"安装时出现权限问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装时出现权限问题"}},[t._v("#")]),t._v(" 安装时出现权限问题")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://v2ex.com/t/616680",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm 安装 electron 死活安不上"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("windows 下安装 electron-packager 出现权限问题 operation not permitted")]),t._v(" "),e("p",[t._v("删除 C:\\Users\\{账户}\\ 下的 .npmrc 文件")]),t._v(" "),e("p",[t._v("只设置淘宝源，不设置 electron 的阿里镜像源")]),t._v(" "),e("h3",{attrs:{id:"安装卡住"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装卡住"}},[t._v("#")]),t._v(" 安装卡住")]),t._v(" "),e("p",[t._v("国内安装时卡在 node install.js")]),t._v(" "),e("p",[t._v("出现 UnhandledPromiseRejectionWarning: RequestError: connect ETIMEDOUT 52.216.1.224:443")]),t._v(" "),e("p",[t._v("这是 aws 的地址")]),t._v(" "),e("p",[t._v("某次同样配置等了一段时间后就成功了，大概是个玄学")])])}),[],!1,null,null,null);r.default=n.exports}}]);