function togV() {
  var navToggle = document.getElementById("navigation");
  var sfToggle = document.getElementById("sectfoot");
  navToggle.classList.toggle("navT-toggle");
  sfToggle.classList.toggle("sf-toggle");
}

document.getElementById("burg").addEventListener("click", togV);

console.log("script loaded");

// class SimpleMaths {
//   mainFunction() {
//     let x = (5 * 4) % 3;
//     console.log(x);
//   }
// }

// 1 convert the decimal array into binary array
// define e.g. array
// DECARR = ELEMENTS
let decArr = [7, 8, 6, 5];
let binArr = [];
let twoDimBinArr = [];
let groupArr = [];
let unqGroupArr = [];
let binArrLength = 0;

decArr.forEach((el) => {
  binArr.push(el.toString(2).padStart(4, "0"));
});

// 2 for each el of the array count the nr of "1"
// 3 group(with two dim arr?) the items by nr of binary digits equal to 1 example...
// ... [[elements with one 1],[elements with two 1s], [elements with three 1s]]
binArr.forEach((el) => {
  let onesCounter = el.match(/1/g).length;
  groupArr.push(onesCounter);
});

console.log(`${groupArr} GROUP ARR`);

groupArr.forEach((el) => {
  if (!unqGroupArr.includes(el)) {
    unqGroupArr.push(el);
  }
});
unqGroupArr.sort();
console.log(`${unqGroupArr} uniqgroup`);

binArrLength = binArr.length + 1;
console.log(`${binArrLength}`);

for (let i = 0; i < unqGroupArr.length; i++) {
  //   twoDimBinArr.push(unqGroupArr[i]);
  twoDimBinArr[i] = [];

  for (let j = 0; j < binArr.length; j++) {
    // twoDimBinArr.push(unqGroupArr[i][j]);
    if (binArr[j].match(/1/g).length - 1 == i) {
      console.log(
        `${j} on ${i} match found a match with ${binArr[j]} and ${i}`
      );
      twoDimBinArr[i][j] = binArr[j];
      //   console.log(`${j} push ${unqGroupArr[j]} into the twoDimmArr[i][j]`);
    } else {
      console.log(`${j} on ${i} no match`);
    }
  }
}

console.log(twoDimBinArr);

// 4 convert the els into dec value and sort in ascending order
// 5 for each el of el in the two deam arr push the el of el into new one dim array
// return an array
// Consider Constraints if time????
