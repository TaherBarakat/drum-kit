window.addEventListener("keydown", (e) => {
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.play();
  audio.currentTime = 0;
});
let keys = document.querySelectorAll(".key");
let keys1 = document.querySelectorAll("span");
let keys2 = document.querySelectorAll("kpd");
let click = function (e) {
  {
    console.log(e.target);
    let audio = document.querySelector(
      `audio[data-key="${e.target.getAttribute("data-key")}"]`
    );
    if (!audio) return;
    audio.play();
    audio.currentTime = 0;
  }
};

// keys.forEach((key) => key.addEventListener("mousedown", click, true));
keys.forEach((key) => key.addEventListener("touchstart", click, true));
