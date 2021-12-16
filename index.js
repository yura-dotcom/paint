const canvas = document.querySelector('#canvas');
const incBtn = document.querySelector('#increace');
const decBtn = document.querySelector('#decreace');
const sizeEl = document.querySelector('#size');
const colorEl = document.querySelector('#color');
const clearEl = document.querySelector('#clear');


const context = canvas.getContext('2d');


let size = 10;
let isPresed = false;
let color = 'black';


let x;
let y;


function updateSize () {
  sizeEl.innerText = size;
}


function drawCircle(x, y) {
  context.beginPath();
  context.arc(x, y, size, 0, Math.Pi * 2);
  context.fillStyle = color;
  context.fill();
}


function drawLine (x1, y1, x2, y2) {
  context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(x2,y2);
  context.lineWidth = size *2;
  context.strokeStyle = color;
  context.stroke();
}

canvas.addEventListener('mousedown', (e) => {
  isPresed = true;


  x = e.offsetX;
  y = e.offsetY;

  drawCircle(x, y);
})

canvas.addEventListener('mouseup', (e) => {
  isPresed = false;


  x = undefined;
  y = undefined;

  drawCircle(x, y);
})


canvas.addEventListener('mousemove', (e) => {
  if(isPresed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
})

incBtn.addEventListener('click', () => {
  size += 5;

  if(size> 50) size = 50

  updateSize()
})

decBtn.addEventListener('click', () => {
  size -= 5;

  if(size < 5) size = 5

  updateSize()
})

colorEl.addEventListener('click', (e) => color = e.target.value);

clearEl.addEventListener('click', (e) => context.clearRect(0,0, canvas.width, canvas.height));


// canvas.addEventListener('click', (e) => {
//   x = e.offsetX;
//   y = e.offsetY;

//   drawCircle(x, y);
// })



