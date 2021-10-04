const holes = document.querySelectorAll(".hole");
const pointstable = document.querySelectorAll(".points");
const cheems = document.querySelectorAll(".cheem");
let final;
let times = false;
let score = 0;

function randTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
