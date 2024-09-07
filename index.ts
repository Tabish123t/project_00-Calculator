import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {
        type: "number",
        name: "First_Number",
        message: "Please Enter Your First Number:"
    },
    {
        type: "number",
        name: "Second_Number",
        message: "Please Enter Your Second Number:"
    },
    {
        type: "list",
        name: "Operator",
        message: "Select an operator:",
        choices: ["+", "-", "*", "/"]
    }
]);

let result;
switch (answer.Operator) {
    case "+":
        result = answer.First_Number + answer.Second_Number;
        break;
    case "-":
        result = answer.First_Number - answer.Second_Number;
        break;
    case "*":
        result = answer.First_Number * answer.Second_Number;
        break;
    case "/":
        result = answer.First_Number / answer.Second_Number;
        break;
    default:
        result = "Invalid operator selected";
}

console.log("Result: ", result);