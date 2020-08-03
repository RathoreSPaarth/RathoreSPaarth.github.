let i = 0;
let headText = "Hello World, I'm Paarth!"
let speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < headText.length) {
    document.getElementById("head-text").innerHTML += headText.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = setTimeout(typeWriter,1000)

let k = 0;
let intro = "Hey everyone! I'm Paarth, an aspiring full stack web developer and I'm currently in my final year of B.Tech (CSE). Follow along to know more about me!"
function typeWriter2() {
    if (k < intro.length) {
      document.getElementById("intro-text").innerHTML += intro.charAt(k);
      k++;
      setTimeout(typeWriter2, 30);
    }
  }

  window.onload = setTimeout(typeWriter2,2500)