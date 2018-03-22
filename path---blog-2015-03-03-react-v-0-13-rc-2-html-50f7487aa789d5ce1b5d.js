webpackJsonp([0xdf9033bacef],{744:function(e,t){e.exports={data:{markdownRemark:{html:'<p>Thanks to everybody who has already been testing the release candidate. We’ve received some good feedback and as a result we’re going to do a second release candidate. The changes are minimal. We haven’t changed the behavior of any APIs we exposed in the previous release candidate. Here’s a summary of the changes:</p>\n<ul>\n<li>Introduced a new API (<code>React.cloneElement</code>, see below for details).</li>\n<li>Fixed a bug related to validating <code>propTypes</code> when using the new <code>React.addons.createFragment</code> API.</li>\n<li>Improved a couple warning messages.</li>\n<li>Upgraded jstransform and esprima.</li>\n</ul>\n<p>The release candidate is available for download:</p>\n<ul>\n<li><strong>React</strong><br>\nDev build with warnings: <a href="https://fb.me/react-0.13.0-rc2.js">https://fb.me/react-0.13.0-rc2.js</a><br>\nMinified build for production: <a href="https://fb.me/react-0.13.0-rc2.min.js">https://fb.me/react-0.13.0-rc2.min.js</a>  </li>\n<li><strong>React with Add-Ons</strong><br>\nDev build with warnings: <a href="https://fb.me/react-with-addons-0.13.0-rc2.js">https://fb.me/react-with-addons-0.13.0-rc2.js</a><br>\nMinified build for production: <a href="https://fb.me/react-with-addons-0.13.0-rc2.min.js">https://fb.me/react-with-addons-0.13.0-rc2.min.js</a>  </li>\n<li><strong>In-Browser JSX transformer</strong><br>\n<a href="https://fb.me/JSXTransformer-0.13.0-rc2.js">https://fb.me/JSXTransformer-0.13.0-rc2.js</a></li>\n</ul>\n<p>We’ve also published version <code>0.13.0-rc2</code> of the <code>react</code> and <code>react-tools</code> packages on npm and the <code>react</code> package on bower.</p>\n<hr>\n<h2 id="reactcloneelement"><a href="#reactcloneelement" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React.cloneElement</h2>\n<p>In React v0.13 RC2 we will introduce a new API, similar to <code>React.addons.cloneWithProps</code>, with this signature:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>React<span class="token punctuation">.</span><span class="token function">cloneElement</span><span class="token punctuation">(</span>element<span class="token punctuation">,</span> props<span class="token punctuation">,</span> <span class="token operator">...</span>children<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Unlike <code>cloneWithProps</code>, this new function does not have any magic built-in behavior for merging <code>style</code> and <code>className</code> for the same reason we don’t have that feature from <code>transferPropsTo</code>. Nobody is sure what exactly the complete list of magic things are, which makes it difficult to reason about the code and difficult to reuse when <code>style</code> has a different signature (e.g. in the upcoming React Native).</p>\n<p><code>React.cloneElement</code> is <em>almost</em> equivalent to:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token operator">&lt;</span>element<span class="token punctuation">.</span>type <span class="token punctuation">{</span><span class="token operator">...</span>element<span class="token punctuation">.</span>props<span class="token punctuation">}</span> <span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>element.type</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>However, unlike JSX and <code>cloneWithProps</code>, it also preserves <code>ref</code>s. This means that if you get a child with a <code>ref</code> on it, you won’t accidentally steal it from your ancestor. You will get the same <code>ref</code> attached to your new element.</p>\n<p>One common pattern is to map over your children and add a new prop. There were many issues reported about <code>cloneWithProps</code> losing the ref, making it harder to reason about your code. Now following the same pattern with <code>cloneElement</code> will work as expected. For example:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">var</span> newChildren <span class="token operator">=</span> React<span class="token punctuation">.</span>Children<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> React<span class="token punctuation">.</span><span class="token function">cloneElement</span><span class="token punctuation">(</span>child<span class="token punctuation">,</span> <span class="token punctuation">{</span> foo<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<blockquote>\n<p>Note: <code>React.cloneElement(child, { ref: \'newRef\' })</code> <em>DOES</em> override the <code>ref</code> so it is still not possible for two parents to have a ref to the same child, unless you use callback-refs.</p>\n</blockquote>\n<p>This was a critical feature to get into React 0.13 since props are now immutable. The upgrade path is often to clone the element, but by doing so you might lose the <code>ref</code>. Therefore, we needed a nicer upgrade path here. As we were upgrading callsites at Facebook we realized that we needed this method. We got the same feedback from the community. Therefore we decided to make another RC before the final release to make sure we get this in.</p>\n<p>We plan to eventually deprecate <code>React.addons.cloneWithProps</code>. We’re not doing it yet, but this is a good opportunity to start thinking about your own uses and consider using <code>React.cloneElement</code> instead. We’ll be sure to ship a release with deprecation notices before we actually remove it so no immediate action is necessary.</p>',excerpt:"Thanks to everybody who has already been testing the release candidate. We’ve received some good feedback and as a result we’re going to do a second release candidate. The changes are minimal. We haven’t changed the behavior of any APIs we exposed in the previous release candidate. Here’s a summary of the changes: Introduced a new API ( React.cloneElement , see below for details). Fixed a bug related to validating  propTypes  when using the new  React.addons.createFragment  API. Improved a…",frontmatter:{title:"React v0.13 RC2",next:null,prev:null,author:[{frontmatter:{name:"Sebastian Markbåge",url:"https://twitter.com/sebmarkbage"}}]},fields:{date:"March 03, 2015",path:"blog/2015-03-03-react-v0.13-rc2.md",slug:"/blog/2015/03/03/react-v0.13-rc2.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"Sneak Peek: Beyond React 16"},fields:{slug:"/blog/2018/03/01/sneak-peek-beyond-react-16.html"}}},{node:{frontmatter:{title:"Behind the Scenes: Improving the Repository Infrastructure"},fields:{slug:"/blog/2017/12/15/improving-the-repository-infrastructure.html"}}},{node:{frontmatter:{title:"Introducing the React RFC Process"},fields:{slug:"/blog/2017/12/07/introducing-the-react-rfc-process.html"}}},{node:{frontmatter:{title:"React v16.2.0: Improved Support for Fragments"},fields:{slug:"/blog/2017/11/28/react-v16.2.0-fragment-support.html"}}},{node:{frontmatter:{title:"React v16.0"},fields:{slug:"/blog/2017/09/26/react-v16.0.html"}}},{node:{frontmatter:{title:"React v15.6.2"},fields:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}},{node:{frontmatter:{title:"DOM Attributes in React 16"},fields:{slug:"/blog/2017/09/08/dom-attributes-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handling in React 16"},fields:{slug:"/blog/2017/07/26/error-handling-in-react-16.html"}}},{node:{frontmatter:{title:"React v15.6.0"},fields:{slug:"/blog/2017/06/13/react-v15.6.0.html"}}},{node:{frontmatter:{title:"What's New in Create React App"},fields:{slug:"/blog/2017/05/18/whats-new-in-create-react-app.html"}}}]}},pathContext:{slug:"/blog/2015/03/03/react-v0.13-rc2.html"}}}});
//# sourceMappingURL=path---blog-2015-03-03-react-v-0-13-rc-2-html-50f7487aa789d5ce1b5d.js.map