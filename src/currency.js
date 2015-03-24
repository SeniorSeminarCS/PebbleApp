//    http://www.freecurrencyconverterapi.com/api/v3/convert?q="+document.getElementById("fromCur").value+"_"+document.getElementById("toCur").value+"&compact=y&callback=myCallback"
var UI = require('ui');
//var ajax = require('ajax');
var currency = {
  "value" : " ",
  getCurrency : function(){
    var selection;
    var currencies = [
  {
    title: "USD <--> EUR",
    subtitle: "US Dollar & Euro"
  },
  {
    title: "USD <--> GBP",
    subtitle: "US Dollar & Pound"
  }
  ];
    var detailCard = new UI.Menu({
    sections: [{
      title: 'Currency',
      items: currencies
      }]
});
  // Show the new Card
  detailCard.show(); 
    
 var valueCard = new UI.Card({
   title: 'Enter a value',
   body: '0'
   //scrollable: true
 });
  //valueCard.show();
    
  detailCard.on('select', function(event) {
        valueCard.show();
        selection = event;
  });
  valueCard.on('click','up', function(){
      console.log("you pressed up");
      console.log(valueCard.body.value);
     // valueCard.body(valueCard.body +1);
  });  
    valueCard.on('down', function(event){
      console.log("you pressed down");
      valueCard.body(valueCard.body - 1);
      if(valueCard.body < 0)
          valueCard.body('0');
  });  
  }
};
this.exports = currency;