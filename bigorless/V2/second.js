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
    if (result === undefined) {
        result = "Du kan kun skrive tal, der er dog noget tekst du kan skrive ;)"
    }

    document.getElementById('result').innerHTML = result;
}