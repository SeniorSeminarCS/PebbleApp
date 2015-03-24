var UI = require('ui');
var weather = require('weather');
var currency = require('currency');
var phrasebook = require('phrasebook');
var measure = require('measure');

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
          weather.updateWeather();
          break;
          
        case 1:
          currency.getCurrency();
          break;
          
        case 2:
          measure.getMeasure();
          break;
          
        case 3:
          console.log("GOT HERE");
          console.log(phrasebook);
          phrasebook.getPhrasebook();
          break;
          
        default:
          break;
      }
      // Show a card with clicked item details
   /*   detailCard = new UI.Card({
        title: phrases[0].title
      });*/
    
    
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



