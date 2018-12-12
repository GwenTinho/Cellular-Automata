function create2DArr(n, m) {
    let arr = new Array(n);

    for (let j = 0; j < n; j++) {
        arr[j] = new Array(m);
    }
    return arr;
}

function fill2DarrFromArr(arr) { //_arr.length must be a square of an integer
    let _arr = copy(arr);
    let sideLength = Math.sqrt(_arr.length);
    let out = create2DArr(sideLength, sideLength);
    for (let j = 0; j < sideLength; j++) {
        for (let i = 0; i < sideLength; i++) {
            out[j][i] = _arr[j * sideLength + i];
        }
    }
    return out;
}

function rectMatrixFromArr(arr, length) {
    let _arr = copy(arr);
    let width = arr.length / length;
    let out = create2DArr(length, width);
    for (let j = 0; j < length; j++) {
        for (let i = 0; i < width; i++) {
            out[j][i] = _arr[j * width + i];
        }
    }
    return out;
}

function map2dto1darr(pile) {
    let _pile = copy(pile);
    let sideLength = _pile.length;

    let out = new Array(sideLength ** 2);
    for (let j = 0; j < sideLength; j++) {
        for (let i = 0; i < sideLength; i++) {
            out[j * sideLength + i] = _pile[j][i];
        }
    }
    return out;
}

function bumpGridSize(pile) {
    let _pile = copy(pile);
    let out = create2DArr(_pile.length + 2, _pile.length + 2);
    for (let j = 1; j < out.length - 1; j++) {
        out[j] = [0, ..._pile[j - 1], 0];
    }
    out[0].fill(0);
    out[out.length - 1].fill(0);
    return out;
}

function expandGrid(pile, n) {
    let _pile = copy(pile);
    for (let i = 0; i < n; i++) {
        _pile = bumpGridSize(_pile);
    }
    return _pile;
}