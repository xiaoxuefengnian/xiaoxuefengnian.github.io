(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{713:function(s,t,a){"use strict";a.r(t);var n=a(27),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"npm-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-配置"}},[s._v("#")]),s._v(" npm 配置")]),s._v(" "),a("p",[s._v("使用 npm config ls 可以查看 npm 的配置信息如下")]),s._v(" "),a("p",[s._v("registry: npm 安装地址")]),s._v(" "),a("p",[s._v("user-agent: 用户环境")]),s._v(" "),a("p",[s._v("prefix: 模块安装位置")]),s._v(" "),a("p",[s._v("node bin location: node 的安装位置")]),s._v(" "),a("p",[s._v("cwd: 当前路径")]),s._v(" "),a("p",[s._v("HOME: 用户主目录")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" cli configs\nmetrics-registry "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://registry.npm.taobao.org/"')]),s._v("\nscope "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\nuser-agent "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"npm/6.9.0 node/v11.2.0 darwin x64"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" userconfig /Users/zhourui/.npmrc\nprefix "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/Users/zhourui/Depository/npm-global"')]),s._v("\nregistry "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://registry.npm.taobao.org/"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" node bin location "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /usr/local/bin/node\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" cwd "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /Users/zhourui/Desktop/personal/documents/wheatear\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("HOME")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /Users/zhourui\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"npm config ls -l"')]),s._v(" to show all defaults.\n")])])]),a("h2",{attrs:{id:"修改模块安装位置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改模块安装位置"}},[s._v("#")]),s._v(" 修改模块安装位置")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" prefix /Users/zhourui/depository/npm-global\n")])])]),a("p",[s._v("修改后在使用中可能出现仍然安装在原路径的情况，这时执行")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config get cache\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 清空 npm 缓存")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" cache clean -f\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 验证缓存数据的有效性和完整性，清理垃圾数据")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" cache verify\n")])])]),a("h2",{attrs:{id:"unsafe-perm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unsafe-perm"}},[s._v("#")]),s._v(" unsafe-perm")]),s._v(" "),a("p",[s._v("官方含义")]),s._v(" "),a("ul",[a("li",[s._v("Default: false if running as root, true otherwise")]),s._v(" "),a("li",[s._v("Type: Boolean")])]),s._v(" "),a("p",[s._v("Set to true to suppress the UID/GID switching when running package scripts. If set explicitly to false, then installing as a non-root user will fail.")]),s._v(" "),a("p",[s._v("摘自网络回答 "),a("a",{attrs:{href:"https://segmentfault.com/q/1010000019365121",target:"_blank",rel:"noopener noreferrer"}},[s._v("链接"),a("OutboundLink")],1)]),s._v(" "),a("blockquote",[a("p",[s._v("就是说 npm 出于安全考虑不支持以 root 用户运行，即使你用 root 用户身份运行了，npm 会自动转成一个叫 nobody 的用户来运行，而这个用户几乎没有任何权限。这样的话如果你脚本里有一些需要权限的操作，比如写文件（尤其是写 /root/.node-gyp），就会崩掉了。")]),s._v(" "),a("p",[s._v("为了避免这种情况，要么按照 npm 的规矩来，专门建一个用于运行 npm 的高权限用户；要么加 --unsafe-perm 参数，这样就不会切换到 nobody 上，运行时是哪个用户就是哪个用户，即使是 root。")])]),s._v(" "),a("p",[s._v("默认 false 会在某些依赖包安装时提示权限不足。")])])}),[],!1,null,null,null);t.default=e.exports}}]);