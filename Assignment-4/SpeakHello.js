

//***IIFE containing file to allow us to expose our funtion to the global object

(function (window) {

	var helloSpeaker = {};

	var speakWord = "Hello";


//***Function for saying hello to somebody with input: 'name'
	helloSpeaker.speak = function(name) {
	  console.log(speakWord + " " + name);
	}

	window.helloSpeaker = helloSpeaker;

})(window);
