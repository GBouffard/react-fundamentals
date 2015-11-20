// <b>BOLD</b> <h1>Hello Guillaume</h1>
// alone didn't display. We needed a parent node, hence the div.

var App = React.createClass({
  render: function() {
    return (
      <div>
        <b>WORKS BECAUSE OF THE DIV</b>
        <h1>Hello Guillaume</h1>
      </div>
    )
  }
});

React.renderComponent(<App />, document.body);
