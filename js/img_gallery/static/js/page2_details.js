// Module import --------------------------------- 
import { filter } from "./modules/filter.js";
import { toggleDetails } from "./modules/nav.js";
import { appendBtns, appendPngs } from "./modules/append.js"; 
import { getMolJson, domManip, returnMolJson } from "./modules/gen-meta.js";

// DOM selection ---------------------------------
const guiDisplay = document.querySelector("gui-display");
const mainPng = document.querySelector("main-png");
const chemDetails = document.querySelector("chem-details");

// Grabbing current URL 
const url = window.location.href;
const path = new URL(url).pathname; // /details/{name}
const pathParts = path.split('/'); // ['', 'details', '23_ftca']
const molName = pathParts[pathParts.length - 1]; // 23_ftca 
const response = returnMolJson(molName);
console.log(response);
