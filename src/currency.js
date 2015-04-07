var UI = require('ui');
var ajax = require('ajax');
var currency = {
  "value" : " ",
  getCurrency : function(){
    var selection;
    var finalValue;
    var curr1;
    var curr2;
    var currencies = [
  {
    title: "USD <--> EUR",
    subtitle: "US Dollar & Euro"
  },
  {
    title: "USD <--> GBP",
    subtitle: "US Dollar & Pound"
  },
       {
    title: "EUR <--> GBP",
    subtitle: "Euro & Pound"
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
   action: {
    up: 'images/action_icon_plus.png',
    down: 'images/action_icon_minus.png'
  },
   title: "Enter a value",
   subtitle: "0"
   //scrollable: true
 });
  //valueCard.show();
    
  detailCard.on('select', function(event) {
        valueCard.show();
        selection = event.itemIndex;
  });
  
  valueCard.on('longClick','up', function(){
      var newVal = Math.round(valueCard.subtitle()) + 10;
      console.log("THe new value is "+newVal);
      valueCard.subtitle(""+newVal);
  });  

  valueCard.on('click','up', function(){
      var newVal = Math.round(valueCard.subtitle()) + 1;
      console.log("THe new value is "+newVal);
      valueCard.subtitle(""+newVal);
  });  
    valueCard.on('click','down', function(){
      var newVal = Math.round(valueCard.subtitle()) -1;
      if(newVal<0)
          newVal = 0;
      valueCard.subtitle(""+newVal);
  }); 
    valueCard.on('longClick','down', function(){
      var newVal = Math.round(valueCard.subtitle()) -10;
      if(newVal<0)
          newVal = 0;
      valueCard.subtitle(""+newVal);
  }); 
    valueCard.on('click', 'select', function(){
        finalValue = Math.round(valueCard.subtitle());
        switch(selection){
          case 0:
            curr1 = "USD";
            curr2 = "EUR";
            break;
          case 1:
            curr1 = "USD";
            curr2 = "GBP";
            break;
          case 2:
            curr1 = "EUR";
            curr2 = "GBP";
            break;
          default:
            curr1 = "USD";
            curr2 = "USD";
            break;
        }
        var URL = "http://www.freecurrencyconverterapi.com/api/v3/convert?q="+curr1+"_"+curr2+"&compact=y";
        var conversion1;
        var rate2;
        var conversion2;
        ajax({url: URL, type: 'json'},
        function (json) {
        // Use data to show a currency  Card
        var results = curr1+"_"+curr2;
        rate2 = 1/json[results].val;
        conversion1 = Math.round(json[results].val*finalValue * 100) / 100;
        conversion2 = Math.round(rate2*finalValue*100)/100;
        var resultsCard = new UI.Card({
          title:  "",
          subtitle: "Conversion:\n"+finalValue+" "+curr1+" = "+(conversion1)+" "+curr2 +"\n"+ finalValue+" "+curr2+" = "+(conversion2)+" "+curr1,
          scrollable: true
        });
      
      // Show results, remove splash card
      resultsCard.show();

      },
      function(error) {
        console.log("ERROR!!!");
        console.log('Ajax failed: ' + error);
      });
    });
  }
};

this.exports = currency;