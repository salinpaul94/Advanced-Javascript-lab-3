const API = {
    KEY : "1dd9052073524d81809a21435dc506f3",
    BASE_URL : "https://api.openweathermap.org/data/2.5/weather"
}

let searchElem = document.querySelector(".search-box")

searchElem.addEventListener("keypress", setCityName)

function setCityName(e){
    
    if(e.keyCode == 13) {
        fetchWeatherData(searchElem.value)
    }
}

function fetchWeatherData(city) {
    
    fetch(`${API.BASE_URL}?q=${city}&appid=${API.KEY}&units=metric`)
    .then((res) => res.json())
    .then(res => displayResults(res))
}

function displayResults(weatherData){
    console.log(weatherData);
    let city = document.querySelector(".city")
    city.innerText = `${weatherData.name}, ${weatherData.sys.country}`

    let date = new Date();
    //console.log(date.getFullYear())
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    let currDate = `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`

    let dateElem = document.querySelector(".date")
    dateElem.innerText = currDate;

    let temp = document.querySelector(".temp")
    temp.innerHTML = Math.round(weatherData.main.temp) + "<span>°c</span>"

    let weather = document.querySelector(".weather")
    weather.innerText = weatherData.weather[0].main
    let hiLow = document.querySelector(".hi-low")
    hiLow.innerText = Math.round(weatherData.main.temp_min) + "°c / " + Math.round(weatherData.main.temp_max) +"°c"
}
