function randomArray(n) {
    const arr = new Array(n);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Math.random();
    }
    return arr;
}

function randomIntArray(n, max) {
    return randomArray(n).map(e => Math.floor(e * max));
}

function randomBitArray(n) {
    return randomArray(n).map(e => Math.round(e));
}

function copy(o) {
    var output, v, key;
    output = Array.isArray(o) ? [] : {};
    for (key in o) {
        v = o[key];
        output[key] = (typeof v === "object" && v !== null) ? copy(v) : v;
    }
    return output;
}

function numberlineFromToInc(n, m) {
    let out = [];
    for (let i = n; i <= m; i++) {
        out.push(i);
    }
    return out;
}

function isEmpty(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}