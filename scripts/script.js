const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

const img = document.querySelectorAll('.gallery-container > img');

function handleEnter() {
  this.classList.add('trigger-enter');
  setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
  background.classList.add('open');

  const dropdown = this.querySelector('.dropdown');
  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();

  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left
  };

  background.style.setProperty('width', `${coords.width}px`);
  background.style.setProperty('height', `${coords.height}px`);
  background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px`);
}

function handleLeave() {
  this.classList.remove('trigger-enter', 'trigger-enter-active');
  background.classList.remove('open');
}


triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));



function zoomIn() {
  this.classList.add('active');
}

function zoomOut() {
  this.classList.remove('active');
}

img.forEach(img => img.addEventListener('mouseenter', zoomIn));
img.forEach(img => img.addEventListener('mouseleave', zoomOut));

$(document).ready(function() {
  $('.pride').mouseover(function() {
    $('.prides').fadeIn(300);
  }).mouseout(function() {
    $('.prides').fadeOut(200);
  });
});
$(document).ready(function() {
  $('.zebra').mouseover(function() {
    $('.zebras').fadeIn(300);
  }).mouseout(function() {
    $('.zebras').fadeOut(200);
  });
});
$(document).ready(function() {
  $('.overkill').mouseover(function() {
    $('.overkills').fadeIn(300);
  }).mouseout(function() {
    $('.overkills').fadeOut(200);
  });
});
$(document).ready(function() {
  $('.cream').mouseover(function() {
    $('.creams').fadeIn(300);
  }).mouseout(function() {
    $('.creams').fadeOut(200);
  });
});





function toggleClass() {
  document.querySelector('.dropDownMenu').classList.toggle('showMenu');
}

$(document).ready(function(){
  $('.carousel').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000
  });
});
