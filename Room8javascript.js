// JavaScript to manage the swipe logic

let currentIndex = 0;
const cards = document.querySelectorAll('.card');
const swipeLeftBtn = document.getElementById('swipe-left');
const swipeRightBtn = document.getElementById('swipe-right');

function swipeCard(direction) {
  const currentCard = cards[currentIndex];
  
  if (direction === 'left') {
    currentCard.classList.add('swipe-left');
  } else if (direction === 'right') {
    currentCard.classList.add('swipe-right');
  }

  // Reset the swipe to the next card after animation
  setTimeout(() => {
    currentCard.classList.remove('swipe-left', 'swipe-right');
    currentIndex++;
    
    if (currentIndex >= cards.length) {
      currentIndex = 0; // Loop back to the first card
    }

    // Reset the position of all cards to the front of the stack
    cards.forEach((card, index) => {
      card.style.zIndex = cards.length - index;
    });
  }, 300); // Match this time with the CSS transition duration
}

// Add event listeners for swipe buttons
swipeLeftBtn.addEventListener('click', () => {
  swipeCard('left');
});

swipeRightBtn.addEventListener('click', () => {
  swipeCard('right');
});
