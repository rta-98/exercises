async function getMolJson() {
  const url = "/api/mol-img-meta";
  try {
    const response1 = await fetch(url);
    const data1 =  await response1.json();
    const extractArr = [];
    for (let i = 0; i < data1.length; i++) {
      let row = data1[i];
      let arr = [row.img, row.Motif, row.SMILES];
      extractArr.push(arr); 
    }
  return extractArr; // returned for appendPngs()
  } catch (error) {
      console.error('Error fetching /api/mol-img-meta:', error);
  };
};

async function domManip(appendPngs, filter) {
  const arrFromJson = await getMolJson();
  appendPngs(arrFromJson, filter);
};

export { getMolJson, domManip };
