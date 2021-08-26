// (function () {
//     navigator.geolocation.getCurrentPosition(function (position) {
//         console.log(position.coords.latitude)
//         console.log(position.coords.longitude)
//     },
//         function (error) {
//             console.log("Denied. :(")
//         })
// })();
var city = document.getElementById("city");
var currentWeather = document.getElementById('current-weather-status')


function getWeather(city) {
    const URL = 'https://api.openweathermap.org/'
    button.addEventListener("click", function () {
        fetch("https://api.openweathermap.org/data/2.5/weather?id=6167865&appid=42f0bcde51c74ddc3104b6d9e9a46c4e"

            .then(function (res) {
                return res.json()
            }).then(function (data) {
                console.log(data)
            }));
    })
}