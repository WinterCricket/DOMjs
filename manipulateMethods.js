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