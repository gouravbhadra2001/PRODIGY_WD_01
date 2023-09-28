const mediaQuery = window.matchMedia('(max-width: 650px)');
const navbar = document.getElementById('navbar');
const icons = document.querySelectorAll('.icon');
const menu = document.querySelector('#navbar menu');
const menumob = document.querySelector('.menu-mobile')
const hamburger = document.querySelector('.hamburger');
const hamburgerBtn = document.querySelector('.hamburger-container')

function handleMediaQueryChange(event) {
  if (event.matches) {

    navbar.style.background = 'none';
  } else {

    if (window.scrollY > 100) {
      navbar.style.background = 'linear-gradient(to right, #190a056c, rgba(238, 4, 86, 0.772))';
    } else {
      navbar.style.background = 'linear-gradient(to right, #870000, #190a05)';
    }
  }
}


mediaQuery.addEventListener('change', handleMediaQueryChange);


handleMediaQueryChange(mediaQuery);

window.addEventListener('scroll', () => {
  handleMediaQueryChange(mediaQuery);
});


icons.forEach(icon => {
  icon.addEventListener('click', () => {

    hamburger.classList.toggle("open");

  });
});

hamburgerBtn.addEventListener('click', () => {
  if (menumob.style.display === "flex") {
    menumob.style.display = "none";
    menumob.style.transform = "translateX(90%)"

  } else {
    menumob.style.display = "flex";
    menumob.style.flexDirection = "column";
    menumob.style.transform = "translateX(0%)"
  }
})







const viewportWidth = window.innerWidth || document.documentElement.clientWidth;


document.documentElement.style.setProperty('--screen', `${viewportWidth}px`);

