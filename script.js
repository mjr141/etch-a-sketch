// calculate the height/width of a square based on the container sizing
/* const container = document.getElementById("container")
const cssObj = window.getComputedStyle(container);
cssObj.width // return pixel value in form of a string */

const containerWidth = 512; // width in pixels

function createGrid(sqPerSide = 16, sqWidth = 32) {
  // add the first square to the grid and set dimensions
  const container = document.getElementById("container");
  container.replaceChildren(); // remove all child elements from container so we start with a blank grid
  let gridSquare = document.createElement("div");
  gridSquare.className = "square";
  container.appendChild(gridSquare);
  gridSquare.style.width = `${sqWidth}px`;
  gridSquare.style.height = `${sqWidth}px`;

  // clone the first square. total number of boxes is sqPerSide^2
  for (i = 1; i < (sqPerSide**2); i++) {
    let newSquare = gridSquare.cloneNode(true);
    container.appendChild(newSquare);
  }

  // add on-click behaviour for newly created squares
  const squares = document.getElementsByClassName("square");
  for (i = 0; i < squares.length; i++) {
    squares[i].addEventListener("mousedown", (e) => {
      e.preventDefault();
      e.target.style.backgroundColor = "black";
    });
    squares[i].addEventListener("mouseover", (e) => {
      console.log((e).buttons);
      if(e.buttons === 1) {
        e.target.style.backgroundColor = "black";
      } 
    });
}
}

createGrid(); // initialize the grid with default values

let button = document.querySelector("button");
button.addEventListener("click", function() {
  let newGridCount = prompt("select the number of squares per side for a new grid (default: 16)");
  if (newGridCount === "") { // user pressed ok but input nothing
    createGrid()
  } else if (newGridCount === null) {
    // user pressed cancel
    return;
  } else if (Number.isInteger(+newGridCount) && newGridCount > 0 && newGridCount <= 100) { 
    // user input a valid number
    // note that +null is 0
    newSquareSize = containerWidth/newGridCount;
    createGrid(newGridCount, newSquareSize);
  } else {
    // user input an invalid number and did not hit cancel
    alert("not a valid number");
  }
});