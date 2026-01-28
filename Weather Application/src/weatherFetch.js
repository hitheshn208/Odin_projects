import bangaloreData from './bangalore.json';

export async function getWeather(place)
{
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}?key=D5G4VARU4H366B5YY8238492H`);
    return response.json();
}
