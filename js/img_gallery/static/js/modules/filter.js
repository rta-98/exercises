function filter(e) {
  const btnMotif = this.dataset.motif; 
  const btnClass = this.classList;
  const btns = document.querySelectorAll(".btn.filter-item");
  for (let i = 0; i < btns.length; i++) {
    btns[i].classList.remove("active");
  };

  btnClass.add("active");
  const cards = document.querySelectorAll(".card") // imgs 
  for (let i = 0; i < cards.length; i++) {
    const cardMotif = cards[i].dataset.motif;
    if (btnMotif == cardMotif || btnMotif === "all") {
      cards[i].style.display = "block"; 
    } else {
      cards[i].style.display = "none";
    };
  };
};

export { filter };
