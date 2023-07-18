// let myColor = ["Red", "Green", "White", "Black"];
// console.log(myColor.toString());


let numbers = prompt("Nhập 1 dãy số");
let str = numbers.toString();
let result = [str[0]];

for (let i = 0; i < str.length; i++) {
    if ((str[i-1] % 2 === 0) && (str[i] & 2 === 0)){
        result.push("-", str[i]);
    } else {
        result.push(str[i]);
    }
}
console.log(result.join(""))