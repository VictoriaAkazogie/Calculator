// Business logic
function add(num1, num2) {
  return num1 + num2
};
function subtract(num1, num2) {
  return num1 - num2
};
function multiply(num1, num2) {
  return num1 * num2
};
function divide(num1, num2) {
  return num1 / num2
};
function modulo(num1, num2) {
  return num1 % num2
}

// User interface
$(document).ready(function () {
  $("#form1").submit(function (event) {
    event.preventDefault();
    const number1 = parseInt($("#input1").val());
    const number2 = parseInt($("#input2").val());
    const operator = $("input:radio[name=operator]:checked").val();
    let result;
    if (operator === "add") {
      result = add(number1, number2);
    } else if (operator === "subtract") {
      result = subtract(number1, number2);
    } else if (operator === "multiply") {
      result = multiply(number1, number2);
    } else if (operator === "divide") {
      result = divide(number1, number2);
    } else if (operator === "modulo") {
      result = modulo(number1, number2)
    }
    $("#output").text(result);
  });
});