import clearDayImg from "./clear-day.png"
import cloudyImg from "./cloudy.png"
import partlyCloudyDayImg from "./partly-cloudy-day.png"
import clearNightImg from "./clear-night.png"
import partlyCloudyNight from "./partly-cloudy-night.png"
import rainImg from "./rainy.png";

export function toggleTemperature(isClesius)
{
    if(isClesius)
    {
        document.querySelectorAll('[data-temp]').forEach(ele =>{
            let f = Number(ele.dataset.temp);

            let c = ((f-32)*5)/9;

            c = formatNumber(c);

            ele.textContent = `${c} °C`;
        })
    }else{

        document.querySelectorAll('[data-temp]').forEach(ele =>{
            const f = Number(ele.dataset.temp);
            ele.textContent = `${f} °F`;
        })
    }
}

function formatNumber(num)
{
    if(Number.isInteger(num))
        return num;
    else
        return num.toFixed(1);
}

export function getWeatherImage(data,hour,day)
{
    let icon = data.days[day].hours[hour].icon;
    console.log(icon);

    switch(icon)
    {
        case "clear-night" : return clearNightImg;
        case "partly-cloudy-night" : return partlyCloudyNight;
        case "clear-day" : return clearDayImg;
        case "partly-cloudy-day" : return partlyCloudyDayImg;
        case "cloudy" : return cloudyImg;
        case "rain" : return rainImg;

        default: return partlyCloudyDayImg;
    }
}

export function getWeatherImageForDay(data, day)
{

    let icon = data.days[day].icon;
    switch(icon)
    {
        case "clear-night" : return clearNightImg;
        case "partly-cloudy-night" : return partlyCloudyNight;
        case "clear-day" : return clearDayImg;
        case "partly-cloudy-day" : return partlyCloudyDayImg;
        case "cloudy" : return cloudyImg;
        case "rain" : return rainImg;

        default: return partlyCloudyDayImg;
    }
}