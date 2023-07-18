let arr = [5, 13, 6, 21, 9]

firstly = 0;
final = arr.length - 1;
while (firstly < final) {
    temp = arr[firstly]
    arr[firstly] = arr[final];
    arr[final] = temp;
    firstly++;
    final--;
}
console.log(arr);
