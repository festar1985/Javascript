let gon = -50;

let di = 360 / 400;


let temp = gon * di;

let result = temp % 360;

console.log(typeof result);
if (result < 0) {
    result = 360 + result;
}
console.log("Resultat v gradusi e " + result);