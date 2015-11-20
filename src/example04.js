// unlike props that are passed as Static values
// state is meant to be updated and maintained by our components

var App = React.createClass({
  getInitialState: function() {
    return { 
      txt: 'this is my initial state',
      id: 0
    }
  },
  updateTxt: function(e) {
    this.setState({ txt: e.target.value });
  },
  render: function() {
    return (
      <div>
        <input type="text" onChange={this.updateTxt} />
        <h1>{this.state.txt}</h1>
      </div>
    )
  }
});

React.render(<App txt="this is the txt prop" />, document.body);