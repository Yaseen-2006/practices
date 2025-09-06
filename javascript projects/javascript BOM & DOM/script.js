//      console.assert()

/*
a = 45
b = 34
console.assert(a<b, "the equation sucks O.O")


//      console.log();

console.log("hello world");


//      console.table()

let c = [1,2,3,4,5,6]
console.table(c)
let d = {
    name: "yaseen",
    age: "18",
    profession:"web developer"
}
console.table(d)


//      console.warn()
console.warn("this is the warning!!");

//      console.error()

console.error("this is an error!!");

//      console.info()
console.info("this is the additional info.")


//                      interaction

//      alert()

alert("this is an alert")


//      prompt()

let e = prompt("enter the number or a string: ")
console.log(e);

//      confirm()

f = confirm("are you sure you are a devop?")
console.log(f);
*/

//                      EXCERCISE QUESTIONS:

//              QUESTION NO : 1
/*
let a = prompt("enter your age to know whether you can drive or not.")
if (a>=18) {
    alert("congrats you can drive. ")
} else {
    alert("sorry you can't drive.")
}
*/

//              QUESTION NO : 2
/*
let a = parseInt(prompt("enter the age to know if you can drive :"))
let b = confirm("do you want to see the prompt again?")
if (b = true) {
    let c = parseInt(prompt("enter the age to know if you can drive :"))
    if (c >= 18) {
        alert("congrats you can drive. ")
    }
    else {
        alert("sorry you can't drive.")
    }
} else {
    if (a >= 18) {
        alert("congrats you can drive. ")
    }
    else {
        alert("sorry you can't drive.")
    }
}
*/

//              QUESTION NO : 3
/*
function con(val, boolean){
    if(boolean == true){
        let val2 = prompt("enter the age :")
        if (val2 >= 18) {
            alert("you can drive.")
        } else if(val2 > 0 || val2 <18){
            alert("you can  not drive.")
        }
        else if(val2 <= 0){
            alert("check the console!")
            console.error("the age can not be be negative and 0");            
        }
        else if(isNaN(val2)){
            alert("abe chutiye age bola alphabet nahi ! 🤬 wapis reload kar !")
        }
    }
    else if(isNaN(val)){
        alert("abe chutiye age bola alphabet nahi ! 🤬 wapis reload kar !")
    }
    else{
        if (val >= 18) {
            alert("you can drive.")
        } else if(val > 0 && val <18){
            alert("you can  not drive.")
        }
        else if(val <= 0){
            alert("check the console!")
            console.error("the age can not be be negative and 0");            
        }
        else if(isNaN(val)){
            alert("abe chutiye age bola alphabet nahi ! 🤬 wapis reload kar !")
        }
    }
}
let a = prompt("enter the age :")
let b = confirm("do you want to se the prompt again?")
con(a,b)
*/

//              QUESTION NO : 4
/*
let a = prompt("enter the age: ")
if (a >= 4){
    location.href = 'https://www.CodeWithHarry.com'
}
    */

//              QUESTION NO : 5
/*
let a = (prompt("enter the number between 1 & 5 :"))
if (a == 1) {
    document.body.style.backgroundColor = "red"
} else if(a == 2) {
    document.body.style.backgroundColor = "green"
}
 else if(a == 3) {
    document.body.style.backgroundColor = "blue"
}
 else if(a == 4) {
    document.body.style.backgroundColor = "antiquewhite"
}
 else if(a == 5) {
    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"
}
else if(isNaN(a)){
    alert("abe tu thode yeda hai kya? number dalne ko bola maine 🤬")
}
else{
    alert("invalid number.")
}
    */