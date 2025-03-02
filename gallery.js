document.addEventListener("DOMContentLoaded", function () {
  fetch("Components/navbar.html")
      .then(response => response.text())
      .then(data => {
          document.getElementById("navbar-container").innerHTML = data;
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
  'https://res.cloudinary.com/dyk23evs1/image/upload/v1740825686/img1_os9c7f.png',
  'https://res.cloudinary.com/dyk23evs1/image/upload/v1740825686/img2_wmdll1.png',
  'https://res.cloudinary.com/dyk23evs1/image/upload/v1740825687/img3_rt52nt.png',
  'https://res.cloudinary.com/dyk23evs1/image/upload/v1740825686/img4_cyyx2z.png',
  'https://res.cloudinary.com/dyk23evs1/image/upload/v1740825687/img5_po3ukg.png',
  'https://res.cloudinary.com/dyk23evs1/image/upload/v1740825687/img6_kwgxuy.png',
  'https://res.cloudinary.com/dyk23evs1/image/upload/v1740825688/img7_t77afb.png',
  'https://res.cloudinary.com/dyk23evs1/image/upload/v1740825687/img8_saytts.png',
  'https://res.cloudinary.com/dyk23evs1/image/upload/v1740825688/img9_svpufs.png'
];

const gallery = document.getElementById('gallery');
const imageList = [...images, ...images];

imageList.forEach(src => {
  const img = document.createElement('img');
  img.src = src;
  gallery.appendChild(img);
});
