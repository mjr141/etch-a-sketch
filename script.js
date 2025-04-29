// calculate the height/width of a square based on the container sizing
/* function getSquareDimensions() {
  const container = document.getElementById("container")
  const cssObj = window.getComputedStyle(container);
}
 */

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
    e.target.style.backgroundColor = "black"    
  });
  squares[i].addEventListener("mouseover", (e) => {
    console.log((e).buttons);
    if(e.buttons === 1) {
      e.target.style.backgroundColor = "black"
    } 
  });
}