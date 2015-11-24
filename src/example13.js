// For this example, we have a React object that at initial state is a table/Json object.

var PersonTable = React.createClass({
  getInitialState:function(){
    return{
      data:[
        {id: 1,  fname: "Guillaume",  lname: "Bouffard"},
        {id: 2,  fname: "Zinedine", lname: "Zidane"},
        {id: 3,  fname: "Thierry",   lname: "Henry"},
        {id: 4,  fname: "Patrick",    lname: "Vieira"},
        {id: 5,  fname: "Laurent",   lname: "Blanc"},
        {id: 6,  fname: "Didier", lname: "Deschamps"},
        {id: 7,  fname: "Marcel",  lname: "Desailly"},
        {id: 8,  fname: "Fabien",   lname: "Barthez"},
        {id: 9,  fname: "David",  lname: "Trezeguet"},
        {id: 10, fname: "Bixente",    lname: "Lizarazu"},
        {id: 11, fname: "Youri",   lname: "Djorkaeff"},
        {id: 12, fname: "Robert",    lname: "Pirès"},
        {id: 13, fname: "Lilian",  lname: "Thuram"},
        {id: 14, fname: "Emmanuel",  lname: "Petit"},
        {id: 15, fname: "Frank", lname: "Leboeuf"},
        {id: 16, fname: "Christian",  lname: "Karembeu"},
        {id: 17, fname: "Christophe",  lname: "Dugarry"},
        {id: 18, fname: "Aimé",  lname: "Jacquet"}
      ]
    }
  },

// In render, we want to return a table with each of these rows. We do it with <table>{rows}</table>
// and rows correspond to iterrating and mapping on each element of this.state.data 
// (defined in getInitialState ). We then have a PersonRow component that is returned
// and has 2 props data={person} and key={person.id}
// nb: key={person.id} is actually not being used.

  render:function(){
    var rows = this.state.data.map(function(person){
      return <PersonRow data={person} key={person.id}/>
    })
    return <table>{rows}</table>
  }
});

// Each PersonRow draws a table line with 3 columns with id, fname, lname.
var PersonRow = React.createClass({
  render:function(){
    return(
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.fname}</td>
        <td>{this.props.data.lname}</td>
      </tr>
    )
  }
});

React.render(<PersonTable />, document.body);