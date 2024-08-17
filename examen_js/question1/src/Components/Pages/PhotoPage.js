import places from '../../utils/places';
import { clearPage } from '../../utils/render';

const PhotoPage = () => {
  clearPage();

  const main = document.querySelector('main');

  // Initial index set to 2 to show the third item
  let currentIndex = 2;

  // Create elements
  const img = document.createElement('img');
  const name = document.createElement('h2');
  const prevButton = document.createElement('button');
  const nextButton = document.createElement('button');

  // Set up button text
  prevButton.textContent = 'Previous';
  nextButton.textContent = 'Next';

  // Function to update the displayed place
  const updatePlace = () => {
    const place = places[currentIndex];
    img.src = place.image;
    img.alt = place.name;
    name.textContent = place.name;

    // Disable buttons if no previous or next item
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === places.length - 1;
  };

  // Event listeners for the buttons
  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex-=1;
      updatePlace();
    }
  });

  nextButton.addEventListener('click', () => {
    if (currentIndex < places.length - 1) {
      currentIndex+=1;
      updatePlace();
    }
  });

  // Initial setup
  updatePlace();

  // Add elements to the DOM
  main.appendChild(img);
  main.appendChild(name);
  main.appendChild(prevButton);
  main.appendChild(nextButton);
};

export default PhotoPage;
