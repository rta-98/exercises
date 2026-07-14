// Module import --------------------------------- 
import { filter } from "./modules/filter.js";
import { toggleDetails } from "./modules/nav.js";
import { appendBtns, appendPngs } from "./modules/append.js"; 
import { getMolJson, domManip, returnMolJson } from "./modules/gen-meta.js";

// DOM selection ---------------------------------
const allPngsDiv = document.querySelector(".all-pngs");

// DOM creation ---------------------------------
const motifsArr = [
"PFECA",
"PFASA", 
"FASA",
"PFCA",
"FTS",
"FTCA",
"MeFASAA",
"FTOH",
"PFOH",
"PFSA",
"PFAL",
"Unk"];

appendBtns(motifsArr); // append filter buttons 
domManip(appendPngs, filter); // append mol images

// binding click event to Mol imgs to trigger programmatic nav
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

