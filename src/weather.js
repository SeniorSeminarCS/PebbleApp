
var UI = require('ui');
var ajax = require('ajax');
var weather = {
  "value" : " ",
  updateWeather : function(){
  var lat, long;

  console.log("Inside Weather");
  var locationOptions = {
  enableHighAccuracy: true, 
  maximumAge: 10000, 
  timeout: 10000
  };

  function locationError(err) {
    console.log('location error (' + err.code + '): ' + err.message);
  }
  function locationSuccess(pos) {
    //console.log('lat= ' + pos.coords.latitude + ' lon= ' + pos.coords.longitude);
    long = pos.coords.longitude;
    lat = pos.coords.latitude;
    var URL =  "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&type=accurate&mode=json";
    console.log("GOT TO API REQUEST: "+URL);
    ajax({url: URL, type: 'json'},
    function(json) {
      console.log("NAME = "+json.name);
      var tempC = Math.round(json.main.temp - 273.15);
      var tempF = tempC*9/5 +32;
    // Use data to show a weather forecast Card
    var resultsCard = new UI.Card({
      title: json.name+', '+json.sys.country,
      subtitle:  tempC +'°C / '+tempF + '°F',
      body: json.weather[0].main + '\nH: '+Math.round(json.main.temp_max-273.15)+'°C  L: '+Math.round(json.main.temp_min-273.15)+'°C'
    });

    // Show results, remove splash card
    resultsCard.show();

    },
    function(error) {
      console.log("ERROR!!!");
      console.log('Ajax failed: ' + error);
    }
    );

  }
  navigator.geolocation.getCurrentPosition(locationSuccess, locationError, locationOptions);

}
};
this.exports = weather;