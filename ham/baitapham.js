// Bài 1: tìm giá trị lớn nhất của mảng


// let max = 0;
// function valueBiggest(arr){
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }

// valueBiggest([1, 3, 5, -1, 15, 2])
// console.log(max);


// Bài 2: tìm giá trị lớn thứ 2 trong mảng


// let max = 0;
// let second = 0;
// function valueSecond(arr1){
//     for (i = 0; i < arr1.length; i++){
//         if (arr1[i] > max){
//             second = max;
//             max = arr1[i];
//         } else if(arr1[i] > second){
//             second = arr[i]
//         }
//     }
//     return second;
// }

// valueSecond([1, 3, 5, -1, 15, 2])
// console.log(second);


// Bài 3: Tính tổng 3 giá trị lẻ đầu tiên


// let total = 0;
// let count = 0;
// function totalValueOdd(arr2){
//     for (i = 0; i < arr2.length; i++){
//         if (arr2[i] & 2 != 0){
//             total += arr2[i];
//             count++;
//         }
//         if (count == 3){
//             break;
//         }
//     }
//     return total;
// }

// totalValueOdd([1, 5, 4, 6, 7, 9, 7,])
// console.log(total);

// Bài 4: Đảo ngược mảng


// function arrReverse(arr3){
//     firstly = 0;
//     final = arr3.length -1 ;
//     while (firstly < final) {
//         temp = arr3[firstly]
//         arr3[firstly] = arr3[final];
//         arr3[final] = temp;
//         firstly++;
//         final--;
//     }
//     console.log(arr3);
// }

// arrReverse([1, 5, 4, 6, 7, 9, 7, 9])


// Bài 5: nối mảng b vào mảng a


// function arrConnect(arr1, arr2){
//     let arr = arr2.concat(arr1)
//     console.log(arr);
// }
// arrConnect([1, 3, 5, -1], [7, 9, 7, 9])


// Bài 6: tính tổng các số nguyên tố trong mảng


// function totalPrime(arr4){
//     let total = 0;
//     for (let i = 0; i < arr4.length; i++){
//         let flag = true;
//         if(arr4[i] < 2){
//             flag = false;
//         }
//         for (let j = 2; j < arr4[i]; j++){
//             if (arr4[i] % j == 0){
//                 flag = false;
//                 break;
//             }
//         }
//         if (flag == true) {
//             total += arr4[i]
//         }
            
//     }
//     return total;
// }

// totalPrime([1, 3, 10, 5, 7, -1, -5, 13, 11])
// console.log("Tổng: " + total);


// Bài 7: tính trung bình các số chính phương trong mảng

// function countMedium(arr5) {
//     let total = 0;
//     let medium = 0;
//     for (i = 0; i < arr5.length; i++){
//         total += arr5[i];
//     }
//     medium = total / arr5.length;
//     console.log(medium);
// }

// countMedium([7, 3, 4, 9, 5, 10])


// Bài 8: hiển thị các cột chẵn

// function showColumnNo(arr6) {
//     for (j = 0; j < arr6.length; j++) {
//         if (j % 2 == 0) {
//             let str = "";
//             for (let i = 0; i < arr6.length; i++){
//                 str += arr6[i][j]
//             }
//             console.log(str);
//         }
//     }
    
// }

// showColumnNo([
//     [1, 3, 5, 7, 8],
//     [2, 4, 6, 9, 4],
//     [7, 5, 3, 9, 5],
//     [9, 5, 1, 3, 7],
//     [2, 5, 8, 3, 6]
// ])

// Bài 9: Tính tổng các giá trị đường viền

// function totalvalueBorder(arr7) {
//     let total = 0;
//     for (i = 0; i < arr7.length; i++) {
//         for (j = 0; j < arr7[i].length; j++) {
//             if (i == 0 || i == arr7.length - 1) {
//                 total += arr7[i][j];
//             } else if(j == 0 || j == arr7.length - 1) {
//                 total += arr7[i][j]
//             }
//         }
//     }
//     console.log(total);
// }

// totalvalueBorder([
//         [1, 3, 5, 7, 8],
//         [2, 4, 6, 9, 4],
//         [7, 5, 3, 9, 5],
//         [9, 5, 1, 3, 7],
//         [2, 5, 8, 3, 6]
//     ])


// Bài 10: Tìm ra vị trí [i,j] của số chẳn đầu tiên


// function locationZero(arr8) {
//     for (i = 0; i < arr8.length; i++) {
//         for (j = 0; j < arr8[i].length; j++) {
//             if (arr8[i][j] % 2 == 0) {
//                 console.log("Vị trí i: " + i);
//                 console.log("Vị trí j: " + j);
//                 break;
//             }
//         }
//         break;
//     }
// }

// locationZero([
//         [1, 3, 5, 7, 8],
//         [2, 4, 6, 9, 4],
//         [7, 5, 3, 9, 5],
//         [9, 5, 1, 3, 7],
//         [2, 5, 8, 3, 6]
//     ])


// Bài 11: Tính tổng các số nguyên tố trong mảng 2 chiều


// let total = 0;
// function totalPrime(arr9) {
//     for (i = 0; i < arr9.length; i++) {
//         for (j = 0; j < arr9[i].length; j++) {
//             let flag = true;
//             if (arr9[i][j] < 2) {
//                 flag = false;
//             }
//             for (let k = 2; k < arr9[i][j]; k++){
//                 if (arr9[i][j] % k == 0){
//                     flag = false;
//                     break;
//                 }
//             }    
//             if (flag == true) {
//                 console.log(arr9[i][j]);
//                 total += arr9[i][j];
//             }
//         }
//     }
//     return total;
// }

// totalPrime([
//         [1, 3, 5, 7, 8],
//         [2, 4, 6, 9, 4],
//         [7, 5, 3, 9, 5],
//         [9, 5, 1, 3, 7],
//         [2, 5, 8, 3, 6]
//     ])
// console.log("Tổng: " + total);

// Bài 12: Tính tổng: tam giác trên trái, trên phải, dưới trái, dưới phải

// tam giác trên trái 

// let total = 0;
// function totaltriangle(arr) {
//     for (i = 0; i < arr.length; i++) {
//         for (j = 0; j < arr[i].length - i; j++){
//             console.log(arr[i][j]);
//             total += arr[i][j]
//         }
//     }
//     return total;
// }

// totaltriangle([
//     [1, 3, 5, 7, 8],
//     [2, 4, 6, 9, 4],
//     [7, 5, 3, 9, 5],
//     [9, 5, 1, 3, 7],
//     [2, 5, 8, 3, 6]
// ])
// console.log("Tổng: " + total);


// tam giác trên phải

// let total = 0;
// function totaltriangle(arr1) {
//     for (i = 0; i < arr1.length; i++) {
//         for (j = arr1[i].length - 1; j >= 0 + i; j--) {
//             console.log(arr1[i][j]);
//             total += arr1[i][j]
//         }
//     }
//     return total;
// }
// totaltriangle([
//     [1, 3, 5, 7, 8],
//     [2, 4, 6, 9, 4],
//     [7, 5, 3, 9, 5],
//     [9, 5, 1, 3, 7],
//     [2, 5, 8, 3, 6]
// ])
// console.log("Tổng: " + total);


// tam giác dưới trái 

// let total = 0;
// function totaltriangle(arr2) {
//     let index = 0;
//     for (i = arr2.length - 1; i >= 0; i--) {
//         for (j = 0; j < arr2[i].length - index; j++) {
//             console.log(arr2[i][j]);
//             total += arr2[i][j]
//         }
//         index++;
//     }
//     return total;
// }

// totaltriangle([
//     [1, 3, 5, 7, 8],
//     [2, 4, 6, 9, 4],
//     [7, 5, 3, 9, 5],
//     [9, 5, 1, 3, 7],
//     [2, 5, 8, 3, 6]
// ])
// console.log("Tổng: " + total);

// tam giác dưới phải

// let total = 0;
// function totaltriangle(arr3) {
//     let index = 0;
//     for (i = arr3.length - 1; i >= 0; i--) {
//         for (j = arr3[i].length - 1; j >= 0 + index; j--) {
//             console.log(arr3[i][j]);
//             total += arr3[i][j]
//         }
//         index++;
//     }
//     return total;
// }

// totaltriangle([
//     [1, 3, 5, 7, 8],
//     [2, 4, 6, 9, 4],
//     [7, 5, 3, 9, 5],
//     [9, 5, 1, 3, 7],
//     [2, 5, 8, 3, 6]
// ])
// console.log("Tổng: " + total);


// Bài 1: Tính tổng các giá trị lớn hơn giá trị đứng liền trước nó trong mảng 1 chiều các số thực

// let total = 0;
// function totalvalueBigger(arr){
//     for (i = 0; i < arr.length; i++){
//         if (arr[i] > arr[i - 1]){
//             total += arr[i];
//         }
//     }
// }

// totalvalueBigger([1, 3, 7, 4 ,9, 12, 6])
// console.log(total);

// Bài 2: Tính trung bình cộng các số dương trong mảng 1 chiều các số thực

let total = 0;
let count = 0;
function totalAverage(arr1){
    for (i = 0; i < arr1.length; i++){
        if (arr[i] > 0) {
            total += arr[i];
            count += 1;
        }
        if (arr[i] < 0) {
            return total / count;
        } 
    }
}
