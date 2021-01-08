var input = [-15, -5, -10];

var one = input[0];
var two = input[1];
var three = input[2];

if (one > two) {
    if (one > three) {
        console.log(one);

    } else
        console.log(three);
} else
if (two > three) {
    console.log(two);
} else console.log(three);