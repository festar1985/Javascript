var input = [10.5, 3];

var num = input[0];
var dec = input[1];

if (dec > 15) {
    dec = 15;
}


var result = +(num.toFixed(dec));

console.log(dec)
console.log("result is " + result);