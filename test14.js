var input = [12.5, 4, 2, 12, -3, 3];


function onX(x, min, max) {
    if (min <= x) {
        if (x <= max) {
            return true;
        } else return false;
    }
}

function onY(y, min, max) {
    if (min <= y) {
        if (y <= max) {
            return true;
        } else return false;
    }
}


let a = onX(input[0], input[2], input[3]);
let b = onY(input[1], input[4], input[5]);

console.log(a);
console.log(b);

if (a && b) {
    console.log("inside");
} else console.log("outside");