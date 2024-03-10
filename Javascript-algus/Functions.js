const multiplyForm = document.getElementById("multiplyForm");
console.log(multiplyForm);

multiplyForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(square(event.target[0].value));
});

function  square(number) {
    return number * number;
}

console.log(square(5));