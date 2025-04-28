// Select elements
const hamburger = document.querySelector('.hamburg');
const cancel = document.querySelector('.cancel');
const dropdown = document.querySelector('.dropdown');

// Show dropdown when hamburger is clicked
hamburger.addEventListener('click', () => {
    dropdown.classList.add('active');
    dropdown.style.display = 'flex';  // Show the dropdown
    hamburger.style.display = 'none'; // Hide hamburger icon
    cancel.style.display = 'block';   // Show cancel (X) icon
});

// Hide dropdown when cancel (X) is clicked
cancel.addEventListener('click', () => {
    dropdown.classList.remove('active');
    dropdown.style.display = 'none';   // Hide the dropdown
    hamburger.style.display = 'block'; // Show hamburger again
    cancel.style.display = 'none';     // Hide cancel icon
});

