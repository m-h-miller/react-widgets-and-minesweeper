var Game = React.createClass({
  getInitialState: function() {
    return {
      board: new Minesweeper.Board(9, 10),
      gameOver: false,
      gameWon: false
    };
  },

  render: function() {
    return(
      <div className="game-display">
        <h1>Sweep Mines</h1>
        <Board board={this.state.board} updateGame={this.updateGame}/>
      </div>
    );
  },

  updateGame: function(){

  }

});

var Board = React.createClass({

  render: function() {

    return (
      <div>
      {this.props.board.grid.map(function(row, i){
        return (
          <ul className="group">
            {row.map(function(tile, j){
          return <li><Tile tile={this.props.board.grid[i][j]} /></li>;
        }.bind(this))}
        </ul>);
      }.bind(this))}
      </div>
    );
  }

});

var Tile = React.createClass({

  render: function(){
    var text = "";

    return (
      <div className="tile"></div>
    );
  }
});
