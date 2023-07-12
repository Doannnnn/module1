    // bài 1


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

    // bài 2 

// let arr1 = [
//     [3, 1, 5, 3],
//     [4, 4, 2, 2],
//     [1, 1, 1, 1],
//     [3, 0, 3, 5]
// ]
// console.log(arr1[0][1])
// let total = 0;
// for (let i = 0; i < arr1.length; i++){
//     for (let j = 0; j < arr1[i].length; j++){
//         if (i == 0 || i == arr1.length){
//                 total += arr1[i][j]
//                 console.log(total);
//         } else if (j == 0 || j == arr1.length){
//                 total += arr1[i][j]
//         }
//     }
// }

    // bài 3
    
// let arr2 = [
//         [3, 1, 5, 3],
//         [4, 4, 2, 2],
//         [1, 1, 1, 1],
//         [3, 0, 3, 5]
// ]
// for (let i = 0; i < arr2.length; i++){
//     for (let j = 0; j < arr2[i].length; j++){
//         if (arr2[i][j] % 2 == 0){
//             console.log("Vi tri i la",i, "Vi tri j la", j);
//             break;
//         }
//     }
// }

    // bài 4


// let arr3 = [
//         [3, 1, 5, 3],
//         [4, 4, 2, 2],
//         [1, 1, 1, 1],
//         [3, 0, 3, 5]
// ]
// let total = 0;
// let temp = 2;
// for (i = 0; i < arr3.length; i++){
//     for (j = 0; i < arr3[i].length; j++){
//         // Kiem tra so nguyen to
//         let checkNguyenTo = true;
//         for(let k = 2; k < arr3[i][j] - 1; k++) {
//             if(arr3[i][j] % k == 0) {
//                 checkNguyenTo = false;
//                 break;
//             }
//         }
//         if(checkNguyenTo) {
//             total += arr3[i][j];
//         }
//     }
// }


// bài 5 


let arr4 = [
            [3, 1, 5, 3],
            [4, 4, 2, 2],
            [1, 1, 1, 1],
            [3, 0, 3, 5]
]
let total = 0; 
for (i = 0; i < arr4.length; i++){
    for (j = 0; j < arr4[i].length; j++){
        if (i == 0){
            total += arr4[i][j].length - i;
        }
        if (i == 1){
            total += arr4[i][j].length - i;
        }
        if (i == 2){
            total += arr4[i][j].length - i;
        }
        if (i == 3){
            total += arr4[i][j].length - i;
        }
    }
}