
let apiKey = "6ba1a36343cffd3493f18deba94fd15d";
//    let api = "https://api.openweathermap.org/data/2.5/weather";      //
//    let apiKey = "6ba1a36343cffd3493f18deba94fd15d";      //

var location = document.querySelector("city");
var SubmitHandler = function (event) {
    event.preventDefault();
    console.log(event);
};

location.addEventListener("submit", SubmitHandler);





// function getWeather() {
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${"Dallas"}&appid=${apiKey}`)
//         .then(function (res) {
//             return res.json()
//         }).then(function (data) {
//             console.log(data);
//         })
// };


// let temperature = document.getElementById("temperature");
// let description = document.getElementById("description");
// let location = document.getElementById("location");



// let api = "http://api.openweathermap.org/data/2.5/";

// navigator.geolocation.getCurrentPosition(success, error);
// function success(position) {
//     console.log(position)
// }
// function error() {
//     console.log("error")
// }

getWeather()
