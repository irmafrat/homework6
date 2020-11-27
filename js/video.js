var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});



document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() { 
	console.log("Slow Down");
	video.playbackRate = 0.5;
});

document.querySelector("#faster").addEventListener("click", function() { 
	console.log("Speed Up");
	video.playbackRate = 2.0;
});


