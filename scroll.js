const scroller = document.getElementById('scroller');



window.onscroll = () => {
  rotate(scroller);
}

window.onload = () => {
  rotate(scroller);
}

scroller.onclick = () => {
  if (window.scrollY > window.innerHeight / 2) {
    window.scrollTo(0, 0);
  } else {
    window.scrollTo(0, window.innerHeight);
  }
}

function rotate(object) {
  if (window.scrollY > window.innerHeight / 2) {
    object.style.rotate = '0deg';
  } else {
    object.style.rotate = '180deg';
  }
}

