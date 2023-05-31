(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{707:function(t,a,s){"use strict";s.r(a);var e=s(27),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[t._v("#")]),t._v(" Git")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://git-scm.com/book/zh/v2",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git book"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"常用指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用指令"}},[t._v("#")]),t._v(" 常用指令")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://git-scm.com/book/zh/v2/%E9%99%84%E5%BD%95-C%3A-Git-%E5%91%BD%E4%BB%A4-%E5%BF%AB%E7%85%A7%E5%9F%BA%E7%A1%80",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git-命令-快照基础"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看状态")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加所有文件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提交并添加注释")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"提交注释"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 推送到远程分支")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push\n")])])]),s("p",[t._v("图形化操作工具 gitk")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 仓库目录下输入 gitk 命令即可打开")]),t._v("\ngitk\n")])])]),s("h2",{attrs:{id:"特殊情形"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#特殊情形"}},[t._v("#")]),t._v(" 特殊情形")]),t._v(" "),s("h3",{attrs:{id:"撤回-commit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#撤回-commit"}},[t._v("#")]),t._v(" 撤回 commit")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 撤回 commit 操作，代码仍然保留")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --soft HEAD^\n")])])]),s("p",[t._v("HEAD^ 的意思是上一个版本，也可以写成 HEAD~1")]),t._v(" "),s("p",[t._v("如果你进行了 2 次 commit，想都撤回，可以使用 HEAD~2")]),t._v(" "),s("p",[s("strong",[t._v("参数")])]),t._v(" "),s("p",[t._v("--mixed")]),t._v(" "),s("p",[t._v("不删除工作空间改动代码，撤销 commit，并且撤销 git add . 操作\n这个为默认参数，git reset --mixed HEAD^ 和 git reset HEAD^ 效果是一样的")]),t._v(" "),s("p",[t._v("--soft")]),t._v(" "),s("p",[t._v("不删除工作空间改动代码，撤销 commit，不撤销 git add .")]),t._v(" "),s("p",[t._v("--hard")]),t._v(" "),s("p",[t._v("删除工作空间改动代码，撤销 commit，撤销 git add .")]),t._v(" "),s("p",[t._v("注意完成这个操作后，就恢复到了上一次的 commit 状态")]),t._v(" "),s("h3",{attrs:{id:"重写-commit-注释"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重写-commit-注释"}},[t._v("#")]),t._v(" 重写 commit 注释")]),t._v(" "),s("p",[t._v("如果 commit 注释写错了，只是想改一下注释，只需要：")]),t._v(" "),s("p",[t._v("git commit --amend")]),t._v(" "),s("p",[t._v("此时会进入默认 vim 编辑器，修改注释完毕后保存")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("只针对最后一次 commit 的注释")]),t._v(" "),s("p",[t._v("对于 commit 但未 push 的，会直接修改注释")]),t._v(" "),s("p",[t._v("对于 commit 且已 push 的，会在本地以新的注释重新提交一次，远程仍是原来的注释，需要在后面 merge 一下")])]),t._v(" "),s("h3",{attrs:{id:"忽略已追踪的文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#忽略已追踪的文件"}},[t._v("#")]),t._v(" 忽略已追踪的文件")]),t._v(" "),s("p",[t._v("对于已经 track 的文件，添加到 .gitignore 中，仍然会被 track 到的解决方法")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 执行")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" --cached dir_name/file_name -r\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提交")]),t._v("\n")])])]),s("h3",{attrs:{id:"查看公钥"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看公钥"}},[t._v("#")]),t._v(" 查看公钥")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" ~/.ssh/id_rsa.pub\n")])])]),s("h3",{attrs:{id:"查看分支图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看分支图"}},[t._v("#")]),t._v(" 查看分支图")]),t._v(" "),s("p",[t._v("--oneline \t日志单行显示\n--graph\t\t分支图显示\n--decorate \t可显示分支名称\n--all\t\t显示所有分支")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --oneline --graph --decorate --all\n")])])]),s("h3",{attrs:{id:"压缩合并-squash-merge"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#压缩合并-squash-merge"}},[t._v("#")]),t._v(" 压缩合并 squash merge")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge --squash commit1 commit2 commit3 \n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);