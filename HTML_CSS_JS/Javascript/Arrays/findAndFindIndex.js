function getNegative(item){
    return item < 0;
}

let myarray = [10, 20, 30, 40, -50, 60, 70, -80, 90, 100];
             //  0   1   2   3   4   5   6   7   8   9

let var1 = myarray.find(getNegative);
let var2 = myarray.findIndex(getNegative);

console.log(var1);
console.log(var2);