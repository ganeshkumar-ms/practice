const review = document.getElementById('review');
const display = document.getElementById('display');
const username = document.getElementById('username');

var input = "";

function store(){
    input = username.value;
    window.location = "taskDOM(2ndpage).html"
}
function demo(){
  display.innerHTML += "<li>"+input+"</li>";
  display.innerHTML += "<li> "+review.value+"</li>";
}