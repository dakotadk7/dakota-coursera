

//***IIFE containing file to allow us to expose our funtion to the global object

(function (window) {

	var byeSpeaker = {};

	var speakWord = "Good Bye";


//***Function for saying goodbye to somebody with input: 'name'
	byeSpeaker.speak = function(name) {
	  console.log(speakWord + " " + name);
	}

	window.byeSpeaker = byeSpeaker;

})(window);

