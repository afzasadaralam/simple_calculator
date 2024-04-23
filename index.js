#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter First number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "select one of the operators to perform operators",
        type: "list",
        name: "operator",
        choices: (["Addition", "Subtraction", "Multiplication", "Division", "Percentage", "Exponentiation", "Equal to", "Less than", "Greater than"])
    },
]);
// conditional satatement
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else if (answer.operator === "Percentage") {
    console.log(answer.firstNumber % answer.secondNumber);
}
else if (answer.operator === "Exponentiation") {
    console.log(answer.firstNumber ^ answer.secondNumber);
}
else if (answer.operator === "Equal to") {
    console.log(answer.firstNumber = answer.secondNumber);
}
else if (answer.operator === "Less than") {
    console.log(answer.firstNumber < answer.secondNumber);
}
else if (answer.operator === "Greater than") {
    console.log(answer.firstNumber > answer.secondNumber);
}
else {
    console.log("please select valid operator");
}
