const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let drawing = false;
let color = "#000000";
let size = 4;

canvas.addEventListener("mousedown", e => {
  drawing = true;
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
});

canvas.addEventListener("mousemove", e => {
  if (!drawing) return;

  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.strokeStyle = color;
  ctx.lineWidth = size;
  ctx.lineCap = "round";
  ctx.stroke();
});

canvas.addEventListener("mouseup", () => drawing = false);
canvas.addEventListener("mouseleave", () => drawing = false);

document.getElementById("color").addEventListener("change", e => {
  color = e.target.value;
});

document.getElementById("size").addEventListener("input", e => {
  size = e.target.value;
});

document.getElementById("clear").addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
