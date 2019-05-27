//Declaring variables, which will be acting as buttons for the game

var nounButton = document.querySelector('#nouns');
nounButton.addEventListener('click', select1);

var button2 = document.querySelector('#verbs');
button2.addEventListener('click', select2);

var button3 = document.querySelector('#adjective');
button3.addEventListener('click', select3);

var button4 = document.querySelector('#anotherNoun');
button4.addEventListener('click', select4);

var button5 = document.querySelector('#place');
button5.addEventListener('click', select5);

var resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', resetting);

var speakButton = document.querySelector('#surprizeButton');





//These are the arrays from which each button selects a word randomly

var array1 = new Array("The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat");
var array2 = new Array("sat on", "ate", "danced with", "saw", "doesn't like", "kissed");
var array3 = new Array("a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat");
var array4 = new Array("goat", "monkey", "fish", "cow", "frog", "bug", "worm");
var array5 = new Array("on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes");
var synth = window.speechSynthesis;

// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak


//This will pre load the values of the Surprize button for once

var textToSpeak1 = array1[Math.floor(Math.random() * array1.length)];
var textToSpeak2 = array2[Math.floor(Math.random() * array2.length)];
var textToSpeak3 = array3[Math.floor(Math.random() * array3.length)];
var textToSpeak4 = array4[Math.floor(Math.random() * array4.length)];
var textToSpeak5 = array5[Math.floor(Math.random() * array5.length)];

//These functions will respond on clicking every button of game accordingly

//This is for the Nouns
function select1(){

	textToSpeak1 = array1[Math.floor(Math.random() * array1.length)];
	speakNow(textToSpeak1);
	console.log(textToSpeak1);
	
}	
//This is for Verbs
function select2(){
	textToSpeak2 = array2[Math.floor(Math.random() * array2.length)];
	speakNow(textToSpeak2);
console.log(textToSpeak2);
}
//This is for adjective 
function select3(){
	textToSpeak3 = array3[Math.floor(Math.random() * array3.length)];
	speakNow(textToSpeak3);
console.log(textToSpeak3);
}
//This is for another noun
function select4(){
	textToSpeak4 = array4[Math.floor(Math.random() * array4.length)];
	speakNow(textToSpeak4);
console.log(textToSpeak4);
}

// This is for number of places or settings

function select5(){
	textToSpeak5 = array5[Math.floor(Math.random() * array5.length)];
	speakNow(textToSpeak5);
console.log(textToSpeak5);
}
//This will define the textToSpeak for the first time
textToSpeakFinal = textToSpeak1+" "+textToSpeak2+" "+textToSpeak3+" "+textToSpeak4+" "+textToSpeak5;

//This is responsible for resetting the String
function resetting(){
	//textToSpeakFinal = array1[Math.floor(Math.random() * array1.length)]+" "+ array2[Math.floor(Math.random() * array2.length)]+" "+ array3[Math.floor(Math.random() * array3.length)]+" "+ array4[Math.floor(Math.random() * array4.length)]+" "+ array5[Math.floor(Math.random() * array5.length)];
	textToSpeakFinal = "";
	console.log(textToSpeakFinal);
	
}

function speakNow(string) {
	
	var utterThis = new SpeechSynthesisUtterance(string);

	synth.speak(utterThis);
}

//This is responsible for Surprize Music
speakButton.onclick = function() {
	
	var textToSpeakFinal = array1[Math.floor(Math.random() * array1.length)]+" "+ array2[Math.floor(Math.random() * array2.length)]+" "+ array3[Math.floor(Math.random() * array3.length)]+" "+ array4[Math.floor(Math.random() * array4.length)]+" "+ array5[Math.floor(Math.random() * array5.length)];

	speakNow(textToSpeakFinal);
	console.log(textToSpeakFinal);
}

