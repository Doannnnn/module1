function countWords(arr) {
    let newArr = arr.split("");
    let count = newArr.length;
    return count;
} 

let a = countWords("This is a string");
console.log(a);