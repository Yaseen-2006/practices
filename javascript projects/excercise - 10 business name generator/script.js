//              TRIAL :1 multiple names.
/*
let objectives = {
    objective1 : "Crazy",
    objective2 : "Amazing",
    objective3 : "Fire"
}
let shop = {
    name1 : "Engine",
    name2 : "Foods",
    name3 : "Garments"
}
let another = {
    word1 : "Bros",
    word2 : "Limited",
    word3 : "Hub",
}
let a = Math.random();
console.log(a);
if(a<=0.33){
console.log(objectives.objective1, shop.name3, another.word3, "\n                  OR");
console.log(objectives.objective2, shop.name2, another.word3, "\n                  OR");
console.log(objectives.objective3, shop.name2, another.word2, "\n                  OR");
console.log(objectives.objective2, shop.name1, another.word2, "\n                  OR");
console.log(objectives.objective3, shop.name1, another.word1, "\n                  OR");
console.log(objectives.objective1, shop.name2, another.word1, "\n                  OR");
console.log(objectives.objective3, shop.name3, another.word3, "\n                  OR");
console.log(objectives.objective2, shop.name3, another.word2, "\n                  OR");
console.log(objectives.objective3, shop.name2, another.word3);

}
else if(a<=0.66){
console.log(objectives.objective2, shop.name1, another.word3, "\n                  OR");
console.log(objectives.objective3, shop.name1, another.word2, "\n                  OR");
console.log(objectives.objective2, shop.name2, another.word1, "\n                  OR");
console.log(objectives.objective1, shop.name2, another.word2, "\n                  OR");
console.log(objectives.objective3, shop.name1, another.word3, "\n                  OR");
console.log(objectives.objective1, shop.name1, another.word1, "\n                  OR");
console.log(objectives.objective2, shop.name3, another.word3, "\n                  OR");
console.log(objectives.objective1, shop.name2, another.word3, "\n                  OR");
console.log(objectives.objective3, shop.name3, another.word2);
}
else{
console.log(objectives.objective3, shop.name3, another.word1, "\n                  OR");
console.log(objectives.objective2, shop.name2, another.word2, "\n                  OR");
console.log(objectives.objective1, shop.name1, another.word3, "\n                  OR");
console.log(objectives.objective3, shop.name2, another.word3, "\n                  OR");
console.log(objectives.objective1, shop.name3, another.word1, "\n                  OR");
console.log(objectives.objective2, shop.name1, another.word1, "\n                  OR");
console.log(objectives.objective3, shop.name2, another.word1, "\n                  OR");
console.log(objectives.objective1, shop.name3, another.word2, "\n                  OR");
console.log(objectives.objective2, shop.name3, another.word1);
}
*/
//             TRIAL : 2 single name.
/*
let objectives = {
    objective1 : "Crazy",
    objective2 : "Amazing",
    objective3 : "Fire"
}
let shop = {
    name1 : "Engine",
    name2 : "Foods",
    name3 : "Garments"
}
let another = {
    word1 : "Bros",
    word2 : "Limited",
    word3 : "Hub",
}

let randomNumber = Math.floor(Math.random() * 27) + 1;      //math.floor(the number of which we want the round of.) : this function is used to round off the entered value to the nearest integer. 
console.log(randomNumber);

if (randomNumber === 1) {
    console.log("the generated name is :", objectives.objective1, shop.name1, another.word1);
} else if (randomNumber === 2) {
    console.log("the generated name is :", objectives.objective1, shop.name1, another.word2);
} else if (randomNumber === 3) {
    console.log("the generated name is :", objectives.objective1, shop.name1, another.word3);
} else if (randomNumber === 4) {
    console.log("the generated name is :", objectives.objective1, shop.name2, another.word1);
} else if (randomNumber === 5) {
    console.log("the generated name is :", objectives.objective1, shop.name2, another.word2);
} else if (randomNumber === 6) {
    console.log("the generated name is :", objectives.objective1, shop.name2, another.word3);
} else if (randomNumber === 7) {
    console.log("the generated name is :", objectives.objective1, shop.name3, another.word1);
} else if (randomNumber === 8) {
    console.log("the generated name is :", objectives.objective1, shop.name3, another.word2);
} else if (randomNumber === 9) {
    console.log("the generated name is :", objectives.objective1, shop.name3, another.word3);
} else if (randomNumber === 10) {
    console.log("the generated name is :", objectives.objective2, shop.name1, another.word1);
} else if (randomNumber === 11) {
    console.log("the generated name is :", objectives.objective2, shop.name1, another.word2);
} else if (randomNumber === 12) {
    console.log("the generated name is :", objectives.objective2, shop.name1, another.word3);
} else if (randomNumber === 13) {
    console.log("the generated name is :", objectives.objective2, shop.name2, another.word1);
} else if (randomNumber === 14) {
    console.log("the generated name is :", objectives.objective2, shop.name2, another.word2);
} else if (randomNumber === 15) {
    console.log("the generated name is :", objectives.objective2, shop.name2, another.word3);
} else if (randomNumber === 16) {
    console.log("the generated name is :", objectives.objective2, shop.name3, another.word1);
} else if (randomNumber === 17) {
    console.log("the generated name is :", objectives.objective2, shop.name3, another.word2);
} else if (randomNumber === 18) {
    console.log("the generated name is :", objectives.objective2, shop.name3, another.word3);
} else if (randomNumber === 19) {
    console.log("the generated name is :", objectives.objective3, shop.name1, another.word1);
} else if (randomNumber === 20) {
    console.log("the generated name is :", objectives.objective3, shop.name1, another.word2);
} else if (randomNumber === 21) {
    console.log("the generated name is :", objectives.objective3, shop.name1, another.word3);
} else if (randomNumber === 22) {
    console.log("the generated name is :", objectives.objective3, shop.name2, another.word1);
} else if (randomNumber === 23) {
    console.log("the generated name is :", objectives.objective3, shop.name2, another.word2);
} else if (randomNumber === 24) {
    console.log("the generated name is :", objectives.objective3, shop.name2, another.word3);
} else if (randomNumber === 25) {
    console.log("the generated name is :", objectives.objective3, shop.name3, another.word1);
} else if (randomNumber === 26) {
    console.log("the generated name is :", objectives.objective3, shop.name3, another.word2);
} else if (randomNumber === 27) {
    console.log("the generated name is :", objectives.objective3, shop.name3, another.word3);
}
*/

//          COPIED.     from comments.

let a = Math.floor(Math.random()*3)+1;

let obj1 = {
    1: "Crazy",
    2: "Amazing",
    3: "Fire"
}
let b = Math.floor(Math.random()*3)+1;

let obj2 = {
    1 : "Engine",
    2 : "Foods",
    3 : "Garments"
}
let c = Math.floor(Math.random()*3)+1;

let obj3 = {
    1 : "Bros",
    2 : "Limited",
    3 : "Hub",
}

// console.log(a);
// console.log(b);
// console.log(c);

console.log(obj1[a]," ",obj2[b]," ", obj3[c]);


//              COPIED.     from harry bhai.
/*
let a = Math.random();

if(a<0.33){
    objective = "Crazy";    
}
else if(a<0.66){
    objective = "Amazing";
}
else{
    objective = "Fire";
}

let b = Math.random();

if(b<0.33){
    name1 = "Engine";    
}
else if(a<0.66){
    name1 = "Foods";
}
else{
    name1 = "Garments";
}

let c = Math.random();

if(c<0.33){
    other = "Bros";    
}
else if(c<0.66){
    other = "Limited";
}
else{
    other = "Hub";
}

console.log(` ${objective} ${name1} ${other} `);
*/