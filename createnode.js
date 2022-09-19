let itemlist=document.querySelector('#items');
// console.log(itemlist);
// itemlist.parentNode.style.backgroundColor='red';
// console.log(itemlist.childNodes)
// console.log(itemlist.children);
// itemlist.children[1].style.backgroundColor='yellow';

// //first element child
// console.log(itemlist.firstElementChild);
// itemlist.firstElementChild.textContent='hello1'

//last element child
// console.log(itemlist.lastElementChild);
// itemlist.lastElementChild.textContent='hello4'

//next sibling
// console.log(itemlist.nextSibling)
//next element sibling
// console.log(itemlist.nextElmentSibling)

//previous sibling
// console.log(itemlist.previousSibling)
// console.log(itemlist.previousElementSibling)
// itemlist.previousElementSibling.style.color='green'

//crerate element
// let ndiv= document.createElement('div')
// // console.log(ndiv)
// //add claSS
// ndiv.className='hello';
// //add id
// ndiv.id='hello2';
// //add atribute
//  ndiv.setAttribute('titel','hello div');


// //create text node
// ndivtext=document.createTextNode('hello world');

// //add text to div
// ndiv.appendChild(ndivtext);
// let container = document.querySelector('header .container');
// let h1=document.querySelector('header h1')
// console.log(ndiv)
// container.insertBefore(ndiv , h1);

let addelm= document.getElementById('items');

let mynewli=document.createElement('li');
mynewli.textContent='hello world';
console.log(mynewli.textContent)
let li=document.querySelector('ul li')
addelm.insertBefore(mynewli,li)




