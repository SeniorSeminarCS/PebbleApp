var UI = require('ui');

// Make a list of menu items
var pebblets = [
  {
    title: "Weather",
    subtitle: "Current forecasts"
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
      // Show a card with clicked item details
      var detailCard = new UI.Card({
        title: phrases[0].title
      });
    
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



