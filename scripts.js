let audio = document.querySelector("#audio");
let audio2 = document.querySelector("#audio2");
let audio3 = document.querySelector("#audio3");
let audio4 = document.querySelector("#audio4");
let audio5 = document.querySelector("#audio5");
let playbutton = document.querySelector("#playbutton");
let previousbtn = document.querySelector("#previousbtn");
let nextbtn = document.querySelector("#nextbtn");
let img = document.querySelector("#playsvg");
let songrow1 = document.querySelector("#song1");
let songrow2 = document.querySelector("#song2");
let songrow3 = document.querySelector("#song3");
let songrow4 = document.querySelector("#song4");
let songrow5 = document.querySelector("#song5");
let songs = document.querySelectorAll(".songs-list li");
let indexprenext = 1;


songs.forEach((song, index) => {

  song.addEventListener("click", () => {
    indexprenext = index + 1;
    let audiosrc = `songs/song${index + 1}.mp3`;
    audio.src = audiosrc;
    audio.play();


  });

});

playbutton.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    img.src = "play.svg";
    audi2.pause();
    audio3.pause();


  }
  else {
    audio.pause();
    img.src = "playbtn.svg";
  }

});

audio.addEventListener("ended", () => {
  img.src = "playbtn.svg";
});

nextbtn.addEventListener("click", () => {
  if (indexprenext < songs.length) {

    indexprenext = indexprenext + 1
    let audiosrc = `songs/song${indexprenext}.mp3`
    audio.src = audiosrc;
    audio2.pause();
    audio.pause();
    audio3.pause();
    audio4.pause();
    audio5.pause();
    audio.play();
    img.src = "playbtn.svg";
  }
});

previousbtn.addEventListener("click", () => {
  if (indexprenext > 1) {

    indexprenext = indexprenext - 1
    let audiosrc = `songs/song${indexprenext}.mp3`
    audio.src = audiosrc;
    audio2.pause();
    audio.pause();
    audio3.pause();
    audio4.pause();
    audio5.pause();
    audio.play();
    img.src = "playbtn.svg";

  }
});

audio.addEventListener("ended", () => {
  if (indexprenext < songs.length) {

    indexprenext = indexprenext + 1
    let audiosrc = `songs/song${indexprenext}.mp3`
    audio.src = audiosrc;
    audio.play();
  }
});

songrow1.addEventListener("click", () => {
  alert("Song1 is playing");
  indexprenext = 1
  audio.play();
  audio2.pause();
  audio3.pause();
  audio4.pause();
  audio5.pause();
});
songrow2.addEventListener("click", () => {
  alert("Song2 is playing");
  indexprenext = 2
  audio2.play();
  audio.pause();
  audio3.pause();
  audio4.pause();
  audio5.pause();
});
songrow3.addEventListener("click", () => {

  alert("Song3 is playing");
  indexprenext = 3
  audio3.play();
  audio.pause();
  audio2.pause();
  audio4.pause();
  audio5.pause();
});
songrow4.addEventListener("click", () => {
  alert("song4 is playing");
  indexprenext = 4
  audio4.play();
  audio2.pause();
  audio3.pause();
  audio.pause();
  audio5.pause();
});
songrow5.addEventListener("click", () => {
  alert("Song5 is playing");
  indexprenext = 5
  audio5.play();
  audio2.pause();
  audio3.pause();
  audio4.pause();
  audio.pause();
});






