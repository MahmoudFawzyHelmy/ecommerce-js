const products = [
  {
    id: 1,
    name: "Women's Summer Dress",
    price: "$49.99",
    image: "image/items/item-1.png",
    category: "womens-fashion",
    rating: 4,
    reviews: 56,
  },
  {
    id: 2,
    name: "Men's Casual Shirt",
    price: "$39.99",
    image: "image/items/item-2.png",
    category: "mens-fashion",
    rating: 5,
    reviews: 42,
  },
  {
    id: 3,
    name: "Smartphone X",
    price: "$699.99",
    image: "image/items/item-3.png",
    category: "electronics",
    rating: 4,
    reviews: 120,
  },
  {
    id: 4,
    name: "Coffee Maker",
    price: "$89.99",
    image: "image/items/item-4.png",
    category: "home-lifestyle",
    rating: 5,
    reviews: 78,
  },
  {
    id: 5,
    name: "Vitamin C Supplements",
    price: "$19.99",
    image: "image/items/item-5.png",
    category: "medicine",
    rating: 4,
    reviews: 34,
  },
  {
    id: 6,
    name: "Yoga Mat",
    price: "$29.99",
    image: "image/items/item-6.png",
    category: "sports-outdoor",
    rating: 5,
    reviews: 67,
  },
  {
    id: 7,
    name: "Baby Stroller",
    price: "$199.99",
    image: "image/items/item-7.png",
    category: "babies-toys",
    rating: 4,
    reviews: 89,
  },
  {
    id: 8,
    name: "Organic Dog Food",
    price: "$24.99",
    image: "image/items/item-8.png",
    category: "groceries-pets",
    rating: 5,
    reviews: 45,
  },
  {
    id: 9,
    name: "Facial Cleanser",
    price: "$14.99",
    image: "image/items/item-9.png",
    category: "health-beauty",
    rating: 4,
    reviews: 112,
  },
  {
    id: 10,
    name: "IPS LCD Gaming Monitor",
    price: "$120",
    image: "image/items/item-1.png",
    category: "electronics",
    rating: 5,
    reviews: 88,
    discount: "-40%",
  },
  {
    id: 11,
    name: "S-Series Comfort Chair",
    price: "$120",
    image: "image/items/item-10.png",
    category: "home-lifestyle",
    rating: 5,
    reviews: 88,
    discount: "-40%",
  },
  {
    id: 12,
    name: "HAVIT HV-G92 Gamepad",
    price: "$120",
    image: "image/items/item-2.png",
    category: "electronics",
    rating: 5,
    reviews: 88,
    discount: "-40%",
  },
  {
    id: 13,
    name: "HAVIT HV-G92 Gamepad",
    price: "$120",
    image: "image/items/item-4.png",
    category: "electronics",
    rating: 5,
    reviews: 88,
    discount: "-40%",
  },
  {
    id: 14,
    name: "Wireless Headphones",
    price: "$150",
    image: "image/items/item-5.png",
    category: "electronics",
    rating: 4,
    reviews: 120,
    discount: "-30%",
  },
  {
    id: 15,
    name: "Wireless Headphones",
    price: "$150",
    image: "image/items/item-13.png",
    category: "electronics",
    rating: 4,
    reviews: 120,
    discount: "-30%",
  },
  {
    id: 16,
    name: "Wireless Headphones",
    price: "$150",
    image: "image/items/item-12.png",
    category: "electronics",
    rating: 4,
    reviews: 120,
    discount: "-30%",
  },
  {
    id: 17,
    name: "Wireless Headphones",
    price: "$150",
    image: "image/items/item-11.png",
    category: "electronics",
    rating: 4,
    reviews: 120,
    discount: "-30%",
  },
];

function displayProducts(filteredProducts) {
  const productsContainer = document.getElementById("filtered-products");
  const productCount = document.querySelector("#product-count span");

  productsContainer.innerHTML = "";

  productCount.textContent = filteredProducts.length;

  filteredProducts.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.className = "col-md-4 mb-4";
    productElement.innerHTML = `
        <div class="product-card">
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
            <span class="reviews">(${product.reviews})</span>
          </div>
          <button class="add-to-cart btn btn-primary my-3 fs-5 p-3" data-id="${
            product.id
          }">Add to Cart</button>
        </div>
      `;
    productsContainer.appendChild(productElement);
  });
}

function filterProducts(category) {
  let filteredProducts;

  if (category === "all") {
    filteredProducts = products;
    document.getElementById("category-title").textContent = "All Products";
  } else {
    filteredProducts = products.filter(
      (product) => product.category === category
    );
    const categoryTitle = document.querySelector(
      `[data-category="${category}"]`
    ).textContent;
    document.getElementById("category-title").textContent = categoryTitle;
  }

  displayProducts(filteredProducts);
}

document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const categoryParam = urlParams.get("category");

  if (categoryParam) {
    filterProducts(categoryParam);
  } else {
    filterProducts("all");
  }

  document.querySelectorAll(".filter-link").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const category = this.getAttribute("data-category");
      filterProducts(category);

      history.pushState(null, null, `?category=${category}`);
    });
  });

  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("add-to-cart")) {
      const productId = parseInt(e.target.getAttribute("data-id"));
      const product = products.find((p) => p.id === productId);
      addToCart(product);
    }
  });
});

const updateCartCount = function (cartLength) {
  const cartCount = document.getElementById("cart-count");
  if (cartCount) cartCount.innerHTML = cartLength;
};

const addToCart = function (product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingItem = cart.find((item) => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  const cartLength = cart.reduce((total, item) => total + item.quantity, 0);
  updateCartCount(cartLength);
};

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let cartCount = cart.reduce((total, item) => total + item.quantity, 0);
updateCartCount(cartCount);

// ... (existing code)

function displayProducts(filteredProducts) {
  const productsContainer = document.getElementById("filtered-products");
  const productCount = document.querySelector("#product-count span");

  productsContainer.innerHTML = "";

  productCount.textContent = filteredProducts.length;

  filteredProducts.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.className = "col-md-4 mb-4";
    productElement.innerHTML = `
        <div class="product-card">
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
          <button class="add-to-cart btn btn-primary my-3 fs-5 p-3" data-id="${
            product.id
          }">Add to Cart</button>
        </div>
      `;
    productsContainer.appendChild(productElement);
  });
}

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("add-to-cart")) {
    const productId = parseInt(e.target.getAttribute("data-id"));
    const product = products.find((p) => p.id === productId);
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
