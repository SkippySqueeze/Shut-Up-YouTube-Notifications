document.addEventListener("yt-navigate-finish", process);
document.addEventListener("DOMContentLoaded", process);

function process() {
	setTimeout(function (){
		var newtitle = document.title.replace(/^\(\d+\) /, '');
		document.title = newtitle;
	}, 1000);
}