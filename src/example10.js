var Button = React.createClass({
  getInitialState: function(){
    return {increasing: false}
  },

// setProps is only available on components passed directly into React.Render
  update: function(){
    this.setProps({val: this.props.val + 1}) 
  },

// ComponentWillReceiveProps is only invoked when a component receives a new props.
// we give it a name as an argument to compare to the previous prop: nextProps.val & this.props.val
// if the property val increases, then this simply is equivalent to setting {increasing: true}
  componentWillReceiveProps: function(nextProps){ 
    this.setState({increasing: nextProps.val > this.props.val});
  },

// shouldComponentUpdate updates only triggers if the condition is true
// in our example, if it's a multiple of 5.
  shouldComponentUpdate: function(nextProps, nextState){
    return nextProps.val % 5 === 0;
  },

  render: function(){
    console.log(this.state.increasing)
    return (
      <button onClick={this.update}>{this.props.val}</button>
      );
  }, 

// componentDidUpdate is only triggered if shouldComponentUpdate was true.
  componentDidUpdate: function(prevProps, prevState){
    console.log("previous props", prevProps);
  }
});

React.render(< Button val={0} />, document.body);