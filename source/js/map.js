let map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 59.938711107524284, lng: 30.32300448340557 }, zoom: 17
  });
  var marker = new google.maps.Marker({ position: { lat: 59.938711107524284, lng: 30.32300448340557 },
    map: map,
    title: "Магазин вязаных игрушек Мишка",
    icon: "img/map-pin.svg"
  })
}

//59.938711107524284, 30.32300448340557
//AIzaSyDttqdubiQCKsGcu24-MBDSG9N-aFzxKJE
