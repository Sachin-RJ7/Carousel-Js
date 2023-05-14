let count = 0;
let inc = 0;
let margin = 0;
let slider = document.getElementsByClassName("slider_width")[0];
let itemDisplay = 0;

// FOR DESKTOP DEVICE
if(screen.width > 990){
  itemDisplay = document.getElementsByClassName("slider_container")[0].getAttribute("display-item-d");
  margin = itemDisplay * 5;
}
// FOR TABLET DEVICE
if(screen.width > 760 && screen.width < 990){
  itemDisplay = document.getElementsByClassName("slider_container")[0].getAttribute("display-item-t");
  margin = itemDisplay * 6.8;
}
// FOR MOBILE DEVICE
if(screen.width > 280 && screen.width < 768){
  itemDisplay = document.getElementsByClassName("slider_container")[0].getAttribute("display-item-m");
  margin = itemDisplay * 20;
}

let item = document.getElementsByClassName("item");
let itemLeft = item.length % itemDisplay;
let itemSlide = Math.floor(item.length / itemDisplay) - 1;

for(let i = 0; i < item.length; i++) {
  item[i].style.width = (screen.width / itemDisplay) - margin + "px";
}

// FOR NEXT BUTTON
function next() {
  if(inc !== itemSlide + itemLeft) {
    if(inc === itemSlide) {
      inc = inc + itemLeft;
      count = count - (screen.width / itemDisplay) * itemLeft;
    }
    else {
      inc++;
      count = count - screen.width;
    }
  }
  slider.style.left = count + "px";
}

// FOR PREV BUTTON
function prev() {
  if(inc !== 0) {
    if(inc === itemLeft) {
      inc = inc - itemLeft;
      count = count + (screen.width / itemDisplay) * itemLeft;
    }
    else {
      inc--;
      count = count + screen.width;
    }
  }
  slider.style.left = count + "px";
}