import Basic3DViewer from "./viewer3d.js"

function appendBtns(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    const motif = arr[i]; 
    const newBtn = document.createElement("button");
    const btnGallery = document.querySelector(".gallery-filter"); 
    newBtn.textContent = motif;
    newBtn.className = "btn filter-item";
    newBtn.dataset.motif = motif.toLowerCase(); 
    btnGallery.appendChild(newBtn);
  };
};

function appendSideNavBtns(arr, gs) {
  const newActiveBtn = document.createElement("button");
  const sideNav = document.querySelector(".sidenav"); 
  const oldBtns = sideNav.querySelectorAll(".filter-item");
  oldBtns.forEach(btn => btn.remove());
  newActiveBtn.className = "btn filter-item active";
  newActiveBtn.textContent = "PFCA";
  newActiveBtn.dataset.motif = "pfca";
  for (let i = 0; i < arr.length; i++) {
    const motif = arr[i]; 
    if (motif == "Unk") {
      continue;  
    } else {
      const newBtn = document.createElement("button");
      newBtn.textContent = motif;
      newBtn.className = "btn filter-item";
      newBtn.dataset.motif = motif.toLowerCase(); 
      sideNav.appendChild(newBtn);
    };
  };
};

function appendPngs(arr, filter) {
  let len = arr.length;
  const imgCol = [];
  const content = document.querySelector(".mol-info");
  content.innerHTML = `
      <div class="img-gallery">
        <div class="all-pngs"></div>
      </div>
  `;
  for (let i = 0; i < len; i++) {
    const imgSrc = arr[i][0];
    const motif = arr[i][1];
    const smiles = arr[i][2];
    const name = arr[i][3];

    const newImg = document.createElement("svg");
    const allPngsDiv = document.querySelector(".all-pngs");

    newImg.src = "/png/" + imgSrc; // df1["img"]
    newImg.dataset.motif = motif.toLowerCase(); // df1["Motif"] 
    newImg.dataset.smiles = smiles
    newImg.dataset.name = name 
    newImg.classList.add("card");  
    allPngsDiv.appendChild(newImg);
  };
    const btns = document.querySelectorAll(".btn.filter-item");
    for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", filter); 
  };
};

// produces HTML for mechanism about page ---------------------------------
function appendMechInfo(acrs, acrs_lower, mech_df, gs) {
  const flag = gs.dataset.flag;
  const content = document.querySelector(".mol-info");
  const btns = document.querySelectorAll(".btn.filter-item");
  content.innerHTML = `
    <div class="mech-title">
      <h3 id="mech-header" class="subclass-header"></h3> 
      <hr class="subclass-line"> 
    </div>

    <div class="gui-display">
      <h5 id="gui-header" class="subclass-header"></h5> 
      <hr class="subclass-line"> 
      <div id="model3d_container" class="viewer-hidden">
        <div id="model3d"></div>
      </div>
    </div>

    <div class="about">
      <h5 id="about-header" class="subclass-header"></h5> 
      <hr class="subclass-line"> 
      <div id="chem-draw"></div>
    </div> 
  `;

  // DOM Selection ---------------------------------
  const mechTitle = document.getElementById("mech-header");
  const guiHeader = document.getElementById("gui-header");
  const aboutHeader = document.getElementById("about-header");
  const chemDrawDiv = document.getElementById("chem-draw");

  // DOM Creation ---------------------------------
  const newImg = document.createElement("img");
  
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", (event) => { 
      for (i = 0; i < btns.length; i++) {
        btns[i].classList.remove("active"); 
      };
      const acr = event.target.dataset.motif;
      if (!acr) return;
      const btnClass = event.target.classList;
      btnClass.add("active");
      // remember, acr is lowered 
      for (let i = 0; i < acrs_lower.length; i++) { 
        if (acrs_lower[i] === "display all") {
          content.innerHTML = "";
        } else if (acrs_lower[i] === acr) {
          //console.log(mech_df[acrs[i]]);
          const mech_obj = mech_df[acrs[i]]
          const name = mech_obj.subclass_name;
          const repr = mech_obj.repr_mol;
          //console.log(name);
          const pdb = "/pdb/pfas_class_case_pdbs/" + mech_obj.pdbs;
          // initializing GUI
          Basic3DViewer.initializeViewer({
            containerId: "model3d",
            containerOuterId: "model3d_container"
          });
          Basic3DViewer.loadPDBFromUrl(pdb);
          const viewer = document.getElementById('model3d_container') || document.getElementById('model3d');
          const title = mech_obj.subclass_name + " (" + acrs[i] + ")";
          const reprMol = mech_obj.repr_mol;
          const imgPath = mech_obj.svgs;
          console.log(imgPath);
          // appending element
          mechTitle.textContent = title;
          guiHeader.textContent = "Representative Case: " + repr;
          newImg.src = "/png/pfas/" + imgPath;
          chemDrawDiv.appendChild(newImg);
        };
      };
    }); 
  }; // end btns for loop
};

// Appending main image ---------------------------------
function appendMainPng(molData) {
  const mainPngDiv = document.querySelector(".main-png");
  const mainPng = document.createElement("img");
  const motif = molData.Motif, smiles = molData.SMILES, name = molData.Molecule;
  mainPng.src = "/png/" + molData.img;
  mainPng.dataset.motif = motif.toLowerCase(); 
  mainPng.dataset.smiles = smiles;
  mainPng.dataset.name = name;
  mainPng.classList.add("card");  
  mainPngDiv.appendChild(mainPng);
}; // appendMainPng(molData);

// Appending Title ---------------------------------
function appendTitle(molName) {
  const header = document.querySelector(".mol-title");
  header.textContent = molName;
  //header.textContent = molName;
}

// Appending Data Table ---------------------------------
function appendTable(molData) {
  const tbody = document.querySelector('tbody');
  const keys = Object.keys(molData);
  for (let i = 0; i < keys.length; i++) {
    const trow = document.createElement('tr');
    const thead = document.createElement('th');
    const tdcell = document.createElement('td');
    thead.scope = "row";
    thead.textContent = keys[i];
    tdcell.textContent = molData[keys[i]];
    trow.appendChild(thead);
    trow.appendChild(tdcell);
    tbody.appendChild(trow);
  };
};// jsonToTable(molData);

export { appendBtns, appendSideNavBtns, appendPngs, appendMechInfo, appendMainPng, appendTitle, appendTable };
