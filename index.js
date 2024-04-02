#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
const myPin = 1234;
console.log("Welcome to ATM machine");
// Pin code
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin code",
        type: "number",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code");
    console.log(`Your current balance is ${myBalance}`);
    // Operations to select
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select one of the following",
            type: "list",
            choices: ["Withdraw Amount", "Check Balance"],
        }
    ]);
    // In case of withdraw
    if (operationAns.operation === "Withdraw Amount") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number",
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log(`You have insufficient balance as your total balance is ${myBalance}`);
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`You have successfully withdrawn ${amountAns.amount}`);
            console.log(`Now your remaining balance is ${myBalance}`);
        }
    }
    // In case of check balance
    else if (operationAns.operation === "Check Balance") {
        console.log(`Your total balance is ${myBalance}`);
    }
}
else {
    console.log("Incorrect pin code. Please try again.");
}
;
