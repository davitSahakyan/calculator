const clearButton = document.getElementById("dataClear");
const cubeOperation = document.getElementById("dataOperationCube");
const deleteButton = document.getElementById("dataDelete");
const equalButton = document.getElementById("dataEquals");
const factorialOperation = document.getElementById("factorialOperation");
const firstOperandElement = document.getElementById("firstOperand");
const numberButtons = Array.from(document.getElementsByClassName("dataNumber"));
const oneDividedOnX = document.getElementById("oneDividedOnX");
const operationButtons = Array.from(
    document.getElementsByClassName("dataOperation")
);
const roundOperation = document.getElementById("roundOperation");
const secondOperandElement = document.getElementById("secondOperand");
const suareOperation = document.getElementById("dataOperationSquare");
const xTimeTenOperation = document.getElementById("xTimeTenOperation");

function factorial(number) {
    let answer = 1;
    if (number == 0 || number == 1) {
        return answer;
    } else {
        for (var i = number; i >= 1; i--) {
            answer = answer * i;
        }
        return answer;
    }
}

class Calculator {
    constructor(firstOperandElement, secondOperandElement) {
        this.firstOperandElement = firstOperandElement;
        this.secondOperandElement = secondOperandElement;
        this.firstOperand = "";
        this.secondOperand = "";
    }

    square() {
        let result;
        const number = parseFloat(this.secondOperand);
        if (isNaN(number)) return;
        result = number * number;
        this.secondOperand = result;
    }
    cube() {
        let result;
        const number = parseFloat(this.secondOperand);
        if (isNaN(number)) return;
        result = number * number * number;
        this.secondOperand = result;
    }

    xTimeTenOperation() {
        let result = 10;
        const number = parseFloat(this.secondOperand);
        if (isNaN(number)) return;
        if (number === 0) {
            result = 1;
        }
        for (let i = 0; i < number - 1; i++) {
            result = result * 10;
        }
        this.secondOperand = result;
    }

    factorialOperation() {
        const number = parseFloat(this.secondOperand);
        if (isNaN(number)) return;
        this.secondOperand = factorial(number);
    }

    roundOperation() {
        let result;
        if (this.secondOperand.includes(".")) {
            let splitedInput = this.secondOperand.split(".");
            let splitedLastPart = splitedInput[1];
            let firstCharacter = splitedLastPart[0];
            if (firstCharacter >= 5) {
                result = parseFloat(splitedInput[0]) + 1;
            } else {
                result = parseFloat(splitedInput[0]);
            }
        }
        this.secondOperand = result;
    }

    oneDividedOnX() {
        let result;
        const number = parseFloat(this.secondOperand);
        if (isNaN(number)) return;
        result = 1 / number;
        this.secondOperand = result;
    }

    clear() {
        this.secondOperand = "";
        this.firstOperand = "";
        this.operation = undefined;
    }

    delete() {
        this.secondOperand = this.secondOperand.toString().slice(0, -1);
    }

    appendNumber(number) {
        if (number === "." && this.secondOperand.includes(".")) return;
        this.secondOperand = this.secondOperand.toString() + number.toString();
    }

    chooseOperation(operation) {
        if (this.secondOperand === "") return;
        if (this.firstOperand !== "") {
            this.compute();
        }
        this.operation = operation;
        this.firstOperand = this.secondOperand;
        this.secondOperand = "";
    }

    compute() {
        let result;
        const previousNumber = parseFloat(this.firstOperand);
        const nextNumber = parseFloat(this.secondOperand);
        if (isNaN(previousNumber) || isNaN(nextNumber)) return;
        if (this.operation === "+") {
            result = previousNumber + nextNumber;
        } else if (this.operation === "-") {
            result = previousNumber - nextNumber;
        } else if (this.operation === "÷") {
            result = previousNumber / nextNumber;
        } else if (this.operation === "×") {
            result = previousNumber * nextNumber;
        } else if (this.operation === "%") {
            result = (previousNumber / 100) * nextNumber;
        } else return;
        this.secondOperand = result;
        this.operation = undefined;
        this.firstOperand = "";
    }

    updateDisplay() {
        this.secondOperandElement.innerText = this.secondOperand;
        this.firstOperandElement.innerText = this.firstOperand;
    }
}

const calculator = new Calculator(firstOperandElement, secondOperandElement);

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    });
});

operationButtons.forEach((button) => {
    button.addEventListener("click", () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    });
});

equalButton.addEventListener("click", () => {
    calculator.compute();
    calculator.updateDisplay();
});

clearButton.addEventListener("click", () => {
    calculator.clear();
    calculator.updateDisplay();
});

deleteButton.addEventListener("click", () => {
    calculator.delete();
    calculator.updateDisplay();
});

suareOperation.addEventListener("click", () => {
    calculator.square();
    calculator.updateDisplay();
});

cubeOperation.addEventListener("click", () => {
    calculator.cube();
    calculator.updateDisplay();
});

factorialOperation.addEventListener("click", () => {
    calculator.factorialOperation();
    calculator.updateDisplay();
});

xTimeTenOperation.addEventListener("click", () => {
    calculator.xTimeTenOperation();
    calculator.updateDisplay();
});

roundOperation.addEventListener("click", () => {
    calculator.roundOperation();
    calculator.updateDisplay();
});

oneDividedOnX.addEventListener("click", () => {
    calculator.oneDividedOnX();
    calculator.updateDisplay();
});
