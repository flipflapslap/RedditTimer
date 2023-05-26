//Place timer on Reddit
var timerPage = chrome.extension.getURL('/timer.html');

var span = document.createElement('span');
span.setAttribute('class', 'separator');
span.textContent = '|';

var timer = document.createElement('span');
timer.setAttribute('class', 'user');
timer.innerHTML = '<object type="text/html" width="47" height="10" data="chrome-extension://diaajjlnabbknbchnjhihfhlgmfpkcmd/timer.html"></object>';

/*//Get the header-bottom-right element and the associated CSS styles
var element = document.getElementById('header-bottom-right');
var compStyles = window.getComputedStyle(element);
//Assign CSS to timer and separator
timer.style.color = compStyles.getPropertyValue('color');
timer.style.fontSize = compStyles.getPropertyValue('font-size');
timer.style.fontFamily = compStyles.getPropertyValue('font-family');
span.style.color = compStyles.getPropertyValue('color');
span.style.fontSize = compStyles.getPropertyValue('font-size');
span.style.fontFamily = compStyles.getPropertyValue('font-family');*/

//Place timer in header-bottom-right
document.getElementById("header-bottom-right").appendChild(span);
document.getElementById("header-bottom-right").appendChild(timer);

//Run console command to open all links in new tab
var myJavaScript = 'var links = document.links;for (var i = 0; i < links.length; i++) {if(links[i].className != "expand"){links[i].target = "_blank";}}'
var scriptTag = document.createElement("script");
scriptTag.innerHTML = myJavaScript;
document.head.appendChild(scriptTag);

//Rerun console command when user Scrolls. Sloppy af but im sick of working on this
var moreJavaScript = 'window.addEventListener("scroll", function(){var links = document.links;for (var i = 0; i < links.length; i++) {if(links[i].className != "expand"){links[i].target = "_blank";}}})'
var anotherScriptTag = document.createElement("script");
anotherScriptTag.innerHTML =  moreJavaScript;
document.head.appendChild(anotherScriptTag);

