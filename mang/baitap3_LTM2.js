let arr = ['a', 1, 'b', 2, 'c', 3];
let count = 0;
for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
        count ++;
    }
}
console.log("số kí tự trong mảng là: " + count);