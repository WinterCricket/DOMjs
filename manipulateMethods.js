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