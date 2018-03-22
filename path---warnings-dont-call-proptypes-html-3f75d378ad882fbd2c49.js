webpackJsonp([0x652bdbc55d18],{916:function(n,s){n.exports={data:{markdownRemark:{html:'<blockquote>\n<p>Note:</p>\n<p><code>React.PropTypes</code> has moved into a different package since React v15.5. Please use <a href="https://www.npmjs.com/package/prop-types">the <code>prop-types</code> library instead</a>.</p>\n<p>We provide <a href="/blog/2017/04/07/react-v15.5.0.html#migrating-from-react.proptypes">a codemod script</a> to automate the conversion.</p>\n</blockquote>\n<p>In a future major release of React, the code that implements PropType validation functions will be stripped in production. Once this happens, any code that calls these functions manually (that isn’t stripped in production) will throw an error.</p>\n<h3 id="declaring-proptypes-is-still-fine"><a href="#declaring-proptypes-is-still-fine" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Declaring PropTypes is still fine</h3>\n<p>The normal usage of PropTypes is still supported:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>Button<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>\n  highlighted<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span>bool\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Nothing changes here.</p>\n<h3 id="dont-call-proptypes-directly"><a href="#dont-call-proptypes-directly" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Don’t call PropTypes directly</h3>\n<p>Using PropTypes in any other way than annotating React components with them is no longer supported:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">var</span> apiShape <span class="token operator">=</span> PropTypes<span class="token punctuation">.</span><span class="token function">shape</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  body<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span>object<span class="token punctuation">,</span>\n  statusCode<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span>number<span class="token punctuation">.</span>isRequired\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>isRequired<span class="token punctuation">;</span>\n\n<span class="token comment">// Not supported!</span>\n<span class="token keyword">var</span> error <span class="token operator">=</span> <span class="token function">apiShape</span><span class="token punctuation">(</span>json<span class="token punctuation">,</span> <span class="token string">\'response\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>If you depend on using PropTypes like this, we encourage you to use or create a fork of PropTypes (such as <a href="https://github.com/aackerman/PropTypes">these</a> <a href="https://github.com/developit/proptypes">two</a> packages).</p>\n<p>If you don’t fix the warning, this code will crash in production with React 16.</p>\n<h3 id="if-you-dont-call-proptypes-directly-but-still-get-the-warning"><a href="#if-you-dont-call-proptypes-directly-but-still-get-the-warning" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>If you don’t call PropTypes directly but still get the warning</h3>\n<p>Inspect the stack trace produced by the warning. You will find the component definition responsible for the PropTypes direct call. Most likely, the issue is due to third-party PropTypes that wrap React’s PropTypes, for example:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>Button<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>\n  highlighted<span class="token punctuation">:</span> ThirdPartyPropTypes<span class="token punctuation">.</span><span class="token function">deprecated</span><span class="token punctuation">(</span>\n    PropTypes<span class="token punctuation">.</span>bool<span class="token punctuation">,</span>\n    <span class="token string">\'Use `active` prop instead\'</span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>In this case, <code>ThirdPartyPropTypes.deprecated</code> is a wrapper calling <code>PropTypes.bool</code>. This pattern by itself is fine, but triggers a false positive because React thinks you are calling PropTypes directly. The next section explains how to fix this problem for a library implementing something like <code>ThirdPartyPropTypes</code>. If it’s not a library you wrote, you can file an issue against it.</p>\n<h3 id="fixing-the-false-positive-in-third-party-proptypes"><a href="#fixing-the-false-positive-in-third-party-proptypes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Fixing the false positive in third party PropTypes</h3>\n<p>If you are an author of a third party PropTypes library and you let consumers wrap existing React PropTypes, they might start seeing this warning coming from your library. This happens because React doesn’t see a “secret” last argument that <a href="https://github.com/facebook/react/pull/7132">it passes</a> to detect manual PropTypes calls.</p>\n<p>Here is how to fix it. We will use <code>deprecated</code> from <a href="https://github.com/react-bootstrap/react-prop-types/blob/0d1cd3a49a93e513325e3258b28a82ce7d38e690/src/deprecated.js">react-bootstrap/react-prop-types</a> as an example. The current implementation only passes down the <code>props</code>, <code>propName</code>, and <code>componentName</code> arguments:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">deprecated</span><span class="token punctuation">(</span>propType<span class="token punctuation">,</span> explanation<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">validate</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> propName<span class="token punctuation">,</span> componentName<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>props<span class="token punctuation">[</span>propName<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token template-string"><span class="token string">`"</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>propName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">" property of "</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>componentName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">" has been deprecated.\\n</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>explanation<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">;</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>warned<span class="token punctuation">[</span>message<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">warning</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        warned<span class="token punctuation">[</span>message<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">return</span> <span class="token function">propType</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> propName<span class="token punctuation">,</span> componentName<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>In order to fix the false positive, make sure you pass <strong>all</strong> arguments down to the wrapped PropType. This is easy to do with the ES6 <code>...rest</code> notation:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">deprecated</span><span class="token punctuation">(</span>propType<span class="token punctuation">,</span> explanation<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">validate</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> propName<span class="token punctuation">,</span> componentName<span class="token punctuation">,</span> <span class="token operator">...</span>rest<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// Note ...rest here</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>props<span class="token punctuation">[</span>propName<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token template-string"><span class="token string">`"</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>propName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">" property of "</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>componentName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">" has been deprecated.\\n</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>explanation<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">;</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>warned<span class="token punctuation">[</span>message<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">warning</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        warned<span class="token punctuation">[</span>message<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">return</span> <span class="token function">propType</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> propName<span class="token punctuation">,</span> componentName<span class="token punctuation">,</span> <span class="token operator">...</span>rest<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// and here</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>This will silence the warning.</p>',frontmatter:{title:"Don't Call PropTypes Warning",next:null,prev:null},fields:{path:"warnings/dont-call-proptypes.md",slug:"warnings/dont-call-proptypes.html"}}},pathContext:{slug:"warnings/dont-call-proptypes.html"}}}});
//# sourceMappingURL=path---warnings-dont-call-proptypes-html-3f75d378ad882fbd2c49.js.map