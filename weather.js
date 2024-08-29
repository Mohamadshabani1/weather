const apiKey = "e6b3c60a848e613493f4213a4b816eb7";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const WeatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        document.querySelector(".error").style.display = "none";
    }
    
    var data = await response.json();


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°c';
    document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
    document.querySelector(".wind").innerHTML = data.wind.speed + 'km/h';


    //image update

    if (data.weather[0].main == "Clouds") {
        WeatherIcon.src = "/img/clouds.png";
    } else if (data.weather[0].main == "Clear") {
        WeatherIcon.src = "/img/clear.png";
    } else if (data.weather[0].main == "Rain") {
        WeatherIcon.src = "/img/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
        WeatherIcon.src = "/img/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
        WeatherIcon.src = "/img/mist.png";
    }



    document.querySelector(".weather").style.display = "block";

}


searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})


checkWeather()