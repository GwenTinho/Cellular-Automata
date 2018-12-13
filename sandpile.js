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

    setSize(size) {
        this.size = size || 100;
        this.create(0);
        return this;
    }

    create(val) {
        const filler = new Array(this.size ** 2);
        this.grid = fill2DarrFromArr(filler.fill(val));
        return this;
    }

    infGrid(val) {
        this.grid = infiniteGridFast(val);
        return this;
    }

    reduce() {
        this.grid = reduceTillCompleteFast(this.grid);
        return this;
    }

    reduceAnimate() {
        this.grid = reduceAnimate(this.grid, this.options);
        return this;
    }

    addIdentityAnimate() {
        this.grid = addPilesAnimate(this.grid, this.identity, this.options);
        return this;
    }

    findIdentity() {
        const filler = new Array(this.size ** 2);
        let cell = fill2DarrFromArr(filler.fill(6));
        this.identity = subPiles(cell, reduceTillCompleteFast(cell));
        return this;
    }

    animateIdentity() {
        const filler = new Array(this.size ** 2);
        let cell = fill2DarrFromArr(filler.fill(6));
        this.identity = subPilesAnimate(cell, reduceTillCompleteFast(cell), this.options);
        setTimeout(() => {
            this.identity = reduceTillCompleteFast(this.identity);
        }, this.options.time);
        return this;
    }

    changeValues(arr) {
        for (let i = 0; i < arr.length; i++) {
            this.grid[arr[i].y][arr[i].x] = val;
        }
        return this;
    }

    changeValue(x, y, val) {
        this.grid[y][x] = val;
        return this;
    }

    changeMid(val) {
        const mid = (this.size + 1) >> 1;
        this.changeValue(mid, mid, val);
        return this;
    }

    drawVertical(y1, y2, x, val) {
        for (let i = 0; i <= y2 - y1; i++) {
            this.changeValue(x, y1 + i, val);
        }
        return this;
    }

    drawHorizontal(y, x1, x2, val) {
        for (let i = 0; i <= x2 - x1; i++) {
            this.changeValue(x1 + i, y, val);
        }
        return this;
    }

    drawAngle(x, y, radius, up, right, val) {
        if (up && right) {
            this.drawVertical(y - radius, y, x, val);
            this.drawHorizontal(y, x, x + radius, val);
        } else if (!up && right) {
            this.drawVertical(y, y + radius, x, val);
            this.drawHorizontal(y, x, x + radius, val);
        } else if (up && !right) {
            this.drawVertical(y - radius, y, x, val);
            this.drawHorizontal(y, x - radius, x, val);
        } else {
            this.drawVertical(y, y + radius, x, val);
            this.drawHorizontal(y, x - radius, x, val);
        }
        return this;
    }

    drawRect(x, y, l, L, val) {
        for (let i = 0; i < l; i++) {
            this.drawVertical(y - L, y, x + i, val);
        }
        return this;
    }

    drawCross(x, y, radius) {
        this.drawVertical(y - radius, y + radius, x, val);
        this.drawHorizontal(y, x - radius, x + radius, val);
        return this;
    }

    show() {
        drawGrid(this.grid, this.options.xGap, this.options.size, this.options.gap, colorSandpiles);
        return this;
    }
    showIden() {
        drawGrid(this.identity, this.options.xGap, this.options.size, this.options.gap, colorSandpiles);
        return this;
    }
}