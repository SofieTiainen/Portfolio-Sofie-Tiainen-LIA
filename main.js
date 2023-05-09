function displayHeader() {
    let delayElems = document.querySelectorAll(".delay");
    delayElems.forEach(elem => {
      elem.classList.remove("hidden");
      elem.classList.add('fade-in', 'text-color-fade-in');
      elem.style.opacity = '1';
    });
}
  
setTimeout(displayHeader, 500);

function scrollToMain() {
    const mainContent = document.getElementById('main-content');
    mainContent.scrollIntoView({ behavior: 'smooth' });
}

window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 300) {
    header.classList.add('fade-out');
  } else {
    header.classList.remove('fade-out');
  }
});
