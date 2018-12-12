function addPiles(pile1, pile2) {
    let _pile1 = copy(pile1);

    const l = _pile1.length;

    for (let j = 0; j < l; j++) {
        for (let i = 0; i < l; i++) {
            _pile1[i][j] += pile2[i][j];
        }
    }
    return reduceTillCompleteFast(_pile1);
}

function addPilesAnimate(pile1, pile2, options) {
    let _pile1 = copy(pile1);

    const l = _pile1.length;

    for (let j = 0; j < l; j++) {
        for (let i = 0; i < l; i++) {
            _pile1[i][j] += pile2[i][j];
        }
    }
    return reduceAnimate(_pile1, options);
}

function subPiles(pile1, pile2) {
    let _pile1 = copy(pile1);
    const l = _pile1.length;

    for (let j = 0; j < l; j++) {
        for (let i = 0; i < l; i++) {
            _pile1[i][j] -= pile2[i][j];
        }
    }
    return reduceTillCompleteFast(_pile1);
}

function subPilesAnimate(pile1, pile2, options) {
    let _pile1 = copy(pile1);
    const l = _pile1.length;

    for (let j = 0; j < l; j++) {
        for (let i = 0; i < l; i++) {
            _pile1[i][j] -= pile2[i][j];
        }
    }
    return reduceAnimate(_pile1, options);
}

function getInfPileWidth(pile) {
    const centerindex = (pile.length + 1) >> 1;
    let lastSigIndex = pile.length - 1;
    for (let i = centerindex; i < pile.length; i++) {
        if (pile[centerindex][i] !== 0) lastSigIndex = i;
    }
    return Math.abs(centerindex - lastSigIndex);
}