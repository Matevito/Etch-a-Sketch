const container_len = 500;
let grid_len = 15;

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
const squares_to_paint = document.querySelectorAll(".square")

squares_to_paint.forEach((square) => {
    square.addEventListener("mouseenter", () => {
        square.classList.add("hovered_place")
    })
})

const reset_btn = document.querySelector("#reset_grid");
console.log(squares_to_paint)

reset_btn.addEventListener("click", () => {
   squares_to_paint.forEach((square) => square.classList.remove("hovered_place")
    )})
