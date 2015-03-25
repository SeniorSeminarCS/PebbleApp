var UI = require('ui');
var weather = require('weather');
var currency = require('currency');
var phrasebook = require('phrasebook');
var measure = require('measure');
var Vector2 = require('vector2');

// Create the Window
var window = new UI.Window();

// Create a background Rect
var bgRect = new UI.Rect({
  position: new Vector2(10, 70),
  size: new Vector2(124, 7),
  backgroundColor: 'black',
  borderColor: 'white'
});

// Add Rect to Window
window.add(bgRect);

// Create TimeText
var timeText = new UI.TimeText({
  position: new Vector2(0, 25),
  size: new Vector2(144, 30),
  text: "%H:%M",
  font: 'bitham-42-bold',
  color: 'white',
  textAlign: 'center'
});

var dateText = new UI.TimeText({
  position: new Vector2(0,80),
  size: new Vector2(144,30),
  text: "%a %d %b \n%Y",
  font: 'Gothic-24-bold',
  color: 'white',
  textAlign: 'center'
});

// Add the TimeText
window.add(timeText);
window.add(dateText);

// Show the Window
window.show();

window.on('click','select', function(){
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

// Add a click listener for select button click
appMenu.on('select', function(event) {
      console.log(event.itemIndex);
      switch(event.itemIndex){        
        case 0:
          console.log("Case 0 - WEATHER");
          weather.updateWeather();
          break;
          
        case 1:
          console.log("Case 1 - CURRENCY");
          currency.getCurrency();
          break;
          
        case 2:
          console.log("Case 2 - MEASURE");
          measure.getMeasure();
          break;
          
        case 3:
          console.log("Case 3 - PHRASEBOOK");
          phrasebook.getPhrasebook();
          break;
          
        default:
          break;
      }
    
});
});

