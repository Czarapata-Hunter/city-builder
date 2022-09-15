/* Imports */

/* Get DOM Elements */
const cityInput = document.getElementById('city-input');
const climateSelect = document.getElementById('climate-select');
const architectureSelect = document.getElementById('architecture-select');
const attractionsInput = document.getElementById('attractions-input');
const attractionsButton = document.getElementById('attractions-button');

const outputSection = document.getElementById('output-section');
const cityName = document.getElementById('city-name');
const climateImg = document.getElementById('climate-img');
const architectureImg = document.getElementById('architectue-img');
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

architectureSelect = addEventListener('change', () => {
    city.architecture = architectureSelect.value;
    displayCity();
});

attractionsInput.addEventListener('click', () => {
    const attractions = attractionsInput.value;
    city.attractions.push(attractions);
    displayAttractions();
    attractionsInput.value = '';
});

attractionsButton.addEventListener('click', () => {
    const attractions = attractionsInput.value;
    city.attractions.push(attractions);
    displayAttractions();
    attractionsInput.value = '';
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
    climateImg.src = 'assets/';
}
/* Events */

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
