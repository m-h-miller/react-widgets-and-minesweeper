var Tabs = React.createClass({
  getInitialState: function() {
    return {index: 0};
  },

  handleClick: function(idx){
    this.setState({index: idx});
  },

  render: function() {
    var tabNames = [];

    for (var i = 0; i < this.props.items.length; i ++) {
      tabNames.push(<li onClick={this.handleClick.bind(this, i)}>{this.props.items[i].title}</li>);
    }

    return (
      <div>
        <h1>Pokemon (Tabs)</h1>
        <ul>
          {tabNames}
        </ul>
        <p>{this.props.items[this.state.index].content}</p>
      </div>
    );
  }


});
