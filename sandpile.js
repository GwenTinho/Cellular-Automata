class Sandpile {
    constructor(size, options) {
        this.size = size || 50;

        if (!isEmpty(options)) this.options = options;
        else {
            this.options = {
                time: 10,
                xGap: 0,
                size: 5,
                gap: 0
            }
        }

        this.create(0);
    }

    create(val) {
        const filler = new Array(this.size ** 2);
        this.grid = fill2DarrFromArr(filler.fill(val));
    }

    infGrid(val) {
        this.grid = infiniteGridFast(val);
    }

    reduce() {
        this.grid = reduceTillCompleteFast(this.grid);
    }

    reduceAnimate() {
        this.grid = reduceAnimate(this.grid, this.options);
    }

    addIdentityAnimate() {
        this.grid = addPilesAnimate(this.grid, this.identity, this.options);
    }

    findIdentity() {
        const filler = new Array(this.size ** 2);
        let cell = fill2DarrFromArr(filler.fill(6));
        this.identity = subPiles(cell, reduceTillCompleteFast(cell));
    }

    animateIdentity() {
        const filler = new Array(this.size ** 2);
        let cell = fill2DarrFromArr(filler.fill(6));
        this.identity = subPilesAnimate(cell, reduceTillCompleteFast(cell), this.options);
        setTimeout(() => {
            this.identity = reduceTillCompleteFast(this.identity);
        }, this.options.time)
    }

    changeValues(arr) {
        for (let i = 0; i < arr.length; i++) {
            this.grid[arr[i].y][arr[i].x] = arr[i].val;
        }
    }

    changeValue(x, y, val) {
        this.grid[y][x] = val;
    }

    changeMid(val) {
        const mid = (this.size + 1) >> 1;
        this.changeValue(mid, mid, val);
    }

    show() {
        drawGrid(this.grid, this.options.xGap, this.options.size, this.options.gap, colorSandpiles);
    }
    showIden() {
        drawGrid(this.identity, this.options.xGap, this.options.size, this.options.gap, colorSandpiles);
    }
}