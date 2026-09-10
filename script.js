window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 80) {
    header.classList.add('scrolled');
  } else if (window.scrollY < 40) {
    header.classList.remove('scrolled');
  }
});
