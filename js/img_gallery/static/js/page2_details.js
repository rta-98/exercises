// Module import --------------------------------- 
import { filter } from "./modules/filter.js";
import { toggleDetails } from "./modules/nav.js";
import { appendBtns, appendSideNavBtns, appendPngs, appendMainPng, appendTitle, appendTable } from "./modules/append.js"; 
import { getMolJson, domManip, returnMolJson } from "./modules/gen-meta.js";
import Basic3DViewer from "./modules/three-gui.js";

// DOM selection ---------------------------------
const guiDisplay = document.querySelector(".gui-display");
const chemDetails = document.querySelector(".chem-details");

// Grabbing current URL ---------------------------------
const url = window.location.href;
const path = new URL(url).pathname; // /details/{name}
const pathParts = path.split('/'); // ['', 'details', '23_ftca']
const molName = pathParts[pathParts.length - 1]; // 23_ftca 
const response = await returnMolJson(molName); // must add await
const molData = response.data[molName] // molecular data in JSON 

// Extracting meta data ---------------------------------
const molFormula = molData.mol_formula;
const name = molData.iupac;

appendMainPng(molData);
appendTitle(name);
appendTable(molData);

// Initializing 3D Viewer ---------------------------------
function initViewer() {
  const container = document.getElementById('model3d');
  const smiles = molData.smiles;
  const pdb = "/pdb/" + molData.pdb;
  if (!container) {
    return
  }
  Basic3DViewer.initializeViewer({
    containerId: "model3d",
    containerOuterId: "model3d_container"
  });
  Basic3DViewer.loadPDBFromUrl(pdb);
    const viewer = document.getElementById('model3d_container') || document.getElementById('model3d');
//    if (viewer) viewer.scrollIntoView({ behavior: 'smooth' });
};

initViewer();
document.addEventListener("DOMContentLoader", initViewer);
