// calculate the height/width of a square based on the container sizing
/* const container = document.getElementById("container")
const cssObj = window.getComputedStyle(container);
cssObj.width // return pixel value in form of a string */

const containerWidth = 512; // width in pixels

function createGrid() {
  const container = document.getElementById("container");

  let gridSquare = document.createElement("div");

  gridSquare.className = "square";

  container.appendChild(gridSquare);
  
  for (i = 1; i < 256; i++) {
    let newSquare = gridSquare.cloneNode(true);
    container.appendChild(newSquare);
  }
}

createGrid();

const squares = document.getElementsByClassName("square");
for (i = 0; i < squares.length; i++) {
  squares[i].addEventListener("mousedown", (e) => {
    e.preventDefault();
    e.target.style.backgroundColor = "black";
  }
  );
  squares[i].addEventListener("mouseover", (e) => {
    console.log((e).buttons);
    if(e.buttons === 1) {
      e.target.style.backgroundColor = "black";
    } 
  }
  );
}

let button = document.querySelector("button");
button.addEventListener("click", function() {
  let newGridCount = prompt("select the number of squares per side for a new grid (default: 16)");
  if (Number.isInteger(+newGridCount) && newGridCount <= 100) {
    newSquareSize = containerWidth/newGridCount;
    alert(newGridCount);
    alert(newSquareSize);
  } else {
    alert("not a valid number");
  }
}
);