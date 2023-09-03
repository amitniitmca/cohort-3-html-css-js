function isNegative(item){
    return item < 0;
}

function isPositive(item){
    return item > 0;
}

let myarray1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let myarray2 = [10, 20, 30, 40, -50, 60, 70, -80, 90, -100];

let newArray1 = myarray1.filter(isNegative);
let newArray2 = myarray1.filter(isPositive);
let newArray3 = myarray2.filter(isNegative);
let newArray4 = myarray2.filter(isPositive);

console.log(newArray1);
console.log(newArray2);
console.log(newArray3);
console.log(newArray4);
