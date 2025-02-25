document.addEventListener("DOMContentLoaded", function () {
  fetch("Components/navbar.html")
      .then(response => response.text())
      .then(data => {
          document.getElementById("navbar-container").innerHTML = data;

          // Add smooth scrolling after navbar is loaded
          setupMenu();
      })
      .catch(error => console.error("Error loading navbar:", error));
});

function setupMenu() {
  const menuItems = document.querySelectorAll('.menu li a');

  menuItems.forEach(item => {
      item.addEventListener('click', function(e) {
          const href = item.getAttribute('href');

          if (href.startsWith('#')) {
              e.preventDefault();
              const target = document.querySelector(href);
              window.scrollTo({
                  top: target.offsetTop,
                  behavior: 'smooth'
              });
          }

          const checkbox = document.getElementById('check');
          if (checkbox) checkbox.checked = false;
      });
  });
}

// Function to animate counting numbers
function animateCounter(id, start, end, duration) {
  const element = document.getElementById(id);
  const range = end - start;
  const increment = Math.ceil(range / (duration / 10)); // Increment per step
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
      current = end; // Ensure it ends exactly at `end`
      clearInterval(timer);
    }
    element.textContent = current;
  }, 10); // Update every 10ms for smoother animation
}

//Hero page
// Trigger the counters
window.onload = () => {
  animateCounter("customerCount", 0, 999, 2000); // 4 seconds
  animateCounter("installCount", 0, 499, 1000);  // 3 seconds
};

const readMore = document.querySelector('.read-more');
const expandableText = document.querySelector('.expandable-text');

//About us section
// Toggle Read More / Read Less functionality
readMore.addEventListener('click', () => {
  expandableText.classList.toggle('expanded');
  if (expandableText.classList.contains('expanded')) {
    readMore.textContent = 'Read Less';
  } else {
    readMore.textContent = 'Read More';
  }
});

  //Products section
  // Redirect to product.html with category query parameter
  function redirectToCategory(category) {
    window.location.href = `products.html?category=${category}`;
  }

  function redirect(page) {
    window.location.href = page;
  }

  //Services section
  document.querySelectorAll('.read-more-btn').forEach((button, index) => {
    button.addEventListener('click', function() {
      const paragraph = this.previousElementSibling; // The paragraph element before the button
      paragraph.classList.toggle('expanded');
      
      // Toggle the button text between "Read More" and "Read Less"
      if (paragraph.classList.contains('expanded')) {
        this.textContent = 'Read Less';
      } else {
        this.textContent = 'Read More';
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
