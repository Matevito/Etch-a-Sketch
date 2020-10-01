const container_len = 500;
let grid_len = 8;
color_hover = "black_hover"

const grid_container = document.querySelector("#container");

function create_square (){
    //create an square div element and return it
    let square = document.createElement("div")
    square.style.height = `${(container_len/grid_len)}px`;
    square.style.width = `${(container_len/grid_len)}px`;
    square.style.border = "1px solid black";
    square.classList.add("square");
    return square;
}

for (i=0; i < grid_len; i++){
    let column = document.createElement("div");
    column.setAttribute("style", "display: flex; flex-direction: column");

    for (y=0; y < grid_len; y++){
        //create and append an square for the column
        let square = create_square ();
        column.appendChild(square)
    }
    //append the row in the flexbox container
    grid_container.appendChild(column);
}

//event to paint squares hovering them
let squares_to_paint = document.querySelectorAll(".square")

squares_to_paint.forEach((square) => {
    square.addEventListener("mouseenter", () => {
        square.classList.add(color_hover)
        console.log(square)
    })
})

//reset grid button event  

const reset_btn = document.querySelector("#reset_grid");

    //retire black and orange class from squares
reset_btn.addEventListener("click", () => {
   squares_to_paint.forEach((square) => square.classList.remove("black_hover")
    )})
reset_btn.addEventListener("click", () => {
   squares_to_paint.forEach((square) => square.classList.remove("orange_hover")
    )})

//todo: resize grid select option

const size_btn = document.getElementById("size_btn");
size_btn.addEventListener("click", () => {
    let size_list = document.getElementById("grid_size").value;
    grid_len = size_list;
    //recreate grid (1.earase the grid; 2.create a new one)

    //1.

    let full_grid = document.querySelectorAll(".square");

    full_grid.forEach((square) => square.remove());

    //2.
    for (i=0; i < grid_len; i++){
        let column = document.createElement("div");
        column.setAttribute("style", "display: flex; flex-direction: column");
    
        for (y=0; y < grid_len; y++){
            //create and append an square for the column
            let square = create_square ();
            column.appendChild(square)
        }
        //append the row in the flexbox container
        grid_container.appendChild(column);
    }

    //3. take in a variable the new squares nodes and refresh the event
    let squares_to_paint = document.querySelectorAll(".square");
    squares_to_paint.forEach((square) => {
        square.addEventListener("mouseenter", () => {
            square.classList.add(color_hover)
            console.log(square)
        })
    });
})

//todo: change hover color:

const black_btn = document.getElementById("black");
const orange_btn = document.getElementById("orange");
const random_btn = document.getElementById("random");

black_btn.addEventListener("click", () => {
    color_hover = "black_hover"
})
orange_btn.addEventListener ("click", () =>{
    color_hover ="orange_hover"
})

//todo: random color fix