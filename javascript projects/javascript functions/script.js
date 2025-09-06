//                  simple function.
/*
function naam(x, y, z) {
    console.log("mera naam " + x + " hai");
    console.log("mera naam " + y + " hai");
    console.log("mera naam " + z + " hai");
    
}
naam("yaseen", "umair", "uzair");
*/

//              making the function (parameters)

/*
function sum(a, b){
    console.log(a + b);
}
sum(34, 6);
*/
//              OR 
/*
function addition(a, b , c = 6) {
    console.log(a, b , c);
    console.log(a + b + c);
}

addition(12, 34, 34);
*/

//              OR : pre declaring the parameters.

/*
function addition(a = 3, b = 4 , c = 6) {
    console.log(a, b , c);
    console.log(a + b + c);
}
addition();
*/

//              function in a variable.

/*
const add = (a,b) =>{
    let c = a+b;
    return c;
}

let y = add(36,4);
console.log(y);
*/

//          OR
/*
const devide = (a, b) =>{
    let c = a%b;
    return c;
}
let x = devide(23, 4);
console.log(x);
*/

//              OR
/*
let product = (a,b,c = 3) => {
    let d = a*b*c;
    console.log(a, b, c);    
    return d;
}
let multiplication = product(12,12);
console.log(multiplication);
*/

//      multiple outputs: perfect example of predefined parameters.
/*
function sentence(a, b, c = 4) {
    console.log(a, b, c );
    console.log(a + b + c );
    console.log("end of sentence.");
    
}

result1 = sentence(3);
result2 = sentence(3,5);
result3 = sentence(3,67,5);
*/


//              PRACTICE SET QUESTIONS:

//          QUESTION NO.1
/*
let object = {
    harry : 98,
    rohan : 70,
    aakash : 7
}
for (const key in object) {
        const element = object[key];
        console.log(object);        
        
}
*/

//              QUESTION NO.2
/*
let object = {
    harry : 98,
    rohan : 70,
    aakash : 7
}
for (const key in object) {
        const element = object[key];
        console.log(element);        
        
}
*/

//              QUESTION NO.3
/*
let num = 56;
if(num == 64){
    console.log("the number is correct");

}
else{
    console.log("try again!!");
    
}
*/

//              QUESTION NO.4
/*
function mean(a, b, c , d, e) {
    console.log("the mean of these numbers is::", (a+b+c+d+e)/5);            
}
mean(4,5,6,7,8);
*/
//              OR
/*
function mean(a, b, c , d, e) {
    console.log("the mean of these numbers is::", (a+b+c+d+e)/5);            
}
let result = mean(4,5,6,7,8);
*/

//              OR
/*
function mean(a, b, c , d, e) {
    console.log("the mean of these numbers is::", (a+b+c+d+e)/5);            
}
result = mean(4,5,6,7,8);
*/

//              OR
/*
const mean = (a,b,c,d,e) => {
    let f = (a+b+c+d+e)/5;
    return f;
}

let number = mean(23,45,6,7,2);
console.log(number);
*/
