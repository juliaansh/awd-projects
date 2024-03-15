let phrases = [
  "Mamamatay ka na!",
  "4.0 sa Midterms",
  "Lots of money!",
  "Mag shishift",
  "Bagsak"
];

let rainTimeout;

function randomText() {
  return phrases[Math.floor(Math.random() * phrases.length)];
}

function rain() {
  let cloud = document.querySelector('.cloud');
  let e = document.createElement('div');
  let left = Math.floor(Math.random() * 300);
  let size = Math.random() * 1;
  let duration = Math.random() * 1;

  e.classList.add('text');
  cloud.appendChild(e);
  e.innerText = randomText();
  e.style.left = left + 'px';
  e.style.fontSize = 1 + size + 'em';
  e.style.animationDuration = 2 + duration + 's';
  e.style.whiteSpace = 'nowrap';

  setTimeout(function () {
    cloud.removeChild(e);
  }, 2000);
}

function rainOnCloudClick() {
  if (!rainTimeout) {
    rain();
    rainTimeout = setTimeout(function () {
      rainTimeout = null;
    }, 2000);
  }
}

document.querySelector('.cloud').addEventListener('click', rainOnCloudClick);


