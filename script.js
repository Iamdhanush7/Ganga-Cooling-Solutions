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

const logos = [
  "images/velca.png", "images/dhl.png", "images/ifb.png", "images/CTCI.jpeg",
  "images/prestige.png", "images/shobha.png", "images/godrej.png", "images/ozone.png",
  "images/h1.png", "images/h2.png", "images/h3.png", "images/h4.png",
  "images/apollo.png", "images/fortis.png", "images/narayana.png", "images/max.png"
];

const titles = [
  "Velca", "DHL", "IFB", "CTCI",
  "Prestige", "Shobha", "Godrej", "Ozone",
  "Breeze Hotel", "Sattva", "Zion", "Bridge",
  "Apollo", "Fortis", "Narayana", "Max"
];

const descriptions = [
  "Velca is a leader in modern cooling solutions, delivering efficiency and innovation.",
  "DHL provides world-class logistics and supply chain services globally.", 
  "IFB revolutionizes home appliances with cutting-edge technology.", 
  "CTCI specializes in engineering and project management.",
  "Prestige is known for premium real estate development and iconic projects.", 
  "Shobha is renowned for its luxury homes and design excellence.", 
  "Godrej Properties blends innovation and sustainability in real estate.", 
  "Ozone Group delivers future-ready homes with cutting-edge infrastructure.",
  "Breeze Hotel offers unparalleled hospitality and comfort.", 
  "Sattva Hotels deliver luxurious experiences in serene environments.", 
  "Zion Hotels offers comfort and luxury for memorable stays.", 
  "Bridge Hotels combine elegance with state-of-the-art facilities.",
  "Apollo is a pioneer in healthcare, offering world-class medical services.", 
  "Fortis Healthcare excels in quality healthcare and advanced technology.", 
  "Narayana Health delivers affordable and high-quality medical care.", 
  "Max Healthcare provides integrated healthcare services with excellence."
];

const categories = ["Corporate Partners", "Real Estate", "Hotels", "Healthcare"];

let index = 0;
let interval;

const companyCards = document.querySelectorAll(".company-card");
const categoryTitle = document.querySelector(".clients h3");

function changeContent() {
  index = (index + 1) % 4; // Cycle through 4 slides

  for (let i = 0; i < companyCards.length; i++) {
      let newIndex = index * 4 + i;

      companyCards[i].querySelector(".logo").src = logos[newIndex];
      companyCards[i].querySelector(".logo").alt = titles[newIndex];
      companyCards[i].querySelector(".title").innerText = titles[newIndex];
      companyCards[i].querySelector(".description").innerText = descriptions[newIndex];
  }

  categoryTitle.innerText = categories[index]; // Change <h3> title dynamically
  updateDots();
}

function updateDots() {
  document.querySelectorAll(".dot").forEach((dot, dotIndex) => {
      dot.classList.toggle("active", dotIndex === index);
  });
}

function startSlider() {
  interval = setInterval(changeContent, 3000); // Change every 3 seconds
}

function stopSlider() {
  clearInterval(interval);
}

companyCards.forEach(card => {
  card.addEventListener("mouseenter", stopSlider);
  card.addEventListener("mouseleave", startSlider);
});

document.querySelectorAll(".dot").forEach((dot, dotIndex) => {
  dot.addEventListener("click", () => {
      index = dotIndex - 1;
      changeContent();
      stopSlider();
      setTimeout(startSlider, 5000);
  });
});

startSlider();
