let arr = [5, 11, 18, 6, 9, 30, 42, 29, 3, 1];
let count = 0;
for (i = 0; i < arr.length; i++) {
    if (arr[i] >= 10) {
        count++;
    }
}
console.log(count + " Số nguyên lớn hơn 10");