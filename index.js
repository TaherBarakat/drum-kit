window.addEventListener("keydown", (e) => {
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  let pressedKey = document.querySelector(`div[data-key="${e.keyCode}"]`);
  pressedKey.classList.add("playing");

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
});

let keys = document.querySelectorAll(".key");

keys.forEach((key) =>
  key.addEventListener("touchstart", (e) => {
    let audio = document.querySelector(
      `audio[data-key="${e.target.getAttribute("data-key")}"]`
    );
    let pressedKey = e.target;
    pressedKey.classList.add("playing");
    if (!audio) return;
    audio.play();
    audio.currentTime = 0;
  })
);

keys.forEach((key) =>
  key.addEventListener("transitionend", (e) => {
    if (e.propertyName !== "transform") return;
    e.target.classList.remove("playing");
  })
);
