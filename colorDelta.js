var button = document.querySelector("button");
var division = document.querySelector("div");

division.style.background = "green";




// button.addEventListener("click", function(){
// 	color = division.style.background;
// 	color = "salmon";
// });


if(division.style.background){
	button.addEventListener("click", function(){
	
	division.style.background = "salmon";
});
} 
if(division.style.background){
	button.addEventListener("click", function(){
	
	division.style.background = "green";
});
}