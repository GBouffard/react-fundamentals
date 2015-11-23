// 

var Button = React.createClass({
  getInitialState:function(){
    return {val: 0}
  },
  update: function(){
    this.setState({val: this.state.val+1});
  },

// we can set-up a value there for example
  componentWillMount:function(){
    this.setState({m:2});
  },

  render: function() {
    console.log('rendering');
    return <button onClick={this.update}>{this.state.val*this.state.m}</button>
  },

// setInterval(methodName, 500) launches methodName every 500ms 
// so we have an auto-increment every half a second once the componenr has been mounted

  componentDidMount:function(){
    console.log(this.getDOMNode());
    this.inc = setInterval(this.update, 500)
  },

// we have to clear the intervall when unmouting because setState 
// can only update on a mounted or mounting component.

  componentWillUnmount:function(){
    clearInterval(this.inc);
  }
});

var App = React.createClass({
  mount: function(){
    React.render(<Button />, document.getElementById('mybutton'));
  },
  unmount: function(){
    React.unmountComponentAtNode(document.getElementById('mybutton'));
  },
  render: function() {
    return (
      <div>
        <button onClick={this.mount}>Mount</button>
        <button onClick={this.unmount}>Unmount</button>
        <div id="mybutton"></div>
      </div>
    );
  }
});

React.render(<App />, document.body); 