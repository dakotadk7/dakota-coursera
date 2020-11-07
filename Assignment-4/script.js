
//***IIFE containing file to activate on website startup.

(function () {

  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

//***Looping through names array to take the first character from each string

  for (myvar in names) {
    var x = names[myvar].charAt(0);


//***Testing if 

    if (x.toLowerCase() === "j") {
      byeSpeaker.speak(names[myvar]);
    } else {
      helloSpeaker.speak(names[myvar]);
    }
  }

})();