function show(id5, id6) {
	document.getElementById(id5).style.backgroundColor = "#06c";
	document.getElementById(id5).style.color = "#fff";
	document.getElementById(id6).style.display = "block";
}
function hide(id1, id2, id3, id4) {
	document.getElementById(id1).style.backgroundColor = "#6cf";
	document.getElementById(id2).style.backgroundColor = "#6cf";
	document.getElementById(id1).style.color = "#000";
	document.getElementById(id2).style.color = "#000";
	document.getElementById(id3).style.display = "none";
	document.getElementById(id4).style.display = "none";
}
function hide2(id) {
    document.getElementById(id).style.display = "none";
}
function show2(id) {
    document.getElementById(id).style.display = "block";
}

//countdown codes start here
playCD = false;

function timerCD() {
	if(inputSec.value > -1)
		inputSec.value--;
	if(inputSec.value == -1 && inputMin.value > 0) {
		inputMin.value--;
		inputSec.value = 59;
	}
	if(inputSec.value < 1 && inputMin.value == 0) {
		clearInterval(startCD);
		alert("count down is done");
		resetCD();
	}
	hMin.innerHTML = inputMin.value;
	hSec.innerHTML = inputSec.value;
	if(inputMin.value < 10)
		hMin.innerHTML = "0"+ inputMin.value;
	if(inputSec.value < 10)
		hSec.innerHTML = "0"+ inputSec.value;
}

function startCountDown() {
	if(playCD == false)
		playCD = true;
	else
		playCD = false;
	if(playCD == true) {
		startCD = setInterval(timerCD, 1000);
		buttonCD.innerHTML = "PAUSE";
		hide2("inputCD");
		show2("countDown");
	}
	if(playCD == false) {
		clearInterval(startCD);
		buttonCD.innerHTML = "CONTINUE";
	}
}

function resetCD() {
	inputMin.value = 0;
	inputSec.value = 0;
	clearInterval(startCD);
	hide2("countDown");
	show2("inputCD");
	buttonCD.innerHTML = "START";
	playCD = false;
}
hide2("countDown");
//countdown codes ends here
