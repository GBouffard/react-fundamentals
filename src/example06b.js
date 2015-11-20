// Made an example 6b to make each slider independant

var App = React.createClass({
  getInitialState: function() {
    return {
      state1: 0,
      state2: 0,
      state3: 0
    }
  },
  update1: function(e) {
    this.setState({
      state1: this.refs.slider1.refs.nameIGave.getDOMNode().value
    });
  },
  update2: function(e) {
    this.setState({
      state2: this.refs.slider2.refs.nameIGave.getDOMNode().value
    });
  },
  update3: function(e) {
    this.setState({
      state3: this.refs.slider3.refs.nameIGave.getDOMNode().value
    });
  },
  render: function() {
    return (
      <div>
        <Slider ref="slider1" update={this.update1} /><label>{this.state.state1}</label>
        <Slider ref="slider2" update={this.update2} /><label>{this.state.state2}</label>
        <Slider ref="slider3"  update={this.update3} /><label>{this.state.state3}</label>
      </div>
    )
  }
});

var Slider = React.createClass({
  render: function() {
    return (
      <div>
        <input ref="nameIGave" type="range" min="0" max="255" onChange={this.props.update} />
      </div>
    )
  }
});

React.render(<App />, document.body); 