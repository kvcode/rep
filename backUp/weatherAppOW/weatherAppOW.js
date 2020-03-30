let city, tempDescr, tempDeg, tempSpan, imgIcon;

tempDescr = document.querySelector('.temperature-description');
tempDeg = document.querySelector('.temperature-degree');
locTimeZone = document.querySelector('.location-timezone');
tempSpan = document.querySelector('.tempSpan');
imgIcon = document.getElementById('imgIcon');
city = document.getElementById('citySearch');

document.addEventListener('keypress', function(event) {
    if (event.keyCode === 13 || event.which === 13) {
        getWeatherAW();
        clearField();
    }
});

function clearField() {
    city.value = ' ';
}

async function getWeatherAW() {
    // const proxy = `https://cors-anywhere.herokuapp.com/`
    const apiHTTP = `api.openweathermap.org/data/2.5/weather?q=${city.value}&APPID=`;
    const apiKey = `de10bfbf4f173fd25da529ad620815d5`;
    const api = `https://${apiHTTP}${apiKey}`;
    // console.log(api);
    
    // CLEAR SERACH BOX
    
    try {
        const result = await fetch(api);
        const data = await result.json();
        console.log(data);
        
        const { temp } = data.main;
        const { description } = data.weather[0];

    //Set DOM
        let farenheit, celsius;
        farenheit = Math.round((temp - 273.15) * 9/5 + 32);
        celsius = Math.round(temp - 273.15);
        tempDeg.textContent = celsius;
        

        tempDescr.textContent = description;


        // A.K.A City, Area
        const { name } = data;
        const { country } = data.sys;
       
        locTimeZone.textContent = name + ', ' + country;
        


        //Set Icon
        // setIcons(icon, document.querySelector('.icon'));
        // http://openweathermap.org/img/wn/10d@2x.png
        const { icon } = data.weather[0];
     
        imgIcon.src = `http://openweathermap.org/img/wn/${icon}@2x.png`

        // change temp to Celsius/Farenheit
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

/* window.addEventListener('load', () => {
    let tempDescr, tempDeg, locTimeZone, tempSpan, city;
    
    tempDescr = document.querySelector('.temperature-description');
    tempDeg = document.querySelector('.temperature-degree');
    locTimeZone = document.querySelector('.location-timezone');
    tempSpan = document.querySelector('.degree-section span');

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {


            city = 'Ruse,bg';

            const proxy = `https://cors-anywhere.herokuapp.com/`
            // const apiHTTP = `https://api.darksky.net/forecast`
            // const apiKey = `39821ff0756d286f2b979a1e497ff60b`;

            const apiHTTP = `api.openweathermap.org/data/2.5/weather?q=${city}&APPID=`;
            const apiKey = `de10bfbf4f173fd25da529ad620815d5`;
            
            // const api = `${proxy}${apiHTTP}/${apiKey}/${lat},${long}`;
            const api = `${proxy}${apiHTTP}${apiKey}`;
            console.log(api);
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

}); */




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