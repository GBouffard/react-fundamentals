// Mounting : adding components to the DOM
// Unmounting: removing components from the DOM

var Button = React.createClass({
  getInitialState:function(){
    return {val: 0}
  },
  update: function(){
    this.setState({val: this.state.val+1});
  },

// This script runs before rendering the component in the DOM for the first time.
  componentWillMount:function(){
    console.log('mounting');
  },

// This script runs after rendering the component in the DOM for the first time.
  componentDidMount:function(){
    console.log('mounted');
  },

// This script runs after the component has been removed from the DOM.
  componentWillUnmount:function(){
    console.log('Unmounted');
  },

  render: function() {
    console.log('rendering');
    return <button onClick={this.update}>{this.state.val}</button>
  }
});

// React.render renders the component.
// React.unmountComponentAtNode removes the component.

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