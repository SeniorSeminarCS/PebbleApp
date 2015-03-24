var UI = require('ui');
var ajax = require('ajax');
//var long, lat;

function updateWeather(){
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
      title: json.name,
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
// Make a list of menu items
var pebblets = [
  {
    title: "Weather",
    subtitle: "Current local weather"
  },
  {
    title: "Currency",
    subtitle: "Convert money"
  },
  {
    title: "Measurment",
    subtitle: "Convert units"
  },
  {
    title: "Phrasebook",
    subtitle: "Spanish translations"
  }
];

// Create the Menu, supplying the list of fruits
var appMenu = new UI.Menu({
  sections: [{
    title: 'Travel App',
    items: pebblets
  }]
});

// Show the Menu
appMenu.show();
var phrases = [
  {
    title: "Hello",
    subtitle: "Hola"
  },
  {
    title: "I need help",
    subtitle: "Necesito ayuda"
  },
  {
    title: "Do you speak English?",
    subtitle: "¿Hablas ingles?"
  },
  {
    title: "I'm not from here.",
    subtitle: "No soy de aqui."
  }
];
// Add a click listener for select button click
appMenu.on('select', function(event) {
      var detailCard;
      console.log(event.itemIndex);
      switch(event.itemIndex){
          
        case 0:
          updateWeather();
          console.log("Case 0 - Weather");
          /*detailCard = new UI.Card({
            title: "Weather"
          });*/
          break;
          
        case 1:
           console.log("Case 1 - Curency");
           detailCard = new UI.Card({
            title: "Currency"
          });
          break;
          
        case 2:
           console.log("Case 2 - Measurement");
            detailCard = new UI.Card({
            title: "Measurement"
            });
          break;
          
        case 3:
         console.log("Case 3 - Phrasebook");
          detailCard = new UI.Menu({
             sections: [{
              title: 'Phrasebook',
              items: phrases
            }]
          });
          break;
          
        default:
          console.log("Default Case");
          detailCard = new UI.Card({title: phrases[3].title});
          break;
      }
      // Show a card with clicked item details
   /*   detailCard = new UI.Card({
        title: phrases[0].title
      });*/
    
      // Show the new Card
      detailCard.show();
});

/*  //PHRASEBOOK


// Create the Menu, supplying the list of fruits
var phraseMenu = pebblets[3]({
  sections: [{
    title: 'Spanish Phrases',
    items: phrases
  }]
});
phraseMenu.show();

phraseMenu.on('select', function(event) {
  // Show a card with clicked item details
  var phraseCard = new UI.Card({
    title: phrases[event.itemIndex].title,
    body: phrases[event.itemIndex].subtitle
  });

  // Show the new Card
  phraseCard.show();
});*/



