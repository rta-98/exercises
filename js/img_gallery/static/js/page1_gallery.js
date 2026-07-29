// Module import --------------------------------- 
import { filter } from "./modules/filter.js";
import { toggleDetails } from "./modules/nav.js";
import { appendBtns, appendSideNavBtns, appendPngs } from "./modules/append.js"; 
import { getMolJson, domManip, returnMolJson } from "./modules/gen-meta.js";

// DOM selection ---------------------------------
const allPngsDiv = document.querySelector(".all-pngs");

// DOM creation ---------------------------------
domManip(appendPngs, appendSideNavBtns, filter);

// Binding click event to Mol imgs to trigger programmatic nav
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
