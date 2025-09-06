//      factorial calculator.       1

/*
let a = prompt("enter any number to calculate its factorial.")
b = []
let c = undefined
for(c=1;c<=a;c++){
    b.push(c)
}
b.reverse()
// console.log(b);
console.log(b.join(" x "),"=");
let d = b.reduce((a,b)=>{
    return a*b;
})
console.log(d);
*/

//      factorial calculator. harry       2
/*
let a = 5;
function arr(num){
    let a = Array.from(Array(num +1).keys())
    console.log(a.slice(1));
    let b = a.slice(1).reduce((a,b)=>{
        return a*b
    })
    return b;
        
}
console.log(arr(a));
*/

//      using for loop .
/*
let a = 7
function factorial(num){
    let b = 1;
    for (let index = 1; index <= num; index++) {
        b = b*index;
    }
    return b;
}
console.log(factorial(a));
*/

