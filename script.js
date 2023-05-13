const arrowButtons = document.querySelectorAll(".arrow");
let slides = document.querySelectorAll(".slide");

let flag = 0;

function controller(x) {
  flag += x;
  slideShow(flag);
}

function slideShow(num) {
  if (num === slides.length) {
    flag = 0;
    num = 0;
  }
  
  if (num < 0) {
    flag = slides.length - 1;
    num = flag;
  }

  for (let y of slides) {
    y.style.display = "none";
  }

  slides[num].style.display = "block";
}

slideShow(flag);
