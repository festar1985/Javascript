function rectangle(a, b) {
    let p = 2 * (a + b);
    let s = a * b;
    p = p.toFixed(2);
    s = s.toFixed(2);
    console.log("Perimetara na 4nika e " + p);
    console.log("Liceto na chetriagalnika e " + s);
}

rectangle(2, 2);
rectangle(1, 3);
rectangle(2.5, 3.14);