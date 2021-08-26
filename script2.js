var getUserRepos = function (user) {
    // format the github api url
    var apiUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}';

    // make a get request to url
    fetch(apiUrl)
        .then(function (response) {
            // request was successful
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    console.log(data);
                    displayRepos(data, user);
                });
            } else {
                alert('Error: ' + response.statusText);
            }
        })
        .catch(function (error) {
            alert('Unable to connect to GitHub');
        });
};
