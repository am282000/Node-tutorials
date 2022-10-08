// Document object Model vs Browser Object Model

/**********USE Dom.html file for practical**************/
/**********USE History.html file for practical**************/

// try these in consoles

// returns the root element
document.documentElement;

// returns the head element
document.head;

// returns the body element
document.body;

/************Child methods************/
// returns the childNodes element => here text =tab,enter,whitespace
document.body.childNodes;

//original elements defined by you
document.body.children;

// returns true/false
document.body.hasChildNodes();

// includes extra text like space ,tab enter also
document.body.firstChild;

// includes only your written childs.
document.body.firstElementChild;

//next level
let firstChild = document.body.firstElementChild.firstElementChild;

// nextlevel
firstChild.style.color = "red";

/************Parent methods************/
document.body.parentNode;
document.body.parentElement;

/************Sibliing methods************/

// Will also get dummy text outputs
document.body.nextSibling;
document.body.previousSibling;
// For exact outputs
document.body.previousElementSibling;
document.body.nextElementSibling;
document.head.nextElementSibling;
