function input(a, b, c) {
    let info = [a, b, c];

    let d = (info[2] / 3600);

    let s1 = info[0] * d;
    let s2 = info[1] * d;

    console.log(s1);
    console.log(s2);

    let delta = Math.abs(s1 - s2);

    console.log("reshenieto e " + delta * 1000);
}

input(5, -5, 40);