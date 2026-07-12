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

function appendPngs(arr, filter) {
  let len = arr.length;
  const imgCol = [];
  for (let i = 0; i < len; i++) {
    const imgSrc = arr[i][0];
    const motif = arr[i][1];
    const smiles = arr[i][2];
    const newImg = document.createElement("img");
    const allPngsDiv = document.querySelector(".all-pngs");
    newImg.src = "png/" + imgSrc; // df1["img"]
    newImg.dataset.motif = motif.toLowerCase(); // df1["Motif"] 
    newImg.dataset.smiles = smiles
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

export { appendBtns, appendPngs };
