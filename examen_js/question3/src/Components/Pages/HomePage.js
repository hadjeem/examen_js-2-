const HomePage = () => {
  const main = document.querySelector('main');

  // Clear the content of the main element
  main.innerHTML = '';

  // Create a heading for all places
  const placesHeading = document.createElement('h1');
  placesHeading.textContent = 'All Vacation Places';
  main.appendChild(placesHeading);

  // Create a list to display all places
  const placesList = document.createElement('ul');
  main.appendChild(placesList);

  // Create a heading for the recommended place
  const recommendedHeading = document.createElement('h2');
  recommendedHeading.textContent = 'Recommended Place';
  main.appendChild(recommendedHeading);

  // Create a paragraph to display the recommended place
  const recommendedParagraph = document.createElement('p');
  recommendedParagraph.textContent = 'Loading recommended place...';
  main.appendChild(recommendedParagraph);

  // Fetch all places from the API
  fetch('https://places-exam-api.azurewebsites.net/places')
    .then((response) => response.json())
    .then((places) => {
      places.forEach((place) => {
        const listItem = document.createElement('li');
        listItem.textContent = place.name;
        placesList.appendChild(listItem);
      });
    })
    .catch((error) => {
      console.error('Error fetching places:', error);
      placesList.textContent = 'Failed to load places.';
    });

  // Fetch the recommended place from the API
  fetch('https://places-exam-api.azurewebsites.net/recommended')
    .then((response) => response.json())
    .then((recommendedPlace) => {
      recommendedParagraph.textContent = recommendedPlace.name;
    })
    .catch((error) => {
      console.error('Error fetching recommended place:', error);
      recommendedParagraph.textContent = 'Failed to load recommended place.';
    });
};

export default HomePage;
