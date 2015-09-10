var vJavascript = document.getElementById("vanilla_output");
vJavascript.innerHTML = "<p>This content generated with vanilla JavaScript</p>";

$("#jquery_output").text("This content generated with jQuery");


function modulus(arg1, arg2){
  return arg1 % arg2
}
console.log("modulus", modulus(10, 3));

function doMath(x, y, fn) {
  return fn(x,y);
}
console.log("doMath-", doMath(10, 3, subtract));
console.log("doMath+", doMath(10, 3, add));

function add(x, y) {
  return x + y;
}
function subtract(x, y) {
  return x - y;
}

var Planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
function sortedPlanets(arr) {
  return arr.sort();
}
console.log("sortedPlanets", sortedPlanets(Planets));

function reversed(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split('').reverse().join('');
  };
  return arr;
}
console.log("reversed", reversed(Planets));

function longPlanets(arr){
  return arr.filter(function(n){
    return n.length > 6;
  });
}
console.log("longPlanets", longPlanets(Planets));

function getAnimals(){
  $.ajax({
    url: "data/animals.json"
  }).done(function(data){
    console.log("animals", data.animals);
  });
}

getAnimals();







