//         these are the examples of index.html

console.log(document.querySelector('.mainbody').innerHTML);
console.log(document.querySelector('.mainbody').innerText);
console.log(document.querySelector('.mainbody').outerHTML);
console.log(document.querySelector('.mainbody').firstElementChild.tagName);
console.log(document.querySelector('.mainbody').childNodes[1].nodeName);            // this returns the comment
console.log(document.querySelector('.mainbody').textContent);
document.getElementsByClassName('box-2')[0].removeAttribute('style')
//  document.designMode = 'on'
console.log(document.querySelector(".mainbody").lastElementChild.dataset);
let car = {
    model : '2027',
    madeIn : 'Germany',
    owner : 'yaseen',
    name : 'BMW x7'
}
console.dir(car, 'this is printed using console.dir()');
console.log(car, 'this is printed using console.log()');
let div = document.createElement('div')
document.querySelector('.mainbody').append(div)
div.innerHTML = 'i am the created div <b> By yaseen </b>'
div.setAttribute('class', 'created')
let div2 = document.createElement('div')
document.querySelector('.mainbody').append(div2)
div2.innerText = 'i am the created div <b> By yaseen </b>'
div2.setAttribute('class', 'created')
let newDiv = document.createElement('div')
document.querySelector('.mainbody').prepend(newDiv)
newDiv.innerHTML = 'this is the new div using prepend';
let newDiv2 = document.createElement('p')
document.querySelector('.mainbody').before(newDiv2)
newDiv2.innerHTML = 'this is newDiv2 inserted using before'
let newDiv3 = document.createElement('div')
document.querySelector('.mainbody').after(newDiv3)
newDiv3.innerHTML = 'this is new element inserted using the <b>after()</b>'
let newDiv4 = document.createElement('div')
document.querySelector('.mainbody').childNodes[11].replaceWith(newDiv4)
newDiv4.innerHTML = 'this is the replaced div with the original using replaceWith function.'
let beforeBegin = document.querySelector('.section-2')
beforeBegin.insertAdjacentHTML("beforebegin", `this is the position "beforebegin" inserted using insertAdjacentHTML`)
let afterBegin = document.querySelector('.section-2')
afterBegin.insertAdjacentHTML("afterbegin", "this is the inserted HTML using insertAdjacentHTML using afterbegin inside the container.")
let beforeEnd = document.querySelector('.section-2')
beforeEnd.insertAdjacentHTML("beforeend", "this is the inserted HTML using insertAdjacentHTML using beforeEnd inside the container.")
let afterEnd = document.querySelector('.section-2')
beforeEnd.insertAdjacentHTML("afterend", "this is the inserted HTML using insertAdjacentHTML using afterEnd outside the container.")
// document.querySelector('.removable').remove();
console.log(document.querySelector('.section-2').childNodes);
document.querySelector('.add').classList.add('added-class')
document.querySelector('.add').classList.remove('add')
console.log(document.querySelector('.added-class').classList);
document.querySelector('.remove').lastElementChild.classList.toggle('blue')
