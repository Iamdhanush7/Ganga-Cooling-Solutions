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
