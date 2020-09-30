const grid_len = 6;
const container_len = 500;

const grid_container = document.querySelector("#container");

for (i=0; i < grid_len; i++){
    let column = document.createElement("div");
    column.setAttribute("style", "display: flex; flex-direction: column");

    for (y=0; y < grid_len; y++){

        //this can be a function called: create square*
        let square = document.createElement("div")
        square.style.height = `${500/grid_len}px`;
        square.style.width = `${500/grid_len}px`;
        square.style.border = "1px solid black";

        //add the square to the column element.
        column.appendChild(square);
    }
    //append the row in the flexbox container
    grid_container.appendChild(column);
}
