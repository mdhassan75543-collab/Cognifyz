/* =========================================
   TASK 1
   BUTTON COLOR CHANGER
========================================= */

const colorButton = document.getElementById("colorButton");
const colorStatus = document.getElementById("colorStatus");

const colors = [
    "#635BFF",
    "#2563EB",
    "#16A34A",
    "#EA580C",
    "#DB2777",
    "#0891B2"
];

let colorIndex = 0;

colorButton.addEventListener("click", function () {

    colorIndex++;

    if (colorIndex >= colors.length) {
        colorIndex = 0;
    }

    colorButton.style.backgroundColor = colors[colorIndex];

    colorStatus.textContent =
        "Button color changed successfully!";

});


/* =========================================
   TASK 2
   TIME-BASED GREETING
========================================= */

const greetingButton =
    document.getElementById("greetingButton");

const greetingStatus =
    document.getElementById("greetingStatus");

greetingButton.addEventListener("click", function () {

    const currentHour = new Date().getHours();

    let greeting;

    if (currentHour < 12) {

        greeting = "Good Morning! ☀️";

    } else if (currentHour < 18) {

        greeting = "Good Afternoon! 🌤️";

    } else {

        greeting = "Good Evening! 🌙";

    }

    // Display greeting on webpage
    greetingStatus.textContent = greeting;

    // Display greeting using alert
    alert(greeting);

});


/* =========================================
   TASK 3
   BASIC ADDITION CALCULATOR
========================================= */

const numberOne =
    document.getElementById("numberOne");

const numberTwo =
    document.getElementById("numberTwo");

const calculateButton =
    document.getElementById("calculateButton");

const result =
    document.getElementById("result");


calculateButton.addEventListener("click", function () {

    const firstNumber =
        parseFloat(numberOne.value);

    const secondNumber =
        parseFloat(numberTwo.value);


    // Check if both values are numbers

    if (isNaN(firstNumber) || isNaN(secondNumber)) {

        result.textContent = "Enter numbers";

        return;
    }


    // Add the two numbers

    const sum = firstNumber + secondNumber;


    // Display result

    result.textContent = sum;

});