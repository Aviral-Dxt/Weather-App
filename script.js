
const apiKey = "7f9256b9dc89f7b352cf743532809132";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=New%20Delhi&appid=7f9256b9dc89f7b352cf743532809132"
const input = document.querySelector(".searchBox input");
const btn = document.querySelector(".searchBox button");
// let city = "New Delhi"
const weatherIcon = document.querySelector(".weather-icon");

async function getWeatherDate(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();
    console.log(data);


    document.querySelector(".city").textContent = data.name;
    document.querySelector(".temp").textContent = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").textContent = data.main.humidity + "%";
    document.querySelector(".wind").textContent = data.wind.speed + " km/h";


    if (data.weather[0].main == "Clouds" || "Haze") {
        weatherIcon.src = "images/clouds.png"
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png"
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png"
    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png"
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/deizzle.png"
    }

}

btn.addEventListener("click", () => {
    getWeatherDate(input.value)
})


