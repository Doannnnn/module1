// Bài 1: Xây dựng hàm giải phương trình bậc nhất, biết tham số là các hệ số nguyên a,b. Hàm trả về nghiệm của phương trình them tham số đã cho
// Viết chương trình sử dụng hàm vừa xây dựng để giải phương trình bậc nhất với hệ số a=5; b=8.

function firstDegreeEquation(a,b){
    if (a == 0 && b == 0){
        console.log("Phương trình vô số nghiệm");
    } else if (a != 0 && b == 0){
        console.log("Phương trình có nghiệm x = 0");
    } else if (a == 0 && b != 0){
        console.log("Phương trình vô nghiệm");
    } else {
        console.log("Phương trình có nghiệm x = " + (-b / a));
    }
}
// firstDegreeEquation(5, 0)

// Bài 2: 
let arr = [1,3,5,7,9,11]
let number = 3;
if(checkNumber(arr, number) != -1) {
    console.log(number + " nằm ở trị ví " + checkNumber(arr, number));
} else {
    console.log(number + " không nằm trong mảng ");
}

function checkNumber(arr, number){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == number){
            return i;
            // return number + " Có nằm trong mảng"; 
        }
    } 
    return -1;
    // return number + " Không có nằm trong mảng";    
}

// bài 3:

function countNegativeIntegers(str){
    let count = 0;
    for (i = 0; i < str.length; i++){
        if (str[i] === "a" || str[i] === "o" || str[i] === "e" || str[i] === "u" || str[i] === "i"){
            count++;
            console.log(count);
        }
    }
    if (count === 0){
        return false;
    } 
    console.log(count);
}

let str = "aaaaaa"
// console.log(countNegativeIntegers(str)); 

// bài 4:

class Animal {
    constructor(name, weight){
        this.name = name;
        this.weight = weight;
    }
    getName(){
        return this.name;
    }
    getWeight(){
        return this.weight;
    }
    setName(newName){
        this.name = newName;
    }
    setWeight(newWeight){
        this.weight = newWeight;
    }
    toString(){
        return `Name: ${this.name}, Weight: ${this.weight}`;
    }
}
let objAnimal1 = new Animal("Elephant", 45.6)
objAnimal1.toString();
console.log(objAnimal1.toString());

let objAnimal2 = new Animal("name", "weight")
objAnimal2.setName("Mouse");
objAnimal2.setWeight(70)
objAnimal2.toString();
console.log(objAnimal2.toString());


