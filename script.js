// Reset button
const reset = document.querySelector('#reset');
reset.addEventListener('click', clearGrid);

// Add mouse-over listener to all the created div-boxes
function addListeners() {

    const box = document.querySelectorAll('.box');
    box.forEach(div => div.addEventListener('mouseover', mouseOverBox));
    box.forEach(div => div.addEventListener('touchmove', mouseOverBox));
}

// Add .hovering class to div-box
function mouseOverBox(e) {

    const key = e.ctrlKey;
    const select = e.target;
    if (key === true) select.classList.add('hovering');
}

// Remove .hovering class from all the div-boxes, also create new grid
function clearGrid() {

    const box = document.querySelectorAll('.box');
    box.forEach(div => div.classList.remove('hovering'));
    newGrid();
}

// Remove old grid and create new grid according to user given value
function newGrid() {

    const insert = parseInt(prompt("Insert number of squares per side (less than 65 is supported)"));

    if (insert < 65) {

        document.documentElement.style.setProperty('--size', insert);
        const exp = insert * insert;
        const n = exp.toString();
        removeBoxes();
        createGrid(n)

    } else {

        document.documentElement.style.setProperty('--size', '16');
        removeBoxes();
        createGrid(256);
        alert("Values less than 65 are supported! Created default grid (16).");
    }
}

// Create new grid with value n
function createGrid(n) {

    const grid = document.querySelector('.grid-box');

    for (let i = 0; i < n; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('box');
        grid.appendChild(newDiv);
    }

    addListeners();
}


function removeBoxes() {

    const box = document.querySelectorAll('.box');
    box.forEach(div => div.remove());
}


// Init first grid 16x16
createGrid(256);
