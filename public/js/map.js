// code for map this is in mao-box display a map on webpage 

   mapboxgl.accessToken=mapToken;
    console.log(mapToken);
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style:"mapbox://styles/mapbox/streets-v12",  //style url
        // center:[longitude,latitude]
        center:listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
        zoom: 10 // starting zoom
    });

    //add a marker 
    console.log(listing.geometry.coordinates);
   const marker = new mapboxgl.Marker({color:'black'})
    .setLngLat(listing.geometry.coordinates)
     .setPopup( new mapboxgl.Popup({offset:25})
    .setHTML(`<h3>${listing.location}</h3><p>Exact location provided</p>`))
    .addTo(map);

    // Navigation Control
map.addControl(
    new mapboxgl.NavigationControl({
        visualizePitch: true
    }),
    'top-right'
);
