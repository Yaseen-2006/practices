//              My solution
/*
let a = Math.floor(Math.random()*5)+1;
let b = Math.floor(Math.random()*5)+1;
let c = Math.floor(Math.random()*5)+1;
let d = Math.floor(Math.random()*5)+1;
let e = Math.floor(Math.random()*5)+1;

let obj = {
    1: 'red',
    2: 'blue',
    3: 'green',
    4: 'black',
    5: 'grey'
}
document.getElementsByClassName("box")[0].style.backgroundColor = obj[a];
document.getElementsByClassName("box")[1].style.backgroundColor = obj[b];
document.getElementsByClassName("box")[2].style.backgroundColor = obj[c];
document.getElementsByClassName("box")[3].style.backgroundColor = obj[d];
document.getElementsByClassName("box")[4].style.backgroundColor = obj[e];

console.log('a = ', obj[a]);
console.log('b = ', obj[b]);
console.log('c = ', obj[c]);
console.log('d = ', obj[d]);
console.log('e = ', obj[e]);
*/

//      harry bhai's solution

function randomColor() {
    let a = Math.floor(Math.random()*255) 
    let b = Math.floor(Math.random()*255) 
    let c = Math.floor(Math.random()*255) 
    return `rgb(${a},${b},${c})`
}
document.querySelectorAll('.box').forEach(e =>{
    e.style.backgroundColor = randomColor()
})


