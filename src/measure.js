var UI = require('ui');
var measure = {
  "value" : " ",
  getMeasure : function(){
  var typeSelection, unitSelection;
  var unitTypes = [
  {
    title: "Length",
    subtitle: "Convert Length"
  },
  {
    title: "Mass",
    subtitle: "Convert Mass"
  },
  {
    title: "Volume",
    subtitle: "Convert Volume"
  },
  {
    title: "Temperature",
    subtitle: "Convert Temperature"
  }
  ];
  var lengthTypes = [{title: "in <--> cm",subtitle: "Inches to Centimeters"},{title: "ft <--> m",subtitle: "Feet to Meters"},{title: "mi <--> km",subtitle: "Miles to Kilometers"}]; 
  var tempTypes = [{title: "°F <--> °C",subtitle: "Fahrenheit to Celsius"},{title: "°F <--> K",subtitle: "Fahrenheit to Kelvin"},{title: "°C <--> K",subtitle: "Celsius to Kelvin"}]; 
  var massTypes = [{title: "lbs <--> kg",subtitle: "Pounds to Kilograms"},{title: "oz <--> g",subtitle: "Ounces to Grams"}]; 
  var volTypes = [{title: "gal <--> l",subtitle: "Gallons to Liters"},{title: "fl oz <--> ml",subtitle: "Fluid ounces to Milliliters"}]; 
  var detailCard = new UI.Menu({
    sections: [{
      title: 'Unit Type',
      items: unitTypes
      }]
  });
  detailCard.show();
    
  var valueCard = new UI.Card({
    action: {
    up: 'images/action_icon_plus.png',
    down: 'images/action_icon_minus.png'
  },
    title: "Enter a value",
    subtitle: "0",
  });
  var lengthMenu = new UI.Menu({
    sections: [{
      title: 'Length Type',
      items: lengthTypes
    }]
  });
     var tempMenu = new UI.Menu({
    sections: [{
      title: 'Temperature Type',
      items: tempTypes
    }]
  });
     var massMenu = new UI.Menu({
    sections: [{
      title: 'Mass Type',
      items: massTypes
    }]
  });
    var volMenu = new UI.Menu({
    sections: [{
      title: 'Volume Type',
      items: volTypes
    }]
  });
  
  var ansCard = new UI.Card();
    
  detailCard.on('select', function(event) {
       valueCard.subtitle(""+0);
       typeSelection = event.itemIndex;
       switch(event.itemIndex){
         case 0:
           console.log("You selected Length");
           lengthMenu.show();
           break;
         case 1:
           console.log("You selected Mass");
           massMenu.show();
           break;
         case 2:
           console.log("You selected Volume");
           volMenu.show();
           break;
         case 3:
           console.log("You selected Temp");
           tempMenu.show();
           break;
         default:
           console.log("You should not be here");
           break;
       }      
  });
    lengthMenu.on('select', function(event){
      console.log("You selected Length Unit");
      unitSelection = event.itemIndex;
      valueCard.show();
    });
     volMenu.on('select', function(event){
      console.log("You selected Volume Unit");
      unitSelection = event.itemIndex;
      valueCard.show();
    });
     tempMenu.on('select', function(event){
      console.log("You selected Temperature Unit");
      unitSelection = event.itemIndex;
      valueCard.show();
    });
     massMenu.on('select', function(event){
      console.log("You selected Mass Unit");
      unitSelection = event.itemIndex;
      valueCard.show();
    });
    valueCard.on('longClick','up', function(){
      var newVal = Math.round(valueCard.subtitle()) + 10;
      console.log("The new value is "+newVal);
      valueCard.subtitle(""+newVal);
  });  

  valueCard.on('click','up', function(){
      var newVal = Math.round(valueCard.subtitle()) + 1;
      console.log("The new value is "+newVal);
      valueCard.subtitle(""+newVal);
  });  
    valueCard.on('click','down', function(){
      var newVal = Math.round(valueCard.subtitle()) -1;
      if(newVal<0 && typeSelection !=3)
          newVal = 0;
      valueCard.subtitle(""+newVal);
  }); 
    valueCard.on('longClick','down', function(){
      var newVal = Math.round(valueCard.subtitle()) -10;
      if(newVal<0 && typeSelection!=3)
          newVal = 0;
      valueCard.subtitle(""+newVal);
  }); 
  valueCard.on('click','select', function(){
      console.log("You selected value");
      var val1 = 0;
      var val2 = 0;
      var input = Math.round(valueCard.subtitle());
        switch(typeSelection){
          case 0://Length
            switch(unitSelection){
              case 0://in <--> cm
                val1 = Math.round(input*2.54*1000)/1000;
                val2 = Math.round(input*(1/2.54)*1000)/1000;
                ansCard.subtitle(input+"in = "+val1+"cm\n"+input+"cm = "+val2+"in");
                break;
              case 1://ft <--> m
                val1 = Math.round(input*0.3048*1000)/1000;
                val2 = Math.round(input*(1/0.3048)*1000)/1000;
                ansCard.subtitle(input+"ft = "+val1+"m\n"+input+"m = "+val2+"ft");
                break;
              case 2://mi <-->km
                val1 = Math.round(input*1.60934*1000)/1000;
                val2 = Math.round(input*(1/1.60934)*1000)/1000;
                ansCard.subtitle(input+"mi = "+val1+"km\n"+input+"km = "+val2+"mi");
                break;
            }
            break;
          case 1://Mass
            switch(unitSelection){
              case 0://lb <--> kg
                val1 = Math.round(input*0.453592*1000)/1000;
                val2 = Math.round(input*(1/0.453592)*1000)/1000;
                ansCard.subtitle(input+"lbs = "+val1+"kg\n"+input+"kg = "+val2+"lbs");
                break;
              case 1://oz<--> g
                val1 = Math.round(input*28.3495*1000)/100;
                val2 = Math.round(input*(1/28.3495)*1000)/100;
                ansCard.subtitle(input+"oz = "+val1+"g\n"+input+"g = "+val2+"oz");
                break;
            }
            break;
          case 2: //Volume
            switch(unitSelection){
              case 0://gallon <--> liter
                val1 = Math.round(input*3.78541*1000)/1000;
                val2 = Math.round(input*(1/3.78541)*1000)/1000;
                ansCard.subtitle(input+"gal = "+val1+"l\n"+input+"l = "+val2+"gal");
                break;
              case 1://fl oz <--> milliliter
                val1 = Math.round(input*29.5735*1000)/1000;
                val2 = Math.round(input*(1/29.5735)*1000)/1000;
                ansCard.subtitle(input+"fl oz = "+val1+"ml\n"+input+"ml = "+val2+"fl oz");
                break;
            }
            break;
          case 3://Temp
            switch(unitSelection){
              case 0://°F <--> °C
                val1 = Math.round(((input-32)*5.0/9.0)*1000)/1000;
                val2 = Math.round(((input*9.0/5.0)+32)*1000)/1000;
                ansCard.subtitle(input+"°F = "+val1+"°C\n"+input+"°C = "+val2+"°F");
                break;
              case 1://°F <--> K
                val1 = Math.round(((input+459.67)*5.0/9.0)*1000)/1000;
                val2 = Math.round(((input*9.0/5.0) -459.67)*1000)/1000;
                ansCard.subtitle(input+"°F = "+val1+"K\n"+input+"K = "+val2+"°F");
                break;
              case 2://°C <--> K
                val1 = Math.round((input+273.15)*1000)/1000;
                val2 = Math.round((input-273.15)*1000)/1000;
                ansCard.subtitle(input+"°C = "+val1+"K\n"+input+"K = "+val2+"°C");
                break;
            }
        }//end big case switch
      ansCard.show();
    });
}
};
this.exports = measure;
  
 