const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const apiKey = "bd5e378503939ddaee76f12ad7a97608"

const searchBox = document.querySelector(" input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city){
    const response = await fetch(apiUrl +city+`&appid=${apiKey}`)
    if(response.status == 404){
        document.querySelector(".error").style.display ="block"
        document.querySelector(".weather").style.display ="none"
    }
    else{

        var data = await response.json();
        // console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp+"ºc";
        document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
        if(data.weather[0].main == "Clouds"){
           weatherIcon.src = "img/images/clouds.png"
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "img/images/clear.png"
         }
         else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "img/images/rain.png"
         }
         else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "img/images/drizzle.png"
         }
         else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "img/images/mist.png"
         }
         document.querySelector(".weather").style.display ="block"
         document.querySelector(".error").style.display ="none"
    }
   
     

}


searchBtn.addEventListener('click',()=>{
   
    const cityName =searchBox.value;
    
    checkWeather(cityName);
})



