var Autocomplete = React.createClass({
  getInitialState: function() {
    return {queryString: ""};
  },

  handleKeystroke: function(event){

    event.preventDefault();

    this.setState({queryString: event.currentTarget.value });
  },

  render: function(){
    var result = [];

    if (this.state.queryString.length === 0){
      result.push(<li> No results Found </li>);
    } else { for (var i = 0; i < this.props.names.length; i++) {
        var subLength = this.state.queryString.length;
        if (this.props.names[i].substring(0, subLength) === this.state.queryString) {
          result.push(<li>{this.props.names[i]} </li>);
        }
      }
    }

    return (
      <div className="autocomplete">
        <h1>Autocomplete</h1>
        <input type="text" onChange={this.handleKeystroke} value={this.state.queryString}/>
        <ul>
          {result}
        </ul>
      </div>
    );
  }

});
