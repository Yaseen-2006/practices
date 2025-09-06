//              TRIAL - 1 : THE OG PROGRAM!

/*
        to take the input from the user and print the output calculations: 

        + ----> -
        * ----> +
        - ----> /
        / ----> **
        ** ----> *

    these wrong calculations should be performend only 10% of the times.

*/



// let num1 = parseInt(prompt("enter the number 1 :"));
// let num2 = parseInt(prompt("enter the number 2 :"));
// let operator = prompt("enter the operation:");

let num1 = 34;
let num2 = 0; 
let operator = "+" ;

let random = Math.random();
console.log(random);
if (isNaN(num1) || isNaN(num2)) {
    console.log("invalid number!");
}
else {
    if (random < 0.1) {
        switch (operator) {
            case "+":
                console.log("the subtraction is :", num1 - num2);
                break;
            case "*":
                console.log("the addition is :", num1 + num2);
                break;
            case "-":
                if (num2 == 0) {
                    console.log("ERROR : can't devide by '0' ");

                }
                else {
                    console.log("the devision is :", num1 / num2);
                }
                break;
            case "/":
                console.log("the exponentiation of ", num1, " raised to ", num2, " is :", num1 ** num2);
                break;
            case "**":
                console.log("the product is :", num1 * num2);
                break;
            default:
                console.log("operator invalid!!!");
                break;
        }
    }

    else {
        switch (operator) {
            case "+":
                console.log("the addition is :", num1 + num2);
                break;
            case "*":
                console.log("the product is :", num1 * num2);
                break;
            case "-":
                console.log("the subtraction is :", num1 - num2);
                break;
            case "/":
                if (num2 == 0) {
                    console.log("ERROR : can't devide by '0' ");

                }
                else {
                    console.log("the devision is :", num1 / num2);
                }
                break;
            case "**":
                console.log("the exponentiation of ", num1, " raised to ", num2, " is :", num1 ** num2);
                break;
            default:
                console.log("operator invalid!!!");
                break;
        }
    }
}


//              TRIAL - 2
/*
let a = parseInt (prompt("enter the num 1"));
let b = parseInt ( prompt("enter the num 2"));
let random = Math.random();
let c = a+b;
console.log(random);
if (random < 0.1){
    console.log("addition = a-b = ", a-b);
    console.log("subtraction = a/b = ", a/b);
    console.log("multiplication = a+b = ", c);
    console.log("division = a**b = ", a**b);
    console.log("exponentiation = a*b = ", a*b);
}
else {
    console.log("addition = a+b = ",c);
    console.log("subtraction = a-b = ", a-b);
    console.log("multiplication = a*b = ", a*b);
    console.log("division = a/b = ", a/b);
    console.log("exponentiation = a**b = ", a**b);
}
*/