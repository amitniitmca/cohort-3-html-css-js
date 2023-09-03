let myarray = ["Amit", "Stephania", "Besher", "Azar"];

let ret = myarray.push(10);
// Adds an element to the last location of the array
// returns the new length (# of elements) of the array
console.log(myarray);
console.log(ret);

ret = myarray.pop();
// Removes the last element from the array and returns it
console.log(myarray);
console.log(ret);

ret = myarray.shift();
// Removes the first element from the array and returns it
console.log(myarray);
console.log(ret);

ret = myarray.unshift(100);
// Adds an element to the first position and 
// returns the new length of the array
console.log(myarray);
console.log(ret);

/*
    ADDING => Push (END), Unshift (START)
    REMOVING => Pop (END), Shift (START)
*/