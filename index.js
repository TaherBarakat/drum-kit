// window.addEventListener("keydown", (e) => {
//   let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//   if (!audio) return;
//   audio.play();
//   audio.currentTime = 0;
// });

// let click = function (e) {
//   {
//     console.log(e.target);
//     let audio = document.querySelector(
//       `audio[data-key="${e.target.getAttribute("data-key")}"]`
//     );
//     if (!audio) return;
//     audio.play();
//     audio.currentTime = 0;
//   }
// };

// keys.forEach((key) => key.addEventListener("mousedown", click, true));

// -----------------------------------

window.addEventListener("keydown", (e) => {
  console.log(e);
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return;
  console.log(audio);
  console.log(audio.currentTime);
  audio.currentTime = 0;

  audio.play();
  console.log(audio.currentTime);
});

let keys = document.querySelectorAll(".key");

keys.forEach((key) =>
  key.addEventListener("touchstart", (e) => {
    console.log(e);
    let audio = document.querySelector(
      `audio[data-key="${e.target.getAttribute("data-key")}"]`
    );
    if (!audio) return;
    audio.play();
    audio.currentTime = 0;
  })
);
