function insertAccents(arr) {
    let str = arr.toString();
    let newArr = str.split("");
    for (let i = 0; i < newArr.length; i++) {
        if (parseInt(newArr[i]) % 2 === 0 && parseInt(newArr[i + 1]) % 2 === 0) {
            newArr.splice(i + 1, 0, "-");
        }
    }
    return newArr.join("");
}

let result = insertAccents("025468");
console.log(result);


