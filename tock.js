function tock(params){
	createClock(params);
	runClock();
}

function createClock(params){
	// create clock elements
	var clockContainer = document.createElement('div');
	var clockBodyOne = document.createElement('div');
	var clockBodyTwo = document.createElement('div');
	var clockBodyThree = document.createElement('div');
	var handOne = document.createElement('hr');
	var handTwo = document.createElement('hr');
	var handThree = document.createElement('hr');
	var timeText = document.createElement('span');

	// give clock elements names
	clockContainer.className = 'clockContainer';
	clockBodyOne.className = 'clockbody one';
	clockBodyTwo.className = 'clockbody two';
	clockBodyThree.className = 'clockbody three';
	handOne.className = 'hand one';
	handTwo.className = 'hand two';
	handThree.className = 'hand three';
	timeText.className = 'timeText';

	clockContainer.appendChild(clockBodyOne);
	clockContainer.appendChild(clockBodyTwo);
	clockContainer.appendChild(clockBodyThree);
	clockContainer.appendChild(timeText);
	clockBodyOne.appendChild(handOne);
	clockBodyTwo.appendChild(handTwo);
	clockBodyThree.appendChild(handThree);
	params.appendTo.appendChild(clockContainer);
	


setInterval(function() {
   runClock();
}, 1000);
}

function runClock(){
	var d = new Date();
	var timeNow = [d.getHours(), d.getMinutes(), d.getSeconds()];
	console.log(timeNow);
	if(timeNow[0]>12){ timeNow[0] = timeNow[0]-12; }

	// hours in terms of degrees + fraction of hours based on minutes/60*degrees
	var initialHours = (timeNow[0]*(360/12))+(timeNow[1]/60)*(360/12);
	var initialMinutes = (timeNow[1]*(360/60));
	var initialSeconds = (timeNow[2]*(360/60));

	//Position vertically for start at 12pm
	initialHours = initialHours-90;
	initialMinutes = initialMinutes-90;
	initialSeconds = initialSeconds-90;
	document.getElementsByClassName('clockbody one')[0].style.cssText = "-ms-transform: rotate("+initialHours+"deg); -webkit-transform: rotate("+initialHours+"deg); transform: rotate("+initialHours+"deg);";
	document.getElementsByClassName('clockbody two')[0].style.cssText = "-ms-transform: rotate("+initialMinutes+"deg); -webkit-transform: rotate("+initialMinutes+"deg); transform: rotate("+initialMinutes+"deg);";
	document.getElementsByClassName('clockbody three')[0].style.cssText = "-ms-transform: rotate("+initialSeconds+"deg); -webkit-transform: rotate("+initialSeconds+"deg); transform: rotate("+initialSeconds+"deg);";
	document.getElementsByClassName('timeText')[0].innerHTML = d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();

}



