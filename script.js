// Select all menu items
const menuItems = document.querySelectorAll('.menu li a');

// Add click event listener to each menu item
menuItems.forEach(item => {
  item.addEventListener('click', function(e) {
    // Get the href attribute
    const href = item.getAttribute('href');
    
    // If it's an internal link (starts with "#"), scroll smoothly
    if (href.startsWith('#')) {
      e.preventDefault(); // Prevent default action for internal links
      
      // Get the target section from the href (like #home, #about)
      const target = document.querySelector(href);

      // Scroll smoothly to the target section
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });

    } else {
      // For external links like "gallery.html", allow navigation
      // Let the default action happen (page redirection)
      return; // Allow the link to navigate normally
    }

    // Close the menu after clicking the header
    const checkbox = document.getElementById('check');
    if (checkbox.checked) {
      checkbox.checked = false; // Uncheck the menu to close it
    }
  });
});


document.addEventListener("DOMContentLoaded", function() {
  let slider = document.querySelector('.slider .list');
  let items = document.querySelectorAll('.slider .list .item');
  let next = document.getElementById('next');
  let prev = document.getElementById('prev');
  let dots = document.querySelectorAll('.slider .dots li');

  let lengthItems = items.length - 1;
  let active = 0;

  next.onclick = function(){
      active = active + 1 <= lengthItems ? active + 1 : 0;
      reloadSlider();
  }
  prev.onclick = function(){
      active = active - 1 >= 0 ? active - 1 : lengthItems;
      reloadSlider();
  }

  let refreshInterval = setInterval(() => { next.click() }, 3000);

  function reloadSlider() {
      slider.style.transform = `translateX(-${items[active].offsetLeft}px)`;

      let last_active_dot = document.querySelector('.slider .dots li.active');
      if (last_active_dot) last_active_dot.classList.remove('active');

      dots[active].classList.add('active');

      clearInterval(refreshInterval);
      refreshInterval = setInterval(() => { next.click() }, 3000);
  }

  dots.forEach((li, key) => {
      li.addEventListener('click', () => {
          active = key;
          reloadSlider();
      })
  });

  window.onresize = function() {
      reloadSlider();
  };
});