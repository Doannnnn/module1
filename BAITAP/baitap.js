// bài 1: hiển thị các cột chẳng


// let arr = [
//     [3, 1, 5, 3],
//     [4, 4, 2, 2],
//     [1, 1, 1, 1],
//     [3, 0, 3, 5]
// ]

// for (let j = 0; j < arr.length; j++){
//         if(j %2 == 0){
//             let str = "";
//             for(let i = 0; i < arr.length; i++){
//                 str += arr[i][j];
//             }
//             console.log(str);
//         }
// }

// bài 2: tính tổng các giá trị đường viền 

// let arr1 = [
//     [3, 1, 5, 3],
//     [4, 4, 2, 2],
//     [1, 1, 1, 1],
//     [3, 0, 3, 5]
// ]
// let total = 0;
// for (let i = 0; i < arr1.length; i++){
//     for (let j = 0; j < arr1[i].length; j++){
//         if (i == 0 || i == 3){
//                 total += arr1[i][j]
//         } else if (j == 0 || j == 3){
//                 total += arr1[i][j]
//         }
//     }
// }
// console.log(total);

// bài 3: tìm ra vị trí [i, j] của số chẳng đầu tiên

// let arr2 = [
//     [3, 1, 5, 3],
//     [4, 4, 2, 2],
//     [1, 1, 1, 1],
//     [3, 0, 3, 5]
// ]
// for (let i = 0; i < arr2.length; i++) {
//     for (let j = 0; j < arr2[i].length; j++) {
//         if (arr2[i][j] % 2 == 0) {
//             console.log("Vị trí của i: " + i);
//             console.log("Vị trí của j: " + j)
//             break;
//         }
//         break;
//     }
// }

    // bài 4: tính tổng các số nguyên tố


// let arr3 = [
//         [3, 1, 5, 3],
//         [4, 4, 2, 2],
//         [1, 1, 1, 1],
//         [3, 0, 3, 5]
// ]
// let total = 0;
// for (let i = 0; i < arr3.length; i++){
//     for (let j = 0; j < arr3[i].length; j++){
//         // Kiem tra so nguyen to
//         let checkNguyenTo = true;
//         for(let k = 2; k < arr3[i][j] - 1; k++) {
//             if(arr3[i][j] % k == 0) {
//                 checkNguyenTo = false;
//                 break;
//             }
//         }
//         if(checkNguyenTo == true) {
//             total += arr3[i][j];
//         }
//     }
// }
// console.log(total)


// bài 5: tính tổng tam giác

// tam giác trên  trái


// let arr4 = [
//         [3, 1, 5, 3],
//         [4, 4, 2, 2],
//         [1, 1, 1, 1],
//         [3, 0, 3, 5]
// ]
// let total = 0;
// for (let i = 0; i < arr4.length; i++){
//     for (let j = 0; j < arr4[i].length - i; j++){
//         console.log(arr4[i][j]);
//         total += arr4[i][j]
//     }
// }
// console.log("Tổng: " + total);


// // tam giác trên phải

// let arr5 = [
//     [3, 1, 5, 3],
//     [4, 4, 2, 2],
//     [1, 1, 1, 1],
//     [3, 0, 3, 5]
// ]
// let total = 0;
// for (let i = 0; i < arr5.length; i++){
//     for (let j = arr5[i].length - 1; j >= 0 + i; j--){
//         console.log(arr5[i][j]);
//         total += arr5[i][j]
//     }
// }
// console.log("Tổng: " + total);


// tam giác dưới trái

// let arr6 = [
//         [3, 1, 5, 3],
//         [4, 4, 2, 2],
//         [1, 1, 1, 1],
//         [3, 0, 3, 5]
// ]
// let total = 0;
// let index = 0;
// for (let i = arr6.length - 1; i >= 0; i--){
//     for (let j = 0; j < arr6[i].length - index; j++){
//         console.log(arr6[i][j]);
//         total += arr6[i][j]
//     }
//     index++;
// }
// console.log("Tổng: " +  total);

// tam giác dưới phải

// let arr7 = [
//     [3, 1, 5, 3],
//     [4, 4, 2, 2],
//     [1, 1, 1, 1],
//     [3, 0, 3, 5]
// ]
// let total = 0;
// let index = 0;
// for (let i = arr7.length -1; i >= 0; i--){
//     for (let j = arr7[i].length - 1; j >= 0 + index; j--){
//         console.log(arr7[i][j]);
//         total += arr7[i][j]
//     }
//     index++;
// }
// console.log("Tổng: " + total)
