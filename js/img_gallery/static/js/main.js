import { filter } from "./modules/filter.js";
const btnGallery = document.querySelector(".gallery-filter"); 
const allPngsDiv = document.querySelector(".all-pngs");
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

function appendBtns(motifsArr) {
  let len = motifsArr.length;
  for (let i = 0; i < len; i++) {
    const motif = motifsArr[i]; 
    const newBtn = document.createElement("button");
    newBtn.textContent = motif;
    newBtn.className = "btn filter-item";
    newBtn.dataset.motif = motif.toLowerCase(); 
    btnGallery.appendChild(newBtn);
  }
}
appendBtns(motifsArr);

async function getMolJson() {
  const url = "/api/mol-img-meta";
  try {
    const response1 = await fetch(url);
    const data1 =  await response1.json();
    const extractArr = [];
    for (let i = 0; i < data1.length; i++) {
      let row = data1[i];
      let pair = [row.img, row.Motif];
      extractArr.push(pair); 
    }
  return extractArr;
  } catch (error) {
      console.error('Error fetching /api/mol-img-meta:', error);
  }
};

function appendPngs(arr1) {
  let len = arr1.length;
  const imgCol = [];
  for (let i = 0; i < len; i++) {
    const imgSrc = arr1[i][0];
    const motif = arr1[i][1];
    const newImg = document.createElement("img");
    newImg.src = "png/" + imgSrc; // df1["img"]
    newImg.dataset.motif = motif.toLowerCase(); // df1["Motif"] 
    newImg.classList.add("card");  
    allPngsDiv.appendChild(newImg);
  };
    const cards = document.querySelectorAll(".card") // imgs 
    for (let i = 0; i < cards.length; i++) {
  };
    const btns = document.querySelectorAll(".btn.filter-item");
    for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", filter); 

  };

};
    
async function asyncDomManip() {
  const arr1 = await getMolJson();
  appendPngs(arr1);
};

asyncDomManip();
// This loads before images are displayed on screen
