function initMap() {
  var location = {lat : 31.354676 , lng : 34.308826};
  var map      = new google.maps.Map(document.getElementById("map") , {
    zoom : 4 ,
    center : location
  });
  var maker =new google.maps.Marker({
    position : location ,
    map : map
  });
}
const order = document.getElementById('submit');
order.addEventListener('click',(e)=>{
  e.preventDefault();

})
