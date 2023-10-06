let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header-3');
let scrollTop = document.querySelector('.scroll-top');

menu.addEventListener('click',()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});
window.onscroll = ()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    if(window.scrollY > 250){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
    if(window.scrollY > 250){
         scrollTop.style.display = 'initial';
    }else{
        scrollTop.style.display = 'none';
    }
    
}

let swiper = new Swiper(".home-slider", {
    pagination: {
      el: ".swiper-pagination",
      clickable:true
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction:false,
      },
      loop:true,
  });

  let countDate = new Date('july 10, 2023 00:00:00').getTime();
  
  function countDown(){
    let now = new Date().getTime();
    let gap = countDate - now;
    // let gap = now - countDate;
    // let second = 1000;
    // let minute = second * 60;
    // let hour = minute * 60;
    // let day =  hour * 24;

    // let d = Math.floor(gap / (day));
    // let h = Math.floor((gap % (day)) / (hour));
    // let m = Math.floor((gap % (hour)) / (minute));
    // let s = Math.floor((gap % (minute)) / (second));
    
    let d = Math.floor(gap / (1000*60*60*24));
    let h = Math.floor((gap % (1000*60*60*24))/(1000*60*60));
    let m = Math.floor((gap % (1000*60*60)) / (1000*60));
    let s = Math.floor((gap % (1000*60)) / 1000);


    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;

  }
  setInterval(function(){
       countDown();
  },1000);