let arr = [5, 13, 6, 21, 9]
let total = 0;
let max = 0;
for (i = 0; i < arr.length; i++) {
    total += arr[i];
    var valueMedium = total / arr.length
    if (arr[i] > max) {
        max = arr[i];
    }
}
console.log(max);
console.log(valueMedium);