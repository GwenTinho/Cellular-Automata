let ctx = canvas.getContext('2d');
ctx.canvas.width = 3000;
ctx.canvas.height = 3000;
ctx.font = "20px Georgia";
ctx.fillStyle = "black";

let test;
window.onload = () => {
    // test = new CellAuto(200, seeds);
    // test.drawCross(100,100,7);
    // test.run();

    test = new Sandpile(150, {
        time: 10,
        xGap: 0,
        size: 3,
        gap: 0
    });
    test.create(3);
    test.findIdentity();
    test.addIdentityAnimate();
}