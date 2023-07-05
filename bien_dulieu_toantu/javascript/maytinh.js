function add() {
    let a = +document.getElementById("txta").value;
    let b = +document.getElementById("txtb").value;
    let result = a + b;
    document.getElementById("result").innerHTML = result;
}
function afrom() {
    let a = document.getElementById("txta").value;
    let b = document.getElementById("txtb").value;
    let result = a - b;
    document.getElementById("result").innerHTML = result;
}
function core() {
    let a = document.getElementById("txta").value;
    let b = document.getElementById("txtb").value;
    let result = a * b;
    document.getElementById("result").innerHTML = result;
}
function divide() {
    let a = document.getElementById("txta").value;
    let b = document.getElementById("txtb").value;
    let result = a / b;
    document.getElementById("result").innerHTML = result;
}

