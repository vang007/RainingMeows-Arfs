// //let APIkey = "6ba1a36343cffd3493f18deba94fd15d";
var location = document.querySelector("#user-form");
var formSubmitHandler = function (event) {
    event.preventDefault();
    var searchValue = $("#city").val()
    getWeather(searchValue)
    console.log(event);
};

location.addEventListener("submit", formSubmitHandler);


function getWeather(cityName) {
    fetch("https://api.openweathermap.org/data/2.5/forecast?q={city name}&appid={b81b589ed5546b7432241c790dea82b9}")
        .then(function (res) {
            return res.json()
        }).then(function (data) {
            console.log(data);
        })
}

cityName()
//


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