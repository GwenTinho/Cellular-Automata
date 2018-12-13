function replicatorRules(n) {
    return {
        diesIf: n % 2 === 0,
        bornIf: n % 2 === 1,
        includeDiagonals: true,
    }
}

function ulamStanislawRules(n) {
    return {
        diesIf: false,
        bornIf: n === 1,
        includeDiagonals: false,
    }
}

function golRules(n) { //  B3/S23
    return {
        diesIf: !(n === 2 || n === 3),
        bornIf: n === 3,
        includeDiagonals: true,
    }
}

function highLifeRules(n) { //B36 / S23
    return {
        diesIf: !(n === 2 || n === 3),
        bornIf: n === 3 || n === 6,
        includeDiagonals: true,
    }
}

function seeds(n) {
    return {
        diesIf: n !== 2,
        bornIf: n === 2,
        includeDiagonals: true,
    }
}

function ruleFromStr(expression) {
    let [b, s] = expression.split("/");
    b = b.substring(1);
    s = s.substring(1);

    b = b.split("").map(e => parseInt(e));
    s = s.split("").map(e => parseInt(e));

    return n => {
        return {
            diesIf: !s.map(e => (n === e)).reduce((acc, curr) => acc || curr),
            bornIf: b.map(e => (n === e)).reduce((acc, curr) => acc || curr),
            includeDiagonals: true,
        }
    }
}

const presets = [
    "B1357/S1357",
    "B25/S4",
    "B3/S012345678",
    "B3/S23",
    "B34/S34",
    "B35678/S5678",
    "B36/S125",
    "B36/S23",
    "B3678/S34678",
    "B368/S245",
    "B4678/S35678",
];