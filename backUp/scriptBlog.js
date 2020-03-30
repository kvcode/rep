window.onpageshow = function (event) {
  if (event.persisted) {
    window.location.reload(); //reload page if it has been loaded from cache
  }
};
function loging(){
var usn = document.getElementById('usn').value;
var psw = document.getElementById("psw").value;
if (usn == "banda" && psw == "banda") {
    location.href = "https://kvcode.github.io/rep/main.html"
    console.log("access granted");
} else {
    location.reload();
    console.log("denied")
 }
};
