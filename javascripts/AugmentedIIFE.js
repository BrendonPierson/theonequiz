// In the file named AugmentedIIFE.js, 
// augment FruitMaker with a function named slices() that accepts two arguments:
//  the name of the fruit, and the number of slices to make. 
// It should return an array containing the name of the fruit duplicated how ever many slices was requested.

var FruitMaker = (function (fruitMaker){
    
  fruitMaker.slices = function(fruit, slices){
    var sliced = [];
    for (var i = 0; i < slices; i++) {
      sliced[i] = fruit;
    };
    return sliced;
  }

  return {
    fruitMaker
  };
  
})(FruitMaker);


console.log("FruitMaker", FruitMaker);
console.log("fruit slices", FruitMaker.fruitMaker.slices("bananas", 5));