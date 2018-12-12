function drawSquareAroundPoint(x, y, l, v, colorFn) {
    ctx.fillStyle = "#" + colorFn(v);
    ctx.beginPath();
    ctx.rect(x - l / 2, y + l / 2, l, l);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = "black";
}

function drawText(text, x, y) {
    ctx.fillStyle = "white";
    ctx.fillText(text, x, y);
    ctx.fillStyle = "black";
}

function drawArray(arr, x, y, l, gap, colorFn) {
    for (let i = 0; i < arr.length; i++) {
        drawSquareAroundPoint(x + i * (l + gap), y, l, arr[i], colorFn);
    }
}

function colorSandpiles(num) {
    if (num === 0) {
        return "ffff66";
    } else if (num === 1) {
        return "ff6666";
    } else if (num === 2) {
        return "33cc33";
    } else if (num === 3) {
        return "3366ff";
    } else {
        return "663300";
    }
}

function colorGOL(num) {
    if (num === 0) {
        return "ffffff";
    } else if (num === 1) {
        return "000000";
    }
}

function colorGOLinv(num) {
    if (num === 1) {
        return "ffffff";
    } else if (num === 0) {
        return "000000";
    }
}

function drawGrid(grid, xGap, size, gap, colorFn) {
    for (let i = 0; i < grid.length; i++) {
        drawArray(grid[i], xGap, i * (size + gap), size, gap, colorFn);
    }
}

function drawIntArr(arr, l, xGap, size, gap) {
    const w = arr.length / l;
    const sizeplusgap = size + gap;
    for (let j = 0; j < l; j++) {
        const jtimesSizeplusGap = j * sizeplusgap;
        for (let i = 0; i < w; i++) {
            const pos = j * w + i;
            const itimes32 = i * 32;
            for (let bit = 0; bit < 32; bit++) {
                drawSquareAroundPoint(xGap + (itimes32 + bit) * sizeplusgap, jtimesSizeplusGap, size, readBit(arr[pos], bit), colorGOL);
            }
        }
    }
}