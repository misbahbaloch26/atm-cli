import inquirer from "inquirer";
let myBalance = 50000;
let pinCode = 2626;
//first prompt  [pin code]
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin pinCode",
        type: "number"
    }
]);
if (pinAnswer.pin === pinCode) {
    console.log("correct pin code");
    // second prompt   [account type]
    let accountType = await inquirer.prompt([
        {
            name: "accountType",
            message: "please select your account type",
            type: "list",
            choices: ["current account", "saving account"]
        }
    ]);
    // /3rd prompt   [option selection]
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["Fast cash", "withdraw", "check balance"],
        }
    ]);
    // /withdraw
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Sorry! You have insufficient amount in your account.");
        }
        else {
            myBalance -= amountAns.amount;
            console.log("your remaining balance is: " + myBalance);
        }
    }
    // //fast cash [home work]
    else if (operationAns.operation === "Fast cash") {
        let selectAmount = await inquirer.prompt([
            {
                name: "amount",
                type: "list",
                message: "Please select your amount",
                choices: [2000, 5000, 10000, 15000, 20000, 30000],
            }
        ]);
        if (selectAmount.amount > myBalance) {
            console.log("Sorry! You have insufficient amount in your account.");
        }
        else {
            myBalance -= selectAmount.amount;
            console.log(' your remaining balance is: ' + myBalance);
        }
        ;
    }
    else if (operationAns.operation === "check balance") {
        console.log("your balance is" + myBalance);
    }
}
else {
    console.log("incorrect pin code");
}
