import { getWeatherImage } from "./temperatureToggle";

export const hourlyContainer = document.querySelector(".hourlyContainer");

hourlyContainer.addEventListener("wheel", (e)=>{
    // e.preventDefault();

    hourlyContainer.scrollLeft += e.deltaY*0.35;
})


export function fillCardsContainer(data, day)
{
            
    hourlyContainer.innerHTML = `<p class="hourlyHeading">Hourly Forecast</p>`;
    for( let i = 0; i<23 ; i = i+2)
    {
        let temp = data.days[day].hours[i].temp;

        let time =  `${(i>12)? i-12 : i}:00 ${(i>=12)?"PM":"AM"}`;

        hourlyContainer.innerHTML +=`<div id="hourlyCard" data-hour="${i}" data-day="${day}" >
              <h3>${time}</h3>
              <img src="${getWeatherImage(data,i,day)}" alt="Weather condition at ${time}">
            
              <h2 id="CardTemperature" data-temp="${temp}" >${temp} °F</h2>
              </div>`

              if(i !== 22)
                hourlyContainer.innerHTML += `<div class="Whiteline"></div>`;
    }
    
}