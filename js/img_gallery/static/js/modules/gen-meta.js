// Generating all mol images ---------------------------------
async function getMolsJson() {
  const url = "/api/mol-img-meta";
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
      console.error('Error fetching /api/mol-img-meta:', error);
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

// Generating single mol image for subclass ---------------------------------
async function getMolJson() {
  const url = "/api/mol-img-meta";
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
      console.error('Error fetching /api/mol-img-meta:', error);
  };
};

// appendPng, appendSideNavBtns, 
async function genMol(appendPngs, appendSideNavBtns, filter) {
  const df = await getMolJson();
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
