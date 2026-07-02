// Variables: ---------------------------------
// var can be updated and redclared 
var z = 1
var z = 2 // works
var z = 3 // works too

// let can be updated but NOT redeclared 
let y = 1; 
y = 2; // works

// const can NOT be updated and NOT redeclared 
const x = 1; 
x = 2; // error  

// Variables in Functions: ---------------------------------

function f1 () {} 

// IIFE (Immediately Invoked Function Expression) ---------------------------------
const b = new Boolean(false);
let temp = 0;
if (b) {
    while (temp < 10) {
      temp++; 
      console.log(temp)
    }
};
temp = 0;

const c = Boolean(false);
let temp = 0;
if (!c) {
    while (temp < 10) {
      temp++; 
      console.log(temp)
    }
};
temp = 0;

!!Boolean(false)
!{}
!!{}

const d = new Boolean(false);
!d
!!d

const bad = new Boolean(false);
bad
!bad
!!bad 

typeof bad 
typeof good

const good = Boolean(false);
good
!good
!!good

const x = new
//---------------------------------------------------------------------------------------------------
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
  *getSides() {
    yield this.height;
    yield this.width;
    yield this.height;
    yield this.width;
  }
}

const square = new Rectangle(10, 10);

console.log(square.area); // 100

// made possible by the generator function; each yield.
console.log(...square.getSides()) 
//---------------------------------------------------------------------------------------------------
























