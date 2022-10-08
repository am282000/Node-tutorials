/**********USE Dom.html file for practical**************/

console.log(document.getElementById("btn"));
console.log(document.getElementsByClassName("child--one"));
console.log(document.getElementsByTagName("h1"));
console.log(document.getElementsByName("gender"));

document.getElementById("btn").innerHTML = "Hellooo";

// In case of class,name,tag select only its first occurance
document.querySelector(".para").innerHTML = "Jaaoooo yha se";

// returns the value
console.log(document.querySelectorAll(".para"));
