// Initialize Google Maps
function initMap() {
    // Kąty Rybackie coordinates
    const katyRybackie = { lat: 54.3354, lng: 19.2554 };

    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: katyRybackie,
        styles: [
            {
                "featureType": "all",
                "elementType": "geometry",
                "stylers": [{ "color": "#f5f5f5" }]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }]
            }
        ]
    });

    // Add marker
    const marker = new google.maps.Marker({
        position: katyRybackie,
        map: map,
        title: 'Solemare Apartment'
    });

    // Add info window
    const infoWindow = new google.maps.InfoWindow({
        content: '<div class="map-info"><h3>Solemare Apartment</h3><p>Kąty Rybackie, Poland</p></div>'
    });

    marker.addListener('click', () => {
        infoWindow.open(map, marker);
    });
}

// Load Google Maps API
function loadGoogleMapsAPI() {
    const script = document.createElement('script');
    // Use environment variable for API key
    script.src = `https://maps.googleapis.com/maps/api/js?key=${window.ENV_GOOGLE_MAPS_API_KEY}&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
}

// Load maps when DOM is ready
document.addEventListener('DOMContentLoaded', loadGoogleMapsAPI); 