document.getElementById('colorful-image').addEventListener('mouseover', function() {
    // Remove the class to remove grayscale effect
    this.classList.remove('w3-grayscale-max');
  });
  
  document.getElementById('colorful-image').addEventListener('mouseout', function() {
    // Add the class to add grayscale effect
    this.classList.add('w3-grayscale-max');
  });
  