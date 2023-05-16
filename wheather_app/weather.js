const apiKey = "9011886c3ae50e9f0d0b1d9fda134d53";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")


async function checkWeather(city)
{
    const response = await fetch(apiUrl + city +  `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";


    if(data.weather[0].main == "clouds")
    {
        weatherIcon.src = "clouds1.png"
    }
    else if(data.weather[0].main == "Clear")
    {
        weatherIcon.src = "clear1.png"
    }
    else if(data.weather[0].main == "Rain")
    {
        weatherIcon.src = "rain1.png"
    }
    else if(data.weather[0].main == "Haze")
    {
        weatherIcon.src = "drizzle1.png"
    }
    else if(data.weather[0].main == "Mist")
    {
        weatherIcon.src = "mist1.png"
    }
} 

searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value);
})
