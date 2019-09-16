function togV() {
    var navToggle = document.getElementById("navigation");
    var sfToggle = document.getElementById("sectfoot");
    navToggle.classList.toggle("navT-toggle");
    sfToggle.classList.toggle("sf-toggle");
}

document.getElementById("burg").addEventListener("click", togV);