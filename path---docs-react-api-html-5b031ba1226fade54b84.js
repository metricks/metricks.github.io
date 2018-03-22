webpackJsonp([93598318429237],{873:function(e,n){e.exports={data:{markdownRemark:{html:'<p><code>React</code> is the entry point to the React library. If you load React from a <code>&#x3C;script></code> tag, these top-level APIs are available on the <code>React</code> global. If you use ES6 with npm, you can write <code>import React from \'react\'</code>. If you use ES5 with npm, you can write <code>var React = require(\'react\')</code>.</p>\n<h2 id="overview"><a href="#overview" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Overview</h2>\n<h3 id="components"><a href="#components" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Components</h3>\n<p>React components let you split the UI into independent, reusable pieces, and think about each piece in isolation. React components can be defined by subclassing <code>React.Component</code> or <code>React.PureComponent</code>.</p>\n<ul>\n<li><a href="#reactcomponent"><code>React.Component</code></a></li>\n<li><a href="#reactpurecomponent"><code>React.PureComponent</code></a></li>\n</ul>\n<p>If you don’t use ES6 classes, you may use the <code>create-react-class</code> module instead. See <a href="/docs/react-without-es6.html">Using React without ES6</a> for more information.</p>\n<h3 id="creating-react-elements"><a href="#creating-react-elements" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Creating React Elements</h3>\n<p>We recommend <a href="/docs/introducing-jsx.html">using JSX</a> to describe what your UI should look like. Each JSX element is just syntactic sugar for calling <a href="#createelement"><code>React.createElement()</code></a>. You will not typically invoke the following methods directly if you are using JSX.</p>\n<ul>\n<li><a href="#createelement"><code>createElement()</code></a></li>\n<li><a href="#createfactory"><code>createFactory()</code></a></li>\n</ul>\n<p>See <a href="/docs/react-without-jsx.html">Using React without JSX</a> for more information.</p>\n<h3 id="transforming-elements"><a href="#transforming-elements" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Transforming Elements</h3>\n<p><code>React</code> provides several APIs for manipulating elements:</p>\n<ul>\n<li><a href="#cloneelement"><code>cloneElement()</code></a></li>\n<li><a href="#isvalidelement"><code>isValidElement()</code></a></li>\n<li><a href="#reactchildren"><code>React.Children</code></a></li>\n</ul>\n<h3 id="fragments"><a href="#fragments" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Fragments</h3>\n<p><code>React</code> also provides a component for rendering multiple elements without a wrapper.</p>\n<ul>\n<li><a href="#reactfragment"><code>React.Fragment</code></a></li>\n</ul>\n<hr>\n<h2 id="reference"><a href="#reference" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Reference</h2>\n<h3 id="reactcomponent"><a href="#reactcomponent" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>React.Component</code></h3>\n<p><code>React.Component</code> is the base class for React components when they are defined using <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes">ES6 classes</a>:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">class</span> <span class="token class-name">Greeting</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Hello<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>See the <a href="/docs/react-component.html">React.Component API Reference</a> for a list of methods and properties related to the base <code>React.Component</code> class.</p>\n<hr>\n<h3 id="reactpurecomponent"><a href="#reactpurecomponent" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>React.PureComponent</code></h3>\n<p><code>React.PureComponent</code> is similar to <a href="#reactcomponent"><code>React.Component</code></a>. The difference between them is that <a href="#reactcomponent"><code>React.Component</code></a> doesn’t implement <a href="/docs/react-component.html#shouldcomponentupdate"><code>shouldComponentUpdate()</code></a>, but <code>React.PureComponent</code> implements it with a shallow prop and state comparison. </p>\n<p>If your React component’s <code>render()</code> function renders the same result given the same props and state, you can use <code>React.PureComponent</code> for a performance boost in some cases.</p>\n<blockquote>\n<p>Note</p>\n<p><code>React.PureComponent</code>’s <code>shouldComponentUpdate()</code> only shallowly compares the objects. If these contain complex data structures, it may produce false-negatives for deeper differences. Only extend <code>PureComponent</code> when you expect to have simple props and state, or use <a href="/docs/react-component.html#forceupdate"><code>forceUpdate()</code></a> when you know deep data structures have changed. Or, consider using <a href="https://facebook.github.io/immutable-js/">immutable objects</a> to facilitate fast comparisons of nested data.</p>\n<p>Furthermore, <code>React.PureComponent</code>’s <code>shouldComponentUpdate()</code> skips prop updates for the whole component subtree. Make sure all the children components are also “pure”.</p>\n</blockquote>\n<hr>\n<h3 id="createelement"><a href="#createelement" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>createElement()</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>\n  type<span class="token punctuation">,</span>\n  <span class="token punctuation">[</span>props<span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span><span class="token operator">...</span>children<span class="token punctuation">]</span>\n<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Create and return a new <a href="/docs/rendering-elements.html">React element</a> of the given type. The type argument can be either a tag name string (such as <code>\'div\'</code> or <code>\'span\'</code>), a <a href="/docs/components-and-props.html">React component</a> type (a class or a function), or a <a href="#reactfragment">React fragment</a> type.</p>\n<p>Code written with <a href="/docs/introducing-jsx.html">JSX</a> will be converted to use <code>React.createElement()</code>. You will not typically invoke <code>React.createElement()</code> directly if you are using JSX. See <a href="/docs/react-without-jsx.html">React Without JSX</a> to learn more.</p>\n<hr>\n<h3 id="cloneelement"><a href="#cloneelement" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>cloneElement()</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-none"><code>React.cloneElement(\n  element,\n  [props],\n  [...children]\n)</code></pre>\n      </div>\n<p>Clone and return a new React element using <code>element</code> as the starting point. The resulting element will have the original element’s props with the new props merged in shallowly. New children will replace existing children. <code>key</code> and <code>ref</code> from the original element will be preserved.</p>\n<p><code>React.cloneElement()</code> is almost equivalent to:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token operator">&lt;</span>element<span class="token punctuation">.</span>type <span class="token punctuation">{</span><span class="token operator">...</span>element<span class="token punctuation">.</span>props<span class="token punctuation">}</span> <span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>element.type</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>However, it also preserves <code>ref</code>s. This means that if you get a child with a <code>ref</code> on it, you won’t accidentally steal it from your ancestor. You will get the same <code>ref</code> attached to your new element.</p>\n<p>This API was introduced as a replacement of the deprecated <code>React.addons.cloneWithProps()</code>.</p>\n<hr>\n<h3 id="createfactory"><a href="#createfactory" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>createFactory()</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>React<span class="token punctuation">.</span><span class="token function">createFactory</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Return a function that produces React elements of a given type. Like <a href="#createElement"><code>React.createElement()</code></a>, the type argument can be either a tag name string (such as <code>\'div\'</code> or <code>\'span\'</code>), a <a href="/docs/components-and-props.html">React component</a> type (a class or a function), or a <a href="#reactfragment">React fragment</a> type.</p>\n<p>This helper is considered legacy, and we encourage you to either use JSX or use <code>React.createElement()</code> directly instead.</p>\n<p>You will not typically invoke <code>React.createFactory()</code> directly if you are using JSX. See <a href="/docs/react-without-jsx.html">React Without JSX</a> to learn more.</p>\n<hr>\n<h3 id="isvalidelement"><a href="#isvalidelement" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>isValidElement()</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>React<span class="token punctuation">.</span><span class="token function">isValidElement</span><span class="token punctuation">(</span>object<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Verifies the object is a React element. Returns <code>true</code> or <code>false</code>.</p>\n<hr>\n<h3 id="reactchildren"><a href="#reactchildren" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>React.Children</code></h3>\n<p><code>React.Children</code> provides utilities for dealing with the <code>this.props.children</code> opaque data structure.</p>\n<h4 id="reactchildrenmap"><a href="#reactchildrenmap" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>React.Children.map</code></h4>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>React<span class="token punctuation">.</span>Children<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>children<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">[</span><span class="token punctuation">(</span>thisArg<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Invokes a function on every immediate child contained within <code>children</code> with <code>this</code> set to <code>thisArg</code>. If <code>children</code> is a keyed fragment or array it will be traversed: the function will never be passed the container objects. If children is <code>null</code> or <code>undefined</code>, returns <code>null</code> or <code>undefined</code> rather than an array.</p>\n<h4 id="reactchildrenforeach"><a href="#reactchildrenforeach" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>React.Children.forEach</code></h4>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>React<span class="token punctuation">.</span>Children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>children<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">[</span><span class="token punctuation">(</span>thisArg<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Like <a href="#reactchildrenmap"><code>React.Children.map()</code></a> but does not return an array.</p>\n<h4 id="reactchildrencount"><a href="#reactchildrencount" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>React.Children.count</code></h4>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>React<span class="token punctuation">.</span>Children<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span>children<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Returns the total number of components in <code>children</code>, equal to the number of times that a callback passed to <code>map</code> or <code>forEach</code> would be invoked.</p>\n<h4 id="reactchildrenonly"><a href="#reactchildrenonly" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>React.Children.only</code></h4>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>React<span class="token punctuation">.</span>Children<span class="token punctuation">.</span><span class="token function">only</span><span class="token punctuation">(</span>children<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Verifies that <code>children</code> has only one child (a React element) and returns it. Otherwise this method throws an error.</p>\n<blockquote>\n<p>Note:</p>\n<p><code>React.Children.only()</code> does not accept the return value of <a href="#reactchildrenmap"><code>React.Children.map()</code></a> because it is an array rather than a React element.</p>\n</blockquote>\n<h4 id="reactchildrentoarray"><a href="#reactchildrentoarray" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>React.Children.toArray</code></h4>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>React<span class="token punctuation">.</span>Children<span class="token punctuation">.</span><span class="token function">toArray</span><span class="token punctuation">(</span>children<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Returns the <code>children</code> opaque data structure as a flat array with keys assigned to each child. Useful if you want to manipulate collections of children in your render methods, especially if you want to reorder or slice <code>this.props.children</code> before passing it down.</p>\n<blockquote>\n<p>Note:</p>\n<p><code>React.Children.toArray()</code> changes keys to preserve the semantics of nested arrays when flattening lists of children. That is, <code>toArray</code> prefixes each key in the returned array so that each element’s key is scoped to the input array containing it.</p>\n</blockquote>\n<hr>\n<h3 id="reactfragment"><a href="#reactfragment" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>React.Fragment</code></h3>\n<p>The <code>React.Fragment</code> component lets you return multiple elements in a <code>render()</code> method without creating an additional DOM element:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>React.Fragment</span><span class="token punctuation">></span></span>\n      Some text<span class="token punctuation">.</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>A heading<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>React.Fragment</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>You can also use it with the shorthand <code>&#x3C;>&#x3C;/></code> syntax. For more information, see <a href="/blog/2017/11/28/react-v16.2.0-fragment-support.html">React v16.2.0: Improved Support for Fragments</a>.</p>',frontmatter:{title:"React Top-Level API",next:null,prev:null},fields:{path:"docs/reference-react.md",slug:"docs/react-api.html"}}},pathContext:{slug:"docs/react-api.html"}}}});
//# sourceMappingURL=path---docs-react-api-html-5b031ba1226fade54b84.js.map