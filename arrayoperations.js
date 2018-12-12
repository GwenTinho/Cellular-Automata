function arraySub(a1, a2) {
    let sum = new Array(a1.length);
    for (let i = 0; i < a1.length; i++) {
        sum[i] = a1[i] - a2[i]
    }
    return sum;
}

function arrayDist(a1, a2) {
    return arraySub(a1, a2).map(x => Math.abs(x));
}