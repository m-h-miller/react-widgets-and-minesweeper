var Clock = React.createClass({
  getInitialState: function() {
    return {
      date: new Date()
    };
  },

  componentDidMount: function() {
    this.intervalId = window.setInterval(function() {
      this.setState({date: new Date() });
    }.bind(this), 1000);

  },

  componentWillUnmount: function() {
    clearInterval(this.intervalId);
  },

  render: function(){
    return (
      <div className="clock">
        <p> Date : {this.state.date.toString()} </p>
      </div>
    );
  }

});

var Weather = React.createClass({
  getInitialState: function() {
    return {
      temperature: "",
      desc: ""
    };
  },

  componentDidMount: function() {
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;

      var request = new XMLHttpRequest();
      request.open('GET',"http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&APPID=555b76bd0b545dc97600353e141cf644", true);

      request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
          var resp = JSON.parse(request.responseText);
          this.setState({temperature: resp.main.temp});
          this.setState({desc: resp.weather[0].description});
        }
      }.bind(this);

      request.onerror = function() {
        console.log("uh oh");
      };

      request.send();
    }.bind(this));
  },

  componentWillUnmount: function() {

  },

  render: function(){
    return (
      <div className="weather">
        <p>Temp : {this.state.temperature}</p>
        <p>Description : {this.state.desc}</p>
      </div>
    );
  }

});

var WeatherClock = React.createClass({
  render: function() {
    return(
      <div className="weatherclock">
        <h1>Weather Clock</h1>
        <Clock />
        <Weather />
      </div>
    );
  }
});
