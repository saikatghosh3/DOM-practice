// get element by id related task



// var headerTitle = document.getElementById("header-title");
// headerTitle.textContent = "new courses";

// headerTitle.innerHTML = '<h1> hello</h1>';
// // with the help of innerhtml we can change any tags


// var header = document.getElementById('header');
// header.style.borderBottom = '5px solid black';



// get element by classname related task
// var items = document.getElementsByClassName("list-item");
// console.log(items);
// items[0].textContent = 'Animation';
// items[1].textContent = 'Motion Graphics';

// for(var i = 0; i<items.length; i++){
//     items[i].style.backgroundColor = 'yellow';

// }



  // querry selection method
  // don't need to specify whether it is tag, id or class
//   if class we will give . and, if id will use # 
var headline = document.querySelector('#tagline');
headline.style. color = 'yellow';

// quarySelector only catch first item if we need to select multiple item we'll use querySelector all
 
var items = document.querySelectorAll('.list-item');
items[4].style.color = 'red';

// another way for above example
// var items = document.querySelector("li:nth-child(1)");
// items.style.color = 'red';
// items.style.backgroundColor = 'yellow';


// var input = document.querySelector('input');
// input.value = "Enter your name";

// even odd  example
var odd = document.querySelectorAll('li:nth-child(odd');
for(var i = 0; i<odd.length; i++ ){
    odd[i].style.backgroundColor = '#ce5e5e';
}
var even = document.querySelectorAll('li:nth-child(even)');
 for(var i =0; i<even.length; i++){
    even[i].style.backgroundColor = 'red';
 }

// For the first element
var button = document.querySelector('input[type ="submit"]');
button.style.backgroundColor = 'red';
button.style.color = 'yellow';
button.value = 'send';

