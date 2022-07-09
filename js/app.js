$(document).ready(function(){



let hamberger=document.querySelector('.hamberger');
let times=document.querySelector('.times');
var mobileNav=document.querySelector('.mobile-nav');


hamberger.addEventListener('click',function(){
    mobileNav.classList.add('open');
});

times.addEventListener('click',function(){
    mobileNav.classList.remove('open');
});

$('.mobile-nav').click(function(){
    $('.mobile-nav').removeClass('open');
}); 

});