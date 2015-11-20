// Using Refs to access components. In this example, we have 3 sliders, initially at 0
// onChange={this.props.update} triggers to set different states defined in this.setState {}
// we diplsay them in labels with {this.state.correspondingName}

// synatx state1: this.refs.slider1.refs.nameIGave.getDOMNode().value
// - refers to slider 1, then to nameIGave in that slider and we save that value in state1 

// why when clikcing a slider at first value go to 128?
// my guess is that this.update changes the value of the 3 states and when we click 1 slider,
// the 2 others are actually at 128

var App = React.createClass({
  getInitialState: function() {
    return {
      state1: 0,
      state2: 0,
      state3: 0
    }
  },
  update: function(e) {
    this.setState({
      state1: this.refs.slider1.refs.nameIGave.getDOMNode().value,
      state2: this.refs.slider2.refs.nameIGave.getDOMNode().value,
      state3: this.refs.slider3.refs.nameIGave.getDOMNode().value
    });
  },
  render: function() {
    return (
      <div>
        <Slider ref="slider1" update={this.update} /><label>{this.state.state1}</label>
        <Slider ref="slider2" update={this.update} /><label>{this.state.state2}</label>
        <Slider ref="slider3"  update={this.update} /><label>{this.state.state3}</label>
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