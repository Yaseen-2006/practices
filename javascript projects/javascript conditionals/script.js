            // general example
// let age = 34;
// let grace = 2;
// if((age+grace)>18){
//     console.log("this person can drive...");
// }
// else{
//     console.log("this person is under 18 and cannot drive..");
// }
            // examples of arithematial operators.
// let age = 5, grace = 2;
// console.log(age + grace);
// console.log(age - grace);
// console.log(age * grace);
// console.log(age % grace);
// console.log(age / grace);
// console.log(age ** grace);
            // examples of assignment operators::
// {
//     let age = 5, grace = 3;
//     age = grace;
//     console.log(age);
// }
// {
//     let age = 5, grace = 3;
//     age += grace;
//     console.log(age);
// }
// {
//     let age = 5, grace = 3;
//     age -= grace;
//     console.log(age);
// }
// {
//     let age = 5, grace = 3;
//     age *= grace;
//     console.log(age);
// }
// {
//     let age = 5, grace = 3;
//     age %= grace;
//     console.log(age);
// }
// {
//     let age = 5, grace = 3;
//     age **= grace;
//     console.log(age);
// }
// {
//     let age = 5, grace = 3;
//     age /= grace;
//     console.log(age);
// }
            // examples of comparison operators.
// let age = 34;
// let allowed = 18;
// if(age == 18){
//     console.log("youre 18");
// }
// else{
//     console.log("you're not 18");
// }
// let age = 18;
// let allowed = 18;
// if(age != 18){
//     console.log("you're not 18");
// }
// else{
//     console.log("you're 18");
// }

//                    ternary operator example:
/*
let a = 34, b = 56;
let c = a<b?(b-a):(b*a);
console.log(c);

*/
//              this means 
/*
let a = 34, b = 56;
if(a<b){
let c = b-a;
console.log(c)
}
else{
let c = b*a;
console.log(c);
}
*/
//                      or
/*
let a = 34, b = 56;
let c = a>b?(b-a):(b*a);
console.log(c);
*/
//              this means
/*
let a = 34, b = 56;
let c = null;
if(a>b){
    c = b-a;
    console.log(c);
}
else{
    c = a*b;
    console.log(c);
}

*/

//              chapter 2 practice set

//      question: 1

let age = 0;
if(age>20){
    console.log("you're above 20!!");
}
else if(age<10){
    console.log("you're below 10!!");
}
else{
    console.log("your age lies between 10 and 20!!");
}

//      question: 2
/*
switch(age){
    case(age>20):
    console.log("age is above 20!!");
    break;
    case(age<10):
    console.log("the age is too low!!");
    break;
    case(0):
    console.log("are you kidding 🤣!!");
    break;
}
*/

//      question: 3 and question: 4

let number = 45;
if(number%2 == 0 && number%3 == 0){
    console.log("the number is devisible by 2 and 3!!");
}
else if(number%2==0){
    console.log("the number is devisible by 2!!");
}
else if(number%3==0){
    console.log("the number is devisible by 3!!");
}
else{
    console.log("the number is not devisible by 2 nor devisible by 3!!")
}

//      question: 5

let age2 = 2;
(age2>18)?console.log("you can drive!!") : console.log("you cannnot drive!!");

