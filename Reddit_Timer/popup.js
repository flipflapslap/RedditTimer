var totalHours = localStorage.getItem('totalHoursKey');
var totalMinutes = localStorage.getItem('totalMinutesKey');
var totalSeconds = localStorage.getItem('totalSecondsKey');

if (totalHours == "undefined" || totalHours == null){
	totalHours = 0;
	totalMinutes = 0;
	totalSeconds = 0;
}

//Initialize days of the week, if no value in local storage, hours/minutes/seconds = 00:00:00
document.getElementById("sunHours").innerHTML = localStorage.getItem('sunHoursKey') || "0" + 0;
document.getElementById("sunMinutes").innerHTML = localStorage.getItem('sunMinutesKey') || "0" + 0;
document.getElementById("sunSeconds").innerHTML = localStorage.getItem('sunSecondsKey') || "0" + 0;

document.getElementById("monHours").innerHTML = localStorage.getItem('monHoursKey') || "0" + 0;
document.getElementById("monMinutes").innerHTML = localStorage.getItem('monMinutesKey') || "0" + 0;
document.getElementById("monSeconds").innerHTML = localStorage.getItem('monSecondsKey') || "0" + 0;

document.getElementById("tuesHours").innerHTML = localStorage.getItem('tuesHoursKey') || "0" + 0;
document.getElementById("tuesMinutes").innerHTML = localStorage.getItem('tuesMinutesKey') || "0" + 0;
document.getElementById("tuesSeconds").innerHTML = localStorage.getItem('tuesSecondsKey') || "0" + 0;

document.getElementById("wedHours").innerHTML = localStorage.getItem('wedHoursKey') || "0" + 0;
document.getElementById("wedMinutes").innerHTML = localStorage.getItem('wedMinutesKey') || "0" + 0;
document.getElementById("wedSeconds").innerHTML = localStorage.getItem('wedSecondsKey') || "0" + 0;

document.getElementById("thursHours").innerHTML = localStorage.getItem('thursHoursKey') || "0" + 0;
document.getElementById("thursMinutes").innerHTML = localStorage.getItem('thursMinutesKey') || "0" + 0;
document.getElementById("thursSeconds").innerHTML = localStorage.getItem('thursSecondsKey') || "0" + 0;

document.getElementById("friHours").innerHTML = localStorage.getItem('friHoursKey') || "0" + 0;
document.getElementById("friMinutes").innerHTML = localStorage.getItem('friMinutesKey') || "0" + 0;
document.getElementById("friSeconds").innerHTML = localStorage.getItem('friSecondsKey') || "0" + 0;

document.getElementById("satHours").innerHTML = localStorage.getItem('satHoursKey') || "0" + 0;
document.getElementById("satMinutes").innerHTML = localStorage.getItem('satMinutesKey') || "0" + 0;
document.getElementById("satSeconds").innerHTML = localStorage.getItem('satSecondsKey') || "0" + 0;

//Log time depending on what day of the week it is
switch (new Date().getDay()) {
	case 0: //Sunday
		document.getElementById("sunHours").innerHTML = (hours > 9 ? hours : "0" + hours);
		document.getElementById("sunMinutes").innerHTML = (minutes > 9 ? minutes : "0" + minutes);
		document.getElementById("sunSeconds").innerHTML = (seconds > 9 ? seconds : "0" + seconds);
		localStorage.setItem('sunHoursKey', hours);
		localStorage.setItem('sunMinutesKey', minutes);
		localStorage.setItem('sunSecondsKey', seconds);
		break;
	case 1: //Monday
		document.getElementById("monHours").innerHTML = (hours > 9 ? hours : "0" + hours);
		document.getElementById("monMinutes").innerHTML = (minutes > 9 ? minutes : "0" + minutes);
		document.getElementById("monSeconds").innerHTML = (seconds > 9 ? seconds : "0" + seconds);
		localStorage.setItem('monHoursKey', hours);
		localStorage.setItem('monMinutesKey', minutes);
		localStorage.setItem('monSecondsKey', seconds);
		break;
	case 2: //Tuesday
		document.getElementById("tuesHours").innerHTML = (hours > 9 ? hours : "0" + hours);
		document.getElementById("tuesMinutes").innerHTML = (minutes > 9 ? minutes : "0" + minutes);
		document.getElementById("tuesSeconds").innerHTML = (seconds > 9 ? seconds : "0" + seconds);
		localStorage.setItem('tuesHoursKey', hours);
		localStorage.setItem('tuesMinutesKey', minutes);
		localStorage.setItem('tuesSecondsKey', seconds);
		totalHours += hours;
		totalMinutes += minutes;
		totalSeconds += seconds;
		break;
	case 3: //Wednesday
		document.getElementById("wedHours").innerHTML = (hours > 9 ? hours : "0" + hours);
		document.getElementById("wedMinutes").innerHTML = (minutes > 9 ? minutes : "0" + minutes);
		document.getElementById("wedSeconds").innerHTML = (seconds > 9 ? seconds : "0" + seconds);
		localStorage.setItem('wedHoursKey', hours);
		localStorage.setItem('wedMinutesKey', minutes);
		localStorage.setItem('wedSecondsKey', seconds);
		break;
	case 4: //Thursday
		document.getElementById("thursHours").innerHTML = (hours > 9 ? hours : "0" + hours);
		document.getElementById("thursMinutes").innerHTML = (minutes > 9 ? minutes : "0" + minutes);
		document.getElementById("thursSeconds").innerHTML = (seconds > 9 ? seconds : "0" + seconds);
		localStorage.setItem('thursHoursKey', hours);
		localStorage.setItem('thursMinutesKey', minutes);
		localStorage.setItem('thursSecondsKey', seconds);	
		break;
	case 5: //Friday
		document.getElementById("friHours").innerHTML = (hours > 9 ? hours : "0" + hours);
		document.getElementById("friMinutes").innerHTML = (minutes > 9 ? minutes : "0" + minutes);
		document.getElementById("friSeconds").innerHTML = (seconds > 9 ? seconds : "0" + seconds);
		localStorage.setItem('friHoursKey', hours);
		localStorage.setItem('friMinutesKey', minutes);
		localStorage.setItem('friSecondsKey', seconds);
		break;
	case 6: //Saturday
		document.getElementById("satHours").innerHTML = (hours > 9 ? hours : "0" + hours);
		document.getElementById("satMinutes").innerHTML = (minutes > 9 ? minutes : "0" + minutes);
		document.getElementById("satSeconds").innerHTML = (seconds > 9 ? seconds : "0" + seconds);
		localStorage.setItem('satHoursKey', hours);
		localStorage.setItem('satMinutesKey', minutes);
		localStorage.setItem('satSecondsKey', seconds);
		break;
}

document.getElementById("totalHours").innerHTML = (totalHours > 9 ? totalHours : "0" + totalHours);
document.getElementById("totalMinutes").innerHTML = (totalMinutes > 9 ? totalMinutes : "0" + totalMinutes);
document.getElementById("totalSeconds").innerHTML = (totalSeconds > 9 ? totalSeconds : "0" + totalSeconds);

localStorage.setItem('totalHoursKey', totalHours);
localStorage.setItem('totalMinutesKey', totalMinutes);
localStorage.setItem('totalSecondsKey', totalSeconds);