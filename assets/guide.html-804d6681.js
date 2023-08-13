import{_ as t,V as i,W as r,X as e,Y as n,$ as o,Z as s,F as d}from"./framework-44a66fc7.js";const l={},c=s('<h1 id="入门指南" tabindex="-1"><a class="header-anchor" href="#入门指南" aria-hidden="true">#</a> 入门指南</h1><p>Go语言诞生于2007年9月30日，由三位大佬共同创造，他们分别是<code>Ken Thompson</code>(贝尔实验室成员，Unix系统系统先驱，B语言创始人，C语言创始人)，<code>Rob Pike </code>（贝尔实验室成员，Unix系统先驱，UTF-8发明者之一，Go语言设计领头人），<code>Robert Griesemer</code>(JS V8引擎研发者，三人之中最年轻)，对了还有一位是领头人的妻子<code>Renee French</code>，她主导设计了Go语言的Logo，就是一只憨憨的土拨鼠，经过了三年的初步设计与研发，Go语言由谷歌公司于2009年11月10日正式以<code>BSD-3-Clause</code>协议开源，并推出了最初的版本，每半年发布一个二级版本，被称为21世界的C语言。</p><figure><img src="https://camo.githubusercontent.com/2b507540e2681c1a25698f246b9dca69c30548ed66a7323075b0224cbb1bf058/68747470733a2f2f676f6c616e672e6f72672f646f632f676f706865722f6669766579656172732e6a7067" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="hint-container tip"><p class="hint-container-title">提示</p><p>图中便是三位大佬设计Go语言的情景，里面不少典故和彩蛋。</p></div><h2 id="特性" tabindex="-1"><a class="header-anchor" href="#特性" aria-hidden="true">#</a> 特性</h2><ul><li><strong>语法简单</strong> Go在自由与灵活上做了取舍，以此换来了更好的维护性和更低的学习难度。</li><li><strong>交叉编译</strong> 允许跨平台编译代码。</li><li><strong>天然并发</strong> Go语言对并发的支持是纯天然的，语法上只需要一个<code>go</code>关键字就能开启一个协程。</li><li><strong>垃圾回收</strong> GC算不上很出色，但还比较靠谱。</li><li><strong>静态链接</strong> 简化了部署操作，无需安装任何运行环境和诸多第三方库。</li><li><strong>内存分配</strong> 可以说，除偶尔因性能问题而被迫采用对象池和自主内存管理外，基本无须参与内存管理操作。</li></ul><p>Go语言抛弃了继承，弱化了OOP，类，元编程，泛型，Lamda表达式等这些特性，拥有不错的性能和较低的上手难度。Go语言非常适合用于云服务开发，应用服务端开发，甚至可以进行部分Linux嵌入式开发，不过由于带有垃圾回收，其性能肯定无法媲美C/C++这类系统级语言，但Go在其擅长的领域表现十分出色。虽然面世只有13年，但也已经有大量的行业采用了Go作为首选语言，总的来说这是一门非常年轻且具有活力的现代语言，值得一学。</p><br>',8),p={href:"https://github.com/golang/go",target:"_blank",rel:"noopener noreferrer"},u={href:"https://go.dev/",target:"_blank",rel:"noopener noreferrer"},h=e("p",null,"此外，Go还是一门完全开源的语言，由开源社区和官方共同维护Go语言的发展，官方地址是在谷歌仓库里，但是Github上有一份同样的镜像仓库。",-1),g=e("br",null,null,-1),b=e("h2",{id:"安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),n(" 安装")],-1),_={href:"https://go.dev/dl/",target:"_blank",rel:"noopener noreferrer"},m=s(`<p>官方已经将所有打包好的安装包放在了<code>Featured downloads</code>一栏，根据自己的平台选择即可，由于安装包是自动配置所有的环境变量，如果修改了安装路径就需要后续自行配置所有的环境变量，安装完毕后在打开命令行输入<code>go version</code>：</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token function">PS</span> C:\\Users\\Stranger&gt; go version
go version go1<span class="token punctuation">.</span>19<span class="token punctuation">.</span>3 windows/amd64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>能够正确显示版本即可。</p><br><h2 id="开发工具" tabindex="-1"><a class="header-anchor" href="#开发工具" aria-hidden="true">#</a> 开发工具</h2><h4 id="vscode" tabindex="-1"><a class="header-anchor" href="#vscode" aria-hidden="true">#</a> Vscode</h4><p>Vscode是一款开源的代码编辑器，有许多拓展和插件，支持许多语言，也包括Go语言。</p>`,7),v={href:"https://blog.csdn.net/AdolphKevin/article/details/105480530",target:"_blank",rel:"noopener noreferrer"},f=e("br",null,null,-1),G=e("h4",{id:"goland",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#goland","aria-hidden":"true"},"#"),n(" Goland")],-1),k=e("p",null,"Goland是JetBrain旗下的为Go语言打造的智能编辑器，不过由于要付费，请根据自身情况选择。",-1),x={href:"https://blog.csdn.net/m0_46685221/article/details/115051174",target:"_blank",rel:"noopener noreferrer"},w=s(`<h2 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始" aria-hidden="true">#</a> 快速开始</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, 世界&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Hello, 世界

Program exited.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当一切准备好后，就可以开始学习Go的基础语法了。</p><h2 id="寄语" tabindex="-1"><a class="header-anchor" href="#寄语" aria-hidden="true">#</a> 寄语</h2><p>在学习的过程中遇到琢磨不透的困难可以先跳过，学习任何一门语言都是先笼统的了解这个语言的大致语法与结构，再去深究一些特性和细节，教程中的理念也是如此，适合入门学习。笔者本人也仅仅只是一名普通学生，难免会有疏漏和勘误，如果有发现任何错误可以在Github提交PR，如果觉得文档还不错可以在Github上点一个Star。</p>`,7);function C(S,V){const a=d("ExternalLinkIcon");return i(),r("div",null,[c,e("p",null,[n("Go语言仓库地址："),e("a",p,[n("golang/go: The Go programming language (github.com)"),o(a)])]),e("p",null,[n("Go语言官网："),e("a",u,[n("The Go Programming Language"),o(a)])]),h,g,b,e("p",null,[n("Go语言下载："),e("a",_,[n("Downloads - The Go Programming Language"),o(a)])]),m,e("p",null,[n("教程："),e("a",v,[n("(82条消息) VSCode搭建Go开发环境（2020-04-13更新）_闹闹吃鱼的博客-CSDN博客_vscode配置go语言开发环境"),o(a)])]),f,G,k,e("p",null,[n("教程："),e("a",x,[n("(82条消息) Go语言下载安装教程|Goland配置教程|2021|Windows_付友友友的博客-CSDN博客_goland社区版"),o(a)])]),w])}const L=t(l,[["render",C],["__file","guide.html.vue"]]);export{L as default};