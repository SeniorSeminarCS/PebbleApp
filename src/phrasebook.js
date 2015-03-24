var UI = require('ui');
var phrasebook = {
  "value" : " ",
  getPhrasebook : function(){
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
  var detailCard = new UI.Menu({
    sections: [{
      title: 'Phrasebook',
      items: phrases
      }]
  });
  // Show the new Card
  detailCard.show();  
  }
 
};
this.exports = phrasebook;