// Module import --------------------------------- 
import { filter } from "./modules/filter.js";
import { toggleDetails } from "./modules/nav.js";
import { appendBtns, appendPngs } from "./modules/append.js"; 
import { getMolJson, domManip } from "./modules/gen-meta.js";

// DOM selection ---------------------------------
const guiDisplay = document.querySelector("gui-display");
const mainPng = document.querySelector("main-png");
const chemDetails = document.querySelector("chem-details");
