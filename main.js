var number1 = document.getElementById("num1");
var number2 = document.getElementById("num2");
var operator = document.getElementById("operator");
var submit = document.getElementById("calc");
var output = document.getElementById("awnser");
function calculation() {
    var result;
    var value1 = parseFloat(number1.value);
    var value2 = parseFloat(number2.value);
    var operation = operator.value;
    if (operation == "+") {
        result = value1 + value2;
    }
    else if (operation == "-") {
        result = value1 - value2;
    }
    else if (operation == "*") {
        result = value1 * value2;
    }
    else if (operation == "/") {
        result = value1 / value2;
    }
    else {
        console.log("Please Select valid operator!!");
    }
    output.innerText = "".concat(result);
}
;
submit.addEventListener("click", calculation);
