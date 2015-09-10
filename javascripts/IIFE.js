// In the file named IIFE.js. 
// Write an IIFE that defines a global variable named FruitMaker. 
// It should contain a private array holding the following strings: "apples", "bananas", "cherries", "huckleberries".
// The IIFE should expose in its public interface a getter named getFruits() that returns all fruits, and a setter named addFruit() that provides the ability to add a new fruit to the array.

// For example: slices("apples", 2) should return ["apples", "apples"]



var FruitMaker = (function(){
  
  var fruits = ["apples", "bananas", "cherries", "huckleberries"]

  return {
    getFruits: function(){
      return fruits;
    },
    addFruit: function(fruit){
      fruits[fruits.length] = fruit;
    }
  };

})();

console.log("getFruits", FruitMaker.getFruits());