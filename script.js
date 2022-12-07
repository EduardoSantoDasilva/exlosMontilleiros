

const music = document.querySelector('#audio');

const vol = document.querySelector('.vol-control');

const disk = document.querySelector('.disco');
const currentTime = document.querySelector('.tempo');
const musicDuration= document.querySelector('.duracao');
const playBtn = document.querySelector('.play-btn');


playBtn.addEventListener('click', () => {
    if(playBtn.className.includes('pause')){
        music.play();
    }
    else{
        music.pause();
    }
    playBtn.classList.toggle('pause');
    disk.classList.toggle('play');
});

function setVolume() {
    // Set the volume according to the
    // percentage of the volume slider set
    music.volume = vol.value / 100;
  }
