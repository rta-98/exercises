const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");
const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

const fileNames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
const baseURL = 'https://mdn.github.io/shared-assets/images/examples/learn/gallery/'

i = 0 
fileNames.forEach(function(fName) {
  const img = document.createElement('img');
  img.src = baseURL + fName;
  img.alt = "Image Number: " + i++;
  img.setAttribute('tabindex', '0');
  console.log(img.src)
  thumbBar.appendChild(img);
  img.addEventListener("click", clickUpdateImg);
  img.addEventListener("keydown", tabUpdateImg);

});

function clickUpdateImg(e) {
  thumbNailImgSrc = this.src;
  thumbNailImgAlt = this.alt;
  displayedImage.src = thumbNailImgSrc;
  displayedImage.alt = thumbNailImgAlt;
}

function tabUpdateImg(e) {
  if (e.code === 'Enter') {
    thumbNailImgSrc = this.src;
    thumbNailImgAlt = this.alt;
    displayedImage.src = thumbNailImgSrc;
    displayedImage.alt = thumbNailImgAlt;
  }
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (btn.classList.contains("dark")) {
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = 'rgb(0 0 0 / 0.5)';
    btn.classList.remove("dark");
  } else if (!btn.classList.contains("dark")) {
    btn.textContent = "Darken";
    overlay.style.backgroundColor = 'rgb(0 0 0 / 0.0)';
    btn.classList.add("dark");
  }
})

