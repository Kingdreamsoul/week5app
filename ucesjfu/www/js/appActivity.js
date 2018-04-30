function menuClicked() {
alert("You clicked the menu");
}
function replaceGraphs() {
document.getElementById("graphdiv").innerHTML ="<img src='images/ucl.png'>"
}


               var mymap = L.map('mapid').setView([51.505, -0.09], 13);
               // load the tiles
       L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
                       maxZoom: 18,
                       attribution: 'Map data &copy; <ahref="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
                                '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,' +
                                'Imagery © <a href="http://mapbox.com">Mapbox</a>',
                         id: 'mapbox.streets'
                 }).addTo(mymap);
				 
var xhr; // define the global variable to process the AJAX request
function callDivChange() {
xhr = new XMLHttpRequest();
xhr.open("GET", "test2.html", true);
xhr.onreadystatechange = processDivChange;
try {
 xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
}
catch (e) {
// this only works in internet explorer
}
xhr.send();
} 
function processDivChange() {
if (xhr.readyState < 4) // while waiting response from server
 document.getElementById('mapid').innerHTML = "Loading...";
 else if (xhr.readyState === 4) { // 4 = Response from server has been completely loaded.
 if (xhr.status == 200 && xhr.status < 300)
// http status between 200 to 299 are all successful
 document.getElementById('mapid').innerHTML = xhr.responseText;
 }
}				 