function getNegative(value){
    return value < 0;
}

let myarray = [10, 25, -5, 30, 45, -6];
            // 0   1   2   3   4   5
            
let res = myarray.findIndex(getNegative);

console.log(res);