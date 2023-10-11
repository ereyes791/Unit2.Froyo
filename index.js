const flavors = prompt("What flavor do you want?separated by commas","vanilla,vanilla,vanilla,strawberry,coffee,coffee");

// convert the string into an array
const flavorsArray = flavors.split(",");
console.log(flavorsArray);
//pointer to iterate the flavorsArray
let pointer = 0;
const flavorsCounterObj = {};
// iterate the flavorsArray and count the number of each flavor using object.
flavorsArray.forEach((flavor) => {
    flavorsCounterObj[flavor]? flavorsCounterObj[flavor]++ : flavorsCounterObj[flavor] = 1;
});
//test
console.table(flavorsCounterObj);
// convert the object into an array and join it
//const keysFlavorArray = Object.keys(flavorsCounterObj);
//const valueFlavorArray = Object.values(flavorsCounterObj);
// convert the object into an array and join it
//const flavorsCounterArray = [];
//while(pointer < keysFlavorArray.length){
//    flavorsCounterArray.push(valueFlavorArray[pointer],keysFlavorArray[pointer]);
//    pointer++;
//}
//console.log(flavorsCounterArray.join(","));