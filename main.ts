let number1 = document.getElementById("num1") as HTMLInputElement
let number2 = document.getElementById("num2") as HTMLInputElement
let operator = document.getElementById("operator") as HTMLInputElement
let submit = document.getElementById("calc") as HTMLButtonElement
let output = document.getElementById("awnser") as HTMLOutputElement

function calculation(){
    let result;
    let value1: number = parseFloat(number1.value);
    let value2: number = parseFloat(number2.value);
    let operation = operator.value;

    if(operation == "+"){
        result = value1 + value2;
    }else if(operation == "-"){
        result = value1 - value2;
    }else if(operation == "*"){
        result = value1 * value2;
    }else if(operation == "/"){
        result = value1 / value2;
    }else{
        console.log("Please Select valid operator!!")
    }

    output.innerText = `${result}`;
};

submit.addEventListener("click", calculation);