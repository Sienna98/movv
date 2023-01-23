const navEl = document.querySelector('.nav');
const header = document.querySelector('.header');

document.addEventListener('scroll', function () {
  if (window.scrollY > 1000) {
    navEl.classList.add('on');
  } else {
    navEl.classList.remove('on');
  }
})