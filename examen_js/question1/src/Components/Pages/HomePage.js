import places from '../../utils/places';

const HomePage = () => {
  const main = document.querySelector('main');
  
  // Clear the main content
  main.innerHTML = '';

  // Create a heading for the HomePage
  const heading = document.createElement('h1');
  heading.textContent = 'List of Vacation Places';
  main.appendChild(heading);

  // Create a list element to hold the places
  const list = document.createElement('ul');

  // Loop through each place and create a list item
  places.forEach(place => {
    const listItem = document.createElement('li');
    listItem.textContent = place.name;
    list.appendChild(listItem);
  });

  // Append the list to the main element
  main.appendChild(list);
};

export default HomePage;
