function myFun(a, b, c){
    c[b] = a * 10;
}

// item (a) - Element of the array (First Parameter)
// index (b) - Index of the array (Second Parameter)
// arr (c) - array (Third Parameter)

let myarray1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

myarray1.forEach(myFun);

console.log(myarray1);