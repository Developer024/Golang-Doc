import{_ as t,V as o,W as i,X as n,Y as s,$ as e,Z as c,F as l}from"./framework-44a66fc7.js";const p={},u=n("h1",{id:"swag",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#swag","aria-hidden":"true"},"#"),s(" swag")],-1),r=n("p",null,[s("swaggo/swag是Swagger API 2.0在go语言中的一个实现，通过在书写指定格式的注释就可以生成"),n("code",null,"swagger.json"),s("和"),n("code",null,"swagger.yaml"),s("类型的接口文档，方便导出和导入。")],-1),d={href:"https://github.com/swaggo/swag",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/swaggo/swag#readme",target:"_blank",rel:"noopener noreferrer"},m=n("p",null,"swag默认支持的web框架如下所示，本文以gin为例子，来演示gin结合swagger快速生成接口文档的例子。",-1),v={href:"http://github.com/swaggo/gin-swagger",target:"_blank",rel:"noopener noreferrer"},k={href:"http://github.com/swaggo/echo-swagger",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/swaggo/buffalo-swagger",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/swaggo/http-swagger",target:"_blank",rel:"noopener noreferrer"},w={href:"https://github.com/swaggo/http-swagger",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/swaggo/http-swagger",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/i-love-flamingo/swagger",target:"_blank",rel:"noopener noreferrer"},x={href:"https://github.com/gofiber/swagger",target:"_blank",rel:"noopener noreferrer"},q={href:"https://github.com/Nerzal/atreugo-swagger",target:"_blank",rel:"noopener noreferrer"},y={href:"https://github.com/hertz-contrib/swagger",target:"_blank",rel:"noopener noreferrer"},S={class:"hint-container tip"},P=n("p",{class:"hint-container-title"},"提示",-1),A={href:"https://swagger.io/docs/specification/about/",target:"_blank",rel:"noopener noreferrer"},E=c(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>首先下载swagger命令行工具</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>go install github.com/swaggo/swag/cmd/swag@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后下载swagger依赖</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>go get github.com/swaggo/swag
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后下载swagger的静态文件库，html，css，js之类的，都被嵌到了go代码中。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>go get github.com/swaggo/files@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>最后下载swagger的gin适配库</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>go get github.com/swaggo/gin-swagger@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><p>使用go mod创建一个最基本的go项目，新建<code>main.go</code>，写入如下内容。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;github.com/gin-gonic/gin&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// @title           Swagger Example API</span>
<span class="token comment">// @version         1.0</span>
<span class="token comment">// @description     This is a sample server celler server.</span>

<span class="token comment">// @contact.name   API Support</span>
<span class="token comment">// @contact.url    http://www.swagger.io/support</span>
<span class="token comment">// @contact.email  support@swagger.io</span>

<span class="token comment">// @BasePath  /api/v1</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	engine <span class="token operator">:=</span> gin<span class="token punctuation">.</span><span class="token function">Default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	engine<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/api/v1/ping&quot;</span><span class="token punctuation">,</span> Ping<span class="token punctuation">)</span>
	engine<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token string">&quot;:80&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// Ping godoc</span>
<span class="token comment">// @Summary      say hello world</span>
<span class="token comment">// @Description  return hello world json format content</span>
<span class="token comment">// @param       name query    string  true  &quot;name&quot;</span>
<span class="token comment">// @Tags         system</span>
<span class="token comment">// @Produce      json</span>
<span class="token comment">// @Router       /ping [get]</span>
<span class="token keyword">func</span> <span class="token function">Ping</span><span class="token punctuation">(</span>ctx <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	ctx<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
		<span class="token string">&quot;message&quot;</span><span class="token punctuation">:</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World!%s&quot;</span><span class="token punctuation">,</span> ctx<span class="token punctuation">.</span><span class="token function">Query</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是一个很简单的gin web例子，main函数上的注释是文档的基本信息，Ping函数则是一个普通的接口。接下来执行命令生成文档，默认是在<code>main.go</code>同级的docs目录下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>swag init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改<code>main.go</code>代码</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;github.com/gin-gonic/gin&quot;</span>
    swaggerFiles <span class="token string">&quot;github.com/swaggo/files&quot;</span>
    ginSwagger <span class="token string">&quot;github.com/swaggo/gin-swagger&quot;</span>
    <span class="token comment">// 匿名导入生成的接口文档包</span>
    <span class="token boolean">_</span> <span class="token string">&quot;golearn/docs&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// @title           Swagger Example API</span>
<span class="token comment">// @version         1.0</span>
<span class="token comment">// @description     This is a sample server celler server.</span>

<span class="token comment">// @contact.name   API Support</span>
<span class="token comment">// @contact.url    http://www.swagger.io/support</span>
<span class="token comment">// @contact.email  support@swagger.io</span>

<span class="token comment">// @BasePath  /api/v1</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    engine <span class="token operator">:=</span> gin<span class="token punctuation">.</span><span class="token function">Default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 注册swagger静态文件路由</span>
    engine<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/swagger/*any&quot;</span><span class="token punctuation">,</span> ginSwagger<span class="token punctuation">.</span><span class="token function">WrapHandler</span><span class="token punctuation">(</span>swaggerFiles<span class="token punctuation">.</span>Handler<span class="token punctuation">)</span><span class="token punctuation">)</span>
    engine<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/api/v1/ping&quot;</span><span class="token punctuation">,</span> Ping<span class="token punctuation">)</span>
    engine<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token string">&quot;:80&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// Ping godoc</span>
<span class="token comment">// @Summary      say hello world</span>
<span class="token comment">// @Description  return hello world json format content</span>
<span class="token comment">// @param       name query    string  true  &quot;name&quot;</span>
<span class="token comment">// @Tags         system</span>
<span class="token comment">// @Produce      json</span>
<span class="token comment">// @Router       /ping [get]</span>
<span class="token keyword">func</span> <span class="token function">Ping</span><span class="token punctuation">(</span>ctx <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ctx<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
       <span class="token string">&quot;message&quot;</span><span class="token punctuation">:</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World!%s&quot;</span><span class="token punctuation">,</span> ctx<span class="token punctuation">.</span><span class="token function">Query</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行程序，访问<code>127.0.0.1/swagger/index.html</code>，界面如下</p><figure><img src="https://public-1308755698.cos.ap-chongqing.myqcloud.com//img/202308132014682.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>如此便运行起了一个基本的接口文档。接下来除了一些特别要注意的点，基本上和其他语言使用起来没有什么太大的差别。</p><h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h2><ol><li><p>swag是根据注释来生成openapi的接口描述文件的，在生成时，指定的目录必须要包含接口文档的基本信息，默认是在<code>main.go</code>里面查找</p></li><li><p><code>swag init</code>默认指定的是当前目录，值为<code>./</code>，可以使用<code>swag init -d</code>指定多个目录，使用逗号分隔，第一个指定的目录必须包含接口文档的基本信息。例如</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>swag init -d ./,./api
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><code>-g</code>，接口文档的基本信息的存放文件可以自定义文件名，默认是<code>main.go</code>，在生成文档时，使用<code>-g</code>参数指定文件名</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>swag init -g api.go -d ./,./api
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该命令的意思是在<code>./api.go</code>解析接口文档的基本信息，同时在<code>./</code>和<code>./api</code>两个目录下查找和解析其他接口的注释信息并生成对应的文档。</p></li><li><p><code>-o</code>参数可以指定文档描述文件的输出路径，默认是<code>./docs</code>，例:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>swag init -o ./api/docs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><code>--ot</code>可以指定输出文件类型，默认是（docs.go,swagger.json,swagger.yaml），如果想要使用go程序加载swagger ui，go文件是必不可少的。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>swag init --ot go,yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其余生成的json和yaml文件可以方便在其他接口管理软件上导入数据。</p></li><li><p>注释写在哪里都一样，就算不写在函数上也一样能解析，只是写在函数上可读性好一些，本质上还是一个以注释形式和go源代码嵌在一起的DSL。</p></li><li><p>swag还支持很多其他的参数，可以使用<code>swag init -h</code>查看。</p></li></ol>`,21);function T(I,j){const a=l("ExternalLinkIcon");return o(),i("div",null,[u,r,n("p",null,[s("仓库："),n("a",d,[s("swaggo/swag: Automatically generate RESTful API documentation with Swagger 2.0 for Go. (github.com)"),e(a)])]),n("p",null,[s("文档："),n("a",g,[s("swaggo/swag: Automatically generate RESTful API documentation with Swagger 2.0 for Go. (github.com)"),e(a)])]),m,n("ul",null,[n("li",null,[n("a",v,[s("gin"),e(a)])]),n("li",null,[n("a",k,[s("echo"),e(a)])]),n("li",null,[n("a",b,[s("buffalo"),e(a)])]),n("li",null,[n("a",h,[s("net/http"),e(a)])]),n("li",null,[n("a",w,[s("gorilla/mux"),e(a)])]),n("li",null,[n("a",f,[s("go-chi/chi"),e(a)])]),n("li",null,[n("a",_,[s("flamingo"),e(a)])]),n("li",null,[n("a",x,[s("fiber"),e(a)])]),n("li",null,[n("a",q,[s("atreugo"),e(a)])]),n("li",null,[n("a",y,[s("hertz"),e(a)])])]),n("div",S,[P,n("p",null,[s("如果不熟悉swagger语法，可以前往"),n("a",A,[s("About Swagger Specification | Documentation | Swagger"),e(a)])])]),E])}const D=t(p,[["render",T],["__file","swag.html.vue"]]);export{D as default};