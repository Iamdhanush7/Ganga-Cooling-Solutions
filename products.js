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


// Product Data
const productData = {
  ac: [
    { name: "Split Air Conditioner", description: "A split air conditioner is a type of cooling system that comprises two separate units: the indoor unit and the outdoor unit.", image: "./images/ac1.png" },
    { name: "Cassette Air Conditioner", description: "A cassette air conditioner is a type of air conditioning system designed for ceiling installation. Its unique design allows it to be seamlessly integrated into the ceiling, providing efficient and even cooling for larger spaces.", image: "./images/ac2.png" },
    { name: "Ductable Air Conditioner", description: "A ductable air conditioner is a centralized cooling system designed to distribute air through a network of ducts installed in ceilings or walls.", image: "./images/ac3.png" },
    { name: "VRV AC", description: "VRV, which stands for Variable Refrigerant Volume, is a type of heating, ventilation, and air conditioning (HVAC) technology developed by Daikin Industries. VRV systems are known for their energy efficiency, flexibility, and the ability to provide individualized climate control in different zones or rooms within a building.", image: "./images/ac4.png" },
    { name: "VRF AC", description: "Variable Refrigerant Flow (VRF) is an advanced air conditioning technology that provides efficient and flexible heating, ventilation, and air conditioning (HVAC) solutions for both commercial and residential buildings.", image: "./images/ac5.png" },
    { name: "AC Chiller", description: "An air conditioning (AC) chiller is a type of HVAC (heating, ventilation, and air conditioning) system that is commonly used to cool large buildings, industrial facilities, data centers, and other commercial or institutional spaces.", image: "./images/ac6.png" },
    { name: "Cold Room", description: "A cold room AC, also known as a walk-in cooler or freezer air conditioning system, is designed to control and maintain low temperatures within a cold storage space. These spaces are commonly found in commercial settings such as restaurants, supermarkets, food processing plants, and pharmaceutical facilities.", image: "./images/ac7.png" },
  ],
  "water-purifier": [
    { name: "Domestic Water Purifiation", description: "For domestic water purification, various types of water purifiers are available to cater to different needs and water quality issues at homes.", image: "./images/wf1.png" },
    { name: "Commercial Water Purification", description: "Commercial water purification systems are designed to meet the higher volume and quality demands of businesses, industries, and other large-scale applications.", image: "./images/wf2.png" },
    { name: "Water Softners", description: "A water softener removes minerals that create water hardness, one of the most common water quality problems many homeowners encounter. Hard water destroys appliances, leaves filmy soap scum, and dries out hair and skin.", image: "./images/wf3.png" },
  ],
  "solar-pumps": [
    { name: "Domestic Solar", description: "For domestic Solar Heat Pumps, various types of water purifiers are available to cater to different needs and water quality issues at homes.", image: "./images/shp1.png" },
    { name: "Commercial Solar", description: "Commercial Solar Heat Pumps systems are designed to meet the higher volume and quality demands of businesses, industries, and other large-scale applications.", image: "./images/shp2.png" },
    { name: "Heat Pumps", description: "Heat pumps offer an energy-efficient alternative to furnaces and air conditioners for all climates. Heat pumps use electricity to transfer heat, making the cool space cooler and the warm space warmer.", image: "./images/shp3.png" },
  ],
  ups: [
    { name: "Online UPS", description: "Online UPS takes the incoming AC mains supply and converts it to DC which feeds the battery and the load via the inverter. If the mains supply fails, then the batteries feed the load with no interruption.", image: "./images/ups1.png" },
    { name: "Offline UPS", description: "Offline UPS are the most basic models and designed for small, non-critical applications that require protection against momentary loss of power.", image: "./images/ups2.png" },
    { name: "Solar UPS", description: "Solar UPS converts solar energy generated in DC form into usable home energy in AC form, while storing it in batteries for use at night or during power outages.", image: "./images/ups3.png" },
  ],
};

// Render Products
function renderProducts(category) {
  const productContainer = document.getElementById("products");
  productContainer.innerHTML = ""; // Clear the container

  productData[category].forEach((product, index) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    // Add a delay to each card
    setTimeout(() => {
      productCard.classList.add("morph-in");
    }, index * 150); // Stagger animation for each card

    const truncatedDescription = product.description.slice(0, 200); // Truncate description
    const fullDescription = product.description; // Full description

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p class="product-description">${truncatedDescription}... <span class="read-more" onclick="toggleDescription(this, '${fullDescription}', '${truncatedDescription}')">Read More</span></p>
    `;

    productContainer.appendChild(productCard);
  });
}

// Toggle Description between Read More and Read Less
function toggleDescription(element, fullDescription, truncatedDescription) {
  const descriptionElement = element.parentElement;

  if (descriptionElement.classList.contains('expanded')) {
    descriptionElement.classList.remove('expanded');
    descriptionElement.innerHTML = `${truncatedDescription}... <span class="read-more" onclick="toggleDescription(this, '${fullDescription}', '${truncatedDescription}')">Read More</span>`;
  } else {
    descriptionElement.classList.add('expanded');
    descriptionElement.innerHTML = `${fullDescription} <span class="read-more" onclick="toggleDescription(this, '${fullDescription}', '${truncatedDescription}')">Read Less</span>`;
  }
}

// Handle Category Clicks
function handleCategoryClick(category, element) {
  document.querySelectorAll(".category").forEach((btn) => btn.classList.remove("active"));
  element.classList.add("active");

  const productContainer = document.getElementById("products");
  productContainer.classList.add("morph-out");

  setTimeout(() => {
    renderProducts(category);
    productContainer.classList.remove("morph-out");
    productContainer.classList.add("morph-in");

    // Remove the fade-in class after the animation
    setTimeout(() => productContainer.classList.remove("morph-in"), 800);
  }, 500); // Match the transition time in CSS
}

// Initial Render for AC Category
renderProducts("ac");