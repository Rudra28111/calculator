let string = "";
let buttons = document.querySelectorAll('button');
const errorMessage = document.getElementById("errorMessage");


// const isValidInput = (input) => /^([-+/*0-9().\s]*?)(?![-+/*]{2})$/.test(input);

// if (isValidInput(string)) {
//     // Proceed with evaluation
// } else {
//     // Display an error message for invalid input
//     errorMessage.textContent = "Invalid input detected!";
//     errorMessage.style.display = "block";
// }
const handleInput = (value) => {

const isValidInput = /^[-+/*0-9().\s]*$/.test(value);

    // Check for "=" to evaluate the expression
    if (value === "=" || value === "Enter") {
        try {

            // Evaluate the expression and display the result
            string = eval(string).toString();
            display.value = string;
        } catch (error) {
            console.log(error , ":error");
            
            // Show error message and reset the display
            errorMessage.textContent = "Please enter value";
            errorMessage.style.display = "block";
            string = "";
            display.value = "";
        }
    }else if (value === 'C') {
        string = "";
        errorMessage.style.display = "none";
        document.querySelector('input').value = string;
    }else if(!isNaN(value) || isValidInput) {
        string += value;
        display.value = string;
        document.querySelector('input').value = string;
    }
}

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (event) => {
        const value = button.innerHTML;

        handleInput(value)
    });
});


// Add keydown event listener for keyboard input
document.addEventListener('keydown', (event) => {
    console.log(event , ":event");
    
    const key = event.key;
    // handleInput(key);

    handleInput(key)
});

  

  


/* 

1) get value from button when i click on it
    - target button
    - get value (innerHTML , event.target , as a argument)
2) dispay value in input
    - set value in input
3) get result when i click on "="
4) clear function





5) not type sign continously (replace it)
6) apply condition for key


*/







