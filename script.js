document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelector('.slides'); // Container for all slides
  const dots = document.querySelectorAll('.dot'); // All dots
  const prevButton = document.querySelector('.prev'); // Previous button
  const nextButton = document.querySelector('.next'); // Next button
  const slideElements = document.querySelectorAll('.slide'); // Individual slides
  let currentIndex = 0; // Starting index
  const totalSlides = slideElements.length; // Total number of slides

  // Function to update the slider position and dot state
  function updateSlider(index) {
    slides.style.transform = `translateX(-${index * 100}%)`; // Move the slides container
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === index); // Update the active state of dots
    });
  }

  // Move to the next slide
  function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; // Loop back to the first slide if at the end
    updateSlider(currentIndex);
  }

  // Move to the previous slide
  function showPrevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Loop back to the last slide if at the beginning
    updateSlider(currentIndex);
  }

  // Add event listeners to dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index; // Set the current index to the dot's index
      updateSlider(currentIndex); // Update the slider to show the corresponding image
    });
  });

  // Add event listeners to navigation buttons
  nextButton.addEventListener('click', showNextSlide);
  prevButton.addEventListener('click', showPrevSlide);

  // Automatically move to the next slide every 5 seconds
  setInterval(showNextSlide, 5000);
});
  


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
