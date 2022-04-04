const apiKey = 'pk.eyJ1IjoicmljaXRlZTAxMDAiLCJhIjoiY2wxa3kybnFjMDVmajNla3FtMG9xOTcyNyJ9.HjjM0x8CxrlI7PSK4iQB5Q';

const map = L.map('map').setView([48.724329, 19.121683], 10);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiKey
}).addTo(map); 