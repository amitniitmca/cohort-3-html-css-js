function isNegative(item){
    return item < 0;
}

function isPositive(item){
    return item > 0;
}

let myarray1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let myarray2 = [10, 20, 30, 40, -50, 60, 70, -80, 90, 100];
let myarray3 = [-10, -20, -30, -40, -50, -60, -70, -80, -90, -100];

let var1 = myarray1.every(isNegative);
let var2 = myarray1.every(isPositive);

let var3 = myarray2.every(isNegative);
let var4 = myarray2.every(isPositive);

let var5 = myarray3.every(isNegative);
let var6 = myarray3.every(isPositive);

console.log(var1);
console.log(var2);
console.log(var3);
console.log(var4);
console.log(var5);
console.log(var6);