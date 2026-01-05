const home=document.querySelector('#home');
const howItWorks=document.querySelector('#how-it-works');
const testimonials=document.querySelector('#testimonials');

const first=document.querySelector('.zeroeth-scroll');
const second=document.querySelector('.about');
const third=document.querySelector('.testimonials');

function scrollToSection(section) {
  const top = section.offsetTop; 
  const navbarHeight = document.querySelector('.navbar').offsetHeight;

  window.scrollTo({
    top: top - navbarHeight,
    behavior: 'smooth'
  });
}

home.addEventListener('click',()=>{
  scrollToSection(first);
});

howItWorks.addEventListener('click',()=>{
  scrollToSection(second);
});

testimonials.addEventListener('click',()=>{
  scrollToSection(third);
});

