let setcionTimer = document.getElementById("section_timer");
let countDown = new Date("Jan 5, 2026 15:37:25").getTime();

let timer = setInterval(() => {
  let now = new Date().getTime();
  let distance = countDown - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  setcionTimer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s `;
  if (distance < 0) {
    clearInterval(timer);
    setcionTimer.innerHTML = `Expired`;
  }
}, 1000);

// slider

let sections = [
  {
    id: "section1",
    products: [
      {
        discount: "-40%",
        image: "../image/items/item-1.png",
        name: "IPS LCD Gaming Monitor",
        price: "$120",
        rating: 5,
        reviews: 88,
      },
      {
        discount: "-40%",
        image: "../image/items/item-10.png",
        name: "S-Series Comfort Chair",
        price: "$120",
        rating: 5,
        reviews: 88,
      },
      {
        discount: "-40%",
        image: "../image/items/item-2.png",
        name: "HAVIT HV-G92 Gamepad",
        price: "$120",
        rating: 5,
        reviews: 88,
      },
      {
        discount: "-40%",
        image: "../image/items/item-4.png",
        name: "HAVIT HV-G92 Gamepad",
        price: "$120",
        rating: 5,
        reviews: 88,
      },
      {
        discount: "-30%",
        image: "../image/items/item-5.png",
        name: "Wireless Headphones",
        price: "$150",
        rating: 4,
        reviews: 120,
      },
      {
        discount: "-30%",
        image: "../image/items/item-13.png",
        name: "Wireless Headphones",
        price: "$150",
        rating: 4,
        reviews: 120,
      },
      {
        discount: "-30%",
        image: "../image/items/item-12.png",
        name: "Wireless Headphones",
        price: "$150",
        rating: 4,
        reviews: 120,
      },
    ],
  },
  {
    id: "section2",
    products: [
      {
        discount: "-30%",
        image: "../image/items/item-11.png",
        name: "Wireless Headphones",
        price: "$150",
        rating: 4,
        reviews: 120,
      },
      {
        discount: "-30%",
        image: "../image/items/item-3.png",
        name: "Wireless Headphones",
        price: "$150",
        rating: 4,
        reviews: 120,
      },
      {
        discount: "-30%",
        image: "../image/items/item-9.png",
        name: "Wireless Headphones",
        price: "$150",
        rating: 4,
        reviews: 120,
      },
      {
        discount: "-30%",
        image: "../image/items/item-8.png",
        name: "Wireless Headphones",
        price: "$150",
        rating: 4,
        reviews: 120,
      },
      {
        discount: "-30%",
        image: "../image/items/item-7.png",
        name: "Wireless Headphones",
        price: "$150",
        rating: 4,
        reviews: 120,
      },
      {
        discount: "-30%",
        image: "../image/items/item-6.png",
        name: "Wireless Headphones",
        price: "$150",
        rating: 4,
        reviews: 120,
      },
    ],
  },
];

sections.forEach((section) => {
  let sectionContainer = document.getElementById(section.id);

  let slidesContainer = sectionContainer.querySelector(".slides");
  let dotsContainer = sectionContainer.querySelector(".dots");

  let currentIndex = 0;
  let visibleCards = 4;

  sections.forEach((section) => {
    let sectionContainer = document.getElementById(section.id);
    let slidesContainer = sectionContainer.querySelector(".slides");

    section.products.forEach((product, index) => {
      let card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <div class="discount">${product.discount}</div>
        <div class="icons">
          <span><i class="fa-regular fa-heart"></i></span>
          <span><i class="fa-solid fa-eye"></i></span>
        </div>
        <img src="${product.image}" alt="${
        product.name
      }" class="product-image" />
        <h3 class="product-name">${product.name}</h3>
        <p class="product-price">${product.price}</p>
        <div class="rating">
          ${'<i class="fa-solid fa-star"></i>'.repeat(product.rating)}
          ${'<i class="fa-regular fa-star"></i>'.repeat(5 - product.rating)}
        </div>
        <button class="add-to-cart btn btn-primary my-3" data-index="${index}">Add to Cart</button>
      `;
      slidesContainer.appendChild(card);
    });
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
    if (dots[currentIndex]) {
      dots[currentIndex].classList.add("active");
    }
  }

  setInterval(() => {
    currentIndex++;
    if (currentIndex >= totalSlides) currentIndex = 0;
    updateSlider();
  }, 5000);
});

// section products
let exploreProducts = [
  {
    id: "section3",
    products: [
      {
        discount: "-40%",
        image: "../image/items/item-1.png",
        name: "IPS LCD Gaming Monitor",
        price: "$120",
        rating: 5,
        reviews: 88,
      },
      {
        discount: "-40%",
        image: "../image/items/item-10.png",
        name: "S-Series Comfort Chair",
        price: "$120",
        rating: 5,
        reviews: 88,
      },
      {
        discount: "-40%",
        image: "../image/items/item-2.png",
        name: "HAVIT HV-G92 Gamepad",
        price: "$120",
        rating: 5,
        reviews: 88,
      },
      {
        discount: "-40%",
        image: "../image/items/item-4.png",
        name: "HAVIT HV-G92 Gamepad",
        price: "$120",
        rating: 5,
        reviews: 88,
      },
      {
        discount: "-30%",
        image: "../image/items/item-5.png",
        name: "Wireless Headphones",
        price: "$150",
        rating: 4,
        reviews: 120,
      },
      {
        discount: "-30%",
        image: "../image/items/item-13.png",
        name: "Wireless Headphones",
        price: "$150",
        rating: 4,
        reviews: 120,
      },
      {
        discount: "-30%",
        image: "../image/items/item-12.png",
        name: "Wireless Headphones",
        price: "$150",
        rating: 4,
        reviews: 120,
      },
      {
        discount: "-30%",
        image: "../image/items/item-11.png",
        name: "Wireless Headphones",
        price: "$150",
        rating: 4,
        reviews: 120,
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
      <img src="${product.image}" alt="${product.name}" class="product-image" />
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

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("add-to-cart")) {
    const index = e.target.getAttribute("data-index");
    const sectionIndex =
      e.target.closest(".slider-section").id.replace("section", "") - 1;
    const product = sections[sectionIndex].products[index];
    addToCart(product);
  }
});

window.addToCart = function (product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingItem = cart.find((item) => item.id === product.id);

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
  updateCartCount();
  alert("" + product.name + " added to cart");
};

window.updateCartCount = function () {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartCount = document.getElementById("cart-count");
  if (cartCount) {
    cartCount.textContent = cart.reduce(
      (total, item) => total + item.quantity,
      0
    );
  }
};
