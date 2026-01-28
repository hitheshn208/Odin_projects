const humidity = document.querySelector("#humidity");
const windSpeed = document.querySelector("#windSpeed");
const precipitation = document.querySelector("#precipitation");
const UVIndex = document.querySelector("#UVIndex");

export function fillMoreInfo(data,hour,day)
{
    let humid = data.days[day].hours[hour].humidity;
    let preci = data.days[day].hours[hour].precipprob;
    let wind = data.days[day].hours[hour].windspeed;
    let UV = data.days[day].hours[hour].uvindex;

    humidity.textContent = Math.round(humid) + " %";
    windSpeed.textContent = Number(wind).toFixed(1) + " km/h";
    precipitation.textContent = Math.round(preci) + " %"
    UVIndex.textContent = UV;
}