import { getWeatherImage } from "./temperatureToggle";


export function loadCurrentWeatherDOM(data,hour,day)
{
    loadMainCard(data,hour,day);
}

function loadMainCard(data,hour,day)
{
    let {temp, feelslike, conditions} = data.days[day].hours[hour];
    let placeName = data.address
    placeName = `${placeName.charAt(0).toUpperCase()}${placeName.slice(1)}`
    document.querySelector("#currentWeather").innerHTML=
    `<div>
        <h2 id="cityName">${placeName}</h2>
        <div class="temperatureClass" id="temperature">
            <h1 data-temp="${temp}">${temp} °F</h1>
            <p class="feels">Feels like <span data-temp="${feelslike}">${feelslike}°F</span></p>
        </div>
    </div>
    <div class="image">
            <img src="${getWeatherImage(data,hour,day)}" alt="">
            <p class="caption">${conditions}</p>
    </div>`
}