webpackJsonp([0x9fa4f97cf530],{833:function(n,s){n.exports={data:{markdownRemark:{html:'<p>In React, you can create distinct components that encapsulate behavior you need. Then, you can render only some of them, depending on the state of your application.</p>\n<p>Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators like <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else"><code>if</code></a> or the <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Conditional_Operator">conditional operator</a> to create elements representing the current state, and let React update the UI to match them.</p>\n<p>Consider these two components:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">function</span> <span class="token function">UserGreeting</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Welcome back<span class="token operator">!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">GuestGreeting</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Please sign up<span class="token punctuation">.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>We’ll create a <code>Greeting</code> component that displays either of these components depending on whether a user is logged in:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">function</span> <span class="token function">Greeting</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> isLoggedIn <span class="token operator">=</span> props<span class="token punctuation">.</span>isLoggedIn<span class="token punctuation">;</span>\n<span class="gatsby-highlight-code-line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>isLoggedIn<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n</span><span class="gatsby-highlight-code-line">    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>UserGreeting</span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n</span><span class="gatsby-highlight-code-line">  <span class="token punctuation">}</span>\n</span><span class="gatsby-highlight-code-line">  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>GuestGreeting</span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n</span><span class="gatsby-highlight-code-line"><span class="token punctuation">}</span>\n</span>\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token comment">// Try changing to isLoggedIn={true}:</span>\n<span class="gatsby-highlight-code-line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Greeting</span> <span class="token attr-name">isLoggedIn</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n</span><span class="gatsby-highlight-code-line">  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'root\'</span><span class="token punctuation">)</span>\n</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><a href="https://codepen.io/gaearon/pen/ZpVxNq?editors=0011">Try it on CodePen.</a></p>\n<p>This example renders a different greeting depending on the value of <code>isLoggedIn</code> prop.</p>\n<h3 id="element-variables"><a href="#element-variables" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Element Variables</h3>\n<p>You can use variables to store elements. This can help you conditionally render a part of the component while the rest of the output doesn’t change.</p>\n<p>Consider these two new components representing Logout and Login buttons:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">function</span> <span class="token function">LoginButton</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>onClick<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      Login\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">LogoutButton</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>onClick<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      Logout\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>In the example below, we will create a <a href="/docs/state-and-lifecycle.html#adding-local-state-to-a-class">stateful component</a> called <code>LoginControl</code>.</p>\n<p>It will render either <code>&#x3C;LoginButton /></code> or <code>&#x3C;LogoutButton /></code> depending on its current state. It will also render a <code>&#x3C;Greeting /></code> from the previous example:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">class</span> <span class="token class-name">LoginControl</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>handleLoginClick <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>handleLoginClick<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>handleLogoutClick <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>handleLogoutClick<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>isLoggedIn<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">handleLoginClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>isLoggedIn<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">handleLogoutClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>isLoggedIn<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> isLoggedIn <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>isLoggedIn<span class="token punctuation">;</span>\n    \n<span class="gatsby-highlight-code-line">    <span class="token keyword">const</span> button <span class="token operator">=</span> isLoggedIn <span class="token operator">?</span> <span class="token punctuation">(</span>\n</span><span class="gatsby-highlight-code-line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LogoutButton</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleLogoutClick<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n</span><span class="gatsby-highlight-code-line">    <span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token punctuation">(</span>\n</span><span class="gatsby-highlight-code-line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LoginButton</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleLoginClick<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n</span><span class="gatsby-highlight-code-line">    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span><span class="gatsby-highlight-code-line">\n</span>    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Greeting</span> <span class="token attr-name">isLoggedIn</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>isLoggedIn<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n<span class="gatsby-highlight-code-line">        <span class="token punctuation">{</span>button<span class="token punctuation">}</span>\n</span><span class="gatsby-highlight-code-line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n</span>    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LoginControl</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'root\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><a href="https://codepen.io/gaearon/pen/QKzAgB?editors=0010">Try it on CodePen.</a></p>\n<p>While declaring a variable and using an <code>if</code> statement is a fine way to conditionally render a component, sometimes you might want to use a shorter syntax. There are a few ways to inline conditions in JSX, explained below.</p>\n<h3 id="inline-if-with-logical--operator"><a href="#inline-if-with-logical--operator" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Inline If with Logical &#x26;&#x26; Operator</h3>\n<p>You may <a href="/docs/introducing-jsx.html#embedding-expressions-in-jsx">embed any expressions in JSX</a> by wrapping them in curly braces. This includes the JavaScript logical <code>&#x26;&#x26;</code> operator. It can be handy for conditionally including an element:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">function</span> <span class="token function">Mailbox</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> unreadMessages <span class="token operator">=</span> props<span class="token punctuation">.</span>unreadMessages<span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Hello<span class="token operator">!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n<span class="gatsby-highlight-code-line">      <span class="token punctuation">{</span>unreadMessages<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span>\n</span><span class="gatsby-highlight-code-line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>\n</span><span class="gatsby-highlight-code-line">          You have <span class="token punctuation">{</span>unreadMessages<span class="token punctuation">.</span>length<span class="token punctuation">}</span> unread messages<span class="token punctuation">.</span>\n</span><span class="gatsby-highlight-code-line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>\n</span><span class="gatsby-highlight-code-line">      <span class="token punctuation">}</span>\n</span>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> messages <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'React\'</span><span class="token punctuation">,</span> <span class="token string">\'Re: React\'</span><span class="token punctuation">,</span> <span class="token string">\'Re:Re: React\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Mailbox</span> <span class="token attr-name">unreadMessages</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>messages<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'root\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><a href="https://codepen.io/gaearon/pen/ozJddz?editors=0010">Try it on CodePen.</a></p>\n<p>It works because in JavaScript, <code>true &#x26;&#x26; expression</code> always evaluates to <code>expression</code>, and <code>false &#x26;&#x26; expression</code> always evaluates to <code>false</code>.</p>\n<p>Therefore, if the condition is <code>true</code>, the element right after <code>&#x26;&#x26;</code> will appear in the output. If it is <code>false</code>, React will ignore and skip it.</p>\n<h3 id="inline-if-else-with-conditional-operator"><a href="#inline-if-else-with-conditional-operator" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Inline If-Else with Conditional Operator</h3>\n<p>Another method for conditionally rendering elements inline is to use the JavaScript conditional operator <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Conditional_Operator"><code>condition ? true : false</code></a>.</p>\n<p>In the example below, we use it to conditionally render a small block of text.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> isLoggedIn <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>isLoggedIn<span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n<span class="gatsby-highlight-code-line">      The user is <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>isLoggedIn <span class="token operator">?</span> <span class="token string">\'currently\'</span> <span class="token punctuation">:</span> <span class="token string">\'not\'</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">></span></span> logged <span class="token keyword">in</span><span class="token punctuation">.</span>\n</span>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>It can also be used for larger expressions although it is less obvious what’s going on:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> isLoggedIn <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>isLoggedIn<span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n<span class="gatsby-highlight-code-line">      <span class="token punctuation">{</span>isLoggedIn <span class="token operator">?</span> <span class="token punctuation">(</span>\n</span>        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LogoutButton</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleLogoutClick<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n<span class="gatsby-highlight-code-line">      <span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token punctuation">(</span>\n</span>        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LoginButton</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleLoginClick<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n<span class="gatsby-highlight-code-line">      <span class="token punctuation">)</span><span class="token punctuation">}</span>\n</span>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Just like in JavaScript, it is up to you to choose an appropriate style based on what you and your team consider more readable. Also remember that whenever conditions become too complex, it might be a good time to <a href="/docs/components-and-props.html#extracting-components">extract a component</a>.</p>\n<h3 id="preventing-component-from-rendering"><a href="#preventing-component-from-rendering" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Preventing Component from Rendering</h3>\n<p>In rare cases you might want a component to hide itself even though it was rendered by another component. To do this return <code>null</code> instead of its render output.</p>\n<p>In the example below, the <code>&#x3C;WarningBanner /></code> is rendered depending on the value of the prop called <code>warn</code>. If the value of the prop is <code>false</code>, then the component does not render:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">function</span> <span class="token function">WarningBanner</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>props<span class="token punctuation">.</span>warn<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n</span><span class="gatsby-highlight-code-line">    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n</span><span class="gatsby-highlight-code-line">  <span class="token punctuation">}</span>\n</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      Warning<span class="token operator">!</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Page</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>showWarning<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>handleToggleClick <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>handleToggleClick<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">handleToggleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span>prevState <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n      showWarning<span class="token punctuation">:</span> <span class="token operator">!</span>prevState<span class="token punctuation">.</span>showWarning\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n<span class="gatsby-highlight-code-line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WarningBanner</span> <span class="token attr-name">warn</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>showWarning<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n</span>        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleToggleClick<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>showWarning <span class="token operator">?</span> <span class="token string">\'Hide\'</span> <span class="token punctuation">:</span> <span class="token string">\'Show\'</span><span class="token punctuation">}</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Page</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'root\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><a href="https://codepen.io/gaearon/pen/Xjoqwm?editors=0010">Try it on CodePen.</a></p>\n<p>Returning <code>null</code> from a component’s <code>render</code> method does not affect the firing of the component’s lifecycle methods. For instance, <code>componentWillUpdate</code> and <code>componentDidUpdate</code> will still be called.</p>',
frontmatter:{title:"Conditional Rendering",next:"lists-and-keys.html",prev:"handling-events.html"},fields:{path:"docs/conditional-rendering.md",slug:"docs/conditional-rendering.html"}}},pathContext:{slug:"docs/conditional-rendering.html"}}}});
//# sourceMappingURL=path---docs-conditional-rendering-html-1987b14b5518ff53e88b.js.map