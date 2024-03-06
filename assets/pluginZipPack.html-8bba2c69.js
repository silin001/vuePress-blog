import{_ as p,r as e,o as t,c as i,b as n,e as s,f as o,d as c}from"./app-b9e92be8.js";const l={},u=n("h2",{id:"介绍",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),s(" 介绍")],-1),r=n("p",null,[n("code",null,"plugin-zip-pack"),s(" 源码使用ts编写（1.0.17版本前js），用于项目 webpack、vite build 结束后压缩打包指定目录资源为.zip 包")],-1),d={href:"https://www.npmjs.com/package/plugin-zip-pack",target:"_blank",rel:"noopener noreferrer"},k=c(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p><code>cnpm install plugin-zip-pack -D</code></p><p>or</p><p><code>npm install plugin-zip-pack -D</code></p><h2 id="参数配置" tabindex="-1"><a class="header-anchor" href="#参数配置" aria-hidden="true">#</a> 参数配置</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
 <span class="token punctuation">{</span>
  <span class="token literal-property property">optZipName</span><span class="token operator">:</span> <span class="token string">&#39;测试包&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 必传参数，打包名称，</span>
  <span class="token literal-property property">targetDir</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 可选参数，需要打包的目录（必须传入存在的目录），默认 dist</span>
  <span class="token literal-property property">enable</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 可选参数，插件是否开启，默认true开启</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用-1-0-17版本" tabindex="-1"><a class="header-anchor" href="#使用-1-0-17版本" aria-hidden="true">#</a> 使用（1.0.17版本）</h2><ul><li>vite</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// vite.config.js</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> pluginZipPackVite <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;plugin-zip-pack&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// import { pluginZipPackVite } from &#39;plugin-zip-pack&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">pluginZipPackVite</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">optZipName</span><span class="token operator">:</span> <span class="token string">&#39;测试包&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>webpack</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> PluginZipPackWebpack <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;plugin-zip-pack&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">configureWebpack</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token keyword">new</span> <span class="token class-name">PluginZipPackWebpack</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">optZipName</span><span class="token operator">:</span> <span class="token string">&#39;xxxpc端&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="使用-1-0-17版本前" tabindex="-1"><a class="header-anchor" href="#使用-1-0-17版本前" aria-hidden="true">#</a> 使用（1.0.17版本前）</h1><ul><li>vite</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// vite.config.js</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> vitePluginZipPack <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;plugin-zip-pack&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">vitePluginZipPack</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">optZipName</span><span class="token operator">:</span> <span class="token string">&#39;测试包&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">targetDir</span><span class="token operator">:</span> <span class="token string">&#39;public&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">enable</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>webpack</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> WebpackPluginZipPack <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;plugin-zip-pack&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">configureWebpack</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token keyword">new</span> <span class="token class-name">WebpackPluginZipPack</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">optZipName</span><span class="token operator">:</span> <span class="token string">&#39;xxxpc端&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16);function v(m,b){const a=e("ExternalLinkIcon");return t(),i("div",null,[u,r,n("p",null,[s("npm包地址： "),n("a",d,[s("plugin-zip-pack - npm (npmjs.com)"),o(a)])]),k])}const h=p(l,[["render",v],["__file","pluginZipPack.html.vue"]]);export{h as default};
