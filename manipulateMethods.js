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

//Salmon, this silly river under fall, falls, falling white water and foam and the deep chug from jug of rock.
//More salmon, into their future now, their ships swim and fly through the waves,
//chasing porpoise into the west