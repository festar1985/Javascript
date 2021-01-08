let c = [3.5, 0, 1, 0, 2, -1];

dimential(c[0], c[1], c[2], c[3], c[4], c[5]);

function dimential(x1, y1, z1, x2, y2, z2) {
    let d = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2 + (z2 - z1) ** 2);

    console.log("result is :" + d);
}