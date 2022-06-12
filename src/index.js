const state = {
    temp: 78,
    units: '°F',
    sky: 'sunny',
    city: 'Dallas'
};

const increaseTemp = () => {
    state.temp += 1;
    const temperature = document.querySelector("#temp");
    temperature.textContent = `${state.temp} ${state.units}`;
};

const decreaseTemp = () => {
    state.temp -= 1;
    const temperature = document.querySelector("#temp");
    temperature.textContent = `${state.temp} ${state.units}`;
};

const changeSky = () => {
    const selectedSky = document.getElementById('sky').value;
    document.querySelector('body').className = selectedSky;
    background.className = selectedSky;
};

const changeCity = () => {
    const inputCity = document.getElementById("city").value;
    const currentCity = document.querySelector("#current-city");
    if (inputCity === ''){
        currentCity.textContent = `Currently displaying temperature in...`;
    } else {
        currentCity.textContent = `Currently displaying temperature in ${inputCity}`;
    }
};

const registerEventHandlers = (event) => {
    const increaseTempButton = document.getElementById("up");
    increaseTempButton.addEventListener("click", increaseTemp);
    const decreaseTempButton = document.getElementById("down");
    decreaseTempButton.addEventListener("click", decreaseTemp);
    const changeSkySelector = document.getElementById("sky");
    changeSkySelector.addEventListener('change', changeSky);
    const changeCityInput = document.getElementById("city");
    changeCityInput.addEventListener('input', changeCity);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);