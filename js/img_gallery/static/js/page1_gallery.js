// Module import --------------------------------- 
import { filter } from "./modules/filter.js";
import { toggleDetails } from "./modules/nav.js";
import { appendBtns, appendSideNavBtns, appendPngs, appendMechInfo } from "./modules/append.js"; 
import { getMolsJson, genMols, getMolJson, genMol, returnMolJson } from "./modules/gen-meta.js";

// DOM selection ---------------------------------
const allPngsDiv = document.querySelector(".all-pngs");
const gridSwitch = document.getElementById("gridSwitch");

// DOM creation ---------------------------------
function callDomManip(gs) {
  const flag = gs.dataset.flag;
  if (flag == "true") {
    const allPngs = document.querySelectorAll("img");
    allPngs.forEach(img => img.remove());
    genMols(appendPngs, appendSideNavBtns, filter);
  } else {
    genMol(appendMechInfo, appendSideNavBtns, gs);
    const btns = document.querySelectorAll(".btn.filter-item");
    const content = document.querySelector(".mol-info");
    for (let i = 0; i < btns.length; i++) {
      if (btns[i].textContent == "Display All" && btns[i].className == "btn filter-item active") {
        content.innerHTML = ``;
      };
    };
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
  const grid = document.querySelector(".mol-info");
  if (!grid) return;
  grid.addEventListener("click", (e) => {
    const tile = e.target.closest('[data-smiles]');
    if (!tile) return;
    const smiles = tile.dataset.smiles
    const name = tile.dataset.name 
    toggleDetails(name);
  });
});

// appendSideNavBtns(allCats); // append side nav buttons
