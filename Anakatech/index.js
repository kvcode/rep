// declare a var to store json data
let apiStr;

// declare a foo to return the JSON data upon inital load
function loadJsonData() {
  apiStr = `{
        "sucess": true,
        "timestamp": 1626358024,
        "base": "EUR",
        "date": "2021-07-15",
        "rates": {
            "AUD": 1.587608,
            "BGN": 1.955832,
            "GBP": 0.852723,
            "USD": 1.181998,
            "UYU": 51.973196,
            "UZS": 12570.550887,
            "VEF": 252746931045.85898,
            "VND": 27195.948945,
            "VUV": 130.160103,
            "WST": 3.016053,
            "XAG": 0.044949,
            "XAU": 0.000648,
            "XCD": 3.19441,
            "XDR": 0.830564
        }
    }`;
  return apiStr;
}

// set the data load to be performed on initial loading
window.onload = loadJsonData();

// parse the JSON data into object
const apiObj = JSON.parse(apiStr);
// define a var to store the rates object
const ratesObj = apiObj.rates;
// define a var to store the EUR base
const baseStr = apiObj.base;

// generate two-dims array with all rates and values
const objArr = Object.entries(ratesObj);

// declare a few more vars
let timesRun = 0;
let setValue = 0.0001;
let limitValue = 1.0001;
let newObjArr = [];
let overalSwitch = true;

/* Declare Foo to loop through the two-dims objArr manipulating the DOM,
adding List items which include the strings for Base, Currency and rate 
value, also add a span element around the rate value to easily manipulate
it's background later on. Push values into new array to be used later on*/
let initialDisplay = () => {
  for (let i = 0; i < objArr.length; i++) {
    // declare the current currency
    let strRate = objArr[i][0];
    // delcare the current rate value and round it up to 4 decimals
    let nrRate = (Math.round(objArr[i][1] * 10000) / 10000).toFixed(4);
    newObjArr.push([strRate, nrRate]);
    // call display function
    displayListOfRates(strRate, nrRate);
  }
};

// declare a function to create and display list of rates with their values
function displayListOfRates(el, rate) {
  let ratesList = document.getElementById('ratesList');
  let rateEntry = document.createElement('li');
  let spanEntry = document.createElement('span');
  spanEntry.className = 'rates';
  rateEntry.appendChild(document.createTextNode(`${baseStr} / ${el} - `));

  /* set conditional statement to adjust the 
    displayed value if lower than a set limitValue */
  if (rate > limitValue) {
    spanEntry.appendChild(document.createTextNode(`${rate}`));
  } else {
    spanEntry.appendChild(document.createTextNode(`${limitValue}`));
  }

  ratesList.appendChild(rateEntry);
  rateEntry.appendChild(spanEntry);
}

// declares foo to INCREASE values with 0.0001
let increaseRateWithOne = () => {
  let ratesClassNode = document.querySelectorAll('.rates');

  for (let j = 0; j < newObjArr.length; j++) {
    // delcare the current rate value and round it up to 4 decimals
    let parseNr = parseFloat(newObjArr[j][1]);
    let nrRate = (Math.round((parseNr + setValue) * 10000) / 10000).toFixed(4);

    // nrRate = parseFloat(nrRate) + 0.0001;
    newObjArr[j][1] = nrRate;

    if (nrRate > limitValue) {
      ratesClassNode[j].innerHTML = nrRate;
      ratesClassNode[j].style.backgroundColor = '#90ee90';
    } else {
      ratesClassNode[j].innerHTML = limitValue;
      ratesClassNode[j].style.backgroundColor = 'transparent';
    }
  }
//   timesRun = timesRun + 1;
//   console.log(timesRun);
};

// declares foo to DECREASE values with 0.0001
let decreaseRateWithOne = () => {
  let ratesClassNode = document.querySelectorAll('.rates');
  for (let k = 0; k < newObjArr.length; k++) {
    // delcare the current rate value and round it up to 4 decimals
    let parseNr = parseFloat(newObjArr[k][1]);
    let nrRate = (Math.round((parseNr - setValue) * 10000) / 10000).toFixed(4);
    // nrRate = parseFloat(nrRate) + 0.0001;
    newObjArr[k][1] = nrRate;

    if (nrRate > limitValue) {
      ratesClassNode[k].innerHTML = nrRate;
      ratesClassNode[k].style.backgroundColor = '#FF2E2E';
    } else {
      ratesClassNode[k].innerHTML = limitValue;
      ratesClassNode[k].style.backgroundColor = 'transparent';
    }
  }
//   timesRun = timesRun - 1;
//   console.log(timesRun);
};

function adjustRate() {
  let fiveSecInMs = 4995;
  let oneMinInMs = 60000;
  let setFiveSecInterval;

  if (overalSwitch) {
    setFiveSecInterval = setInterval(increaseRateWithOne, fiveSecInMs);

    setTimeout(() => {
      clearInterval(setFiveSecInterval);
      overalSwitch ? (overalSwitch = false) : (overalSwitch = true);
      console.log(`switch to ${overalSwitch}`);
    }, oneMinInMs);
  } else {
    setFiveSecInterval = setInterval(decreaseRateWithOne, fiveSecInMs);

    setTimeout(() => {
      clearInterval(setFiveSecInterval);
      overalSwitch ? (overalSwitch = false) : (overalSwitch = true);
      console.log(`switch to ${overalSwitch}`);
    }, oneMinInMs);
  }
}

// optional foo to check runtimes
let timeCheck = () => {
  let today = new Date();
  let date =
    today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  let time =
    today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  let dateTime = date + ' ' + time;

  return dateTime;
};

/* //////////////////////// */
/* Define a function which 
invokes all other functions
and call it */
/* //////////////////////// */

let invokeFunctions = () => {
//   console.log(`script started at ${timeCheck()}`);
  initialDisplay();
  adjustRate();

  let oneMinInterval = setInterval(adjustRate, 60050);

  setTimeout(() => {
    clearInterval(oneMinInterval);
    // console.log(`script at 5min ${timeCheck()}`);
  }, 300000);
};

invokeFunctions();
