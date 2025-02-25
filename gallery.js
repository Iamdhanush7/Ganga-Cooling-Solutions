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





const images = [
  'images/img1.png',
  'images/img2.png',
  'images/img3.png',
  'images/img4.png',
  'images/img5.png',
  'images/img6.png',
  'images/img7.png',
  'images/img8.png',
  'images/img9.png'
];

const gallery = document.getElementById('gallery');

// Duplicate images array to create an infinite loop effect
const imageList = [...images, ...images];

imageList.forEach(src => {
  const img = document.createElement('img');
  img.src = src;
  gallery.appendChild(img);
});
