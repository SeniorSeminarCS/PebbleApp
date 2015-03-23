var UI = require('ui');
var ajax = require('ajax');
//var dep = require('app');
var lat, long;

console.log("Inside Weather");
var locationOptions = {
  enableHighAccuracy: true, 
  maximumAge: 10000, 
  timeout: 10000
  };
// Make an asynchronous request

function locationSuccess(pos) {
  console.log('lat= ' + pos.coords.latitude + ' lon= ' + pos.coords.longitude);
  long = pos.coords.longitude;
  lat = pos.coords.latitude;
}

function locationError(err) {
  console.log('location error (' + err.code + '): ' + err.message);
}
navigator.geolocation.getCurrentPosition(locationSuccess, locationError, locationOptions);

var URL =  "api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long;
ajax({url: URL, type: 'json'},
  function(json) {
    console.log("Inside function");
    var temp = Math.round(json.main.temp - 273.15);

  // Use data to show a weather forecast Card
  var resultsCard = new UI.Card({
    title: 'London, UK',
    body: json.weather[0].main + '\nTemp: ' + temp
  });

  // Show results, remove splash card
  resultsCard.show();

  },
  function(error) {
    console.log('Ajax failed: ' + error);
  }
  );
