// components should be re-usable / composable.
// in this example, we create a standard "number catcher" (slide 'range' or incrementer 'number')

var App = React.createClass({
// we set up the initial value as usual
  getInitialState:function(){
    return {
      ourValue: 0
    }
  },

// nb: At first we tried red: React.findDOMNode(this.refs.red.refs.inp).value
// but it didnt work: React v0.13 use React.findDOMNode()

// we set the State of ourValue on update
// this.refs refer to ALL the refs, so thats why we have this.refs.ourValue
// and .refs.inp refers to the input of NumberInput. We get that DOMNOde and value.

  updateInApp: function(){
    this.setState({
      ourValue: this.refs.ourValue.refs.inp.getDOMNode().value
    });
  },

// we render NumberInput in a div. We define the values that we want as our NumberInput.
// these values are the ones we defined as Props in the NumberInput component so min is a number
// max is a number, etc... + ref
// nb: ref is used as ref="ourValue" and not ref=ourValue
  render:function(){
    return (
      <div>
        <NumberInput
          ref="ourValue"
          min={0}
          max={255}
          step={0.01}
          val={+this.state.ourValue}
          type="number"
          label="This is our value: "
          update={this.updateInApp} />
      </div>
      );

  }
});

// NumberInput is component but it can be a type range or number, can have different 
// minimum or maximum, etc...can be re-used many times as long as we define how we want
// it to render in app.
//  For example, in App, if we change type="number" in type="range", it's clearer to understand.
// but we render a type="number" which overrides the type='range' from the default props

// 1) The first thing to do with such a component is to define each PropTypes
// (number, string, func, oneOf). We also specify for update that it isRequired in App
// ns: type: is an array that accept either the string number or the string range

var NumberInput = React.createClass({
  propTypes: {
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    step: React.PropTypes.number,
    val: React.PropTypes.number,
    label: React.PropTypes.string,
    update: React.PropTypes.func.isRequired,
    type: React.PropTypes.oneOf(['number', 'range'])
  },

// 2) we then define the default props:
  getDefaultProps:function(){
    return {
      min: 0,
      max: 0,
      step: 1,
      val: 0,
      label: '',
      type: 'range'
    }
  },

// 3) Then in the render method, we define what the component actually looks like.
// It's an input. Its value/ref is called "inp". It has a min, a max, a step, a default value.
// onChange, update is called and then we display {label}
// for label that we return in {label}, if its not an empty string, we return
// a <label> with our string {this.props.label} and the value {this.props.val}
// else we return an empty string (but that's not the case in our example)

// reminder: this.props refer to all the lists of props in the scope ({});.
// label is rendered as {label} because it's a string.
  render:function(){
    var label = this.props.label !== '' ?
      <label>{this.props.label} {this.props.val}</label> : ''
    return (
        <div>
        <input
          ref="inp"
          type={this.props.type}
          min={this.props.min}
          max={this.props.max}
          step={this.props.step}
          defaultValue={this.props.val}
          onChange={this.props.update} />
          {label}
        </div>
      );
  }
});

// defaultValue is only for the initial load. It means that it needs to be initialized in our App
// We have val:0 in getDefaultProps in our App

React.render(<App />, document.body);