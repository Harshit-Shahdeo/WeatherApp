const apikey = "7ea5f7bc57ca3847460362d79bc4c93f";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button"); 
const weatherIcon = document.querySelector("#icon");

async function checkweather(city){
    try{
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    if(!response.ok){
        throw new Error("City not found")
    }
    
    var data = await response.json();
    console.log(data);

    document.querySelector(".temp").innerHTML = data.main.temp + "°c";
    document.querySelector("#percentage").innerHTML = data.main.humidity + "%";
    document.querySelector("#speed").innerHTML = data.wind.speed + "km/h"
    document.querySelector(".desc").innerHTML = data.weather[0].description;
    document.querySelector(".cityname").innerHTML = data.name;
   
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "images/snow.png";
    }
    }
    catch(error){
        alert(error.message);
    }
}

searchButton.addEventListener("click", ()=>{
    checkweather(searchBox.value);
})

searchBox.addEventListener("keyup",(event)=>{
    if(event.key =="Enter"){
        checkweather(searchBox.value);
    }
})
