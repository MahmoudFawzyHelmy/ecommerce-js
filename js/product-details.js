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
document.addEventListener("DOMContentLoaded", function () {
  // Get product ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  // Find product in products array (from filter.js)
  const product = products.find((p) => p.id == productId);

  if (product) {
    // Display product details
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-price").textContent = product.price;
    document.getElementById("product-image").src = product.image;
    document.getElementById("product-category").textContent = getCategoryName(
      product.category
    );

    // Create rating stars
    const ratingContainer = document.getElementById("product-rating");
    ratingContainer.innerHTML = "";
    for (let i = 0; i < 5; i++) {
      const star = document.createElement("i");
      star.className =
        i < product.rating ? "fa-solid fa-star" : "fa-regular fa-star";
      ratingContainer.appendChild(star);
    }

    document.getElementById(
      "product-reviews"
    ).textContent = `(${product.reviews} reviews)`;

    // Add to cart button
    document
      .getElementById("add-to-cart-btn")
      .addEventListener("click", function () {
        const quantity = parseInt(
          document.querySelector(".quantity-input").value
        );
        addToCartWithAuthCheck(product, quantity);
      });
  } else {
    // Product not found
    document.querySelector(".container").innerHTML = `
        <div class="alert alert-danger text-center py-5">
          <h3>Product not found</h3>
          <a href="index.html" class="btn btn-primary mt-3">Back to Home</a>
        </div>
      `;
  }

  // Update cart count
  updateCartCount();
});

function updateQuantity(change) {
  const input = document.querySelector(".quantity-input");
  let quantity = parseInt(input.value) + change;
  if (quantity < 1) quantity = 1;
  input.value = quantity;
}

function getCategoryName(category) {
  const categoryNames = {
    "womens-fashion": "Women's Fashion",
    "mens-fashion": "Men's Fashion",
    electronics: "Electronics",
    "home-lifestyle": "Home & Lifestyle",
    medicine: "Medicine",
    "sports-outdoor": "Sports & Outdoor",
    "babies-toys": "Baby's & Toys",
    "groceries-pets": "Groceries & Pets",
    "health-beauty": "Health & Beauty",
  };
  return categoryNames[category] || category;
}

function addToCartWithAuthCheck(product, quantity) {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (!currentUser) {
    if (confirm("You need to login to add items to cart. Go to login page?")) {
      window.location.href = "signin.html";
    }
    return;
  }

  // Add to cart
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingItem = cart.find((item) => item.id == product.id);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      ...product,
      quantity: quantity,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();

  alert(`${quantity} ${product.name} added to cart!`);
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartCount = document.getElementById("cart-count");
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  if (cartCount) {
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? "flex" : "none";
  }
}
