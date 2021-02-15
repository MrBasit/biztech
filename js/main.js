const menu = document.querySelector('.navbar');
const toggler = document.querySelector('.header__burgermenu');
const togglerIcon = document.querySelector('.header__burgermenu a i');
var open = false;

toggler.addEventListener('click',()=>{
    menu.classList.toggle('active');
    if(!open){
        togglerIcon.className ='fas fa-times';
        open = true;
    }else{
        togglerIcon.className ='fas fa-bars';
        open = false;
    }
});

// window.onresize = function() {
//     menu.classList.toggle('active');
//     if(!open){
//         togglerIcon.className ='fas fa-times';
//         open = true;
//     }else{
//         togglerIcon.className ='fas fa-bars';
//         open = false;
//     }
// }


// prevent default
document.querySelector('body').addEventListener('click', preventDflt);
function preventDflt(e){
  var tElment = e.target.getAttribute('href');
  var tElmentP = e.target.parentElement.getAttribute('href');
  if(tElment == '#' || tElmentP == '#'){
    e.preventDefault();
  }
}