var a = +prompt('Nhập điểm Vật lý');
var b = +prompt('Nhập điểm Hóa học');
var c = +prompt('Nhập điểm Sinh học');
var total = a + b + c;
var medium = total/3;

document.write('Tổng điểm: ' + total);
document.write("<br>")
document.write('Điểm trung bình: ' + medium);