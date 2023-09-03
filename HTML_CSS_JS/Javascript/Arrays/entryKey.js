let myarray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
        //  0   1   2   3   4   5   6   7   8   9

let arrEntries = myarray.entries();
let arrKeys = myarray.keys();

for(let entry of arrEntries){
    console.log(entry);
}

for(let key of arrKeys){
    console.log(key);
}