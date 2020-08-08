// document.cookie = "SameSite=Strict; Secure";

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

let obj = document.createElement('audio');
console.log('audio', obj.volume);
obj.volume = 0.75;