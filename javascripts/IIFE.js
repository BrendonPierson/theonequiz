var FruitMaker = (function(){

  var fruits = ["apples", "bananas", "cherries", "huckleberries"];

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