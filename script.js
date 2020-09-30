const grid_len = 16;
const container_len = 500;

const grid_container = document.querySelector("#container");

function create_square (){
    //create an square div element and return it
    let square = document.createElement("div")
    square.style.height = `${(container_len/grid_len)}px`;
    square.style.width = `${(container_len/grid_len)}px`;
    square.style.border = "1px solid black";
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

