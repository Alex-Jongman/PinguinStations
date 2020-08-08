// document.cookie = "SameSite=Strict; Secure";

console.log('Pinguin Stations');
console.log('----------------');
console.log('Audio stuff');

let obj = document.createElement('audio');

let volumeCtl = document.querySelector("#volume");
volumeCtl.addEventListener('change', event => {
    let newVolume = Number(volumeCtl)/10;
    console.log(newVolume);
    obj.volume = newVolume;
    console.log('audio', newVolume);
});



console.log('----------------');
console.log('Stations - stuff');

let pinguinStations = [];

pinguinStations.indie = document.querySelector("#audio-pinguinIndie");
pinguinStations.classic = document.querySelector("#audio-pinguinClassic");

function stopAllStations() {
    Object.keys(pinguinStations).forEach(station => {
        pinguinStations[station].pause();
    });    
}

document.querySelector('#btn-stop').addEventListener('click', stopAllStations);

document.querySelector("#btn-pinguinIndie").addEventListener('click', event => {
    stopAllStations();
    pinguinStations.indie.play();
});

document.querySelector("#btn-pinguinClassic").addEventListener('click', event => {
    stopAllStations();
     pinguinStations.classic.play();
});

