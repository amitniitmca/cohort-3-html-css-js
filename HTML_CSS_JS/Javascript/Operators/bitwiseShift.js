let a = 4;  
let b = 6;  

let c = a << 2;
console.log(c);
console.log(a << 3);
console.log(a << 4);
// a = 4
// 00000100
// 00010000 = 16

// LEFT SHIFT FORMULAE
// 4 << 2 = num * 2^shift = 4 * 2^2 = 16
// 4 << 3 = num * 2^shift = 4 * 2^3 = 32
// 4 << 4 = num * 2^shift = 4 * 2^4 = 64

// RIGHT SHIFT FORMULAE
// 16 >> 2 = num / 2^shift = 16 / 2^2 = 4
// 32 >> 3 = num / 2^shift = 32 / 2^3 = 4
// 64 >> 4 = num / 2^shift = 64 / 2^4 = 4

console.log(16 >> 2);
console.log(32 >> 3);
console.log(64 >> 4);
console.log(-64 >> 4);
console.log('----------------');
console.log(16 >>> 2);
console.log(32 >>> 3);
console.log(64 >>> 4);
console.log(-64 >>> 4);