const { arrayBuffer } = require("stream/consumers");

const ctx = AudioContext ();
let audio;

fetch("https://api.spotify.com")
   .then(data => data.arrayBuffer())
    .then(arrayBuffer => ctx.decodeAudioData(arrayBuffer))
    .then(decodeAudio => {
        audio = decodeAudio;
    })


 function playback() {
    const playsound = ctx.createBufferSource();
    playSound.buffer = audio;
    playSound.connect(ctx.destination);
    playSound.start(ctx.currentTime);
 }

 window.addEventListener("mousedown", playback);
