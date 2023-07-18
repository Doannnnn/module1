let arr = [5, 11, 18, 56, 9, 30, 42, 29, 3, 1];
let max = 0;
for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
console.log(max);