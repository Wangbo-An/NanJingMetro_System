let button = document.getElementsByClassName("btn-block")[0]
button.addEventListener("click", function(){
    let inputs = document.getElementsByTagName("input");
    if (inputs[0].value != '' && inputs[1].value != ''){
        window.open("system.html", "_self")
    }
});

let video = document.getElementsByTagName("video")[0];
video.playbackRate = 0.8;
let audio = document.getElementsByTagName("audio")[0];

let body = document.getElementsByTagName("body")[0]
body.addEventListener("click", function(){
    if (audio.paused){
        audio.play();
    }
})