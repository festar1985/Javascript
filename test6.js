let input = [100000, 5, 12, 25];


function interest(p, i, n, t) {
    i = i / 100;
    n = 12 / n;
    let result = p * Math.pow((1 + (i / n)), (n * t));
    console.log("result is " + result.toFixed(2));
}

interest(input[0], input[1], input[2], input[3]);