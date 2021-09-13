let apiKey = "42f0bcde51c74ddc3104b6d9e9a46c4e";
var location = document.querySelector("city");
var formSubmitHandler = function (event) {
    event.preventDefault();
    console.log(event);
};

location.addEventListener("submit", formSubmitHandler);





function getWeather() {
    fetch("https://api.openweathermap.org/forecast?q=$Dallas&appid=$42f0bcde51c74ddc3104b6d9e9a46c4e")
        .then(function (res) {
            return res.json()
        }).then(function (data) {
            console.log(data);
        })
};