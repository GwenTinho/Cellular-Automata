function reduceTillCompleteFast(cells) {
    let _cells = copy(cells);
    const l = _cells.length;
    const lminus1 = l - 1;
    let notdone = true;

    while (notdone) {
        notdone = false;
        for (let j = 0; j < l; j++) {
            const jminusone = j - 1;
            const jplusone = j + 1;
            for (let i = 0; i < l; i++) {
                if (_cells[j][i] >= 4) {
                    _cells[j][i] -= 4;
                    if (j !== lminus1) _cells[jplusone][i]++;
                    if (j !== 0) _cells[jminusone][i]++;
                    if (i !== lminus1) _cells[j][i + 1]++;
                    if (i !== 0) _cells[j][i - 1]++;
                    notdone = true;
                }
            }
        }
    }
    return _cells;
}

function pileReduce(cells) {
    let _cells = copy(cells);
    const l = _cells.length;
    const lminus1 = l - 1;

    for (let j = 0; j < _cells.length; j++) {
        const jminusone = j - 1;
        const jplusone = j + 1;
        for (let i = 0; i < _cells.length; i++) {
            if (_cells[j][i] >= 4) {
                _cells[j][i] -= 4;
                if (j !== lminus1) _cells[jplusone][i]++;
                if (j !== 0) _cells[jminusone][i]++;
                if (i !== lminus1) _cells[j][i + 1]++;
                if (i !== 0) _cells[j][i - 1]++;
            }
        }
        return _cells;
    }
}

function reduceAnimate(cells, options) {
    let _cells = copy(cells);
    const l = _cells.length;
    const lminus1 = l - 1;
    let notdone = true;
    let counter = 0;
    let timer = setInterval(() => {
        notdone = false;
        for (let j = 0; j < l; j++) {
            const jminusone = j - 1;
            const jplusone = j + 1;
            for (let i = 0; i < l; i++) {
                if (_cells[j][i] >= 4) {
                    _cells[j][i] -= 4;
                    if (j !== lminus1) _cells[jplusone][i]++;
                    if (j !== 0) _cells[jminusone][i]++;
                    if (i !== lminus1) _cells[j][i + 1]++;
                    if (i !== 0) _cells[j][i - 1]++;
                    notdone = true;
                }
            }
        }
        if (counter % 4 == 0) {
            drawGrid(_cells, options.xGap, options.size, options.gap, colorSandpiles)
        }
        counter++;
        if (!notdone) clearInterval(timer);
    }, options.time);

    return _cells;
}


function infiniteGrid(cell, n) {

    let _cells = fill2DarrFromArr([0, 0, 0, 0, cell, 0, 0, 0, 0]);
    for (let k = 0; k < n; k++) {
        const l = _cells.length;
        const lminus1 = l - 1;

        for (let m = 0; m < 3; m++) {

            for (let j = 0; j < _cells.length; j++) {
                const jminusone = j - 1;
                const jplusone = j + 1;
                for (let i = 0; i < _cells.length; i++) {
                    if (_cells[j][i] >= 4) {
                        _cells[j][i] -= 4;
                        if (j !== lminus1) _cells[jplusone][i]++;
                        if (j !== 0) _cells[jminusone][i]++;
                        if (i !== lminus1) _cells[j][i + 1]++;
                        if (i !== 0) _cells[j][i - 1]++;
                    }
                }
            }
        }

        _cells = bumpGridSize(_cells);
    }
    return reduceTillCompleteFast(_cells);
}

function heuristicForN(cell) {
    return Math.floor(Math.sqrt(cell / 7));
}

function infiniteGridFast(cell) {

    const n = Math.round(Math.sqrt(cell / 7)) + 1;

    let _cells = fill2DarrFromArr([0, 0, 0, 0, cell, 0, 0, 0, 0]);
    for (let k = 0; k < n; k++) {
        const l = _cells.length;
        const lminus1 = l - 1;

        for (let m = 0; m < 3; m++) {

            for (let j = 0; j < _cells.length; j++) {
                const jminusone = j - 1;
                const jplusone = j + 1;
                for (let i = 0; i < _cells.length; i++) {
                    if (_cells[j][i] >= 4) {
                        _cells[j][i] -= 4;
                        if (j !== lminus1) _cells[jplusone][i]++;
                        if (j !== 0) _cells[jminusone][i]++;
                        if (i !== lminus1) _cells[j][i + 1]++;
                        if (i !== 0) _cells[j][i - 1]++;
                    }
                }
            }
        }

        _cells = bumpGridSize(_cells);
    }
    return reduceTillCompleteFast(_cells);
}