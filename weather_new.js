
//openWeather에서 키 값 받아오기
const API_KEY = '749629631edd50bcbbcfffdb60699fd3';


//user 위치 알아오고 날씨 받아오기 url로 전체 다

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    
    //user위치의 이름과 날씨만 가져오는 부분
    fetch(url)
        .then((Response) => Response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");

            weather.innerText = `${data.weather[0].main} @ ${data.main.temp}℃`;
            city.innerText = data.name;
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);