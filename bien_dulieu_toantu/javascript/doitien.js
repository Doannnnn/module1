function Money(){
    let Amount = document.getElementById("Amount").value;
    let From = document.getElementById("From").value;
    let To = document.getElementById("To").value;
    let result;

    if (From == "USA" && To == "VND") {
        result = "Result: " + (Amount * 23000) + "đ";
    } else if (From == "VND" && To == "USA") {
        result = "Result: " + (Amount / 23000) + "$";
    } 
    
    if (From == "VND" && To == "VND") {
        result = "result: " + Amount + "đ";
    } else if (From == "USA" && To == "USA") {
        result = "result: " + Amount + "$";
    } 
    
    document.getElementById("result").innerHTML = result;
}