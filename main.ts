#!/usr/bin/env node

import inquirer from "inquirer";

let asnwer = await inquirer.prompt([

{message : "Please enter first number", type : "number", name : "firstnumber"},
{message : "Please enter second number", type : "number", name : "secondnumber"},

{ 

message: "Please select any of the operator to perform operation",
type : "list",
name : "operator",
choices : ["Addition","Subtraction","Multiplication","Division"],

}

])

// Conditional Statements

if(asnwer.operator === "Addition"){

    console.log("Your answer is = ", asnwer.firstnumber + asnwer.secondnumber)
}else if(asnwer.operator === "Subtraction"){

    console.log("Your answer is = ", asnwer.firstnumber - asnwer.secondnumber)
} else if(asnwer.operator === "Multiplication"){

    console.log("Your answer is = ", asnwer.firstnumber * asnwer.secondnumber)
}else if(asnwer.operator === "Division"){

    console.log("Your answer is = ", asnwer.firstnumber / asnwer.secondnumber)
}else{

    console.log("please select a valid operator")
}              