const axios = require('axios');
const mySecret = os.env['api_key'];
const pageTemp = document.querySelector("#temp");

class Temp {
    constructor() {
        this.number = 78;
        this.unit = '°F';
        this.city = 'Dallas';
    }
    
    increaseTemp() {
        this.number += 1;
        pageTemp.textContent = `${this.number} ${this.units}`;
    };

    decreaseTemp() {
        this.number -= 1;
        pageTemp.textContent = `${state.temp} ${state.units}`;
    };

    actualTemp(city) {
        this.city = city;
        this.coordinates = getCoordinates(city);
        this.number = 0;
    };

    getCoordinates(placeName) {
        return axios
        .get('https://us1.locationiq.com/v1/search.php', {
            params: {
            key: mySecret,
            q: placeName,
            format: 'json',
            },
        })
        .then(response => {
            const lat = response.data[0].lat;
            const lon = response.data[0].lon;

            return { lat, lon };
        })
    };
};

// const increaseTemp = () => {
//     state.temp += 1;
//     const temperature = document.querySelector("#temp");
//     temperature.textContent = `${state.temp} ${state.units}`;
// };

// const decreaseTemp = () => {
//     state.temp -= 1;
//     const temperature = document.querySelector("#temp");
//     temperature.textContent = `${state.temp} ${state.units}`;
// };

// const changeCity = () => {
//     const city = document.querySelector("#current-city");
//     state.city = input;
//     city.textContent = `Currently displaying weather in ${state.city}`
// };

// const actualTemp = () => {
//     // make API call here pluggin in state.city
//     state.temp = 'API Call';
// };

// const changeSky = () => {
//     // change background based on sky selector
//     const currentSky = document.getElementById('select');
//     state.sky = currentSky
//     if (state.sky === 'sunny') {
//         document.body.style.backgroundColor = "yellow";
//     } else if (state.sky === 'cloudy') {
//         document.body.style.backgroundColor = "green";
//     }
// };

const registerEventHandlers = (event) => {
    const increaseTempButton = document.getElementById("up");
    increaseTempButton.addEventListener("click", state.temperature.increaseTemp);
    const decreaseTempButton = document.getElementById("down");
    decreaseTempButton.addEventListener("click", state.temperature.decreaseTemp);
    const changeCityButton = document.getElementById("find");
    changeCityButton.addEventListener("click", state.temperature.changeCity)
    // const changeSkySelector = document.getElementById("Select");
    // changeSkySelector.addEventListener('click', changeSky);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);