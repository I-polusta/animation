const holes = document.querySelectorAll(".hole");
const pointstable = document.querySelectorAll(".points");
const cheems = document.querySelectorAll(".cheem");
let final;
let times = false;
let score = 0;

function randTime(lower, upper) {
  return Math.round(Math.random() * (upper - lower) + lower);
}

function randHole(holes) {
  console.log(holes.length);
}
