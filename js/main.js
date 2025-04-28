// Timer
let sectionTimer = document.getElementById("section_timer");
let countDown = new Date("Jan 5, 2026 15:37:25").getTime();

let timer = setInterval(() => {
  let now = new Date().getTime();
  let distance = countDown - now;

  if (distance < 0) {
    clearInterval(timer);
    sectionTimer.innerHTML = "Expired";
    return;
  }

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  sectionTimer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

let sections = [
  {
    id: "section1",
    products: [
      {
        id: 11,
        name: "S-Series Comfort Chair",
        price: "$120",
        image: "../image/items/item-10.png",
        category: "home-lifestyle",
        rating: 5,
        reviews: 88,
        discount: "-40%",
      },
      {
        id: 12,
        name: "HAVIT HV-G92 Gamepad",
        price: "$120",
        image: "../image/items/item-2.png",
        category: "electronics",
        rating: 5,
        reviews: 88,
        discount: "-40%",
      },
      {
        id: 13,
        name: "HAVIT HV-G92 Gamepad",
        price: "$120",
        image: "../image/items/item-4.png",
        category: "electronics",
        rating: 5,
        reviews: 88,
        discount: "-40%",
      },
      {
        id: 14,
        name: "Wireless Headphones",
        price: "$150",
        image: "../image/items/item-5.png",
        category: "electronics",
        rating: 4,
        reviews: 120,
        discount: "-30%",
      },
      {
        id: 15,
        name: "Wireless Headphones",
        price: "$150",
        image: "../image/items/item-13.png",
        category: "electronics",
        rating: 4,
        reviews: 120,
        discount: "-30%",
      },
      {
        id: 16,
        name: "Wireless Headphones",
        price: "$150",
        image: "../image/items/item-12.png",
        category: "electronics",
        rating: 4,
        reviews: 120,
        discount: "-30%",
      },
      {
        id: 17,
        name: "Wireless Headphones",
        price: "$150",
        image: "../image/items/item-11.png",
        category: "electronics",
        rating: 4,
        reviews: 120,
        discount: "-30%",
      },
    ],
  },
  {
    id: "section2",
    products: [
      {
        id: 5,
        name: "Vitamin C Supplements",
        price: "$19.99",
        image: "../image/items/item-5.png",
        category: "medicine",
        rating: 4,
        reviews: 34,
      },
      {
        id: 6,
        name: "Yoga Mat",
        price: "$29.99",
        image: "../image/items/item-6.png",
        category: "sports-outdoor",
        rating: 5,
        reviews: 67,
      },
      {
        id: 7,
        name: "Baby Stroller",
        price: "$199.99",
        image: "../image/items/item-7.png",
        category: "babies-toys",
        rating: 4,
        reviews: 89,
      },
      {
        id: 8,
        name: "Organic Dog Food",
        price: "$24.99",
        image: "../image/items/item-8.png",
        category: "groceries-pets",
        rating: 5,
        reviews: 45,
      },
      {
        id: 9,
        name: "Facial Cleanser",
        price: "$14.99",
        image: "../image/items/item-9.png",
        category: "health-beauty",
        rating: 4,
        reviews: 112,
      },
      {
        id: 10,
        name: "IPS LCD Gaming Monitor",
        price: "$120",
        image: "../image/items/item-1.png",
        category: "electronics",
        rating: 5,
        reviews: 88,
        discount: "-40%",
      },
      {
        id: 11,
        name: "S-Series Comfort Chair",
        price: "$120",
        image: "../image/items/item-10.png",
        category: "home-lifestyle",
        rating: 5,
        reviews: 88,
        discount: "-40%",
      },
    ],
  },
];

// Sections slider
sections.forEach((section) => {
  let sectionContainer = document.getElementById(section.id);
  let slidesContainer = sectionContainer.querySelector(".slides");
  let dotsContainer = sectionContainer.querySelector(".dots");

  let currentIndex = 0;
  let visibleCards = 4;

  section.products.forEach((product, index) => {
    let card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
    
      <div class="icons">
        <span><i class="fa-regular fa-heart"></i></span>
        <span><i class="fa-solid fa-eye"></i></span>
      </div>
      <a href="product-details.html?id=${product.id}">
        <img src="${product.image}" alt="${
      product.name
    }" class="product-image" />
      </a>
      <h3 class="product-name">${product.name}</h3>
      <p class="product-price">${product.price}</p>
      <div class="rating">
        ${'<i class="fa-solid fa-star"></i>'.repeat(product.rating)}
        ${'<i class="fa-regular fa-star"></i>'.repeat(5 - product.rating)}
      </div>
      <button class="add-to-cart btn btn-primary my-3 fs-5 p-3" data-index="${index}">Add to Cart</button>
    `;
    slidesContainer.appendChild(card);
  });

  let cards = slidesContainer.querySelectorAll(".product-card");
  let totalSlides = cards.length - visibleCards + 1;

  for (let i = 0; i < totalSlides; i++) {
    let dot = document.createElement("span");
    dot.className = "dot";
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => moveToSlide(i));
    dotsContainer.appendChild(dot);
  }

  let dots = dotsContainer.querySelectorAll(".dot");

  function moveToSlide(index) {
    currentIndex = index;
    updateSlider();
  }

  function updateSlider() {
    slidesContainer.style.transform = `translateX(-${
      currentIndex * (100 / visibleCards)
    }%)`;
    dots.forEach((dot) => dot.classList.remove("active"));
    if (dots[currentIndex]) dots[currentIndex].classList.add("active");
  }

  setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
  }, 5000);
});

// Explore Products (Section 3)
let exploreProducts = [
  {
    id: "section3",
    products: [
      {
        id: 1,
        name: "Women's Summer Dress",
        price: "$49.99",
        image: "../image/items/item-1.png",
        category: "womens-fashion",
        rating: 4,
        reviews: 56,
      },
      {
        id: 2,
        name: "Men's Casual Shirt",
        price: "$39.99",
        image: "../image/items/item-2.png",
        category: "mens-fashion",
        rating: 5,
        reviews: 42,
      },
      {
        id: 3,
        name: "Smartphone X",
        price: "$699.99",
        image: "../image/items/item-3.png",
        category: "electronics",
        rating: 4,
        reviews: 120,
      },
      {
        id: 4,
        name: "Coffee Maker",
        price: "$89.99",
        image: "../image/items/item-4.png",
        category: "home-lifestyle",
        rating: 5,
        reviews: 78,
      },
      {
        id: 5,
        name: "Vitamin C Supplements",
        price: "$19.99",
        image: "../image/items/item-5.png",
        category: "medicine",
        rating: 4,
        reviews: 34,
      },
      {
        id: 6,
        name: "Yoga Mat",
        price: "$29.99",
        image: "../image/items/item-6.png",
        category: "sports-outdoor",
        rating: 5,
        reviews: 67,
      },
      {
        id: 7,
        name: "Baby Stroller",
        price: "$199.99",
        image: "../image/items/item-7.png",
        category: "babies-toys",
        rating: 4,
        reviews: 89,
      },
      {
        id: 8,
        name: "Organic Dog Food",
        price: "$24.99",
        image: "../image/items/item-8.png",
        category: "groceries-pets",
        rating: 5,
        reviews: 45,
      },
      {
        id: 9,
        name: "Facial Cleanser",
        price: "$14.99",
        image: "../image/items/item-9.png",
        category: "health-beauty",
        rating: 4,
        reviews: 112,
      },
      {
        id: 10,
        name: "IPS LCD Gaming Monitor",
        price: "$120",
        image: "../image/items/item-1.png",
        category: "electronics",
        rating: 5,
        reviews: 88,
        discount: "-40%",
      },
      {
        id: 11,
        name: "S-Series Comfort Chair",
        price: "$120",
        image: "../image/items/item-10.png",
        category: "home-lifestyle",
        rating: 5,
        reviews: 88,
        discount: "-40%",
      },
      {
        id: 12,
        name: "HAVIT HV-G92 Gamepad",
        price: "$120",
        image: "../image/items/item-2.png",
        category: "electronics",
        rating: 5,
        reviews: 88,
        discount: "-40%",
      },
      {
        id: 13,
        name: "HAVIT HV-G92 Gamepad",
        price: "$120",
        image: "../image/items/item-4.png",
        category: "electronics",
        rating: 5,
        reviews: 88,
        discount: "-40%",
      },
      {
        id: 14,
        name: "Wireless Headphones",
        price: "$150",
        image: "../image/items/item-5.png",
        category: "electronics",
        rating: 4,
        reviews: 120,
        discount: "-30%",
      },
      {
        id: 15,
        name: "Wireless Headphones",
        price: "$150",
        image: "../image/items/item-13.png",
        category: "electronics",
        rating: 4,
        reviews: 120,
        discount: "-30%",
      },
      {
        id: 16,
        name: "Wireless Headphones",
        price: "$150",
        image: "../image/items/item-12.png",
        category: "electronics",
        rating: 4,
        reviews: 120,
        discount: "-30%",
      },
      {
        id: 17,
        name: "Wireless Headphones",
        price: "$150",
        image: "../image/items/item-11.png",
        category: "electronics",
        rating: 4,
        reviews: 120,
        discount: "-30%",
      },
    ],
  },
];

let expProductsContainer = document.getElementById("expProduct");

exploreProducts.forEach((section) => {
  section.products.forEach((product) => {
    let card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <div class="icons">
        <span><i class="fa-regular fa-heart"></i></span>
        <span><i class="fa-solid fa-eye"></i></span>
      </div>
      <a href="product-details.html?id=${product.id}">
        <img src="${product.image}" alt="${
      product.name
    }" class="product-image" />
      </a>
      <h3 class="product-name">${product.name}</h3>
      <p class="product-price">${product.price}</p>
      <div class="rating">
        ${'<i class="fa-solid fa-star"></i>'.repeat(product.rating)}
        ${'<i class="fa-regular fa-star"></i>'.repeat(5 - product.rating)}
        <span class="reviews">(${product.reviews})</span>
      </div>
    `;
    expProductsContainer.appendChild(card);
  });
});

// Add to cart with authentication check
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("add-to-cart")) {
    const index = e.target.getAttribute("data-index");
    const sectionIndex =
      e.target.closest(".slider-section").id.replace("section", "") - 1;
    const product = sections[sectionIndex].products[index];
    addToCartWithAuthCheck(product);
  }
});

function addToCartWithAuthCheck(product) {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (!currentUser) {
    if (confirm("You need to login to add items to cart. Go to login page?")) {
      window.location.href = "signin.html";
    }
    return;
  }

  addToCart(product);
}

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingItem = cart.find((item) => item.name === product.name);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1,
      id: product.name.toLowerCase().replace(/\s+/g, "-") + "-" + Date.now(),
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount(cart.reduce((total, item) => total + item.quantity, 0));
}

function updateCartCount(count) {
  const cartCount = document.getElementById("cart-count");
  if (cartCount) cartCount.innerHTML = count;
}

// Back to top button
const backToTopBtn = document.getElementById("backToTop");
if (backToTopBtn) {
  window.addEventListener("scroll", function () {
    backToTopBtn.style.display = window.scrollY > 1000 ? "flex" : "none";
  });
  backToTopBtn.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
