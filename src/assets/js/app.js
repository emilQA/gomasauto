// read more

const readMore = document.querySelector('.read-more');
const mt = document.getElementById('more-text');
// let mtData = mt.getAttribute('val');
const dropdownArrow = document.querySelector('.dropdown-arrow');
const dropdownToggle = document.querySelector('.dropdown-toggle');
const coll = document.getElementsByClassName("collapsible");
let i;

//carousel
const sliderArea = document.getElementById('slider-area')
const slider_content = document.querySelectorAll('.slider-content')
const slideContainer = document.querySelector('.slideContainer')
const rightArr = document.getElementById('right-arr')
const leftArr = document.getElementById('left-arr')
sliderArea.scrollTo(sliderArea.scrollWidth,0)
let sliderAreaChildrens = sliderArea.childNodes

let text = '';
let showMore = true;


//carousel

if(slider_content.length > 3){
  sliderArea.style.maxWidth = '1200px'
  slideContainer.style.maxWidth = '1297px'
  // if(screen.width > 768){
  //     sliderArea.style.maxWidth = '1200px'
  //     slideContainer.style.maxWidth = '1297px'
  // } else {
  //     sliderArea.style.maxWidth = '768px'
  //     // slideContainer.style.maxWidth = '1297px'
  // }
  // sliderArea.style.backgroundColor = 'red'
} else {
  sliderArea.style.maxWidth = '850px'
  slideContainer.style.maxWidth = '947px'
  // sliderArea.style.backgroundColor = 'blue'
}

function createSlideContentPre(x){
  const slideDiv = document.createElement('div')
  slideDiv.classList.add('slider-content')
  slideDiv.setAttribute('style', 'min-width: 0px;')
  const slideImg = document.createElement('img')
  slideImg.src = x

  slideDiv.appendChild(slideImg)
  sliderArea.prepend(slideDiv)
}

function createSlideContentAppe(x){
  const slideDiv = document.createElement('div')
  slideDiv.classList.add('slider-content')
  slideDiv.setAttribute('style', 'min-width: 0px; transform: translateX(300px);')
  const slideImg = document.createElement('img')
  slideImg.setAttribute('style', 'width: 100%;')
  slideImg.src = x

  slideDiv.appendChild(slideImg)
  sliderArea.appendChild(slideDiv)
}


rightArr.addEventListener('click', () => {
  // console.log('right')
  sliderArea.scrollTo(400,0)

  rightArr.setAttribute('style', 'pointer-events: none;')

  sliderArea.children[sliderArea.children.length - 2].setAttribute('style', ' position: relative; z-index: 1; object-fit:cover; height: 300px; margin-right: 0;')
  sliderArea.children[sliderArea.children.length - 2].children[0].setAttribute('style', 'filter: blur(0px); width: 100%; ')

  sliderArea.children[sliderArea.children.length - 1].setAttribute('style', ' position: relative; z-index: 0; height: 265px; min-width: 0px !important; margin:0px;')
  sliderArea.children[sliderArea.children.length - 1].children[0].setAttribute('style', 'filter: blur(10px) grayscale(100); width: 80%; gap: 0px; margin:0;')


  setTimeout(() => {
    sliderArea.children[sliderArea.children.length - 1].remove()
    rightArr.setAttribute('style', 'pointer-events: all;')
  }, 300);


  createSlideContentPre(sliderArea.children[sliderArea.children.length - 1].children[0].src)
  setTimeout(() => {
    sliderArea.children[0].setAttribute('style', 'min-width: 350px;')
  }, 10);
  sliderArea.scrollTo(sliderArea.scrollWidth,0)
})


leftArr.addEventListener('click', () => {

  sliderArea.children[sliderArea.children.length - 1].setAttribute('style', 'height: 265px; min-width: 350px; ')
  sliderArea.children[sliderArea.children.length - 1].children[0].setAttribute('style', 'filter: blur(10px) grayscale(100); width: 320;')
  createSlideContentAppe(sliderArea.children[0].children[0].src)

  setTimeout(() => {
    sliderArea.children[sliderArea.children.length - 1].setAttribute('style', 'min-width: 350px; height:300px; object-fit:cover; margin-right: 0;')
    setTimeout(() => {
      sliderArea.scrollTo(sliderArea.scrollWidth,0)
    }, );
  }, 10);
  sliderArea.children[0].remove()
})




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
    mt.innerText = text.substring(0, 1250);
    mt.appendChild(createBtn(true))
  }
}

text = mt.innerText
mt.innerText = text.substring(0, 1250)
if (text.length > 1250)
  mt.appendChild(createBtn(true))

// read more
