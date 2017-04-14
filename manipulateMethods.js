// manipulating elements of DOM
var tag = document.getElementById("highlight");
tag.classList.add("design_class");

//select the <p> tag
var tag = document.querySelector("p");

//retrieve the textContent: extracts text, not the <strong> tag
tag.textContent //"This is a strong paragraph"

//alter the textContent
tag.textContent = "Ships swim and fly through the waves, chasing porpoise into the west.";
//assign var p
var p = document.getElementByTagName("p");
//extract text in p element
p.textContent 
// replace text in p with small poem
p.textContent = "Ships swim and fly through the waves, chasing porpoise into the west.";

//innerHTML extracts not just text, but all html within tags

var tag = document.querySelector("p");
tag.innerHTML//"This is a <strong>strong</strong> paragraph."


//chain
document.querySelector("h1").textContent = "Silly Rivers in Fall, Falls, Falling white water";

//Salmon, this silly river under fall, falls, falling white water and foam and the deep chug from a jug of rock.
//More salmon, into their future now, their ships swim and fly through the waves,
//chasing porpoise into the west

//manipulating attributes
var link = document.querySelector("a");

link.getAttribute("href");

link.setAttribute("href", "https://www.youtube.com/watch?v=Izfv4JmK-ZQ");

var img = document.querySelector("img");
img.setAttribute("src", "https://s-media-cache-ak0.pinimg.com/originals/a4/ed/61/a4ed61a254529726bd748198a09faa87.jpg");


//links variable
var links = document.getElementByTagName("a");

for(var i = 0; i < links.length; i++){
	console.log(links[i].textContent);
}

var links = document.getElementByTagName("a");

for(var i = 0; i < links.length; i++){
	links[i].style.background = "orange";
}

for(var i = 0; i < links.length; i++){
	links[i].style.background = "orange";
	links[i].style.color = "purple";
	links[i].style.border = "2px solid blue";
}

for(var i=0; i< links.length; i++){
	console.log(links[i].getAttribute("href"));
}

for(var i=0; i<links.length; i++){
	links[i].setAttribute("href", "https://en.wikipedia.org/wiki/Warren_Wilson_College_MFA_Program_for_Writers");
}

//DOM events
var h1 = document.querySelector("h1");
h1.addEventListener("click", function(){
	alert("What the hell are you doing, you fool?");
});

//or
h1.addEventListener("click", function(){
	h1.style.background = "orange";
});

//unorder list
document.querySelector("ul").addEventListener("click", function(){
	console.log("You have clicked an unordered list!");
} );
//list items changed each
var lis = document.querySelectorAll("li");
for(var i=0; i<lis.length; i++){
	lis[i].addEventListener("click", function(){
	this.style.color = "orange";
});
}

var button = document.querySelector("button");
var paragraph = document.querySelector("p");
//set up click listener
button.addEventListener("click", function(){
	paragraph.textContent = "So, what's the damned problem?";
});