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