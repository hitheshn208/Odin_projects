import { getWeatherImageForDay } from "./temperatureToggle";

export const futureForecast = document.querySelector(".futureForecast");

export function fillFutureDaysForecast(data)
{    
    futureForecast.innerHTML = `<p class="days7Heading">7-days Forecast</p>`;
    
    for(let i = 0; i<7; i++)
    {
        let {datetime, tempmax, tempmin, conditions } = data.days[i];

        let weekName;
        if(i === 0)
        {
            weekName = "Today";
        }
        else{
            const date = new Date(datetime);
            weekName = date.toLocaleDateString("en-US", {
            weekday: "short"
           });
        }

        futureForecast.innerHTML += `<div class="dayRow" data-dayno="${i}">
                <span id="weekDay">${weekName}</span>
                <img src="${getWeatherImageForDay(data,i)}" alt="">
                <span id="condition">${conditions}</span>
                <span id="tempMinMax">${Math.round(tempmin)} / ${Math.round(tempmax)}</span>
            </div>
            <div class="horizontalWhiteLine"></div>`
    }
}
