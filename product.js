// JavaScript to dynamically create the HTML structure

// Function to create a product element
function createProduct(id, name, price) {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';
    productDiv.setAttribute('data-id', id);
    productDiv.setAttribute('data-name', name);
    productDiv.setAttribute('data-price', price);
  
    const h2 = document.createElement('h2');
    h2.textContent = name;
  
    const p = document.createElement('p');
    p.textContent = Price: $${price};
  
    const button = document.createElement('button');
    button.className = 'add-to-cart-btn';
    button.textContent = 'Add to Cart';
  
    productDiv.appendChild(h2);
    productDiv.appendChild(p);
    productDiv.appendChild(button);
  
    return productDiv;
  }
  
  // Create and append the product container
  const productContainer = document.createElement('div');
  productContainer.className = 'product-container';
  document.body.appendChild(productContainer);
  
  // List of products
  const products = [
    { id: 1, name: 'Product 1', price: '20.00' },
    { id: 2, name: 'Product 2', price: '15.00' }
    // Add more products as needed
  ];
  
  products.forEach(product => {
    const productElement = createProduct(product.id, product.name, product.price);
    productContainer.appendChild(productElement);
  });
  
  // Create and append the cart container
  const cartContainer = document.createElement('div');
  cartContainer.className = 'cart-container';
  document.body.appendChild(cartContainer);
  
  // Create and append the cart heading
  const cartHeading = document.createElement('h2');
  cartHeading.textContent = 'Shopping Cart';
  cartContainer.appendChild(cartHeading);
  
  // Create and append the cart items list
  const cartItems = document.createElement('ul');
  cartItems.id = 'cart-items';
  cartContainer.appendChild(cartItems);
  
  // Create and append the cart total paragraph
  const cartTotal = document.createElement('p');
  cartTotal.id = 'cart-total';
  cartTotal.textContent = 'Total: $0.00';
  cartContainer.appendChild(cartTotal);
  
  // Create and append the checkout button
  const checkoutButton = document.createElement('button');
  checkoutButton.id = 'checkout-btn';
  checkoutButton.className = 'checkout-btn';
  checkoutButton.textContent = 'Checkout';
  cartContainer.appendChild(checkoutButton);