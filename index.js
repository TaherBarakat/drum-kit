window.addEventListener("keydown", (e) => {
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.play();
  audio.currentTime = 0;
});
