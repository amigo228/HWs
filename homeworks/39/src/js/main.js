let weatherData = [];
const container = document.querySelector('.container');

weather();
function weather() {
    fetch('https://api.openweathermap.org/data/2.5/weather?units=metric&q=Miami&appid=522f7ec766b55c89fccbc47a4e7a72c0').then(response => {
        return response.json();
    }).then(data => {

        while (container.firstChild) {
            container.removeChild(container.firstChild);
        };


        window.localStorage.clear();
        weatherData = data;

        let city = weatherData.name;
        let temp = Math.round(weatherData.main.temp);
        let feelsLike = Math.round(weatherData.main.feels_like);
        let weatherStatus = weatherData.weather[0].main;
        let weatherIcon = data.weather[0].icon;

        window.localStorage.setItem("city", city);
        window.localStorage.setItem("temp", temp);
        window.localStorage.setItem("feelsLike", feelsLike);
        window.localStorage.setItem("weatherStatus", weatherStatus);
        window.localStorage.setItem("weatherIcon", weatherIcon);

        const block = `<div class = "weather"><strong>Weather:</strong>
                    <ul>
                    <li>City: ${city}</li>
                    <li>Temperature: ${temp} C</li>
                    <li>FeelsLike: ${feelsLike} C</li>
                    <li>WeatherStatus: ${weatherStatus}</li>
                    <li>
                    <img src="http://openweathermap.org/img/w/${weatherIcon}.png" alt="${weatherStatus}">
                    </li>
                    </ul>

                    </div>`;

        container.insertAdjacentHTML('beforeend', block);
        console.log(window.localStorage.timeNow);

    }).catch((error) =>
        console.log(error)
    )
}

setInterval(weather, 73000);









