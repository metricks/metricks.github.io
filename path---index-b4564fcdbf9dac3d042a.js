webpackJsonp([0x81b8806e4260],{899:function(e,t){e.exports={data:{code:{edges:[{node:{id:"a-component-using-external-plugins",internal:{contentDigest:'"class MarkdownEditor extends React.Component {\\n  constructor(props) {\\n    super(props);\\n    this.handleChange = this.handleChange.bind(this);\\n    this.state = { value: \'Hello, **world**!\' };\\n  }\\n\\n  handleChange(e) {\\n    this.setState({ value: e.target.value });\\n  }\\n\\n  getRawMarkup() {\\n    const md = new Remarkable();\\n    return { __html: md.render(this.state.value) };\\n  }\\n\\n  render() {\\n    return (\\n      <div className=\\"MarkdownEditor\\">\\n        <h3>Input</h3>\\n        <label htmlFor=\\"markdown-content\\">\\n          Enter some markdown\\n        </label>\\n        <textarea\\n          id=\\"markdown-content\\"\\n          onChange={this.handleChange}\\n          defaultValue={this.state.value}\\n        />\\n        <h3>Output</h3>\\n        <div\\n          className=\\"content\\"\\n          dangerouslySetInnerHTML={this.getRawMarkup()}\\n        />\\n      </div>\\n    );\\n  }\\n}\\n\\nReactDOM.render(<MarkdownEditor />, mountNode);"'}}},{node:{id:"a-simple-component",internal:{contentDigest:'"class HelloMessage extends React.Component {\\n  render() {\\n    return (\\n      <div>\\n        Hello {this.props.name}\\n      </div>\\n    );\\n  }\\n}\\n\\nReactDOM.render(\\n  <HelloMessage name=\\"Taylor\\" />,\\n  mountNode\\n);"'}}},{node:{id:"a-stateful-component",internal:{contentDigest:'"class Timer extends React.Component {\\n  constructor(props) {\\n    super(props);\\n    this.state = { seconds: 0 };\\n  }\\n\\n  tick() {\\n    this.setState(prevState => ({\\n      seconds: prevState.seconds + 1\\n    }));\\n  }\\n\\n  componentDidMount() {\\n    this.interval = setInterval(() => this.tick(), 1000);\\n  }\\n\\n  componentWillUnmount() {\\n    clearInterval(this.interval);\\n  }\\n\\n  render() {\\n    return (\\n      <div>\\n        Seconds: {this.state.seconds}\\n      </div>\\n    );\\n  }\\n}\\n\\nReactDOM.render(<Timer />, mountNode);"'}}},{node:{id:"an-application",internal:{contentDigest:'"class TodoApp extends React.Component {\\n  constructor(props) {\\n    super(props);\\n    this.state = { items: [], text: \'\' };\\n    this.handleChange = this.handleChange.bind(this);\\n    this.handleSubmit = this.handleSubmit.bind(this);\\n  }\\n\\n  render() {\\n    return (\\n      <div>\\n        <h3>TODO</h3>\\n        <TodoList items={this.state.items} />\\n        <form onSubmit={this.handleSubmit}>\\n          <label htmlFor=\\"new-todo\\">\\n            What needs to be done?\\n          </label>\\n          <input\\n            id=\\"new-todo\\"\\n            onChange={this.handleChange}\\n            value={this.state.text}\\n          />\\n          <button>\\n            Add #{this.state.items.length + 1}\\n          </button>\\n        </form>\\n      </div>\\n    );\\n  }\\n\\n  handleChange(e) {\\n    this.setState({ text: e.target.value });\\n  }\\n\\n  handleSubmit(e) {\\n    e.preventDefault();\\n    if (!this.state.text.length) {\\n      return;\\n    }\\n    const newItem = {\\n      text: this.state.text,\\n      id: Date.now()\\n    };\\n    this.setState(prevState => ({\\n      items: prevState.items.concat(newItem),\\n      text: \'\'\\n    }));\\n  }\\n}\\n\\nclass TodoList extends React.Component {\\n  render() {\\n    return (\\n      <ul>\\n        {this.props.items.map(item => (\\n          <li key={item.id}>{item.text}</li>\\n        ))}\\n      </ul>\\n    );\\n  }\\n}\\n\\nReactDOM.render(<TodoApp />, mountNode);\\n"'}}}]},examples:{edges:[{node:{fields:{slug:"/home/examples/a-simple-component.html"},frontmatter:{title:"A Simple Component"},html:'<p>React components implement a <code>render()</code> method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by <code>render()</code> via <code>this.props</code>.</p>\n<p><strong>JSX is optional and not required to use React.</strong> Try the <a href="https://babeljs.io/repl/#?presets=react&code_lz=MYewdgzgLgBApgGzgWzmWBeGAeAFgRgD4AJRBEAGhgHcQAnBAEwEJsB6AwgbgChRJY_KAEMAlmDh0YWRiGABXVOgB0AczhQAokiVQAQgE8AkowAUAcjogQUcwEpeAJTjDgUACIB5ALLK6aRklTRBQ0KCohMQk6Bx4gA" target="_blank" rel="noreferrer">Babel REPL</a> to see the raw JavaScript code produced by the JSX compilation step.</p>'}},{node:{fields:{slug:"/home/examples/a-stateful-component.html"},frontmatter:{title:"A Stateful Component"},html:"<p>In addition to taking input data (accessed via <code>this.props</code>), a component can maintain internal state data (accessed via <code>this.state</code>). When a component’s state data changes, the rendered markup will be updated by re-invoking <code>render()</code>.</p>"}},{node:{fields:{slug:"/home/examples/an-application.html"},frontmatter:{title:"An Application"},html:"<p>Using <code>props</code> and <code>state</code>, we can put together a small Todo application. This example uses <code>state</code> to track the current list of items as well as the text that the user has entered. Although event handlers appear to be rendered inline, they will be collected and implemented using event delegation.</p>"}},{node:{fields:{slug:"/home/examples/a-component-using-external-plugins.html"},frontmatter:{title:"A Component Using External Plugins"},html:"<p>React is flexible and provides hooks that allow you to interface with other libraries and frameworks. This example uses <strong>remarkable</strong>, an external Markdown library, to convert the <code>&#x3C;textarea></code>’s value in real time.</p>"}}]},marketing:{edges:[{node:{frontmatter:{title:"Declarative"},html:"<p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>\n<p>Declarative views make your code more predictable and easier to debug.</p>"}},{node:{frontmatter:{title:"Component-Based"},html:"<p>Build encapsulated components that manage their own state, then compose them to make complex UIs.</p>\n<p>Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.</p>"}},{node:{frontmatter:{title:"Learn Once, Write Anywhere"},html:'<p>We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.</p>\n<p>React can also render on the server using Node and power mobile apps using <a href="https://facebook.github.io/react-native/">React Native</a>.</p>'}}]}},pathContext:{}}}});
//# sourceMappingURL=path---index-b4564fcdbf9dac3d042a.js.map