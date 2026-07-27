// Module import --------------------------------- 
import { filter } from "./modules/filter.js";
import { toggleDetails } from "./modules/nav.js";
import { appendBtns, appendSideNavBtns, appendPngs } from "./modules/append.js"; 
import { getMolJson, domManip, returnMolJson } from "./modules/gen-meta.js";

// DOM selection ---------------------------------
const allPngsDiv = document.querySelector(".all-pngs");

// DOM creation ---------------------------------

appendSideNavBtns(motifsArr); // append side nav buttons
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

// Appending Side Navigation Categories ---------------------------------
const df = await getMolJson();
const allCats = [];
for (let i = 0; i < df.length; i++) {
  const row = df[i];
  const cats = row[1];
  if (!allCats.includes(cats)) {
    allCats.push(cats);
  }
}

const motifsArr = allCats;

//[
//"PFECA",
//"PFASA", 
//"FASA",
//"PFCA",
//"FTS",
//"FTCA",
//"MeFASAA",
//"FTOH",
//"PFOH",
//"PFSA",
//"PFAL",
//"Unk"];
