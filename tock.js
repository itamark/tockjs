function tock(params){
	params = {
		appendTo: document.getElementsByTagName('body')[0]
	}
	createClock(params);
	runClock();
}

function createClock(params){
	// create clock elements
	var clockContainer = document.createElement('div');
	var clockBodyOne = document.createElement('div');
	var clockBodyTwo = document.createElement('div');
	var handOne = document.createElement('hr');
	var handTwo = document.createElement('hr');

	// give clock elements names
	clockContainer.className = 'clockContainer';
	clockBodyOne.className = 'clockbody one';
	clockBodyTwo.className = 'clockbody two';
	handOne.className = 'hand one';
	handTwo.className = 'hand two';

	clockContainer.appendChild(clockBodyOne);
	clockContainer.appendChild(clockBodyTwo);
	clockBodyOne.appendChild(handOne);
	clockBodyTwo.appendChild(handTwo);
	params.appendTo.appendChild(clockContainer);


setInterval(function() {
   runClock();
}, 60 * 1000);
}

function runClock(){
	var timeNow = setClock();
	console.log(timeNow);
	if(timeNow[0]>12){ timeNow[0] = timeNow[0]-12; }

	// hours in terms of degrees + fraction of hours based on minutes/60*degrees
	var initialHours = (timeNow[0]*(360/12))+(timeNow[1]/60)*(360/12);
	var initialMinutes = (timeNow[1]*(360/60));

	//Position vertically for start at 12pm
	initialHours = initialHours-90;
	initialMinutes = initialMinutes-90;
	document.getElementsByClassName('clockbody one')[0].style.cssText = "-ms-transform: rotate("+initialHours+"deg); -webkit-transform: rotate("+initialHours+"deg); transform: rotate("+initialHours+"deg);";
	document.getElementsByClassName('clockbody two')[0].style.cssText = "-ms-transform: rotate("+initialMinutes+"deg); -webkit-transform: rotate("+initialMinutes+"deg); transform: rotate("+initialMinutes+"deg);";
}

function setClock(){
	var d = new Date();
d.getHours(); // => 9
d.getMinutes(); // =>  30
d.getSeconds(); // => 51
// console.log(d.getHours()+':'+d.getMinutes()+':'+d.getSeconds());
return [d.getHours(), d.getMinutes(), d.getSeconds()];

}

window.onload = function(){
	tock();
}