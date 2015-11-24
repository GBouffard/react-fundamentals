// Mixins is about passing functionalities into multiple components.
// For example, if we want componentWillMount to be used on 2 objects or more.

// In this example, var ReactMixin is NOT a React class 
// (done with React.createClass({}); and has render, etc...)

var ReactMixin = {
  getInitialState:function(){
    return {count:0}
  },
  componentWillMount:function(){
    console.log("will mount!");
  },
  incrementCount:function(){
    this.setState({count: this.state.count+1});
  }
}

// simple App that renders a Button and a Label component

var App = React.createClass({
  render:function(){
    return(
      <div>
        <Button txt="this is the button" />
        <br />
        <Label txt="this is the label" />
      </div>
    )
  }
});

// mixins:[myObjectName] is how we it's done for the component to also inherit methods
// from myObjectName. It follows the DRY rule.

var Button = React.createClass({
  mixins:[ReactMixin],
  render:function(){
    return <button onClick={this.incrementCount}>{this.props.txt} - {this.state.count} </button>
  }
});

// When there are 2 componentWillMount methods, both are running, one after another.

var Label = React.createClass({
  mixins:[ReactMixin],
  componentWillMount:function(){
    console.log("This runs after the first componentWillMount has finished running!"),
    setInterval(this.incrementCount, 1000);
  },
  render:function(){
    return(
      <label>{this.props.txt} - {this.state.count}</label>
    )
  }
});

React.render(<App />, document.body);