let ctx = canvas.getContext('2d');
ctx.canvas.width = 100;
ctx.canvas.height = 100;
ctx.font = "20px Georgia";
ctx.fillStyle = "black";
let cv = document.getElementById("canvas");

let test;
window.onload = () => {
    let timer;
    let isDrawing = false;

    test = new CellAuto(100, replicatorRules).show();

    let size;
    document.querySelector(".size button").addEventListener("click", e => {
        if (isDrawing) return;
        size = parseInt(document.querySelector(".size input").value);

        ctx.canvas.width = size;
        ctx.canvas.height = size;

        test.setSize(size)
            .changeMid()
            .show()
    });

    document.querySelector(".display").addEventListener("click", e => {
        if (isDrawing) return;
        if (e.target.id === "show") test.show();
        if (e.target.id === "run") {
            clearCanvas();
            clearInterval(timer);
            timer = test.run();
        }
        if (e.target.id === "stop") clearInterval(timer);
    });

    document.querySelector(".draw").addEventListener("click", e => {
        console.log(isDrawing);
        if (e.target.id === "draw") isDrawing = !isDrawing;
        if (e.target.id === "canvas" && isDrawing) {
            let x = Math.round(e.clientX / test.options.size),
                y = Math.round(e.clientY / test.options.size);

            test.changeValue(x, y)
                .show();
        }
    });
}