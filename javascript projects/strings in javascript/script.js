//          string (basics)
/*
let a = "this is the string!"
let b = 'this is the string!'
console.log(a);
console.log(b);
*/          
//          length of the string property (.length)
/*
a = "Yaseen";
b = a.length;
for (const element of a) {
    console.log(element);
}
console.log(b);

*/
//              template literals example

/*
a = "yaseen";
b = 'eighteen';
console.log(`"my" name is  "${a}" and my age is "${b}"`);
*/

//              Escape sequence charecters \, \n , \t , \r etc.
//            slash  ( \ )
/*
console.log("my name is \"yaseen\" and I am 18 now! " );
console.log('my name is \'yaseen\' and I am 18 now! ');
console.log(`my name is \`yaseen\` and i am 18 now! `);
*/

//              \n : used to create a new line in the terminal.
/*
console.log("my name is \n \"Yaseen!\" ");
*/

//              \t : used to make the space (tab) in the terminal.
/*
console.log('my name is \t \'Yaseen\' ');
*/

// console.log("i am a \r division ");

// console.log(" i am a  division named div  \r names are div! ");

//              STRING PROPERTIES AND METHODS.
//          toUpperCase() &to lowercase
/*
let a = "yaseen";
b = a.toUpperCase();
console.log(b);
let c = "MERA NAAM YASEEN HAI IN CAPITAL!";
d = c.toLowerCase();
console.log(d);
*/

//              name slice
/*
a = "yaseen"
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
console.log("total = ", a.length);

b = a.slice(1,5);
console.log(b);
console.log(a.slice(2));
*/

//              (variable).replace property.
/*
let name1 = "Mohammed yaseen bhai";
let b = name1.replace("bhai", "siddiqi");
console.log(name1);
console.log(b);
*/

//              (variable).concat()
/*
let a = "mohammed";
let b = " Yaseen";
let c = a.concat(b, " siddiqi");     //this extra string will be added between them two.

console.log(c);
*/

//              (variable name).trim()
/*
let a = "             mohammed yaseen siddiqi.        "
console.log(a.trim());
*/

//              charAt(number of the podition of the charecter)
/*
let a = "Mohammed-yaseen "
console.log(a.charAt(0));
console.log(a.charAt(1));
console.log(a.charAt(2));
console.log(a.charAt(9));
console.log(a.charAt(34543));           //this will show-up as blank.
*/

//              (variable name).indexOf(name of charecter)
/*
let a = "mohammed yaseen siddiqi"
console.log(a.indexOf("see"));
console.log(a.indexOf("vd"));
*/

//              MORE FUNCTIONS ARE EXPLORABLE.

//                 CHAPTER : 4 PRACTICE SET.

//      QUESTION: 1.
/*
that will print :
4
*/

//      QUESTION: 2
/*
let a = "mera naam yaseen hai!";
console.log(a.includes("naam"))
console.log(a.startsWith("naam"))
console.log(a.endsWith("hai!"))
*/

//      QUESTION: 3
/*
let a = "NAAM";
console.log(a.toLowerCase());
*/

//      QUESTION: 4
/*
let sentence = "please give rs 1000";
console.log(sentence.slice(15));
*/

//      QUESTION: 5
/*
let a = "optical";
console.log(a);
console.log(a.replace(a.charAt(3), " this "));
*/
