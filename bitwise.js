function intToBitArr(n) {

    let arr = new Array(32);
    for (let i = 0; i < 32; ++i) {
        arr[i] = (n >> (31 - i)) & 1;
    }
    return arr;
}

function findMaxExp2(n) {
    if (n >= 2 ** 31) return -1;
    let maxExp = 0;
    let i = 31;
    while (n > 0) {
        if ((n >> i) & 1 == 1) return i;
        i--;
    }
    return maxExp;
}

function findBitArrLengthFromIntArr(arr) {
    if (arr.length > 1) {
        if (arr.length / 32 === arr.length >> 5) return arr.length * 32;
        else return (arr.length - 1) * 32 + findMaxExp2(arr[arr.length - 1]) + 1;
    } else {
        return findMaxExp2(arr) + 1;
    }
}

function intArrToBitArr(arr) {
    const l = arr.length;

    let _arr = [];

    for (let j = 0; j < l; j++) {
        _arr = _arr.concat(intToBitArr(arr[j]));
    }
    return _arr;
}



function bitArrToInt(arr) {
    console.log(arr);
    if (arr.length > 32) return -1;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) continue;

        sum += 2 ** (arr.length - 1 - i);
    }

    return sum;
}

function bitGridToBitArr(grid) {
    const l = grid.length;
    let arr = [];

    for (let j = 0; j < l; j++) {
        arr = arr.concat(grid[j]);
    }
    return arr;
}

function bitArrToIntArray(bitarr) {
    if (bitarr.length <= 32) {
        return bitArrToInt(bitarr);
    } else {
        const l = bitarr.length;
        const numberOfInts = l >> 5;
        const leftovers = l - numberOfInts * 32;
        const addCarry = +!!leftovers;
        let out = new Array(numberOfInts + addCarry);

        for (let i = 0; i < numberOfInts; i++) {

            out[i] = bitArrToInt(bitarr.slice(i * 32, (i + 1) * 32));
        }
        if (leftovers) out[numberOfInts] = bitArrToInt(bitarr.slice(numberOfInts * 32, l));

        return out;
    }
}

function readBit(n, index) {
    index = 31 - index;
    return (n >> index) & 1;
}

function changeBit(n, index) {
    index = 31 - index;
    return ((n >> index) & 1 == 1) ? n - 2 ** index : n + 2 ** index;
}

function bitTo1(n, index) {
    index = 31 - index;
    return ((n >> index) & 1 == 1) ? n : n + 2 ** index;
}

function bitTo0(n, index) {
    index = 31 - index;
    return ((n >> index) & 1 == 1) ? n - 2 ** index : n;
}

function isAltern1(int) {
    let flag = true;
    let max = findMaxExp2(int) + 1;
    for (let i = 0; i < max; i++) {
        const bit = (int >> i & 1);
        if ((i & 1) === 0) {
            flag = (bit === 1) && flag;
        } else {
            flag = (bit === 0) && flag;
        }
        if (!flag) return false;
    }
    return !!flag;
}

function isAltern0(int) {
    let flag = true;
    let max = findMaxExp2(int) + 1;
    for (let i = 0; i < max; i++) {
        const bit = (int >> i & 1);
        if ((i & 1) === 0) {
            flag = (bit === 0) && flag;
        } else {
            flag = (bit === 1) && flag;
        }
        if (!flag) return false;
    }
    return !!flag;
}

function isAltern(int) {
    return isAltern0(int) || isAltern1(int);
}