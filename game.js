const text = document.querySelector(".fancy");
const strText = text.textContent;
console.log(strText);
const splitText = strText.split("");
text.textContent = "";

for (let i = 0; i < splitText.length; i++) {
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);
function onTick() {
  const span = text.querySelectorAll("span")[char];
  span.classList.add("fade");
  char++;
  if (char === splitText.length) {
    complete();
    return;
  }
}
function complete() {
  clearInterval(timer);
  timer = null;
}

const pits = document.querySelectorAll(".pit");
const pointstable = document.querySelector(".point");
const cheems = document.querySelectorAll(".cheem");
let endpit;
let timeUp = false;
let count = 0;

function rand__Time(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function rand__pits(pits) {
  const take = Math.floor(Math.random() * pits.length);
  const pit = pits[take];
  if (pit === endpit) {
    console.log("thats the same one");
    return rand__pits(pits);
  }
  endtpit = pit;
  return pit;
}

function bounce() {
  const time = rand__Time(20, 800);
  const pit = rand__pits(pits);
  pit.classList.add("up");
  setTimeout(() => {
    pit.classList.remove("up");
    if (!timeUp) bounce();
  }, time);
}

function Game() {
  pointstable.textContent = 0;
  timeUp = false;
  count = 0;
  bounce();
  setTimeout(() => (timeUp = true), 100000000000);
}

function hit() {
  count++;
  this.classList.remove("up");
  pointstable.textContent = count;
}

cheems.forEach((cheem) => cheem.addEventListener("click", hit));
