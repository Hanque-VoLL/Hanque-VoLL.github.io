var manga1 = "banana";
var manga2 = "pineapple";
var manga3 = "apple";
var manga4 = "peach";
var manga5 = "orange";

var fruitArray = ["banana", "pineapple", "apple", "peach", "orange"];

var mixedArray = [42, "pineapple", true, [3, 6, "nine"], "orange"];

console.log(fruitArray(0));

fruitArray[1] = "tomato";

console.log(fruitArray.length);

for(let fruit of fruitArray){
    console.log(fruit);
    if(fruit === "tomato"){
        console.log("but is it fruit?");
    } else {
        console.log(fruit);
    }
}

