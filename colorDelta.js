 var button = document.querySelector("button");
 var division = document.querySelector("div");
 var isGreen = false;
 

 
 button.addEventListener("click", function(){
 	if(isGreen){
 		division.style.background = "salmon";
 		// isGreen = false;
 	} else {
 		division.style.background = "green";
 		// isGreen = true;
 	}
 	isGreen = !isGreen; //refactor other booleans with this
 });


 	



// function toggle(button)
// {
//   if(document.getElementById("1").value=="OFF"){
//    document.getElementById("1").value="ON";}

//   else if(document.getElementById("1").value=="ON"){
//    document.getElementById("1").value="OFF";}
// }