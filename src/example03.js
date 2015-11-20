// props are like attributes/properties of the class
// called and displayed within { }
// wither with variables or with this.props.attributeName

var App = React.createClass({
  getDefaultProps:function(){
  	return {
      txt: 'This is a default prop',
      cat: 0
  	}
  },
  propTypes: {
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
  },
  render: function() {
  	var display= this.props.txt
    return (
      <div>
        <h1>{this.props.example}</h1>
        <h2>{display}</h2>        
      </div>
    )
  }
});

React.render(<App cat={5} example='Guillaume' />, document.body);
