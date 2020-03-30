
window.addEventListener('load', () => {
    let long, lat, tempDescr, tempDeg, locTimeZone, tempSpan;
    
    tempDescr = document.querySelector('.temperature-description');
    tempDeg = document.querySelector('.temperature-degree');
    locTimeZone = document.querySelector('.location-timezone');
    tempSpan = document.querySelector('.degree-section span');

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {

            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = `https://cors-anywhere.herokuapp.com/`
            const apiHTTP = `https://api.darksky.net/forecast`
            const apiKey = `39821ff0756d286f2b979a1e497ff60b`;
            const api = `${proxy}${apiHTTP}/${apiKey}/${lat},${long}`;

            async function getWeatherAW() {
                try {
                    const result = await fetch(api);
                    const data = await result.json();

                    console.log(data);

                    const { temperature, summary, icon } = data.currently;
                    //Set DOM
                    farenheit = Math.round(temperature * 10) / 10;
                    tempDeg.textContent = farenheit;
                    
                    tempDescr.textContent = summary;
                    locTimeZone.textContent = data.timezone;
                    
                    //Formula for Celsius
                    let celsius = Math.round((temperature - 32) * (5 / 9) * 10) / 10;

                    //Set Icon
                    setIcons(icon, document.querySelector('.icon'));

                    //change temp to Celsius/Farenheit
                    tempSpan.addEventListener('click', () =>  {
                    tempSpan.textContent === "F"  ? tempSpan.textContent = "C" : tempSpan.textContent = "F";
                    
                    if (tempSpan.textContent === "F") {
                        tempDeg.textContent = farenheit;
                    } else {
                        tempDeg.textContent = celsius;
                    }
                    
                     });

                    return data;
                } catch (error) {
                    alert(error);
                }
            }
            getWeatherAW();
        })
    } else {
        h1.textContent = "hey allow your location"
    }
    
    function setIcons(icon, iconID) {
        const skycons = new Skycons({color: "white"});
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);
    }

});























// e.g. of api call -> api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=de10bfbf4f173fd25da529ad620815d5
// async function getWeather() {
//     try {
//         //const result = await fetch(`api.openweathermap.org/data/2.5/weather?q=${woeid}&APPID=de10bfbf4f173fd25da529ad620815d5`);
//         const callExample = `api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=de10bfbf4f173fd25da529ad620815d5`;
//         const result = await fetch(callExample);
//         console.log(result);
//         return result;
//     } catch (error) {
//         alert(error);
//     }
// }

// getWeather();