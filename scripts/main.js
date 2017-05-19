

//  changeText script

var text = ["Breathe Air", "Drink Water", "Wear Clothes", "Live in a Shelter", "Use Medicine", "Enjoy the Outdoors"];
var counter = 0;
var elem = document.getElementById("changeText");
setInterval(change,2000);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if(counter >= text.length){
    counter = 0;
  }
}

change();
