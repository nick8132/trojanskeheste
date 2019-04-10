var maks
var bigorless
var result

function onload() {
    var input = document.getElementsByClassName("textbox");
    for (var i = 0; i < input.length; i++) {
        input[i].addEventListener("keyup", function(event) {
            if (event.keyCode === 13) {
                event.preventDefault();
                document.getElementById("myBtn").click();
            }
            if (event.keyCode === 2) {
                return false;
            }
        })
    }
}

var secretbg = false;

function bgchange(argument) {
    if(secretbg){
        var image = "background5v1.jpg";
        document.querySelectorAll("body")[0].style.backgroundImage = "url("+image+")";
        document.querySelectorAll("body")[0].style.backgroundSize = "cover"
        secretbg = false;
    }else{
        var image = "background.jpg";
        document.querySelectorAll("body")[0].style.backgroundImage = "url("+image+")";
        document.querySelectorAll("body")[0].style.backgroundSize = "auto"
        secretbg = true;
    }
}

function calcbigorless() {
 	maks = document.getElementById('maks').value;
    bigorless = document.getElementById('bigorless').value;

    if (Number(bigorless) < Number(maks)) {
    	result = bigorless + "<br>" + " er mindre end " + "<br>" + maks
    }
    if (Number(bigorless) > Number(maks))  {
    	result = bigorless + "<br>" + " er større end " + "<br>" + maks
    }
    if (Number(bigorless) == Number(maks)) {
    	result = bigorless + "<br>" + " er samme værdi som " + "<br>" + maks
    }
    if (bigorless == "-42" && maks == "42" || bigorless == "42" && maks == "-42") {
        answertolife();
    }
    if (bigorless == "baggrund" && maks == "ny") {
        result = "Kan du finde knappen?"
    }
    if (result === undefined) {
        result = "Du kan kun skrive tal, der er dog noget tekst du kan skrive ;)"
    }

    document.getElementById('result').innerHTML = result;
}

var message="Glem det!";

function answertolife() {
    var video = document.getElementById("video")
    if (video.paused) {
        video.width = 1000;
        video.currentTime = 0;
        video.play()
    }else {
        video.pause();
        video.currentTime = 0;
        video.width = 0
    }
}

document.onkeypress = function (event) {
    event = (event || window.event);
    if (event.keyCode == 123) {
        alert(message);
        return false;
    }
}
document.onmousedown = function (event) {
    event = (event || window.event);
    if (event.keyCode == 123) {
        alert(message);
        return false;
    }
}
document.onkeydown = function (event) {
    event = (event || window.event);
    if (event.keyCode == 123) {
        alert(message);
        return false;
    }
}

function clickIE4(){
    if (event.button==2||event){
        alert(message);
        return false;
    }
}
 
function clickNS4(e){
    if (document.layers||document.getElementById&&!document.all){
    if (e.which==2||e.which==3){
        alert(message);
        return false;
        }
    }
}
 
if (document.layers){
    document.captureEvents(Event.MOUSEDOWN);
    document.onmousedown=clickNS4;
    }
else if (document.all&&!document.getElementById){
    document.onmousedown=clickIE4;
    }
 
document.oncontextmenu=new Function("alert(message);return false")

window.addEventListener('keydown', function(event) {
    if ((event.keyCode === (73) && (event.ctrlKey || event.metaKey) && !event.altKey && (!event.shiftKey || window.chrome || window.opera)) 
        || ((event.keyCode === (74) && (event.ctrlKey || event.metaKey) && !event.altKey && (!event.shiftKey || window.chrome || window.opera)))) {
        event.preventDefault();
        alert(message);
    if (event.stopImmediatePropagation) {
        event.stopImmediatePropagation();
    } else {
        event.stopPropagation();
        }   
    return;
    }
    }, true);

