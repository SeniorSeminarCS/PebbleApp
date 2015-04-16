var UI = require('ui');
var phrasebook = {
  "value" : " ",
   getPhrasebook : function(){
     
   var langOptions = [{
    title: "Spanish",
    subtitle: "Translate to Spanish"
    },
    {
    title: "Italian",
    subtitle: "Translate to Italian"
    },
    {
    title: "French",
    subtitle: "Translate to French"
    }];
    var langMenu = new UI.Menu({
    sections: [{
      title: 'Language',
      items: langOptions
      }]
  });
  var languageSelection;
  langMenu.show();
  
    var phrasesE = [
  {
    title: "Hello"
  },
  {
    title: "How are you?"
  },
  {
    title: "My name is..."
  },
  {
    title: "Where is the bathroom?"
  },
  {
    title: "Speaking English",
    subtitle: "Do you speak English?"
  },
  {
    title: "Can you help me?"
  },
  {
    title: "I don't understand."
  },
  {
    title: "I am lost."
  },
  {
    title: "Can you write that down for me?"
  },
  {
    title: "Calling Embassy",
    subtitle: "Please call the Embassy"
  },
  {
    title: "I need the police"
  },
  {
    title: "Where is the airport?"
  }
  ];
  var EngCard = new UI.Menu({
  sections: [{
    title: 'English Phrase',
    items: phrasesE
    }]
  });
  langMenu.on('select', function(event) {
    languageSelection = event.itemIndex;
    EngCard.show();
  }); 
  var wordChoice;
  
 EngCard.on('select', function(event){
   wordChoice = event.itemIndex;
   var detailCard = new UI.Card();
   var trans = ' ';
   console.log(wordChoice);
   switch(languageSelection){
     case 0:
     switch(wordChoice){
       case 0:
         trans = 'Hola';
         break;
       case 1:
         trans = '¿Cómo está?';
         break;
       case 2:
         trans = 'Me llamo...';
         break;  
       case 3:
         trans = '¿Donde esta el baño?';
         break;
       case 4:
         trans = '¿Hables ingles?';
         break;
       case 5:
         trans = '¿Puede ayudame?';      
         break;
       case 6:
         trans = 'No entiendo';
         break;
       case 7:
         trans = 'Estoy perdido.';
         break;
       case 8:
         trans = '¿Puede escribirlo para mi?';
         break;
       case 9:
         trans = '¿Por favor, llama la Embajada Americana';
         break;
       case 10:
         trans = 'Necesito la policiá';
         break;
       case 11:
         trans = '¿Dónde está el aeropuerto?';
         break;
       default:
         trans = 'Error!';
         break;
     }
     break;
     case 1:
     switch(wordChoice){
       case 0:
         trans = 'Ciao';
         break;
       case 1:
         trans = 'Como state?';
         break;
       case 2:
         trans = 'Mi chiamo...';
         break;  
       case 3:
         trans = 'Dove posso trovare il bagno?';
         break;
       case 4:
         trans = 'Parla inglese?';
         break;
       case 5:
         trans = 'Potrebbe aiutarmi?';      
         break;
       case 6:
         trans = 'Non capisco!';
         break;
       case 7:
         trans = 'Mi sono perso.';
         break;
       case 8:
         trans = 'Puòscrivere per favore?';
         break;
       case 9:
         trans = '¿Per favore, chiama la Ambasciata Americana.';
         break;
       case 10:
         trans = 'Devo la polizia.';
         break;
       case 11:
         trans = 'Dove posso trovare aeroporto?';
         break;
       default:
         trans = 'Error!';
         break;
     }
     break;  
     case 2:
     switch(wordChoice){
       case 0:
         trans = 'Bonjour.';
         break;
       case 1:
         trans = 'Ça va?';
         break;
       case 2:
         trans = 'Je m\'appelle...';
         break;  
       case 3:
         trans = 'Où sont les toilettes?';
         break;
       case 4:
         trans = 'Parlez-vous Anglais?';
         break;
       case 5:
         trans = 'Pouvez-vous m\'aider?';      
         break;
       case 6:
         trans = 'Je ne comprends pas!';
         break;
       case 7:
         trans = 'Je suis perdu.';
         break;
       case 8:
         trans = 'Est-ce que vous pourriez l\'écrire?';
         break;
       case 9:
         trans = '¿Merci, appelez la Ambassade Américain.';
         break;
       case 10:
         trans = 'J\'ai besoin de la police.';
         break;
       case 11:
         trans = 'Où est l\'aéroport?';
         break;
       default:
         trans = 'Error!';
         break;
     }
     break;
  default:
     break;
   }
   console.log(trans);
   detailCard.subtitle(trans);  
   console.log(detailCard.subtitle());
   detailCard.show();
 });
  }
 
};
this.exports = phrasebook;