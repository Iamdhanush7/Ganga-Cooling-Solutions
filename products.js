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




// Product Data
const productData = {
  "ac": [
    { name: "Split Air Conditioner", description: "A split air conditioner is a type of cooling system that comprises two separate units: the indoor unit and the outdoor unit.", image: "https://res.cloudinary.com/dyk23evs1/image/upload/v1740825675/ac1_hk0ycd.png" },
    { name: "Cassette Air Conditioner", description: "A cassette air conditioner is a type of air conditioning system designed for ceiling installation. Its unique design allows it to be seamlessly integrated into the ceiling, providing efficient and even cooling for larger spaces.", image: "https://res.cloudinary.com/dyk23evs1/image/upload/v1740825676/ac2_jwbhey.png" },
    { name: "Ductable Air Conditioner", description: "A ductable air conditioner is a centralized cooling system designed to distribute air through a network of ducts installed in ceilings or walls.", image: "https://res.cloudinary.com/dyk23evs1/image/upload/v1740825676/ac3_gvxop2.png" },
    { name: "VRV AC", description: "VRV, which stands for Variable Refrigerant Volume, is a type of heating, ventilation, and air conditioning (HVAC) technology developed by Daikin Industries. VRV systems are known for their energy efficiency, flexibility, and the ability to provide individualized climate control in different zones or rooms within a building.", image: "https://res.cloudinary.com/dyk23evs1/image/upload/v1740825676/ac4_wkkf2j.png" },
    { name: "VRF AC", description: "Variable Refrigerant Flow (VRF) is an advanced air conditioning technology that provides efficient and flexible heating, ventilation, and air conditioning (HVAC) solutions for both commercial and residential buildings.", image: "https://res.cloudinary.com/dyk23evs1/image/upload/v1740825677/ac5_rrtbs9.png" },
    { name: "AC Chiller", description: "An air conditioning (AC) chiller is a type of HVAC (heating, ventilation, and air conditioning) system that is commonly used to cool large buildings, industrial facilities, data centers, and other commercial or institutional spaces.", image: "https://res.cloudinary.com/dyk23evs1/image/upload/v1740825678/ac6_rzvtj6.png" },
    { name: "Cold Room", description: "A cold room AC, also known as a walk-in cooler or freezer air conditioning system, is designed to control and maintain low temperatures within a cold storage space. These spaces are commonly found in commercial settings such as restaurants, supermarkets, food processing plants, and pharmaceutical facilities.", image: "https://res.cloudinary.com/dyk23evs1/image/upload/v1740825678/ac7_pwaz0z.png" },
  ],
  "water-purifier": [
    { name: "Domestic Water Purifiation", description: "For domestic water purification, various types of water purifiers are available to cater to different needs and water quality issues at homes.", image: "https://res.cloudinary.com/dyk23evs1/image/upload/v1740825680/wf1_rfzirk.png" },
    { name: "Commercial Water Purification", description: "Commercial water purification systems are designed to meet the higher volume and quality demands of businesses, industries, and other large-scale applications.", image: "https://res.cloudinary.com/dyk23evs1/image/upload/v1740825678/wf2_ol09ei.png" },
    { name: "Water Softners", description: "A water softener removes minerals that create water hardness, one of the most common water quality problems many homeowners encounter. Hard water destroys appliances, leaves filmy soap scum, and dries out hair and skin.", image: "https://res.cloudinary.com/dyk23evs1/image/upload/v1740825678/wf3_eousjf.png" },
  ],
  "solar-pumps": [
    { name: "Domestic Solar", description: "For domestic Solar Heat Pumps, various types of water purifiers are available to cater to different needs and water quality issues at homes.", image: "https://res.cloudinary.com/dyk23evs1/image/upload/v1740825822/shp1_frswyw.png" },
    { name: "Commercial Solar", description: "Commercial Solar Heat Pumps systems are designed to meet the higher volume and quality demands of businesses, industries, and other large-scale applications.", image: "https://res.cloudinary.com/dyk23evs1/image/upload/v1740825674/shp2_jtnaix.png" },
    { name: "Heat Pumps", description: "Heat pumps offer an energy-efficient alternative to furnaces and air conditioners for all climates. Heat pumps use electricity to transfer heat, making the cool space cooler and the warm space warmer.", image: "https://res.cloudinary.com/dyk23evs1/image/upload/v1740825675/shp3_jobd25.png" },
  ],
  "ups": [
    { name: "Online UPS", description: "Online UPS takes the incoming AC mains supply and converts it to DC which feeds the battery and the load via the inverter. If the mains supply fails, then the batteries feed the load with no interruption.", image: "https://res.cloudinary.com/dyk23evs1/image/upload/v1740825675/ups1_tpmbdl.png" },
    { name: "Offline UPS", description: "Offline UPS are the most basic models and designed for small, non-critical applications that require protection against momentary loss of power.", image: "https://res.cloudinary.com/dyk23evs1/image/upload/v1740825677/ups2_ei7k59.png" },
    { name: "Solar UPS", description: "Solar UPS converts solar energy generated in DC form into usable home energy in AC form, while storing it in batteries for use at night or during power outages.", image: "https://res.cloudinary.com/dyk23evs1/image/upload/v1740825677/ups3_rpdmgw.png" },
  ],
};

// Map product names to their respective page URLs
const productPageUrls = {
  "Split Air Conditioner": "AC/ac1.html",
  "Cassette Air Conditioner": "AC/ac2.html",
  "Ductable Air Conditioner": "AC/ac3.html",
  "VRV AC": "AC/ac4.html",
  "VRF AC": "AC/ac5.html",
  "AC Chiller": "AC/ac6.html",
  "Cold Room": "AC/ac7.html",
  "Domestic Water Purifiation": "WF/wf1.html",
  "Commercial Water Purification": "WF/wf2.html",
  "Water Softners": "WF/wf3.html",
  "Domestic Solar": "SHP/shp1.html",
  "Commercial Solar": "SHP/shp2.html",
  "Heat Pumps": "SHP/shp3.html",
  "Online UPS": "UPS/ups.html",
  "Offline UPS": "UPS/ups1.html",
  "Solar UPS": "UPS/ups3.html",
};

// Render products for a specific category
function renderProducts(category) {
  const productContainer = document.getElementById("products");
  productContainer.innerHTML = ""; // Clear existing products

  productData[category].forEach((product, index) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    setTimeout(() => {
      productCard.classList.add("morph-in");
    }, index * 150);
    const fullDescription = product.description;
    const truncatedDescription =
      fullDescription.length > 100
        ? `${fullDescription.slice(0, 100)}...`
        : fullDescription;

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p class="product-description" data-full="${fullDescription}" data-truncated="${truncatedDescription}">
        ${truncatedDescription}
        ${fullDescription.length > 100 ? '<span class="read-more">Read More</span>' : ""}
      </p>
      <button class="view-button">View</button>
    `;

    productContainer.appendChild(productCard);
  });
  attachProductEventListeners();
}

function attachProductEventListeners() {
  const readMoreElements = document.querySelectorAll(".read-more");
  readMoreElements.forEach((element) => {
    element.addEventListener("click", (e) => {
      const parentParagraph = e.target.parentElement;
      const isExpanded = parentParagraph.classList.contains("expanded");

      if (isExpanded) {
        parentParagraph.innerHTML = `
          ${parentParagraph.dataset.truncated}
          <span class="read-more">Read More</span>
        `;
        parentParagraph.classList.remove("expanded");
      } else {
        parentParagraph.innerHTML = `
          ${parentParagraph.dataset.full}
          <span class="read-more">Read Less</span>
        `;
        parentParagraph.classList.add("expanded");
      }
      attachProductEventListeners(); // Reattach listeners after dynamic content change
    });
  });

  const viewButtons = document.querySelectorAll(".view-button");
  viewButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const category = document.querySelector(".category.active").dataset.category;
      const product = productData[category][index];
      const productPageUrl = productPageUrls[product.name];
      if (productPageUrl) {
        window.location.href = productPageUrl; 
      } else {
        alert("Page for this product is not yet created!");
      }
    });
  });
}

// Handle category click events
function handleCategoryClick(category, element) {
  document.querySelectorAll(".category").forEach((btn) =>
    btn.classList.remove("active")
  );
  element.classList.add("active");

  const productContainer = document.getElementById("products");
  productContainer.classList.add("morph-out");

  setTimeout(() => {
    renderProducts(category);
    productContainer.classList.remove("morph-out");
    productContainer.classList.add("morph-in");

    setTimeout(() => productContainer.classList.remove("morph-in"), 800);
  }, 500);
}

function loadCategoryFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category") || "ac";
  const categoryElement = document.querySelector(
    `.category[data-category="${category}"]`
  );

  if (categoryElement) {
    handleCategoryClick(category, categoryElement);
  }
}

// On page load
window.onload = loadCategoryFromQuery;