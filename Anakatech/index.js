console.log("script loaded");

// delcare a var to store json data
let apiStr;

// declare a foo to return the JSON data upon inital loading
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

// set the data load to happen on initial loading
window.onload = loadJsonData();

// parse the JSON data into object
let apiObj = JSON.parse(apiStr);
// define a var to store the rates object
let ratesObj = apiObj.rates;
// define a var to store the EUR base
const baseStr = apiObj.base;

// generate array with all rates and values
let objArr = Object.entries(ratesObj);

let timesRun = 0;
let setValue = 1.0001;

// get all elements with classes rates

/* loop through the two-dims array manipulating the DOM
adding List item which includes the strings for Base, Currency and rate,
also add a span element around the rate value to easily manipulate it's
background later on */
let newObjArr = [];

let dispRatesBtn = () => {
  for (let i = 0; i < objArr.length; i++) {
    // declare the current currency
    let strRate = objArr[i][0];
    // delcare the current rate value and round it up to 4 decimals
    let nrRate = (Math.round(objArr[i][1] * 10000) / 10000).toFixed(4);
    // console.log(nrRate);
    newObjArr.push([strRate, nrRate]);

    // call display function
    displayListOfRates(strRate, nrRate);
  }
};

dispRatesBtn();

// declare function to adjust the display over set value

// Function to create list of rates with thei values
function displayListOfRates(el, rate) {
  let ratesList = document.getElementById("ratesList");
  let rateEntry = document.createElement("li");
  let spanEntry = document.createElement("span");
  spanEntry.className = "rates";
  rateEntry.appendChild(document.createTextNode(`${baseStr} / ${el} - `));
  if (rate > setValue) {
    spanEntry.appendChild(document.createTextNode(`${rate}`));
  } else {
    spanEntry.appendChild(document.createTextNode(`${setValue}`));
  }
  ratesList.appendChild(rateEntry);
  rateEntry.appendChild(spanEntry);
}

/* // Declare a function to increase with one
let increaseRateWithOne = () => {
  let ratesClassNode = document.querySelectorAll(".rates");
  console.log((timesRun = timesRun + 1));
  ratesClassNode.forEach((el) => {
    let elValue = parseFloat(el.innerHTML);
    let newValue = (Math.round((elValue + 0.0001) * 10000) / 10000).toFixed(4);
    el.innerHTML = newValue;
    el.style.backgroundColor = "#90ee90";
  });
}; */

let increaseRateWithOne = () => {
  let ratesClassNode = document.querySelectorAll(".rates");
  console.log(newObjArr);

  for (let j = 0; j < newObjArr.length; j++) {
    // declare the current currency
    let strRate = newObjArr[j][0];
    // delcare the current rate value and round it up to 4 decimals
    let parseNr = parseFloat(newObjArr[j][1]);
    let nrRate = (Math.round((parseNr + 0.0001) * 10000) / 10000).toFixed(4);
    // console.log(nrRate);
    // nrRate = parseFloat(nrRate) + 0.0001;
    console.log(nrRate);
    newObjArr[j][1] = nrRate;

    ratesClassNode[j].innerHTML = nrRate;

    newObjArr.push([strRate, nrRate]);
  }

  //   console.log(newObjArr);
};

// Declare a function to decrease with one
let DecreaseRateWithOne = () => {
  let ratesClassNode = document.querySelectorAll(".rates");
  console.log((timesRun = timesRun - 1));
  ratesClassNode.forEach((el) => {
    let elValue = parseFloat(el.innerHTML);
    let newValue = (Math.round((elValue - 0.0001) * 10000) / 10000).toFixed(4);
    el.innerHTML = newValue;
    el.style.backgroundColor = "#FF2E2E";
  });
};

// let bckgChng = document.querySelectorAll("rates");
// console.log(bckgChng);
// bckgChng.forEach()

let overalSwitch = true;

function adjustRate() {
  if (overalSwitch) {
    // bckgChng.style.background = "green";
    let setFiveSecInterval = setInterval(increaseRateWithOne, 500);

    // function logTimesRunInc() {
    //   console.log((timesRun = timesRun + 1));
    // }
    console.log((timesRun = timesRun + 1));

    setTimeout(() => {
      clearInterval(setFiveSecInterval);
      console.log(`timed at 12`);
      overalSwitch ? (overalSwitch = false) : (overalSwitch = true);
      console.log(overalSwitch);
    }, 5950);
  } else {
    // bckgChng.style.background = "red";
    let setFiveSecInterval = setInterval(DecreaseRateWithOne, 500);

    // function logTimesRun() {
    //   console.log((timesRun = timesRun - 1));
    // }
    console.log((timesRun = timesRun - 1));

    setTimeout(() => {
      clearInterval(setFiveSecInterval);
      console.log(`timed at 12`);
      overalSwitch ? (overalSwitch = false) : (overalSwitch = true);
      console.log(overalSwitch);
    }, 5950);
  }
}

// adjustRate();
// let oneMinInterval = setInterval(adjustRate, 6050);

// setTimeout(() => {
//   clearInterval(oneMinInterval);
// }, 30000);
