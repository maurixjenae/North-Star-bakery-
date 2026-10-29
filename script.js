// Dynamic Favorite Selector & Local Storage Feature
document.addEventListener('DOMContentLoaded', () => {
const favoriteButtons = document.querySelectorAll('.favorite-btn');
const favoriteDisplay = document.getElementById('favorite-display');

// Load saved favorite on page startup
const savedFavorite = localStorage.getItem('userFavorite');
if (savedFavorite && favoriteDisplay) {
favoriteDisplay.textContent = `Your saved favorite: ${savedFavorite}`;
}

// Handle favorite selection clicks
favoriteButtons.forEach(button => {
button.addEventListener('click', (e) => {
const selectedItem = e.target.getAttribute('data-item') || "Bakery Special";
localStorage.setItem('userFavorite', selectedItem);
if (favoriteDisplay) {
favoriteDisplay.textContent = `Your saved favorite: ${selectedItem}`;
}
alert(`Saved ${selectedItem} as your favorite!`);
});
});

// Form Validation Handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
contactForm.addEventListener('submit', (e) => {
e.preventDefault();
const emailInput = document.getElementById('email');
const errorDisplay = document.getElementById('email-error');

if (!emailInput || !emailInput.value.includes('@')) {
if (errorDisplay) {
errorDisplay.textContent = "Please enter a valid email address.";
errorDisplay.style.color = "red";
}
} else {
if (errorDisplay) {
errorDisplay.textContent = "Thank you! Form submitted successfully.";
errorDisplay.style.color = "green";
}
}
});
}
});

