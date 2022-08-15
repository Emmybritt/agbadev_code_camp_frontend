// Change navbar styles on scroll
window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 100)
});


//Show Hide faq answer

const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('open');
    const icon = faq.querySelector('.faq__icon span');
    // console.log(icon.innerHTML);
    if (icon.innerHTML === '+') {
      icon.innerHTML = '-';
    }else{
      icon.innerHTML = '+'
    }
  })
})

// Show hide menu
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
  menu.style.display = 'block'
  menuBtn.style.display = 'none'
  closeBtn.style.display = 'block'
})

closeBtn.addEventListener('click', () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "block"
})


