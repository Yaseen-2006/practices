// arrays and accessing the values of the arrays.
/*
let arr = [1,2,3,4,5,6]
console.log(arr);

console.log(arr[2]);
console.log(arr[4]);
console.log(arr[6]);                //this will print undefined because there is not any value at that position.
console.log(arr[0]);

                // finding the length of the arrays.
console.log(arr.length);

                // changing the values of arrays.
arr[3] = 456;
console.log(arr[3]);
// after changing:
console.log(arr);

arr[2] = "yaseen!"
console.log(arr[2]);
console.log(arr);

arr[5] = !true
console.log(arr[5]);
console.log(arr);

arr[5] = arr.length == 5            // this checks the condition. this will be false
console.log(arr[5]);
console.log(arr);

arr[5] = arr.length > 5            // this checks the condition. this will be true.
console.log(arr[5]);
console.log(arr);

                            // array methods.
//      toString()
console.log(arr.toString());

//      join()
console.log(arr.join("\t"));
console.log(arr.join(" and "));
console.log(arr.join(arr.length>4 ?("_"):(",")));

//      pop()
console.log(arr.pop())

//      push()
console.log(arr.length);
arr.push("pagal")
console.log(arr);
console.log(arr.length);

//      shift()
console.log(arr);
console.log(arr.shift());

//      unshift()
console.log(arr.length);
arr.unshift("pagal")
console.log(arr);
console.log(arr.length);

//      delete
console.log(arr);
delete arr[4]
console.log(arr);

//      concat()
a1 = [1,2,3]
a2 = [4,5,6]
a3 = [7,8,9]

console.log(a2.concat(a1,a3));
console.log(a1.concat(a2,a3));
console.log(a3.reverse().concat(a2.reverse(),a1.reverse()));    //ulti ginti

//      sort()
a4 = ["b","e","a","d","c","f","g"]
console.log(a4.sort());
a5 = [3,4,5,2,1,6,8,7,9,0]
console.log(a5.sort());

//      splice()
console.log(a4);
c = a4.splice(2,3,"yaseen","billionaire")
console.log(c, a4);

//      slice()
console.log(a4);
console.log(a4.slice(4));

//      reverse()
console.log(a5.reverse())

*/

// looping through arrays in javascript.
//      ForEach loop
/*
arr = ["one", "two", "three","four","five"]
arr.forEach((value, index, arr) => {
    console.log("this value is: ", value, index, arr )
});

//      forOf loop 
for (const iterator of arr) {
    console.log(iterator);
}

*/
/*
let arr = [1,2,3,4,5,6,7,8,9,11]
let newArr = []
for (const element of arr) {
    newArr.push(element**2);
}
console.log(newArr);
*/

//      map()

// let arr = [2,4,6,8,10,12]
/*
let newArr = arr.map(e=>{return e**2})
console.log(newArr);
*/
//  same thing can be done using the ForOf loop 
/*
let newArr = []
for (const element of arr) {
    newArr.push(element**2);
}
console.log(newArr);
*/

//      filter()

/*
arr = [1,2,3,4,5,6,7,8,9,11,33,44,33,45]
let newArr = arr.filter(e=>{ return e>7})
console.log(newArr);
*/

//   same thing can be done by making the universal function.
/*
const greaterthanseven = arr.filter(e=>{
    return e>7
})

arr = [1,2,3,4,5,6,7,8,9,11,33,44,33,45]
console.log(greaterthanseven);
*/

/*
arr = [23,53,456,43,56,435,7,56,567,45,3,65,4]
const add = (a,b) => {
    return a+b
}
console.log(arr.reduce(add));     // shows the addition of all the array elements.
*/

//      EXAMPLES
/*
a = [2, 1, 3, 6, 4, 5, 7, 9, 8, 10, 12, 11, 15, 11]
a2 = [21, 23, 22, 25, 24, 26, 29, 28, 27]
a3 = ["n", "a", "m", "e"]
*/
// console.log(a.length);
// a[2] = 23;
// console.log(a);
// console.log(a.toString());
// console.log(a.join("._."));
// console.log(a.pop(8));
// a.push("name")
// console.log(a.toString());
// console.log(a.shift());
// a.unshift("new")
// console.log(a.toString());
// delete a[5]
// console.log(a);
// console.log(a.concat(b,c));
// console.log(a.sort());
// a.splice(3,5,"yaseen","dolars","rupees","euros")
// console.log(a);
// console.log(a.slice(3,8));
// console.log(b.reverse());

//      loopings

/*
a.forEach((element,index,arr) => {
    console.log(element,index,arr.length);
    
});
*/
/*
for (const element of a) {
    console.log(element);
    
}
*/
/*
b = a.map(e => {
    return e**3
})
console.log(b);
*/
/*
b = a.concat(a2)
c = b.filter(e=> {return e%2==0})
console.log(c);
*/
/*
b = a.reduce((a, b) => { while (b < 100) { return a + b } })
    console.log(b);
*/

//              PRACTICE SET
//      QUESTION 1
// let a = [3,4,5]
// let b = prompt("enter the ammount of numbers you want to add :")
// let c = undefined
// let d = undefined
// for(c=1; c<=b; c++){
//     d = prompt("enter the number:")
//     a.push(d)
// }
// console.log(a.toString());

//      QUESTION 2

// let a = []
// let b = prompt("enter the ammount of array elements you want to add in the array:");
// let c = undefined
// let d = undefined
// for(c=1;c<=b;c++){
//     d = prompt("enter the array lements and press '0' to terminate:")
//     a.push(d)
//     if (d==0) {
//         break;
//     }
// }
// a.pop()
// console.log(a);


//      QUESTION 3

// let a = [23,4,5,5,6,4,10,30,23,60,20,340,450,8,90,30]
// let b = a.filter(e=>{
//     return e%10==0
// })
// console.log(b);

//      QUESTION 4

// let a = [2,4,3,4,6,7,1,9,8,10]
// let b = a.map(e=>{
//     return e**2
// })
// console.log(b);

//      QUESTION 5


