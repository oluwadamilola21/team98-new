const email = document.getElementById("email");
const submit = document.querySelector(".btn-sign");

const data = document.getElementById('LoginForm');
data.addEventListener('submit', function (e) {
  e.preventDefault()
  console.log(email.value);
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var urlencoded = new URLSearchParams();
urlencoded.append("email", "");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};

fetch("https://trade-app-zuri.herokuapp.com/auth/users/reset_password/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
})