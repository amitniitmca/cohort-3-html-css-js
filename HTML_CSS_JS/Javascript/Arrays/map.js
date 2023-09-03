function squareOf(item){
    return item * item;
}

let myarray = [10, 20, 30, 40, 50];
            // 0   1   2    3   4

let newArray = myarray.map(squareOf);

console.log(myarray);
console.log(newArray);