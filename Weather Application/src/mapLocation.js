import L from'leaflet';
import icon from'leaflet/dist/images/marker-icon.png';
import iconShadow from'leaflet/dist/images/marker-shadow.png';
import iconRetina from'leaflet/dist/images/marker-icon-2x.png';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconRetinaUrl: iconRetina,
});

let map = null;
let marker = null;

function initMap() {
    if (!map) {
        map = L.map('map').setView([13.029972, 77.564972], 2);
        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);
    }
}

export function addmarkerMap(data)
{
    initMap();
    
    if(marker)
    {
        marker.closePopup()
        marker.remove();
    }
    let {latitude, longitude} = data;
    marker = L.marker([latitude, longitude]).addTo(map);
    marker.bindPopup(data.address);
    marker.openPopup();
    map.flyTo(marker.getLatLng(),10);
}