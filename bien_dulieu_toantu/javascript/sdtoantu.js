var inputWidth; 
var inputHeight;

inputWidth = prompt('Nhập chiều cao');
inputHeight = prompt('Nhập chiều rộng');

var width = parseInt(inputWidth);
var height = parseInt(inputHeight);
var area = width * height;
document.write('the area is: ' + area);
