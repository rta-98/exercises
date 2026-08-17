// ---------------------------------------------------------------------------------------------------
// Generating all mol images ------------------------------------------------------------------
async function getMolsJson() {
  const url = "/api/mols-img-meta";
  try {
    const response = await fetch(url);
    const data =  await response.json();
    const extractArr = [];

    for (let i = 0; i < data.length; i++) {
      let row = data[i];
      let arr = [row.img, row.Motif, row.SMILES, row.Molecule];
      extractArr.push(arr); 
    }

  return extractArr; // returned for appendPngs()

  } catch (error) {
      console.error('Error fetching /api/mols-img-meta:', error);
  };
};

async function genMols(appendPngs, appendSideNavBtns, filter) {
  const df = await getMolsJson();
  const allCats = [];
  for (let i = 0; i < df.length; i++) {
    const row = df[i];
    const cats = row[1];
    if (!allCats.includes(cats)) {
      allCats.push(cats);
    };
  };
  appendSideNavBtns(allCats);
  appendPngs(df, filter); // appendPngs called 
};

//---------------------------------------------------------------------------------------------------
// Generating single mol image for subclass ---------------------------------
async function getMolJson() {
  const urlMol = "/api_mols/mol-img-meta";
  try {
    const responseMol = await fetch(urlMol);
    const dataMol =  await responseMol.json();

  return dataMol; // returned for appendPngs()

  } catch (error) {
      console.error('Error fetching /api_mols/mol-img-meta:', error);
  };
};

// appendPng, appendSideNavBtns ---------------------------------
async function genMol(appendMechInfo, appendSideNavBtns, gs) {

  const mech_df = await getMolJson();
  const acrs = Object.keys(mech_df);
  const acrs_lower = [];
  for (let i = 0; i < acrs.length; i++) {
    const acr_tmp = acrs[i];
    const acr_lower = acr_tmp.toLowerCase();
    acrs_lower.push(acr_lower);
  }
  const content = document.querySelector(".mol-info");
  content.innerHTML = ``;
  appendSideNavBtns(acrs, gs);
  appendMechInfo(acrs, acrs_lower, mech_df, gs);
};

//---------------------------------------------------------------------------------------------------
async function returnMolJson(name) {
  const url = "/api/details"
  const response = await fetch(url, {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify({ molname: name })
  });
  const result = await response.json();
  return result;
};

export { getMolsJson, genMols, getMolJson, genMol, returnMolJson };
