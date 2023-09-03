
let sumOfEven = (anyArray) => {
    let sum = 0;
    for(let num of anyArray){
        if(num%2 == 0){
            sum += num;
        }
    }
    return sum;
};

let myarray1 = [12, 15, 10, 5, 8, 20];
let myarray2 = [2, 4, 6, 8, 9];

console.log(sumOfEven(myarray1));
console.log(sumOfEven(myarray2));