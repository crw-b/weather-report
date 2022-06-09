const state = {
    temp: 78,
    units: '°F',
    // sky: clear
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

// const changeCity = () => {
//     state.city = `${input}`;
// };

const registerEventHandlers = (event) => {
    const increaseTempButton = document.getElementById("up");
    increaseTempButton.addEventListener("click", increaseTemp);
    const decreaseTempButton = document.getElementById("down");
    decreaseTempButton.addEventListener("click", decreaseTemp);
    // const changeSkySelector = document.getElementById("Select");
    // changeSkySelector.addEventListener('click', changeSky);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);