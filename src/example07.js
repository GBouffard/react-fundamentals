// Nesting: Accessing children. 
// In this example, we access <Heart /> within the button so a React class accessing anoter React class

var App = React.createClass({
  render: function() {
    return (
      <Button>I <Heart /> React</Button>
    )
  }
});

// {this.props.children} renders whatever was passed inside the button (including <Heart />)

var Button = React.createClass({
  render: function() {
    return <a className="btn btn-primary">{this.props.children}</a>
  }
});

var Heart = React.createClass({
  render: function() {
    return <span className="glyphicon glyphicon-heart"></span>
  }
});

React.render(<App />, document.body); 