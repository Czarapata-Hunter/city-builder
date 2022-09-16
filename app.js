/* Imports */

/* Get DOM Elements */
const cityInput = document.getElementById('city-input');
const climateSelect = document.getElementById('climate-select');
const architectureSelect = document.getElementById('architecture-select');
const attractionsInput = document.getElementById('attractions-input');
const attractionsButton = document.getElementById('attractions-button');

const outputSection = document.getElementById('output-section');
const cityName = document.getElementById('city-name');
const climateImage = document.getElementById('climate-image');
const architectureImage = document.getElementById('architecture-image');
const listAttractions = document.getElementById('list-attractions');

/* State */
const city = {
    name: 'Beardtopia',
    climate: 'Tropical',
    architecture: 'Beaux-Arts',
    attractions: [],
};

cityInput.addEventListener('input', () => {
    city.name = cityInput.value;
    displayCity();
});

climateSelect.addEventListener('change', () => {
    city.climate = climateSelect.value;
    displayCity();
});

architectureSelect.addEventListener('change', () => {
    city.architecture = architectureSelect.value;
    displayCity();
});

function displayControls() {
    cityInput.value = city.name;
    climateSelect.value = city.climate;
    architectureSelect.value = city.architecture;
}

function displayCity() {
    outputSection.classList.value = '';
    outputSection.classList.add(city.climate, city.architecture);
    cityName.textContent = city.name;
    climateImage.src = 'assets/climate/' + city.climate + '.jpg';
    climateImage.alt = city.climate;
    architectureImage.src = 'assets/architecture/' + city.architecture + '.jpg';
    architectureImage.alt = city.architecture;
}

function displayAttractions() {
    listAttractions.innerHTML = '';

    for (const attractions of city.attractions) {
        const li = document.createElement('li');
        li.textContent = attractions;
        listAttractions.append(li);
    }
}

/*attractionsInput.addEventListener('click', () => {
    const attractions = attractionsInput.value;
    city.attractions.push(attractions);
    displayAttractions();
    attractionsInput.value = '';
}); */

attractionsButton.addEventListener('click', () => {
    if (attractionsInput.value !== '') {
        const attractions = attractionsInput.value;
        city.attractions.push(attractions);
        displayAttractions();
        attractionsInput.value = '';
    }
});

/* Events */

/* Display Functions */
displayControls();
displayCity();
displayAttractions();
// (don't forget to call any display functions you want to run on page load!)
