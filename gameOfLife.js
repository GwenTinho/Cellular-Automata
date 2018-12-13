function step(grid) {
    let newGrid = copy(grid);
    const l = grid.length;
    const w = grid[0].length;
    const lminus1 = l - 1;
    const wminus1 = w - 1;

    for (let j = 0; j < l; j++) {
        for (let i = 0; i < w; i++) {
            let neighbours = 0;
            for (let x = -1; x < 2; x++) {
                for (let y = -1; y < 2; y++) {

                    if (x === 0 && y === 0) continue;

                    const col = x + i;
                    const row = y + j;

                    if (col > wminus1) continue;
                    if (col < 0) continue;
                    if (row > lminus1) continue;
                    if (row < 0) continue;

                    if (grid[row][col] > 0) neighbours++;
                }
            }
            if (neighbours < 2 || neighbours > 3) newGrid[j][i] = 0;
            else if (neighbours === 3 && grid[j][i] === 0) newGrid[j][i] = 1;
        }
    }
    return newGrid;
}

function stepFromAlg(grid, rules) {

    let newGrid = copy(grid);
    const l = grid.length;
    const w = grid[0].length;
    const lminus1 = l - 1;
    const wminus1 = w - 1;
    const includeDiagonals = rules(0).includeDiagonals;
    for (let j = 0; j < l; j++) {
        for (let i = 0; i < w; i++) {
            let neighbours = 0;

            for (let x = -1; x < 2; x++) {
                for (let y = -1; y < 2; y++) {

                    if (x === 0 && y === 0) continue;
                    if (!includeDiagonals && x * x + y * y === 2) continue;
                    const col = x + i;
                    const row = y + j;

                    if (col > wminus1) continue;
                    if (col < 0) continue;
                    if (row > lminus1) continue;
                    if (row < 0) continue;

                    if (grid[row][col] > 0) neighbours++;
                }
            }
            rule = rules(neighbours);
            if (rule.diesIf) newGrid[j][i] = 0;
            else if (rule.bornIf) newGrid[j][i] = 1;
        }
    }
    return newGrid;
}

function stepContinuousFromAlg(grid, time, xGap, size, gap, rules) {
    drawGrid(grid, xGap, size, gap, colorGOL);
    let timer = setInterval(() => {
        grid = stepFromAlg(grid, rules);
        drawGrid(grid, xGap, size, gap, colorGOL);
    }, time);
    return timer;
}

function stepContinuous(grid, time, xGap, size) {
    drawGrid(grid, xGap, size, 2, colorGOL);
    let timer = setInterval(() => {
        grid = step(grid);
        drawGrid(grid, xGap, size, 2, colorGOL);
    }, time);
    return timer;
}

function stepFromIntArr(arr, l) {

    let _arr = copy(arr);
    const w = _arr.length / l;
    const wminus1 = w - 1;
    const lminus1 = l - 1;

    for (let j = 0; j < l; j++) {
        for (let i = 0; i < w; i++) {

            const pos = j * w + i;


            if (arr[pos] === 0) {

                let flag = true;
                for (let y = -1; y < 2; y++) {
                    if (y === 0) continue;

                    const col = i;
                    const row = y + j;

                    if (row > lminus1) continue;
                    if (row < 0) continue;

                    if (arr[row * w + col] !== 0) {
                        flag = false;
                        y = 2;
                    }
                }

                for (let x = -1; x < 2; x++) {
                    if (x === 0) continue;

                    const col = x + i;
                    const row = j;

                    if (col > wminus1) continue;
                    if (col < 0) continue;
                    if (arr[row * w + col] >> 31 & 1 === 1 || arr[row * w + col] & 1 === 1) {
                        flag = false;
                        x = 2;
                    }
                }

                if (flag) continue;
            }

            for (let bit = 0; bit < 32; bit++) {


                let neighbours = 0;

                for (let x = -1; x < 2; x++) {
                    for (let y = -1; y < 2; y++) {

                        if (x === 0 && y === 0) continue;

                        let _bit = bit + x;
                        let col = i;
                        let row = y + j;

                        if (_bit > 31 || _bit < 0) {
                            col += x;
                            _bit = _bit - ((_bit + 32) >> 5) * 32;
                        }

                        if (col > wminus1) continue;
                        if (col < 0) continue;
                        if (row > lminus1) continue;
                        if (row < 0) continue;

                        if (readBit(arr[row * w + col], _bit) === 1) neighbours++;

                    }
                }


                if (neighbours < 2 || neighbours > 3) _arr[pos] = bitTo0(_arr[pos], bit);
                else if (neighbours === 3) _arr[pos] = bitTo1(_arr[pos], bit);
            }
        }
    }
    return _arr;
}

function stepContinuousIntArr(arr, l, time, xGap, size) {
    drawIntArr(arr, l, xGap, size, 2);
    let timer = setInterval(() => {
        arr = stepFromIntArr(arr, l);
        drawIntArr(arr, l, xGap, size, 2);
    }, time);
    return timer;
}