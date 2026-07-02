let imgPaths;
const allPngsDiv = document.querySelector(".all-pngs");

async function getMolJson() {
  const url = "/api/mol-img-meta";
  try {
    const response1 = await fetch(url);
    const data1 =  await response1.json();
    const imgPaths = [];
    const imgCol = "img"
    for (let i = 0; i < data1.length; i++) {
      let urlRow = data1[i];
      imgPaths.push(urlRow.img);
    }
  return imgPaths
  } catch (error) {
      console.error('Error fetching /api/mol-img-meta:', error);
  }
};

function appendPngs(imgPathsArray) {
  let len = imgPathsArray.length;
  for (let i = 0; i < len; i++) {
    const newImg = document.createElement("img");
    newImg.src = "png/" + imgPathsArray[i];
    allPngsDiv.appendChild(newImg)
}};
    
async function acquirePaths() {
  imgPaths = await getMolJson();
  appendPngs(imgPaths);
};

acquirePaths();
