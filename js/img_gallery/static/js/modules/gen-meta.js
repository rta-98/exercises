async function getMolJson() {
  const url = "/api/mol-img-meta";
  try {
    const response1 = await fetch(url);
    const data1 =  await response1.json();
    const extractArr = [];
    for (let i = 0; i < data1.length; i++) {
      let row = data1[i];
      let arr = [row.img, row.Motif, row.SMILES, row.Molecule];
      extractArr.push(arr); 
    }
  return extractArr; // returned for appendPngs()
  } catch (error) {
      console.error('Error fetching /api/mol-img-meta:', error);
  };
};

async function domManip(appendPngs, filter) {
  const arrFromJson = await getMolJson();
  appendPngs(arrFromJson, filter); // appendPngs called 
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

export { getMolJson, domManip, returnMolJson };


