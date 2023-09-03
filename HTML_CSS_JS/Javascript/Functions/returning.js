function averageOfTwo(num1, num2){
    let sum = num1+num2;
    let avg = sum/2;
    return avg;
}

function averageOfThree(num1, num2, num3){
    let sum = num1+num2+num3;
    let avg = sum/3;
    return avg;
}

let avg2 = averageOfTwo(10, 25);
let avg3 = averageOfThree(10, 25, 45);

console.log(avg2);
console.log(avg3);

console.log(averageOfThree(100, 200, 300));