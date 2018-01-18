x444444function initMap() {
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
function buttonClicked() {
  const page_num = Math.floor(Math.random() * 200) + 1 ;
  getImages(page_num)
}
