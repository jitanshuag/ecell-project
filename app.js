// square color change
const squares = document.querySelectorAll(".square");

squares.forEach((square) => {
    square.addEventListener("click", () => {
        if (square.style.backgroundColor === "rgb(32, 32, 144)") {
            square.style.backgroundColor = "red";
        }
    });
});

// this will Change all square colors to blue on clicking the last square
squares[squares.length - 1].addEventListener("click", () => {
    squares.forEach((square) => {
        square.style.backgroundColor = "rgb(32, 32, 144)";
    });
});
