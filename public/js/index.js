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
// (function () {
//   var icon = document.querySelector(".icon"),
//       buttons = document.querySelectorAll("form button"),
//       isAnimate = false;
//   function iconAnim() {
//     if (isAnimate) {return; }
//     icon.classList.add("icon-anim");
//     isAnimate = true;
//     setTimeout(function () {
//       isAnimate = false;
//       icon.classList.remove("icon-anim");
//     }, 7000);
//   }
//   buttons.forEach(function (button) {
//     button.addEventListener("click", iconAnim);
//   });
// })();
const order = document.getElementById('submit');
order.addEventListener('click',(e)=>{
  e.preventDefault();

})
