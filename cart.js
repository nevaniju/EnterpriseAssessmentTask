let cart = [];

// Select all add to cart buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Add event listener to each add to cart button
addToCartButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Get the parent element of the button (the product-item)
    const productItem = button.parentElement;

    // Get the title and price of the product
    const title = productItem.querySelector('h2').innerText;
    const price = parseFloat(productItem.querySelector('p:nth-child(3)').innerText.slice(1));

    // Create a new cart item with the title, price, and quantity of 1
    const cartItem = { title, price, quantity: 1 };

    // Add the cart item to the cart array
    cart.push(cartItem);

    // Display a message to the user
    alert(`${title} has been added to your cart!`);

    // Update the cart display
    updateCartDisplay();
  });
});

// Function to update the cart display
function updateCartDisplay() {
  // Select the cart display element
  const cartDisplay = document.querySelector('.cart-display');

  // Clear the cart display
  cartDisplay.innerHTML = '';

  // Loop through the cart array
  cart.forEach((item) => {
    // Create a new element for the cart item
    const cartItemElement = document.createElement('div');
    cartItemElement.innerText = `${item.title} (${item.price.toFixed(2)}) x ${item.quantity}`;

    // Add the cart item element to the cart display
    cartDisplay.appendChild(cartItemElement);
  });

  // Display the total price of the cart
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalPriceElement = document.createElement('div');
  totalPriceElement.innerText = `Total: ${totalPrice.toFixed(2)}`;
  cartDisplay.appendChild(totalPriceElement);
}