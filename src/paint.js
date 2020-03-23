let { TRIANGULATION } = require("./triangulation");

let canvas = document.getElementById("paint");
console.log(canvas);

function drawPath(ctx, points, closePath) {
  const region = new Path2D();
  region.moveTo(points[0][0], points[0][1]);
  for (let i = 1; i < points.length; i++) {
    const point = points[i];
    region.lineTo(point[0], point[1]);
  }

  if (closePath) {
    region.closePath();
  }
  ctx.stroke(region);
}

ctx = canvas.getContext("2d");
// ctx.translate(canvas.width, 0);
// ctx.scale(-1, 1);

ctx.translate(canvas.width, 0);
ctx.scale(-1, 1);
function paintFace(keypoints) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // ctx.fillStyle = "#ffaa9B";

  // ctx.fillRect(20, 20, 200, 250);

  ctx.fillStyle = "#52aa9B";
  ctx.strokeStyle = "#52aa9B";
  // console.log(keypoints.length);
  for (let i = 0; i < keypoints.length; i++) {
    const x = keypoints[i][0];
    const y = keypoints[i][1];

    ctx.beginPath();

    ctx.lineWidth = 0.5;
    ctx.arc(x, y, 1 /* radius */, 0, 2 * Math.PI);
    ctx.fill();
  }
  return ctx;
}
module.exports = { paintFace };
