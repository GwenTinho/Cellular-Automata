function gcd(a, b) {
    return (a % b == 0) ? b : gcd(b, a % b);
}

function mod2(a, b) {
    return a - (a >> b) * powFast(2, b);
}

function powFast(a, b) {
    let acc = 1;
    while (b > 0) {
        if ((b & 1) == 1) {
            acc *= a;
        }
        b >>= 1;
        a *= a;
    }
    return acc;
}