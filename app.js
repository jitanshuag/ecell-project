const squares = document.querySelectorAll(".square");
let squaresClicked = [];

squares.forEach((square) => {
    square.addEventListener("click", () => {
        if (square.style.backgroundColor === "rgb(32, 32, 144)") {
            square.style.backgroundColor = "red";
            let index = squaresClicked.indexOf(square);
            if (index > -1) {
                squaresClicked.splice(index, 1);
            }
        } else {
            square.style.backgroundColor = "red";
            squaresClicked.push(square);
        }
    });
});


squares[squares.length - 1].addEventListener("click", () => {
    setTimeout(() => {
        squaresClicked.forEach((ClickedOne, index) => {
            setTimeout(() => {
                ClickedOne.style.backgroundColor = "rgb(32, 32, 144)";
            }, 500 * index);
        });
    }, 1000);
});
