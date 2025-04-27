updateCartCount = function () {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartCount = document.getElementById("cart-count");
  if (cartCount) {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? "flex" : "none";
  }
};

const renderCart = function () {
  const cartItemsContainer = document.getElementById("cart-items");
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
              <tr>
                  <td colspan="6" class="text-center py-5">
                      <i class="fas fa-shopping-cart fa-3x mb-3 text-muted"></i>
                      <h5 class="text-muted">Your cart is empty</h5>
                  </td>
              </tr>
          `;
    document.getElementById("cart-total").textContent = "0.00$";
    return;
  }

  cart.forEach((item) => {
    const row = document.createElement("tr");
    row.className = "cart-item align-middle";
    row.innerHTML = `
              <td>
                  <img src="${item.image}" alt="${
      item.name
    }" class="product-img rounded">
              </td>
              <td>
                  <h6 class="mb-0">${item.name}</h6>
                  <small class="text-muted">${item.discount || ""}</small>
              </td>
              <td>${item.price}</td>
              <td>
                  <div class="d-flex">
              <button class="btn btn-outline-secondary quantity-btn" onclick="updateQuantity('${
                item.id
              }', -1)">
  -
  </button>
                      <input type="text" class="form-control quantity-input" value="${
                        item.quantity
                      }" disabled>
                      <button class="btn btn-outline-secondary quantity-btn" onclick="updateQuantity('${
                        item.id
                      }', 1)">
                          <i class="fas fa-plus"></i>
                      </button>
                  </div>
              </td>
              <td>${(
                parseFloat(item.price.replace("$", "")) * item.quantity
              ).toFixed(2)}$</td>
              <td>
                  <button class="btn btn-danger btn-sm" onclick="removeFromCart('${
                    item.id
                  }')">
              Delete
                  </button>
              </td>
          `;
    cartItemsContainer.appendChild(row);
  });

  const cartTotal = cart.reduce(
    (total, item) =>
      total + parseFloat(item.price.replace("$", "")) * item.quantity,
    0
  );
  document.getElementById("cart-total").textContent =
    cartTotal.toFixed(2) + "$";
};

const updateQuantity = function (productId, change) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const itemIndex = cart.findIndex((item) => item.id === productId);

  if (itemIndex !== -1) {
    cart[itemIndex].quantity += change;

    if (cart[itemIndex].quantity <= 0) {
      if (confirm("Do you want to remove this item from cart?")) {
        cart.splice(itemIndex, 1);
      } else {
        cart[itemIndex].quantity = 1;
      }
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
    updateCartCount();
  }
};

const removeFromCart = function (productId) {
  if (confirm("Are you sure you want to remove this item?")) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter((item) => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
    updateCartCount();
  }
};

document.addEventListener("DOMContentLoaded", function () {
  renderCart();
  updateCartCount();
});
