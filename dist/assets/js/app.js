// read more
const paragraph = document.querySelector('p');
const style = getComputedStyle(paragraph);
const elementHeight = style.height;
const heightNumber = parseInt(elementHeight);
const readMore = document.querySelector('.read-more');
const mt = document.getElementById('more-text');
let mtData = mt.getAttribute('val');
const dropdownArrow = document.querySelector('.dropdown-arrow');
const dropdownToggle = document.querySelector('.dropdown-toggle');
const coll = document.getElementsByClassName("collapsible");
var i;

let text = '';
let showMore = true;

function getValue(e){
  const mt = e.value;
  console.log(mt);

}

function createBtn(more) {
  let btn = document.createElement('a');
  btn.classList.add('active')
  btn.classList.add('read-more')
  btn.style.cursor="pointer";
  btn.addEventListener('click', myFunc);
  btn.innerText = more ? '  Read more' : '  Read less';
  return btn;
}

function myFunc() {

  if (showMore) {
    mt.innerText = text;
    mt.appendChild(createBtn(false))
    showMore = false;

  } else {
    showMore = true;
    mt.innerText = text.substring(0, mtData);
    mt.appendChild(createBtn(true))
  }
}

text = mt.innerText
mt.innerText = text.substring(0, mtData)
if (text.length > mtData)
  mt.appendChild(createBtn(true))

// read more
//dropdown
function dropdownchange() {

  if (dropdownArrow.classList.contains("show-arrow")) {
    dropdownArrow.classList.remove("show-arrow");

  } else {
    dropdownArrow.classList.add("show-arrow");
  }
}
if (dropdownToggle) {
  dropdownToggle.addEventListener('click', dropdownchange);
}

//navbar

const navbar = document.querySelectorAll('.nav');
const navbarToggle = document.querySelector('.header__toggle-inner');

function navOpen() {
  navbar.forEach(nav => nav.classList.toggle('navbar-show'));
}
navbarToggle.addEventListener('click', navOpen);

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}
$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".dropdown-menu li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});