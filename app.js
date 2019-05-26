// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables


-------------------------------------------------- */



var speakButton = document.querySelector('#button');
//speakButton.addEventListener('click', selectFinal);

var button1 = document.querySelector('#button1');
button1.addEventListener('click', select1);

var button2 = document.querySelector('#button2');
button2.addEventListener('click', select2);

var button3 = document.querySelector('#button3');
button3.addEventListener('click', select3);

var button4 = document.querySelector('#button4');
button4.addEventListener('click', select4);

var button5 = document.querySelector('#button5');
button5.addEventListener('click', select5);

var reset = document.querySelector('#reset');
reset.addEventListener('click', resetting);

var sayIt = document.querySelector('#button6');

var array1 = new Array("The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat");
var array2 = new Array("sat on", "ate", "danced with", "saw", "doesn't like", "kissed");
var array3 = new Array("a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat");
var array4 = new Array("goat", "monkey", "fish", "cow", "frog", "bug", "worm");
var array5 = new Array("on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes");

// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak


var textToSpeak1 = array1[Math.floor(Math.random() * array1.length)];
function select1(){

	textToSpeak1 = array1[Math.floor(Math.random() * array1.length)];
	speakNow(textToSpeak1);
console.log(textToSpeak1);
}
	
var textToSpeak2 = array2[Math.floor(Math.random() * array2.length)];
function select2(){
	textToSpeak2 = array2[Math.floor(Math.random() * array1.length)];
	speakNow(textToSpeak2);
console.log(textToSpeak2);
}

var textToSpeak3 = array3[Math.floor(Math.random() * array3.length)];
function select3(){
	textToSpeak3 = array3[Math.floor(Math.random() * array3.length)];
	speakNow(textToSpeak3);
console.log(textToSpeak3);
}


var textToSpeak4 = array4[Math.floor(Math.random() * array4.length)];
function select4(){
	textToSpeak4 = array4[Math.floor(Math.random() * array4.length)];
	speakNow(textToSpeak4);
console.log(textToSpeak4);
}

var textToSpeak5 = array5[Math.floor(Math.random() * array5.length)];
function select5(){
	textToSpeak5 = array5[Math.floor(Math.random() * array5.length)];
	speakNow(textToSpeak5);
console.log(textToSpeak5);
}




textToSpeakFinal = textToSpeak1+" "+textToSpeak2+" "+textToSpeak3+" "+textToSpeak4+" "+textToSpeak5;

function resetting(){
	textToSpeakFinal = array1[Math.floor(Math.random() * array1.length)]+" "+ array2[Math.floor(Math.random() * array2.length)]+" "+ array3[Math.floor(Math.random() * array3.length)]+" "+ array4[Math.floor(Math.random() * array4.length)]+" "+ array5[Math.floor(Math.random() * array5.length)];

	console.log(textToSpeakFinal);
	
}





/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButton.onclick = function() {
	
	var textToSpeakFinal = array1[Math.floor(Math.random() * array1.length)]+" "+ array2[Math.floor(Math.random() * array2.length)]+" "+ array3[Math.floor(Math.random() * array3.length)]+" "+ array4[Math.floor(Math.random() * array4.length)]+" "+ array5[Math.floor(Math.random() * array5.length)];

	speakNow(textToSpeakFinal);
	console.log(textToSpeakFinal);
}

sayIt.onclick = function() {
	

	speakNow(textToSpeakFinal);
	console.log(textToSpeakFinal);
}
