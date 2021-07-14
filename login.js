const arrow = document.querySelector(".fa-arrow-right")
arrow.addEventListener("click", function(){
    window.location = "signup.html"
})

const email = document.getElementById("email");
const password = document.getElementById("password");
const checkBox = document.getElementById("remember-me")
const LogInBtn = document.getElementById("LogIn")

const togglePassword = document.querySelector("#toggle-password");
togglePassword.addEventListener("click", function(e){
    // toggle the type attribute
    if (password.type === "password") {
    password.type = "text";
    this.classList.toggle("fa-eye-slash");
  } else {
    password.type = "password";
    this.classList.toggle("fa-eye-slash");
    
  }
});
const data = document.getElementById('LoginForm');
data.addEventListener('submit', function (e) {
  e.preventDefault()

fetch("https://trade-app-zuri.herokuapp.com/auth/token/login/", {
  method: "POST",
  body: JSON.stringify({
  email: email.value,
  password: password.value,
  }),
  redirect: "follow",
  headers: {
    "Content-Type": "application/json; charset=UTF-8"
  }
})
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error))
});

//remember me
LogInBtn.addEventListener('click' , function (){
  rememberMe();
})

function rememberMe() {
  if(checkBox.checked && email.value !== "" && password.value !== "") {
    localStorage.useremail = email.value;
    localStorage.userpassword = password.value;
    localStorage.checkbox =  checkBox.value
  } else {
    localStorage.useremail = "";
    localStorage.userpassword = "";
    localStorage.checkbox = "";
  }
}

if (localStorage.checkbox && localStorage.checkbox !=="") {
  checkBox.setAttribute("checked", "checked");
  email.value = localStorage.useremail;
  password.value = localStorage.userpassword;
} else {
  checkBox.removeAttribute("checked");
  email.value = "";
  password.value = "";
}