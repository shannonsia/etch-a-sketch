/* document.addEventListener("DOMContentLoaded", function(){
    createGrid(32);
})

function createGrid(size){
let container = document.querySelector(".container");
container.style.backgroundColor = 'yellow';
        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

        let numDivs = size * size;
        for(let i = 0; i < numDivs; i++){
            let div = document.createElement("div");
            container.appendChild(div);
            div.style.backgroundColor = "yellow";
        }
} */


/*
let container = document.querySelector(".container");

function makeGrid(numGrid){
for (let i = 0; i < numGrid; i++){
let grid = document.createElement("div");
container.append(grid);
}
}

makeGrid(32);

    grid.style.width(500/numGrid);
    grid.style.height(500/numGrid);
*/


/* let container = document.querySelector(".container");

function makeGrid(numGrid){
    for (let rows = 0; rows < numGrid; rows++){
        for (let columns = 0; columns < numGrid; columns++){
            let grid = document.createElement("div");
            container.append(grid);
        }
  
    }
    grid.style.width(500/numGrid);
    grid.style.height(500/numGrid);
}

makeGrid(32);
*/


let container = document.querySelector(".container");

function makeGrid(numGrid){
    for (let i = 0; i < numGrid; i++){
        let grid = document.createElement("div");
        container.append(grid);
        grid.style.backgroundColor = 'yellow';
    }
    
}


makeGrid(32);