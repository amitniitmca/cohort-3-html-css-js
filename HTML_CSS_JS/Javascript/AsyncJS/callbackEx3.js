function removeNegatives(arr, callback){
    let newArr = [];
    for(let val of arr){
        if(callback(val)){
            newArr.push(val);
        }
    }
    return newArr;
}

let myarray = [10, 25, -5, 30, 45, -6];

let newArray = removeNegatives(myarray, (val) => val > 0);

console.log(myarray);
console.log(newArray);
