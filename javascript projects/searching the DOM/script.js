//      document.body

// console.log(document.body.childNodes);

// console.log(document.body.childNodes[1]);

// console.log(document.body.childNodes[1].firstChild);
// console.log(document.body.childNodes[1].lastChild);

// console.log(document.body.childNodes[1].firstElementChild);
// console.log(document.body.childNodes[1].lastElementChild);

/*
let a = confirm("enter weather you want to make the color of the boxes red")
if (a == true) {
    // document.getElementsByClassName("box")[0].style.backgroundColor = "red"
    // document.getElementsByClassName("box")[1].style.backgroundColor = "red"
    // document.getElementsByClassName("box")[2].style.backgroundColor = "red"
    // document.getElementsByClassName("box")[3].style.backgroundColor = "red"
    // document.getElementsByClassName("box")[4].style.backgroundColor = "red"
    // document.getElementsByClassName("box")[5].style.backgroundColor = "red"
}
else {
    document.getElementsByClassName("box")[0].style.backgroundColor = "green"
    document.getElementsByClassName("box")[1].style.backgroundColor = "green"
    document.getElementsByClassName("box")[2].style.backgroundColor = "green"
    document.getElementsByClassName("box")[3].style.backgroundColor = "green"
    document.getElementsByClassName("box")[4].style.backgroundColor = "green"
    document.getElementsByClassName("box")[5].style.backgroundColor = "green"
}
*/
/*
let box = document.getElementsByClassName("box")
box[3].style.backgroundColor = 'grey'
*/
/*
let box = document.getElementById("box3")
box.style.backgroundColor = "purple"
box.style.color= "white"
*/

/*
document.querySelectorAll(".box").forEach(element => {
    element.style.backgroundColor = "purple"
});
*/
/*
document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "black"
    e.style.color = "white"
})
*/

//              quick diary
/*
console.log(typeof(document));
*/

//                      practice set questions:
//              QUESTION NO : 1 

document.body.firstElementChild.firstElementChild.firstElementChild.firstElementChild.style.backgroundColor = 'red'

//              QUESTION NO : 2 
/*
    ANS: no, it's not there.
*/

//              QUESTION NO : 3

document.getElementsByClassName("element")[0].firstElementChild.style.backgroundColor = 'green'
document.getElementsByClassName("element")[0].lastElementChild.style.backgroundColor = 'green'

//              QUESTION NO : 4
// method 1
// document.getElementsByClassName('ListItems')[0].firstElementChild.querySelectorAll(".list").forEach(e =>{e.style.backgroundColor = 'cyan'})
// method 2
let a = Array.from(document.getElementsByClassName('ListItems')[0].firstElementChild.getElementsByTagName("li"))
a.forEach(e =>{
    e.style.backgroundColor = 'cyan'
})


//              QUESTION NO : 5
/*
ANS : a) matches
*/