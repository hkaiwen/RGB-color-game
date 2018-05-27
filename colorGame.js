var numsSquares = 6;
var colors = [];
var pickedColor;
var colorDisplay = document.querySelector('#colorDisplay');
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var reset = document.querySelector('#reset');
var mode = document.querySelectorAll('.mode');

init();
function init() {
  // mode button event listerner
  setUpMode();
  setUpSquares();
  resett();
}
function setUpSquares() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function(e) {
      var clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = 'correct';
        changeColor(pickedColor);
        h1.style.backgroundColor = pickedColor;
        reset.textContent = 'Play Again!';
      }
      else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = 'Try Again';
      }
    });
  }
}
function setUpMode() {
  for (var i = 0; i < mode.length; i++) {
    mode[i].addEventListener('click', function() {
      mode[0].classList.remove("selected");
      mode[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy"? numsSquares = 3: numsSquares = 6;
      resett();
    });
  }
}
function resett(){
  colors = generateRandomColors(numsSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  reset.textContent = 'New Color';
  messageDisplay.textContent = "";
  for (var i = 0; i < squares.length; i++) {
    if(colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.background = "steelblue";

}
reset.addEventListener("click", function () {
  resett();
})



function changeColor(color) {
  for (var i = 0; i < colors.length; i++) {
    squares[i].style.background = color;
  }
}
function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  return "rgb("+red+", "+green+", "+blue+")";
}
