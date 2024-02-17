const header = document.querySelector("header");
const hamburgerBtn = document.querySelector("#hamburger-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");

// Toggle mobile menu on hamburger button click
hamburgerBtn.addEventListener("click", () => header.classList.toggle("show-mobile-menu"));

// Close mobile menu on close button click
closeMenuBtn.addEventListener("click", () => hamburgerBtn.click());

function shareProduct(productCard) {
    // Find product name and description elements within the product card
    var productName = productCard.querySelector('.product-name').innerText;
    var productDescription = productCard.querySelector('.product-description').innerText;
  
    // Construct the message to share
    var message = "Check out this product: " + "\n" + productName + "\n" + productDescription;
  
    // Open WhatsApp with pre-filled message
    var whatsappURL = "https://wa.me/?text=" + encodeURIComponent(message);
    window.open(whatsappURL);
  
    // For Telegram, you would construct a similar URL
    // var telegramURL = "https://t.me/share/url?url=&text=" + encodeURIComponent(message);
    // window.open(telegramURL);
  }
  