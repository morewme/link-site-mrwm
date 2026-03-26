const texts = ['<Hello World/>', '<morewme/>'];
let current = 0, charIndex = 0, deleting = false;

const el = document.querySelector('#title');

function tick() {
  const word = texts[current];
  if (!deleting) {
    el.textContent = word.slice(0, ++charIndex);
    if (charIndex === word.length) {
      deleting = true;
      return setTimeout(tick, 1600);
    }
  } else {
    el.textContent = word.slice(0, --charIndex);
    if (charIndex === 0) {
      deleting = false;
      current = (current + 1) % texts.length;
      return setTimeout(tick, 400);
    }
  }
  setTimeout(tick, deleting ? 50 : 90);
}

tick();