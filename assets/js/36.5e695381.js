(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{704:function(e,t,a){"use strict";a.r(t);var s=a(27),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"git-变基"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-变基"}},[e._v("#")]),e._v(" Git 变基")]),e._v(" "),a("h2",{attrs:{id:"变基-vs-合并"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变基-vs-合并"}},[e._v("#")]),e._v(" 变基 vs 合并")]),e._v(" "),a("p",[e._v("1.看公司的策略。有的公司认为提交历史就是实际发生过的事件的记录。它是一个记载着历史的“史书”，自有其价值，而且不能随意篡改。从这个角度来说，是不允许更改提交历史，也就不能使用变基了。")]),e._v(" "),a("p",[e._v("2.还有另外一个角度是，提交历史是关于项目如何被构建的故事。就像我们写的软件，一定是整理好了才发出去，使得后来的人能够更好的理解项目的构建。这时候就推荐使用变基。")]),e._v(" "),a("p",[e._v("总的原则是，只对尚未推送或分享给别人的本地修改执行变基操作清理历史，从不对已推送至别处的提交执行变基操作，")]),e._v(" "),a("h2",{attrs:{id:"自动变基设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动变基设置"}},[e._v("#")]),e._v(" 自动变基设置")]),e._v(" "),a("p",[e._v("--global 为所有仓库设置")]),e._v(" "),a("p",[e._v("当 pull.rebase 为 true 时，运行不带选项的命令 git pull 相当于执行 git pull --rebase")]),e._v(" "),a("p",[e._v("rebase.autoStash 在每次 rebase 的时候都自动把我们工作区里的内容自动 stash 进去，rebase 完成之后再自动恢复出来")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" config --global pull.rebase "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" config --global rebase.autoStash "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("\n")])])]),a("p",[e._v("如果有冲突，则在解决完冲突之后，执行一下 git rebase --continue 就好。")]),e._v(" "),a("p",[e._v("以下是 gitbook 对相关配置的释义")]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("pull.ff")])]),e._v(" "),a("p",[e._v("By default, Git does not create an extra merge commit when merging a commit that is a descendant of the current commit. Instead, the tip of the current branch is fast-forwarded. When set to false, this variable tells Git to create an extra merge commit in such a case (equivalent to giving the --no-ff option from the command line). When set to only, only such fast-forward merges are allowed (equivalent to giving the --ff-only option from the command line). This setting overrides merge.ff when pulling.")]),e._v(" "),a("hr"),e._v(" "),a("p",[a("strong",[e._v("pull.rebase")])]),e._v(" "),a("p",[e._v('When true, rebase branches on top of the fetched branch, instead of merging the default branch from the default remote when "git pull" is run. See "branch.<name>.rebase" for setting this on a per-branch basis.')]),e._v(" "),a("p",[e._v("When merges (or just m), pass the --rebase-merges option to git rebase so that the local merge commits are included in the rebase (see git-rebase[1] for details).\nWhen the value is interactive (or just i), the rebase is run in interactive mode.")]),e._v(" "),a("p",[e._v("NOTE: this is a possibly dangerous operation; do not use it unless you understand the implications (see git-rebase[1] for details).")]),e._v(" "),a("hr"),e._v(" "),a("p",[a("strong",[e._v("rebase.autoStash")])]),e._v(" "),a("p",[e._v("When set to true, automatically create a temporary stash entry before the operation begins, and apply it after the operation ends. This means that you can run rebase on a dirty worktree. However, use with care: the final stash application after a successful rebase might result in non-trivial conflicts. This option can be overridden by the --no-autostash and --autostash options of git-rebase[1]. Defaults to false.")])])])}),[],!1,null,null,null);t.default=r.exports}}]);