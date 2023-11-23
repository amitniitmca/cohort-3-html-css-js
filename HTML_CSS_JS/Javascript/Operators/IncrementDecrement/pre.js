let a = 10;
let b = 5;

let c = a++ + --b + a-- + b++;
    // 10 + 4 + 11 + 4
console.log(a);
console.log(b);
console.log(c);