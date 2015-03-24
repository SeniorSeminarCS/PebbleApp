//    http://www.freecurrencyconverterapi.com/api/v3/convert?q="+document.getElementById("fromCur").value+"_"+document.getElementById("toCur").value+"&compact=y&callback=myCallback"
var UI = require('ui');
var ajax = require('ajax');
var currency = {
  "value" : " ",
  getCurrency : function(){
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
  }
    
};
this.exports = currency;