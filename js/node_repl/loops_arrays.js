// traditional array/loop 
const array = ["a", "b", "c"] 

for (const element of array) {
  console.log(element)
}


// forEach() method

const images = ['img1.jpg', 'img2.jpg', 'img2.jpg']
baseURL = "someURL"
i = 0 
images.forEach(function(element) {
 src = baseURL + element

  i++ 
  alt = "imageNumber" + i
  console.log(src, element, alt)
}) 



// Traditional for-loop
const images = ['img1.jpg', 'img2.jpg', 'img2.jpg']
let len = images.length;
let text = "";
for (let i=0; i < len; i++) {
  text += images[i];
}



// Shorthand arrow function method
const images1 = ['img1.jpg', 'img2.jpg', 'img2.jpg']

// Old way 
const numbers = [1, 4, 9];
const roots = numbers.map(function(num) {
  return Math.sqrt(num);
});

console.log(roots)

// New way: Arrow function
const numbers1 = [1, 4, 9]
const roots1 = numbers1.map((num) => Math.sqrt(num));
console.log(roots1)


