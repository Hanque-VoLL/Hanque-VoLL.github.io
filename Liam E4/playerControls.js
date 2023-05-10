
let videoElement = document.getElementById("videoElement");

let playButton = document.getElementById("playButton");
let stopButton = document.getElementById("stopButton");

let progressBar = document.getElementById("progressBar");


videoElement.removeAttribute("controls");

document.getElementById("controlsWrapper").style.display = "flex";


videoElement.addEventListener('loadedmetadata', () => {
  progressBar.setAttribute('max', videoElement.duration);
});


videoElement.addEventListener("playing", () => {

  if (!progressBar.getAttribute('max')){
    progressBar.setAttribute('max', videoElement.duration);
  }
});


videoElement.addEventListener("waiting", () => {
  progressBar.classList.add("timeline-loading");
});
videoElement.addEventListener("canplay", () => {
  progressBar.classList.remove("timeline-loading");
});


videoElement.addEventListener("ended", () => {
  playButton.style.backgroundImage = "url('./icons/play.svg')";
});


function playPause(){

  if (videoElement.paused || videoElement.ended) {

    videoElement.play();

    playButton.style.backgroundImage = "url('./icons/pause.svg')";
  } else {

    videoElement.pause();

    playButton.style.backgroundImage = "url('./icons/play.svg')";
  }
}


playButton.addEventListener('click', playPause);


videoElement.addEventListener('click', playPause);


videoElement.addEventListener('timeupdate', () => {

  progressBar.value = videoElement.currentTime;
});


function scrubToTime(e){

  let x = e.clientX - (progressBar.getBoundingClientRect().left + window.scrollX);
  videoElement.currentTime = clampZeroOne(x / progressBar.offsetWidth) * videoElement.duration;
}



progressBar.addEventListener('mousedown', scrubToTime);
progressBar.addEventListener('mousedown', (e) => {

  window.addEventListener('mousemove', scrubToTime);
  window.addEventListener('mouseup', () => {
    window.removeEventListener('mousemove', scrubToTime);
  });
});





function clampZeroOne(input){
  return Math.min(Math.max(input, 0), 1);
}

function logEvent(e){
  console.log(e);
}

const speedBtn = document.querySelector(".speed-btn")

// Playback speed
var x = document.getElementById("videoElement");

// The function of the playback buttons allows the user to control the speed of the video. 
// Personally speaking I have used this in the past for tutorial videos that I've wanted to 
// skim through as I didn't want to spend so much time watching a video whereas I can slightly 
// speed it up and still obtain the same amount of information. I find it a useful feature to have
// especially if the user just wants to skim through the video for a certain part they're looking for

function slowPlaySpeed() { 
  x.playbackRate = 0.5;
} 

function normalPlaySpeed() { 
  x.playbackRate = 1;
} 

function fastPlaySpeed() { 
  x.playbackRate = 2;
} 
