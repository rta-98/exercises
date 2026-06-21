// To manipulate a DOM element, one must first select it and store a reference
const link = document.querySelector("a");

// Changing the context of the link inside of it:
link.textContent = "Google It!";

// Changing the URL the link is pointing to:
link.href = "https://www.google.com/"

// Messing about: deriving an array of all the elements 
// on the page of a given type:

//const array_of_divs = document.getElementsByTagName("div");

// start by grabbing the section element 
const sect = document.querySelector("section");

// create a new paragraph using the Document.createElement() 
const para = document.createElement("p");
para.textContent = "New Text!";
sect.appendChild(para);

// adding a text node to the paragraph the link sits inside:

const text = document.createTextNode(
  " -Seratonin is dope!" 
);

const linkPara = document.querySelector("p");

para.style.color = "green"
para.style.fontSize = "30px"

document.body.style.backgroundColor = "black"

