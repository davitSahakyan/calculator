const clearButton = document.getElementById("dataClear");
const deleteButton = document.getElementById("dataDelete");
const equalButton = document.getElementById("dataEquals");
const firstOperandElement = document.getElementById("firstOperand");
const numberButtons = Array.from(document.getElementsByClassName("dataNumber"));
const operationButtons = Array.from(
    document.getElementsByClassName("dataOperation")
);
const secondOperandElement = document.getElementById("secondOperand");

class Calculator {
    constructor(firstOperandElement, secondOperandElement) {
        this.firstOperandElement = firstOperandElement;
        this.secondOperandElement = secondOperandElement;
    }

    clear() {
        this.firstOperand = "";
        this.secondOperand = "";
        this.operation = undefined;
    }

    delete() {}

    appendNumber(number) {
        this.firstOperand = number;
    }

    chooseOperation(operation) {}

    compute() {}

    updateDisplay() {
        this.firstOperandElement.innerText = this.firstOperand;
    }
}

const calculator = new Calculator(firstOperandElement, secondOperandElement);

console.log(numberButtons);

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    });
});
