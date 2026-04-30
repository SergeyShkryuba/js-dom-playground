console.log('Hello from JavaScript!');

// Simple example: change text on click
document.addEventListener('DOMContentLoaded', () => {
  const heading = document.querySelector('h1');
  
  heading.addEventListener('click', () => {
    heading.textContent = 'You clicked me!';
    heading.style.color = '#ffd700';
  });
});
