let first = document.querySelector(".first");
let title = document.querySelector(".title-row");
let col = document.querySelector(".col");
let second = document.querySelector(".second");
let third = document.querySelector(".third");

let about = document.querySelector(".about");
about.addEventListener('click', function() {
  first.style.display = 'none';
  second.style.display = 'block';
  third.style.display = 'none';

});

let idea = document.querySelector(".idea");
idea.addEventListener('click', function() {
  third.style.display = 'block';
  second.style.display = 'none';
  first.style.display = 'none';
  
  

});

let brand = document.querySelector(".brand");
brand.addEventListener('click', function() {
  first.style.display = 'block';
  second.style.display = 'none';
  third.style.display = 'none';

});