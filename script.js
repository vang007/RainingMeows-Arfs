javascript in progress
//    let api = "https://api.openweathermap.org/data/2.5/weather";      //
//    let apiKey = "6ba1a36343cffd3493f18deba94fd15d";      //

function getWeather() {
    let temperature = document.getElementById("temperature");
    let description = document.getElementById("description");
    let location = document.getElementById("location");
}


let api = "http://api.openweathermap.org/data/2.5/";
let apiKey = "6ba1a36343cffd3493f18deba94fd15d";

navigator.geolocation.getCurrentPosition(success, error);

function success(position) {
    console.log(position)
}
function error() {
    console.log("error")
}

getWeather;