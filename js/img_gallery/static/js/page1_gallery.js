// Module import --------------------------------- 
import { filter } from "./modules/filter.js";
import { toggleDetails } from "./modules/nav.js";
import { appendBtns, appendSideNavBtns, appendPngs } from "./modules/append.js"; 
import { getMolsJson, genMols, getMolJson, genMol, returnMolJson } from "./modules/gen-meta.js";

// DOM selection ---------------------------------
const allPngsDiv = document.querySelector(".all-pngs");
const gridSwitch = document.getElementById("gridSwitch");

// DOM creation ---------------------------------
function callDomManip(gs) {
  if (gs.dataset.flag == "true") {
    console.log("true");
    genMols(appendPngs, appendSideNavBtns, filter);
  } else {
    window.location.reload(); 
  }
};

function toggleGrid(gs) {
  gs.addEventListener("click", (event) => {
    if (event.target.checked) {
      gs.dataset.flag = "true";
    } else {
      gs.dataset.flag = "false";
    };
    callDomManip(gs);
  });
};

toggleGrid(gridSwitch);

// Binding click event to Mol imgs to trigger programmatic nav from mol images
document.addEventListener("DOMContentLoaded", () => { 
  const grid = allPngsDiv;
  if (!grid) return;
  grid.addEventListener("click", (e) => {
    const tile = e.target.closest('[data-smiles]');
    const smiles = tile.dataset.smiles
    const name = tile.dataset.name 
    if (!tile) return;
    toggleDetails(name);
  });
});

// appendSideNavBtns(allCats); // append side nav buttons
