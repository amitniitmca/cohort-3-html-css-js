let arr1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
        //  0   1   2   3   4   5   6   7   8   9
console.log(arr1);

arr1.copyWithin(0, 5, 9);
    // 5, 6, 7, 8 and paste from 0
// target(first) : location where we will paste the value
// start(second) : location from where we will start copying
// end(third) : location at which we will end copying (end-1)

console.log(arr1);
