import "./style.css"
import "./search.css"
import "./currentWeather.css"
import "./hourForecast.css"
import "./moreInformation.css"
import "./futureDaysForecast.css"
import "./mapLocationStyle.css"
import "leaflet/dist/leaflet.css"
import "./loading.css"


import {getWeather} from "./weatherFetch";
import {loadCurrentWeatherDOM} from "./currentWeather";
import {toggleTemperature} from "./temperatureToggle";
import {fillCardsContainer , hourlyContainer} from "./hourlyForecast";
import {fillMoreInfo} from "./moreInfo"
import {fillFutureDaysForecast, futureForecast} from "./futureforeCast";
import { addmarkerMap } from "./mapLocation"


let data;
let hourlyCardelement = null, dayRowelement=null;
let isTyped = false;
export let isClesius = false;

let loading = document.querySelector(".loader-overlay");
const cityinput = document.querySelector("#cityinput");
const searchButton = document.querySelector("#searchButton");

cityinput.addEventListener("input", (e)=>{
    isTyped = true;
});

document.addEventListener("keypress", (e)=>{
    if(isTyped && e.key == "Enter")
    {
        searchButton.dispatchEvent(new Event("click"));
        isTyped = false;
    }
});

searchButton.addEventListener("click", async ()=>{
    if(!cityinput || !cityinput.value)
    {
        alert("Enter place name!!!");
    }

    try{
    loading.style.display = "flex";
    data = await getWeather(cityinput.value); 
    const currentHour =  new Date().getHours();

    loadCurrentWeatherDOM(data,currentHour,0);
    fillCardsContainer(data,0);
    fillMoreInfo(data,currentHour,0);
    fillFutureDaysForecast(data);
    toggleTemperature(isClesius);
    addmarkerMap(data);
    cityinput.value = "";
    loading.style.display = "none";
    }
    catch(e)
    {
        loading.style.display = "none";
        alert("Failed to fetch. Try again\n" + e);
        cityinput.value = "";
    }
})

const toggleBtn = document.querySelector("#Toggle");
if (toggleBtn) {
    toggleBtn.addEventListener("change", ()=>{
        isClesius = !isClesius;
        toggleTemperature(isClesius);
    })
}


hourlyContainer.addEventListener("click", (e)=>{
    if(e.target.id !== "hourlyCard" )
        return;

    if(hourlyCardelement)
        hourlyCardelement.classList.remove("hourlyCardSelected");

    hourlyCardelement  = e.target;
    let day = Number(hourlyCardelement.dataset.day);
    let hour = Number(hourlyCardelement.dataset.hour);
    console.log(day,hour);

    loadCurrentWeatherDOM(data,hour,day);
    fillMoreInfo(data,hour,day);
    toggleTemperature(isClesius);
    hourlyCardelement.classList.add("hourlyCardSelected");
});

futureForecast.addEventListener("click", (e)=>{

    if(e.target === dayRowelement)
        return;

    if(dayRowelement)
        dayRowelement.classList.remove("dayCardSelected");

    dayRowelement = e.target;
    console.log(dayRowelement);

    let dayno = Number(dayRowelement.dataset.dayno);
    const currentHour =  new Date().getHours();

    loadCurrentWeatherDOM(data,currentHour,dayno);
    fillCardsContainer(data,dayno);
    fillMoreInfo(data,currentHour,dayno);
    toggleTemperature(isClesius);
    dayRowelement.classList.add("dayCardSelected");
});

