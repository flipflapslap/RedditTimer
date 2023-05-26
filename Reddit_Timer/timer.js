//Initialize time, date, and HTML variables
var hours = localStorage.getItem('hoursKey');
var minutes = localStorage.getItem('minutesKey');
var seconds = localStorage.getItem('secondsKey');
var storedDate = localStorage.getItem('storedDate');
var todaysDate = new Date().getDate();
var nextHour = localStorage.getItem('hoursKey');

if (hours == "undefined") {
	hours = 0;
	minutes = 0;
	seconds = 0;
	nextHour = 0;
}

//If stored date == null, set as todays date
if (storedDate == "undefined") {
	localStorage.setItem('storedDate', todaysDate);
}

//If its a new day, reset timer
if (storedDate != todaysDate){
	hours = 0;
	minutes = 0;
	seconds = 0;
	nextHour = 0;
	localStorage.setItem('storedDate', todaysDate);
}

if (document.title == 'Reddit Timer'){
	document.getElementById("hours").innerHTML = "0" + 0;
	document.getElementById("minutes").innerHTML = "0" + 0;
	document.getElementById("seconds").innerHTML = "0" + 0;
}

//Time counter 
function count() {
	seconds++;
	if (seconds == 60) {
		seconds = 0;
		minutes++;
		if (minutes == 60) {
			minutes = 0;
			hours++;
		}
	}
	//Format time as 00:00:00
	if (document.title == 'Reddit Timer'){
		document.getElementById("hours").innerHTML = (hours > 9 ? hours : "0" + hours);
		document.getElementById("minutes").innerHTML = (minutes > 9 ? minutes : "0" + minutes);
		document.getElementById("seconds").innerHTML = (seconds > 9 ? seconds : "0" + seconds);
	}
	//Log time to local storage
	localStorage.setItem('hoursKey', hours);
	localStorage.setItem('minutesKey', minutes);
	localStorage.setItem('secondsKey', seconds);
	
	//Alert user every hour
	if (hours != nextHour) {
		if(hours > 1){
			window.alert("You've been on Reddit for " + hours + " hours!");
			nextHour = hours;
		} else {
			window.alert("You've been on Reddit for " + hours + " hour!");
			nextHour = hours;
		}	
	}
}
//Do not run count() on popup.html
if (document.title == 'Reddit Timer'){
	setInterval(count,1000);
}