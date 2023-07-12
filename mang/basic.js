// var arr = [
//     [[1,1],[2,2],[3,3]],
//     [[10,10],[20,20],[30,30]],
//     [[100,100],[200,200],[300,300]],
// ]

// for (let i = 0; i < arr.length; i++){
//     let str = "";
//     for (let j = 0; j < arr[i].length; j++){
//         for (let a = 0; a < arr[i][j].length; a++){
//             str += arr[i][j][a]
//         }
// //     }
// //     console.log(arr[i][j]);
// }

// var arr = [
//     [3, 1, 5, 3],
//     [4, 4, 2, 2],
//     [1, 1, 1, 1],
//     [3, 0, 3, 5]
// ]
// let total = 0;
// for (let i = 0; i < arr.length; i++){
//     for (let j = 0; j < arr[i].length; j++){
//         if (i + j == arr.length - 1){
//             total += arr[i][j]
//         } else if (i == j){
//             total += arr[i][j]
//         }
//     }
// }
// console.log(total);



// bài 1: hiển thị các cột chẳng
// bài 2: tính tổng các giá trị đường viền
// bài 3: tìm ra vị trí [i, j] của số chẳng đầu tiên
// bài 4: tính tổng các số nguyên tố
// bài 5: tính tổng tam giác



// bài 1

let arr = [
        [3, 1, 5, 3],
        [4, 4, 2, 2],
        [1, 1, 1, 1],
        [3, 0, 3, 5]
]
for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr[i].length; j++){
        // if (arr[j] % 2 == 0){
            console.log(arr[j]);
        // }
    }
}