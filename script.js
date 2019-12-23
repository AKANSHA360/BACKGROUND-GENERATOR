var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradient");

//setting one common function for both

function setgradient(){
	let change=confirm("Are you sure you wanna change the color?");
	if(change){
    body.style.background="linear-gradient(to right," + color1.value + "," + color2.value + ")";
    }
    else
    {
    	alert("okay!!!!your wish");
    }

}
//adding mouseclick events

color1.addEventListener("input",setgradient)

//adding mouseclick events

color2.addEventListener("input",setgradient)